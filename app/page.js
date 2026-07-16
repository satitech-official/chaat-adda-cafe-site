import Image from "next/image";
import Link from "next/link";
import { ArrowDown, CalendarCheck, MapPin, Star, Utensils } from "lucide-react";
import MenuExplorer from "@/components/MenuExplorer";
import FormBlock from "@/components/FormBlock";
import { Reveal, SectionHeading } from "@/components/SectionShell";
import { activeOffers, mapsUrl, todayHours } from "@/lib/utils";
import { imageBank, site } from "@/data/site";
import { aboutContent, faqs, menuItems, offers, stats, whyChoose } from "@/data/content";
import { PhotoGallery } from "@/components/GalleryClient";
import BusinessHoursCard from "@/components/BusinessHoursCard";
import { BestSellerSlider, PopularProductsSlider, ReviewSlider } from "@/components/Sliders";

export default function Home() {
  const hours = todayHours(site.hours, site.timezone);

  return (
    <>
      <section className="relative min-h-screen overflow-hidden bg-espresso text-cream">
        <Image src={imageBank.hero} alt="CHAAT ADDA grand opening storefront" fill priority className="object-cover opacity-72" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-r from-espresso via-espresso/70 to-espresso/10" />
        <div className="container-main relative z-10 flex min-h-screen items-center pt-28">
          <div className="max-w-3xl">
            <p className="eyebrow mb-4 text-saffron">{hours.openNow ? "Open Today" : "Currently Closed"} · {hours.label}</p>
            <h1 className="display text-5xl font-black md:text-7xl lg:text-8xl">{site.tagline}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-cream/82">
              A modern CHAAT ADDA experience for flavour shots, pani puri, basket chaat, pav bhaji, sandwiches, rolls, pasta, pizza and Chinese favourites.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/menu" className="btn-primary" data-cursor="Explore"><Utensils size={18} />Explore Menu</Link>
              <Link href="/reservation" className="btn-secondary" data-cursor="Book"><CalendarCheck size={18} />Book a Table</Link>
              <a href={mapsUrl(site.mapQuery)} className="btn-secondary" data-cursor="Open"><MapPin size={18} />Get Directions</a>
            </div>
            <div className="mt-8 flex flex-wrap gap-4 text-sm font-bold text-cream/85">
              <span className="rounded-full bg-white/15 px-4 py-2"><Star size={16} className="inline text-saffron" /> Customer satisfaction is our priority</span>
              <span className="rounded-full bg-white/15 px-4 py-2">{site.exactAddress}</span>
            </div>
          </div>
        </div>
        <a href="#welcome" className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 rounded-full bg-white/15 p-3" aria-label="Scroll to welcome"><ArrowDown /></a>
      </section>

      <section id="welcome" className="section-pad">
        <div className="container-main grid items-center gap-10 lg:grid-cols-[.95fr_1.05fr]">
          <Reveal>
            <SectionHeading eyebrow="Welcome" title="Traditional street food, served the modern way." text={aboutContent.short} />
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => <div key={stat.label} className="rounded-3xl bg-white/75 p-5"><p className="text-3xl font-black text-terracotta">{stat.value}{stat.value > 5 ? "+" : ""}</p><p className="font-bold text-charcoal/68">{stat.label}</p></div>)}
            </div>
            <Link href="/about" className="btn-primary mt-7">Discover Our Story</Link>
          </Reveal>
          <Reveal className="grid grid-cols-2 gap-4">
            {[imageBank.chaatShots, imageBank.paniPuri, imageBank.interior, imageBank.kulhad].map((src, index) => (
              <div key={`${src}-${index}`} className={`image-card relative aspect-[4/5] ${index % 2 ? "mt-10" : ""}`}>
                <Image src={src} alt="CHAAT ADDA food and store collage" fill className="object-cover" sizes="50vw" />
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-white/45">
        <div className="container-main">
          <SectionHeading eyebrow="Interactive Menu" title="Explore the complete CHAAT ADDA menu." text="Search and filter every category you provided, from Chaat Flavours Shots and Basket Chaat to Chinese Adda combos." align="center" />
          <MenuExplorer compact />
        </div>
      </section>

      <section className="section-pad">
        <div className="container-main">
          <SectionHeading eyebrow="Signature Dishes" title="CHAAT ADDA favourites with extra presence." />
          <div className="hide-scrollbar flex snap-x gap-6 overflow-x-auto pb-4">
            {menuItems.slice(0, 5).map((item) => (
              <article key={item.id} className="grid min-w-[82vw] snap-center overflow-hidden rounded-[1.5rem] bg-white shadow-glow md:min-w-[760px] md:grid-cols-2">
                <div className="relative min-h-80"><Image src={item.image} alt={item.name} fill className="object-cover" /></div>
                <div className="p-7">
                  <p className="eyebrow mb-3">{item.badges[0] || item.category}</p>
                  <h3 className="display text-4xl font-black text-espresso">{item.name}</h3>
                  <p className="mt-4 leading-7 text-charcoal/70">{item.description}</p>
                  <p className="mt-5 text-2xl font-black text-terracotta">{item.price ? `Rs. ${item.price}` : "Ask at counter"}</p>
                  <Link href="/reservation" className="btn-primary mt-6">Reserve and Try</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white/45">
        <div className="container-main">
          <SectionHeading eyebrow="Best Sellers" title="Popular CHAAT ADDA picks." text="Swipe through highlighted best sellers from the menu you supplied." align="center" />
          <BestSellerSlider />
        </div>
      </section>

      <section className="section-pad">
        <div className="container-main">
          <SectionHeading eyebrow="Popular Products" title="More favourites from the CHAAT ADDA counter." text="These popular picks use a different mix of your provided food and store photos, so the section feels fresh instead of repeated." align="center" />
          <PopularProductsSlider />
        </div>
      </section>

      <section className="section-pad bg-espresso text-cream">
        <div className="container-main">
          <SectionHeading eyebrow="Why Choose Us" title="Built around quality, value, and customer satisfaction." text="Chaat Adda focuses on interactive in-store experience, product excellence and street-food favourites served in a modern way." tone="light" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {whyChoose.map((item) => <div key={item} className="rounded-3xl border border-cream/15 bg-white/8 p-5 font-extrabold">{item}</div>)}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white/45">
        <div className="container-main grid items-center gap-10 lg:grid-cols-[1.1fr_.9fr]">
          <div>
            <SectionHeading eyebrow="CHAAT ADDA Experience" title="A family restaurant, hangout spot, snack stop and full-meal excuse." text={aboutContent.intro} />
            <div className="grid gap-4 sm:grid-cols-2">
              {["Family restaurant", "Hangout spot", "Snack stop", "Modern street food"].map((item) => <div key={item} className="rounded-3xl bg-white/80 p-5 font-black shadow-glow">{item}</div>)}
            </div>
          </div>
          <BusinessHoursCard />
        </div>
      </section>

      <section className="section-pad">
        <div className="container-main grid gap-10 lg:grid-cols-[.9fr_1.1fr]">
          <div>
            <SectionHeading eyebrow="Offers" title="Combos without fake pricing." text="Pricing can be added once verified outlet offer prices are supplied." />
            <Link href="/offers" className="btn-primary">View All Offers</Link>
          </div>
          <div className="grid gap-4">
            {activeOffers(offers).map((offer) => <div key={offer.title} className="rounded-3xl bg-white/80 p-5"><h3 className="text-xl font-black">{offer.title}</h3><p className="mt-2 text-charcoal/70">{offer.includes}</p><p className="mt-3 font-black text-terracotta">{offer.price ? `Rs. ${offer.price}` : "Ask at counter"}</p></div>)}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white/45">
        <div className="container-main">
          <SectionHeading eyebrow="Gallery" title="CHAAT ADDA food, store and launch moments." align="center" />
          <PhotoGallery />
        </div>
      </section>

      <section className="section-pad">
        <div className="container-main">
          <SectionHeading eyebrow="Reviews" title="A review system ready for verified testimonials." align="center" />
          <ReviewSlider />
        </div>
      </section>

      <section className="section-pad bg-espresso text-cream">
        <div className="container-main grid gap-10 lg:grid-cols-2">
          <SectionHeading eyebrow="Reservation" title="Request a table at CHAAT ADDA." text="Share your visit details and our team can manually confirm your table request for the Chaat Adda experience." tone="light" />
          <FormBlock type="reservation" />
        </div>
      </section>

      <section className="section-pad">
        <div className="container-main grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="FAQ" title="Answers before guests need to ask." />
            <div className="grid gap-3">{faqs.map(([q, a]) => <details key={q} className="rounded-2xl bg-white/80 p-5"><summary className="cursor-pointer font-black">{q}</summary><p className="mt-3 text-charcoal/70">{a}</p></details>)}</div>
          </div>
          <div>
            <SectionHeading eyebrow="Contact" title="Start a conversation." />
            <FormBlock type="contact" />
          </div>
        </div>
      </section>
    </>
  );
}
