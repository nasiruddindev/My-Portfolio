import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from 'react-router-dom'
import Home from './pages/Home'
import About from './layouts/About'
import Skills from './layouts/Skills'
import Projects from './layouts/Projects'
import Contact from './layouts/Contact'
import RootLayouts from './layouts/RootLayouts'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route to="/" element={<RootLayouts />}>
      <Route path="/" element={<Home />}></Route>
      <Route path="about" element={<About />}></Route>
      <Route path="skills" element={<Skills />}></Route>

      <Route path="projects" element={<Projects />}></Route>

      <Route path="contact" element={<Contact />}></Route>
    </Route>
  )
)

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
