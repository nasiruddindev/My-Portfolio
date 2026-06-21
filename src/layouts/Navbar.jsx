import React, { useState } from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import Logo from '../assets/logo.png'
import ListItem from '../components/ListItem'
import { Link } from 'react-router-dom'
import { ImCross } from 'react-icons/im'
import { IoMenu } from 'react-icons/io5'

const Navbar = () => {
  let [open,setOpen] = useState(false)
  return (
    <section className="bg-slate-400 py-5">
      <Container>
        <Flex className="hidden md:flex justify-between items-center">
          <div>
            <Image src={Logo} className="w-50 " />
          </div>
          <div>
            <ul className="flex gap-x-10">
              <Link to="/"><ListItem text="Home" /></Link>

              <Link to="/abouts"><ListItem text="About" /></Link>

              <Link to="/skill"><ListItem text="Skills" /></Link>
              <Link to="/projects"><ListItem text="Project" /></Link>

              <Link to="/contacts">
                <ListItem text="Contact" />
              </Link>
            </ul>
          </div>
        </Flex>


        <Flex className="md:hidden justify-between items-center px-3">

            <Image src={Logo} className="w-40 " />
            <div onClick={()=>{setOpen (!open)}}>
            {open?<ImCross/>:<IoMenu
             className='text-3xl'/>}
          </div>

        </Flex>


          <div>
            {
              open&&
              <ul className="flex flex-col items-center mt-10 bg-slate-500 gap-y-6 rounded-2xl py-5">
              <Link to="/"><ListItem text="Home" /></Link>

              <Link to="/abouts"><ListItem text="About" /></Link>

              <Link to="/skill"><ListItem text="Skills" /></Link>
              <Link to="/projects"><ListItem text="Project" /></Link>

              <Link to="/contacts">
                <ListItem text="Contact" />
              </Link>
            </ul>
            }
          </div>
      </Container>
    </section>
  )
}

export default Navbar
