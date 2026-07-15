"use client";

import { motion } from "framer-motion";
import { Star, MessageSquare, Award } from "lucide-react";

const ratingBars = [
  { stars: 5, percentage: 88 },
  { stars: 4, percentage: 8 },
  { stars: 3, percentage: 3 },
  { stars: 2, percentage: 1 },
  { stars: 1, percentage: 0 },
];

export function ReviewSummary() {
  return (
    <div className="bg-charcoal border border-gold/10 p-space-6 md:p-space-8 shadow-md select-text">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-space-6 items-center">
        
        {/* Aggregated Average */}
        <div className="md:col-span-4 text-center space-y-2 border-b md:border-b-0 md:border-r border-gold/10 pb-6 md:pb-0 md:pr-6">
          <span className="text-[10px] text-silver/50 block uppercase tracking-widest font-body">Google Rating</span>
          <span className="font-heading text-5xl sm:text-6xl text-gold font-light block">4.8</span>
          
          <div className="flex justify-center text-gold gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-current" />
            ))}
          </div>
          
          <p className="font-body text-[11px] text-silver/70 leading-relaxed font-light">
            Based on 2,410+ direct patron submissions on Google. Updated daily.
          </p>
        </div>

        {/* Breakdown bar columns */}
        <div className="md:col-span-5 space-y-2 px-0 md:px-6">
          {ratingBars.map((bar) => (
            <div key={bar.stars} className="flex items-center gap-3 text-xs font-light text-silver/80">
              <span className="w-3 text-right">{bar.stars}</span>
              <Star className="w-3.5 h-3.5 fill-gold text-gold shrink-0" />
              
              {/* Dynamic progress bar background */}
              <div className="flex-1 h-2 bg-obsidian/60 relative rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${bar.percentage}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="h-full bg-gold rounded-full"
                />
              </div>

              <span className="w-8 text-right font-mono text-[10px]">{bar.percentage}%</span>
            </div>
          ))}
        </div>

        {/* Extra statistics */}
        <div className="md:col-span-3 space-y-4 border-t md:border-t-0 md:border-l border-gold/10 pt-6 md:pt-0 md:pl-6 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2.5">
            <MessageSquare className="w-4 h-4 text-gold/60" />
            <div>
              <span className="font-heading text-lg text-ivory leading-none block">98.2%</span>
              <span className="text-[9px] uppercase tracking-wider text-silver/50 font-body">Satisfied Patrons</span>
            </div>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-2.5">
            <Award className="w-4 h-4 text-gold/60" />
            <div>
              <span className="font-heading text-lg text-ivory leading-none block">4.9 / 5.0</span>
              <span className="text-[9px] uppercase tracking-wider text-silver/50 font-body">Cabin Service Score</span>
            </div>
          </div>
          
          <p className="text-[8px] text-silver/40 font-body leading-relaxed italic">
            Future-ready API modules: Google Maps API triggers can be bound directly to this metrics block.
          </p>
        </div>

      </div>
    </div>
  );
}
