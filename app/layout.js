import "./globals.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import FloatingControls from "@/components/FloatingControls";
import { CustomCursor, Loader } from "@/components/Providers";
import ScrollEnhancements from "@/components/ScrollEnhancements";
import { site } from "@/data/site";

export const metadata = {
  metadataBase: new URL("https://example.com"),
  title: {
    default: `${site.name} | Modern Indian Street Food in ${site.locationLabel}`,
    template: `%s | ${site.name}`
  },
  description: "CHAAT ADDA website with modern Indian street-food menu discovery, gallery, contact details, franchise inquiry and local SEO.",
  openGraph: {
    title: site.name,
    description: site.tagline,
    images: ["/og-image.jpg"]
  }
};

export default function RootLayout({ children }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: site.name,
    address: site.exactAddress,
    servesCuisine: ["Indian street food", "Chaat", "Snacks", "Quick service restaurant"],
    areaServed: site.locationLabel,
    openingHours: site.hours.map((h) => `${h.day.slice(0, 2)} ${h.open}-${h.close}`)
  };

  return (
    <html lang="en">
      <body>
        <Loader />
        <CustomCursor />
        <ScrollEnhancements />
        <Nav />
        <main id="main">{children}</main>
        <Footer />
        <FloatingControls />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      </body>
    </html>
  );
}
