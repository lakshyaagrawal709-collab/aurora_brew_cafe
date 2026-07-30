export const cafeDetails = {
  name: "Aurora Brew Cafe",
  tagline: "Where Coffee Meets Comfort",
  address: "C-84, Janpath, C-Scheme, Jaipur, Rajasthan 302001",
  city: "Jaipur, Rajasthan",
  phone: "+91 98290 12345",
  alternatePhone: "+91 141 234 5678",
  email: "hello@aurorabrewcafe.in",
  reservationsEmail: "bookings@aurorabrewcafe.in",
  googleRating: 4.9,
  totalReviews: 1480,
  openingHours: [
    { days: "Monday - Thursday", hours: "8:00 AM – 11:00 PM" },
    { days: "Friday - Saturday", hours: "8:00 AM – 11:30 PM" },
    { days: "Sunday", hours: "8:00 AM – 11:00 PM" }
  ],
  socials: {
    instagram: "https://instagram.com/aurorabrewcafe.jaipur",
    facebook: "https://facebook.com/aurorabrewcafe",
    whatsapp: "https://wa.me/919829012345?text=Hi%20Aurora%20Brew%20Cafe,%20I'd%20like%20to%20reserve%20a%20table!"
  }
};

export const menuCategories = [
  { id: "all", name: "All Items", icon: "Sparkles" },
  { id: "signature", name: "Signature Coffees", icon: "Coffee" },
  { id: "espresso", name: "Espresso & Hot Brews", icon: "Flame" },
  { id: "cold-brew", name: "Cold Brews & Frappes", icon: "Snowflake" },
  { id: "teas", name: "Artisanal Teas", icon: "Leaf" },
  { id: "breakfast", name: "Gourmet Breakfast", icon: "Utensils" },
  { id: "pizza", name: "Woodfired Pizza", icon: "PieChart" },
  { id: "burgers", name: "Craft Burgers & Wraps", icon: "Sandwich" },
  { id: "pasta", name: "Creamy Pasta", icon: "CookingPot" },
  { id: "desserts", name: "Bakery & Desserts", icon: "Cake" }
];

