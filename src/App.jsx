import Navbar from "./components/Navbar"
import "./app.css"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./components/Home"
import About from "./components/About"
import Projects from "./components/Projects"

export default function App(){
  return(
    <Router>
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
    </Router>
  )
}
