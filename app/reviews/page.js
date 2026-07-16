import { SectionHeading } from "@/components/SectionShell";
import { ReviewSlider } from "@/components/Sliders";

export const metadata = { title: "Reviews", description: "Customer testimonials and review presentation." };

export default function ReviewsPage() {
  return <div className="pt-28"><section className="section-pad"><div className="container-main"><SectionHeading eyebrow="Reviews" title="Prepared for verified guest voices." align="center" /><ReviewSlider /></div></section></div>;
}
