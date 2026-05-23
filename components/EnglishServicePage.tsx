import Link from "next/link";
import { SeoJsonLd } from "@/components/SeoJsonLd";
import type { EnServicePage } from "@/lib/enServicePages";
import {
  aggregateRating,
  brandLogoUrl,
  canonicalUrl,
  email,
  geoCoordinates,
  localBusinessAreaServed,
  organizationSchema,
  phoneE164,
  postalAddress,
  siteUrl
} from "@/lib/seo";

export function EnglishServicePage({ entry }: { entry: EnServicePage }) {
  const pageUrl = canonicalUrl(entry.enPath);
  const esMirror = canonicalUrl(entry.esPath);
  const personId = `${siteUrl}/sobre/#person`;
  const heroImageUrl = `${siteUrl}${entry.imageUrl ?? "/wp-content/uploads/2024/06/Estudio-fotografo-santo-domingo.webp"}`;
  const priceRangeStr = entry.priceFromDop
    ? `From RD$${entry.priceFromDop.toLocaleString()}`
    : "RD$5,960-RD$35,760";

  const schema: Record<string, unknown>[] = [
    organizationSchema,
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": `${siteUrl}/#localbusiness`,
      name: "Babula Shots Estudio",
      url: siteUrl,
      image: brandLogoUrl,
      telephone: phoneE164,
      email,
      address: postalAddress,
      geo: geoCoordinates,
      priceRange: "RD$5,960-RD$35,760",
      areaServed: localBusinessAreaServed,
      aggregateRating,
      sameAs: [
        "https://babulashotsrd.com/",
        "https://www.instagram.com/babulashotsrd/",
        "https://www.wikidata.org/wiki/Q139892828"
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${pageUrl}#service`,
      name: entry.h1,
      serviceType: entry.topic,
      description: entry.description,
      provider: { "@type": "LocalBusiness", "@id": `${siteUrl}/#localbusiness` },
      areaServed: localBusinessAreaServed,
      ...(entry.priceFromDop
        ? {
            offers: {
              "@type": "Offer",
              "@id": `${pageUrl}#offer`,
              name: `${entry.h1} — starting offer`,
              description: entry.description,
              price: entry.priceFromDop.toString(),
              priceCurrency: "DOP",
              availability: "https://schema.org/InStock",
              url: pageUrl
            }
          }
        : {})
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: entry.title,
      description: entry.description,
      inLanguage: "en",
      isPartOf: { "@id": `${siteUrl}/#website` },
      about: { "@id": `${siteUrl}/#localbusiness` },
      author: { "@type": "Person", "@id": personId, name: "Michal Nikodem Babula" }
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: entry.faq.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a }
      }))
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Babula Shots Estudio", item: `${siteUrl}/en/` },
        { "@type": "ListItem", position: 2, name: "Services", item: `${siteUrl}/en/services/` },
        { "@type": "ListItem", position: 3, name: entry.h1, item: pageUrl }
      ]
    }
  ];

  return (
    <main>
      <SeoJsonLd data={schema} />

      <section className="section">
        <div className="wrap" style={{ maxWidth: "780px" }}>
          <p className="eyebrow">{entry.eyebrow}</p>
          <h1>{entry.h1}</h1>

          <p>{entry.intro}</p>

          {entry.sections.map((s) => (
            <div key={s.h2}>
              <h2>{s.h2}</h2>
              {s.paragraphs?.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
              {s.listIntro && <p>{s.listIntro}</p>}
              {s.list && (
                <ul style={{ lineHeight: 1.9 }}>
                  {s.list.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          {entry.priceFromDop && (
            <>
              <h2>Pricing</h2>
              <p>
                Starting from <strong>RD${entry.priceFromDop.toLocaleString()}</strong>
                {entry.priceFromUsd ? <> (approx. US${entry.priceFromUsd})</> : null}.
                See the full price list at <Link href="/en/prices/">prices</Link>.
                Reservations confirmed with a 50% deposit.
              </p>
            </>
          )}

          <h2>FAQ</h2>
          {entry.faq.map((item) => (
            <details key={item.q} style={{ margin: "1rem 0" }}>
              <summary><strong>{item.q}</strong></summary>
              <p style={{ marginTop: ".5rem" }}>{item.a}</p>
            </details>
          ))}

          <h2>Book a session</h2>
          <p>
            <a href={`tel:${phoneE164}`}>{phoneE164}</a> · {email} · WhatsApp message to confirm
            availability and discuss details.
          </p>

          <p style={{ marginTop: "2rem" }}>
            <Link href="/en/">→ Babula Shots Estudio — home (English)</Link>
            {" · "}
            <Link href={esMirror.replace(siteUrl, "")}>→ Versión en español</Link>
          </p>
        </div>
      </section>
    </main>
  );
}
