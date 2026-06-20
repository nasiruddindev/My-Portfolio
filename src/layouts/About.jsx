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
    <section className="py-20">
      <Container>
        <Flex className="items-center">
          <div className="w-6/12">
            <Title text="About Me" />
            <p className="text-secondary text-2xl font-medium font-inter max-w-130 py-5">
              I'm a Passionate Frontend React Developer Who loves to create  beautiful and functional web experience
            </p>
            <Pera text="I enjoy turning ideas into real products. I have experience building web appllications using React,JavaScript,Tailwind CSS and modern tools" className="max-w-125"/>
          </div>

          <div className="w-6/12">
          <div className='shadow-2xl p-10 flex flex-col gap-y-6'>


            <div className='flex justify-between'>
              <div className='flex gap-x-2 items-center'>
                <IoIosContact className='text-2xl'/>
                <p className='text-primary text-xl font-medium font-inter'>Name :</p>

              </div>
              <p className='text-primary text-xl font-medium font-inter'>Nasir Uddin</p>
            </div>
            <div className='flex justify-between'>
              <div className='flex gap-x-2 items-center'>
                <IoLocationOutline  className='text-2xl'/>
                <p className='text-primary text-xl font-medium font-inter'>Location :</p>

              </div>
              <p className='text-primary text-xl font-medium font-inter'>Dhaka,Bangladesh</p>
            </div>
            <div className='flex justify-between'>
              <div className='flex gap-x-2 items-center'>
                <MdOutlineEmail  className='text-2xl'/>
                <p className='text-primary text-xl font-medium font-inter'>Email :</p>

              </div>
              <p className='text-primary text-xl font-medium font-inter'>dev.nasiruddin@gmail.com</p>
            </div>
            <div className='flex justify-between'>
              <div className='flex gap-x-2 items-center'>
                <MdOutlineEventAvailable  className='text-2xl'/>
                <p className='text-primary text-xl font-medium font-inter'>Availability :</p>

              </div>
              <p className='text-green-600 text-xl font-medium font-inter'>Open to work</p>
            </div>


          </div>
          </div>
        </Flex>
      </Container>
    </section>
  )
}

export default About
