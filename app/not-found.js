import Link from "next/link";

export default function NotFound() {
  return <div className="grid min-h-screen place-items-center px-4 pt-24 text-center"><div><p className="eyebrow mb-3">404</p><h1 className="display text-6xl font-black text-espresso">This table is not set.</h1><p className="mx-auto mt-4 max-w-xl text-charcoal/70">The page you are looking for does not exist or has moved.</p><Link href="/" className="btn-primary mt-7">Return Home</Link></div></div>;
}
