const defaultTransition = {
  type: "spring",
  stiffness: 60,
  damping: 15,
  delay: 0.2,
};
export  const containerVariants = {
  hidden: { opacity: 0, x:90 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.8,
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
};

export  const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0,
    transition:defaultTransition},
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

export const aboutVariants = {
    hidden: { opacity: 0, x: 40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        when: "beforeChildren",
        staggerChildren: 0.4,
      },
    }
  }  
  export const fadeIn = (direction = "up", delay = 0) => {
    const variants = {
      hidden: {
        y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
        x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
        opacity: 0,
      },
      show: {
        y: 0,
        x: 0,
        opacity: 1,
        transition: {
          duration: 0.6,
          delay,
          ease: "easeOut",
        },
      },
    }
    return variants
}

export const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.25,
      duration: 1.6,
      type: "spring",
    },
  }),
};
