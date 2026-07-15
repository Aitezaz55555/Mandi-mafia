export const siteConfig = {
  name: "Mandi Mafia",
  tagline: "Authentic Arabian Dining, Crafted for Celebration",
  description: "Experience slow-cooked Arabian flavours, premium fine dining, and private family cabins in the heart of Vijayawada.",
  url: "https://mandimafia.com",
  ogImage: "https://mandimafia.com/assets/images/UI/mandi-mafia-logo.jpg",
  
  // Contacts
  phone: "+91 866 555 0100",
  whatsapp: "+918665550100",
  email: "registry@mandimafia.com",
  
  // Locations
  address: "Beside Skyline Hub, Mandi Mafia Street, Vijayawada, AP - 520001, India",
  coordinates: {
    lat: 16.5062,
    lng: 80.6480,
  },
  googleMapsLink: "https://maps.google.com",
  
  // Operations
  hours: {
    weekdays: "Mon - Sun: 11:30 AM - 11:00 PM",
    kitchenClose: "10:30 PM",
    holidayNotes: "Open on all national holidays. Special timings might apply on Eid.",
    peakHours: "8:00 PM - 10:00 PM daily",
  },
  
  // Socials
  socials: {
    instagram: "https://instagram.com/mandimafia",
    facebook: "https://facebook.com/mandimafia",
    whatsapp: "https://wa.me/918665550100",
    google: "https://google.com/maps",
  },

  // Layout Navigations
  mainNav: {
    left: [
      { label: "The Menu", href: "/menu" },
      { label: "Chambers Gallery", href: "/gallery" },
      { label: "Private Events", href: "/events" },
    ],
    right: [
      { label: "Patrons Reviews", href: "/reviews" },
      { label: "Reservations", href: "/reservations" },
      { label: "Concierge Contact", href: "/contact" },
    ]
  },
  
  footerNav: {
    chambers: [
      { label: "The Menu", href: "/menu" },
      { label: "Visual Gallery", href: "/gallery" },
      { label: "Table Reservations", href: "/reservations" },
      { label: "Events & Catering", href: "/events" },
    ],
    syndicate: [
      { label: "Our Story", href: "/#story" },
      { label: "Patrons reviews", href: "/reviews" },
      { label: "Concierge desk", href: "/contact" },
    ],
    legal: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Registry", href: "/terms" },
    ],
  },
} as const;
