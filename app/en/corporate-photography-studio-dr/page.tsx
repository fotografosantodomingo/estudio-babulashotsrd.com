import type { Metadata } from "next";
import Link from "next/link";
import { SeoJsonLd } from "@/components/SeoJsonLd";
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

const PAGE_PATH = "/en/corporate-photography-studio-dr/";
const PAGE_URL = canonicalUrl(PAGE_PATH);
const ES_MIRROR = canonicalUrl("/fotografia-corporativa-en-estudio-rd/");

const title = "Corporate Photography Studio in Santo Domingo · Babula Shots · 4.9★ 98 reviews";
const description =
  "Professional corporate headshots and executive portraits in Santo Domingo. LinkedIn photos, team headshots, brand portraits with Profoto studio lighting. 48h delivery.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: PAGE_URL,
    languages: {
      "es-DO": ES_MIRROR,
      es: ES_MIRROR,
      en: PAGE_URL,
      "x-default": ES_MIRROR
    }
  },
  openGraph: {
    title,
    description,
    url: PAGE_URL,
    type: "website",
    locale: "en_US",
    siteName: "Babula Shots Estudio",
    images: [{ url: "/wp-content/uploads/2024/06/Estudio-fotografo-santo-domingo.webp", width: 1600, height: 1067, alt: "Babula Shots corporate photography studio in Santo Domingo" }]
  }
};

const faqItems = [
  {
    q: "How long does a corporate session take?",
    a: "Most corporate sessions run 30–60 minutes in studio. A single executive headshot session is 30 minutes; a team session of 5–10 people typically runs 90 minutes total. We coordinate timing in advance so you book exactly what you need."
  },
  {
    q: "How fast can I get my edited photos?",
    a: "Standard delivery is 48 hours via a private online gallery with high-resolution files. We offer a 24-hour express option for urgent campaigns or product launches at a small surcharge."
  },
  {
    q: "Do I get commercial usage rights?",
    a: "Yes. Corporate session pricing includes a commercial license — you can use the images on your website, LinkedIn profile, marketing materials, social media and printed collateral without per-use fees."
  },
  {
    q: "Can you photograph executives at our office instead of in studio?",
    a: "Yes. We offer on-location corporate photography in Santo Domingo, Punta Cana, Cap Cana and across the Dominican Republic. On-location pricing includes lighting setup and travel within the metro area; outside Santo Domingo we add a transport fee."
  },
  {
    q: "What should I wear?",
    a: "Solid colors photograph best. Avoid busy patterns and stripes. Bring 2–3 outfit options — we'll help pick what works on camera. For team headshots we recommend a coordinated palette (not identical clothes) to keep the gallery cohesive."
  }
];

const personId = `${siteUrl}/sobre/#person`;

const schema = [
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
    priceRange: "RD$10,700-RD$17,880",
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
    "@id": `${PAGE_URL}#service`,
    name: "Corporate photography studio Dominican Republic",
    serviceType: "Corporate Photography",
    description,
    provider: { "@type": "LocalBusiness", "@id": `${siteUrl}/#localbusiness` },
    areaServed: localBusinessAreaServed,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Corporate photography packages",
      itemListElement: [
        {
          "@type": "Offer",
          "@id": `${PAGE_URL}#offer-individual`,
          name: "Individual executive headshot",
          description: "30-min studio session, 5–10 final edited photos, LinkedIn-ready crops, commercial usage included.",
          price: "10700",
          priceCurrency: "DOP",
          availability: "https://schema.org/InStock",
          url: PAGE_URL
        },
        {
          "@type": "Offer",
          "@id": `${PAGE_URL}#offer-team`,
          name: "Team headshots — coordinated session",
          description: "Up to 10 people, matched lighting and crop across the team, 48-hour delivery.",
          price: "17880",
          priceCurrency: "DOP",
          availability: "https://schema.org/InStock",
          url: PAGE_URL
        }
      ]
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${PAGE_URL}#webpage`,
    url: PAGE_URL,
    name: title,
    description,
    inLanguage: "en",
    isPartOf: { "@id": `${siteUrl}/#website` },
    about: { "@id": `${siteUrl}/#localbusiness` },
    author: { "@type": "Person", "@id": personId, name: "Michal Nikodem Babula" }
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
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
      { "@type": "ListItem", position: 3, name: "Corporate photography studio Dominican Republic", item: PAGE_URL }
    ]
  }
];

export default function CorporatePhotographyPage() {
  return (
    <main>
      <SeoJsonLd data={schema as Record<string, unknown>[]} />

      <section className="section">
        <div className="wrap" style={{ maxWidth: "780px" }}>
          <p className="eyebrow">Corporate photography · Babula Shots Estudio</p>
          <h1>Corporate photography studio in Santo Domingo, Dominican Republic</h1>

          <p>
            In a competitive business environment, a professional image is what makes you stand out
            — whether on LinkedIn, your company website, executive bios or marketing collateral.
            At our photography studio in Santo Domingo we specialise in <strong>corporate
            headshots and executive portraits</strong> that capture authority, approachability and
            brand identity in a single frame.
          </p>

          <h2>What we shoot</h2>
          <ul style={{ lineHeight: 1.9 }}>
            <li><strong>Individual executive headshots</strong> — clean studio lighting, neutral or branded backdrops, professional retouching.</li>
            <li><strong>Team headshots</strong> — matched lighting, identical crops, consistent colour across the whole team gallery.</li>
            <li><strong>LinkedIn profile photos</strong> — square-crop ready, retouched for natural skin tones, multiple expressions per session.</li>
            <li><strong>Personal branding sessions</strong> — for consultants, lawyers, coaches and creators who need a library of professional images.</li>
            <li><strong>Board and annual-report portraits</strong> — formal portraits with consistent treatment for company publications.</li>
          </ul>

          <h2>Why our Santo Domingo studio</h2>
          <p>
            We work with full Profoto studio lighting in a controlled environment — no weather or
            location risk, no harsh midday sun, no echo from outdoor noise. Sessions are scheduled
            in 30–90 minute slots so the executive's day isn't disrupted. Standard delivery is
            <strong> 48 hours</strong> via a private online gallery with high-resolution files and
            web-optimised crops. Commercial usage rights are included in all corporate packages.
          </p>

          <h2>On-location alternative</h2>
          <p>
            Need photography at your office in Santo Domingo, Punta Cana, Cap Cana or elsewhere in
            the Dominican Republic? We bring the same studio lighting to your conference room or
            executive office. See also our{" "}
            <Link href="/en/services/">full services overview</Link>{" "}
            for outdoor and event coverage.
          </p>

          <h2>FAQ</h2>
          {faqItems.map((item) => (
            <details key={item.q} style={{ margin: "1rem 0" }}>
              <summary><strong>{item.q}</strong></summary>
              <p style={{ marginTop: ".5rem" }}>{item.a}</p>
            </details>
          ))}

          <h2>Book a session</h2>
          <p>
            <a href={`tel:${phoneE164}`}>{phoneE164}</a> · {email} · or message us on WhatsApp to
            check availability and confirm your slot.
          </p>

          <p style={{ marginTop: "2rem" }}>
            <Link href="/en/">→ Babula Shots Estudio — home (English)</Link>
            {" · "}
            <Link href={ES_MIRROR.replace(siteUrl, "")}>→ Versión en español</Link>
          </p>
        </div>
      </section>
    </main>
  );
}
