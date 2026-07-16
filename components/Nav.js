"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, CalendarCheck } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { nav, site } from "@/data/site";
import { cn } from "@/lib/utils";

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const items = nav.filter((item) => item.label !== "Franchise" || site.franchiseEnabled);

  return (
    <header className={cn("fixed inset-x-0 top-0 z-40 transition-all", scrolled ? "py-3" : "py-5")}>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[120] focus:rounded-full focus:bg-saffron focus:px-4 focus:py-2">Skip to content</a>
      <nav className={cn("container-main flex items-center justify-between rounded-full px-4 py-3", scrolled ? "glass" : "bg-transparent text-cream")}>
        <Link href="/" className="flex items-center gap-3 font-extrabold" aria-label={`${site.name} home`}>
          <span className="relative h-12 w-28 overflow-hidden rounded-full bg-white px-2 ring-2 ring-saffron/50">
            <Image src={site.logo} alt={`${site.name} logo`} fill className="object-contain p-1" sizes="112px" priority />
          </span>
          <span className={cn("hidden sm:block", scrolled ? "text-espresso" : "text-cream")}>{site.shortName}</span>
        </Link>
        <div className="hidden items-center gap-1 lg:flex">
          {items.map((item) => (
            <Link key={item.href} href={item.href} className={cn("rounded-full px-3 py-2 text-sm font-bold transition", pathname === item.href ? "bg-terracotta text-white" : scrolled ? "hover:bg-white/70" : "hover:bg-white/15")}>
              {item.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <Link href="/reservation" className="btn-primary hidden sm:inline-flex" data-cursor="Book"><CalendarCheck size={18} />Book</Link>
          <button className={cn("grid h-11 w-11 place-items-center rounded-full lg:hidden", scrolled ? "bg-white/70" : "bg-white/15")} onClick={() => setOpen(true)} aria-label="Open menu">
            <Menu />
          </button>
        </div>
      </nav>
      {open && (
        <motion.div className="fixed inset-0 z-50 bg-espresso/70 p-4 backdrop-blur-lg lg:hidden" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <motion.div className="ml-auto flex min-h-full max-w-sm flex-col rounded-[1.5rem] bg-cream p-5 shadow-glow" initial={{ x: 80 }} animate={{ x: 0 }}>
            <button className="ml-auto grid h-11 w-11 place-items-center rounded-full bg-white" onClick={() => setOpen(false)} aria-label="Close menu"><X /></button>
            <div className="mt-6 grid gap-2">
              {items.map((item, index) => (
                <motion.div key={item.href} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * .04 }}>
                  <Link onClick={() => setOpen(false)} href={item.href} className="block rounded-2xl px-4 py-3 text-lg font-extrabold hover:bg-white">{item.label}</Link>
                </motion.div>
              ))}
            </div>
            <Link onClick={() => setOpen(false)} href="/reservation" className="btn-primary mt-auto">Book a Table</Link>
          </motion.div>
        </motion.div>
      )}
    </header>
  );
}
