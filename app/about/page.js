import Image from "next/image";
import { SectionHeading } from "@/components/SectionShell";
import { imageBank } from "@/data/site";
import { aboutContent, story } from "@/data/content";

export const metadata = { title: "About", description: "About CHAAT ADDA, its QSR concept, street-food philosophy and customer satisfaction focus." };

export default function AboutPage() {
  return (
    <div className="pt-28">
      <section className="section-pad">
        <div className="container-main grid items-center gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="About Us" title={aboutContent.title} text={aboutContent.intro} />
            <div className="grid gap-4 sm:grid-cols-2">
              {["CHAAT ADDA QSR", "Customer satisfaction", "Interactive in-store experience", "Product excellence"].map((item) => <div key={item} className="rounded-3xl bg-white/80 p-5 font-black shadow-glow">{item}</div>)}
            </div>
            <div className="mt-6 grid gap-4">
              <p className="rounded-3xl bg-white/80 p-5 leading-8 text-charcoal/75 shadow-glow">{aboutContent.qsr}</p>
              <p className="rounded-3xl bg-white/80 p-5 leading-8 text-charcoal/75 shadow-glow">{aboutContent.satisfaction}</p>
            </div>
          </div>
          <div className="image-card relative aspect-[4/5]"><Image src={imageBank.interior} alt="CHAAT ADDA seating ambience" fill className="object-cover" /></div>
        </div>
      </section>
      <section className="section-pad bg-white/45">
        <div className="container-main">
          <SectionHeading eyebrow="Our Story" title="Traditional street food in a modernized way." align="center" />
          <div className="mx-auto grid max-w-4xl gap-5">
            {story.map((item) => <article key={item.title} className="grid gap-4 rounded-[1.4rem] bg-white/80 p-6 shadow-glow md:grid-cols-[120px_1fr]"><p className="text-3xl font-black text-terracotta">{item.year}</p><div><h2 className="text-xl font-black">{item.title}</h2><p className="mt-2 text-charcoal/70">{item.text}</p></div></article>)}
          </div>
        </div>
      </section>
    </div>
  );
}
