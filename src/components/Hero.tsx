import { Link } from "react-router-dom";
import ThemeToggle from "./Themetoggle.tsx"; // Ensure .tsx extension

const Hero = () => {
  return (
    <nav className="bg-white text-gray-900 dark:bg-gray-800 dark:text-gray-100 p-4 flex items-center justify-between  shadow-md transition-colors duration-300 ">
      {/* Brand/Logo Section */}
      <h1 className="text-2xl font-bold">
        <Link to="/" className="hover:text-cyan-600 dark:hover:text-cyan-400">
          yorkings.dev
        </Link>
      </h1>
      {/* Navigation Links and Theme Toggle */}
      <div className="flex items-center space-x-6">
        <Link   to="/" className="text-lg font-medium hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-200">
          Home
        </Link>
        <Link to="/about" className="text-lg font-medium hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-200">
          About
        </Link>
        <Link to="/projects" className="text-lg font-medium hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-200" >
          Projects
        </Link>
        <Link to="/contact" className="text-lg font-medium hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-200">
          Contact
        </Link>
        {/* Theme Toggle Button */}
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Hero;