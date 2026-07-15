"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Instagram, MessageCircle, Phone, MapPin, Mail, Clock, CheckCircle } from "lucide-react";
import { siteConfig } from "@/config/site";
import { NewsletterService } from "@/lib/api/newsletter.service";

const allNavLinks = [...siteConfig.mainNav.left, ...siteConfig.mainNav.right];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");
    setIsSubmitting(true);

    try {
      const success = await NewsletterService.subscribe(email);
      if (success) {
        setIsSubscribed(true);
        setEmail("");
      }
    } catch (err: any) {
      setErrorMessage(err.message || "Failed to subscribe. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="relative bg-obsidian border-t border-gold/10 text-silver pt-16 pb-8 z-10 overflow-hidden">
      {/* Background radial spotlight flare */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-burgundy/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-space-4 md:px-space-6 relative">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-space-8 mb-12">
          
          {/* COLUMN 1: Brand details */}
          <div className="space-y-space-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-8 h-8 rounded-full border border-gold/30 bg-charcoal/90 p-1 flex items-center justify-center shadow-[0_0_12px_rgba(212,175,55,0.2)]">
                <div className="relative w-full h-full">
                  <Image
                    src="/assets/logo/logo-transparent.png"
                    alt="Mandi Mafia Logo"
                    fill
                    sizes="28px"
                    className="object-contain"
                  />
                </div>
              </div>
              <span className="font-heading text-lg text-gold uppercase tracking-[0.08em]">
                Mandi Mafia
              </span>
            </Link>
            <p className="font-body text-xs text-silver/80 leading-relaxed max-w-xs">
              A coalition of Arabian hospitality and modern dining. Vijayawada's premium culinary syndicate for family feasts and celebrations.
            </p>
            <div className="flex items-center gap-space-3 pt-space-2">
              <a
                href="https://instagram.com/mandimafia"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-silver/20 hover:border-gold hover:text-gold flex items-center justify-center transition-colors duration-300"
                title="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/918665550100"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-silver/20 hover:border-gold hover:text-gold flex items-center justify-center transition-colors duration-300"
                title="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* COLUMN 2: Quick links */}
          <div className="space-y-space-4">
            <h4 className="font-body text-xs uppercase tracking-[0.18em] text-gold font-semibold">
              The Chambers
            </h4>
            <ul className="space-y-space-2 text-xs">
              {allNavLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-gold transition-colors duration-300 block py-0.5"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/franchise"
                  className="hover:text-gold transition-colors duration-300 block py-0.5"
                >
                  Franchise Alliance
                </Link>
              </li>
            </ul>
          </div>

          {/* COLUMN 3: Contact & hours */}
          <div className="space-y-space-4">
            <h4 className="font-body text-xs uppercase tracking-[0.18em] text-gold font-semibold">
              Registry Info
            </h4>
            <ul className="space-y-space-3 text-xs">
              <li className="flex gap-2.5 items-start">
                <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <span>{siteConfig.address}</span>
              </li>
              <li className="flex gap-2.5 items-center">
                <Phone className="w-4 h-4 text-gold shrink-0" />
                <a href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`} className="hover:text-gold transition-colors">
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex gap-2.5 items-center">
                <Clock className="w-4 h-4 text-gold shrink-0" />
                <span>{siteConfig.hours.weekdays}</span>
              </li>
            </ul>
          </div>

          {/* COLUMN 4: Newsletter sign-up */}
          <div className="space-y-space-4">
            <h4 className="font-body text-xs uppercase tracking-[0.18em] text-gold font-semibold">
              Syndicate Dispatches
            </h4>
            <p className="font-body text-xs text-silver/80 leading-relaxed">
              Subscribe to unlock chef's special announcements, exclusive tasting events, and reservation priority.
            </p>
            {isSubscribed ? (
              <div className="flex items-center gap-2 p-3 bg-gold/5 border border-gold/25 text-gold text-xs font-body font-light">
                <CheckCircle className="w-4 h-4 shrink-0" />
                <span>Joined. Welcome to the Syndicate.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="flex items-center border-b border-silver/30 focus-within:border-gold py-1 transition-colors">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={isSubmitting}
                    className="bg-transparent border-none text-xs text-ivory placeholder-silver/40 focus:outline-none w-full pr-2 disabled:opacity-50"
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="text-gold hover:text-gold-hover p-1 focus:outline-none cursor-pointer disabled:opacity-50"
                    aria-label="Subscribe"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
                {errorMessage && (
                  <p className="text-[10px] text-error font-body font-light">{errorMessage}</p>
                )}
              </form>
            )}
          </div>
        </div>

        {/* Separator Line */}
        <div className="h-[1px] bg-gradient-to-r from-transparent via-gold/15 to-transparent w-full my-8" />

        {/* BOTTOM SECTION */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-[10px] uppercase tracking-[0.1em] text-silver/50 gap-4">
          <p>© {new Date().getFullYear()} Mandi Mafia. All Rights Reserved.</p>
          <div className="flex gap-space-4">
            <Link href="/privacy" className="hover:text-gold transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link href="/terms" className="hover:text-gold transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
