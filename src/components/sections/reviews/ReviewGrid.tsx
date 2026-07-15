"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ReviewCard } from "./ReviewCard";
import { reviewsList, Review } from "@/lib/reviews-data";
import { cn } from "@/lib/utils";
import { staggerContainer } from "@/lib/animations";

export function ReviewGrid() {
  const [sortBy, setSortBy] = useState<"newest" | "highest">("highest");

  const sortedReviews = [...reviewsList].sort((a, b) => {
    if (sortBy === "highest") return b.rating - a.rating;
    // Mock date comparison
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  return (
    <div className="space-y-8 select-none">
      
      {/* Sorting Control Header */}
      <div className="flex items-center justify-between border-b border-gold/10 pb-4">
        <span className="font-body text-xs text-silver/60">
          Showing {sortedReviews.length} Verified Reviews
        </span>
        
        <div className="flex items-center gap-2">
          <span className="text-[9px] uppercase tracking-wider text-silver/50 font-body">Sort by</span>
          {(["highest", "newest"] as const).map((mode) => (
            <button
              key={mode}
              onClick={() => setSortBy(mode)}
              className={cn(
                "px-2.5 py-1 text-[9px] uppercase tracking-wider font-body border cursor-pointer transition-all duration-300 outline-none",
                sortBy === mode
                  ? "bg-gold border-gold text-obsidian font-semibold"
                  : "border-silver/20 text-silver/60 hover:border-gold/30 hover:text-gold"
              )}
            >
              {mode === "highest" ? "Highest Rating" : "Newest"}
            </button>
          ))}
        </div>
      </div>

      {/* Grid container */}
      <motion.div
        layout
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer(0.06)}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence mode="popLayout">
          {sortedReviews.map((rev) => (
            <motion.div
              layout
              key={rev.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.35 }}
            >
              <ReviewCard review={rev} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

    </div>
  );
}
