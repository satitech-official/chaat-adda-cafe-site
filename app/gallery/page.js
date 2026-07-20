import { PhotoGallery } from "@/components/GalleryClient";
import { SectionHeading } from "@/components/SectionShell";
import { imageBank } from "@/data/site";

export const metadata = {
  title: "Photo Gallery",
  description: "Explore Chaat Adda food, interiors, events and cafe moments through a premium photo gallery."
};

export default function GalleryPage() {
  return (
    <div className="pt-24">
      <section className="relative min-h-[52vh] overflow-hidden">
        <img src={imageBank.opening} alt="Chaat Adda gallery" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-espresso via-espresso/80 to-espresso/35" />
        <div className="container-main relative flex min-h-[52vh] items-end py-16 text-cream md:items-center">
          <div className="max-w-3xl">
            <span className="inline-flex rounded-full border border-cream/25 bg-cream/10 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] backdrop-blur-md">
              Food · Interiors · Celebrations
            </span>
            <h1 className="mt-5 text-4xl font-black leading-tight sm:text-5xl lg:text-7xl">Every frame has a chatpata story.</h1>
            <p className="mt-5 max-w-2xl text-base text-cream/80 sm:text-lg">
              Browse signature dishes, colourful interiors and memorable Chaat Adda moments. Tap any photograph for a full-screen preview.
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad bg-gradient-to-b from-cream to-white">
        <div className="container-main">
          <SectionHeading
            eyebrow="Photo Gallery"
            title="Taste the experience before you visit."
            text="Use the filters to explore food, interiors, events and behind-the-scenes moments."
            align="center"
          />
          <PhotoGallery />
        </div>
      </section>
    </div>
  );
}
