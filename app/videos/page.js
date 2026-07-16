import { VideoGallery } from "@/components/GalleryClient";
import { SectionHeading } from "@/components/SectionShell";

export const metadata = { title: "Video Gallery", description: "Cafe video gallery with accessible modal video playback." };

export default function VideosPage() {
  return <div className="pt-28"><section className="section-pad"><div className="container-main"><SectionHeading eyebrow="Video Gallery" title="Motion, plating, and ambience." align="center" /><VideoGallery /></div></section></div>;
}
