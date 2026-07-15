"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { fadeInUp } from "@/lib/animations";

interface SectionWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  id?: string;
  hasSpire?: boolean; // Displays a vertical gold divider accent at the top center of the section
  animateEntrance?: boolean;
}

export function SectionWrapper({
  children,
  className,
  id,
  hasSpire = false,
  animateEntrance = true,
  ...props
}: SectionWrapperProps) {
  const Container = animateEntrance ? motion.section : "section";
  
  const motionProps = animateEntrance
    ? {
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, margin: "-100px" },
        variants: fadeInUp,
      }
    : {};

  return (
    <Container
      id={id}
      className={cn(
        "relative py-space-12 md:py-space-16 lg:py-space-24 bg-transparent overflow-hidden",
        className
      )}
      {...motionProps}
      {...(props as any)}
    >
      {/* Vertical Golden Spires section divider */}
      {hasSpire && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none select-none z-10">
          <div className="w-[1px] h-10 md:h-16 bg-gradient-to-b from-gold/40 via-gold/15 to-transparent" />
          <div className="w-1 h-1 rounded-full bg-gold/50 my-1 animate-pulse" />
        </div>
      )}
      {children}
    </Container>
  );
}
