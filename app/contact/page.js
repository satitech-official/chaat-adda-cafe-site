import FormBlock from "@/components/FormBlock";
import { SectionHeading } from "@/components/SectionShell";
import { site } from "@/data/site";
import { mapsUrl, todayHours } from "@/lib/utils";
import BusinessHoursCard from "@/components/BusinessHoursCard";

export const metadata = { title: "Contact", description: "CHAAT ADDA address, directions, business hours, phone, email, map and contact form." };

export default function ContactPage() {
  const hours = todayHours(site.hours, site.timezone);
  return (
    <div className="pt-28">
      <section className="section-pad">
        <div className="container-main grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Contact" title="Find CHAAT ADDA in Sudama Nagar, Indore." text="Use the supplied address, phone numbers and email to contact Chaat Adda directly." />
            <div className="grid gap-4 rounded-[1.4rem] bg-white/85 p-6 shadow-glow">
              <p><strong>Location:</strong> {site.exactAddress}</p>
              <p><strong>Status:</strong> {hours.openNow ? "Open Now" : "Closed Now"} · {hours.label}</p>
              <p><strong>Phone:</strong> <a href={`tel:${site.phone}`}>{site.phone}</a>, <a href={`tel:${site.alternatePhone}`}>{site.alternatePhone}</a></p>
              <p><strong>Email:</strong> <a href={`mailto:${site.email}`}>{site.email}</a></p>
              <a href={mapsUrl(site.mapQuery)} className="btn-primary">Get Directions</a>
              <iframe title="Google Map for Chaat Adda Sudama Nagar Indore" className="aspect-video w-full rounded-3xl border-0" src={`https://www.google.com/maps?q=${encodeURIComponent(site.mapQuery)}&output=embed`} loading="lazy" />
            </div>
            <div className="mt-6"><BusinessHoursCard /></div>
          </div>
          <FormBlock type="contact" />
        </div>
      </section>
    </div>
  );
}
