import React from 'react'
import Container from '../components/Container'
import { GrProjects } from 'react-icons/gr'
import Flex from '../components/Flex'
import Title from '../components/Title'
import Ecommerce from '../assets/e-commerce.png'
import Safwan from '../assets/safwan.png'
import ToDo from '../assets/todo.png'


import Card from '../components/Card'

const Projects = () => {
  return (
    <section className="py-20">
      <Container>
        <Flex className="items-center gap-x-5 justify-center">
          <GrProjects className="text-3xl" />

          <Title text="Projects" className="text-center " />
        </Flex>

        <Flex className="justify-between mt-10">
          <Card title="E-Commerce" text="React" src={Ecommerce} imageClassName="h-50"/>

          <Card title="React-Safwan" text="React" src={Safwan} imageClassName="h-50"/>

          <Card title="To-Do" text="React" src={ToDo} imageClassName="h-50"/>
        </Flex>
      </Container>
    </section>
  )
}

export default Projects
