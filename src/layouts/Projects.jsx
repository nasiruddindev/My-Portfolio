import React from 'react'
import Container from '../components/Container'
import { GrProjects } from 'react-icons/gr'
import Flex from '../components/Flex'
import Title from '../components/Title'
import Ecommerce from '../assets/e-commerce.png'
import Safwan from '../assets/safwan.png'
import ToDo from '../assets/todo.png'

import Card from '../components/Card'
import { Link } from 'react-router-dom'

const Projects = () => {
  return (
    <section className="py-20">
      <Container>
        <Flex className="items-center gap-x-3 md:gap-x-5 justify-center">
          <GrProjects className="text-xl md:text-3xl" />

          <Title text="Projects" className="text-center " />
        </Flex>

        <Flex className="flex-col  gap-y-10 md:gap-y-0 md:flex-row items-center md:justify-between mt-10">
          <Link to="https://exclusive-alpha-five.vercel.app/" target="_blank">
            <Card
              title="E-Commerce"
              text="React"
              src={Ecommerce}
              imageClassName="h-50"
            />
          </Link>

          <Link to="https://safwan-azure.vercel.app/" target="_blank">
            <Card
              title="React-Safwan"
              text="React"
              src={Safwan}
              imageClassName="h-50"
            />
          </Link>

          <Link to="https://nasiruddindev.github.io/Todo/" target="_blank">
          <Card title="To-Do" text="React" src={ToDo} imageClassName="h-50" />
          </Link>
        </Flex>
      </Container>
    </section>
  )
}

export default Projects
