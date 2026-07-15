"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export function LoadingOverlay() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Initial load screen timer to animate the entrance
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[100] bg-obsidian flex flex-col items-center justify-center select-none"
        >
          <div className="relative flex flex-col items-center gap-space-4">
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-36 h-36 rounded-full border border-gold/60 p-5 flex items-center justify-center shadow-[0_0_50px_rgba(212,175,55,0.45)]"
              style={{
                background: "radial-gradient(circle at center, #1C1917 0%, #0C0A09 100%)",
              }}
            >
              <div className="relative w-full h-full">
                <Image
                  src="/assets/logo/logo-transparent.png"
                  alt="Mandi Mafia"
                  fill
                  sizes="120px"
                  className="object-contain filter brightness-[1.05] drop-shadow-[0_4px_10px_rgba(0,0,0,0.6)]"
                  priority
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-center"
            >
              <h2 className="font-heading text-xl text-gold uppercase tracking-[0.1em]">
                Mandi Mafia
              </h2>
              <span className="font-body text-[8px] uppercase tracking-[0.3em] text-silver/60 block mt-1">
                The Syndicate Feast
              </span>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
