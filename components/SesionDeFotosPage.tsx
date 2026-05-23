import Link from "next/link";
import { CrossSiteCta } from "@/components/CrossSiteCta";
import { SeoJsonLd } from "@/components/SeoJsonLd";
import { sesionPages, enSesionPages, type SesionPage } from "@/lib/sesionContent";
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

export function SesionDeFotosPage({ page, locale = "es" }: { page: SesionPage; locale?: "es" | "en" }) {
  const isEn = locale === "en";
  const url = canonicalUrl(page.url);
  const t = isEn
    ? {
        home: "Home",
        hub: "Photo session",
        hubUrl: "/en/photo-session/",
        bookEyebrow: "Book your session",
        bookH2: "Ready to book?",
        bookCopy: "Send us a WhatsApp with your tentative date. We reply with availability and a detailed quote in under 24 hours. Book with a 50% deposit.",
        whatsappPrefix: "Hi, I'd like to book a",
        whatsappLabel: "WhatsApp",
        callLabel: "Call",
        pricesLabel: "See prices",
        pricesUrl: "/en/prices/",
        faqEyebrow: "Frequently asked",
        faqMasterH2: "Photo session in Santo Domingo — FAQ",
        faqClusterH2Suffix: "— FAQ",
        relatedEyebrow: "Related sessions",
        relatedH2: "Other session types we cover",
        clusterEyebrow: "Specialized sessions",
        clusterH2: "Dedicated pages by session type"
      }
    : {
        home: "Inicio",
        hub: "Sesión de fotos",
        hubUrl: "/sesion-de-fotos/",
        bookEyebrow: "Reserva tu sesión",
        bookH2: "Listo para reservar?",
        bookCopy: "Escríbenos por WhatsApp con tu fecha tentativa. Te respondemos con disponibilidad y cotización detallada en menos de 24 horas. Reserva con 50% de depósito.",
        whatsappPrefix: "Hola, quiero reservar una",
        whatsappLabel: "WhatsApp",
        callLabel: "Llamar",
        pricesLabel: "Ver precios",
        pricesUrl: "/precios/",
        faqEyebrow: "Preguntas frecuentes",
        faqMasterH2: "Sesión de fotos en Santo Domingo — FAQ",
        faqClusterH2Suffix: "— FAQ",
        relatedEyebrow: "Sesiones relacionadas",
        relatedH2: "Otros tipos de sesión que cubrimos",
        clusterEyebrow: "Sesiones especializadas",
        clusterH2: "Páginas dedicadas por tipo de sesión"
      };
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: t.home, item: canonicalUrl("/") },
      ...(page.isMaster
        ? [{ "@type": "ListItem", position: 2, name: t.hub, item: url }]
        : [
            { "@type": "ListItem", position: 2, name: t.hub, item: canonicalUrl(t.hubUrl) },
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
    inLanguage: isEn ? "en" : "es-DO"
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
    // Use "LocalBusiness" (not "Photographer"), even though Photographer extends LocalBusiness
    // in schema.org. Google's Review Snippet validator only auto-recognizes a fixed set of
    // types as review-snippet hosts (LocalBusiness, Organization, Product, Service, Movie, ...);
    // it does NOT auto-promote subtypes like Photographer, so aggregateRating on a Photographer
    // is flagged "Invalid object type in field <parent_node>" → Critical error.
    "@type": "LocalBusiness",
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

  const allPages = isEn ? enSesionPages : sesionPages;
  const related = (page.relatedClusterSlugs ?? []).map((s) => allPages[s]).filter(Boolean);

  return (
    <main>
      <SeoJsonLd data={schemas as Record<string, unknown>[]} />
      <article className="article">
        <nav className="breadcrumbs" aria-label="Breadcrumbs">
          <Link href={isEn ? "/en/" : "/"}>{t.home}</Link>
          {!page.isMaster && (
            <>
              <span>/</span>
              <Link href={t.hubUrl}>{t.hub}</Link>
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

        <aside className="article-cta" aria-label={t.bookEyebrow}>
          <div className="article-cta-text">
            <p className="section-tag">{t.bookEyebrow}</p>
            <h2>{t.bookH2}</h2>
            <p>{t.bookCopy}</p>
          </div>
          <div className="article-cta-actions">
            <a className="button button-light" href={whatsappUrl(`${t.whatsappPrefix} ${page.h1.toLowerCase()}`)} rel="noopener">
              {t.whatsappLabel} {phoneDisplay}
            </a>
            <a className="button button-outline" href={`tel:${phoneE164}`}>
              {t.callLabel} {phoneDisplay}
            </a>
            <Link className="button button-ghost" href={t.pricesUrl}>
              {t.pricesLabel}
            </Link>
          </div>
        </aside>

        <section className="faq-wrap">
          <p className="section-tag">{t.faqEyebrow}</p>
          <h2>{page.isMaster ? t.faqMasterH2 : `${page.h1} ${t.faqClusterH2Suffix}`}</h2>
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
            <p className="section-tag">{t.relatedEyebrow}</p>
            <h2 id="related-h2">{t.relatedH2}</h2>
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
            <p className="section-tag">{t.clusterEyebrow}</p>
            <h2 id="cluster-h2">{t.clusterH2}</h2>
            <div className="card-grid">
              {Object.values(allPages).filter((p) => !p.isMaster).map((p) => (
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

      <CrossSiteCta locale={locale} />
    </main>
  );
}
