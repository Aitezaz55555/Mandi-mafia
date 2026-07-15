"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionWrapper } from "../layout/SectionWrapper";
import { MaxWidthContainer } from "../shared/MaxWidthContainer";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import Link from "next/link";
import { Users } from "lucide-react";

interface Dish {
  id: number;
  name: string;
  description: string;
  price: string;
  serves: string;
  image: string;
  category: string;
  tag?: string;
}

const signatureDishesList: Dish[] = [
  {
    id: 1,
    name: "The Mafia Feast Platter",
    description: "Our crowning achievement. A massive slow-smoked lamb shoulder and grilled chicken mandi, seasoned with hand-imported Aden spices.",
    price: "₹1,899",
    serves: "4-5 Patrons",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=600&auto=format&fit=crop",
    category: "Grand Feast",
    tag: "Chef's Special",
  },
  {
    id: 2,
    name: "Royal Mutton Mandi",
    description: "Premium baby lamb slow-cooked for 18 hours until falling off the bone, served over aromatic basmati rice and drizzled with custom ghee.",
    price: "₹950",
    serves: "2-3 Patrons",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=600&auto=format&fit=crop",
    category: "Signature Mandi",
    tag: "Patron's Favorite",
  },
  {
    id: 3,
    name: "Smoked Chicken Platter",
    description: "Yemeni charcoal-grilled chicken infused with saffron, cardamom, and clove, slow-cooked in our underground brick ovens.",
    price: "₹650",
    serves: "2 Patrons",
    image: "https://images.unsplash.com/photo-1608897013039-887f21d8c804?q=80&w=600&auto=format&fit=crop",
    category: "Slow Roast",
  },
  {
    id: 4,
    name: "Gourmet Kabab Syndicate",
    description: "A coalition of our finest hand-ground seekh kababs, grilled tomatoes, and garlic sauce, served on flat Arabian naan.",
    price: "₹799",
    serves: "3 Patrons",
    image: "https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?q=80&w=600&auto=format&fit=crop",
    category: "Skewers",
    tag: "Exclusive",
  },
];

export default function SignatureDishes() {
  return (
    <SectionWrapper id="menu-preview" hasSpire={true} className="bg-charcoal/5">
      <MaxWidthContainer>
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-space-3">
          <span className="font-body text-[10px] uppercase tracking-[0.25em] text-gold/80 font-medium">
            The Roster
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-ivory font-light leading-tight">
            Our Signature Platters
          </h2>
          <div className="h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent w-40 mx-auto" />
          <p className="font-body text-xs sm:text-sm text-silver/70 leading-relaxed font-light">
            Every dish is an alliance of aromatic spices, slow-cooking heritage, and premium presentation. Discover our top-ranking culinary configurations.
          </p>
        </div>

        {/* Grid List */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer(0.12)}
          className="grid grid-cols-1 md:grid-cols-2 gap-space-6 lg:gap-space-8"
        >
          {signatureDishesList.map((dish) => (
            <DishCard key={dish.id} dish={dish} />
          ))}
        </motion.div>

        {/* View All Action */}
        <div className="text-center mt-12">
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block"
          >
            <Link
              href="/menu"
              className="inline-flex items-center justify-center px-space-8 h-12 border border-gold/30 hover:border-gold hover:bg-gold/5 text-gold font-body text-[10px] uppercase tracking-[0.15em] font-semibold transition-all duration-300 cursor-pointer focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-obsidian outline-none"
            >
              Explore Complete Menu
            </Link>
          </motion.div>
        </div>

      </MaxWidthContainer>
    </SectionWrapper>
  );
}

function DishCard({ dish }: { dish: Dish }) {
  return (
    <motion.div
      variants={fadeInUp}
      className="group relative bg-charcoal border border-gold/10 hover:border-gold/35 overflow-hidden flex flex-col sm:flex-row h-full transition-all duration-500 hover:shadow-[0_10px_30px_rgba(0,0,0,0.4)]"
    >
      {/* Card Image Container */}
      <div className="relative w-full sm:w-2/5 aspect-[4/3] sm:aspect-auto overflow-hidden">
        <Image
          src={dish.image}
          alt={dish.name}
          fill
          sizes="(max-width: 768px) 100vw, 300px"
          className="object-cover transition-transform duration-[1200ms] ease-smooth group-hover:scale-105"
          loading="lazy"
        />
        {/* Dark image overlay fade */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-obsidian/30 sm:to-charcoal" />
        
        {/* Category tag */}
        <span className="absolute top-3 left-3 px-2 py-0.5 bg-obsidian/80 backdrop-blur-md text-[8px] uppercase tracking-wider text-gold font-body border border-gold/15">
          {dish.category}
        </span>
      </div>

      {/* Card Detail Container */}
      <div className="p-space-6 sm:w-3/5 flex flex-col justify-between space-y-space-4 z-10">
        <div className="space-y-space-2">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-heading text-lg sm:text-xl text-ivory group-hover:text-gold transition-colors duration-300">
              {dish.name}
            </h3>
            {dish.tag && (
              <span className="shrink-0 px-2 py-0.5 bg-gold/10 text-[7px] uppercase tracking-widest text-gold border border-gold/20 font-body rounded-full font-medium">
                {dish.tag}
              </span>
            )}
          </div>
          <p className="font-body text-xs text-silver/70 leading-relaxed font-light line-clamp-3">
            {dish.description}
          </p>
        </div>

        {/* Meta Pricing & Portions */}
        <div className="flex items-center justify-between border-t border-gold/10 pt-space-3 mt-auto">
          <span className="font-heading text-lg text-gold font-medium">
            {dish.price}
          </span>
          <div className="flex items-center gap-1.5 text-silver/50 text-[10px] font-body uppercase tracking-wider">
            <Users className="w-3.5 h-3.5 text-gold/60" />
            <span>{dish.serves}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
