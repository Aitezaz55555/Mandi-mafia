"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { Search, SlidersHorizontal, Eye } from "lucide-react";
import { Dish, menuCategories, menuDishes } from "@/lib/menu-data";
import { DishCard } from "./DishCard";
import { DishModal } from "./DishModal";
import { cn } from "@/lib/utils";
import { staggerContainer, fadeInUp } from "@/lib/animations";

export function MenuGrid() {
  const [activeCategory, setActiveCategory] = useState<string>("grand-feasts");
  const [searchQuery, setSearchQuery] = useState("");
  const [meatFilter, setMeatFilter] = useState<"all" | "mutton" | "chicken" | "seafood" | "veg">("all");
  
  // Modal controllers
  const [selectedDish, setSelectedDish] = useState<Dish | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  // Intersection Observer for scroll-spy category navigation
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-120px 0px -60% 0px", // triggers when section is near top of viewport
      threshold: 0,
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveCategory(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    menuCategories.forEach((cat) => {
      const el = document.getElementById(cat.id);
      if (el) observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleCategoryClick = (categoryId: string) => {
    setActiveCategory(categoryId);
    const targetElement = document.getElementById(categoryId);
    
    if (targetElement) {
      const offset = 80; // height of sticky bar + spacer margins
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = targetElement.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const handleOpenDetails = (dish: Dish) => {
    setSelectedDish(dish);
    setIsModalOpen(true);
  };

  const handleReserve = (dish: Dish) => {
    setIsModalOpen(false);
    // Push parameter to reservation system
    window.location.href = `/reservations?dish=${dish.id}`;
  };

  // Perform full visual search & tag matching logic
  const filteredDishes = menuDishes.filter((dish) => {
    // 1. Text Search matching name, description, ingredients
    const matchesSearch = 
      dish.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dish.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dish.ingredients.some(i => i.toLowerCase().includes(searchQuery.toLowerCase()));

    // 2. Category Meat Filters matching
    let matchesMeat = true;
    const lowerName = dish.name.toLowerCase();
    const lowerDesc = dish.description.toLowerCase();
    const lowerIngredients = dish.ingredients.map(i => i.toLowerCase());

    const hasMutton = lowerName.includes("mutton") || lowerName.includes("lamb") || lowerDesc.includes("mutton") || lowerDesc.includes("lamb") || lowerIngredients.some(i => i.includes("mutton") || i.includes("lamb"));
    const hasChicken = lowerName.includes("chicken") || lowerDesc.includes("chicken") || lowerIngredients.some(i => i.includes("chicken"));
    const hasSeafood = lowerName.includes("fish") || lowerName.includes("calamari") || lowerDesc.includes("fish") || lowerIngredients.some(i => i.includes("fish") || i.includes("seafood"));
    const isVeg = lowerName.includes("hummus") || lowerName.includes("pita") || lowerName.includes("baklava") || lowerName.includes("kunafa") || lowerDesc.includes("vegan") || lowerDesc.includes("vegetarian");

    if (meatFilter === "mutton") matchesMeat = hasMutton;
    else if (meatFilter === "chicken") matchesMeat = hasChicken;
    else if (meatFilter === "seafood") matchesMeat = hasSeafood;
    else if (meatFilter === "veg") matchesMeat = isVeg;

    return matchesSearch && matchesMeat;
  });

  return (
    <div className="relative w-full z-10 select-none pb-24">
      {/* STICKY CATEGORY NAV BAR */}
      <div className="sticky top-16 z-30 w-full bg-obsidian/90 backdrop-blur-md border-b border-gold/15 py-3">
        <div className="max-w-7xl mx-auto px-space-4 md:px-space-6 flex items-center justify-between overflow-x-auto gap-space-6 scrollbar-none">
          <nav className="flex items-center gap-space-4 md:gap-space-6 min-w-max">
            {menuCategories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryClick(cat.id)}
                  className={cn(
                    "font-body text-xs uppercase tracking-[0.15em] transition-all duration-300 py-1 cursor-pointer outline-none relative",
                    isActive ? "text-gold font-medium" : "text-silver/60 hover:text-ivory"
                  )}
                >
                  {cat.label}
                  {isActive && (
                    <motion.span
                      layoutId="menuActiveUnderline"
                      className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gold"
                      transition={{ type: "spring", stiffness: 350, damping: 28 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>
        </div>
      </div>

      {/* FILTER & SEARCH PANEL BAR */}
      <div className="max-w-7xl mx-auto px-space-4 md:px-space-6 mt-8">
        <div className="bg-charcoal border border-gold/10 p-4 flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Search Input Box */}
          <div className="relative w-full md:max-w-sm flex items-center border-b border-silver/20 focus-within:border-gold py-1.5 transition-colors">
            <Search className="w-4 h-4 text-silver/40 shrink-0 mr-2" />
            <input
              type="text"
              placeholder="Search by name, spices, or composition..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent border-none text-xs text-ivory placeholder-silver/40 focus:outline-none w-full"
            />
          </div>

          {/* Tag filters (Meat selection controls) */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto py-1 scrollbar-none">
            <SlidersHorizontal className="w-3.5 h-3.5 text-gold/60 shrink-0 hidden sm:block" />
            
            {(["all", "mutton", "chicken", "seafood", "veg"] as const).map((filter) => (
              <button
                key={filter}
                onClick={() => setMeatFilter(filter)}
                className={cn(
                  "px-3 py-1 text-[9px] uppercase tracking-wider font-body border cursor-pointer transition-all duration-300 outline-none",
                  meatFilter === filter
                    ? "bg-gold border-gold text-obsidian font-semibold"
                    : "border-silver/20 text-silver/70 hover:border-gold/30 hover:text-gold"
                )}
              >
                {filter}
              </button>
            ))}
          </div>

        </div>
      </div>

      {/* GRID DISPLAY CATEGORIES */}
      <div className="max-w-7xl mx-auto px-space-4 md:px-space-6 mt-12 space-y-20">
        {menuCategories.map((cat) => {
          const categoryDishes = filteredDishes.filter(d => d.category === cat.id);
          
          if (categoryDishes.length === 0) return null;

          return (
            <section
              key={cat.id}
              id={cat.id}
              className="scroll-mt-32 space-y-6"
            >
              {/* Category Title Header */}
              <div className="flex items-center gap-4">
                <h2 className="font-heading text-2xl md:text-3xl text-ivory font-light">
                  {cat.label}
                </h2>
                <div className="h-[1px] bg-gradient-to-r from-gold/30 to-transparent flex-1" />
              </div>

              {/* Items Card Grid */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer(0.08)}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-space-6"
              >
                {categoryDishes.map((dish) => (
                  <DishCard
                    key={dish.id}
                    dish={dish}
                    onOpenDetails={handleOpenDetails}
                    onReserve={handleReserve}
                  />
                ))}
              </motion.div>
            </section>
          );
        })}

        {/* Empty Search Result State */}
        {filteredDishes.length === 0 && (
          <div className="text-center py-20 space-y-4 select-text">
            <h3 className="font-heading text-2xl text-gold">No Records in the Registry</h3>
            <p className="font-body text-xs text-silver/60 max-w-xs mx-auto leading-relaxed">
              We couldn't find any dishes matching "{searchQuery}" under the {meatFilter} filter. Try broadening your keywords.
            </p>
          </div>
        )}
      </div>

      {/* DETAIL MODAL PANEL DIALOG */}
      <DishModal
        dish={selectedDish}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onReserve={handleReserve}
      />
    </div>
  );
}

