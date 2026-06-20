import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Button from '../components/Button'
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa6'
import Banner from '../assets/banner.png'
import Image from '../components/Image'

const Hero = () => {
  return (
    <section className="bg-slate-400">
      <Container>
        <Flex className="items-center">
          <div className="w-6/12">
            <h1 className="text-primary font-bold font-inter text-5xl py-5">
              Hi I'm <br />
              <span className="text-blue-700  text-6xl">
                Nasir Uddin
              </span>
            </h1>

            <p className="text-secondary text-2xl font-medium font-inter max-w-110">
              I build modern,responsive and user friendlly web applications with
              React
            </p>
            <div className='py-6'>
              <Button text="Download Cv" />
            </div>

            <div className='flex gap-x-5'>
              <div className="border border-black/50 w-12 h-12  rounded-full flex justify-center items-center">
              <FaGithub className='text-3xl '/>
            </div>


            <div className="border border-black/50 w-12 h-12  rounded-full flex justify-center items-center">
              <FaLinkedinIn  className='text-3xl '/>
            </div>
            <div className="border border-black/50 w-12 h-12  rounded-full flex justify-center items-center">
              <FaTwitter  className='text-3xl '/>
            </div>
            </div>


          </div>

          <div className="w-6/12">
          <Image src={Banner} className="w-full "/>
          </div>
        </Flex>
      </Container>
    </section>
  )
}

export default Hero
