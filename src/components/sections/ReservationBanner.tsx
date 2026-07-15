"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { SectionWrapper } from "../layout/SectionWrapper";
import { MaxWidthContainer } from "../shared/MaxWidthContainer";

export default function ReservationBanner() {
  return (
    <SectionWrapper id="reservation-banner" hasSpire={true} className="bg-obsidian">
      <MaxWidthContainer>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden bg-gradient-to-br from-burgundy via-charcoal to-obsidian border border-gold/15 p-8 md:p-16 text-center space-y-space-6 shadow-xl"
        >
          {/* Subtle gold overlay patterns */}
          <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-gold/30 m-4" />
          <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-gold/30 m-4" />
          <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-gold/30 m-4" />
          <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-gold/30 m-4" />

          {/* Heading details */}
          <div className="space-y-space-3 max-w-2xl mx-auto select-text">
            <span className="font-body text-[10px] uppercase tracking-[0.25em] text-gold/80 font-medium">
              Syndicate Registry
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-ivory font-light leading-tight">
              Claim Your Seat at the Table
            </h2>
            <p className="font-body text-xs sm:text-sm text-silver/80 leading-relaxed font-light">
              Ensure your private family cabin or grand shared platter booking is registered in advance. patons are processed on an invite-and-reservation basis during peak weekend hours.
            </p>
          </div>

          {/* Buttons Container */}
          <div className="flex flex-col sm:flex-row gap-space-4 items-center justify-center pt-space-2 w-full">
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full sm:w-auto"
            >
              <Link
                href="/reservations"
                className="w-full sm:w-auto px-space-8 h-12 bg-gold hover:bg-gold-hover text-obsidian font-body text-[10px] uppercase tracking-[0.25em] font-semibold flex items-center justify-center gap-2 border border-gold hover:shadow-gold-glow transition-all duration-300 cursor-pointer"
              >
                Reserve Your Experience
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full sm:w-auto"
            >
              <a
                href="tel:+918665550100"
                className="w-full sm:w-auto px-space-8 h-12 border border-gold/30 hover:border-gold hover:bg-gold/5 text-gold font-body text-[10px] uppercase tracking-[0.25em] font-semibold flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer"
              >
                <Phone className="w-3.5 h-3.5" />
                Call Restaurant
              </a>
            </motion.div>
          </div>

        </motion.div>
      </MaxWidthContainer>
    </SectionWrapper>
  );
}
