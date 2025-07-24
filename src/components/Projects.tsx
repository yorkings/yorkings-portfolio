import { useState } from "react";
import { motion } from "framer-motion";
import { pageVariants } from "../utils/Motion";
import { projects } from "../utils/Projects";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

// Extract unique technologies from projects
const allTech = [
  "All",
  ...Array.from(new Set(projects.flatMap((project) => project.tech))),
];

const Projects = () => {
  const [selectedTech, setSelectedTech] = useState("All");

  const filteredProjects =
    selectedTech === "All"
      ? projects
      : projects.filter((project) =>
          project.tech.includes(selectedTech)
        );

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={pageVariants}
      className="min-h-screen px-6 py-12 bg-[var(--transparent)] dark:bg-gradient-to-r dark:from-[#0c1724] dark:to-[#001722] dark:text-white"
    >
      <h2 className="text-3xl md:text-5xl font-bold mb-6 text-center">My Projects</h2>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {allTech.map((tech, index) => (
          <button
            key={index}
            onClick={() => setSelectedTech(tech)}
            className={`px-4 py-2 rounded-full border ${
              selectedTech === tech
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white text-black dark:bg-[#111827] dark:text-white border-gray-400"
            } hover:scale-105 transition`}
          >
            {tech}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="mx-auto max-w-[90vw] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.02 }}
            className="bg-white dark:bg-[#111827] p-5 rounded-2xl shadow-md flex flex-col justify-between"
          >
            <img
              src={project.image}
              alt={project.title}
              className="rounded-lg h-52 md:h-64 object-cover w-full mb-4"
            />
            <div>
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-yellow-300 text-xs font-medium px-4 py-1 rounded-full"  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-4 mt-auto">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline flex items-center gap-2"
                >
                  <FaGithub className="text-xl" /> GitHub
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline flex items-center gap-2"
                >
                  <FaExternalLinkAlt className="text-xl" /> Live Demo
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
