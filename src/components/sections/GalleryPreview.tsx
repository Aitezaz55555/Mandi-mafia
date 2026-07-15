"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { SectionWrapper } from "../layout/SectionWrapper";
import { MaxWidthContainer } from "../shared/MaxWidthContainer";
import { staggerContainer, fadeInUp } from "@/lib/animations";

interface GalleryItem {
  id: number;
  title: string;
  image: string;
  category: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: "Signature Mutton Mandi Platter",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=600&auto=format&fit=crop",
    category: "The Feast",
  },
  {
    id: 2,
    title: "Lantern-lit Private Cabin Seating",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=600&auto=format&fit=crop",
    category: "The Ambience",
  },
  {
    id: 3,
    title: "Imported Cardamom & Spice Grinding",
    image: "https://images.unsplash.com/photo-1599940824399-b87987ceb72a?q=80&w=600&auto=format&fit=crop",
    category: "The Craft",
  },
  {
    id: 4,
    title: "Wood-fired Underground Clay Tandoor",
    image: "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?q=80&w=600&auto=format&fit=crop",
    category: "The Kitchen",
  },
  {
    id: 5,
    title: "Communal Family Feast Celebration",
    image: "https://images.unsplash.com/photo-1543007630-9710e4a00a20?q=80&w=600&auto=format&fit=crop",
    category: "Togetherness",
  },
  {
    id: 6,
    title: "Pomegranate Saffron Mocktail Infusion",
    image: "https://images.unsplash.com/photo-1536935338788-846bb9981813?q=80&w=600&auto=format&fit=crop",
    category: "Beverages",
  },
];

export default function GalleryPreview() {
  return (
    <SectionWrapper id="gallery-preview" hasSpire={true} className="bg-gradient-to-b from-obsidian to-charcoal/20">
      <MaxWidthContainer>
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-space-3">
          <span className="font-body text-[10px] uppercase tracking-[0.25em] text-gold/80 font-medium">
            Visual Intrigue
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-ivory font-light leading-tight">
            Chambers & Creations
          </h2>
          <div className="h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent w-40 mx-auto" />
          <p className="font-body text-xs sm:text-sm text-silver/70 leading-relaxed font-light">
            Capture a glimpse of the texture, light, and culinary standards inside Mandi Mafia. Every view represents an authentic detail.
          </p>
        </div>

        {/* Gallery Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer(0.08)}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-space-4 md:gap-space-6"
        >
          {galleryItems.map((item) => (
            <GalleryCard key={item.id} item={item} />
          ))}
        </motion.div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block"
          >
            <Link
              href="/gallery"
              className="inline-flex items-center justify-center px-space-8 h-12 border border-gold/30 hover:border-gold hover:bg-gold/5 text-gold font-body text-[10px] uppercase tracking-[0.15em] font-semibold transition-all duration-300 cursor-pointer focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-obsidian outline-none"
            >
              View Full Gallery
            </Link>
          </motion.div>
        </div>

      </MaxWidthContainer>
    </SectionWrapper>
  );
}

function GalleryCard({ item }: { item: GalleryItem }) {
  return (
    <motion.div
      variants={fadeInUp}
      className="group relative aspect-[4/3] border border-gold/10 hover:border-gold/30 bg-charcoal overflow-hidden cursor-pointer shadow-md"
    >
      <Image
        src={item.image}
        alt={item.title}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 350px"
        className="object-cover transition-transform duration-[1200ms] ease-smooth group-hover:scale-105 filter brightness-[0.75]"
        loading="lazy"
      />
      
      {/* Sliding Dark overlay details */}
      <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-space-5 select-none">
        <span className="font-body text-[8px] uppercase tracking-widest text-gold mb-1">
          {item.category}
        </span>
        <h3 className="font-heading text-lg text-ivory leading-snug">
          {item.title}
        </h3>
      </div>
    </motion.div>
  );
}
