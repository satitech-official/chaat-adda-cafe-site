import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/SectionShell";
import { menuItems } from "@/data/content";

export const metadata = { title: "Signature Dishes", description: "CHAAT ADDA signature dishes, chaat shots, pani puri, basket chaat and favourite menu highlights." };

export default function SignaturePage() {
  return (
    <div className="pt-28">
      <section className="section-pad">
        <div className="container-main">
          <SectionHeading eyebrow="Signature Dishes" title="The CHAAT ADDA favourites guests remember first." align="center" />
          <div className="grid gap-8">
            {menuItems.slice(0, 5).map((item, index) => (
              <article key={item.id} className="grid overflow-hidden rounded-[1.5rem] bg-white shadow-glow lg:grid-cols-2">
                <div className={`relative min-h-80 ${index % 2 ? "lg:order-2" : ""}`}><Image src={item.image} alt={item.name} fill className="object-cover" /></div>
                <div className="p-8">
                  <p className="eyebrow mb-3">{item.badges.join(" · ") || item.category}</p>
                  <h2 className="display text-4xl font-black text-espresso">{item.name}</h2>
                  <p className="mt-4 leading-8 text-charcoal/72">{item.description}</p>
                  <p className="mt-5 font-bold">Ingredient notes: fresh herbs, layered chutneys, warm textures and bold chatpata seasoning.</p>
                  <p className="mt-3 text-xl font-black text-terracotta">{item.price ? `Rs. ${item.price}` : "Ask at counter"}</p>
                  <Link href="/reservation" className="btn-primary mt-6">Reserve and Try</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
