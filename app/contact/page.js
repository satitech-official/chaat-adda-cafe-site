import FormBlock from "@/components/FormBlock";
import { site, imageBank } from "@/data/site";
import { mapsUrl, todayHours } from "@/lib/utils";
import BusinessHoursCard from "@/components/BusinessHoursCard";
import { Clock3, Mail, MapPin, MessageCircle, Navigation, Phone } from "lucide-react";

export const metadata = {
  title: "Contact",
  description: "Contact Chaat Adda in Sudama Nagar, Indore for directions, opening hours and enquiries."
};

const contactCards = [
  {
    icon: MapPin,
    label: "Visit us",
    value: site.exactAddress,
    href: mapsUrl(site.mapQuery)
  },
  {
    icon: Phone,
    label: "Call us",
    value: `${site.phone} · ${site.alternatePhone}`,
    href: `tel:${site.phone}`
  },
  {
    icon: Mail,
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Quick enquiry and directions",
    href: `https://wa.me/${site.whatsapp}`
  }
];

export default function ContactPage() {
  const hours = todayHours(site.hours, site.timezone);

  return (
    <div className="pt-24">
      <section className="relative min-h-[52vh] overflow-hidden">
        <img src={imageBank.storefront} alt="Chaat Adda storefront" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-espresso via-espresso/85 to-espresso/35" />
        <div className="container-main relative flex min-h-[52vh] items-end py-14 text-cream md:items-center">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-cream/25 bg-cream/10 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] backdrop-blur-md">
              <MapPin size={15} /> Sudama Nagar, Indore
            </span>
            <h1 className="mt-5 text-4xl font-black leading-tight sm:text-5xl lg:text-7xl">Come for the chaat. Stay for the vibe.</h1>
            <p className="mt-5 max-w-2xl text-base text-cream/80 sm:text-lg">
              Find directions, opening hours and every direct way to reach Chaat Adda. Send your enquiry through WhatsApp in a few seconds.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href={mapsUrl(site.mapQuery)} className="btn-primary inline-flex items-center gap-2">
                <Navigation size={18} /> Get directions
              </a>
              <a href={`https://wa.me/${site.whatsapp}`} className="inline-flex items-center gap-2 rounded-full border border-cream/30 bg-cream/10 px-6 py-3 font-black text-cream backdrop-blur-md transition hover:bg-cream hover:text-espresso">
                <MessageCircle size={18} /> WhatsApp us
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="relative -mt-1 bg-gradient-to-b from-cream to-white py-14 md:py-20">
        <div className="container-main">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {contactCards.map(({ icon: Icon, label, value, href }) => (
              <a key={label} href={href} className="group rounded-[1.5rem] border border-espresso/5 bg-white p-5 shadow-glow transition hover:-translate-y-1 hover:border-terracotta/30">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-terracotta/10 text-terracotta transition group-hover:bg-terracotta group-hover:text-white">
                  <Icon size={22} />
                </span>
                <p className="mt-4 text-xs font-black uppercase tracking-[0.18em] text-charcoal/45">{label}</p>
                <p className="mt-2 font-bold leading-relaxed text-espresso">{value}</p>
              </a>
            ))}
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="overflow-hidden rounded-[1.8rem] bg-espresso shadow-2xl">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-cream/10 p-6 text-cream">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-mustard">Find us easily</p>
                  <h2 className="mt-2 text-2xl font-black">Chaat Adda, Sudama Nagar</h2>
                </div>
                <span className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-black ${hours.openNow ? "bg-olive text-white" : "bg-cream/10 text-cream"}`}>
                  <Clock3 size={16} /> {hours.openNow ? "Open now" : "Closed now"}
                </span>
              </div>
              <iframe
                title="Google Map for Chaat Adda Sudama Nagar Indore"
                className="h-[420px] w-full border-0"
                src={`https://www.google.com/maps?q=${encodeURIComponent(site.mapQuery)}&output=embed`}
                loading="lazy"
              />
            </div>

            <div className="rounded-[1.8rem] border border-espresso/5 bg-white p-5 shadow-glow md:p-7">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-terracotta">Send an enquiry</p>
              <h2 className="mt-3 text-3xl font-black text-espresso">How can we help?</h2>
              <p className="mt-3 text-charcoal/65">Fill in the details below. A prepared WhatsApp message will open so you can contact the cafe directly.</p>
              <div className="mt-6">
                <FormBlock type="contact" />
              </div>
            </div>
          </div>

          <div className="mt-8 rounded-[1.8rem] bg-white p-5 shadow-glow md:p-7">
            <BusinessHoursCard />
          </div>
        </div>
      </section>
    </div>
  );
}
