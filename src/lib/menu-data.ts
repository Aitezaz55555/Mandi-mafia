export interface Dish {
  id: string;
  name: string;
  price: string;
  description: string;
  category: "grand-feasts" | "signature-mandi" | "starters" | "beverages" | "desserts";
  serves?: string;
  isBestseller?: boolean;
  isSignature?: boolean;
  image: string;
  ingredients: string[];
  recommendations: string;
  tags?: string[];
}

export const menuCategories = [
  { id: "grand-feasts", label: "Grand Feasts" },
  { id: "signature-mandi", label: "Signature Mandi" },
  { id: "starters", label: "Starters & Skewers" },
  { id: "beverages", label: "Mocktails & Beverages" },
  { id: "desserts", label: "Syndicate Desserts" },
] as const;

export const menuDishes: Dish[] = [
  // GRAND FEASTS
  {
    id: "platter-mafia-feast",
    name: "The Mafia Feast Platter",
    price: "₹1,899",
    description: "Our crowning achievement. A massive slow-smoked lamb shoulder and charcoal-grilled chicken mandi, seasoned with hand-imported Aden spices.",
    category: "grand-feasts",
    serves: "4-5 Patrons",
    isBestseller: true,
    isSignature: true,
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=600&auto=format&fit=crop",
    ingredients: ["Slow-smoked mutton shoulder", "Charcoal chicken", "Saffron mandi rice", "Roasted cashew garnish", "Smoked ghee", "Consommé soup"],
    recommendations: "Perfect for large family gatherings or birthday celebrations. Pairs beautifully with Pomegranate Saffron Infusion.",
  },
  {
    id: "platter-syndicate",
    name: "Al-Syndicate Platter",
    price: "₹2,499",
    description: "An elite assembly of slow-roasted lamb ribs, premium seekh kababs, grilled fish, and chicken shish taouk over a bed of mixed spice rice.",
    category: "grand-feasts",
    serves: "5-6 Patrons",
    isSignature: true,
    image: "https://images.unsplash.com/photo-1532636875304-0c8fe119ff91?q=80&w=600&auto=format&fit=crop",
    ingredients: ["Lamb ribs", "Seekh kababs", "Shish taouk", "Grilled fish", "Spiced long-grain rice", "Garlic aioli", "Harissa dip"],
    recommendations: "Our largest option. Highly recommended for corporate teams and client dining.",
  },

  // SIGNATURE MANDI
  {
    id: "mandi-royal-mutton",
    name: "Royal Mutton Mandi",
    price: "₹950",
    description: "Premium baby lamb slow-cooked for 18 hours until falling off the bone, served over aromatic basmati rice and drizzled with custom ghee.",
    category: "signature-mandi",
    serves: "2-3 Patrons",
    isBestseller: true,
    isSignature: true,
    image: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?q=80&w=600&auto=format&fit=crop",
    ingredients: ["18-hour slow-cooked baby lamb", "Yemeni spice rub", "Basmati rice", "Almonds and raisins", "Mandi broth"],
    recommendations: "Our most requested mandi. Drizzle the house tomato salsa over the meat before carving.",
  },
  {
    id: "mandi-chicken-saffron",
    name: "Saffron Chicken Mandi",
    price: "₹650",
    description: "Yemeni charcoal-grilled chicken infused with saffron, cardamom, and clove, slow-cooked in our underground brick ovens.",
    category: "signature-mandi",
    serves: "2 Patrons",
    isBestseller: true,
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=600&auto=format&fit=crop",
    ingredients: ["Charcoal oven-roasted chicken", "Saffron glaze", "Cardamom-spiced rice", "Fried onions"],
    recommendations: "A classic, aromatic recipe with zero grease. Excellent for young professionals and couples.",
  },
  {
    id: "mandi-premium-fish",
    name: "Premium Fish Mandi",
    price: "₹899",
    description: "Fresh catch marinated in a secret blend of Arabian herbs and sumac, chargrilled and served over lemon-infused mandi rice.",
    category: "signature-mandi",
    serves: "2 Patrons",
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=600&auto=format&fit=crop",
    ingredients: ["Spiced chargrilled seasonal fish", "Sumac", "Lemon-zest basmati rice", "Tahini dip"],
    recommendations: "Ideal for patrons looking for a lighter, herb-forward alternative to red meat.",
  },

  // STARTERS & SKEWERS
  {
    id: "starter-kabab-syndicate",
    name: "Gourmet Kabab Syndicate",
    price: "₹799",
    description: "A coalition of our finest hand-ground seekh kababs, grilled tomatoes, and garlic sauce, served on flat Arabian naan.",
    category: "starters",
    serves: "2-3 Patrons",
    isSignature: true,
    image: "https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?q=80&w=600&auto=format&fit=crop",
    ingredients: ["Hand-ground lamb minces", "Onion spices", "Grilled tomatoes", "Arabian flatbread", "Garlic sauce"],
    recommendations: "Excellent as a starting sharing platter while wait-times for Mandi conclude.",
  },
  {
    id: "starter-lamb-chops",
    name: "Aden Lamb Chops",
    price: "₹890",
    description: "Tender lamb rib chops marinated in a garlic-rosemary reduction and seared to order on volcanic stone grids.",
    category: "starters",
    image: "https://images.unsplash.com/photo-1603048588665-791ca8aea617?q=80&w=600&auto=format&fit=crop",
    ingredients: ["Lamb chops", "Garlic-rosemary reduction", "Grilled peppers"],
    recommendations: "Best served medium. Highly aromatic with high texture finish.",
  },
  {
    id: "starter-hummus-saffron",
    name: "Saffron Hummus & Warm Pita",
    price: "₹320",
    description: "Creamy chickpeas purée blended with tahini, organic olive oil, and saffron flakes, served with fresh clay-oven baked pita.",
    category: "starters",
    isBestseller: true,
    image: "https://images.unsplash.com/photo-1547058881-aa0edd92aab3?q=80&w=600&auto=format&fit=crop",
    ingredients: ["Chickpeas", "Tahini", "Saffron threads", "Extra virgin olive oil", "Baked flat pita"],
    recommendations: "Perfect starting dip. Vegan friendly.",
  },

  // MOCKTAILS & BEVERAGES
  {
    id: "drink-saffron-infusion",
    name: "Pomegranate Saffron Infusion",
    price: "₹240",
    description: "Fresh pomegranate juice muddled with mint leaves, lime slices, and a dash of organic saffron water. Incredibly refreshing.",
    category: "beverages",
    isBestseller: true,
    isSignature: true,
    image: "https://images.unsplash.com/photo-1536935338788-846bb9981813?q=80&w=600&auto=format&fit=crop",
    ingredients: ["Pomegranate seeds", "Mint leaves", "Saffron water", "Sparkling water", "Lime wedge"],
    recommendations: "Cleanses the palate perfectly between heavy meat bites.",
  },
  {
    id: "drink-mint-press",
    name: "Mint Lemon Press",
    price: "₹180",
    description: "Traditional Arabian frozen lemonade blended with fresh mountain mint and sweet simple syrup. Cold, icy, and refreshing.",
    category: "beverages",
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=600&auto=format&fit=crop",
    ingredients: ["Pressed lemons", "Crushed mint", "Blended ice", "Sugar syrup"],
    recommendations: "Excellent during hot afternoon seatings in Vijayawada.",
  },

  // SYNDICATE DESSERTS
  {
    id: "dessert-kunafa",
    name: "The Kunafa Syndicate",
    price: "₹380",
    description: "Traditional warm kataifi pastry loaded with sweet unsalted cheese, baked until golden, soaked in rosewater syrup, and topped with pistachios.",
    category: "desserts",
    isBestseller: true,
    isSignature: true,
    image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?q=80&w=600&auto=format&fit=crop",
    ingredients: ["Shredded kataifi pastry", "Sweet cheese", "Rosewater syrup", "Crushed pistachio garnish"],
    recommendations: "Served hot. Allow 10 minutes for baking. Serves 2 patrons easily.",
  },
  {
    id: "dessert-baklava",
    name: "Pistachio Baklava Plate",
    price: "₹350",
    description: "Layers of crisp golden phyllo pastry filled with sweet chopped pistachios, bound and sweetened with organic honey syrup.",
    category: "desserts",
    image: "https://images.unsplash.com/photo-1519676867240-f03562e64548?q=80&w=600&auto=format&fit=crop",
    ingredients: ["Phyllo dough layers", "Honey syrup", "Chopped pistachios"],
    recommendations: "Pairs exceptionally well with traditional black Arabian coffee.",
  },
];
