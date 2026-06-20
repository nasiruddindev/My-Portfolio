import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Title from '../components/Title'
import { RiContactsLine } from 'react-icons/ri'
import Pera from '../components/Pera'

const Contact = () => {
  return (
    <section className="py-20">
      <Container>
        <Flex className="items-center gap-x-5 justify-center">
          <RiContactsLine className="text-4xl" />

          <Title text="Contact" className="text-center " />
        </Flex>
        <Pera
          text="
        Feel Free to Contact me buy submitting the from below and I will get back to you as soon ass possible"
          className="max-w-150 text-center mx-auto py-3"
        />

        <Flex className="justify-between items-center mt-10 ">
          <div className="w-6/12">
            <Title
              text="Find Me easily Contact without any technical skills" className="w-100 text-center leading-16"/>
          </div>

          <div className="w-6/12">
            <div className=' bg-white shadow-2xl rounded-2xl p-5 w-10/12'>
              <form action="" className='flex flex-col'>
              <label className='text-xl text-primary font-inter font-semibold pb-2'>Name:</label>
              <input type="text" placeholder='Enter Your Name' className='border-none outline-none bg-sky-200 px-3 py-1 rounded mb-3 placeholder:text-black/50 w-full placeholder:font-medium placeholder:font-inter placeholder:text-base'/>


              <label className='text-xl text-primary font-inter font-semibold pb-2'>Email:</label>
              <input type="text" placeholder='Enter Your Email' className='border-none outline-none bg-sky-200 px-3 py-1 rounded mb-3 placeholder:text-black/50 w-full placeholder:font-medium placeholder:font-inter placeholder:text-base'/>


              <label className='text-xl text-primary font-inter font-semibold pb-2'>Name:</label>
              <textarea type="text" placeholder='Enter Your Message' className='border-none outline-none bg-sky-200 px-3 py-1 rounded mb-3 placeholder:text-black/50 w-full placeholder:font-medium placeholder:font-inter placeholder:text-base'/>

              <input type="submit" className='border-none outline-none bg-blue-700 text-white px-3 py-3 rounded mt-5'/>

            </form>
            </div>
          </div>
        </Flex>
      </Container>
    </section>
  )
}

export default Contact
