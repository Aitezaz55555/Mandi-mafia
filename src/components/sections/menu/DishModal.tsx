"use client";

import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, Users, Check, ArrowRight } from "lucide-react";
import { Dish } from "@/lib/menu-data";

interface DishModalProps {
  dish: Dish | null;
  isOpen: boolean;
  onClose: () => void;
  onReserve: (dish: Dish) => void;
}

export function DishModal({ dish, isOpen, onClose, onReserve }: DishModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  // Close modal when hitting Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
      
      // Accessibility: Focus trapping anchor
      setTimeout(() => {
        modalRef.current?.focus();
      }, 50);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!dish) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-space-4 sm:p-space-6 md:p-space-8 overflow-y-auto">
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-obsidian/90 backdrop-blur-md cursor-pointer"
          />

          {/* Modal Container Card */}
          <motion.div
            ref={modalRef}
            tabIndex={-1}
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-4xl bg-charcoal border border-gold/15 flex flex-col md:flex-row shadow-2xl z-10 overflow-hidden focus:outline-none"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            {/* Close Trigger Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-obsidian/85 backdrop-blur-md border border-gold/15 text-gold flex items-center justify-center hover:border-gold hover:text-gold-hover transition-all duration-300 focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-obsidian outline-none cursor-pointer"
              aria-label="Close details"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Left Half: Cinematic Image */}
            <div className="relative w-full md:w-1/2 aspect-[4/3] md:aspect-auto min-h-[250px] md:min-h-[450px]">
              <Image
                src={dish.image}
                alt={dish.name}
                fill
                sizes="(max-width: 768px) 100vw, 450px"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-obsidian/30 to-transparent" />
            </div>

            {/* Right Half: Recipe description details */}
            <div className="w-full md:w-1/2 p-space-6 md:p-space-8 flex flex-col justify-between space-y-space-6 max-h-[75vh] md:max-h-[90vh] overflow-y-auto select-text">
              <div className="space-y-space-4">
                {/* Meta Tags */}
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 bg-gold/10 text-gold text-[8px] uppercase tracking-wider font-body border border-gold/15">
                    {dish.category.replace("-", " ")}
                  </span>
                  {dish.serves && (
                    <div className="flex items-center gap-1 text-[9px] uppercase tracking-wider text-silver/60 font-body">
                      <Users className="w-3.5 h-3.5 text-gold/60" />
                      <span>{dish.serves}</span>
                    </div>
                  )}
                </div>

                <div className="space-y-space-2">
                  <h2 id="modal-title" className="font-heading text-2xl md:text-3xl text-ivory">
                    {dish.name}
                  </h2>
                  <span className="font-heading text-xl text-gold block">
                    {dish.price}
                  </span>
                </div>

                <div className="h-[1px] bg-gradient-to-r from-gold/20 to-transparent w-full" />

                <p className="font-body text-xs text-silver/80 leading-relaxed font-light">
                  {dish.description}
                </p>

                {/* Composition/Ingredients list */}
                <div className="space-y-space-2">
                  <h4 className="font-body text-[9px] uppercase tracking-wider text-gold font-semibold">
                    Composition
                  </h4>
                  <ul className="grid grid-cols-2 gap-space-2 text-xs font-light text-silver/70">
                    {dish.ingredients.map((item, index) => (
                      <li key={index} className="flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5 text-gold/60 shrink-0" />
                        <span className="line-clamp-1">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Concierge notes */}
                {dish.recommendations && (
                  <div className="p-space-3 bg-obsidian/40 border border-gold/5 space-y-1">
                    <h4 className="font-body text-[8px] uppercase tracking-wider text-gold font-semibold">
                      Concierge Recommendation
                    </h4>
                    <p className="font-body text-[10px] text-silver/70 leading-relaxed font-light">
                      {dish.recommendations}
                    </p>
                  </div>
                )}
              </div>

              {/* CTA Reservation Button */}
              <div className="pt-space-4 border-t border-gold/10">
                <button
                  onClick={() => onReserve(dish)}
                  className="w-full h-12 bg-gold hover:bg-gold-hover text-obsidian font-body text-xs uppercase tracking-[0.15em] font-semibold flex items-center justify-center gap-2 border border-gold hover:shadow-gold-glow transition-all duration-300 focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-obsidian outline-none cursor-pointer"
                >
                  Reserve Table with {dish.name}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
