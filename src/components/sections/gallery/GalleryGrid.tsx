"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { galleryCategories, galleryItemsList } from "@/lib/gallery-data";
import { GalleryCard } from "./GalleryCard";
import { GalleryLightbox } from "./GalleryLightbox";
import { cn } from "@/lib/utils";
import { staggerContainer, fadeInUp } from "@/lib/animations";

export function GalleryGrid() {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Filter items matching
  const filteredItems = galleryItemsList.filter((item) => {
    if (activeFilter === "all") return true;
    return item.category === activeFilter;
  });

  const handleOpenLightbox = (itemId: string) => {
    const index = galleryItemsList.findIndex((item) => item.id === itemId);
    if (index !== -1) {
      setLightboxIndex(index);
      setLightboxOpen(true);
    }
  };

  const handlePrevLightbox = () => {
    if (lightboxIndex !== null) {
      const prev = lightboxIndex === 0 ? galleryItemsList.length - 1 : lightboxIndex - 1;
      setLightboxIndex(prev);
    }
  };

  const handleNextLightbox = () => {
    if (lightboxIndex !== null) {
      const next = lightboxIndex === galleryItemsList.length - 1 ? 0 : lightboxIndex + 1;
      setLightboxIndex(next);
    }
  };

  return (
    <div className="relative w-full z-10 select-none pb-24">
      {/* GALLERY FILTER CATEGORY TABS */}
      <div className="max-w-7xl mx-auto px-space-4 md:px-space-6 mb-12">
        <div className="border-b border-gold/15 py-3 flex items-center justify-start md:justify-center overflow-x-auto gap-space-4 md:gap-space-6 scrollbar-none">
          <nav className="flex items-center gap-space-4 md:gap-space-6 min-w-max">
            {galleryCategories.map((cat) => {
              const isActive = activeFilter === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveFilter(cat.id)}
                  className={cn(
                    "font-body text-xs uppercase tracking-[0.15em] transition-all duration-300 py-1.5 cursor-pointer outline-none relative",
                    isActive ? "text-gold font-medium" : "text-silver/60 hover:text-ivory"
                  )}
                >
                  {cat.label}
                  {isActive && (
                    <motion.span
                      layoutId="galleryActiveUnderline"
                      className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gold"
                      transition={{ type: "spring", stiffness: 350, damping: 28 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>
        </div>
      </div>

      {/* MASONRY RESPONSIVE IMAGE GRID */}
      <div className="max-w-7xl mx-auto px-space-4 md:px-space-6">
        <motion.div
          layout
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer(0.06)}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-space-4 md:gap-space-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
              >
                <GalleryCard
                  item={item}
                  onClick={() => handleOpenLightbox(item.id)}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* LIGHTBOX SLIDES CAROUSEL */}
      <GalleryLightbox
        items={galleryItemsList}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onPrev={handlePrevLightbox}
        onNext={handleNextLightbox}
      />
    </div>
  );
}
