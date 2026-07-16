import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/SectionShell";
import { blogPosts } from "@/data/content";

export const metadata = { title: "Blog", description: "Cafe updates, food stories, menu launches, and event notes." };

export default function BlogPage() {
  return <div className="pt-28"><section className="section-pad"><div className="container-main"><SectionHeading eyebrow="Blog" title="Updates, food stories, and cafe notes." align="center" /><div className="grid gap-6 md:grid-cols-3">{blogPosts.map((post) => <article key={post.slug} className="overflow-hidden rounded-[1.4rem] bg-white shadow-glow"><div className="relative aspect-[4/3]"><Image src={post.image} alt={post.title} fill className="object-cover" /></div><div className="p-5"><p className="eyebrow mb-2">{post.category}</p><h2 className="text-xl font-black">{post.title}</h2><p className="mt-3 text-charcoal/70">{post.excerpt}</p><p className="mt-4 text-sm font-bold text-charcoal/55">{post.date} · {post.readTime}</p><Link href={`/blog/${post.slug}`} className="btn-primary mt-5">Read More</Link></div></article>)}</div></div></section></div>;
}
