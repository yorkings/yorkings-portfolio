export  const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 2,
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
};

export  const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 1 } }
};

export const pageVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { when: "beforeChildren", staggerChildren: 0.3 },
  },
}

export const slideIn = {
    hidden: { x: "100%" },
    visible: { x: 0, transition: { duration: 0.4 } },
    exit: { x: "100%", transition: { duration: 0.3 } },
  };