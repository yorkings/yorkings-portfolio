import { fadeIn } from "../utils/Motion"
import {motion} from "framer-motion"
import { projects } from "../utils/Projects"

const Projects = () => {

  return (
    <section
      id="projects"
      className="min-h-screen px-6 py-16 bg-[var(--transparent)] text-[var(--color-charcoal-gray)] dark:bg-[#0b1622] dark:text-white"
    >
      <motion.h2
        className="text-4xl font-bold mb-12 text-center"
        variants={fadeIn("up", 0.1)}
        initial="hidden"
        animate="show"
      >
        Projects
      </motion.h2>

      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 h-7">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-[#132030] rounded-2xl shadow-lg p-6 flex flex-col justify-between hover:scale-[1.02] transition-all duration-300"
            variants={fadeIn("up", index * 0.2)}
            initial="hidden"
            animate="show"
          >
            <img
              src={project.image}
              alt={project.title}
              className="rounded-lg w-full h-48 lg:h-56 object-cover mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-sm lg:text-lg mb-4">{project.description}</p>
            <div className="flex gap-4 mt-auto">
              <a
                href={project.github}
                target="_blank"
                className="text-blue-600 dark:text-cyan-400 hover:underline"
              >
                GitHub
              </a>
              <a
                href={project.demo}
                target="_blank"
                className="text-blue-600 dark:text-cyan-400 hover:underline"
              >
                Live Demo
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Projects
