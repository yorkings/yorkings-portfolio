import { motion } from "framer-motion";
import { aboutVariants } from "../utils/Motion";

const About = () => {
  return (
   
      <motion.div
        
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        animate={{opacity:1,y:0}}
        transition={{ duration: 3,when:"beforeChildren",staggerChildren:0.4 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto text-center"
      >
        <motion.h2 variants={aboutVariants} className="text-4xl font-bold mb-4 text-blue-600 dark:text-cyan-400">
          About Me
        </motion.h2>
        <motion.p variants={aboutVariants} className="text-lg md:text-xl mb-6 leading-relaxed text-gray-700 dark:text-gray-300">
           I love building intelligent and scalable web/mobile solutions,
          with an eye for elegant design and clean code. I'm currently diving deeper into
          data science, machine learning, and large-scale project architecture.
        </motion.p>
       
      </motion.div>
  
  );
};

export default About;
