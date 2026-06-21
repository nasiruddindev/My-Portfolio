import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

const RootLayouts = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default RootLayouts
