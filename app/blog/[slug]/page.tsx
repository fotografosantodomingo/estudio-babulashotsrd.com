import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CrossSiteCta } from "@/components/CrossSiteCta";
import { SeoJsonLd } from "@/components/SeoJsonLd";
import { blogPosts, findBlogPost } from "@/lib/blogPosts";
import {
  canonicalUrl,
  organizationSchema,
  phoneDisplay,
  phoneE164,
  email,
  siteUrl,
  whatsappUrl
} from "@/lib/seo";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = findBlogPost(slug);
  if (!post) return {};
  const path = `/blog/${slug}/`;
  return {
    title: post.title,
    description: post.metaDescription,
    alternates: {
      canonical: canonicalUrl(path),
      languages: { "es-DO": canonicalUrl(path), "x-default": canonicalUrl(path) }
    },
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      url: canonicalUrl(path),
      type: "article",
      locale: "es_DO",
      siteName: "Babula Shots Estudio",
      publishedTime: post.datePublished,
      modifiedTime: post.dateModified,
      images: [
        {
          url: `${siteUrl}${post.hero.src}`,
          alt: post.ogImageAlt ?? post.hero.alt
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.metaDescription,
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
  const post = findBlogPost(slug);
  if (!post) notFound();

  const url = canonicalUrl(`/blog/${slug}/`);

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: canonicalUrl("/") },
      { "@type": "ListItem", position: 2, name: "Blog", item: canonicalUrl("/blog/") },
      { "@type": "ListItem", position: 3, name: post.h1, item: url }
    ]
  };

  const article = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.h1,
    description: post.metaDescription,
    mainEntityOfPage: url,
    datePublished: post.datePublished,
    dateModified: post.dateModified,
    image: `${siteUrl}${post.hero.src}`,
    author: { "@type": "Organization", name: "Babula Shots", url: siteUrl },
    publisher: {
      "@type": "Organization",
      name: "Babula Shots",
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/wp-content/uploads/2024/06/Babula-Shots-Logo.webp`
      }
    },
    inLanguage: "es-DO"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: post.faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a }
    }))
  };

  // Brand LocalBusiness/Photographer entity — same shape as service pages
  const photographerSchema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "Photographer"],
    "@id": `${siteUrl}#localbusiness`,
    name: "Babula Shots Estudio",
    url: siteUrl,
    image: `${siteUrl}${post.hero.src}`,
    telephone: phoneE164,
    email,
    priceRange: "RD$5,960-RD$35,760",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Santo Domingo",
      addressRegion: "Distrito Nacional",
      addressCountry: "DO"
    },
    // TODO: replace with the studio's actual coordinates.
    geo: {
      "@type": "GeoCoordinates",
      latitude: 18.4861,
      longitude: -69.9312
    },
    areaServed: [
      { "@type": "City", name: "Santo Domingo" },
      { "@type": "City", name: "Punta Cana" },
      { "@type": "City", name: "La Romana" },
      { "@type": "Country", name: "Dominican Republic" }
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      bestRating: "5",
      worstRating: "1",
      ratingCount: "23",
      reviewCount: "23"
    },
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
          <Link href="/">Inicio</Link>
          <span>/</span>
          <Link href="/blog/">Blog</Link>
          <span>/</span>
          <span>{post.h1}</span>
        </nav>

        <header className="article-header">
          <p className="eyebrow">{post.eyebrow}</p>
          <h1>{post.h1}</h1>
          <figure className="article-hero">
            <img
              src={post.hero.src}
              alt={post.hero.alt}
              width={post.hero.width}
              height={post.hero.height}
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
          </figure>
        </header>

        <div className="wp-content">
          {post.introParagraphs.map((p, i) => (
            <p key={`intro-${i}`}>{paragraphWithLinks(p)}</p>
          ))}

          {post.sections.map((sec) => (
            <section key={sec.heading}>
              <h2>{sec.heading}</h2>
              {sec.body.map((para, i) => (
                <p key={`${sec.heading}-${i}`}>{paragraphWithLinks(para)}</p>
              ))}
            </section>
          ))}
        </div>

        <aside className="article-cta" aria-label="Reserva tu sesión">
          <div className="article-cta-text">
            <p className="section-tag">¿Lista para tu sesión?</p>
            <h2>Reserva tu sesión de quinceañera</h2>
            <p>
              Escríbenos por WhatsApp con tu fecha tentativa. Te respondemos con disponibilidad y cotización detallada en menos de 24 horas. Reserva con 50% de depósito.
            </p>
          </div>
          <div className="article-cta-actions">
            <a
              className="button button-light"
              href={whatsappUrl("Hola, vi la guía de poses para quinceañera y quiero más información sobre la sesión.")}
              rel="noopener"
            >
              WhatsApp {phoneDisplay}
            </a>
            <a className="button button-outline" href={`tel:${phoneE164}`}>
              Llamar {phoneDisplay}
            </a>
            <Link className="button button-ghost" href="/sesion-de-fotos-quinceanera/">
              Ver paquetes de quinceañera
            </Link>
          </div>
        </aside>

        <section className="faq-wrap">
          <p className="section-tag">Preguntas frecuentes</p>
          <h2>Poses para quinceañera — preguntas frecuentes</h2>
          {post.faq.map((f) => (
            <details key={f.q}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </section>
      </article>

      {post.related.length > 0 && (
        <section className="section alt-section" aria-labelledby="related-h2">
          <div className="wrap">
            <p className="section-tag">Sigue leyendo</p>
            <h2 id="related-h2">Páginas relacionadas en el estudio</h2>
            <div className="card-grid">
              {post.related.map((r) => (
                <Link key={r.href} className="card" href={r.href}>
                  <span>Relacionado</span>
                  <h3>{r.label}</h3>
                  <p>{r.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CrossSiteCta locale="es" />
    </main>
  );
}
