"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useScrollDirection } from "@/hooks/useScrollDirection";
import { siteConfig } from "@/config/site";
import { Phone, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

const leftNavLinks = siteConfig.mainNav.left;
const rightNavLinks = siteConfig.mainNav.right;
const allNavLinks = [...leftNavLinks, ...rightNavLinks];

export default function Navbar() {
  const pathname = usePathname();
  const scrollDirection = useScrollDirection();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  // Determine navbar visibility class based on scroll direction
  const isNavbarHidden = scrollDirection === "down" && !isMobileMenuOpen && isScrolled;

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-smooth h-20 flex items-center border-b border-transparent",
          isScrolled 
            ? "bg-obsidian/85 backdrop-blur-md border-gold/10 shadow-lg h-16" 
            : "bg-transparent h-20",
          isNavbarHidden ? "-translate-y-full" : "translate-y-0"
        )}
      >
        <div className="w-full max-w-7xl mx-auto px-space-4 md:px-space-6 flex items-center justify-between">
          
          {/* DESKTOP NAV: Left aligned items */}
          <nav className="hidden md:flex items-center gap-space-6 w-1/3">
            {leftNavLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "font-body text-xs uppercase tracking-[0.12em] transition-all duration-300 hover:text-gold relative py-1",
                    isActive ? "text-gold font-medium" : "text-ivory/80"
                  )}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavUnderlineLeft"
                      className="absolute bottom-0 left-0 right-0 h-[1px] bg-gold"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* BRAND LOGO: Centered */}
          <div className="flex justify-start md:justify-center w-auto md:w-1/3">
            <Link href="/" className="relative flex items-center gap-3 py-1">
              <div className="relative w-9 h-9 md:w-10 md:h-10 transition-transform duration-300 hover:scale-105 rounded-full border border-gold/30 bg-charcoal/90 p-1.5 flex items-center justify-center shadow-[0_0_15px_rgba(212,175,55,0.25)]">
                <div className="relative w-full h-full">
                  <Image
                    src="/assets/logo/logo-transparent.png"
                    alt="Mandi Mafia Logo"
                    fill
                    sizes="(max-width: 768px) 36px, 40px"
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
              <span className="font-heading text-lg md:text-xl text-gold uppercase tracking-[0.08em]">
                Mandi Mafia
              </span>
            </Link>
          </div>

          {/* DESKTOP NAV: Right aligned items + CTA */}
          <div className="hidden md:flex items-center justify-end gap-space-6 w-1/3">
            <nav className="flex items-center gap-space-6 mr-space-2">
              {rightNavLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "font-body text-xs uppercase tracking-[0.12em] transition-all duration-300 hover:text-gold relative py-1",
                      isActive ? "text-gold font-medium" : "text-ivory/80"
                    )}
                  >
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="activeNavUnderlineRight"
                        className="absolute bottom-0 left-0 right-0 h-[1px] bg-gold"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            <Link
              href="/reservations"
              className="px-space-4 py-2 bg-gold text-obsidian font-body text-[10px] uppercase tracking-[0.15em] font-semibold transition-all duration-300 hover:bg-gold-hover hover:shadow-gold-glow"
            >
              Secure a Table
            </Link>
          </div>

          {/* MOBILE NAV: Hamburger Trigger */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden flex flex-col justify-center items-end gap-1.5 w-8 h-8 focus:outline-none cursor-pointer z-50"
            aria-label="Toggle navigation menu"
          >
            <span
              className={cn(
                "h-[1.5px] bg-gold transition-all duration-300 ease-smooth",
                isMobileMenuOpen ? "w-6 rotate-45 translate-y-[5px]" : "w-6"
              )}
            />
            <span
              className={cn(
                "h-[1.5px] bg-gold transition-all duration-300 ease-smooth",
                isMobileMenuOpen ? "w-6 -rotate-45 -translate-y-[3px]" : "w-4"
              )}
            />
          </button>
        </div>
      </header>

      {/* MOBILE DRAWER: Luxury Fullscreen Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 md:hidden bg-obsidian/95 backdrop-blur-xl flex flex-col justify-between pt-24 pb-8 px-space-6"
          >
            {/* Visual background details */}
            <div className="absolute top-1/4 left-10 w-64 h-64 bg-gold/5 rounded-full blur-[100px] pointer-events-none" />

            {/* Nav list */}
            <nav className="flex flex-col gap-space-4 mt-space-8 z-10">
              {allNavLinks.map((link, index) => {
                const isActive = pathname === link.href;
                return (
                  <motion.div
                    key={link.href}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.08, ease: [0.16, 1, 0.3, 1], duration: 0.6 }}
                  >
                    <Link
                      href={link.href}
                      className={cn(
                        "font-heading text-3xl uppercase tracking-wider block transition-colors duration-300",
                        isActive ? "text-gold" : "text-ivory"
                      )}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            {/* Bottom Actions */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, ease: [0.16, 1, 0.3, 1], duration: 0.6 }}
              className="flex flex-col gap-space-3 z-10"
            >
              <Link
                href="/reservations"
                className="w-full h-12 bg-gold text-obsidian font-body text-xs uppercase tracking-[0.15em] font-semibold flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                Reserve Table
              </Link>
              <a
                href="tel:+918665550100"
                className="w-full h-12 border border-gold/30 text-gold font-body text-xs uppercase tracking-[0.15em] font-semibold flex items-center justify-center gap-2 hover:bg-gold/5"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
