import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import Home from "./components/Home"
import Projects from "./components/Projects"
import Navbar from "./components/Navbar"
import Experience from "./components/Experience"
import Certificates from "./components/Certificates"
import Footer from "./components/Footer"


function App() {
  

  return (
    <Router>
       <Navbar />
       < Routes> 
          <Route path="/" element={ <Home/>} />
          <Route path="/home" element={ <Home/>} />
         <Route path="/projects" element={<Projects />} />
         <Route path="/Experience" element={<Experience/>}/>
         <Route path='/Certificates'  element={<Certificates/>} />
       </Routes>
       <Footer/>
    </Router>
  )
}

export default App
