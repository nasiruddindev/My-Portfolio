import React, { useState, useEffect } from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import Logo from '../assets/logo.png'
import ListItem from '../components/ListItem'
import { ImCross } from 'react-icons/im'
import { IoMenu } from 'react-icons/io5'

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="sticky top-0 z-50">
      <nav
        className={`w-full transition-all duration-300 ease-in-out ${
          scrolled
            ? 'bg-white/90 backdrop-blur-md py-3 shadow-md border-b border-slate-400/50'
            : 'bg-slate-400 backdrop-blur-sm py-5 shadow-none'
        }`}
      >
        <Container>
          <div className="relative px-4 md:px-0">
            {/* Desktop Navbar */}
            <Flex className="hidden md:flex justify-between items-center">
              <a href="#home" className="transition-transform duration-300 hover:scale-105">
                <Image src={Logo} className="w-40 transition-all duration-300" />
              </a>
              <div>
                <ul className="flex gap-x-10">
                  <a href="#home">
                    <ListItem text="Home" className="hover:text-blue-600 transition-colors" />
                  </a>
                  <a href="#about">
                    <ListItem text="About" className="hover:text-blue-600 transition-colors" />
                  </a>
                  <a href="#skills">
                    <ListItem text="Skills" className="hover:text-blue-600 transition-colors" />
                  </a>
                  <a href="#project">
                    <ListItem text="Project" className="hover:text-blue-600 transition-colors" />
                  </a>
                  <a href="#contact">
                    <ListItem text="Contact" className="hover:text-blue-600 transition-colors" />
                  </a>
                </ul>
              </div>
            </Flex>

            {/* Mobile Navbar */}
            <Flex className="md:hidden justify-between items-center px-2">
              <a href="#home" onClick={() => setOpen(false)}>
                <Image src={Logo} className="w-36" />
              </a>
              <button

                onClick={() => setOpen(!open)}
                aria-label="Toggle Menu"
              >
                {open ? (
                  <ImCross className="text-xl text-slate-800 transition-transform duration-300 rotate-90" />
                ) : (
                  <IoMenu className="text-3xl text-slate-900 transition-transform duration-300" />
                )}
              </button>
            </Flex>

            {/* Mobile Menu Dropdown */}
            <div
              className={`absolute top-full left-0 right-0 w-full mt-3 bg-sky-100 backdrop-blur-lg  shadow-xl border border-slate-200/50 p-6 transition-all duration-300 ease-in-out md:hidden ${
                open
                  ? 'translate-y-0 opacity-100 visible'
                  : '-translate-y-4 opacity-0 invisible'
              }`}
            >
              <ul className="flex flex-col items-center gap-y-5">
                <a href="#home" className="w-full text-center" onClick={() => setOpen(false)}>
                  <ListItem text="Home" className="text-slate-900 font-semibold py-2 hover:bg-slate-50 rounded-lg transition-colors w-full block" />
                </a>
                <a href="#about" className="w-full text-center" onClick={() => setOpen(false)}>
                  <ListItem text="About" className="text-slate-900 font-semibold py-2 hover:bg-slate-50 rounded-lg transition-colors w-full block" />
                </a>
                <a href="#skills" className="w-full text-center" onClick={() => setOpen(false)}>
                  <ListItem text="Skills" className="text-slate-900 font-semibold py-2 hover:bg-slate-50 rounded-lg transition-colors w-full block" />
                </a>
                <a href="#project" className="w-full text-center" onClick={() => setOpen(false)}>
                  <ListItem text="Project" className="text-slate-900 font-semibold py-2 hover:bg-slate-50 rounded-lg transition-colors w-full block" />
                </a>
                <a href="#contact" className="w-full text-center" onClick={() => setOpen(false)}>
                  <ListItem text="Contact" className="text-slate-900 font-semibold py-2 hover:bg-slate-50 rounded-lg transition-colors w-full block" />
                </a>
              </ul>
            </div>
          </div>
        </Container>
      </nav>
    </section>
  )
}

export default Navbar
