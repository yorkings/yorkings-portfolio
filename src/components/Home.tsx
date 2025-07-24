import Hero from "./Hero"
import About from "./About"
import { motion } from "framer-motion"
import { pageVariants } from "../utils/Motion"
import BackgroundVideo from "./Background"
import ResumeButtons from "./Resumebutton"


const Home = () => {
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={pageVariants}
      className="relative min-h-screen min-w-[80%] py-12 px-4 text-[var(--color-charcoal-gray)] dark:text-white"
    >
      <BackgroundVideo />

      {/* Hero Section */}
      <div className="mb-16 relative z-10 lg:mt-7">
        <Hero />

        {/* Resume Buttons go here, just below Hero */}
        <div className="mt-8 ">
          <ResumeButtons/>
        </div>
      </div>

      {/* About Section */}
      <div className="mt-12 relative z-10">
        <About />
      </div>
    
    </motion.section>
  )
}

export default Home
