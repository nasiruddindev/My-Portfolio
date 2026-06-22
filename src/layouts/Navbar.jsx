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
  let [open, setOpen] = useState(false)


  return (
    <section className="bg-slate-400 py-5">
      <Container>
        <Flex className="hidden md:flex justify-between items-center">
          <Link to="/">
          <div>
            <Image src={Logo} className="w-50 " />
          </div>
          </Link>
          <div>
            <ul className="flex gap-x-10">
              <Link to="/">
                <ListItem text="Home" />
              </Link>

              <Link to="/about">
                <ListItem text="About" />
              </Link>

              <Link to="/skills">
                <ListItem text="Skills" />
              </Link>

              <Link to="/projects">
                <ListItem text="Project" />
              </Link>

              <Link to="/contact">
                <ListItem text="Contact" />
              </Link>
            </ul>
          </div>
        </Flex>

        <Flex className="md:hidden justify-between items-center px-3">
          <Link to="/">
          <Image src={Logo} className="w-40 " />
          </Link>
          <div
            className="cursor-pointer"
            onClick={() => {
              setOpen(!open)
            }}
          >
            {open ? <ImCross /> : <IoMenu className="text-3xl" />}
          </div>
        </Flex>

        <div>
          {open && (
            <ul className="flex flex-col items-center mt-10 bg-black/50 gap-y-6 rounded py-5 duration-300">
              <Link to="/">
                <ListItem text="Home" className="text-white" />
              </Link>

              <Link to="/about">
                <ListItem text="About" className="text-white" />
              </Link>

              <Link to="/skills">
                <ListItem text="Skills" className="text-white" />
              </Link>
              <Link to="/projects">
                <ListItem text="Project" className="text-white" />
              </Link>

              <Link to="/contact">
                <ListItem text="Contact" className="text-white/70" />
              </Link>
            </ul>
          )}
        </div>
      </Container>
    </section>
  )
}

export default Navbar
