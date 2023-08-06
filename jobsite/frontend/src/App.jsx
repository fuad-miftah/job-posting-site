import {BrowserRouter, Routes,Route} from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Job from './pages/Job'
import SharedNav from "./pages/SharedNav"

function App() {


  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<SharedNav />}>
        <Route index element={<Home />}/>
        <Route path="/job" element={<Job />}/>
        <Route path="aboutus" element={<About />}/>
        <Route path="contactus" element={<Contact />}/>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
