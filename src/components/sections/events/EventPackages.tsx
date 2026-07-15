"use client";

import { motion } from "framer-motion";
import { eventPackagesList, EventPackage } from "@/lib/events-data";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import { Check, Sparkles } from "lucide-react";

export function EventPackages() {
  return (
    <section className="py-16 bg-charcoal/5 border-t border-b border-gold/10">
      <div className="max-w-7xl mx-auto px-space-4 md:px-space-6 space-y-12 select-text">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto space-y-space-2">
          <span className="font-body text-[9px] uppercase tracking-[0.2em] text-gold/80 font-medium font-semibold block">Curated Menus</span>
          <h3 className="font-heading text-2xl md:text-3xl text-ivory">Package Tiers</h3>
          <p className="font-body text-xs text-silver/65 leading-relaxed font-light">
            Select an event dining tier. Every package guarantees authentic slow-cooked roasts and professional host assistance.
          </p>
        </div>

        {/* Packages Cards list grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer(0.1)}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto"
        >
          {eventPackagesList.map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} />
          ))}
        </motion.div>

      </div>
    </section>
  );
}

function PackageCard({ pkg }: { pkg: EventPackage }) {
  const isRoyal = pkg.id === "pkg-royal";

  return (
    <motion.div
      variants={fadeInUp}
      className={cn(
        "group relative bg-charcoal border p-space-6 md:p-space-8 flex flex-col justify-between h-full transition-all duration-500 shadow-md",
        isRoyal
          ? "border-gold hover:shadow-[0_10px_30px_rgba(212,175,55,0.15)]"
          : "border-gold/10 hover:border-gold/30 hover:shadow-[0_10px_25px_rgba(0,0,0,0.35)]"
      )}
    >
      {/* Decorative details */}
      <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-gold/25 m-4" />
      <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-gold/25 m-4" />

      {isRoyal && (
        <span className="absolute top-3 left-1/2 transform -translate-x-1/2 px-2 py-0.5 bg-gold text-obsidian text-[7px] uppercase tracking-widest font-body font-bold rounded-full">
          Most Popular
        </span>
      )}

      {/* Package Header details */}
      <div className="space-y-4">
        <div className="space-y-1 text-center">
          <h4 className="font-heading text-xl md:text-2xl text-ivory group-hover:text-gold transition-colors duration-300">
            {pkg.name}
          </h4>
          <span className="font-heading text-2xl text-gold block font-semibold">
            {pkg.price}
          </span>
          <span className="font-body text-[9px] uppercase tracking-wider text-silver/50 block">
            {pkg.capacity}
          </span>
        </div>

        <div className="h-[1px] bg-gold/10 w-full" />

        {/* Menu list */}
        <div className="space-y-2">
          <span className="font-body text-[9px] uppercase tracking-wider text-gold font-semibold block">
            Recommended Menu
          </span>
          <ul className="space-y-2 text-xs font-light text-silver/70">
            {pkg.menu.map((item, index) => (
              <li key={index} className="flex items-start gap-2">
                <Check className="w-4 h-4 text-gold/60 shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Spacing metadata */}
      <div className="border-t border-gold/10 pt-4 mt-6 space-y-3 text-[10px] text-silver/70 font-body leading-relaxed">
        <div>
          <span className="text-[8px] uppercase tracking-wider text-silver/40 block font-semibold">Decoration Bundle</span>
          <span>{pkg.decor}</span>
        </div>
        <div>
          <span className="text-[8px] uppercase tracking-wider text-silver/40 block font-semibold">Chamber Seating</span>
          <span>{pkg.seating}</span>
        </div>
        <div className="pt-2 border-t border-gold/5 flex gap-1 items-start text-[9px] text-gold/80 italic">
          <Sparkles className="w-3.5 h-3.5 shrink-0 mt-0.5" />
          <span>{pkg.customization}</span>
        </div>
      </div>

    </motion.div>
  );
}

// CN Helper import wrapper
import { cn } from "@/lib/utils";
