"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";

export function ReviewCTA() {
  return (
    <div className="bg-obsidian border-t border-gold/15 py-16 md:py-24 text-center select-none">
      <div className="max-w-2xl mx-auto px-space-4 space-y-space-6">
        <div className="space-y-space-3">
          <span className="font-body text-[10px] uppercase tracking-[0.25em] text-gold/80 font-medium">
            Registry Invitation
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-ivory font-light leading-tight">
            Ready to Experience <br />
            <span className="italic text-gold">Mandi Mafia?</span>
          </h2>
          <div className="h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent w-40 mx-auto" />
        </div>
        
        <p className="font-body text-xs sm:text-sm text-silver/65 max-w-md mx-auto leading-relaxed font-light">
          Claim your private cabin or VIP lounge seat. Secure your booking online via our official registry.
        </p>

        <div className="flex flex-col sm:flex-row gap-space-3 items-center justify-center pt-2">
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
            <Link
              href="/reservations"
              className="w-full sm:w-auto px-6 h-11 bg-gold text-obsidian font-body text-[10px] uppercase tracking-wider font-semibold flex items-center justify-center gap-1.5 border border-gold hover:shadow-gold-glow transition-all duration-300 focus-visible:ring-1 focus-visible:ring-gold outline-none cursor-pointer"
            >
              Reserve Your Experience
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </motion.div>
          
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
            <Link
              href="/menu"
              className="w-full sm:w-auto px-6 h-11 border border-gold/30 hover:border-gold hover:bg-gold/5 text-gold font-body text-[10px] uppercase tracking-wider font-semibold flex items-center justify-center gap-1.5 transition-all duration-300 focus-visible:ring-1 focus-visible:ring-gold outline-none cursor-pointer"
            >
              <BookOpen className="w-3.5 h-3.5" />
              Explore Our Menu
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
