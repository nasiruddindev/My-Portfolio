import React from 'react'
import Container from '../components/Container'
import Image from '../components/Image'
import Logo from '../assets/logo.png'
import Flex from '../components/Flex'
import { FaFacebook, FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa6'

const Footer = () => {
  return (
    <section className='bg-slate-400 py-5'>
      <Container>
        <Flex className="justify-between items-center">
          <div>
            <Image src={Logo} className="w-50"/>
          </div>

          <p className='text-xl font-pop font-semibold text-primary '>Nasir Uddin, All Rights Reserved.</p>
          <div className='flex gap-x-5'>
            <FaGithub className='text-2xl'/>
            <FaLinkedinIn className='text-2xl'/>
            <FaTwitter className='text-2xl'/>
            <FaFacebook className='text-2xl'/>
          </div>
        </Flex>
      </Container>
    </section>
  )
}

export default Footer
