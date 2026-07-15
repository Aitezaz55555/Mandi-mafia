"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

export function ReservationStrip() {
  return (
    <div className="bg-obsidian border-t border-gold/15 py-12 md:py-16 text-center select-none">
      <div className="max-w-2xl mx-auto px-space-4 space-y-space-4">
        <h3 className="font-heading text-2xl sm:text-3xl text-ivory font-light">
          Secure Your Private Cabin Seating
        </h3>
        <p className="font-body text-xs text-silver/65 max-w-md mx-auto leading-relaxed font-light">
          Enjoy slow-cooked Yemen mandi recipes, grand communal feasting platters, and quiet speakeasy cabins with dedicated host services.
        </p>
        <div className="flex flex-col sm:flex-row gap-space-3 items-center justify-center pt-2">
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Link
              href="/reservations"
              className="px-6 h-11 bg-gold text-obsidian font-body text-[10px] uppercase tracking-wider font-semibold flex items-center justify-center gap-1.5 border border-gold hover:shadow-gold-glow transition-all duration-300 focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-obsidian outline-none cursor-pointer"
            >
              Reserve a Table
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </motion.div>
          
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <a
              href="tel:+918665550100"
              className="px-6 h-11 border border-gold/30 hover:border-gold hover:bg-gold/5 text-gold font-body text-[10px] uppercase tracking-wider font-semibold flex items-center justify-center gap-1.5 transition-all duration-300 focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-obsidian outline-none cursor-pointer"
            >
              <Phone className="w-3.5 h-3.5" />
              Call Concierge
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
