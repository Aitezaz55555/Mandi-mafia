"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp, MessageCircle, Calendar } from "lucide-react";
import Link from "next/link";

export function FloatingControls() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility, { passive: true });
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-space-4 right-space-4 md:bottom-space-6 md:right-space-6 z-40 flex flex-col gap-space-3 items-center pointer-events-none">
      {/* WhatsApp Button (Global reach helper) */}
      <motion.a
        href="https://wa.me/918665550100?text=I%20would%20like%20to%20make%20a%20reservation%20at%20Mandi%20Mafia."
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 rounded-full bg-emerald-700 text-ivory flex items-center justify-center shadow-lg hover:bg-emerald-600 transition-all duration-300 pointer-events-auto border border-emerald-500/20"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        title="Chat on WhatsApp"
      >
        <MessageCircle className="w-5 h-5" />
      </motion.a>

      {/* Mobile-Only Table Reservation shortcut */}
      <motion.div
        className="md:hidden pointer-events-auto"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
      >
        <Link
          href="/reservations"
          className="w-12 h-12 rounded-full bg-gold text-obsidian flex items-center justify-center shadow-lg hover:bg-gold-hover transition-all duration-300 border border-gold/20"
          title="Reserve a Table"
        >
          <Calendar className="w-5 h-5" />
        </Link>
      </motion.div>

      {/* Scroll to Top Trigger */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            onClick={scrollToTop}
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="w-12 h-12 rounded-full bg-charcoal border border-gold/30 text-gold flex items-center justify-center shadow-lg hover:border-gold hover:text-gold-hover transition-all duration-300 cursor-pointer pointer-events-auto"
            title="Scroll to Top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
