import { Variants } from "framer-motion";

// Brand-standard cubic bezier curve for high-end luxury acceleration/deceleration
export const LUXURY_EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export const transitionSmooth = {
  duration: 0.8,
  ease: LUXURY_EASE,
};

export const transitionSlow = {
  duration: 1.2,
  ease: LUXURY_EASE,
};

// Reusable motion variants
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: transitionSmooth,
  },
};

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: transitionSmooth,
  },
};

export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: transitionSmooth,
  },
};

export const staggerContainer = (staggerChildren = 0.15, delayChildren = 0): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

export const scaleReveal: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: transitionSmooth,
  },
};

export const borderExpand: Variants = {
  hidden: { width: "0%" },
  visible: {
    width: "100%",
    transition: transitionSlow,
  },
};
