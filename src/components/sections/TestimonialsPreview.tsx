"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "../layout/SectionWrapper";
import { MaxWidthContainer } from "../shared/MaxWidthContainer";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import { Star, MessageSquare } from "lucide-react";
import Link from "next/link";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Syed Alisha",
    role: "Google Local Guide",
    content: "Mandi Mafia completely redefines dining in Vijayawada. The private cabins are incredibly cozy. The Mafia Feast Platter was an absolute masterpiece—perfectly cooked mutton, aromatic saffron rice, and service that felt genuinely VIP. Five stars!",
    rating: 5,
  },
  {
    id: 2,
    name: "Rupa Devi",
    role: "Family Gathering",
    content: "Perfect for family celebrations! We booked a private cabin for my father's birthday, and the team went above and beyond. Sharing the grand tandoori mutton platter together made the evening feel so authentic and special.",
    rating: 5,
  },
  {
    id: 3,
    name: "Ananya Ray",
    role: "Food & Lifestyle Blogger",
    content: "As a food blogger, I'm always looking for atmospheric dining spots. Mandi Mafia fits the bill perfectly. The low-key lantern-lit dining area is gorgeous, and the dishes taste even better than they look on camera.",
    rating: 5,
  },
];

export default function TestimonialsPreview() {
  return (
    <SectionWrapper id="testimonials-preview" hasSpire={true} className="bg-charcoal/5">
      <MaxWidthContainer>
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-space-3">
          <span className="font-body text-[10px] uppercase tracking-[0.25em] text-gold/80 font-medium">
            Word on the Street
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-ivory font-light leading-tight">
            Syndicate Testimonials
          </h2>
          <div className="h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent w-40 mx-auto" />
          
          {/* Google aggregate score placeholder */}
          <div className="flex items-center justify-center gap-2 pt-2 text-xs font-body uppercase tracking-wider text-silver/60">
            <span className="font-semibold text-gold">4.8</span>
            <div className="flex text-gold">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-current" />
              ))}
            </div>
            <span>Based on 2,400+ Google Reviews</span>
          </div>
        </div>

        {/* Reviews Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer(0.12)}
          className="grid grid-cols-1 md:grid-cols-3 gap-space-6"
        >
          {testimonials.map((test) => (
            <TestimonialCard key={test.id} test={test} />
          ))}
        </motion.div>

        {/* CTA Actions */}
        <div className="text-center mt-12">
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block"
          >
            <Link
              href="/reviews"
              className="inline-flex items-center justify-center px-space-8 h-12 border border-gold/30 hover:border-gold hover:bg-gold/5 text-gold font-body text-[10px] uppercase tracking-[0.15em] font-semibold transition-all duration-300 cursor-pointer focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-obsidian outline-none"
            >
              Read More Reviews
            </Link>
          </motion.div>
        </div>

      </MaxWidthContainer>
    </SectionWrapper>
  );
}

function TestimonialCard({ test }: { test: Testimonial }) {
  return (
    <motion.div
      variants={fadeInUp}
      className="group relative bg-charcoal border border-gold/10 hover:border-gold/30 p-space-6 md:p-space-8 flex flex-col justify-between h-full transition-all duration-500 hover:shadow-[0_10px_25px_rgba(0,0,0,0.3)] select-text"
    >
      <div className="absolute top-0 left-0 w-3.5 h-3.5 border-t border-l border-gold/25 m-4 opacity-50 group-hover:opacity-100 transition-opacity" />
      
      <div className="space-y-space-4">
        {/* Google review star rating */}
        <div className="flex items-center gap-1">
          {Array.from({ length: test.rating }).map((_, i) => (
            <Star key={i} className="w-3.5 h-3.5 fill-gold text-gold" />
          ))}
        </div>

        {/* Quote content */}
        <p className="font-body text-xs sm:text-sm text-silver/80 leading-relaxed font-light italic">
          "{test.content}"
        </p>
      </div>

      {/* Reviewer Details */}
      <div className="flex items-center justify-between border-t border-gold/10 pt-space-4 mt-space-6">
        <div>
          <h4 className="font-heading text-base text-ivory group-hover:text-gold transition-colors duration-300">
            {test.name}
          </h4>
          <span className="font-body text-[9px] uppercase tracking-wider text-silver/50 block">
            {test.role}
          </span>
        </div>
        
        {/* Thematic Icon */}
        <MessageSquare className="w-4 h-4 text-gold/40 shrink-0" />
      </div>
    </motion.div>
  );
}