export const menuItems = [
  {
    id: "sig-1",
    name: "Royal Saffron Cardamom Latte",
    category: "signature",
    price: 345,
    rating: 4.9,
    prepTime: "8 mins",
    calories: 210,
    isVeg: true,
    isPopular: true,
    isChefSpecial: true,
    isSpicy: false,
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=800&auto=format&fit=crop",
    description: "Our homage to Jaipur's royal heritage. Single-origin Chikmagalur espresso infused with Kashmiri saffron, freshly crushed green cardamom, and velvety micro-foamed milk, finished with edible gold leaf.",
    ingredients: ["Espresso", "Kashmiri Saffron", "Green Cardamom", "Steam Milk", "Edible 24k Gold Flakes"],
    flavorProfile: "Rich, Aromatic, Velvety, Subtle Spice"
  },
  {
    id: "sig-2",
    name: "Smoked Vanilla Cold Brew",
    category: "signature",
    price: 320,
    rating: 4.8,
    prepTime: "5 mins",
    calories: 140,
    isVeg: true,
    isPopular: true,
    isChefSpecial: false,
    isSpicy: false,
    image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?q=80&w=800&auto=format&fit=crop",
    description: "20-hour slow steeped cold brew infused with organic Madagascar vanilla bean syrup, served over hand-carved ice sphere and misted with natural hickory smoke under a glass cloche.",
    ingredients: ["20-Hr Cold Brew Concentrate", "Madagascar Vanilla", "Hickory Smoke", "Distilled Crystal Ice"],
    flavorProfile: "Bold, Crisp, Smoked Vanilla finish"
  },
  {
    id: "esp-1",
    name: "Artisanal Velvet Cappuccino",
    category: "espresso",
    price: 260,
    rating: 4.9,
    prepTime: "6 mins",
    calories: 160,
    isVeg: true,
    isPopular: true,
    isChefSpecial: false,
    isSpicy: false,
    image: "https://images.unsplash.com/photo-1534778101976-62847782c213?q=80&w=800&auto=format&fit=crop",
    description: "Double shot of 100% Arabica dark roast espresso with perfectly textured microfoam pouring detailed swan latte art, dusted with dark Belgian cocoa.",
    ingredients: ["Double Espresso Shot", "Whole Milk Microfoam", "Valrhona Cocoa Powder"],
    flavorProfile: "Smooth, Chocolate undertones, Creamy"
  },
  {
    id: "esp-2",
    name: "Double Shot Espresso Macchiato",
    category: "espresso",
    price: 210,
    rating: 4.7,
    prepTime: "4 mins",
    calories: 45,
    isVeg: true,
    isPopular: false,
    isChefSpecial: false,
    isSpicy: false,
    image: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?q=80&w=800&auto=format&fit=crop",
    description: "Pure intense double ristretto marked with a delicate dollop of silky hot milk foam.",
    ingredients: ["Arabica Ristretto Shot", "Silky Milk Foam Dot"],
    flavorProfile: "Intense, Nutty Crema, Punchy"
  },
  {
    id: "esp-3",
    name: "Cinnamon Mocha Bliss",
    category: "espresso",
    price: 295,
    rating: 4.9,
    prepTime: "7 mins",
    calories: 280,
    isVeg: true,
    isPopular: true,
    isChefSpecial: false,
    isSpicy: false,
    image: "https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?q=80&w=800&auto=format&fit=crop",
    description: "Espresso combined with molten 70% dark chocolate ganache, Ceylon cinnamon, steamed milk, topped with whipped cream and chocolate curls.",
    ingredients: ["Espresso", "70% Dark Chocolate Ganache", "Ceylon Cinnamon", "Whipped Cream"],
    flavorProfile: "Decadent Chocolate, Warm Cinnamon"
  },
  {
    id: "cb-1",
    name: "Salted Caramel Cold Foam Frappe",
    category: "cold-brew",
    price: 330,
    rating: 4.9,
    prepTime: "6 mins",
    calories: 310,
    isVeg: true,
    isPopular: true,
    isChefSpecial: true,
    isSpicy: false,
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=800&auto=format&fit=crop",
    description: "Blended espresso frappe swirled with house-made pink Himalayan salted caramel syrup, topped with thick dense cold foam and crushed caramel brittle.",
    ingredients: ["Espresso", "Himalayan Salted Caramel", "Cold Milk Foam", "Caramel Brittle Crumbs"],
    flavorProfile: "Sweet & Salty, Refreshing, Rich"
  },
  {
    id: "cb-2",
    name: "Iced Spanish Latte",
    category: "cold-brew",
    price: 290,
    rating: 4.8,
    prepTime: "5 mins",
    calories: 230,
    isVeg: true,
    isPopular: true,
    isChefSpecial: false,
    isSpicy: false,
    image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?q=80&w=800&auto=format&fit=crop",
    description: "Creamy iced latte sweetened with sweetened condensed milk layered over double shot Coorg Arabica espresso.",
    ingredients: ["Espresso", "Condensed Milk", "Fresh Milk", "Ice Cubes"],
    flavorProfile: "Silky, Sweet, Rich Coffee notes"
  },
  {
    id: "tea-1",
    name: "Kashmiri Kahwa Tea Infusion",
    category: "teas",
    price: 240,
    rating: 4.9,
    prepTime: "6 mins",
    calories: 90,
    isVeg: true,
    isPopular: true,
    isChefSpecial: true,
    isSpicy: false,
    image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?q=80&w=800&auto=format&fit=crop",
    description: "Traditional green tea simmered with whole Kashmiri saffron strands, cinnamon bark, green cardamom, cloves, and slivered almonds, sweetened with wild mountain honey.",
    ingredients: ["Kashmiri Green Tea", "Saffron", "Almonds", "Cinnamon", "Honey"],
    flavorProfile: "Aromatic, Warming, Herbal"
  },
  {
    id: "tea-2",
    name: "Blooming Peach & Hibiscus Iced Tea",
    category: "teas",
    price: 220,
    rating: 4.7,
    prepTime: "5 mins",
    calories: 110,
    isVeg: true,
    isPopular: false,
    isChefSpecial: false,
    isSpicy: false,
    image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?q=80&w=800&auto=format&fit=crop",
    description: "Organic Egyptian hibiscus flowers cold brewed with real white peach nectar and mint leaves over crushed ice.",
    ingredients: ["Hibiscus Brew", "Peach Nectar", "Fresh Mint", "Lemon Slice"],
    flavorProfile: "Tangy, Fruity, Crisp"
  },
  {
    id: "bf-1",
    name: "Avocado & Truffle Poached Egg Toast",
    category: "breakfast",
    price: 420,
    rating: 4.9,
    prepTime: "12 mins",
    calories: 420,
    isVeg: false,
    isPopular: true,
    isChefSpecial: true,
    isSpicy: false,
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=800&auto=format&fit=crop",
    description: "Artisanal sourdough toast topped with mashed Hass avocado, organic farm poached eggs, microgreens, drizzled with Italian white truffle oil and toasted seeds.",
    ingredients: ["Artisan Sourdough", "Hass Avocado", "Poached Eggs", "Truffle Oil", "Microgreens"],
    flavorProfile: "Creamy, Savory, Earthy Truffle"
  },
  {
    id: "bf-2",
    name: "Belgian Chocolate Butter Croissant",
    category: "breakfast",
    price: 220,
    rating: 4.8,
    prepTime: "5 mins",
    calories: 340,
    isVeg: true,
    isPopular: true,
    isChefSpecial: false,
    isSpicy: false,
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=800&auto=format&fit=crop",
    description: "Flaky 27-layer French butter croissant baked fresh daily, filled with warm melting Belgian chocolate hazelnut cream.",
    ingredients: ["French Butter", "Flour", "Belgian Dark Chocolate", "Hazelnuts"],
    flavorProfile: "Flaky, Buttery, Melting Chocolate"
  },
  {
    id: "piz-1",
    name: "Truffle Mushroom & Burrata Pizza",
    category: "pizza",
    price: 645,
    rating: 4.9,
    prepTime: "18 mins",
    calories: 680,
    isVeg: true,
    isPopular: true,
    isChefSpecial: true,
    isSpicy: false,
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=800&auto=format&fit=crop",
    description: "Hand-tossed sourdough pizza crust baked in our 450°C woodfired oven. San Marzano tomato sauce, wild porcini mushrooms, creamy fresh Italian Burrata, and truffle oil.",
    ingredients: ["48-Hr Sourdough Base", "Porcini Mushrooms", "Fresh Burrata Cheese", "Truffle Oil", "Fresh Basil"],
    flavorProfile: "Smoky Crust, Creamy Burrata, Rich Mushrooms"
  },
  {
    id: "piz-2",
    name: "Fiery Paneer & Bell Pepper Woodfired Pizza",
    category: "pizza",
    price: 545,
    rating: 4.8,
    prepTime: "16 mins",
    calories: 610,
    isVeg: true,
    isPopular: true,
    isChefSpecial: false,
    isSpicy: true,
    image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?q=80&w=800&auto=format&fit=crop",
    description: "Smoky woodfired pizza topped with spicy charred cottage cheese cubes, trio of bell peppers, caramelized onions, jalapeños, and melted fior di latte mozzarella.",
    ingredients: ["Sourdough Base", "Spicy Paneer", "Tri-Color Peppers", "Jalapeños", "Fior di Latte"],
    flavorProfile: "Spicy, Cheesy, Smoky"
  },
  {
    id: "bur-1",
    name: "The Grand Aurora Truffle Burger",
    category: "burgers",
    price: 495,
    rating: 4.9,
    prepTime: "15 mins",
    calories: 720,
    isVeg: true,
    isPopular: true,
    isChefSpecial: true,
    isSpicy: false,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=800&auto=format&fit=crop",
    description: "House handmade portobello mushroom and quinoa patty on a toasted brioche bun, double smoked cheddar, caramelized onions, truffle aioli, served with hand-cut parmesan fries.",
    ingredients: ["Portobello & Quinoa Patty", "Brioche Bun", "Smoked Cheddar", "Truffle Aioli", "Parmesan Fries"],
    flavorProfile: "Juicy, Umami, Savory"
  },
  {
    id: "pas-1",
    name: "Pesto & Roasted Pine Nut Penne",
    category: "pasta",
    price: 480,
    rating: 4.8,
    prepTime: "14 mins",
    calories: 540,
    isVeg: true,
    isPopular: true,
    isChefSpecial: false,
    isSpicy: false,
    image: "https://images.unsplash.com/photo-1621996346565-e3def6164286?q=80&w=800&auto=format&fit=crop",
    description: "Bronze-cut Penne tossed in fresh Genovese basil pesto, toasted pine nuts, cherry tomatoes, and aged Parmesan shavings.",
    ingredients: ["Bronze-cut Penne", "Genovese Basil", "Toasted Pine Nuts", "Aged Parmesan", "Extra Virgin Olive Oil"],
    flavorProfile: "Herbaceous, Nutty, Fresh"
  },
  {
    id: "des-1",
    name: "Signature Basque Burnt Cheesecake",
    category: "desserts",
    price: 340,
    rating: 4.95,
    prepTime: "5 mins",
    calories: 410,
    isVeg: true,
    isPopular: true,
    isChefSpecial: true,
    isSpicy: false,
    image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?q=80&w=800&auto=format&fit=crop",
    description: "Traditional Spanish caramelized cheesecake with a crustless burnt top and molten creamy center, served with warm raspberry coulis.",
    ingredients: ["Spanish Cream Cheese", "Heavy Cream", "Raspberry Coulis", "Vanilla Pod"],
    flavorProfile: "Rich Creamy Center, Caramelized Top, Tart Berry contrast"
  },
  {
    id: "des-2",
    name: "Classic Sizzling Fudgy Brownie with Gelato",
    category: "desserts",
    price: 310,
    rating: 4.9,
    prepTime: "6 mins",
    calories: 480,
    isVeg: true,
    isPopular: true,
    isChefSpecial: false,
    isSpicy: false,
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=800&auto=format&fit=crop",
    description: "Warm dense Belgian dark chocolate walnut brownie served on a sizzling hot iron plate, topped with artisanal vanilla bean gelato and dark chocolate drizzle.",
    ingredients: ["Belgian Dark Chocolate", "Walnuts", "Vanilla Bean Gelato", "Hot Chocolate Sauce"],
    flavorProfile: "Hot & Cold contrast, Deep Chocolate"
  }
];

