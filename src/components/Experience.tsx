import {motion} from "framer-motion"
import { experiences } from "../utils/Experiences&certs"
import { FaGlobeAfrica, FaMapMarkerAlt } from "react-icons/fa"


const Experience = () => {
  return (
      <section className="py-12 px-4">
            <h2 className="text-4xl font-bold mb-10 text-center">Professional Experience</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className="relative p-6 rounded-2xl shadow-md bg-white dark:bg-[#111827] border border-gray-100 dark:border-gray-800"
                >
                  <div className="absolute opacity-10 bottom-2 right-4">
                    <img src={exp.logo} alt={exp.company} className="h-24 object-contain" />
                  </div>

                  <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">{exp.company}</p>

                  <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-2 mb-1">
                    📅 {exp.from} – {exp.to} · {exp.duration}
                  </p>

                  <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-2 mb-4">
                    <FaMapMarkerAlt /> {exp.location}
                    {exp.remote && (
                      <>
                        · <FaGlobeAfrica /> Remote
                      </>
                    )}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-yellow-300 text-xs font-medium px-4 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

  )
}

export default Experience
