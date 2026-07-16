import { PhotoGallery } from "@/components/GalleryClient";
import { SectionHeading } from "@/components/SectionShell";

export const metadata = { title: "Photo Gallery", description: "Cafe photo gallery with filters and lightbox previews." };

export default function GalleryPage() {
  return <div className="pt-28"><section className="section-pad"><div className="container-main"><SectionHeading eyebrow="Photo Gallery" title="Browse the cafe in frames." align="center" /><PhotoGallery /></div></section></div>;
}