export const specialOffers = [
  {
    id: "off-1",
    title: "Jaipur Student Special",
    discount: "15% OFF",
    code: "JAIPURSTUDENT",
    description: "Valid on all beverages and food items Monday through Thursday for university and college students with valid ID.",
    badge: "Student Deal",
    validTill: "Valid Everyday 2PM - 7PM",
    bgGradient: "from-amber-900/60 to-orange-950/80"
  },
  {
    id: "off-2",
    title: "Happy Hours Cappuccino BOGO",
    discount: "BUY 1 GET 1 FREE",
    code: "HAPPYHOURS",
    description: "Order any artisanal coffee beverage between 4 PM and 6 PM and get the second one complimentary.",
    badge: "Happy Hour",
    validTill: "Daily 4 PM - 6 PM",
    bgGradient: "from-yellow-900/60 to-amber-950/80"
  },
  {
    id: "off-3",
    title: "Weekend Gourmet Brunch Combo",
    discount: "FLAT ₹250 OFF",
    code: "WEEKENDCOMBO",
    description: "Includes any Gourmet Breakfast Dish + Signature Coffee + Fresh Bakery Dessert at a special bundle price.",
    badge: "Weekend Special",
    validTill: "Saturday & Sunday All Day",
    bgGradient: "from-stone-900/60 to-brown-950/80"
  }
];

