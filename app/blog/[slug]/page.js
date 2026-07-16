import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "@/data/content";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }) {
  const post = blogPosts.find((item) => item.slug === params.slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt, openGraph: { images: [post.image] } };
}

export default function BlogPostPage({ params }) {
  const post = blogPosts.find((item) => item.slug === params.slug);
  if (!post) notFound();
  const schema = { "@context": "https://schema.org", "@type": "Article", headline: post.title, datePublished: post.date, description: post.excerpt };
  return (
    <article className="pt-28">
      <section className="section-pad">
        <div className="container-main max-w-4xl">
          <Link href="/blog" className="font-bold text-terracotta">Back to Blog</Link>
          <p className="eyebrow mt-8">{post.category}</p>
          <h1 className="display mt-3 text-5xl font-black text-espresso md:text-7xl">{post.title}</h1>
          <p className="mt-5 text-charcoal/65">{post.date} · {post.readTime}</p>
          <div className="image-card relative mt-8 aspect-[16/9]"><Image src={post.image} alt={post.title} fill className="object-cover" /></div>
          <div className="prose prose-lg mt-8 max-w-none text-charcoal">
            {post.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </div>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      </section>
    </article>
  );
}
