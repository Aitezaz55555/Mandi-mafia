"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { bookingFaqs } from "@/lib/reservation-data";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export function ReservationFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-obsidian">
      <div className="max-w-3xl mx-auto px-space-4 space-y-12 select-text">
        <div className="text-center space-y-space-2">
          <span className="font-body text-[9px] uppercase tracking-[0.2em] text-gold/80 font-medium">Clear Answers</span>
          <h3 className="font-heading text-2xl md:text-3xl text-ivory">Frequently Asked Concerns</h3>
          <p className="font-body text-xs text-silver/65 leading-relaxed font-light">
            Review detailed parameters regarding cancellations, VIP chambers hold times, and group dining options.
          </p>
        </div>

        <div className="space-y-4">
          {bookingFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border border-gold/10 bg-charcoal hover:border-gold/25 transition-colors duration-300"
              >
                {/* Trigger head */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-5 text-left font-heading text-base text-ivory focus:outline-none focus-visible:ring-1 focus-visible:ring-gold cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={cn(
                      "w-4 h-4 text-gold/80 transition-transform duration-300 shrink-0 ml-4",
                      isOpen ? "transform rotate-180" : ""
                    )}
                  />
                </button>

                {/* Collapsible content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="p-5 pt-0 text-xs font-body text-silver/70 leading-relaxed font-light border-t border-gold/5 mt-2">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
