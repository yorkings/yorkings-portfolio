import Hero from "./Hero"
import About from "./About"
import {motion} from "framer-motion"
import { pageVariants } from "../utils/Motion"

const Home = () => {
  return (
    <motion.section initial="hidden"  animate="visible"
   variants={pageVariants}className="min-h-screen py-12 px-4 bg-[var(--transparent)] text-[var(--color-charcoal-gray)] dark:bg-gradient-to-r dark:from-[#14405C] dark:to-[#002446] dark:text-white">
      <div className="mb-24">
        <Hero />
      </div>
      <div className="mt-12">
        <About />
      </div>
    </motion.section>
  )
}

export default Home
