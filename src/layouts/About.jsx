import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Title from '../components/Title'
import Pera from '../components/Pera'
import { IoIosContact } from 'react-icons/io'
import { IoLocationOutline } from 'react-icons/io5'
import { MdOutlineEmail, MdOutlineEventAvailable } from 'react-icons/md'

const About = () => {
  return (
    <section className="py-20 bg-sky-100">
      <Container>
        <Flex className="flex-col gap-y-10 md:gap-y-0 md:flex-row items-center">
          <div className="md:w-6/12">
            <Title text="About Me" className="text-center md:text-start"/>
            <p className="text-secondary text-xl px-4 md:px-0 text-center md:text-start md:text-2xl font-medium font-inter max-w-130 mx-auto md:mx-0 py-5">
              I'm a Passionate Frontend React Developer Who loves to create  beautiful and functional web experience
            </p>
            <Pera text="I enjoy turning ideas into real products. I have experience building web appllications using React,JavaScript,Tailwind CSS and modern tools" className="max-w-125 text-center md:text-start px-3 md:px-0"/>
          </div>

          <div className="md:w-6/12">
          <div className='shadow-2xl p-3 md:py-10 lg:p-10 flex flex-col gap-y-6 bg-white rounded md:rounded-2xl'>


            <div className='flex justify-between'>
              <div className='flex gap-x-1 md:gap-x-2 items-center'>
                <IoIosContact className='text-xl md:text-2xl'/>
                <p className='text-primary text-base md:text-xl font-medium font-inter'>Name :</p>

              </div>
              <p className='text-primary text-base md:text-xl font-medium font-inter'>Nasir Uddin</p>
            </div>
            <div className='flex justify-between'>
              <div className='flex gap-x-1 md:gap-x-2 items-center'>
                <IoLocationOutline  className='text-xl md:text-2xl'/>
                <p className='text-primary text-base md:text-xl font-medium font-inter'>Location :</p>

              </div>
              <p className='text-primary text-base md:text-xl font-medium font-inter'>Dhaka,Bangladesh</p>
            </div>
            <div className='flex justify-between'>
              <div className='flex gap-x-1 md:gap-x-2 items-center'>
                <MdOutlineEmail  className='text-xl md:text-2xl'/>
                <p className='text-primary text-base md:text-xl font-medium font-inter'>Email :</p>

              </div>
              <p className='text-primary text-base md:text-xl font-medium font-inter'>dev.nasiruddin@gmail.com</p>
            </div>
            <div className='flex justify-between'>
              <div className='flex gap-x-1 md:gap-x-2 items-center'>
                <MdOutlineEventAvailable  className='text-xl md:text-2xl'/>
                <p className='text-primary text-base md:text-xl font-medium font-inter'>Availability :</p>

              </div>
              <p className='text-green-600 text-base md:text-xl font-medium font-inter'>Open to work</p>
            </div>


          </div>
          </div>
        </Flex>
      </Container>
    </section>
  )
}

export default About
