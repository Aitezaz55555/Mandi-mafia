"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { venueSpacesList, capacityBracketsList } from "@/lib/events-data";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import { Users, Info } from "lucide-react";

export function VenueShowcase() {
  return (
    <section className="py-16 bg-obsidian">
      <div className="max-w-7xl mx-auto px-space-4 md:px-space-6 space-y-16 select-text">
        
        {/* Section 1: Venue Spaces Grid */}
        <div className="space-y-12">
          <div className="text-center max-w-xl mx-auto space-y-space-2">
            <span className="font-body text-[9px] uppercase tracking-[0.2em] text-gold/80 font-medium font-semibold block">Visual Tour</span>
            <h3 className="font-heading text-2xl md:text-3xl text-ivory">Chamber Spaces</h3>
            <p className="font-body text-xs text-silver/65 leading-relaxed font-light">
              Explore the physical layouts inside Mandi Mafia. We cater seating setups according to private groups needs.
            </p>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer(0.08)}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
          >
            {venueSpacesList.map((space) => (
              <motion.div
                variants={fadeInUp}
                key={space.id}
                className="group relative aspect-[4/3] border border-gold/10 hover:border-gold/30 bg-charcoal overflow-hidden shadow-md cursor-pointer"
              >
                <Image
                  src={space.image}
                  alt={space.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 300px"
                  className="object-cover transition-transform duration-[1200ms] group-hover:scale-105 filter brightness-[0.75]"
                  loading="lazy"
                />
                
                {/* Overlay Text */}
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/45 to-transparent flex flex-col justify-end p-5 select-none text-left">
                  <span className="font-body text-[8px] uppercase tracking-widest text-gold mb-1">
                    Capacity: {space.capacity}
                  </span>
                  <h4 className="font-heading text-lg text-ivory">
                    {space.name}
                  </h4>
                  <p className="font-body text-[10px] text-silver/70 leading-relaxed font-light mt-1 hidden group-hover:block transition-all">
                    {space.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Section 2: Capacity Brackets Guide */}
        <div className="space-y-12 border-t border-gold/10 pt-16">
          <div className="text-center max-w-xl mx-auto space-y-space-2">
            <span className="font-body text-[9px] uppercase tracking-[0.2em] text-gold/80 font-medium font-semibold block">Capacity Brackets</span>
            <h3 className="font-heading text-2xl md:text-3xl text-ivory font-light">Seating Solutions by Group Size</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {capacityBracketsList.map((bracket, index) => (
              <div key={index} className="p-5 border border-gold/5 bg-charcoal text-center space-y-3 hover:border-gold/25 transition-all">
                <div className="w-8 h-8 rounded-full border border-gold/20 text-gold bg-gold/5 flex items-center justify-center mx-auto">
                  <Users className="w-4 h-4" />
                </div>
                <h4 className="font-heading text-base text-ivory font-medium">{bracket.label}</h4>
                <p className="font-body text-[11px] text-silver/70 leading-relaxed font-light">
                  {bracket.description}
                </p>
                <div className="pt-2 border-t border-gold/5 flex justify-center items-center gap-1 text-[9px] text-gold font-body uppercase tracking-wider">
                  <Info className="w-3 h-3 shrink-0" />
                  <span>Use: {bracket.bestSpace}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
