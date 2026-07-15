"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { fadeInUp } from "@/lib/animations";
import { ZoomIn } from "lucide-react";

interface GalleryCardProps {
  item: {
    id: string;
    title: string;
    category: string;
    image: string;
    thumbnail: string;
    alt: string;
  };
  onClick: () => void;
}

export function GalleryCard({ item, onClick }: GalleryCardProps) {
  return (
    <motion.button
      variants={fadeInUp}
      onClick={onClick}
      className={cn(
        "group relative aspect-[4/3] w-full bg-charcoal border border-gold/10 hover:border-gold/35 overflow-hidden shadow-md cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-obsidian"
      )}
      aria-label={`Open lightbox view of ${item.title}`}
    >
      {/* Decorative Border details */}
      <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-gold/30 opacity-40 m-3 group-hover:opacity-100 transition-opacity z-10" />
      <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-gold/30 opacity-40 m-3 group-hover:opacity-100 transition-opacity z-10" />

      {/* Image asset container */}
      <div className="relative w-full h-full overflow-hidden">
        <Image
          src={item.thumbnail}
          alt={item.alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 350px"
          className="object-cover transition-transform duration-[1200ms] ease-smooth group-hover:scale-105 filter brightness-[0.8]"
          loading="lazy"
        />
        
        {/* Dark linear shadow overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/45 to-transparent" />
      </div>

      {/* Slide-in details & Zoom indicator */}
      <div className="absolute inset-0 flex flex-col justify-between p-space-5 z-10 text-left select-none">
        
        {/* Category Label at top */}
        <div className="flex items-center justify-between">
          <span className="px-2 py-0.5 bg-obsidian/80 backdrop-blur-md text-[8px] uppercase tracking-widest text-gold font-body border border-gold/15">
            {item.category.replace("-", " ")}
          </span>
          <ZoomIn className="w-4 h-4 text-gold/0 group-hover:text-gold/80 transition-colors duration-300 shrink-0" />
        </div>

        {/* Title reveal at bottom */}
        <div className="transform translate-y-2 group-hover:translate-y-0 opacity-80 group-hover:opacity-100 transition-all duration-500 ease-smooth">
          <h3 className="font-heading text-lg text-ivory leading-snug">
            {item.title}
          </h3>
        </div>
      </div>
    </motion.button>
  );
}
