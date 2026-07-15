"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { eventTypesList } from "@/lib/events-data";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import { Users, Tag } from "lucide-react";

export function EventTypes() {
  return (
    <section className="py-16 bg-obsidian">
      <div className="max-w-7xl mx-auto px-space-4 md:px-space-6 space-y-12 select-text">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto space-y-space-2">
          <span className="font-body text-[9px] uppercase tracking-[0.2em] text-gold/80 font-medium font-semibold block">Tailored Configurations</span>
          <h3 className="font-heading text-2xl md:text-3xl text-ivory">Host Your Alliances</h3>
          <p className="font-body text-xs text-silver/65 leading-relaxed font-light">
            We adapt our dining chambers and menus to suit different event scales, from corporate board lunches to wedding buffets.
          </p>
        </div>

        {/* Card list */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer(0.08)}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {eventTypesList.map((type) => (
            <motion.div
              variants={fadeInUp}
              key={type.id}
              className="group bg-charcoal border border-gold/10 hover:border-gold/35 flex flex-col justify-between h-full transition-all duration-500 hover:shadow-[0_10px_25px_rgba(0,0,0,0.3)]"
            >
              {/* Image Frame */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-charcoal-muted">
                <Image
                  src={type.image}
                  alt={type.name}
                  fill
                  className="object-cover transition-transform duration-[1200ms] group-hover:scale-105 filter brightness-[0.75]"
                  sizes="(max-width: 640px) 100vw, 300px"
                  loading="lazy"
                />
              </div>

              {/* Detail fields */}
              <div className="p-space-5 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <h4 className="font-heading text-lg text-ivory group-hover:text-gold transition-colors duration-300">
                    {type.name}
                  </h4>
                  <p className="font-body text-xs text-silver/70 leading-relaxed font-light">
                    {type.description}
                  </p>
                </div>

                {/* Footer metadata details */}
                <div className="border-t border-gold/10 pt-3 mt-4 flex items-center justify-between text-[10px] text-silver/50 font-body uppercase tracking-wider">
                  <div className="flex items-center gap-1">
                    <Users className="w-3.5 h-3.5 text-gold/60" />
                    <span>{type.capacity}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Tag className="w-3.5 h-3.5 text-gold/60" />
                    <span>Starts {type.startingPrice}</span>
                  </div>
                </div>
              </div>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