export const cafeStory = {
  title: "The Aurora Story",
  subtitle: "Born in C-Scheme, Crafting Coffee Excellence",
  descriptionParagraphs: [
    "Founded in 2018 in the quiet, tree-lined avenues of C-Scheme, Jaipur, Aurora Brew Cafe was built with a single vision: to create a sanctuary where world-class coffee craftsmanship meets the regal warmth of Rajasthani hospitality.",
    "We directly partner with high-altitude organic coffee estates in Chikmagalur and Coorg. Every single bean is hand-selected and custom small-batch roasted weekly on our vintage Cast Iron roaster right here at our C-Scheme cafe.",
    "Whether you're seeking a quiet alcove to work, catching up with loved ones over woodfired sourdough pizza, or savoring our signature Royal Saffron Cardamom Latte, Aurora is crafted to feel like your second home."
  ],
  stats: [
    { label: "Arabica Estates Partnered", value: "100%" },
    { label: "Google Reviews Rating", value: "4.9 ★" },
    { label: "Gourmet Menu Items", value: "50+" },
    { label: "National Barista Awards", value: "15+" }
  ],
  timeline: [
    { year: "2018", title: "The First Pour", description: "Opened our boutique coffee bar doors in C-Scheme, Jaipur with 6 tables and a 3-group Synesso machine." },
    { year: "2020", title: "In-House Roastery", description: "Established our micro-roastery, roasting single-origin beans sourced directly from Coorg & Chikmagalur." },
    { year: "2022", title: "Best Cafe in Rajasthan", description: "Awarded 'Best Luxury Specialty Cafe' by Times Food & Nightlife Awards." },
    { year: "2024", title: "Glasshouse & Garden Expansion", description: "Expanded to include a 100-seat luxury indoor glasshouse and pet-friendly outdoor courtyard." },
    { year: "2026", title: "AI Coffee Sommelier & Masterclasses", description: "Pioneering interactive guest experiences with personalized coffee pairing AI and weekend roasting workshops." }
  ],
  team: [
    {
      name: "Chef Vikramaditya Singh",
      role: "Executive Head Chef & Co-Founder",
      image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=800&auto=format&fit=crop",
      bio: "18+ years of international culinary expertise at Le Cordon Bleu Paris & top luxury resorts."
    },
    {
      name: "Ananya Sharma",
      role: "Master Barista & Head of Coffee",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop",
      bio: "National Latte Art Champion 2022 & Q-Grader certified coffee connoisseur."
    }
  ]
};

