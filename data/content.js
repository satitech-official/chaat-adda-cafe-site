import { imageBank } from "./site";

export const aboutContent = {
  title: "Chaat Adda",
  intro: "Chaat Adda is best described as indescribable. Sometimes it is a family restaurant, other times it is a place to hang out. Sometimes it is a place in between meals. It is a place to go when you want a snack, a place to go when you want to get stuffed, an excuse to get out of the house, and an excuse not to go back home. It is different things, to different people, at different times.",
  qsr: "Chaat Adda focuses on serving the growing demand for value added quality chaats and snacks/nashtas through our chain of stores across the country. We offer an interactive in-store experience to customers and commit operational and product excellence at every outlet.",
  satisfaction: "Our commitment is to deliver premium quality Chaat Adda products that meet our valued customers' expectations. Our operations underpin an ongoing program of product and service development that helps us anticipate future customer requirements. Come, enjoy the Chaat Adda experience.",
  short: "CHAAT ADDA is a unique concept where we serve traditional street food in a modernized way, with a wide range of Indian street food."
};

export const stats = [
  { label: "Menu categories", value: 30 },
  { label: "Street-food favourites", value: 120 },
  { label: "Contact numbers", value: 2 },
  { label: "Open weekly", value: 7 }
];

const categoryImage = {
  "Chaat Flavours Shots": imageBank.chaatShots,
  "Flavours Pani Puri": imageBank.paniPuri,
  "Kulhad Wali Chaat": imageBank.kulhad,
  "Dahi Chatake": imageBank.dahiPuri,
  "Pizza Sandwich": imageBank.sandwich,
  "Grill Sandwich": imageBank.sandwich,
  "Basket Chaat": imageBank.dahiPuri,
  "Chaat Bomb": imageBank.chaatShots,
  "Chaat Tower": imageBank.kulhad,
  "French Fries": imageBank.sandwich,
  "Pizza": imageBank.sandwich,
  "Chinese Adda": imageBank.sandwich
};

const menuImageCycle = [
  imageBank.chaatShots,
  imageBank.paniPuri,
  imageBank.kulhad,
  imageBank.dahiPuri,
  imageBank.sandwich,
  imageBank.counter,
  imageBank.interior,
  imageBank.storefront,
  imageBank.opening,
  imageBank.neon,
  imageBank.exterior,
  imageBank.entrance,
  imageBank.wallLogo,
  imageBank.balloons
];

