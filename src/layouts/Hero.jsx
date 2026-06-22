import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Button from '../components/Button'
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa6'
import Banner from '../assets/banner.png'
import Image from '../components/Image'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section className="bg-slate-400">
      <Container>
          <div>
            <h1 className="text-center text-primary font-bold font-inter text-2xl md:text-5xl py-5">
              Hi I'm
              <span className="text-blue-700 pl-3 text-3xl md:text-6xl">
                Nasir Uddin
              </span>
            </h1>

            <p className="text-secondary text-xl px-4 md:px-0 text-center  md:text-2xl font-medium font-inter max-w-110 mx-auto">
              I build modern,responsive and user friendlly web applications with
              React
            </p>
            <div className='py-6 text-center'>
              <Button text="Resume" />
            </div>

            <div className='flex gap-x-3  justify-center pb-10 '>
              <Link to="https://github.com/nasiruddindev" target='_blank'>
              <div className="border border-black/50 w-8 md:w-10 h-8 md:h-10  rounded-full flex justify-center items-center cursor-pointer">
              <FaGithub className='text-xl md:text-2xl '/>
            </div>
              </Link>


            <Link to="https://www.linkedin.com/in/devnasiruddin/" target='_blank'>
            <div className="border border-black/50 w-8 md:w-10 h-8 md:h-10  rounded-full flex justify-center items-center cursor-pointer">
              <FaLinkedinIn  className='text-xl md:text-2xl '/>
            </div>
            </Link>


            <Link to="https://x.com/nasiruddindev" target="_blank">
            <div className="border border-black/50 w-8 md:w-10 h-8 md:h-10  rounded-full flex justify-center items-center cursor-pointer">
              <FaTwitter  className='text-xl md:text-2xl '/>
            </div>
            </Link>

            </div>


          </div>
      </Container>
    </section>
  )
}

export default Hero
