export interface Review {
  id: string;
  name: string;
  rating: number;
  text: string;
  visitType: string;
  date: string;
  verified: boolean;
}

export interface BloggerVideo {
  id: string;
  creator: string;
  platform: "YouTube" | "Instagram";
  title: string;
  thumbnail: string;
  link: string;
}

export interface InstagramPost {
  id: string;
  image: string;
  likes: string;
  link: string;
}

export interface AwardItem {
  id: string;
  title: string;
  year: string;
  issuer: string;
  description: string;
}

export interface PressMention {
  id: string;
  publication: string;
  summary: string;
  link: string;
  logoText: string;
}

export const reviewsList: Review[] = [
  {
    id: "rev-1",
    name: "Syed Alisha",
    rating: 5,
    text: "Mandi Mafia completely redefines dining in Vijayawada. The private cabins are incredibly cozy. The Mafia Feast Platter was an absolute masterpiece—perfectly cooked mutton, aromatic saffron rice, and service that felt genuinely VIP.",
    visitType: "Family Celebration",
    date: "July 12, 2026",
    verified: true,
  },
  {
    id: "rev-2",
    name: "Rupa Devi",
    rating: 5,
    text: "Perfect for family celebrations! We booked a private cabin for my father's birthday, and the team went above and beyond. Sharing the grand tandoori mutton platter together made the evening feel so authentic and special.",
    visitType: "Birthday Feast",
    date: "July 08, 2026",
    verified: true,
  },
  {
    id: "rev-3",
    name: "Ananya Ray",
    rating: 5,
    text: "As a food blogger, I'm always looking for atmospheric dining spots. Mandi Mafia fits the bill perfectly. The low-key lantern-lit dining area is gorgeous, and the dishes taste even better than they look on camera.",
    visitType: "Weekend Feasting",
    date: "July 01, 2026",
    verified: true,
  },
  {
    id: "rev-4",
    name: "Garth Wade",
    rating: 5,
    text: "Being an expat, I have tried Mandi across the Gulf, but the slow wood-fired mutton spice blend here is incredible. The service standard is very professional and tables are held precisely.",
    visitType: "Business Dinner",
    date: "June 25, 2026",
    verified: true,
  },
  {
    id: "rev-5",
    name: "Mohammad Khan",
    rating: 5,
    text: "Excellent parking valet system. The cabins are highly comfortable and spacious. Saffron mocktails were perfectly iced and sweet. Highly recommend.",
    visitType: "Casual Dining",
    date: "June 18, 2026",
    verified: true,
  },
  {
    id: "rev-6",
    name: "Dr. Lakshmi S.",
    rating: 4,
    text: "Very hygiene preparation standards. Food was extremely aromatic. The wait times during Sunday dinner peaks can be long, so make sure to register tables beforehand.",
    visitType: "Sunday Dinner",
    date: "June 10, 2026",
    verified: true,
  },
];

export const bloggerVideosList: BloggerVideo[] = [
  {
    id: "blog-1",
    creator: "Vjayawada Food Trails",
    platform: "YouTube",
    title: "Testing the Secret chambers of Mandi Mafia - Worth the hype?",
    thumbnail: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=600&auto=format&fit=crop",
    link: "https://youtube.com",
  },
  {
    id: "blog-2",
    creator: "Ananya Food Diarist",
    platform: "Instagram",
    title: "Visual guide to slow-cooking Arabian lamb in underground clay tandoors!",
    thumbnail: "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?q=80&w=600&auto=format&fit=crop",
    link: "https://instagram.com",
  },
];

export const instagramPostsList: InstagramPost[] = [
  {
    id: "ig-1",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=600&auto=format&fit=crop",
    likes: "1.2k Likes",
    link: "https://instagram.com",
  },
  {
    id: "ig-2",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=600&auto=format&fit=crop",
    likes: "890 Likes",
    link: "https://instagram.com",
  },
  {
    id: "ig-3",
    image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?q=80&w=600&auto=format&fit=crop",
    likes: "2.1k Likes",
    link: "https://instagram.com",
  },
  {
    id: "ig-4",
    image: "https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?q=80&w=600&auto=format&fit=crop",
    likes: "1.5k Likes",
    link: "https://instagram.com",
  },
];

export const awardsListList: AwardItem[] = [
  {
    id: "aw-1",
    title: "Best Arabian Fine Dining",
    year: "2025",
    issuer: "AP Hospitality Guild",
    description: "Awarded for exceptional wood-fired slow-cooking fidelity and heritage recipe preservation.",
  },
  {
    id: "aw-2",
    title: "Elite Space Design Certificate",
    year: "2025",
    issuer: "Architectural Digest Local",
    description: "Certified for our innovative low-light lantern layout and comfortable private dining cabins configuration.",
  },
];

export const pressMentionsList: PressMention[] = [
  {
    id: "pr-1",
    publication: "The Culinary Chronicle",
    summary: "Mandi Mafia orchestrates a grand communal feasting symphony. Every platter commands respect and flavor precision.",
    link: "https://google.com",
    logoText: "CHRONICLE",
  },
  {
    id: "pr-2",
    publication: "Deccan Gourmet",
    summary: "Redefining casual setups in Vijayawada with a high-end, Speakeasy specialty fine dining experience.",
    link: "https://google.com",
    logoText: "DECCAN G.",
  },
];
