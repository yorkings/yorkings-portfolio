import { motion } from "framer-motion";
import { Download, ExternalLink } from "lucide-react";

const ResumeButtons = () => {
  return (
    <motion.div
      className="flex gap-4 mt-6 md:justify-center"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* View Resume */}
      <a
        href="/job_res_1.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-5 py-2 rounded-xl border border-gray-300 dark:border-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
      >
        <ExternalLink size={18} />
        View Resume
      </a>

      {/* Download Resume */}
      <a
        href="/job_res_1.pdf"
        download
        className="flex items-center gap-2 px-5 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition-all"
      >
        <Download size={18} />
        Download Resume
      </a>
    </motion.div>
  );
};

export default ResumeButtons;
