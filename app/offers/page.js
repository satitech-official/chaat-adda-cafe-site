import Link from "next/link";
import { SectionHeading } from "@/components/SectionShell";
import { offers } from "@/data/content";
import { activeOffers } from "@/lib/utils";

export const metadata = { title: "Offers", description: "CHAAT ADDA combos and offer cards with verified pricing placeholders." };

export default function OffersPage() {
  return (
    <div className="pt-28">
      <section className="section-pad">
        <div className="container-main">
          <SectionHeading eyebrow="Special Offers" title="CHAAT ADDA combos without fake pricing." align="center" />
          <div className="grid gap-5 md:grid-cols-3">
            {activeOffers(offers).map((offer) => <article key={offer.title} className="rounded-[1.4rem] bg-white/85 p-6 shadow-glow"><p className="eyebrow mb-3">{offer.expired ? "Unavailable" : `Valid until ${offer.validUntil}`}</p><h2 className="text-2xl font-black">{offer.title}</h2><p className="mt-3 text-charcoal/70">{offer.includes}</p><p className="mt-4 text-3xl font-black text-terracotta">{offer.price ? `Rs. ${offer.price}` : "Ask at counter"}</p><p className="mt-4 text-sm">{offer.terms}</p><Link href="/reservation" className="btn-primary mt-5">Reserve This Combo</Link></article>)}
          </div>
        </div>
      </section>
    </div>
  );
}
