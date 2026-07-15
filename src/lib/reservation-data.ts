export interface TimeSlot {
  time: string;
  period: "lunch" | "dinner";
  isPopular?: boolean;
  isAvailable: boolean;
}

export interface DiningOption {
  id: string;
  name: string;
  description: string;
  capacity: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export const timeSlots: TimeSlot[] = [
  // Lunch Slots
  { time: "12:00 PM", period: "lunch", isAvailable: true },
  { time: "12:30 PM", period: "lunch", isAvailable: true },
  { time: "1:00 PM", period: "lunch", isPopular: true, isAvailable: true },
  { time: "1:30 PM", period: "lunch", isAvailable: true },
  { time: "2:00 PM", period: "lunch", isAvailable: true },
  { time: "2:30 PM", period: "lunch", isAvailable: false }, // fully booked
  
  // Dinner Slots
  { time: "7:00 PM", period: "dinner", isAvailable: true },
  { time: "7:30 PM", period: "dinner", isAvailable: true },
  { time: "8:00 PM", period: "dinner", isPopular: true, isAvailable: true },
  { time: "8:30 PM", period: "dinner", isPopular: true, isAvailable: true },
  { time: "9:00 PM", period: "dinner", isAvailable: true },
  { time: "9:30 PM", period: "dinner", isAvailable: true },
  { time: "10:00 PM", period: "dinner", isAvailable: false }, // late night closed
];

export const diningOptions: DiningOption[] = [
  {
    id: "standard",
    name: "Standard Table",
    description: "Centrally located table in the main dining chamber, surrounded by soft speakeasy lanterns.",
    capacity: "1-8 Guests",
  },
  {
    id: "cabin",
    name: "Private Family Cabin",
    description: "Exclusive walled cabin space with Yemen-style floor carpets or standard table setups, offering absolute privacy.",
    capacity: "4-12 Guests",
  },
  {
    id: "private-hall",
    name: "Private Dining Hall",
    description: "Soundproofed mini-hall space for birthday celebrations, anniversaries, and grand feasts.",
    capacity: "10-20 Guests",
  },
  {
    id: "vip",
    name: "VIP Lounge Table",
    description: "Luxury lantern-lit alcove seats with priority concierge service and customizable portion layouts.",
    capacity: "2-6 Guests",
  },
];

export const occasionsList = [
  { id: "casual", label: "Casual Dining" },
  { id: "birthday", label: "Birthday Celebration" },
  { id: "anniversary", label: "Anniversary" },
  { id: "corporate", label: "Corporate Dinner" },
  { id: "family", label: "Family Gathering" },
] as const;

export const bookingFaqs: FAQItem[] = [
  {
    question: "Is valet parking available at the chambers?",
    answer: "Yes. Mandi Mafia offers complimentary valet parking services for all dining guests directly at our main entry gate beside Skyline Hub.",
  },
  {
    question: "Can we book private family cabins in advance?",
    answer: "Absolutely. You can request a 'Private Family Cabin' during the checkout step of this booking flow. Cabins are held on a first-come, first-served basis, especially during weekend dinner slots.",
  },
  {
    question: "Do you accommodate large group feasting menus?",
    answer: "Yes, our chambers are equipped to host groups of 20+ guests. For corporate bookings or groups exceeding 15 people, we recommend contacting our event manager directly via WhatsApp.",
  },
  {
    question: "Is there a cancellation or reservation hold fee?",
    answer: "No. Direct bookings through our registry system are free of charge. However, we hold reserved tables for a maximum of 15 minutes past the booking time before releasing them during peak hours.",
  },
  {
    question: "Can we pre-order signature sharing platters?",
    answer: "Yes. You can request specific dishes (such as the signature Mafia Feast Platter) inside the Special Requests field of this booking form, ensuring our kitchen primes the slow-cookers for your table.",
  },
];
