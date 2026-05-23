import Link from "next/link";
import { CrossSiteCta } from "@/components/CrossSiteCta";
import { HeroImage, mobileVariantOf } from "@/components/HeroImage";
import { SeoJsonLd } from "@/components/SeoJsonLd";
import {
  categories,
  decodeEntities,
  extractFirstImage,
  pages,
  plainExcerpt,
  plainTitle,
  posts
} from "@/lib/estudioContent";
import {
  aggregateRating,
  brandLogoUrl,
  canonicalUrl,
  email,
  geoCoordinates,
  localBusinessAreaServed,
  localBusinessPriceRange,
  niche,
  organizationSchema,
  phoneE164,
  postalAddress,
  siteUrl
} from "@/lib/seo";

const featuredServiceSlugs = [
  "retratos-profesionales-en-estudio-santo-domingo",
  "estudio-fotografico-para-moda-en-rd",
  "fotografia-corporativa-en-estudio-rd",
  "fotografia-alimentos-bebidas-republica-dominicana",
  "sesion-de-fotos-exterior-en-santo-domingo-precios-y-planes-exterior",
  "session-de-fotos-embrazada-estudio-en-santo-domingo"
];

// Concrete priced Offers for the studio LocalBusiness — sourced from the
// shared raw-pricing.json catalogue (~/Documents/.shared-content/raw-pricing.json).
// Replaces the previous `featured.map` pattern that emitted Offer entries with
// title-only itemOffered Services and no price. Per schema_standards.md rule 5,
// concrete numeric DOP prices unlock numeric priceRange + Service Listings.
const STUDIO_OFFERS = [
  { id: "retratos", name: "Retratos en estudio", price: 5960, duration: "PT1H",
    desc: "Sesión en estudio o locación, 15 fotos editadas en alta resolución, entrega en 48h." },
  { id: "maternidad", name: "Sesión de maternidad", price: 8940, duration: "PT1H",
    desc: "Sesión íntima en locación, 30 fotos editadas, galería privada." },
  { id: "infantiles", name: "Sesiones infantiles", price: 8940, duration: "PT1H",
    desc: "Ambiente relajado y divertido, 20 fotos editadas, galería digital." },
  { id: "headshots-corp", name: "Headshots corporativos", price: 10700, duration: "PT1H",
    desc: "Múltiples looks y fondos, uso comercial autorizado, entrega en 24-48h." },
  { id: "comercial", name: "Fotografía comercial", price: 14900, duration: "PT1H",
    desc: "Productos, hoteles, restaurantes, derechos de uso comercial, edición profesional." },
  { id: "alimentos", name: "Fotografía de alimentos y bebidas", price: 14900, duration: "PT2H",
    desc: "Sesión en estudio o locación, 30 imágenes editadas, apta para redes y menús." },
  { id: "snoot-premium", name: "Snoot Óptico Premium — 15 fotos", price: 14900, duration: "PT2H",
    desc: "Iluminación cinematográfica Snoot Óptico, 15 fotos editadas, 2h con cambios de look." },
  { id: "boudoir", name: "Sesión boudoir", price: 23800, duration: "PT2H",
    desc: "Estudio privado o habitación de hotel de lujo, iluminación profesional, galería en 48-72h." }
];

const STUDIO_OFFER_MIN = Math.min(...STUDIO_OFFERS.map((o) => o.price));
const STUDIO_OFFER_MAX = Math.max(...STUDIO_OFFERS.map((o) => o.price));
const STUDIO_PRICE_RANGE = `RD$${STUDIO_OFFER_MIN.toLocaleString()}-RD$${STUDIO_OFFER_MAX.toLocaleString()}`;

const galleryPageSlugs = [
  "galeria",
  "galeria-retratos",
  "galeria-de-fotos-angela-col",
  "galeria-estudio-sesion-de-fotos-comida-santo-domingo"
];

