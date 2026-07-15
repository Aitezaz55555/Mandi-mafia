"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { SectionWrapper } from "../layout/SectionWrapper";
import { MaxWidthContainer } from "../shared/MaxWidthContainer";
import { fadeInUp } from "@/lib/animations";

export default function StorySection() {
  return (
    <SectionWrapper id="story" hasSpire={true} className="bg-gradient-to-b from-obsidian to-charcoal/30">
      <MaxWidthContainer>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-8 lg:gap-space-12 items-center">
          
          {/* Column 1: Typography Story */}
          <div className="lg:col-span-6 space-y-space-6 select-text">
            <span className="font-body text-[10px] uppercase tracking-[0.25em] text-gold/80 block font-medium">
              Our Syndicate Heritage
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-ivory font-light leading-tight">
              Arabian Culinary Heritage, <br />
              <span className="italic text-gold">Refined with Modern Luxury</span>
            </h2>
            <div className="h-[1px] bg-gradient-to-r from-gold/30 to-transparent w-24" />
            <p className="font-body text-xs sm:text-sm text-silver/80 leading-relaxed font-light">
              Mandi Mafia is born from a desire to elevate communal Arabian dining. We don’t just serve meals; we orchestrate dining alliances. Using Yemen’s ancient slow-cooking secrets, direct spice routes, and premium local grains, our kitchen crafts mandis and platters that command respect.
            </p>
            <p className="font-body text-xs sm:text-sm text-silver/70 leading-relaxed font-light">
              Every seating in our Vijayawada chambers is designed as a celebration—a pact of flavor and warmth shared between families, friends, and cohorts.
            </p>
            <div className="pt-space-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-gold hover:text-gold-hover font-body text-[10px] uppercase tracking-[0.15em] font-semibold transition-all duration-300 group"
              >
                Meet the Syndicate
                <span className="transform translate-x-0 group-hover:translate-x-1.5 transition-transform duration-300">
                  →
                </span>
              </Link>
            </div>
          </div>

          {/* Column 2: Framed Editorial Image */}
          <div className="lg:col-span-6 flex justify-center">
            <motion.div 
              whileHover={{ scale: 1.01 }}
              className="relative w-full max-w-lg aspect-[4/3] p-1.5 border border-gold/15 bg-charcoal/50 hover:border-gold/30 transition-colors duration-500"
            >
              <div className="relative w-full h-full overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1541532713592-79a0317b6b77?q=80&w=800&auto=format&fit=crop"
                  alt="Arabian slow-cooking spices and visual dining detail"
                  fill
                  sizes="(max-width: 1024px) 100vw, 500px"
                  className="object-cover transition-transform duration-[1200ms] hover:scale-105"
                  loading="lazy"
                />
              </div>
              {/* Overlay shadow corners */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-gold/40 m-3" />
              <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-gold/40 m-3" />
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-gold/40 m-3" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-gold/40 m-3" />
            </motion.div>
          </div>

        </div>
      </MaxWidthContainer>
    </SectionWrapper>
  );
}
