"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MessageSquare, Mail, MapPin, Clock, Car, Compass, Accessibility, Sparkles } from "lucide-react";
import { branchesList, Branch } from "@/lib/contact-data";
import { cn } from "@/lib/utils";

export function BranchInformation() {
  const [selectedBranchId, setSelectedBranchId] = useState<string>("vijayawada-hq");

  const activeBranch = branchesList.find((b) => b.id === selectedBranchId) || branchesList[0];

  return (
    <div className="space-y-12 select-none">
      
      {/* BRANCH TAB SELECTORS */}
      <div className="flex justify-center border-b border-gold/10 pb-4 overflow-x-auto gap-4 scrollbar-none">
        {branchesList.map((branch) => {
          const isActive = branch.id === selectedBranchId;
          return (
            <button
              key={branch.id}
              onClick={() => setSelectedBranchId(branch.id)}
              className={cn(
                "px-5 h-11 border transition-all duration-300 font-body text-xs uppercase tracking-wider font-semibold cursor-pointer outline-none relative",
                isActive
                  ? "bg-gold border-gold text-obsidian font-bold"
                  : "border-silver/20 text-silver/70 hover:border-gold/30 hover:text-gold"
              )}
            >
              {branch.name}
            </button>
          );
        })}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeBranch.id}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 15 }}
          transition={{ duration: 0.35 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-space-8 items-start select-text"
        >
          
          {/* LEFT 7-COL: Hours, Parking & Details */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Business Hours Card */}
            <div className="bg-charcoal border border-gold/10 p-space-6 space-y-space-4 shadow-md">
              <h3 className="font-heading text-xl text-gold font-semibold flex items-center gap-2">
                <Clock className="w-5 h-5" />
                Operational Hours
              </h3>
              <div className="h-[1px] bg-gold/10 w-full" />
              
              <ul className="space-y-3 text-xs font-light text-silver/80">
                <li>
                  <span className="text-[10px] text-silver/50 block uppercase tracking-wider">Registry Timings</span>
                  <span className="text-ivory font-medium">{activeBranch.hours}</span>
                </li>
                <li>
                  <span className="text-[10px] text-silver/50 block uppercase tracking-wider">Peak Volume Hours</span>
                  <span>{activeBranch.peakHours}</span>
                </li>
                <li>
                  <span className="text-[10px] text-silver/50 block uppercase tracking-wider">Best Visit Windows</span>
                  <span>{activeBranch.bestTimeToVisit}</span>
                </li>
                {activeBranch.holidayNotes && (
                  <li className="pt-2 border-t border-gold/5 flex gap-1.5 text-gold/80 italic text-[11px]">
                    <Sparkles className="w-4 h-4 shrink-0 mt-0.5" />
                    <span>{activeBranch.holidayNotes}</span>
                  </li>
                )}
              </ul>
            </div>

            {/* Parking & Site Landmarks Card */}
            <div className="bg-charcoal border border-gold/10 p-space-6 space-y-space-4 shadow-md">
              <h3 className="font-heading text-xl text-gold font-semibold flex items-center gap-2">
                <Car className="w-5 h-5" />
                Valet & Parking
              </h3>
              <div className="h-[1px] bg-gold/10 w-full" />

              <ul className="space-y-3 text-xs font-light text-silver/80">
                <li>
                  <span className="text-[10px] text-silver/50 block uppercase tracking-wider">Valet Policy</span>
                  <span>{activeBranch.valetInfo}</span>
                </li>
                <li>
                  <span className="text-[10px] text-silver/50 block uppercase tracking-wider">Site Landmarks</span>
                  <span>{activeBranch.landmarks}</span>
                </li>
                <li className="pt-2 border-t border-gold/5 flex gap-2 items-start text-[11px] text-silver/70">
                  <Accessibility className="w-4 h-4 text-gold/80 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-ivory font-medium block">Accessibility Support</span>
                    <span>{activeBranch.accessibility}</span>
                  </div>
                </li>
              </ul>
            </div>

          </div>

          {/* RIGHT 5-COL: Map & Channels */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Visual map representation */}
            <div className="relative aspect-[4/3] border border-gold/15 bg-charcoal/50 p-1.5 overflow-hidden">
              <div className="relative w-full h-full bg-[#181818] flex flex-col items-center justify-center text-center p-6 space-y-3">
                <div 
                  className="absolute inset-0 opacity-[0.06] mix-blend-overlay"
                  style={{
                    backgroundImage: `linear-gradient(to right, #ccc 1px, transparent 1px), linear-gradient(to bottom, #ccc 1px, transparent 1px)`,
                    backgroundSize: "20px 20px"
                  }}
                />
                
                <MapPin className="w-8 h-8 text-gold animate-bounce" />
                <h4 className="font-heading text-base text-gold font-medium">{activeBranch.name} Map</h4>
                <p className="font-body text-[10px] text-silver/60 leading-relaxed font-light">
                  Coordinates: {activeBranch.coordinates.lat}° N, {activeBranch.coordinates.lng}° E
                </p>

                {activeBranch.mapsLink && (
                  <a
                    href={activeBranch.mapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex px-4 h-9 bg-gold hover:bg-gold-hover text-obsidian font-body text-[9px] uppercase tracking-wider font-semibold items-center justify-center gap-1.5 border border-gold hover:shadow-gold-glow transition-all duration-300 cursor-pointer focus-visible:ring-1 focus-visible:ring-gold outline-none"
                  >
                    <Compass className="w-3.5 h-3.5" />
                    Open in Maps
                  </a>
                )}
              </div>
            </div>

            {/* Direct Connect Quick Cards */}
            <div className="grid grid-cols-2 gap-3">
              {/* Phone card */}
              <div className="p-4 border border-gold/5 bg-charcoal/80 text-center space-y-1.5">
                <Phone className="w-4 h-4 text-gold mx-auto" />
                <span className="text-[8px] text-silver/50 block uppercase tracking-widest font-body">Call Hotline</span>
                {activeBranch.phone !== "Coming Soon" ? (
                  <a href={`tel:${activeBranch.phone}`} className="text-ivory hover:text-gold font-heading text-xs font-semibold block truncate">
                    {activeBranch.phone}
                  </a>
                ) : (
                  <span className="text-silver/40 text-xs block">Coming Soon</span>
                )}
              </div>

              {/* WhatsApp card */}
              <div className="p-4 border border-gold/5 bg-charcoal/80 text-center space-y-1.5">
                <MessageSquare className="w-4 h-4 text-gold mx-auto" />
                <span className="text-[8px] text-silver/50 block uppercase tracking-widest font-body">WhatsApp</span>
                {activeBranch.whatsapp ? (
                  <a href={`https://wa.me/${activeBranch.whatsapp}`} target="_blank" rel="noopener noreferrer" className="text-ivory hover:text-gold font-heading text-xs font-semibold block">
                    Chat Now
                  </a>
                ) : (
                  <span className="text-silver/40 text-xs block">Coming Soon</span>
                )}
              </div>

              {/* Email card */}
              <div className="p-4 border border-gold/5 bg-charcoal/80 text-center space-y-1.5 col-span-2">
                <Mail className="w-4 h-4 text-gold mx-auto" />
                <span className="text-[8px] text-silver/50 block uppercase tracking-widest font-body">Email Inbox</span>
                <a href={`mailto:${activeBranch.email}`} className="text-ivory hover:text-gold font-heading text-xs font-semibold block truncate">
                  {activeBranch.email}
                </a>
              </div>
            </div>

          </div>

        </motion.div>
      </AnimatePresence>
    </div>
  );
}
