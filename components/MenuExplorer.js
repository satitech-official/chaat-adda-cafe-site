"use client";

import Image from "next/image";
import Link from "next/link";
import { Search, X, Flame, Leaf, Clock } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { menuCategories, menuItems } from "@/data/content";

export default function MenuExplorer({ compact = false, initialCategory = "Best Sellers" }) {
  const initial = menuCategories.includes(initialCategory) ? initialCategory : "Best Sellers";
  const [category, setCategory] = useState(initial);
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(null);
  const [sort, setSort] = useState("featured");

  const filtered = useMemo(() => {
    let items = menuItems.filter((item) => {
      const categoryMatch = category === "Best Sellers" ? item.badges.includes("Bestseller") : item.category === category;
      const textMatch = `${item.name} ${item.description}`.toLowerCase().includes(query.toLowerCase());
      return categoryMatch && textMatch;
    });
    if (sort === "price-low") items = [...items].sort((a, b) => (a.price ?? 99999) - (b.price ?? 99999));
    if (sort === "rating") items = [...items].sort((a, b) => b.rating - a.rating);
    return compact ? items.slice(0, 4) : items;
  }, [category, compact, query, sort]);

  return (
    <div>
      <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="hide-scrollbar flex gap-2 overflow-x-auto pb-2">
          {menuCategories.map((item) => (
            <button key={item} onClick={() => setCategory(item)} className={`shrink-0 rounded-full px-4 py-2 text-sm font-extrabold transition ${category === item ? "bg-espresso text-cream" : "bg-white/70 text-espresso hover:bg-peach/60"}`}>
              {item}
            </button>
          ))}
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <label className="flex min-w-0 items-center gap-2 rounded-full bg-white/80 px-4 py-2">
            <Search size={18} />
            <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search dishes" className="min-w-0 bg-transparent outline-none" />
          </label>
          <select value={sort} onChange={(event) => setSort(event.target.value)} className="rounded-full border border-espresso/10 bg-white/80 px-4 py-2 font-bold">
            <option value="featured">Featured</option>
            <option value="price-low">Price low</option>
            <option value="rating">Top rated</option>
          </select>
        </div>
      </div>
      {filtered.length === 0 ? (
        <div className="rounded-3xl bg-white/70 p-10 text-center">
          <p className="text-xl font-extrabold">No dishes found.</p>
          <button className="btn-primary mt-4" onClick={() => { setQuery(""); setCategory("Best Sellers"); }}>Clear filters</button>
        </div>
      ) : (
        <motion.div layout className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          <AnimatePresence>
            {filtered.map((item) => <FoodCard key={item.id} item={item} onSelect={() => setSelected(item)} />)}
          </AnimatePresence>
        </motion.div>
      )}
      {compact && <div className="mt-8 text-center"><Link href="/menu" className="btn-primary">Explore Full Menu</Link></div>}
      <AnimatePresence>{selected && <DishModal item={selected} onClose={() => setSelected(null)} />}</AnimatePresence>
    </div>
  );
}

function FoodCard({ item, onSelect }) {
  return (
    <motion.article layout initial={{ opacity: 0, scale: .96 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: .96 }} className="group overflow-hidden rounded-[1.4rem] bg-white shadow-glow" data-cursor="View">
      <button onClick={onSelect} className="block w-full text-left">
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image src={item.image} alt={item.name} fill className="object-cover transition duration-500 group-hover:scale-110" sizes="(max-width: 768px) 100vw, 25vw" />
          <div className="absolute left-3 top-3 flex flex-wrap gap-2">{item.badges.map((badge) => <span key={badge} className="rounded-full bg-saffron px-2 py-1 text-xs font-black text-espresso">{badge}</span>)}</div>
        </div>
        <div className="p-5">
          <div className="mb-2 flex items-center justify-between gap-2">
            <h3 className="text-lg font-black text-espresso">{item.name}</h3>
            <span className="font-black text-terracotta">{item.price ? `Rs. ${item.price}` : "Ask at counter"}</span>
          </div>
          <p className="line-clamp-2 text-sm leading-6 text-charcoal/68">{item.description}</p>
          <div className="mt-4 flex items-center justify-between text-sm font-bold text-charcoal/70">
            <span className="flex items-center gap-1 text-olive"><Leaf size={16} />Veg</span>
            <span className="flex items-center gap-1"><Clock size={16} />{item.time}</span>
            <span className="flex items-center gap-1 text-terracotta"><Flame size={16} />{item.spice}/3</span>
          </div>
        </div>
      </button>
    </motion.article>
  );
}

function DishModal({ item, onClose }) {
  return (
    <motion.div className="fixed inset-0 z-[80] grid place-items-center bg-espresso/70 p-4 backdrop-blur-md" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} role="dialog" aria-modal="true" aria-labelledby="dish-title">
      <motion.div className="max-h-[90vh] w-full max-w-3xl overflow-auto rounded-[1.5rem] bg-cream shadow-glow" initial={{ y: 35, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 35, opacity: 0 }}>
        <div className="relative aspect-[16/9]">
          <Image src={item.image} alt={item.name} fill className="object-cover" sizes="90vw" />
          <button className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-white/85" onClick={onClose} aria-label="Close dish details"><X /></button>
        </div>
        <div className="p-6 md:p-8">
          <p className="eyebrow mb-2">{item.category}</p>
          <h2 id="dish-title" className="display text-4xl font-black text-espresso">{item.name}</h2>
          <p className="mt-4 text-lg leading-8 text-charcoal/75">{item.description}</p>
          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            <Info label="Price" value={item.price ? `Rs. ${item.price}` : "Ask at counter"} />
            <Info label="Prep time" value={item.time} />
            <Info label="Rating" value={`${item.rating}/5`} />
          </div>
          <p className="mt-5 rounded-2xl bg-white/70 p-4 text-sm text-charcoal/70">Dietary note: {item.allergens}</p>
          <Link href="/reservation" className="btn-primary mt-6">Reserve and Try</Link>
        </div>
      </motion.div>
    </motion.div>
  );
}

function Info({ label, value }) {
  return <div className="rounded-2xl bg-white/75 p-4"><p className="text-xs font-black uppercase text-terracotta">{label}</p><p className="text-lg font-black">{value}</p></div>;
}