const menuSource = {
  "Best Sellers": ["Dahi Basket Chaat", "Regular Chaat Bomb", "Masala Kulhad Chaat", "Chatpata Pudina Pani Puri", "Butter Pav Bhaji", "Chole Bhature", "White Pasta Alfredo", "Veg Pizza Sandwich"],
  "Chaat Flavours Shots": ["Black Current", "Paan Shot", "Strawberry Shot", "Mango Shot", "KesariYa Shot"],
  "Basket Chaat": ["Dahi Basket Chaat", "Cheese Corn Basket Chaat", "Spicy Basket Chaat", "Creamy Basket Chaat"],
  "Ragda Tikki Chaat": ["Ragada Tikki Chaat", "Ragada Spicy Tikki Chaat", "Ragada Paneer Tikki Chaat"],
  "Dahi Chatake": ["Dahi Puri", "Sev Puri", "Dahi Papdi Chaat", "Corn Masala Puri", "Cheese Masala Puri"],
  "Tikki Wali Chaat": ["Aloo Tikki Chaat", "Chole Tikki", "Paneer Chole Tikki"],
  "Bhel Adda": ["Dry Bhel", "Mumbaiya Bhel", "Schezwan Bhel", "Creamy Kurkure Bhel", "Masala Corn Bhel", "Spcl. Cheese Corn"],
  "Corn Chaat": ["Sweet Corn", "Masala Sweet Corn", "Mexican Salsa Corn", "Chatpata Cheesey Corn"],
  "Kulcha Spl": ["Chola Kulcha", "Amul Chola Kulcha"],
  "Chaat Mai Ghotala": ["Ghotala Chaat", "Spicy Ghotala Chaat", "Cheese Ghotala Chaat"],
  "Bhalla Vali Chaat": ["Classic Dahi Bhalla", "Bhalla Papdi Chaat", "Bhalla Paneer Papdi Chaat"],
  "Aloo Mai Chaat": ["Chatpata Aloo Chaat", "Spicy Aloo Chaat"],
  "Chaat Tower": ["Classic Tower", "RomioJuliet Tower", "Special Tower"],
  "Samosa Chaat": ["Samosa Pav", "Samosa Chaat"],
  "Kulhad Wali Chaat": ["Masala Kulhad Chaat", "Paneer Kulhad Chaat", "Cheese Kulhad Chaat"],
  "Chole Bhature": ["Chole Bhature", "Special Paneer CB"],
  "Pav Bhaji Spl": ["Butter Pav Bhaji", "Cheese Pav Bhaji", "Masala Pav Bhaji", "Special Pav Bhaji Blast"],
  "French Fries": ["Regular", "Peri-Peri Fries", "Cheese Fries", "Salsa Fries", "Cheese Salsa Fries"],
  "Pasta-e-maina": ["White Pasta Alfredo", "Rich Creamy Fusion Pasta", "Red Pasta Arrabiata", "Pink Pasta", "Fusion Pasta"],
  "Pizza": ["Veg Pizza Bite", "Mushroom Corn Pizza", "Indi Pizza", "Chilli Paneer Pizza", "Cheesy And Spicy Pizza"],
  "Pulao Spl": ["Veg Pulao", "Butter Pulao", "Cheese Pulao"],
  "Rolls Maina": ["Veg Roll", "Veg Cheese Roll", "Veg Masala Roll", "Schezwan Special Roll", "Noodles Roll", "Tandoori Paneer Roll"],
  "Chilli Potato": ["Spicy Chilly Potato", "Honey Chilly Potato", "Chilly Cheese Potato", "Schezwan Spicy CP"],
  "Maggi": ["Classic Maggi", "Veg Maggi", "Punjabi Maggi", "Cheese Spicy Maggi", "Cheese Corn Maggi"],
  "Vada Pav": ["Mumbai Vada Pav", "Schezwan Vada Pav", "Cheese Vada Pav"],
  "Pizza Sandwich": ["Veg Pizza Sandwich", "Masala Pizza Sandwich", "Paneer Pizza Masala", "Chilli Paneer Sandwich", "Cheese Chutney Pizza"],
  "Grill Sandwich": ["Masala Sandwich", "Veg Sandwich", "Cheese Sandwich", "Mexican Sandwich", "Spl. Tandoori Paneer Sandwich"],
  "Chaat Bomb": ["Regular Chaat Bomb", "Spicy Chaat Bomb", "Cheese Chaat Bomb"],
  "Flavours Pani Puri": ["Chatpata Pudina", "Hajma Hajam", "Hing", "Lehsun", "Khatta Mittha", "Khatta Tikkha", "Kaccha Mango", "Jaljira"],
  "Potato Tornado": ["Magic Masala Tornado", "Peri Peri Tornado", "Cheese Sprinkle Tornado", "Cream Onion Tornado", "Schezwan Tornado", "Garlic Tornado", "Mexican Tornado", "Pizza Tornado"],
  "Chinese Adda": ["Veg Noodles", "Hakka Noodles", "Manchurian Dry/Gravy", "Schezwan Noodles", "Garlic Tandoori Noodles", "Fried Rice", "Schezwan Rice", "Paneer Rice", "Chilly Paneer", "Paneer 65", "Chinese Bhel", "Veg Noodles + Manchurian Combo", "Chilly Paneer + Noodles Combo"]
};

export const menuCategories = Object.keys(menuSource);

export const menuItems = menuCategories.flatMap((category, categoryIndex) =>
  menuSource[category].map((name, index) => ({
    id: `${category}-${name}`.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""),
    name,
    category,
    price: null,
    image: category === "Best Sellers" || index < 2
      ? menuImageCycle[(categoryIndex * 3 + index) % menuImageCycle.length]
      : (categoryImage[category] || menuImageCycle[(categoryIndex + index) % menuImageCycle.length]),
    rating: category === "Best Sellers" ? 4.9 : 4.7,
    spice: /spicy|schezwan|chilly|tikkha|lehsun|masala/i.test(name) ? 3 : 1,
    time: category.includes("Shots") || category.includes("Pani Puri") ? "5 min" : "10-15 min",
    veg: true,
    badges: category === "Best Sellers" || index === 0 ? ["Bestseller"] : index === 1 ? ["Popular"] : [],
    description: `${name} from Chaat Adda's ${category} selection, prepared in a modern street-food style with bold chatpata flavours.`,
    allergens: "Please ask the counter team for allergen and ingredient details."
  }))
);

export const offers = [
  { title: "Family Chaat Adda Combo", includes: "Basket chaat, pani puri flavours, pav bhaji and cold shots", original: null, price: null, validUntil: "2026-12-31", terms: "Final combo pricing to be confirmed at the outlet." },
  { title: "Friends Hangout Combo", includes: "Chaat bomb, fries, sandwich and mojito-style flavour shots", original: null, price: null, validUntil: "2026-12-31", terms: "Subject to outlet availability." },
  { title: "Quick Snack Combo", includes: "Vada pav, samosa chaat and masala corn", original: null, price: null, validUntil: "2026-12-31", terms: "Dine-in and takeaway options depend on outlet operations." }
];

export const whyChoose = [
  "Traditional Street Food", "Modern Presentation", "Interactive In-Store Experience", "Quality Chaats",
  "Snack-Time Favourite", "Family Friendly", "Hangout Spot", "Competitive Pricing", "Operational Excellence", "Customer Satisfaction"
];

