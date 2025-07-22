import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { aboutVariants, containerVariants } from "../utils/Motion"

const Hero = () => {
  const MotionLink = motion(Link)

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="max-w-3xl mx-auto w-full text-center px-4"  
    >
      <motion.h1
        variants={aboutVariants} initial='hidden' animate="visible"
        className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight"
      >
        Hi, I'm <span className="text-blue-600 dark:text-blue-400">Kerauni Yorke Nyakundi</span>
      </motion.h1>

      <motion.p
        variants={aboutVariants}
        className="mt-4 text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 font-medium"
      >
        Full-Stack Developer | AI Innovator | Big Project Architect | Data Enthusiast
      </motion.p>

      <motion.div variants={aboutVariants}>
        <MotionLink
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          to="/projects"
          className="inline-block mt-6 px-6 py-3 lg:px-8 lg:py-4 text-white text-base lg:text-lg font-semibold bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 dark:from-[#007C7C] dark:via-[#0047AB] dark:to-blue-900 rounded-xl hover:opacity-90 transition"
        >
          Explore My Projects
        </MotionLink>
      </motion.div>
    </motion.div>
  )
}

export default Hero
