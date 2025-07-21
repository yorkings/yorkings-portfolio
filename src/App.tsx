import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import Hero from "./components/Hero"
import Home from "./components/Home"
import Projects from "./components/Projects"
import About from "./components/About"
import Contacts from "./components/Contacts"

function App() {
  

  return (
    <Router>
       <Hero />
       < Routes> 
          <Route path="/" element={ <Home/>} />
          <Route path="/about" element={<About />} />
         <Route path="/projects" element={<Projects />} />
         <Route path="/contact" element={<Contacts />}/>
       </Routes>
    </Router>
  )
}

export default App
