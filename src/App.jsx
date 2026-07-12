import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from 'react-router-dom'
import Home from './pages/Home'
import RootLayouts from './layouts/RootLayouts'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route to="/" element={<RootLayouts />}>
      <Route path="/" element={<Home />}></Route>


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
