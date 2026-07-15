"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { transitionSmooth } from "@/lib/animations";

export function RouteTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <motion.div
      key={pathname}
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 15 }}
      transition={transitionSmooth}
      className="flex-1 flex flex-col"
    >
      {children}
    </motion.div>
  );
}
