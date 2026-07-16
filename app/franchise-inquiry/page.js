import FormBlock from "@/components/FormBlock";
import { SectionHeading } from "@/components/SectionShell";

export const metadata = { title: "Franchise Inquiry", description: "Submit a validated franchise inquiry request." };

export default function FranchiseInquiryPage() {
  return <div className="pt-28"><section className="section-pad"><div className="container-main grid gap-10 lg:grid-cols-[.85fr_1.15fr]"><SectionHeading eyebrow="Franchise Inquiry" title="Share your city, location, and experience." text="The form validates required fields and submits to a server API route for secure handling." /><FormBlock type="franchise" /></div></section></div>;
}
