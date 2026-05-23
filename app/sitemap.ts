import type { MetadataRoute } from "next";
import { categories, pages, posts, tags } from "@/lib/estudioContent";
import { blogPosts } from "@/lib/blogPosts";
import { EN_SERVICE_PAGES } from "@/lib/enServicePages";
import { canonicalUrl } from "@/lib/seo";
import { sesionPages, enSesionPages } from "@/lib/sesionContent";

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
    // Sesión de fotos topical authority cluster (P0 SEO) — ES + EN mirrors
    ...Object.values(sesionPages).map((p) => ({
      url: canonicalUrl(p.url),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: p.isMaster ? 1.0 : 0.85
    })),
    ...Object.values(enSesionPages).map((p) => ({
      url: canonicalUrl(p.url),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: p.isMaster ? 0.95 : 0.8
    })),
    // Native Next blog posts (high-priority informational content) — Spanish + English variants
    ...blogPosts.map((p) => ({
      url: canonicalUrl(`/blog/${p.slug}/`),
      lastModified: new Date(p.dateModified),
      changeFrequency: "monthly" as const,
      priority: 0.85
    })),
    ...blogPosts
      .filter((p) => p.en?.enSlug)
      .map((p) => ({
        url: canonicalUrl(`/en/blog/${p.en!.enSlug}/`),
        lastModified: new Date(p.dateModified),
        changeFrequency: "monthly" as const,
        priority: 0.85
      })),
    // English canonical pages
    { url: canonicalUrl("/en/"), lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: canonicalUrl("/en/services/"), lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: canonicalUrl("/en/locations/"), lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: canonicalUrl("/en/prices/"), lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: canonicalUrl("/en/faq/"), lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    // Hand-translated deep service pages (2026-05-22 — top Spanish-only by GSC impressions)
    { url: canonicalUrl("/en/corporate-photography-studio-dr/"), lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: canonicalUrl("/en/studio-photo-session-santo-domingo/"), lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    // Dynamic-route EN service pages from EN_SERVICE_PAGES map
    ...EN_SERVICE_PAGES.map((p) => ({
      url: canonicalUrl(p.enPath),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8
    }))
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
