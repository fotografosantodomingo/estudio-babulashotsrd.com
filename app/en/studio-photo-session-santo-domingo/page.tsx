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

const PAGE_PATH = "/en/studio-photo-session-santo-domingo/";
const PAGE_URL = canonicalUrl(PAGE_PATH);
const ES_MIRROR = canonicalUrl("/sesion-de-fotos-estudio-santo-domingo/");

const title = "Studio Photo Session in Santo Domingo · Babula Shots · 4.9★ 100 reviews";
const description =
  "Professional photo studio in Santo Domingo, Dominican Republic. Portrait, fashion, maternity, family and creative studio sessions with Profoto lighting. Book your session.";

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
    images: [{ url: "/wp-content/uploads/2024/06/Estudio-fotografo-santo-domingo.webp", width: 1600, height: 1067, alt: "Babula Shots photo studio in Santo Domingo" }]
  }
};

const faqItems = [
  {
    q: "How long is a typical studio photo session?",
    a: "Sessions run from 30 minutes (single portrait, headshot) to 2 hours (boudoir, fashion editorial, multi-look). Most family and individual sessions are scheduled for 1 hour, which gives time for 2–3 outfit changes and varied lighting setups."
  },
  {
    q: "Do you offer hair and makeup?",
    a: "We work with trusted hair and makeup artists in Santo Domingo who can join the session on request. Pricing is per artist and depends on the look complexity. Mention it when you book and we'll coordinate."
  },
  {
    q: "Can I bring children or pets to the studio?",
    a: "Yes — we love photographing kids, babies, families and pets. The studio is set up with safe lighting, comfortable temperature, and we always allow time for breaks. Newborn sessions are scheduled with extra buffer."
  },
  {
    q: "How are the photos delivered?",
    a: "All edited high-resolution photos arrive via a private online gallery within 5–7 business days for portrait sessions, 2–3 days for headshots, 48 hours for express requests. The gallery is shareable and downloadable."
  },
  {
    q: "Do you sell prints or just digital files?",
    a: "Digital files are included with every session. We also offer premium print packages — fine-art prints, acrylic wall art, leather-bound albums — which can be ordered through the same gallery."
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
    priceRange: "RD$5,960-RD$23,800",
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
    name: "Studio photo session Santo Domingo",
    serviceType: "Studio Photography",
    description,
    provider: { "@type": "LocalBusiness", "@id": `${siteUrl}/#localbusiness` },
    areaServed: localBusinessAreaServed
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
      { "@type": "ListItem", position: 3, name: "Studio photo session Santo Domingo", item: PAGE_URL }
    ]
  }
];

export default function StudioPhotoSessionPage() {
  return (
    <main>
      <SeoJsonLd data={schema as Record<string, unknown>[]} />

      <section className="section">
        <div className="wrap" style={{ maxWidth: "780px" }}>
          <p className="eyebrow">Studio photo session · Babula Shots Estudio</p>
          <h1>Studio Photo Session in Santo Domingo, Dominican Republic</h1>

          <p>
            Looking to capture special moments with a professional photo session? At our
            <strong> photo studio in Santo Domingo</strong> we specialise in creating unforgettable
            images — for personal portraits, family shoots, fashion sessions, maternity, branding
            or any moment worth keeping. Whatever the occasion, we make sure every frame counts.
          </p>

          <h2>What kind of studio sessions we offer</h2>
          <ul style={{ lineHeight: 1.9 }}>
            <li>
              <strong>Portrait sessions</strong> — for your professional profile, social media or
              simply a beautiful image that reflects who you are. We direct gently so you feel
              comfortable in front of the camera.
            </li>
            <li>
              <strong>Fashion &amp; style</strong> — model portfolios, personal-style sessions and
              editorial shoots with professional lighting and curated backdrops.
            </li>
            <li>
              <strong>Family &amp; couples</strong> — natural-feeling studio portraits with space
              for kids to be themselves. We work in short bursts so nobody loses patience.
            </li>
            <li>
              <strong>Maternity &amp; newborn</strong> — soft lighting and styled drapes, captured
              between weeks 28–36 for maternity, or in the first two weeks for newborns.
            </li>
            <li>
              <strong>Boudoir</strong> — private, respectful sessions in the studio or at a luxury
              hotel suite. Edited delivery in 48–72 hours.
            </li>
            <li>
              <strong>Personal branding</strong> — multi-look sessions for consultants, creators
              and entrepreneurs who need a library of on-brand images.
            </li>
          </ul>

          <h2>Why our studio</h2>
          <p>
            We work with full <strong>Profoto studio lighting</strong> in a controlled environment.
            Multiple backdrops, professional wardrobe assistance, and a calm, well-paced experience
            so you leave with images you actually love. The studio is centrally located in Santo
            Domingo with parking and easy access.
          </p>

          <h2>Pricing &amp; delivery</h2>
          <p>
            Sessions start from <strong>RD$5,960</strong> for individual portraits. Most sessions
            include 15–40 edited high-resolution photos delivered via a private online gallery in
            5–7 days. Express delivery in 48 hours is available on request. See the full price list
            at <Link href="/en/prices/">prices</Link>.
          </p>

          <h2>FAQ</h2>
          {faqItems.map((item) => (
            <details key={item.q} style={{ margin: "1rem 0" }}>
              <summary><strong>{item.q}</strong></summary>
              <p style={{ marginTop: ".5rem" }}>{item.a}</p>
            </details>
          ))}

          <h2>Book your session</h2>
          <p>
            <a href={`tel:${phoneE164}`}>{phoneE164}</a> · {email} · or message us on WhatsApp.
            Booking is confirmed with a 50% deposit, balance due on the session day.
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
