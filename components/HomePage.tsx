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
import { canonicalUrl, niche, organizationSchema, phoneE164, siteUrl, whatsappUrl } from "@/lib/seo";

const featuredServiceSlugs = [
  "retratos-profesionales-en-estudio-santo-domingo",
  "estudio-fotografico-para-moda-en-rd",
  "fotografia-corporativa-en-estudio-rd",
  "fotografia-alimentos-bebidas-republica-dominicana",
  "sesion-de-fotos-exterior-en-santo-domingo-precios-y-planes-exterior",
  "session-de-fotos-embrazada-estudio-en-santo-domingo"
];

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
      "@type": "ProfessionalService",
      "@id": `${siteUrl}/#estudio`,
      name: "Babula Shots Estudio",
      url: siteUrl,
      telephone: phoneE164,
      areaServed: { "@type": "Country", name: "Dominican Republic" },
      priceRange: "$$",
      image: `${siteUrl}/wp-content/uploads/2024/06/Estudio-fotografo-santo-domingo.webp`,
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Servicios de estudio",
        itemListElement: featured.map((p) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: plainTitle(p) }
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
          <div className="hero-actions">
            <Link className="button button-light" href="/sesion-de-fotos/">Ver sesión de fotos</Link>
            <a
              className="button button-ghost"
              href={whatsappUrl(niche.whatsappContext)}
              rel="noopener"
            >
              WhatsApp
            </a>
          </div>
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
                  {img ? <img src={img.src} alt={img.alt} loading="lazy" decoding="async" /> : null}
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
                  {img ? <img src={img.src} alt={img.alt} loading="lazy" decoding="async" /> : null}
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