export function HomePage() {
  const featured = featuredServiceSlugs
    .map((slug) => pages.find((p) => p.slug === slug))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));
  const galleries = galleryPageSlugs
    .map((slug) => pages.find((p) => p.slug === slug))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));
  const recent = posts.slice(0, 3);

  const schema = [
    organizationSchema,
    {
      "@context": "https://schema.org",
      // Use "LocalBusiness" (NOT "ProfessionalService") per schema_standards.md
      // rule 2c — Google's Review Snippet validator only accepts LocalBusiness/
      // Organization/Product/Service/etc as aggregateRating hosts; subtypes like
      // ProfessionalService trigger a CRITICAL "Invalid object type in parent
      // field" error and disqualify the page from Review Snippet rich results.
      "@type": "LocalBusiness",
      "@id": `${siteUrl}/#localbusiness`,
      name: "Babula Shots Estudio",
      url: siteUrl,
      telephone: phoneE164,
      email,
      image: `${siteUrl}/wp-content/uploads/2024/06/Estudio-fotografo-santo-domingo.webp`,
      logo: brandLogoUrl,
      address: postalAddress,
      geo: geoCoordinates,
      // Numeric priceRange computed from this page's actual Offers (rule 5).
      priceRange: STUDIO_PRICE_RANGE,
      // Specific cities + country (rule 6).
      areaServed: localBusinessAreaServed,
      aggregateRating,
      sameAs: [
        "https://babulashotsrd.com/",
        "https://boda.babulashotsrd.com/",
        "https://dron.babulashotsrd.com/",
        "https://inmobiliaria.babulashotsrd.com/",
        "https://www.instagram.com/babulashotsrd/",
        "https://www.wikidata.org/wiki/Q139892828"
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Servicios de estudio",
        itemListElement: STUDIO_OFFERS.map((o) => ({
          "@type": "Offer",
          "@id": `${siteUrl}/#offer-${o.id}`,
          name: o.name,
          description: o.desc,
          price: o.price.toString(),
          priceCurrency: "DOP",
          availability: "https://schema.org/InStock",
          url: `${siteUrl}/precios/`,
          category: "Studio photography",
          itemOffered: {
            "@type": "Service",
            name: o.name,
            description: o.desc,
            serviceType: "Studio photography",
            provider: { "@type": "LocalBusiness", "@id": `${siteUrl}/#localbusiness` }
          }
        }))
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      url: siteUrl,
      name: "Babula Shots Estudio",
      inLanguage: "es-DO"
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [{ "@type": "ListItem", position: 1, name: "Inicio", item: canonicalUrl("/") }]
    }
  ];

  const heroImage = "/wp-content/uploads/2024/06/Estudio-fotografo-santo-domingo.webp";
  const heroAlt = "Estudio Fotografico Santo Domingo";

  return (
    <main>
      <SeoJsonLd data={schema} />
      <section className="hero">
        <HeroImage src={heroImage} alt={heroAlt} width={1600} height={1067} />
        <div className="hero-content">
          <p className="eyebrow">Babula Shots {niche.label}</p>
          <h1>Estudio fotografico en Santo Domingo</h1>
          <p>
            Retratos, sesiones de fotos en estudio, fotografia de comida y bebida, exteriores y campanas para empresas.
            Reserva tu sesion en estudio profesional con iluminacion controlada.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-heading">
            <p className="section-tag">Catálogo completo</p>
            <h2><Link href="/sesion-de-fotos/" className="inline-link">Sesión de fotos en Santo Domingo</Link></h2>
            <p>
              Hub principal del catálogo: tipos de sesión, precios, locaciones, qué ropa usar, FAQ. Página dedicada para cada tipo de sesión: <Link href="/sesion-de-fotos-pareja/" className="inline-link">pareja</Link>, <Link href="/sesion-de-fotos-cumpleanos/" className="inline-link">cumpleaños</Link>, <Link href="/sesion-de-fotos-corporativas/" className="inline-link">corporativas</Link>, <Link href="/headshots-profesionales-santo-domingo/" className="inline-link">headshots profesionales</Link>, <Link href="/sesion-de-fotos-embarazo/" className="inline-link">embarazo</Link>, <Link href="/sesion-de-fotos-quinceanera/" className="inline-link">quinceañera</Link>.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-divider">
        <div className="wrap">
          <div className="section-heading">
            <p className="section-tag">Servicios</p>
            <h2>Sesiones en estudio profesional</h2>
          </div>
          <div className="card-grid">
            {featured.map((p, idx) => {
              const img = extractFirstImage(p);
              const isFirst = idx === 0;
              return (
                <Link key={p.slug} className="card" href={`/${p.slug}/`}>
                  {img ? (
                    <img
                      src={img.src}
                      alt={img.alt}
                      width={img.width}
                      height={img.height}
                      loading={isFirst ? "eager" : "lazy"}
                      decoding="async"
                      {...(isFirst ? { fetchPriority: "high" as const } : {})}
                    />
                  ) : null}
                  <span>Servicio</span>
                  <h3>{plainTitle(p)}</h3>
                  <p>{plainExcerpt(p, 160)}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section alt-section">
        <div className="wrap">
          <div className="section-heading">
            <p className="section-tag">Galeria</p>
            <h2>Trabajos recientes del estudio</h2>
            <Link className="inline-link" href="/galeria/">
              Ver galeria completa
            </Link>
          </div>
          <div className="card-grid">
            {galleries.map((p) => {
              const img = extractFirstImage(p);
              return (
                <Link key={p.slug} className="card" href={`/${p.slug}/`}>
                  {img ? <img src={img.src} alt={img.alt} width={img.width} height={img.height} loading="lazy" decoding="async" /> : null}
                  <span>Galeria</span>
                  <h3>{plainTitle(p)}</h3>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-heading">
            <p className="section-tag">Blog</p>
            <h2>Articulos sobre fotografia de estudio</h2>
            <Link className="inline-link" href="/blog/">
              Ver todos los articulos
            </Link>
          </div>
          <div className="card-grid">
            {recent.map((p) => {
              const img = extractFirstImage(p);
              return (
                <Link key={p.slug} className="card" href={`/${p.slug}/`}>
                  {img ? <img src={img.src} alt={img.alt} width={img.width} height={img.height} loading="lazy" decoding="async" /> : null}
                  <span>Articulo</span>
                  <h3>{plainTitle(p)}</h3>
                  <p>{plainExcerpt(p, 160)}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section alt-section">
        <div className="wrap">
          <div className="section-heading">
            <p className="section-tag">Categorias</p>
            <h2>Encuentra contenido por tema</h2>
          </div>
          <div className="related-links">
            {categories.map((c) => (
              <Link key={c.slug} href={`/category/${c.slug}/`}>
                {decodeEntities(c.name)}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CrossSiteCta locale="es" />
    </main>
  );
}

void mobileVariantOf;
