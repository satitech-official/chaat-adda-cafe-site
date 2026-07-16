"use client";

import { ArrowUp, MessageCircle, Phone } from "lucide-react";
import { site } from "@/data/site";

export default function FloatingControls() {
  const whatsapp = site.whatsapp ? `https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Hello, I would like to know more about your menu and table reservation.")}` : null;
  return (
    <div className="fixed bottom-4 right-4 z-30 flex flex-col gap-3 pb-[env(safe-area-inset-bottom)]">
      {whatsapp && <a aria-label="Chat on WhatsApp" href={whatsapp} className="grid h-12 w-12 place-items-center rounded-full bg-olive text-white shadow-glow"><MessageCircle /></a>}
      {site.phone && <a aria-label="Call now" href={`tel:${site.phone}`} className="grid h-12 w-12 place-items-center rounded-full bg-saffron text-espresso shadow-glow md:hidden"><Phone /></a>}
      <button aria-label="Back to top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="grid h-12 w-12 place-items-center rounded-full bg-espresso text-cream shadow-glow"><ArrowUp /></button>
    </div>
  );
}
