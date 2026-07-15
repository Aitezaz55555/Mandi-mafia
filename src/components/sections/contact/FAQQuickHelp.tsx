"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { quickHelpFaqs } from "@/lib/contact-data";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export function FAQQuickHelp() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-obsidian border-t border-gold/10 py-16">
      <div className="max-w-3xl mx-auto px-space-4 space-y-12 select-text">
        <div className="text-center space-y-space-2">
          <span className="font-body text-[9px] uppercase tracking-[0.2em] text-gold/80 font-medium font-semibold">Immediate Assistance</span>
          <h3 className="font-heading text-2xl md:text-3xl text-ivory">Quick Help FAQ</h3>
          <p className="font-body text-xs text-silver/65 leading-relaxed font-light">
            Find answers regarding corporate catering, private cabins merge operations, and home delivery procedures.
          </p>
        </div>

        <div className="space-y-4">
          {quickHelpFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border border-gold/10 bg-charcoal hover:border-gold/25 transition-colors duration-300"
              >
                {/* Accordion Head */}
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

                {/* Collapsible panel body */}
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
