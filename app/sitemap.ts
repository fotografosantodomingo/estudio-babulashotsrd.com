import type { MetadataRoute } from "next";
import { categories, pages, posts, tags } from "@/lib/estudioContent";
import { canonicalUrl } from "@/lib/seo";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [
    { url: canonicalUrl("/"), lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: canonicalUrl("/blog/"), lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: canonicalUrl("/servicios/"), lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: canonicalUrl("/ubicaciones/"), lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: canonicalUrl("/precios/"), lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: canonicalUrl("/faq/"), lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    // English canonical pages
    { url: canonicalUrl("/en/"), lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: canonicalUrl("/en/services/"), lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: canonicalUrl("/en/locations/"), lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: canonicalUrl("/en/prices/"), lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: canonicalUrl("/en/faq/"), lastModified: now, changeFrequency: "monthly", priority: 0.6 }
  ];
  const RESERVED = new Set(["servicios", "ubicaciones", "precios", "faq", "blog"]);
  for (const p of pages) {
    if (RESERVED.has(p.slug)) continue;
    entries.push({
      url: canonicalUrl(`/${p.slug}/`),
      lastModified: new Date(p.modified),
      changeFrequency: "monthly",
      priority: 0.7
    });
  }
  for (const p of posts) {
    entries.push({
      url: canonicalUrl(`/${p.slug}/`),
      lastModified: new Date(p.modified),
      changeFrequency: "weekly",
      priority: 0.7
    });
  }
  for (const c of categories) {
    entries.push({
      url: canonicalUrl(`/category/${c.slug}/`),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.5
    });
  }
  for (const t of tags) {
    entries.push({
      url: canonicalUrl(`/tag/${t.slug}/`),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.4
    });
  }
  return entries;
}
