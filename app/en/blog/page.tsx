import type { Metadata } from "next";
import Link from "next/link";
import { CrossSiteCta } from "@/components/CrossSiteCta";
import { SeoJsonLd } from "@/components/SeoJsonLd";
import { blogPostsWithEn } from "@/lib/blogPosts";
import { canonicalUrl, organizationSchema, siteUrl } from "@/lib/seo";

const enPath = "/en/blog/";
const esPath = "/blog/";
const title = "Blog | Babula Shots Estudio";
const description =
  "Articles, techniques and guides on studio photography, portraits and production in Santo Domingo.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: canonicalUrl(enPath),
    languages: {
      "es-DO": canonicalUrl(esPath),
      en: canonicalUrl(enPath),
      "x-default": canonicalUrl(esPath)
    }
  },
  openGraph: {
    title,
    description,
    url: canonicalUrl(enPath),
    type: "website",
    locale: "en_US",
    siteName: "Babula Shots Estudio",
    images: [
      {
        url: "/wp-content/uploads/2024/06/social-card-1200x630.webp",
        width: 1200,
        height: 630,
        alt: "Babula Shots Estudio"
      }
    ]
  },
  twitter: { card: "summary_large_image", title, description }
};

export default function EnBlogIndex() {
  const schema = [
    organizationSchema,
    {
      "@context": "https://schema.org",
      "@type": "Blog",
      name: "Babula Shots Estudio Blog",
      url: canonicalUrl(enPath),
      blogPost: blogPostsWithEn.map((p) => ({
        "@type": "BlogPosting",
        headline: p.en!.h1,
        url: canonicalUrl(`/en/blog/${p.en!.enSlug}/`),
        datePublished: p.datePublished,
        dateModified: p.dateModified
      }))
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: canonicalUrl("/en/") },
        { "@type": "ListItem", position: 2, name: "Blog", item: canonicalUrl(enPath) }
      ]
    }
  ];
  return (
    <main>
      <SeoJsonLd data={schema} />
      <section className="plain-hero">
        <p className="eyebrow">Blog</p>
        <h1>Studio articles</h1>
        <p>Techniques, guides and case studies on professional photography, portraits and production in Santo Domingo.</p>
      </section>
      <section className="section">
        <div className="wrap">
          <h2 className="section-heading-h2">Latest articles</h2>
          <div className="card-grid">
            {blogPostsWithEn.map((p) => (
              <Link key={p.en!.enSlug} className="card" href={`/en/blog/${p.en!.enSlug}/`}>
                <img src={p.hero.src} alt={p.en!.ogImageAlt ?? p.hero.alt} loading="lazy" decoding="async" />
                <span>{p.en!.eyebrow}</span>
                <h3>{p.en!.h1}</h3>
                <p>{p.en!.metaDescription}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CrossSiteCta locale="en" />
    </main>
  );
}
