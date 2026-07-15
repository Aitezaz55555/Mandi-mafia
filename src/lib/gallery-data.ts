export interface GalleryItem {
  id: string;
  title: string;
  category: "food" | "ambience" | "private-dining" | "kitchen" | "desserts" | "events";
  image: string;
  thumbnail: string;
  alt: string;
  description: string;
  featured?: boolean;
}

export const galleryCategories = [
  { id: "all", label: "All" },
  { id: "food", label: "Gourmet Food" },
  { id: "ambience", label: "Main Ambience" },
  { id: "private-dining", label: "Private Dining" },
  { id: "kitchen", label: "Underground Kitchen" },
  { id: "desserts", label: "Desserts" },
  { id: "events", label: "Events & Feasts" },
] as const;

export const galleryItemsList: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Signature Mutton Mandi Platter",
    category: "food",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=600&auto=format&fit=crop",
    alt: "Moody high-contrast photo of baby lamb Mandi platter served on dark sharing tray",
    description: "Our signature slow-cooked baby lamb shoulder placed over saffron-scented mandi basmati rice, garnished with roasted cashews, almonds, raisins, and fresh herbs.",
    featured: true,
  },
  {
    id: "gal-2",
    title: "Golden Hour Lantern Glow",
    category: "ambience",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=600&auto=format&fit=crop",
    alt: "Atmospheric interior shot showing glowing Arabian brass lanterns casting intricate shadow patterns on dark slate walls",
    description: "Detailed view of our physical light installations: hand-hammered brass lanterns imported from Yemen, designed to create a warm speakeasy mood.",
    featured: false,
  },
  {
    id: "gal-3",
    title: "Private Seating Family Chambers",
    category: "private-dining",
    image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1200&auto=format&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=600&auto=format&fit=crop",
    alt: "Exclusive family dining cabin styled with deep burgundy cushions and geometric wooden lattice dividers",
    description: "An look inside our soundproof private cabins. Styled with velvet burgundy seating and gold dividers to offer family groups absolute comfort.",
    featured: true,
  },
  {
    id: "gal-4",
    title: "Brick Oven Spice Infusion",
    category: "kitchen",
    image: "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?q=80&w=1200&auto=format&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?q=80&w=600&auto=format&fit=crop",
    alt: "Chef preparing skewers over open wood-fire tandoor inside Mandi Mafia's brick ovens",
    description: "Our underground brick tandoors use a constant wood-fire embers burn to infuse roasts and mandi meats with a heavy, signature aromatic smoke flavor.",
    featured: false,
  },
  {
    id: "gal-5",
    title: "Freshly Baked Rosewater Kunafa",
    category: "desserts",
    image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?q=80&w=1200&auto=format&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1587314168485-3236d6710814?q=80&w=600&auto=format&fit=crop",
    alt: "Warm kunafa pastry topped with shredded phyllo, melted cheese, rosewater glaze, and ground green pistachios",
    description: "Our signature dessert. kataifi pastry dough layered with unsalted sweet cheese, baked in brass trays, and soaked in cardamom-rosewater syrup.",
    featured: false,
  },
  {
    id: "gal-6",
    title: "The Grand Banquet Syndicate",
    category: "events",
    image: "https://images.unsplash.com/photo-1543007630-9710e4a00a20?q=80&w=1200&auto=format&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1543007630-9710e4a00a20?q=80&w=600&auto=format&fit=crop",
    alt: "Large long banquet table set up inside VIP lounge for a corporate dinner gathering",
    description: "A wide view of our private group banquet lounges, fully configured for family reunions, anniversaries, and corporate dinners up to 35 guests.",
    featured: true,
  },
  {
    id: "gal-7",
    title: "Gourmet Kabab Skewers Plate",
    category: "food",
    image: "https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?q=80&w=1200&auto=format&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?q=80&w=600&auto=format&fit=crop",
    alt: "Seared seekh kababs served with grilled onions and sumac spices on flat pita bread",
    description: "Finely ground, spiced lamb seekh kababs seared on stone grills and presented with fresh sumac salad garnish, garlic sauces, and warm clay oven pita.",
    featured: false,
  },
  {
    id: "gal-8",
    title: "Hand-Sorted Yemeni Cardamom",
    category: "kitchen",
    image: "https://images.unsplash.com/photo-1599940824399-b87987ceb72a?q=80&w=1200&auto=format&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1599940824399-b87987ceb72a?q=80&w=600&auto=format&fit=crop",
    alt: "Aromatic raw spices and cardamom seeds placed inside wooden bowl",
    description: "A close look at our ingredients: cardamom, cloves, and saffron threads are imported directly from Yemeni spice markets, hand-sorted and crushed fresh.",
    featured: false,
  },
  {
    id: "gal-9",
    title: "The VIP Corner Booth",
    category: "ambience",
    image: "https://images.unsplash.com/photo-1543007630-9710e4a00a20?q=80&w=1200&auto=format&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1543007630-9710e4a00a20?q=80&w=600&auto=format&fit=crop",
    alt: "Intimate low-light booths styled with dark volcanic slate textures and golden spot downlights",
    description: "Our intimate corner dining booths, offering the perfect combination of speakeasy privacy and premium fine dining design for couples or partners.",
    featured: false,
  },
];
