import React, { useState, useEffect, useRef, useCallback, useLayoutEffect } from 'react'
import ProjectCard from './ProjectCard'

// ─── Constants ─────────────────────────────────────────────────────────────────
const GAP = 24             // px — matches gap-6
const DURATION = 480       // ms
const EASE = 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'

// ─── Responsive visible-count hook ────────────────────────────────────────────
function useVisibleCount() {
  const get = () => {
    if (typeof window === 'undefined') return 3
    if (window.innerWidth < 768) return 1
    if (window.innerWidth < 1024) return 2
    return 3
  }
  const [count, setCount] = useState(get)
  useEffect(() => {
    const handler = () => setCount(get())
    window.addEventListener('resize', handler)
    return () => window.removeEventListener('resize', handler)
  }, [])
  return count
}

// ─── Arrow button ──────────────────────────────────────────────────────────────
const ArrowBtn = ({ onClick, disabled, label, children }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    aria-label={label}
    className={[
      'shrink-0 w-11 h-11 flex items-center justify-center rounded-full border-2',
      'transition-all duration-200 select-none',
      disabled
        ? 'border-slate-200 text-slate-300 cursor-not-allowed bg-white'
        : 'border-blue-500 text-blue-600 bg-white hover:bg-blue-600 hover:text-white',
      !disabled && 'hover:border-blue-600 shadow-sm shadow-blue-200 active:scale-95 cursor-pointer',
    ].filter(Boolean).join(' ')}
  >
    {children}
  </button>
)

// ─── ProjectSlider ─────────────────────────────────────────────────────────────
//
// HOW THE ILLUSION WORKS
// ──────────────────────
// We always render visibleCount + 1 cards. The last one sits just off
// the right edge, hidden by overflow-hidden on the viewport.
//
// NEXT:
//   1. Animate the track left by (cardWidth + GAP).
//      During the animation the user sees cards [i] exiting left while
//      card [i + N] enters from the right — a real, continuous slide.
//   2. After the animation timer fires, we:
//        • set pendingAction = 'next-reset'
//        • call setStartIndex(i + 1)
//   3. useLayoutEffect (runs synchronously, before the next browser paint):
//        • snaps transform back to 0 with NO transition
//        • the new card window [i+1 … i+N+1] renders at position 0
//        • the user sees nothing — the snap is invisible ✓
//
// PREV:
//   1. Decrement startIndex immediately (renders new first card at position 0).
//   2. useLayoutEffect:
//        • instantly offsets track to -(cardWidth + GAP), no transition
//          → user still sees the original window
//        • forces a reflow (getBoundingClientRect)
//        • adds transition and animates to translateX(0)
//          → new card slides in from the left while rightmost card exits ✓

