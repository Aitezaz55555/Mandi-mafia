"use client";

import { motion } from "framer-motion";

export function HeroScrollIndicator() {
  const handleScrollClick = () => {
    window.scrollTo({
      top: window.innerHeight - 64, // Subtract header height
      behavior: "smooth",
    });
  };

  return (
    <div className="absolute bottom-space-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center pointer-events-auto">
      <button
        onClick={handleScrollClick}
        className="flex flex-col items-center gap-space-2 text-ivory/50 hover:text-gold transition-colors duration-300 group focus:outline-none cursor-pointer"
        aria-label="Scroll to content"
      >
        <span className="font-body text-[8px] uppercase tracking-[0.25em] transition-all duration-300 group-hover:tracking-[0.3em]">
          Scroll to explore
        </span>
        
        {/* Mouse/Lantern shaped tracking track */}
        <div className="w-[18px] h-8 rounded-full border border-ivory/20 group-hover:border-gold/30 flex justify-center p-1 transition-colors duration-300">
          <motion.div
            animate={{
              y: [0, 8, 0],
              opacity: [1, 0.3, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-[3px] h-[5px] rounded-full bg-gold"
          />
        </div>
      </button>
    </div>
  );
}