export const testimonials = [
  {
    id: "t-1",
    name: "Dr. Ritu Khandelwal",
    role: "Regular Guest & Jaipur Resident",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    source: "Google Review",
    comment: "Hands down the best cafe in Jaipur! The Royal Saffron Cardamom Latte is absolute perfection and the truffle burrata pizza is world class. The ambience in C-Scheme is unmatched."
  },
  {
    id: "t-2",
    name: "Aarav & Meera Kapoor",
    role: "Couples & Coffee Lovers",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    source: "Zomato Gold",
    comment: "Aurora Brew Cafe is our weekend ritual. High-speed WiFi, amazing seating for remote work, and their Basque Burnt Cheesecake melts in your mouth! 10/10 rating."
  },
  {
    id: "t-3",
    name: "Julian Vance",
    role: "Travel Journalist & Digital Nomad",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    source: "TripAdvisor",
    comment: "As someone who has visited specialty cafes across Tokyo, Melbourne, and London, Aurora in Jaipur stands shoulder to shoulder with the best. Impressive single-origin cold brews."
  }
];

export const galleryImages = [
  { id: "g-1", category: "ambience", title: "Glasshouse Garden Dining", image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=800&auto=format&fit=crop" },
  { id: "g-2", category: "latte-art", title: "Swan Latte Art Pour", image: "https://images.unsplash.com/photo-1534778101976-62847782c213?q=80&w=800&auto=format&fit=crop" },
  { id: "g-3", category: "food", title: "Artisanal Sourdough & Brunch", image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=800&auto=format&fit=crop" },
  { id: "g-4", category: "night-view", title: "C-Scheme Courtyard Night Lighting", image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop" },
  { id: "g-5", category: "food", title: "Woodfired Truffle Burrata Pizza", image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=800&auto=format&fit=crop" },
  { id: "g-6", category: "ambience", title: "Cozy Leather Lounge Seating", image: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=80&w=800&auto=format&fit=crop" },
  { id: "g-7", category: "events", title: "Friday Live Acoustic Night", image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop" },
  { id: "g-8", category: "latte-art", title: "Iced Salted Caramel Pour", image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=800&auto=format&fit=crop" }
];

export const blogPosts = [
  {
    id: "b-1",
    title: "The Art of Slow Cold Brewing: 20 Hours to Perfection",
    category: "Coffee Guide",
    readTime: "5 min read",
    date: "July 24, 2026",
    author: "Ananya Sharma",
    image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?q=80&w=800&auto=format&fit=crop",
    excerpt: "Discover why low temperatures and long steeping times release silky sweet cocoa notes while reducing acidity by over 60%.",
    content: "Cold brew isn't just iced coffee — it's a science of slow extraction. By steeping coarsely ground single-origin Arabica beans in cold purified water for 20 hours, water dissolves flavor compounds gently without unlocking harsh tannins..."
  },
  {
    id: "b-2",
    title: "Why C-Scheme is Jaipur's Ultimate Coffee & Brunch Hub",
    category: "Jaipur Life",
    readTime: "4 min read",
    date: "July 15, 2026",
    author: "Vikramaditya Singh",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=800&auto=format&fit=crop",
    excerpt: "From leafy avenues to heritage architecture, explore how C-Scheme evolved into the heart of Jaipur's cafe culture.",
    content: "C-Scheme has always held a special place in Pink City history. With its green tree canopies, wide residential streets, and closeness to Statue Circle, it provides the perfect backdrop for luxury coffee houses..."
  },
  {
    id: "b-3",
    title: "Pairing Coffee with Food: Beyond Black & Croissants",
    category: "Culinary",
    readTime: "6 min read",
    date: "June 28, 2026",
    author: "Chef Vikramaditya",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=800&auto=format&fit=crop",
    excerpt: "How to match espresso body, acidity, and roast levels with savory woodfired sourdoughs and rich truffle cheeses.",
    content: "Just like wine pairing, coffee pairing relies on balance. High-acidity Ethiopian pours accentuate fresh avocado toast, while dark chocolate notes in South Indian roast elevate woodfired burrata pizza..."
  }
];

export const faqs = [
  {
    question: "Where is Aurora Brew Cafe located in Jaipur?",
    answer: "We are located at C-84, Janpath, C-Scheme, Jaipur, Rajasthan (near Statue Circle & Ashok Nagar). Valet parking is available right outside."
  },
  {
    question: "Do I need a reservation to visit?",
    answer: "Walk-ins are always welcome! However, for Friday to Sunday evenings and special group events, we strongly recommend booking a table online through our website to secure your preferred zone (Glasshouse or Garden Terrace)."
  },
  {
    question: "Is Aurora Brew Cafe laptop & digital nomad friendly?",
    answer: "Absolutely! We feature high-speed optical fiber WiFi (300 Mbps), dedicated ergonomic seating zones with high-density power outlets, and a relaxed ambient volume ideal for meetings and deep work."
  },
  {
    question: "Do you offer vegetarian, vegan, and gluten-free options?",
    answer: "Yes! 90% of our menu items are 100% Vegetarian. We also provide oat milk, almond milk, and soy milk alternatives for all coffee beverages, alongside gluten-free sourdough and dessert options."
  },
  {
    question: "Can I book Aurora Brew Cafe for private events or birthdays?",
    answer: "Yes, we host private birthday celebrations, corporate meetings, baby showers, and live acoustic music events. You can fill out our Event Enquiry form or call us directly."
  }
];

export const upcomingEvents = [
  {
    id: "e-1",
    title: "Friday Night Live Acoustic Jazz & Coffee",
    date: "Every Friday Evening",
    time: "7:30 PM - 10:30 PM",
    location: "Glasshouse Courtyard",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop",
    description: "Enjoy smooth live sax and guitar performances under warm hanging garden lights while savoring our signature coffee cocktails and sourdough pizzas."
  },
  {
    id: "e-2",
    title: "Masterclass: Espresso Extraction & Latte Art 101",
    date: "First Saturday of Month",
    time: "10:30 AM - 1:00 PM",
    location: "Roastery Corner",
    image: "https://images.unsplash.com/photo-1534778101976-62847782c213?q=80&w=800&auto=format&fit=crop",
    description: "Hands-on barista workshop guided by Champion Barista Ananya Sharma. Learn milk steaming, espresso dialing, and pour your own swan latte art."
  }
];
