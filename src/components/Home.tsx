import Hero from "./Hero"
import About from "./About"
import { motion } from "framer-motion"
import { pageVariants } from "../utils/Motion"
import BackgroundVideo from "./Background" 

const Home = () => {
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={pageVariants}
      className="relative min-h-screen py-12 px-4 text-[var(--color-charcoal-gray)] dark:text-white"
    >
      <BackgroundVideo />
      <div className="mb-24 relative z-10  lg:mt-7 ">
        <Hero />
      </div>
      <div className="mt-12 relative z-10">
        <About />
      </div>
    </motion.section>
  )
}

export default Home
