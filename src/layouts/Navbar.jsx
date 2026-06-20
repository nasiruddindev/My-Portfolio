import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import Logo from '../assets/logo2.png'
import ListItem from '../components/ListItem'

const Navbar = () => {
  return (
    <section className='bg-slate-400 py-5'>
      <Container>
        <Flex className="justify-between items-center">
          <div>
            <Image src={Logo} className="w-50 "/>
          </div>
          <div>
            <ul className='flex gap-x-10'>
              <ListItem text="Home"/>
              <ListItem text="About"/>
              <ListItem text="Skills"/>
              <ListItem text="Project"/>
              <ListItem text="Contact"/>
            </ul>
          </div>
        </Flex>
      </Container>
    </section>
  )
}

export default Navbar
