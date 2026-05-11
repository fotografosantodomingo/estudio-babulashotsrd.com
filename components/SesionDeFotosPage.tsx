import Link from "next/link";
import { CrossSiteCta } from "@/components/CrossSiteCta";
import { SeoJsonLd } from "@/components/SeoJsonLd";
import { sesionPages, type SesionPage } from "@/lib/sesionContent";
import {
  aggregateRating,
  canonicalUrl,
  brandLogoUrl,
  geoCoordinates,
  isoAst,
  organizationSchema,
  phoneDisplay,
  phoneE164,
  postalAddress,
  siteUrl,
  whatsappUrl
} from "@/lib/seo";

function paragraphWithLinks(text: string): React.ReactNode[] {
  // Renders **bold** and [text](path) → real anchor.
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

export function SesionDeFotosPage({ page }: { page: SesionPage }) {
  const url = canonicalUrl(page.url);
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: canonicalUrl("/") },
      ...(page.isMaster
        ? [{ "@type": "ListItem", position: 2, name: "Sesión de fotos", item: url }]
        : [
            { "@type": "ListItem", position: 2, name: "Sesión de fotos", item: canonicalUrl("/sesion-de-fotos/") },
            { "@type": "ListItem", position: 3, name: page.h1, item: url }
          ])
    ]
  };

  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: page.h1,
    description: page.metaDescription,
    mainEntityOfPage: url,
    datePublished: isoAst("2026-05-10"),
    dateModified: isoAst("2026-05-10"),
    image: `${siteUrl}${page.heroImage.src}`,
    author: { "@type": "Organization", name: "Babula Shots", "@id": `${siteUrl}#organization` },
    publisher: {
      "@type": "Organization",
      name: "Babula Shots",
      logo: { "@type": "ImageObject", url: brandLogoUrl }
    },
    inLanguage: "es-DO"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a }
    }))
  };

  // Compute numeric priceRange from this page's offers (falls back to "$$" if none)
  const offers = page.offers ?? [];
  const offerPrices = offers.map((o) => o.priceDOP);
  const priceRange = offerPrices.length
    ? `RD$${Math.min(...offerPrices).toLocaleString("es-DO")}-RD$${Math.max(...offerPrices).toLocaleString("es-DO")}`
    : "$$";

  const photographerSchema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "Photographer"],
    "@id": `${siteUrl}#localbusiness`,
    name: "Babula Shots Estudio",
    url: siteUrl,
    image: `${siteUrl}${page.heroImage.src}`,
    telephone: phoneE164,
    priceRange,
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

  // Service + Offer schemas (one Service per page, with an OfferCatalog of price tiers)
  const serviceSchemas = offers.length
    ? [
        {
          "@context": "https://schema.org",
          "@type": "Service",
          name: page.h1,
          description: page.metaDescription,
          serviceType: page.eyebrow,
          provider: { "@id": `${siteUrl}#localbusiness` },
          areaServed: { "@type": "Country", name: "Dominican Republic" },
          url,
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: page.h1,
            itemListElement: offers.map((o) => ({
              "@type": "Offer",
              name: o.name,
              description: o.description,
              price: o.priceDOP,
              priceCurrency: "DOP",
              availability: "https://schema.org/InStock",
              url,
              ...(o.duration ? { eligibleDuration: { "@type": "QuantitativeValue", value: o.duration } } : {})
            }))
          }
        }
      ]
    : [];

  const schemas: Record<string, unknown>[] = [
    organizationSchema as Record<string, unknown>,
    photographerSchema,
    ...serviceSchemas,
    breadcrumb as Record<string, unknown>,
    article as Record<string, unknown>,
    faqSchema as Record<string, unknown>
  ];

  const related = (page.relatedClusterSlugs ?? []).map((s) => sesionPages[s]).filter(Boolean);

  return (
    <main>
      <SeoJsonLd data={schemas as Record<string, unknown>[]} />
      <article className="article">
        <nav className="breadcrumbs" aria-label="Breadcrumbs">
          <Link href="/">Inicio</Link>
          {!page.isMaster && (
            <>
              <span>/</span>
              <Link href="/sesion-de-fotos/">Sesión de fotos</Link>
            </>
          )}
          <span>/</span>
          <span>{page.h1}</span>
        </nav>

        <header className="article-header">
          <p className="eyebrow">{page.eyebrow}</p>
          <h1>{page.h1}</h1>
          <figure className="article-hero">
            <img src={page.heroImage.src} alt={page.heroImage.alt} width={page.heroImage.width} height={page.heroImage.height} loading="eager" fetchPriority="high" decoding="async" />
          </figure>
        </header>

        <div className="wp-content">
          {page.introParagraphs.map((p, i) => (
            <p key={i}>{paragraphWithLinks(p)}</p>
          ))}

          {page.sections.map((sec) => (
            <section key={sec.heading}>
              <h2>{sec.heading}</h2>
              {sec.body.map((para, i) => (
                <p key={i}>{paragraphWithLinks(para)}</p>
              ))}
            </section>
          ))}
        </div>

        <aside className="article-cta" aria-label="Reserva tu sesión">
          <div className="article-cta-text">
            <p className="section-tag">Reserva tu sesión</p>
            <h2>Listo para reservar?</h2>
            <p>
              Escríbenos por WhatsApp con tu fecha tentativa. Te respondemos con disponibilidad y cotización detallada en menos de 24 horas. Reserva con 50% de depósito.
            </p>
          </div>
          <div className="article-cta-actions">
            <a className="button button-light" href={whatsappUrl(`Hola, quiero reservar una ${page.h1.toLowerCase()}`)} rel="noopener">
              WhatsApp {phoneDisplay}
            </a>
            <a className="button button-outline" href={`tel:${phoneE164}`}>
              Llamar {phoneDisplay}
            </a>
            <Link className="button button-ghost" href="/precios/">
              Ver precios
            </Link>
          </div>
        </aside>

        <section className="faq-wrap">
          <p className="section-tag">Preguntas frecuentes</p>
          <h2>{page.isMaster ? "Sesión de fotos en Santo Domingo — FAQ" : `${page.h1} — FAQ`}</h2>
          {page.faq.map((f) => (
            <details key={f.q}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </section>
      </article>

      {related.length > 0 && (
        <section className="section alt-section" aria-labelledby="related-h2">
          <div className="wrap">
            <p className="section-tag">Sesiones relacionadas</p>
            <h2 id="related-h2">Otros tipos de sesión que cubrimos</h2>
            <div className="card-grid">
              {related.map((r) => (
                <Link key={r.slug} className="card" href={r.url}>
                  <img src={r.heroImage.src} alt={r.heroImage.alt} width={r.heroImage.width} height={r.heroImage.height} loading="lazy" decoding="async" />
                  <span>{r.eyebrow}</span>
                  <h3>{r.h1}</h3>
                  <p>{r.metaDescription.slice(0, 160)}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {page.isMaster && (
        <section className="section section-divider" aria-labelledby="cluster-h2">
          <div className="wrap">
            <p className="section-tag">Sesiones especializadas</p>
            <h2 id="cluster-h2">Páginas dedicadas por tipo de sesión</h2>
            <div className="card-grid">
              {Object.values(sesionPages).filter((p) => !p.isMaster).map((p) => (
                <Link key={p.slug} className="card" href={p.url}>
                  <img src={p.heroImage.src} alt={p.heroImage.alt} width={p.heroImage.width} height={p.heroImage.height} loading="lazy" decoding="async" />
                  <span>{p.eyebrow}</span>
                  <h3>{p.h1}</h3>
                  <p>{p.metaDescription.slice(0, 160)}</p>
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
