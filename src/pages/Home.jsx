import React, { useState, useMemo } from 'react'
import Navbar from '../layouts/Navbar'
import Hero from '../layouts/Hero'
import Footer from '../layouts/Footer'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Title from '../components/Title'
import Pera from '../components/Pera'
import { IoIosContact } from 'react-icons/io'
import { IoLocationOutline, IoLogoJavascript } from 'react-icons/io5'
import { MdOutlineEmail, MdOutlineEventAvailable } from 'react-icons/md'
import { GiSkills } from 'react-icons/gi'
import { FaBootstrap, FaCss3, FaHtml5, FaReact } from 'react-icons/fa6'
import { SiTailwindcss } from 'react-icons/si'
import Card from '../components/Card'
import { Link } from 'react-router-dom'
import { GrProjects } from 'react-icons/gr'
import Safwan from '../assets/safwan.png'
import ToDo from '../assets/todo.png'
import { RiContactsLine } from 'react-icons/ri'
import Input from '../components/Input'
import Button from '../components/Button'
import ProjectCard from '../components/ProjectCard'
import ProjectSlider from '../components/ProjectSlider'
import Outstock from '../assets/outstock.png'
import Exclusive from '../assets/exclusive.png'
import Crudo from '../assets/crudo.png'
import Todo from '../assets/todo.png'
import Calculator from '../assets/calculator.png'
import Clock from '../assets/clock.png'
import Finsweet from '../assets/finsweet.png'
import Innovate from '../assets/innovate.png'




