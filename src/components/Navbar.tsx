import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";
import ThemeToggle from "./Themetoggle";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="w-full flex justify-center sticky top-0 z-50 bg-transparent">
      <section className="w-[80vw] rounded-lg shadow-md bg-[var(--color-mint-cream)] text-[var(--color-charcoal-gray)] dark:bg-gradient-to-tr dark:from-[#063497] dark:to-[#1b0349] dark:text-white">
        <div className="flex items-center justify-between px-4 py-4">
          <motion.h1
            className="text-2xl font-bold text-blue-700 dark:text-cyan-400"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/">YorkeDev</Link>
          </motion.h1>

          {/* Desktop nav */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map(({ to, label }, i) => (
              <NavLink
                key={i}
                to={to}
                className={({ isActive }) =>
                  `hover:text-blue-600 dark:hover:text-cyan-300 transition duration-200 ${
                    isActive ? "font-semibold underline underline-offset-4" : ""
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <ThemeToggle />

            {/* Mobile Hamburger */}
            <button onClick={toggleMenu} className="md:hidden text-2xl">
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Mobile Sidebar */}
        {isOpen && (
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[var(--color-mint-cream)] dark:bg-[#002446] px-4 py-4 space-y-4 text-center"
          >
            {navLinks.map(({ to, label }, i) => (
              <Link
                key={i}
                to={to}
                onClick={toggleMenu}
                className="block text-lg hover:text-blue-600 dark:hover:text-cyan-300 transition"
              >
                {label}
              </Link>
            ))}
          </motion.div>
        )}
      </section>
    </div>
  );
};

export default Navbar;
