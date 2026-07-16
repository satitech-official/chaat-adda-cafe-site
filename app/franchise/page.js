import Link from "next/link";
import { SectionHeading } from "@/components/SectionShell";

export const metadata = { title: "Franchise", description: "Franchise overview without unverified financial claims." };

export default function FranchisePage() {
  const strengths = ["Brand-ready cafe system", "Menu and training documentation", "Location evaluation workflow", "Operations and hygiene playbooks", "Marketing launch support", "Inquiry routing for verified follow-up"];
  return <div className="pt-28"><section className="section-pad"><div className="container-main grid gap-10 lg:grid-cols-[.9fr_1.1fr]"><div><SectionHeading eyebrow="Franchise" title="A business inquiry page without invented promises." text="Investment values, profitability, and guaranteed returns are intentionally omitted until verified by the business owner." /><Link href="/franchise-inquiry" className="btn-primary">Start Franchise Inquiry</Link></div><div className="grid gap-4 sm:grid-cols-2">{strengths.map((item) => <div key={item} className="rounded-3xl bg-white/85 p-5 font-black shadow-glow">{item}</div>)}</div></div></section></div>;
}
