import {createRoutesFromElements,createBrowserRouter,Route,RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import Abouts from "./pages/Abouts";
import Skill from "./pages/Skill";
import Projects from "./pages/Project";
import Contacts from './pages/Contacts'
import RootLayouts from "./layouts/RootLayouts";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route to="/" element={<RootLayouts/>}>
    <Route path="/" element={<Home />}></Route>
    <Route path="/abouts" element={<Abouts />}></Route>
    <Route path="/skill" element={<Skill/>}></Route>
    <Route path="/projects" element={<Projects />}></Route>
    <Route path="/contacts" element={<Contacts />}></Route>
    </Route>
  )
);

const App = () => {
  return (
    <>
        <RouterProvider router={router} />

    </>
  )
}

export default App