export const gallery = [
  { src: imageBank.chaatShots, category: "Food", title: "Chaat flavour shots" },
  { src: imageBank.paniPuri, category: "Food", title: "Flavoured pani puri cups" },
  { src: imageBank.kulhad, category: "Food", title: "Kulhad wali chaat" },
  { src: imageBank.dahiPuri, category: "Food", title: "Dahi puri and sev chaat" },
  { src: imageBank.sandwich, category: "Food", title: "Grilled sandwich plating" },
  { src: imageBank.interior, category: "Interiors", title: "Chaat Adda seating ambience" },
  { src: imageBank.counter, category: "Interiors", title: "Counter and service area" },
  { src: imageBank.storefront, category: "Interiors", title: "Modern Chaat Adda storefront" },
  { src: imageBank.opening, category: "Events", title: "Grand opening celebration" },
  { src: imageBank.neon, category: "Interiors", title: "I love Chaat Adda wall" },
  { src: imageBank.exterior, category: "Interiors", title: "Chaat Adda exterior" },
  { src: imageBank.entrance, category: "Events", title: "Balloon entrance launch decor" },
  { src: imageBank.wallLogo, category: "Behind the Scenes", title: "Brand wall installation" },
  { src: imageBank.balloons, category: "Events", title: "Yellow Chaat Adda entrance" }
];

export const videos = [
  { title: "Chaat Adda Experience", description: "Use this slot for a hosted or YouTube walkthrough of the store and food preparation.", poster: imageBank.interior, url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
  { title: "Menu Highlights", description: "Use this slot for a real menu video once available.", poster: imageBank.chaatShots, url: "https://www.youtube.com/embed/dQw4w9WgXcQ" }
];

export const testimonials = [
  { name: "Chaat Adda Guest", initials: "CA", rating: 5, category: "Family visit", date: "Sample until verified", text: "A labelled sample review showing how verified Chaat Adda customer feedback will appear on the website." },
  { name: "Street Food Lover", initials: "SF", rating: 5, category: "Snack break", date: "Sample until verified", text: "The review system is ready for genuine customer names, dates, ratings and review sources." },
  { name: "Hangout Group", initials: "HG", rating: 4, category: "Friends hangout", date: "Sample until verified", text: "Cards stay consistent and swipe smoothly once real testimonials are added." }
];

export const faqs = [
  ["What is Chaat Adda?", "Chaat Adda serves traditional Indian street food in a modernized way, with a wide range of chaats, snacks, sandwiches, pizza, Chinese items and more."],
  ["Where is Chaat Adda located?", "The provided address is Chaat Adda, 4-D, Sudama Nagar, Indore (M.P)."],
  ["How do I contact Chaat Adda?", "Call +91-8819990004 or +91-9893798231, or email chaatadda@gmail.com."],
  ["Are menu prices listed?", "The current menu is listed by category. Prices can be added as soon as verified outlet pricing is supplied."],
  ["Is franchise inquiry available?", "Yes. The franchise inquiry page is available and avoids unverified investment or return claims."]
];

export const blogPosts = [
  { slug: "traditional-chaat-modern-way", title: "Traditional Chaat, Served The Modern Way", category: "Food Stories", date: "2026-07-01", readTime: "4 min", image: imageBank.chaatShots, excerpt: "How Chaat Adda turns familiar street-food cravings into a modern in-store experience.", body: [aboutContent.short, aboutContent.qsr] },
  { slug: "what-makes-chaat-adda-different", title: "What Makes Chaat Adda Different", category: "Brand Updates", date: "2026-06-24", readTime: "3 min", image: imageBank.storefront, excerpt: "A family restaurant, hangout place, snack stop and full-meal excuse in one.", body: [aboutContent.intro, aboutContent.satisfaction] },
  { slug: "menu-highlights-chaat-adda", title: "Menu Highlights At Chaat Adda", category: "New Menu Launches", date: "2026-06-12", readTime: "5 min", image: imageBank.kulhad, excerpt: "From flavour shots and basket chaat to pav bhaji, pasta, pizza, rolls and Chinese Adda.", body: ["Chaat Adda's menu is designed for different cravings at different times.", "Guests can explore chaat, snacks, sandwiches, pizza, pasta, rolls, pani puri flavours and Chinese favourites."] }
];

export const story = [
  { year: "Concept", title: "Traditional street food, modernized", text: "CHAAT ADDA serves Indian street food in a modern format with a wide range of chaats and snacks." },
  { year: "QSR", title: "Operational and product excellence", text: "The brand focuses on quality products, interactive in-store experience and service development." },
  { year: "Goal", title: "Customer satisfaction", text: "The priority is to deliver premium quality products that meet customer expectations and requirements." }
];
