import { motion } from "framer-motion"
import { FaGithub, FaLinkedin, FaTwitter, FaTiktok } from "react-icons/fa"
import { useEffect, useState } from "react"

const socialLinks = [
  { icon: FaLinkedin, url: "https://www.linkedin.com/in/yorke-nyakundi-013825239/", name: "LinkedIn" },
  { icon: FaGithub, url: "https://github.com/yourprofile", name: "GitHub" },
  { icon: FaTwitter, url: "https://twitter.com/yourprofile", name: "Twitter" },
  { icon: FaTiktok, url: "https://tiktok.com/@yourprofile", name: "TikTok" },
]

const Footer = () => {
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      setShowTop(window.scrollY > 300)
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="w-full bg-[var(--color-light-gray)] dark:bg-transparent dark:backdrop-blur-3xl  py-10 px-6 text-center border-t border-gray-300 dark:border-gray-700"
    >
      {/* Tagline or Logo */}
      <motion.h2
        className="text-xl font-semibold text-[var(--color-charcoal-gray)] dark:text-white mb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Designed & Built by Yorke Nyakundi 🚀
      </motion.h2>

      {/* Social Media Icons */}
      <motion.div
        className="flex justify-center space-x-6 mb-6"
        initial="hidden"
        whileInView="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {socialLinks.map(({ icon: Icon, url, name }, index) => (
          <motion.a
            key={index}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.95 }}
            className="text-2xl text-[var(--color-charcoal-gray)] dark:text-white hover:text-blue-600"
            aria-label={name}
          >
            <Icon className="lg:text-4xl" />
          </motion.a>
        ))}
      </motion.div>

      {/* Divider */}
      <div className="w-full h-[1px] bg-gray-300 dark:bg-gray-700 my-4" />

      {/* Copyright */}
      <p className="text-sm text-gray-600 dark:text-gray-400">
        &copy; {new Date().getFullYear()} Yorke Nyakundi. All rights reserved.
      </p>

      {/* Scroll to top */}
      {showTop && (
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full shadow-lg transition"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
        >
          ↑
        </motion.button>
      )}
    </motion.footer>
  )
}

export default Footer
