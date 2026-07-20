"use client";

import { X, Play, Maximize2 } from "lucide-react";
import { useState } from "react";
import { gallery, videos } from "@/data/content";

export function PhotoGallery() {
  const [category, setCategory] = useState("All");
  const [active, setActive] = useState(null);
  const categories = ["All", ...new Set(gallery.map((item) => item.category))];
  const items = category === "All" ? gallery : gallery.filter((item) => item.category === category);

  return (
    <>
      <div className="mb-8 flex flex-wrap justify-center gap-2">
        {categories.map((item) => (
          <button
            type="button"
            key={item}
            onClick={() => setCategory(item)}
            className={`rounded-full border px-5 py-2.5 text-sm font-black transition ${
              category === item
                ? "border-espresso bg-espresso text-cream shadow-lg"
                : "border-espresso/10 bg-white/80 text-espresso hover:border-terracotta hover:text-terracotta"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, index) => (
          <button
            type="button"
            key={item.title}
            onClick={() => setActive(item)}
            className={`group relative overflow-hidden rounded-[1.6rem] bg-espresso text-left shadow-glow ${
              index % 5 === 0 ? "sm:row-span-2" : ""
            }`}
            data-cursor="Open"
          >
            <div className={index % 5 === 0 ? "aspect-[4/5] sm:h-full" : "aspect-[4/3]"}>
              <img
                src={item.src}
                alt={item.title}
                loading="lazy"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 text-cream">
              <div>
                <span className="mb-2 inline-flex rounded-full bg-cream/15 px-3 py-1 text-xs font-bold backdrop-blur-md">
                  {item.category}
                </span>
                <h2 className="text-lg font-black leading-tight">{item.title}</h2>
              </div>
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-cream text-espresso transition group-hover:bg-terracotta group-hover:text-white">
                <Maximize2 size={18} />
              </span>
            </div>
          </button>
        ))}
      </div>

      {active && (
        <div
          className="fixed inset-0 z-[80] grid place-items-center bg-espresso/90 p-4 backdrop-blur-xl"
          role="dialog"
          aria-modal="true"
          onClick={() => setActive(null)}
        >
          <div
            className="relative w-full max-w-5xl overflow-hidden rounded-[1.8rem] bg-cream shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="absolute right-4 top-4 z-10 grid h-11 w-11 place-items-center rounded-full bg-white/90 text-espresso shadow-lg"
              onClick={() => setActive(null)}
              aria-label="Close preview"
            >
              <X />
            </button>
            <img src={active.src} alt={active.title} className="max-h-[78vh] w-full object-contain bg-espresso" />
            <div className="flex items-center justify-between gap-4 p-5">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.2em] text-terracotta">{active.category}</p>
                <p className="mt-1 text-xl font-black text-espresso">{active.title}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export function VideoGallery() {
  const [active, setActive] = useState(null);
  return (
    <>
      <div className="grid gap-6 md:grid-cols-2">
        {videos.map((video) => (
          <button
            type="button"
            key={video.title}
            onClick={() => setActive(video)}
            className="overflow-hidden rounded-[1.4rem] bg-white text-left shadow-glow"
            data-cursor="Play"
          >
            <div className="relative aspect-video">
              <img src={video.poster} alt={video.title} loading="lazy" className="h-full w-full object-cover" />
              <span className="absolute inset-0 grid place-items-center bg-espresso/20 text-cream">
                <span className="grid h-16 w-16 place-items-center rounded-full bg-terracotta">
                  <Play fill="currentColor" />
                </span>
              </span>
            </div>
            <div className="p-5">
              <h2 className="text-xl font-black">{video.title}</h2>
              <p className="mt-2 text-charcoal/70">{video.description}</p>
            </div>
          </button>
        ))}
      </div>
      {active && (
        <div className="fixed inset-0 z-[80] grid place-items-center bg-espresso/80 p-4 backdrop-blur-md" role="dialog" aria-modal="true">
          <div className="w-full max-w-4xl overflow-hidden rounded-[1.5rem] bg-cream">
            <button type="button" className="ml-auto grid h-12 w-12 place-items-center" onClick={() => setActive(null)} aria-label="Close video">
              <X />
            </button>
            <iframe title={active.title} src={active.url} className="aspect-video w-full" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
          </div>
        </div>
      )}
    </>
  );
}
