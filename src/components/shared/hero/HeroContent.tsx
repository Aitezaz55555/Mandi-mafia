"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { HeroCTA } from "./HeroCTA";

export function HeroContent() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={staggerContainer(0.18, 0.3)}
      className="relative z-20 flex flex-col items-center justify-center text-center max-w-4xl px-space-4 select-text"
    >
      {/* Cinematic Golden Badge Subhead */}
      <motion.span
        variants={fadeInUp}
        className="font-body text-[10px] sm:text-xs uppercase tracking-[0.25em] text-gold/90 font-medium mb-space-4"
      >
        Mandi Mafia • Culinary Syndicate
      </motion.span>

      {/* Luxury Editorial Serif Title */}
      <motion.h1
        variants={fadeInUp}
        className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-ivory font-light leading-[1.15] lg:leading-[1.12] tracking-wide mb-space-6 max-w-4xl"
      >
        Authentic Arabian Dining, <br />
        <span className="italic text-gold">Crafted for Celebration</span>
      </motion.h1>

      {/* Aromatic Narrative Details */}
      <motion.p
        variants={fadeInUp}
        className="font-body text-xs sm:text-sm md:text-base text-silver/80 max-w-2xl leading-relaxed md:leading-loose mb-space-8 md:mb-space-12 font-light"
      >
        Experience slow-cooked Arabian flavours, premium hospitality, and unforgettable moments in the heart of Vijayawada.
      </motion.p>

      {/* Action buttons wrapper */}
      <motion.div variants={fadeInUp} className="w-full flex justify-center">
        <HeroCTA />
      </motion.div>
    </motion.div>
  );
}
