import React from 'react'
import Container from '../components/Container'
import Title from '../components/Title'
import Flex from '../components/Flex'
import { TiStarburst } from 'react-icons/ti'
import { FaBootstrap, FaCss3, FaHtml5, FaReact } from 'react-icons/fa6'
import { SiTailwindcss } from 'react-icons/si'
import { IoLogoJavascript } from 'react-icons/io'

const Skills = () => {
  return (
    <section className="py-20">
      <Container>
        <Title text="Skills" className="text-center pb-5" />

        <div className="shadow-2xl p-10 w-8/12 mx-auto bg-white">
          <h3 className="text-primary text-3xl font-inter font-bold text-center pb-5">
            Frontend developer
          </h3>

          <Flex className="justify-evenly mt-5">
            <Flex className="flex-col gap-y-6">
            <Flex className="gap-x-2 items-center shadow-xl p-3 rounded-2xl">
              <FaHtml5 className='text-xl'/>
              <h5 className="text-2xl text-primary font-medium  font-inter">
                HTML
              </h5>
            </Flex>
            <Flex className="gap-x-2 items-center shadow-xl p-3 rounded-2xl">
              <FaCss3  className='text-xl'/>
              <h5 className="text-2xl text-primary font-medium  font-inter">
                CSS
              </h5>
            </Flex>
            <Flex className="gap-x-2 items-center shadow-xl p-3 rounded-2xl">
              <FaBootstrap  className='text-xl'/>
              <h5 className="text-2xl text-primary font-medium  font-inter">
                BOOTSTRAP
              </h5>
            </Flex>
          </Flex>


          <Flex className="flex-col gap-y-6">
            <Flex className="gap-x-2 items-center shadow-xl p-3 rounded-2xl">
              <SiTailwindcss  className='text-xl'/>
              <h5 className="text-2xl text-primary font-medium  font-inter">
                Tailwind
              </h5>
            </Flex>
            <Flex className="gap-x-2 items-center shadow-xl p-3 rounded-2xl">
              <IoLogoJavascript   className='text-xl'/>
              <h5 className="text-2xl text-primary font-medium  font-inter">
                JavaScript
              </h5>
            </Flex>
            <Flex className="gap-x-2 items-center shadow-xl p-3 rounded-2xl">
              <FaReact  className='text-xl'/>
              <h5 className="text-2xl text-primary font-medium  font-inter">
                React
              </h5>
            </Flex>
          </Flex>
          </Flex>
        </div>
      </Container>
    </section>
  )
}

export default Skills
