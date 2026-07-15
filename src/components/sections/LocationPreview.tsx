"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "../layout/SectionWrapper";
import { MaxWidthContainer } from "../shared/MaxWidthContainer";
import { MapPin, Clock, Phone, Car, Compass } from "lucide-react";

export default function LocationPreview() {
  return (
    <SectionWrapper id="location" hasSpire={true} className="bg-gradient-to-b from-charcoal/20 to-obsidian">
      <MaxWidthContainer>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-8 lg:gap-space-12 items-center">
          
          {/* COLUMN 1: Detailed location & hours */}
          <div className="lg:col-span-6 space-y-space-6 select-text">
            <span className="font-body text-[10px] uppercase tracking-[0.25em] text-gold/80 block font-medium">
              Find the Syndicate
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-ivory font-light leading-tight">
              Locate the Chambers
            </h2>
            <div className="h-[1px] bg-gradient-to-r from-gold/30 to-transparent w-20" />
            
            <ul className="space-y-space-5 text-silver/80 text-sm font-light">
              <li className="flex gap-space-4 items-start">
                <div className="w-8 h-8 rounded-full border border-gold/25 flex items-center justify-center text-gold shrink-0 bg-gold/5 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-heading text-base text-ivory font-medium">Chambers Address</h4>
                  <p className="text-xs text-silver/70 mt-1 leading-relaxed">
                    Beside Skyline Hub, Mandi Mafia Street, Vijayawada, AP - 520001, India
                  </p>
                </div>
              </li>

              <li className="flex gap-space-4 items-start">
                <div className="w-8 h-8 rounded-full border border-gold/25 flex items-center justify-center text-gold shrink-0 bg-gold/5 mt-0.5">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-heading text-base text-ivory font-medium">Operations Hours</h4>
                  <p className="text-xs text-silver/70 mt-1 leading-relaxed">
                    Monday — Sunday: 11:30 AM — 11:00 PM <br />
                    <span className="text-[10px] text-gold/80">Kitchen orders close at 10:30 PM</span>
                  </p>
                </div>
              </li>

              <li className="flex gap-space-4 items-start">
                <div className="w-8 h-8 rounded-full border border-gold/25 flex items-center justify-center text-gold shrink-0 bg-gold/5 mt-0.5">
                  <Car className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-heading text-base text-ivory font-medium">Patron Parking</h4>
                  <p className="text-xs text-silver/70 mt-1 leading-relaxed">
                    Complimentary valet service and private secure parking fields are open for all patrons.
                  </p>
                </div>
              </li>
            </ul>

            <div className="pt-space-2">
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex px-space-8 h-12 bg-gold hover:bg-gold-hover text-obsidian font-body text-[10px] uppercase tracking-[0.25em] font-semibold items-center justify-center gap-2 border border-gold hover:shadow-gold-glow transition-all duration-300 cursor-pointer focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-obsidian outline-none"
              >
                <Compass className="w-4 h-4" />
                Get Directions
              </motion.a>
            </div>
          </div>

          {/* COLUMN 2: Elegant Map Placeholder */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-lg aspect-[4/3] p-1.5 border border-gold/15 bg-charcoal/50 hover:border-gold/30 transition-colors duration-500 overflow-hidden">
              <div className="relative w-full h-full bg-[#181818] flex flex-col items-center justify-center text-center p-6 space-y-3">
                
                {/* Background grid details representing map visual style */}
                <div 
                  className="absolute inset-0 opacity-[0.06] mix-blend-overlay"
                  style={{
                    backgroundImage: `linear-gradient(to right, #ccc 1px, transparent 1px), linear-gradient(to bottom, #ccc 1px, transparent 1px)`,
                    backgroundSize: "20px 20px"
                  }}
                />
                
                {/* Minimalist marker vector */}
                <div className="relative w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center text-gold bg-gold/5 shadow-md">
                  <MapPin className="w-6 h-6 animate-bounce" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-heading text-lg text-gold font-medium">Interactive Map Registry</h4>
                  <p className="font-body text-[10px] text-silver/60 uppercase tracking-widest max-w-xs mx-auto">
                    Coordinates: 16.5062° N, 80.6480° E
                  </p>
                </div>
                <p className="font-body text-xs text-silver/70 max-w-xs mx-auto leading-relaxed font-light z-10">
                  Located beside Vijayawada's landmark Skyline Hub. Valet parking stands are ready at the entry chambers.
                </p>
              </div>
            </div>
          </div>

        </div>
      </MaxWidthContainer>
    </SectionWrapper>
  );
}
