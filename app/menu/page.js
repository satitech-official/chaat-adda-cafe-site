import MenuExplorer from "@/components/MenuExplorer";
import { SectionHeading } from "@/components/SectionShell";

export const metadata = { title: "Menu", description: "Explore cafe dishes with filters, search, prices, allergens, spice level, and dish details." };

export default function MenuPage({ searchParams }) {
  const category = searchParams?.category || "Best Sellers";
  return (
    <div className="pt-28">
      <section className="section-pad">
        <div className="container-main">
          <SectionHeading eyebrow="Complete Menu" title="Searchable, filterable, CMS-ready menu." text="Actions route guests toward reservation requests instead of fake ordering. Prices and dishes live in structured data." align="center" />
          <MenuExplorer initialCategory={category} />
        </div>
      </section>
    </div>
  );
}
