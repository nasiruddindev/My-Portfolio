import React from 'react'
import Navbar from '../layouts/Navbar'
import Hero from '../layouts/Hero'
import About from '../layouts/About'
import Skills from '../layouts/Skills'
import Projects from '../layouts/Projects'
import Contact from '../layouts/Contact'
import Footer from '../layouts/Footer'

const Home = () => {
  return (
    <div>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  )
}

export default Home
