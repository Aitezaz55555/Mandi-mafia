export interface Branch {
  id: string;
  name: string;
  address: string;
  phone: string;
  whatsapp: string;
  email: string;
  mapsLink: string;
  hours: string;
  holidayNotes: string;
  peakHours: string;
  bestTimeToVisit: string;
  valetInfo: string;
  landmarks: string;
  accessibility: string;
  coordinates: { lat: number; lng: number };
}

export interface QuickHelpFAQ {
  question: string;
  answer: string;
}

export interface SocialLink {
  id: string;
  platform: string;
  url: string;
}

export const branchesList: Branch[] = [
  {
    id: "vijayawada-hq",
    name: "Vijayawada Chambers (HQ)",
    address: "Beside Skyline Hub, Mandi Mafia Street, Vijayawada, AP - 520001, India",
    phone: "+91 866 555 0100",
    whatsapp: "918665550100",
    email: "registry@mandimafia.com",
    mapsLink: "https://maps.google.com",
    hours: "Monday — Sunday: 11:30 AM — 11:00 PM",
    holidayNotes: "Open on all national holidays. Special timings might apply on Eid-al-Fitr.",
    peakHours: "8:00 PM — 10:00 PM daily",
    bestTimeToVisit: "Weekday lunch slots (12:30 PM — 2:30 PM) for quiet speakeasy business dining.",
    valetInfo: "Complimentary secure valet parking stands are located directly at the main entry gates.",
    landmarks: "Beside the Skyline Hub landmark towers, opposite the Premium Plaza gardens.",
    accessibility: "Wheelchair ramp accessibility is available at the south entrance elevator chambers.",
    coordinates: { lat: 16.5062, lng: 80.6480 },
  },
  {
    id: "guntur-chambers",
    name: "Guntur Chambers (Opening Winter 2026)",
    address: "Main Amaravati Highway road, Guntur, AP - 522002, India",
    phone: "Coming Soon",
    whatsapp: "",
    email: "guntur@mandimafia.com",
    mapsLink: "",
    hours: "Operational from Winter 2026",
    holidayNotes: "Under interior construction progress.",
    peakHours: "TBD",
    bestTimeToVisit: "TBD",
    valetInfo: "Valet and basement parking zones are currently under styling.",
    landmarks: "Adjacent to the Guntur Highway Toll plaza, beside Metro Station.",
    accessibility: "Full WCAG access ramps and elevator shafts are integrated into the architecture blueprint.",
    coordinates: { lat: 16.3067, lng: 80.4365 },
  },
];

export const quickHelpFaqs: QuickHelpFAQ[] = [
  {
    question: "Do you offer private event bookings?",
    answer: "Yes. Our Guntur and Vijayawada chambers feature dedicated private dining lounges equipped to hold corporate events, family anniversaries, and reunions up to 35 guests.",
  },
  {
    question: "Is home delivery available directly?",
    answer: "To ensure slow-cooked mandi rice and smoked meats maintain high visual quality, we do not partner with generic delivery networks. Direct valet pickup and packaging orders can be booked via our concierge hotline.",
  },
  {
    question: "How do I cancel or update my table booking details?",
    answer: "You can click on the WhatsApp concierge shortcut or call the chambers directly with your Table ID. Updates are free of charge if requested at least 1 hour in advance.",
  },
  {
    question: "Can we book cabin seats for large groups?",
    answer: "Yes. Private family cabins accommodate 4-12 guests comfortably. For larger groups, we merge adjacent cabins using collapsible wooden partitions.",
  },
];

export const socialLinksList: SocialLink[] = [
  { id: "instagram", platform: "Instagram", url: "https://instagram.com" },
  { id: "facebook", platform: "Facebook", url: "https://facebook.com" },
  { id: "whatsapp", platform: "WhatsApp", url: "https://wa.me/918665550100" },
  { id: "google", platform: "Google Reviews", url: "https://google.com" },
];
