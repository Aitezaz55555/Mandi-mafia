"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "../layout/SectionWrapper";
import { MaxWidthContainer } from "../shared/MaxWidthContainer";
import { FeatureCard } from "../shared/FeatureCard";
import { staggerContainer } from "@/lib/animations";
import { Flame, ShieldCheck, Users, Award } from "lucide-react";

const features = [
  {
    id: 1,
    icon: Flame,
    title: "Wood-Fired Yemen Recipes",
    description: "Every Mandi is prepared using traditional clay tandoors and wood embers, preserving authentic flavors imported directly from Yemen.",
  },
  {
    id: 2,
    icon: ShieldCheck,
    title: "100% Premium Ingredients",
    description: "We use exclusively fresh, hormone-free cuts of meat and long-grain Basmati rice, slow-cooked daily without generic artificial additives.",
  },
  {
    id: 3,
    icon: Users,
    title: "Private Family Chambers",
    description: "Designed for comfort, our private seating booths and family dining cabins ensure privacy, safety, and comfort for family gatherings.",
  },
  {
    id: 4,
    icon: Award,
    title: "Luxury Dining Standards",
    description: "Experience premium, personalized hospitality that treats table reservation as an elite, concierge-assisted fine dining moment.",
  },
];

export default function WhyChooseUs() {
  return (
    <SectionWrapper id="features" hasSpire={true} className="bg-gradient-to-b from-charcoal/30 to-obsidian">
      <MaxWidthContainer>
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-space-3">
          <span className="font-body text-[10px] uppercase tracking-[0.25em] text-gold/80 font-medium">
            The Standards
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-ivory font-light leading-tight">
            Why Choose the Syndicate?
          </h2>
          <div className="h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent w-40 mx-auto" />
          <p className="font-body text-xs sm:text-sm text-silver/70 leading-relaxed font-light">
            We reject standard, low-cost casual setups. Our culinary foundation is built on three pillars: absolute ingredient control, historic methods, and elite service.
          </p>
        </div>

        {/* Features Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer(0.1)}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-6"
        >
          {features.map((feat) => (
            <FeatureCard
              key={feat.id}
              icon={feat.icon}
              title={feat.title}
              description={feat.description}
            />
          ))}
        </motion.div>

      </MaxWidthContainer>
    </SectionWrapper>
  );
}
