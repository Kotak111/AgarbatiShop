import { Route, Router, BrowserRouter as Routers, Routes } from "react-router-dom"
import Header from "./layout/Header"
import Footer from "./layout/Footer"
import Home from "./pages/Home"
import About from "./pages/about"
import Contact from "./pages/Contact"
import "../src/css/header.css"

function App() {
  document.title = "HarshAgarbati"
  return (
    <>
      <div className='arrow '>
      
      </div>
      <Routers>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>

        </Routes>
        <Footer></Footer>
      </Routers>
    </>
  )
}

export default App
