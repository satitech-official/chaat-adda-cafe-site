export const metadata = { title: "Privacy Policy" };

export default function PrivacyPage() {
  return <Policy title="Privacy Policy" paragraphs={["This website collects form information only to respond to cafe, reservation, newsletter, and franchise inquiries.", "Credentials, API keys, and mail service secrets must be configured on the server through environment variables before deployment.", "Verified business ownership should review this policy before launch."]} />;
}

function Policy({ title, paragraphs }) {
  return <div className="pt-28"><section className="section-pad"><div className="container-main max-w-3xl rounded-[1.5rem] bg-white/85 p-8 shadow-glow"><h1 className="display text-5xl font-black text-espresso">{title}</h1>{paragraphs.map((p) => <p key={p} className="mt-5 leading-8 text-charcoal/75">{p}</p>)}</div></section></div>;
}
