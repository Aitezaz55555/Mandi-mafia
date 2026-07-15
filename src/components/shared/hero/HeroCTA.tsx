"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function HeroCTA() {
  return (
    <div className="flex flex-col sm:flex-row gap-space-4 items-center justify-center pt-space-4 w-full">
      {/* Primary Action Button */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.97 }}
        className="w-full sm:w-auto"
      >
        <Link
          href="/reservations"
          className="w-full sm:w-auto px-space-8 h-14 bg-gold hover:bg-gold-hover text-obsidian font-body text-[10px] uppercase tracking-[0.2em] font-semibold flex items-center justify-center gap-2 border border-gold hover:shadow-gold-glow transition-all duration-500 ease-smooth focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-obsidian outline-none cursor-pointer"
        >
          Reserve Your Experience
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </motion.div>

      {/* Secondary Action Button */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.97 }}
        className="w-full sm:w-auto"
      >
        <Link
          href="/menu"
          className="w-full sm:w-auto px-space-8 h-14 border border-gold/30 hover:border-gold hover:bg-burgundy/10 text-ivory font-body text-[10px] uppercase tracking-[0.2em] font-semibold flex items-center justify-center transition-all duration-500 ease-smooth focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-obsidian outline-none cursor-pointer"
        >
          Explore Our Menu
        </Link>
      </motion.div>
    </div>
  );
}
