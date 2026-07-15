"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionWrapper } from "../layout/SectionWrapper";
import { MaxWidthContainer } from "../shared/MaxWidthContainer";
import { fadeInUp } from "@/lib/animations";

export default function ExperienceSection() {
  return (
    <SectionWrapper id="experience" hasSpire={true} className="bg-charcoal/5">
      <MaxWidthContainer className="space-y-24 md:space-y-32">
        
        {/* ROW 1: Private Dining (Image Left, Text Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-8 lg:gap-space-12 items-center">
          {/* Image */}
          <div className="lg:col-span-6 flex justify-center order-2 lg:order-1">
            <motion.div 
              whileHover={{ scale: 1.01 }}
              className="relative w-full max-w-lg aspect-[4/3] p-1.5 border border-gold/15 bg-charcoal/50 hover:border-gold/30 transition-colors duration-500"
            >
              <div className="relative w-full h-full overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop"
                  alt="Mandi Mafia private dining cabin ambiance"
                  fill
                  sizes="(max-width: 1024px) 100vw, 500px"
                  className="object-cover transition-transform duration-[1200ms] hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-gold/40 m-3" />
              <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-gold/40 m-3" />
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-gold/40 m-3" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-gold/40 m-3" />
            </motion.div>
          </div>

          {/* Text */}
          <div className="lg:col-span-6 space-y-space-4 order-1 lg:order-2 select-text">
            <span className="font-body text-[10px] uppercase tracking-[0.25em] text-gold/80 block font-medium">
              Chambers of Solitude
            </span>
            <h3 className="font-heading text-2xl sm:text-3xl md:text-4xl text-ivory font-light leading-tight">
              Exclusive Private Dining & <br />
              <span className="italic text-gold">Premium Speakeasy Ambience</span>
            </h3>
            <div className="h-[1px] bg-gradient-to-r from-gold/30 to-transparent w-20" />
            <p className="font-body text-xs sm:text-sm text-silver/80 leading-relaxed font-light">
              Step away from the crowd. Our custom-designed family cabins and private dining sections offer a sanctuary of comfort. Surrounded by stone textured walls and soft amber lantern glows, you can focus on the taste and the conversation.
            </p>
            <p className="font-body text-xs sm:text-sm text-silver/70 leading-relaxed font-light">
              Attentive table service is managed through dedicated concierge bells, ensuring your drinks are filled and platters served without interruption.
            </p>
          </div>
        </div>

        {/* ROW 2: Family Celebrations (Text Left, Image Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-8 lg:gap-space-12 items-center">
          {/* Text */}
          <div className="lg:col-span-6 space-y-space-4 select-text">
            <span className="font-body text-[10px] uppercase tracking-[0.25em] text-gold/80 block font-medium">
              The Family Alliance
            </span>
            <h3 className="font-heading text-2xl sm:text-3xl md:text-4xl text-ivory font-light leading-tight">
              Grand Shared Feasts & <br />
              <span className="italic text-gold">Communal Celebrations</span>
            </h3>
            <div className="h-[1px] bg-gradient-to-r from-gold/30 to-transparent w-20" />
            <p className="font-body text-xs sm:text-sm text-silver/80 leading-relaxed font-light">
              Arabian hospitality centers on sharing. Our signature *Thal* platters are designed to encourage family togetherness and camaraderie. Celebrate birthdays, milestones, and weekend reunions around shared basmati layers, premium roasts, and mocktails.
            </p>
            <p className="font-body text-xs sm:text-sm text-silver/70 leading-relaxed font-light">
              For larger gatherings, our culinary team designs custom group tasting menus that combine traditional starters with gourmet platters, ensuring every paton is satisfied.
            </p>
          </div>

          {/* Video Showcase loop */}
          <div className="lg:col-span-6 flex justify-center">
            <motion.div 
              whileHover={{ scale: 1.01 }}
              className="relative w-full max-w-lg aspect-[4/3] p-1.5 border border-gold/15 bg-charcoal/50 hover:border-gold/30 transition-colors duration-500"
            >
              <div className="relative w-full h-full overflow-hidden bg-obsidian">
                <video
                  src="/assets/food/food-showcase.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover filter brightness-[0.7] hover:scale-103 transition-transform duration-700"
                />
              </div>
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

