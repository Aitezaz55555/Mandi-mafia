"use client";

import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { GalleryItem } from "@/lib/gallery-data";

interface GalleryLightboxProps {
  items: GalleryItem[];
  currentIndex: number | null;
  isOpen: boolean;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export function GalleryLightbox({
  items,
  currentIndex,
  isOpen,
  onClose,
  onPrev,
  onNext,
}: GalleryLightboxProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Keyboard navigation & scroll lock control
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowLeft") onPrev();
      else if (e.key === "ArrowRight") onNext();
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
      
      // Focus modal for screen readers
      setTimeout(() => {
        containerRef.current?.focus();
      }, 50);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose, onPrev, onNext]);

  if (currentIndex === null || !isOpen) return null;

  const currentItem = items[currentIndex];

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          ref={containerRef}
          tabIndex={-1}
          className="fixed inset-0 z-[100] flex flex-col justify-between p-space-4 sm:p-space-6 bg-obsidian/95 select-none focus:outline-none"
          role="dialog"
          aria-modal="true"
        >
          {/* Backdrop Dismiss Overlay */}
          <div className="absolute inset-0 z-0 bg-black/90 cursor-pointer" onClick={onClose} />

          {/* Lightbox Actions Header */}
          <div className="relative w-full z-10 flex items-center justify-between py-2 text-ivory">
            <span className="font-body text-[10px] text-silver/60 uppercase tracking-widest">
              Gallery Registry ({currentIndex + 1} / {items.length})
            </span>
            <button
              onClick={onClose}
              className="w-10 h-10 rounded-full border border-silver/20 hover:border-gold hover:text-gold flex items-center justify-center transition-all duration-300 focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-obsidian outline-none cursor-pointer bg-obsidian/45"
              aria-label="Close Lightbox"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Mid section: Viewport Image and Navigation Arrows */}
          <div className="relative flex-1 w-full max-w-6xl mx-auto flex items-center justify-between gap-space-4 z-10">
            {/* Prev Image Button */}
            <button
              onClick={onPrev}
              className="w-12 h-12 rounded-full border border-silver/20 hover:border-gold hover:text-gold flex items-center justify-center transition-all duration-300 shrink-0 focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-obsidian outline-none cursor-pointer bg-obsidian/60 backdrop-blur-sm"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Main Picture Frame */}
            <div className="relative flex-1 w-full h-[55vh] md:h-[65vh] overflow-hidden">
              <motion.div
                key={currentItem.id}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3 }}
                className="relative w-full h-full"
              >
                <Image
                  src={currentItem.image}
                  alt={currentItem.alt}
                  fill
                  className="object-contain"
                  priority
                />
              </motion.div>
            </div>

            {/* Next Image Button */}
            <button
              onClick={onNext}
              className="w-12 h-12 rounded-full border border-silver/20 hover:border-gold hover:text-gold flex items-center justify-center transition-all duration-300 shrink-0 focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-obsidian outline-none cursor-pointer bg-obsidian/60 backdrop-blur-sm"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Bottom Captions panel */}
          <div className="relative max-w-xl mx-auto text-center space-y-space-2 z-10 pb-4 select-text">
            <span className="font-body text-[8px] uppercase tracking-widest text-gold block">
              {currentItem.category.replace("-", " ")}
            </span>
            <h2 className="font-heading text-lg sm:text-2xl text-ivory">
              {currentItem.title}
            </h2>
            <p className="font-body text-[11px] sm:text-xs text-silver/70 leading-relaxed font-light">
              {currentItem.description}
            </p>
          </div>

        </div>
      )}
    </AnimatePresence>
  );
}