const Home = () => {


  const projects = [
    {
      id: 1,
      title: 'Outstock E-Commerce Search UI & Banner Design',
      category: 'React',
      image: Outstock,
      github: 'https://github.com/nasiruddindev/OutStock-',
      live: 'https://outstock-nasir.vercel.app/',
      description:
        "Designed  banner for Outstock, a modern e-commerce platform. The concept highlights the platform's intuitive product search and seamless browsing experience, focusing on modern UI design principles.",
    },
    {
      id: 2,
      title: 'Exclusive Luxury E-Commerce Banner',
      category: 'React',
      image: Exclusive,
      github: 'https://github.com/nasiruddindev/Exclusive',
      live: 'https://exclusive-nasir.vercel.app/',
      description:
        'High-end product showcase, clean UI layout, and clear user navigation. By focusing on floating UI elements and dynamic product grids, this layout enhances search visibility while maintaining an exclusive brand feel.',
    },
    {
      id: 3,
      title: 'Crudo Organic Grocery Website',
      category: 'React',
      image: Crudo,
      github: 'https://github.com/nasiruddindev/Crudo',
      live: 'https://crudo-nasir.vercel.app/',
      description:
        'Designed a vibrant, conversion-focused  a modern organic grocery and beverage e-commerce store. color palettes, and product imagery with the existing UI to create a cohesive brand experience.',
    },
    {
      id: 4,
      title: 'Todo App',
      category: 'JavaScript',
      image: Todo,
      github: 'https://github.com/nasiruddindev/Todo',
      live: 'https://nasiruddindev.github.io/Todo/',
      description:
        'A simple and responsive Todo application built with React.js that enables users to add, edit, complete, and delete tasks. The project showcases efficient state management, clean UI design, and core React development concepts.',
    },
    {
      id: 5,
      title: 'Calculator App',
      category: 'JavaScript',
      image: Calculator,
      github: 'https://github.com/nasiruddindev/Calculator',
      live: 'https://nasiruddindev.github.io/Calculator/',
      description:
        'A modern and responsive calculator application built with React. It supports essential arithmetic operations with real-time calculations, a user-friendly interface, and efficient state management, showcasing fundamental React and JavaScript concepts',
    },
    {
      id: 6,
      title: 'Finsweet Landing Page',
      category: 'HTML/CSS',
      image: Finsweet,
      github: 'https://github.com/nasiruddindev/Finsweet',
      live: 'https://nasiruddindev.github.io/Finsweet/',
      description:
        'Finsweet is a modern and responsive landing page built using HTML5 and CSS3. The project features a clean layout, well-structured sections, smooth navigation, and a visually appealing design. It demonstrates strong front-end development skills through semantic HTML, responsive layouts, and pixel-perfect implementation of a professional website interface.',
    },
    {
      id: 7,
      title: 'Innovate Landing Page',
      category: 'HTML/CSS',
      image: Innovate,
      github: 'https://github.com/nasiruddindev/Innovate1',
      live: 'https://nasiruddindev.github.io/Innovate1/',
      description:
        'Innovate is a fully responsive business landing page developed with HTML5 and CSS3. It includes a modern hero section, service highlights, call-to-action areas, and a structured footer to create an engaging user experience. The project showcases responsive web design principles, clean code organization, and attention to detail in layout and styling.',
    },
    {
      id: 8,
      title: 'Project ',
      category: 'HTML/CSS',
      image: Calculator,
      github: 'https://github.com/nasiruddindev/project-2',
      live: 'https://nasiruddindev.github.io/project-2/',
      description:
        'This Project is a fully responsive business landing page developed with HTML5 and CSS3. It includes a modern hero section, service highlights, call-to-action areas, and a structured footer to create an engaging user experience. The project showcases responsive web design principles, clean code organization, and attention to detail in layout and styling.',
    },
    {
      id: 9,
      title: 'Analog Clock',
      category: 'JavaScript',
      image: Clock,
      github: 'https://github.com/nasiruddindev/Analog-Clock',
      live: 'https://nasiruddindev.github.io/Analog-Clock/',
      description:
        'A modern analog clock that displays real-time hours, minutes, and seconds with smooth hand animations. Built using React, JavaScript, and CSS transforms, it showcases real-time data handling, component-based architecture, and clean UI design.',
    },
  ]

  // Fixed category list (add yours here; order matters)
  const categories = ['All', 'React', 'JavaScript', 'Next.js', 'HTML/CSS']

  // ─── Filter state ──────────────────────────────────────────────────────────
  const [activeCategory, setActiveCategory] = useState('All')

  // filteredProjects is memoised so the slider resets cleanly on category change
  const filteredProjects = useMemo(
    () =>
      activeCategory === 'All'
        ? projects
        : projects.filter((p) => p.category === activeCategory),
    [activeCategory]
  )

  const handleCategoryClick = (category) => {
    if (category === activeCategory) return
    setActiveCategory(category)
  }



  return (
    <div>
      {/* About section start */}

      <section id="about" className="py-20 bg-sky-100">
        <Container>
          <Flex className="flex-col gap-y-10 md:gap-y-0 md:flex-row items-center">
            <div className="md:w-6/12">
              <Title text="About Me" className="text-center md:text-start" />
              <p className="text-secondary text-xl px-4 md:px-0 text-center md:text-start md:text-2xl font-medium font-inter max-w-130 mx-auto md:mx-0 py-5">
                I'm a Passionate Frontend React Developer Who loves to create
                beautiful and functional web experience
              </p>
              <Pera
                text="I enjoy turning ideas into real products. I have experience building web appllications using React,JavaScript,Tailwind CSS and modern tools"
                className="max-w-125 text-center md:text-start px-3 md:px-0"
              />
            </div>

            <div className="md:w-6/12">
              <div className="shadow-2xl p-3 md:py-10 lg:p-10 flex flex-col gap-y-6 bg-white rounded md:rounded-2xl">
                <div className="flex justify-between">
                  <div className="flex gap-x-1 md:gap-x-2 items-center">
                    <IoIosContact className="text-xl md:text-2xl" />
                    <p className="text-primary text-base md:text-xl font-medium font-inter">
                      Name :
                    </p>
                  </div>
                  <p className="text-primary text-base md:text-xl font-medium font-inter">
                    Nasir Uddin
                  </p>
                </div>
                <div className="flex justify-between">
                  <div className="flex gap-x-1 md:gap-x-2 items-center">
                    <IoLocationOutline className="text-xl md:text-2xl" />
                    <p className="text-primary text-base md:text-xl font-medium font-inter">
                      Location :
                    </p>
                  </div>
                  <p className="text-primary text-base md:text-xl font-medium font-inter">
                    Dhaka,Bangladesh
                  </p>
                </div>
                <div className="flex justify-between">
                  <div className="flex gap-x-1 md:gap-x-2 items-center">
                    <MdOutlineEmail className="text-xl md:text-2xl" />
                    <p className="text-primary text-base md:text-xl font-medium font-inter">
                      Email :
                    </p>
                  </div>
                  <p className="text-primary text-base md:text-xl font-medium font-inter">
                    dev.nasiruddin@gmail.com
                  </p>
                </div>
                <div className="flex justify-between">
                  <div className="flex gap-x-1 md:gap-x-2 items-center">
                    <MdOutlineEventAvailable className="text-xl md:text-2xl" />
                    <p className="text-primary text-base md:text-xl font-medium font-inter">
                      Availability :
                    </p>
                  </div>
                  <p className="text-green-600 text-base md:text-xl font-medium font-inter">
                    Open to work
                  </p>
                </div>
              </div>
            </div>
          </Flex>
        </Container>
      </section>

      {/* About section End */}

      {/* Skills section Start  */}

      <section id="skills" className="py-20 bg-sky-100">
        <Container>
          <Flex className="items-center gap-x-2 justify-center">
            <GiSkills className="text-4xl" />

            <Title text="Skills" className="text-center " />
          </Flex>

          <div className="shadow-2xl p-10 md:w-8/12 mx-3 md:mx-auto bg-white rounded-2xl mt-10">
            <h3 className="text-primary text-2xl md:text-3xl font-inter font-bold text-center pb-5">
              Frontend developer
            </h3>

            <Flex className="flex-col md:flex-row gap-y-6 md:gap-y-0 justify-evenly mt-5 ">
              <Flex className="flex-col gap-y-6">
                <Flex className="gap-x-2 justify-center items-center shadow-xl p-3 rounded-2xl">
                  <FaHtml5 className="text-xl" />
                  <h5 className="text-xl md:text-2xl text-primary font-medium  font-inter">
                    HTML
                  </h5>
                </Flex>
                <Flex className="gap-x-2 justify-center items-center shadow-xl p-3 rounded-2xl">
                  <FaCss3 className="text-xl" />
                  <h5 className="text-xl md:text-2xl text-primary font-medium  font-inter">
                    CSS
                  </h5>
                </Flex>
                <Flex className="gap-x-2 justify-center items-center shadow-xl p-3 rounded-2xl">
                  <FaBootstrap className="text-xl" />
                  <h5 className="text-xl md:text-2xl text-primary font-medium  font-inter">
                    BOOTSTRAP
                  </h5>
                </Flex>
              </Flex>

              <Flex className="flex-col gap-y-6">
                <Flex className="gap-x-2 justify-center items-center shadow-xl p-3 rounded-2xl">
                  <SiTailwindcss className="text-xl" />
                  <h5 className="text-xl md:text-2xl text-primary font-medium  font-inter">
                    Tailwind
                  </h5>
                </Flex>
                <Flex className="gap-x-2 justify-center items-center shadow-xl p-3 rounded-2xl">
                  <IoLogoJavascript className="text-xl" />
                  <h5 className="text-xl md:text-2xl text-primary font-medium  font-inter">
                    JavaScript
                  </h5>
                </Flex>
                <Flex className="gap-x-2 justify-center items-center shadow-xl p-3 rounded-2xl">
                  <FaReact className="text-xl" />
                  <h5 className="text-xl md:text-2xl text-primary font-medium  font-inter">
                    React
                  </h5>
                </Flex>
              </Flex>
            </Flex>
          </div>
        </Container>
      </section>

      {/* Skills section End */}

      {/* Project section Start */}

      <section id="project" className="py-20">
        <Container>
          <Flex className="items-center gap-x-3 md:gap-x-5 justify-center">
            <GrProjects className="text-xl md:text-3xl" />

            <Title text="Projects" className="text-center " />
          </Flex>

          {/* ── Category Filter Buttons ── */}
          <div className="flex flex-wrap justify-center items-center gap-3 mt-5 md:mt-10">
            {categories.map((category) => {
              const isActive = activeCategory === category
              return (
                <button
                  key={category}
                  onClick={() => handleCategoryClick(category)}
                  className={`text-lg font-medium font-inter px-5 py-1.5 rounded-full cursor-pointer transition-all duration-300 border ${
                    isActive
                      ? 'bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-500/30'
                      : 'bg-transparent text-primary border-slate-300 hover:border-blue-400 hover:text-blue-600'
                  }`}
                >
                  {category}
                </button>
              )
            })}
          </div>

          {/* ── Project Slider ── */}
          <ProjectSlider projects={filteredProjects} />
        </Container>
      </section>

      {/* Project section End */}

      {/* Contact section Start */}

      <section id="contact" className="py-20">
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
                text="Find Me easily Contact without any technical skills"
                className="max-w-100 text-center leading-10 md:leading-16"
              />
            </div>

            <div className="md:w-6/12">
              <div className=" bg-white shadow-2xl rounded-2xl p-5 w-screen sm:w-100 md:w-10/12">
                <form action="" className="flex flex-col">
                  <label className="text-xl text-primary font-inter font-semibold pb-2">
                    Name:
                  </label>
                  <Input text="Enter Your name" className="" />

                  <label className="text-xl text-primary font-inter font-semibold pb-2">
                    Email:
                  </label>
                  <Input text="Enter Your Email" />

                  <label className="text-xl text-primary font-inter font-semibold pb-2">
                    Message:
                  </label>
                  <textarea
                    type="text"
                    placeholder="Enter Your Message"
                    className="border-none outline-none bg-sky-200 px-3 py-1 rounded mb-3 placeholder:text-black/50 w-full placeholder:font-medium placeholder:font-inter placeholder:text-base"
                  />

                  <Button text="Submit" />
                </form>
              </div>
            </div>
          </Flex>
        </Container>
      </section>

      {/* Contact section End */}
    </div>
  )
}

export default Home
