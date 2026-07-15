"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Users, Info, Plus } from "lucide-react";
import { Dish } from "@/lib/menu-data";
import { fadeInUp } from "@/lib/animations";

interface DishCardProps {
  dish: Dish;
  onOpenDetails: (dish: Dish) => void;
  onReserve: (dish: Dish) => void;
}

export function DishCard({ dish, onOpenDetails, onReserve }: DishCardProps) {
  return (
    <motion.div
      variants={fadeInUp}
      className="group relative bg-charcoal border border-gold/10 hover:border-gold/30 flex flex-col justify-between h-full transition-all duration-500 hover:shadow-[0_10px_25px_rgba(0,0,0,0.35)]"
    >
      {/* Absolute design corners */}
      <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-gold/25 opacity-40 m-3 group-hover:opacity-100 transition-opacity" />
      <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-gold/25 opacity-40 m-3 group-hover:opacity-100 transition-opacity" />

      <div>
        {/* Card Image Container */}
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-charcoal-muted">
          <Image
            src={dish.image}
            alt={dish.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 350px"
            className="object-cover transition-transform duration-[1200ms] ease-smooth group-hover:scale-105 filter brightness-[0.8]"
            loading="lazy"
          />
          {/* Overlay fade */}
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian/30 to-transparent" />
          
          {/* Dynamic Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
            {dish.isSignature && (
              <span className="px-2 py-0.5 bg-gold text-obsidian text-[7px] uppercase tracking-widest font-body font-semibold">
                Signature
              </span>
            )}
            {dish.isBestseller && (
              <span className="px-2 py-0.5 bg-burgundy text-ivory text-[7px] uppercase tracking-widest font-body font-semibold border border-gold/20">
                Bestseller
              </span>
            )}
          </div>
        </div>

        {/* Card Typography details */}
        <div className="p-space-5 space-y-space-3 select-text">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-heading text-lg sm:text-xl text-ivory group-hover:text-gold transition-colors duration-300">
              {dish.name}
            </h3>
            <span className="font-heading text-base text-gold shrink-0 mt-0.5">
              {dish.price}
            </span>
          </div>
          <p className="font-body text-xs text-silver/70 leading-relaxed font-light line-clamp-3">
            {dish.description}
          </p>
        </div>
      </div>

      {/* Card Action footer bar */}
      <div className="px-space-5 pb-space-5 pt-0 mt-auto flex items-center justify-between gap-3">
        {/* Serves count indicator */}
        <div className="flex items-center gap-1.5 text-silver/50 text-[10px] font-body uppercase tracking-wider">
          {dish.serves ? (
            <>
              <Users className="w-3.5 h-3.5 text-gold/60" />
              <span>{dish.serves}</span>
            </>
          ) : (
            <span className="text-[8px] text-silver/30 font-light">Individual</span>
          )}
        </div>

        {/* Buttons Action Group */}
        <div className="flex items-center gap-2 pointer-events-auto">
          {/* Info Details button */}
          <button
            onClick={() => onOpenDetails(dish)}
            className="w-8 h-8 rounded-full border border-silver/20 hover:border-gold hover:text-gold flex items-center justify-center transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-obsidian outline-none cursor-pointer"
            title="View Details"
          >
            <Info className="w-4 h-4" />
          </button>
          
          {/* Direct reservation connector */}
          <button
            onClick={() => onReserve(dish)}
            className="px-3 h-8 bg-gold hover:bg-gold-hover text-obsidian font-body text-[9px] uppercase tracking-wider font-semibold flex items-center gap-1 transition-all duration-300 focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-obsidian outline-none cursor-pointer"
            title="Reserve Dish with Table"
          >
            <Plus className="w-3 h-3" />
            <span>Book</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
}
