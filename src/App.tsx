import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import Home from "./components/Home"
import Projects from "./components/Projects"

import Contacts from "./components/Contacts"
import Navbar from "./components/Navbar"


function App() {
  

  return (
    <Router>
       <Navbar />
       < Routes> 
          <Route path="/" element={ <Home/>} />
          <Route path="/home" element={ <Home/>} />
         <Route path="/projects" element={<Projects />} />
         <Route path="/contact" element={<Contacts />}/>
       </Routes>
    </Router>
  )
}

export default App
