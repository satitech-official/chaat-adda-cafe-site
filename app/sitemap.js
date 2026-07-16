import { blogPosts } from "@/data/content";

export default function sitemap() {
  const base = "https://example.com";
  const routes = ["", "/about", "/menu", "/signature-dishes", "/offers", "/gallery", "/videos", "/reviews", "/reservation", "/blog", "/franchise", "/franchise-inquiry", "/contact", "/privacy-policy", "/terms-and-conditions", "/cancellation-policy"];
  return [
    ...routes.map((route) => ({ url: `${base}${route}`, lastModified: new Date() })),
    ...blogPosts.map((post) => ({ url: `${base}/blog/${post.slug}`, lastModified: new Date(post.date) }))
  ];
}
