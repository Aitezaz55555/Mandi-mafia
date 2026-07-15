export interface EventType {
  id: string;
  name: string;
  description: string;
  capacity: string;
  startingPrice: string;
  image: string;
}

export interface EventPackage {
  id: string;
  name: string;
  price: string;
  capacity: string;
  menu: string[];
  decor: string;
  seating: string;
  customization: string;
}

export interface VenueSpace {
  id: string;
  name: string;
  capacity: string;
  description: string;
  image: string;
}

export interface CapacityBracket {
  label: string;
  description: string;
  bestSpace: string;
}

export interface EventFAQItem {
  question: string;
  answer: string;
}

export const eventTypesList: EventType[] = [
  {
    id: "birthday",
    name: "Birthday Celebrations",
    description: "Make milestones unforgettable. Private family cabins, custom menus, and thematic dining configurations tailored for all age brackets.",
    capacity: "10-25 Guests",
    startingPrice: "₹8,000",
    image: "https://images.unsplash.com/photo-1543007630-9710e4a00a20?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "anniversary",
    name: "Anniversary Dinners",
    description: "Celebrate alliances in low-light speakeasy setups. Elegant custom tables, personalized menus, and complimentary champagne mocktails.",
    capacity: "4-15 Guests",
    startingPrice: "₹5,000",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "corporate",
    name: "Corporate Dinners",
    description: "Establish corporate bonds over premium shared platters. Silent group rooms, corporate dining credentials, and dedicated concierge host assists.",
    capacity: "15-35 Guests",
    startingPrice: "₹15,000",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "catering",
    name: "Catering Services",
    description: "Take the syndicate kitchen to your site. High-end buffet setups, live wood-fire grills, and dedicated servers for weddings or offices.",
    capacity: "50-500+ Guests",
    startingPrice: "₹45,000",
    image: "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=600&auto=format&fit=crop",
  },
];

export const eventPackagesList: EventPackage[] = [
  {
    id: "pkg-silver",
    name: "Silver Package",
    price: "₹750 per Head",
    capacity: "Min 10 Guests",
    menu: ["Choice of 2 Starters", "Signature Chicken Mandi Platter", "Saffron Mint Lemonade", "Pistachio Baklava Plate"],
    decor: "Standard table setups with quiet ambient lantern decorations.",
    seating: "Reserved standard table arrays in the main chamber.",
    customization: "Basic mocktail swaps permitted.",
  },
  {
    id: "pkg-gold",
    name: "Gold Package",
    price: "₹1,200 per Head",
    capacity: "Min 15 Guests",
    menu: ["Choice of 3 Starters", "Royal Mutton Mandi Platter", "Pomegranate Saffron Infusion", "The Kunafa Syndicate"],
    decor: "Thematic floral layouts, gold cutlery setups, and custom banners.",
    seating: "Allotted private family cabins with sound insulation.",
    customization: "Custom starter menu configurations and dessert adjustments.",
  },
  {
    id: "pkg-royal",
    name: "Royal Package",
    price: "₹1,800 per Head",
    capacity: "Min 20 Guests",
    menu: ["All Premium Starters", "The Mafia Feast Platter (Lamb & Chicken)", "Unlimited Mocktails", "Full Dessert Syndicate Feasts"],
    decor: "Premium speakeasy themed red-velvet backdrops, custom name-cards.",
    seating: "Exclusive VIP lounge booking with dedicated host hosts.",
    customization: "Full menu adjustment control and custom chef recipes allowed.",
  },
];

export const venueSpacesList: VenueSpace[] = [
  {
    id: "v-cabins",
    name: "Private Family Cabins",
    capacity: "4-12 Guests",
    description: "Cozy private booth structures with wooden lattice screens and carpet layers.",
    image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "v-lounge",
    name: "VIP Speakeasy Lounge",
    capacity: "10-25 Guests",
    description: "Low-light, luxury seating corners with direct call-bell concierge controls.",
    image: "https://images.unsplash.com/photo-1543007630-9710e4a00a20?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "v-banquet",
    name: "Chamber Dining Room",
    capacity: "20-45 Guests",
    description: "The complete dining chambers, fully configured for massive banqueting setups.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=600&auto=format&fit=crop",
  },
];

export const capacityBracketsList: CapacityBracket[] = [
  { label: "2 Guests", description: "Intimate corner booths with low-key spotlights.", bestSpace: "VIP Lounge Table" },
  { label: "4-8 Guests", description: "Cozy closed compartments with call bell access.", bestSpace: "Family Cabin" },
  { label: "10-15 Guests", description: "Spacious combined cabins or round banquet layouts.", bestSpace: "VIP Lounge / Cabins" },
  { label: "20-30+ Guests", description: "Exclusive block-booking of chamber wings.", bestSpace: "Private Dining Hall" },
];

export const eventFaqsList: EventFAQItem[] = [
  {
    question: "Do you charge extra for private cabin bookings?",
    answer: "No. Private family cabins are included at zero extra cost in our Gold and Royal packages. Casual group bookings are subject to availability during weekend dinner peaks.",
  },
  {
    question: "How far in advance should we submit catering requests?",
    answer: "For office lunches or small home caterings (50 people), we require at least 48 hours notice. For massive wedding buffets (150+ guests), we recommend registering the inquiry at least 2 weeks in advance.",
  },
  {
    question: "Can we get custom tax/GST invoices for corporate billing?",
    answer: "Yes. Mandi Mafia provides formal corporate tax invoices with registered GST details for business meals, corporate dinners, and team events.",
  },
  {
    question: "What is your refund policy on package bookings?",
    answer: "Initial booking deposits are fully refundable if cancellations are submitted at least 5 days prior to the event date. Shorter notices can be rescheduled to alternative dates free of charge.",
  },
];
