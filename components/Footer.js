import Link from "next/link";
import Image from "next/image";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { menuCategories } from "@/data/content";
import { nav, site } from "@/data/site";
import { mapsUrl } from "@/lib/utils";
import FormBlock from "@/components/FormBlock";

export default function Footer() {
  return (
    <footer className="bg-espresso py-14 text-cream">
      <div className="container-main grid gap-10 lg:grid-cols-[1.2fr_.8fr_.8fr_1fr]">
        <div>
          <div className="mb-4 flex items-center gap-3 text-xl font-extrabold">
            <span className="relative h-14 w-32 overflow-hidden rounded-xl bg-white">
              <Image src={site.logo} alt={`${site.name} logo`} fill className="object-contain p-2" sizes="128px" />
            </span>
            {site.name}
          </div>
          <p className="max-w-sm text-cream/75">
            Traditional Indian street food served in a modern Chaat Adda experience, from chaat shots and pani puri to sandwiches, pav bhaji and Chinese Adda favourites.
          </p>
          <Link className="btn-primary mt-6" href="/reservation">Reserve a Table</Link>
        </div>
        <div>
          <h2 className="mb-4 font-extrabold">Explore</h2>
          <div className="grid gap-2 text-cream/75">
            {nav.slice(0, 8).map((item) => <Link key={item.href} href={item.href} className="hover:text-white">{item.label}</Link>)}
          </div>
        </div>
        <div>
          <h2 className="mb-4 font-extrabold">Menu</h2>
          <div className="grid gap-2 text-cream/75">
            {menuCategories.slice(0, 7).map((item) => <Link key={item} href={`/menu?category=${encodeURIComponent(item)}`} className="hover:text-white">{item}</Link>)}
          </div>
        </div>
        <div>
          <h2 className="mb-4 font-extrabold">Contact</h2>
          <div className="space-y-3 text-cream/75">
            <p className="flex gap-2"><MapPin size={18} />{site.exactAddress}</p>
            <p className="flex gap-2"><Clock size={18} />Open daily, hours shown dynamically</p>
            <p className="flex gap-2"><Mail size={18} /><a href={`mailto:${site.email}`}>{site.email}</a></p>
            <p className="flex gap-2"><Phone size={18} /><span><a href={`tel:${site.phone}`}>{site.phone}</a>, <a href={`tel:${site.alternatePhone}`}>{site.alternatePhone}</a></span></p>
            <a href={mapsUrl(site.mapQuery)} className="btn-secondary mt-4 bg-cream text-espresso">Get Directions</a>
          </div>
        </div>
      </div>
      <div className="container-main mt-10 rounded-[1.5rem] border border-cream/15 bg-white/5 p-5">
        <div className="grid gap-5 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <div>
            <h2 className="display text-3xl font-black">Chaat Adda updates, offers, and new dishes.</h2>
            <p className="mt-2 text-cream/70">Get updates about new chaat flavours, offers and store news.</p>
          </div>
          <FormBlock type="newsletter" compact />
        </div>
      </div>
      <div className="container-main mt-10 flex flex-wrap justify-between gap-3 border-t border-cream/15 pt-6 text-sm text-cream/65">
        <p>© 2026 {site.name}. All rights reserved.</p>
        <div className="flex gap-4">
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/terms-and-conditions">Terms</Link>
          <Link href="/cancellation-policy">Cancellation</Link>
        </div>
      </div>
    </footer>
  );
}
