import { BrowserRouter } from "react-router-dom"
import { Routes, Route } from "react-router-dom"
import Navar from "./component/navbar"
import Home from "./pages/home"
import Darrusa from "./pages/darrusa"
import About from "./pages/about"
import Publication from "./pages/publiction"
import Contact from "./pages/contact"
import Audios from "./pages/audios"
import "./responsiveStyle.css"
// https://www.youtube.com/watch?v=7V8AET8SN0I k
export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/darrusa" element={<Darrusa />} />
          <Route path="/publication" element={<Publication />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/audios" element={<Audios />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}