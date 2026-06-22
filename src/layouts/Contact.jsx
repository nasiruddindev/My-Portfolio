import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Title from '../components/Title'
import { RiContactsLine } from 'react-icons/ri'
import Pera from '../components/Pera'
import Input from '../components/Input'
import Button from '../components/Button'

const Contact = () => {
  return (
    <section className="py-20">
      <Container>
        <Flex className="items-center gap-x-3 md:gap-x-5 justify-center">
          <RiContactsLine className="text-2xl md:text-4xl" />

          <Title text="Contact" className="text-center " />
        </Flex>
        <Pera
          text="
        Feel Free to Contact me buy submitting the from below and I will get back to you as soon ass possible"
          className="max-w-150 text-center px-5 mx-auto  py-3"
        />

        <Flex className="flex-col md:flex-row gap-y-5 md:gap-y-0 justify-between items-center mt-5 md:mt-10 ">
          <div className="md:w-6/12">
            <Title
              text="Find Me easily Contact without any technical skills" className="max-w-100 text-center leading-10 md:leading-16"/>
          </div>

          <div className="md:w-6/12">
            <div className=' bg-white shadow-2xl rounded-2xl p-5 w-screen sm:w-100 md:w-10/12'>
              <form action="" className='flex flex-col'>
              <label className='text-xl text-primary font-inter font-semibold pb-2'>Name:</label>
              <Input text="Enter Your name" className=""/>


              <label className='text-xl text-primary font-inter font-semibold pb-2'>Email:</label>
              <Input text="Enter Your Email"/>


              <label className='text-xl text-primary font-inter font-semibold pb-2'>Message:</label>
              <textarea type="text" placeholder='Enter Your Message' className='border-none outline-none bg-sky-200 px-3 py-1 rounded mb-3 placeholder:text-black/50 w-full placeholder:font-medium placeholder:font-inter placeholder:text-base'/>

              <Button text="Submit"/>

            </form>
            </div>
          </div>
        </Flex>
      </Container>
    </section>
  )
}

export default Contact
