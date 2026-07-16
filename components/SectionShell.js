"use client";

import { motion } from "framer-motion";

export function SectionHeading({ eyebrow, title, text, align = "left", tone = "dark" }) {
  const light = tone === "light";
  return (
    <div className={`gsap-reveal ${align === "center" ? "mx-auto mb-10 max-w-3xl text-center" : "mb-10 max-w-3xl"}`}>
      {eyebrow && <p className={`eyebrow mb-3 ${light ? "text-saffron" : ""}`}>{eyebrow}</p>}
      <h2 className={`display text-4xl font-black md:text-6xl ${light ? "text-cream" : "text-espresso"}`}>{title}</h2>
      {text && <p className={`mt-5 text-lg leading-8 ${light ? "text-cream/78" : "text-charcoal/72"}`}>{text}</p>}
    </div>
  );
}

export function Reveal({ children, className = "" }) {
  return (
    <motion.div className={className} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: .55 }}>
      {children}
    </motion.div>
  );
}
