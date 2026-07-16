"use client";

import Image from "next/image";
import { X, Play } from "lucide-react";
import { useState } from "react";
import { gallery, videos } from "@/data/content";

export function PhotoGallery() {
  const [category, setCategory] = useState("All");
  const [active, setActive] = useState(null);
  const categories = ["All", ...new Set(gallery.map((item) => item.category))];
  const items = category === "All" ? gallery : gallery.filter((item) => item.category === category);
  return (
    <>
      <div className="mb-7 flex flex-wrap gap-2">{categories.map((item) => <button key={item} onClick={() => setCategory(item)} className={`rounded-full px-4 py-2 font-bold ${category === item ? "bg-espresso text-cream" : "bg-white/80"}`}>{item}</button>)}</div>
      <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
        {items.map((item) => (
          <button key={item.title} onClick={() => setActive(item)} className="mb-5 block w-full overflow-hidden rounded-[1.3rem] bg-white text-left shadow-glow" data-cursor="Open">
            <Image src={item.src} alt={item.title} width={900} height={700} className="h-auto w-full object-cover transition hover:scale-105" />
            <span className="block p-4 font-bold">{item.title}</span>
          </button>
        ))}
      </div>
      {active && <div className="fixed inset-0 z-[80] grid place-items-center bg-espresso/80 p-4 backdrop-blur-md" role="dialog" aria-modal="true">
        <div className="relative w-full max-w-5xl overflow-hidden rounded-[1.5rem] bg-cream">
          <button className="absolute right-4 top-4 z-10 grid h-11 w-11 place-items-center rounded-full bg-white/90" onClick={() => setActive(null)} aria-label="Close preview"><X /></button>
          <Image src={active.src} alt={active.title} width={1500} height={950} className="max-h-[78vh] w-full object-cover" />
          <p className="p-5 text-lg font-bold">{active.title}</p>
        </div>
      </div>}
    </>
  );
}

export function VideoGallery() {
  const [active, setActive] = useState(null);
  return (
    <>
      <div className="grid gap-6 md:grid-cols-2">
        {videos.map((video) => (
          <button key={video.title} onClick={() => setActive(video)} className="overflow-hidden rounded-[1.4rem] bg-white text-left shadow-glow" data-cursor="Play">
            <div className="relative aspect-video">
              <Image src={video.poster} alt={video.title} fill className="object-cover" sizes="50vw" />
              <span className="absolute inset-0 grid place-items-center bg-espresso/20 text-cream"><span className="grid h-16 w-16 place-items-center rounded-full bg-terracotta"><Play fill="currentColor" /></span></span>
            </div>
            <div className="p-5"><h2 className="text-xl font-black">{video.title}</h2><p className="mt-2 text-charcoal/70">{video.description}</p></div>
          </button>
        ))}
      </div>
      {active && <div className="fixed inset-0 z-[80] grid place-items-center bg-espresso/80 p-4 backdrop-blur-md" role="dialog" aria-modal="true">
        <div className="w-full max-w-4xl overflow-hidden rounded-[1.5rem] bg-cream">
          <button className="ml-auto grid h-12 w-12 place-items-center" onClick={() => setActive(null)} aria-label="Close video"><X /></button>
          <iframe title={active.title} src={active.url} className="aspect-video w-full" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
        </div>
      </div>}
    </>
  );
}