const ProjectSlider = ({ projects }) => {
  const visibleCount  = useVisibleCount()
  const [startIndex, setStartIndex]  = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [cardWidth,   setCardWidth]   = useState(0)

  const containerRef   = useRef(null)
  const trackRef       = useRef(null)
  const pendingAction  = useRef(null)   // 'next-reset' | 'prev-animate'
  const timerRef       = useRef(null)

  const maxStart    = Math.max(0, projects.length - visibleCount)
  const canPrev     = startIndex > 0 && !isAnimating
  const canNext     = startIndex < maxStart && !isAnimating
  const slideAmount = cardWidth + GAP

  // ── Measure card width from container ──────────────────────────────────────
  const measure = useCallback(() => {
    if (!containerRef.current) return
    const w = containerRef.current.offsetWidth
    setCardWidth((w - GAP * (visibleCount - 1)) / visibleCount)
  }, [visibleCount])

  useLayoutEffect(() => { measure() }, [measure])

  useEffect(() => {
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [measure])

  // ── Reset on category switch ───────────────────────────────────────────────
  useEffect(() => {
    clearTimeout(timerRef.current)
    setStartIndex(0)
    setIsAnimating(false)
    pendingAction.current = null
    if (trackRef.current) {
      trackRef.current.style.transition = 'none'
      trackRef.current.style.transform  = 'translateX(0)'
    }
  }, [projects])

  useEffect(() => () => clearTimeout(timerRef.current), [])

  // ── NEXT ───────────────────────────────────────────────────────────────────
  const goNext = useCallback(() => {
    if (!canNext || cardWidth === 0) return
    setIsAnimating(true)

    // Step 1: slide the whole track left — card[i] exits, card[i+N] enters
    trackRef.current.style.transition = `transform ${DURATION}ms ${EASE}`
    trackRef.current.style.transform  = `translateX(-${slideAmount}px)`

    timerRef.current = setTimeout(() => {
      // Step 2: advance index; useLayoutEffect will snap transform to 0
      pendingAction.current = 'next-reset'
      setStartIndex(prev => prev + 1)
    }, DURATION)
  }, [canNext, cardWidth, slideAmount])

  // ── PREV ───────────────────────────────────────────────────────────────────
  const goPrev = useCallback(() => {
    if (!canPrev) return
    setIsAnimating(true)
    // Step 1: decrement index so the new first card is rendered in the DOM
    pendingAction.current = 'prev-animate'
    setStartIndex(prev => prev - 1)
  }, [canPrev])

  // ── DOM sync — runs after every render, before the browser paints ──────────
  useLayoutEffect(() => {
    const action = pendingAction.current
    if (!action || !trackRef.current) return
    pendingAction.current = null

    if (action === 'next-reset') {
      // Cards are re-rendered at the new window; invisibly snap transform to 0
      trackRef.current.style.transition = 'none'
      trackRef.current.style.transform  = 'translateX(0)'
      setIsAnimating(false)
    }

    if (action === 'prev-animate') {
      // New first card is in the DOM but we want the user to still see the
      // OLD window first, then animate the new card in from the left.
      trackRef.current.style.transition = 'none'
      trackRef.current.style.transform  = `translateX(-${slideAmount}px)`

      // Force reflow — without this, the browser may batch the two style changes
      void trackRef.current.getBoundingClientRect()

      // Now animate: slide right to 0 → new card enters from left
      trackRef.current.style.transition = `transform ${DURATION}ms ${EASE}`
      trackRef.current.style.transform  = 'translateX(0)'

      timerRef.current = setTimeout(() => setIsAnimating(false), DURATION)
    }
  }, [startIndex, slideAmount])

  // Render visibleCount + 1 cards so the incoming card is always in the DOM
  const visibleCards = projects.slice(startIndex, startIndex + visibleCount + 1)

  return (
    <div className="mt-12 md:mt-16 w-full">

      {/* Track + arrows */}
      <div className="flex items-center gap-3 md:gap-5">

        <ArrowBtn onClick={goPrev} disabled={!canPrev} label="Previous projects">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
          </svg>
        </ArrowBtn>

        {/* Clipping viewport */}
        <div ref={containerRef} className="flex-1 overflow-hidden">
          {cardWidth > 0 && (
            <div
              ref={trackRef}
              style={{
                display: 'flex',
                gap: `${GAP}px`,
                willChange: 'transform',
              }}
            >
              {visibleCards.map((project) => (
                <div
                  key={project.id}
                  style={{ width: `${cardWidth}px`, flexShrink: 0 }}
                >
                  <ProjectCard
                    image={project.image}
                    alt={project.title}
                    title={project.title}
                    description={project.description}
                    liveUrl={project.live}
                    githubUrl={project.github}
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        <ArrowBtn onClick={goNext} disabled={!canNext} label="Next projects">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
          </svg>
        </ArrowBtn>

      </div>

      {/* Dot indicators */}
      {projects.length > visibleCount && (
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: maxStart + 1 }).map((_, i) => (
            <button
              key={i}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => {
                if (i === startIndex || isAnimating) return
                if (i > startIndex) goNext()
                else goPrev()
              }}
              className={[
                'rounded-full transition-all duration-300 cursor-pointer',
                i === startIndex
                  ? 'w-6 h-2.5 bg-blue-600'
                  : 'w-2.5 h-2.5 bg-slate-300 hover:bg-blue-300',
              ].join(' ')}
            />
          ))}
        </div>
      )}

    </div>
  )
}

export default ProjectSlider
