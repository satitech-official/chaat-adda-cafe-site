"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import { site } from "@/data/site";

export function Loader() {
  const [ready, setReady] = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    const timer = setTimeout(() => setReady(true), reduced ? 350 : 1300);
    return () => clearTimeout(timer);
  }, [reduced]);

  return (
    <AnimatePresence>
      {!ready && (
        <motion.div
          className="fixed inset-0 z-[100] grid place-items-center bg-cream"
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: .55 }}
        >
          <div className="text-center">
            <motion.div
              className="relative mx-auto mb-5 h-24 w-44 rounded-3xl bg-white shadow-glow"
              animate={reduced ? {} : { rotate: [0, 4, -4, 0], scale: [1, 1.05, 1] }}
              transition={{ repeat: Infinity, duration: 1.8 }}
            >
              <Image src={site.logo} alt={`${site.name} logo`} fill className="object-contain p-4" sizes="176px" />
            </motion.div>
            <div className="eyebrow">Preparing Something Delicious</div>
            <div className="mt-4 h-2 w-64 overflow-hidden rounded-full bg-peach/50">
              <motion.div className="h-full bg-terracotta" initial={{ width: "8%" }} animate={{ width: "100%" }} transition={{ duration: reduced ? .2 : 1.15 }} />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hover, setHover] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const fine = window.matchMedia("(pointer: fine)").matches;
    if (!fine) return undefined;
    const move = (event) => setPos({ x: event.clientX, y: event.clientY });
    const enter = (event) => setHover(event.target.closest("[data-cursor]")?.dataset.cursor || "");
    window.addEventListener("mousemove", move);
    document.addEventListener("mouseover", enter);
    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", enter);
    };
  }, []);

  if (!mounted) return null;
  return (
    <div className="pointer-events-none fixed left-0 top-0 z-[99] hidden md:block" aria-hidden="true">
      <motion.div
        className="absolute grid h-12 w-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-terracotta/70 bg-cream/20 text-[10px] font-bold uppercase text-espresso backdrop-blur"
        animate={{ x: pos.x, y: pos.y, scale: hover ? 1.45 : 1 }}
        transition={{ type: "spring", damping: 24, stiffness: 240 }}
      >
        {hover}
      </motion.div>
      <motion.div className="absolute h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-terracotta" animate={{ x: pos.x, y: pos.y }} />
    </div>
  );
}
