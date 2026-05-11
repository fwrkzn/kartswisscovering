import type { Variants } from "framer-motion";

const smoothEase = [0.16, 1, 0.3, 1] as const;
const cardEase = [0.22, 1, 0.36, 1] as const;

export const TRANSITION_VARIANTS: Record<string, Variants> = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.045,
        delayChildren: 0.015,
      },
    },
  },
  fastContainer: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.025,
        delayChildren: 0.005,
      },
    },
  },
  item: {
    hidden: { opacity: 0, filter: "blur(10px)", y: 18 },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        duration: 0.66,
        ease: smoothEase,
      },
    },
    highlighted: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        duration: 0.4,
        ease: smoothEase,
      }
    }
  },
  blurText: {
    hidden: { opacity: 0, filter: "blur(12px)", y: 18 },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        duration: 0.7,
        ease: smoothEase,
      },
    },
  },
  card: {
    hidden: { opacity: 0, filter: "blur(10px)", scale: 0.985 },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      scale: 1,
      transition: {
        duration: 0.66,
        ease: cardEase,
      },
    },
    highlighted: {
      opacity: 1,
      filter: "blur(0px)",
      backgroundColor: "rgba(17, 17, 17, 1)",
      transition: {
        duration: 0.37,
        ease: smoothEase,
      }
    }
  },
  image: {
    hidden: { opacity: 0.4 },
    highlighted: { opacity: 0.8, transition: { duration: 0.55, ease: smoothEase } },
  },
  page: {
    pageInitial: { opacity: 1 },
    pageAnimate: {
      opacity: 1,
      transition: {
        duration: 0,
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.29,
        ease: smoothEase,
      },
    },
  },
};
