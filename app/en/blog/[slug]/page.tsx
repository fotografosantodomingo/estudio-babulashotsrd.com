import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CrossSiteCta } from "@/components/CrossSiteCta";
import { SeoJsonLd } from "@/components/SeoJsonLd";
import { blogPostsWithEn, findBlogPostByEnSlug } from "@/lib/blogPosts";
import {
  aggregateRating,
  brandLogoUrl,
  canonicalUrl,
  email,
  geoCoordinates,
  isoAst,
  organizationSchema,
  phoneDisplay,
  phoneE164,
  postalAddress,
  siteUrl,
  whatsappUrl
} from "@/lib/seo";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return blogPostsWithEn.map((p) => ({ slug: p.en!.enSlug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = findBlogPostByEnSlug(slug);
  if (!post || !post.en) return {};
  const en = post.en;
  const enPath = `/en/blog/${en.enSlug}/`;
  const esPath = `/blog/${post.slug}/`;
  return {
    title: en.title,
    description: en.metaDescription,
    alternates: {
      canonical: canonicalUrl(enPath),
      languages: {
        "es-DO": canonicalUrl(esPath),
        es: canonicalUrl(esPath),
        en: canonicalUrl(enPath),
        "x-default": canonicalUrl(esPath)
      }
    },
    openGraph: {
      title: en.title,
      description: en.metaDescription,
      url: canonicalUrl(enPath),
      type: "article",
      locale: "en_US",
      siteName: "Babula Shots Estudio",
      publishedTime: post.datePublished,
      modifiedTime: post.dateModified,
      images: [
        {
          url: `${siteUrl}${post.hero.src}`,
          alt: en.ogImageAlt ?? post.hero.alt
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: en.title,
      description: en.metaDescription,
      images: [`${siteUrl}${post.hero.src}`]
    }
  };
}

// Inline markdown helper: **bold** and [text](path) -> real elements
function paragraphWithLinks(text: string): React.ReactNode[] {
  const parts: React.ReactNode[] = [];
  const regex = /(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let key = 0;
  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) parts.push(text.slice(lastIndex, match.index));
    const m = match[0];
    if (m.startsWith("**")) {
      parts.push(<strong key={`b-${key++}`}>{m.slice(2, -2)}</strong>);
    } else {
      const linkMatch = m.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
      if (linkMatch) {
        parts.push(
          <Link key={`l-${key++}`} href={linkMatch[2]} className="inline-link">
            {linkMatch[1]}
          </Link>
        );
      } else {
        parts.push(m);
      }
    }
    lastIndex = match.index + m.length;
  }
  if (lastIndex < text.length) parts.push(text.slice(lastIndex));
  return parts;
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const post = findBlogPostByEnSlug(slug);
  if (!post || !post.en) notFound();
  const en = post.en;

  const url = canonicalUrl(`/en/blog/${en.enSlug}/`);
  const esUrl = canonicalUrl(`/blog/${post.slug}/`);

  const datePublished = post.datePublished.includes("T") ? post.datePublished : isoAst(post.datePublished);
  const dateModified = post.dateModified.includes("T") ? post.dateModified : isoAst(post.dateModified);

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: canonicalUrl("/en/") },
      { "@type": "ListItem", position: 2, name: "Blog", item: canonicalUrl("/en/blog/") },
      { "@type": "ListItem", position: 3, name: en.h1, item: url }
    ]
  };

  const article = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: en.h1,
    description: en.metaDescription,
    mainEntityOfPage: url,
    datePublished,
    dateModified,
    image: `${siteUrl}${post.hero.src}`,
    author: { "@type": "Organization", name: "Babula Shots", "@id": `${siteUrl}#organization` },
    publisher: {
      "@type": "Organization",
      name: "Babula Shots",
      logo: { "@type": "ImageObject", url: brandLogoUrl }
    },
    inLanguage: "en"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: en.faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a }
    }))
  };

  // Brand LocalBusiness — uses LocalBusiness (not Photographer) so aggregateRating
  // is accepted by Google's Review Snippet validator. See memory/schema_standards.md rule 2c.
  const photographerSchema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteUrl}#localbusiness`,
    name: "Babula Shots Estudio",
    url: siteUrl,
    image: `${siteUrl}${post.hero.src}`,
    telephone: phoneE164,
    email,
    priceRange: "RD$5,960-RD$35,760",
    address: postalAddress,
    geo: geoCoordinates,
    areaServed: [
      { "@type": "City", name: "Santo Domingo" },
      { "@type": "City", name: "Punta Cana" },
      { "@type": "City", name: "La Romana" },
      { "@type": "Country", name: "Dominican Republic" }
    ],
    aggregateRating,
    sameAs: ["https://www.instagram.com/babulashotsrd/"]
  };

  const schemas: Record<string, unknown>[] = [
    organizationSchema as Record<string, unknown>,
    photographerSchema,
    breadcrumb as Record<string, unknown>,
    article as Record<string, unknown>,
    faqSchema as Record<string, unknown>
  ];

  return (
    <main>
      <SeoJsonLd data={schemas} />
      <article className="article">
        <nav className="breadcrumbs" aria-label="Breadcrumbs">
          <Link href="/en/">Home</Link>
          <span>/</span>
          <Link href="/en/blog/">Blog</Link>
          <span>/</span>
          <span>{en.h1}</span>
        </nav>

        <header className="article-header">
          <p className="eyebrow">{en.eyebrow}</p>
          <h1>{en.h1}</h1>
          <figure className="article-hero">
            <img
              src={post.hero.src}
              alt={en.ogImageAlt ?? post.hero.alt}
              width={post.hero.width}
              height={post.hero.height}
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
          </figure>
        </header>

        <div className="wp-content">
          {en.introParagraphs.map((p, i) => (
            <p key={`intro-${i}`}>{paragraphWithLinks(p)}</p>
          ))}

          {en.sections.map((sec) => (
            <section key={sec.heading}>
              <h2>{sec.heading}</h2>
              {sec.body.map((para, i) => (
                <p key={`${sec.heading}-${i}`}>{paragraphWithLinks(para)}</p>
              ))}
            </section>
          ))}
        </div>

        <aside className="article-cta" aria-label="Book your session">
          <div className="article-cta-text">
            <p className="section-tag">Ready to shoot?</p>
            <h2>Book your Colonial Zone session</h2>
            <p>
              Message us on WhatsApp with your tentative date. We respond with availability and a detailed quote within 24 hours. Book with a 50% deposit.
            </p>
          </div>
          <div className="article-cta-actions">
            <a
              className="button button-light"
              href={whatsappUrl("Hi, I read the Colonial Zone photo locations guide and want more information about a session.")}
              rel="noopener"
            >
              WhatsApp {phoneDisplay}
            </a>
            <a className="button button-outline" href={`tel:${phoneE164}`}>
              Call {phoneDisplay}
            </a>
            <Link className="button button-ghost" href="/en/prices/">
              See prices
            </Link>
          </div>
        </aside>

        <p className="article-meta">
          <span className="meta-label">Spanish version:</span>
          <Link href={esUrl}>Leer en español</Link>
        </p>

        <section className="faq-wrap">
          <p className="section-tag">Frequently asked questions</p>
          <h2>Colonial Zone photo sessions — FAQ</h2>
          {en.faq.map((f) => (
            <details key={f.q}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </section>
      </article>

      {en.related.length > 0 && (
        <section className="section alt-section" aria-labelledby="related-h2">
          <div className="wrap">
            <p className="section-tag">Keep reading</p>
            <h2 id="related-h2">Related pages</h2>
            <div className="card-grid">
              {en.related.map((r) => (
                <Link key={r.href} className="card" href={r.href}>
                  <span>Related</span>
                  <h3>{r.label}</h3>
                  <p>{r.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CrossSiteCta locale="en" />
    </main>
  );
}
