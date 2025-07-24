import { useState } from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaTimes } from "react-icons/fa";
import { certificateData } from "../utils/Experiences&certs";

export default function CertificateSection() {
  const [selected, setSelected] = useState(null);

  const openModal = (cert) => setSelected(cert);
  const closeModal = () => setSelected(null);

  return (
    <section id="certificates" className="px-6 py-12 bg-white dark:bg-transparent transition-colors">
      <motion.h2
        className="text-3xl font-bold text-center mb-10 text-neutral-800 dark:text-white"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Certificates
      </motion.h2>

      <div className=" max-w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {certificateData.map((cert, idx) => (
          <motion.div
            key={idx}
            className="rounded-xl overflow-hidden shadow-lg dark:shadow-white/10 cursor-pointer bg-neutral-100 dark:bg-neutral-800 hover:scale-[1.02] transition-transform"
            whileHover={{ scale: 1.03 }}
            onClick={() => openModal(cert)}
          >
            <img
              src={cert.image}
              alt={cert.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-neutral-800 dark:text-white">{cert.title}</h3>
              <p className="text-sm text-neutral-500 dark:text-neutral-300">{cert.organization}</p>
              <p className="text-sm text-neutral-500 dark:text-neutral-300">{cert.date}</p>
              {cert.link && (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 mt-2"
                  onClick={(e) => e.stopPropagation()}
                >
                  View <FaExternalLinkAlt className="ml-1 text-xs" />
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      {selected && (
        <motion.div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.div
            className="relative bg-white dark:bg-neutral-800 p-4 rounded-lg shadow-lg max-w-3xl w-full mx-4"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
          >
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-neutral-800 dark:text-white hover:text-red-500 transition"
            >
              <FaTimes size={20} />
            </button>
            <img
              src={selected.image}
              alt={selected.title}
              className="w-full h-auto rounded-md"
            />
            <div className="mt-4 text-center">
              <h3 className="text-xl font-semibold text-neutral-800 dark:text-white">{selected.title}</h3>
              <p className="text-sm text-neutral-500 dark:text-neutral-300">{selected.organization}</p>
              <p className="text-sm text-neutral-500 dark:text-neutral-300">{selected.date}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
