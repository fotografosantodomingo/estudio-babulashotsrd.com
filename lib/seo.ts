export const siteOrigin = "https://estudio.babulashotsrd.com";
export const siteUrl = siteOrigin;
export const mainBrandUrl = "https://babulashotsrd.com";
export const bodaUrl = "https://boda.babulashotsrd.com";
export const inmobiliariaUrl = "https://inmobiliaria.babulashotsrd.com";
export const droneUrl = "https://dron.babulashotsrd.com";
export const santoDomingoHubUrl = "https://www.fotografosantodomingo.com";
export const phoneDisplay = "809 720 95 47";
export const phoneE164 = "+18097209547";
export const email = "info@babulashotsrd.com";
export const whatsappNumber = "18097209547";
export const portfolioUrl = "https://babulashots.pic-time.com/client";

export const niche = {
  label: "Estudio",
  enLabel: "Studio",
  whatsappContext: "Hola, vengo de la web de Estudio Babula Shots."
};

export function canonicalUrl(path: string) {
  if (!path || path === "/") return `${siteUrl}/`;
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `${siteUrl}${clean.endsWith("/") ? clean : `${clean}/`}`;
}

export function whatsappUrl(message: string) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function assetPath(path: string) {
  return path.startsWith("/") ? path : `/${path}`;
}

// Logo / brand image used by the Organization + as Publisher inside Article/BlogPosting schemas.
// Points to apex (canonical brand logo); the previous /2024/06/...webp path never existed in any repo.
export const brandLogoUrl = `${mainBrandUrl}/wp-content/uploads/2023/05/cropped-babulashotslogo-1.png`;

// ISO 8601 datetime helper. Dominican Republic is UTC-4 year-round (no DST).
// Use this for datePublished/dateModified in any schema — string-only "2026-05-10" fails
// Google's Rich Results validator with "Invalid datetime / Missing timezone" warnings.
export function isoAst(dateString: string, time = "12:00:00"): string {
  // Accepts "YYYY-MM-DD" and returns "YYYY-MM-DDTHH:MM:SS-04:00".
  const d = dateString.length === 10 ? dateString : dateString.slice(0, 10);
  return `${d}T${time}-04:00`;
}

// Canonical address used by Organization + LocalBusiness/Photographer schemas.
// streetAddress + postalCode intentionally omitted — both are optional in schema.org
// and we don't have the user's exact address yet (see ~/.claude/.../memory/babula_studio_address.md).
export const postalAddress = {
  "@type": "PostalAddress" as const,
  addressLocality: "Santo Domingo",
  addressRegion: "Distrito Nacional",
  addressCountry: "DO"
};

// Canonical aggregateRating (4.9/5 from 100 Google reviews — brand-wide).
export const aggregateRating = {
  "@type": "AggregateRating" as const,
  ratingValue: "4.9",
  bestRating: "5",
  worstRating: "1",
  ratingCount: "100",
  reviewCount: "100"
};

// Live Google rating fetch (client-side). ratingCount above is the static
// fallback; this lets the visible badge update to the real-time Google count on
// load. Key is referrer-restricted to babulashotsrd.com domains + Places API
// only, so it's safe to expose client-side. See [[google_reviews_setup]].
export const googlePlaceId = "ChIJwTKDbC2Jr44R_OH44Jzl5-0";
export const googlePlacesKey = "AIzaSyAOW9duWy_e5aidAt0p-Q5Qwnjf2IuP3ds";

// CTR-focused title suffix. Append to base titles to render
// "· 4.9★ 100 reseñas Google" / "· 4.9★ 100 Google Reviews" in SERPs.
// Reads from aggregateRating so the title stays in sync with schema + badge.
export const ratingBadgeEs = ` · ${aggregateRating.ratingValue}★ ${aggregateRating.reviewCount} reseñas Google`;
export const ratingBadgeEn = ` · ${aggregateRating.ratingValue}★ ${aggregateRating.reviewCount} Google Reviews`;

// Canonical geo (Santo Domingo centroid as fallback — see memory entry).
// TODO: replace with the studio's actual coordinates when provided.
export const geoCoordinates = {
  "@type": "GeoCoordinates" as const,
  latitude: 18.4861,
  longitude: -69.9312
};

// Studio coverage. Studio is in Santo Domingo; outdoor sessions extend across DR.
// Per schema_standards.md rule 6, list specific cities + country.
export const localBusinessAreaServed = [
  { "@type": "City", name: "Santo Domingo" },
  { "@type": "City", name: "Punta Cana" },
  { "@type": "City", name: "La Romana" },
  { "@type": "City", name: "Santiago" },
  { "@type": "Country", name: "Dominican Republic" }
];

// Numeric priceRange computed from studio offerings (Retratos → Boudoir / Snoot Premium).
// Per schema_standards.md rule 5: prefer concrete numeric ranges over "$$".
export const localBusinessPriceRange = "RD$5,960-RD$23,800";

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  // Distinct @id so Google Rich Results doesn't merge this with LocalBusiness/Photographer
  // (which would surface "duplicate url" warnings since both share the same site URL).
  "@id": `${siteUrl}#organization`,
  name: "Babula Shots Estudio",
  url: siteUrl,
  telephone: phoneE164,
  email,
  image: brandLogoUrl,
  logo: brandLogoUrl,
  address: postalAddress,
  founder: {
    "@type": "Person",
    name: "Michal Nikodem Babula",
    sameAs: "https://www.wikidata.org/wiki/Q139892966"
  },
  // NOTE: intentionally NOT using `parentOrganization` here. GSC Rich Results flags the
  // nested `name` as a "duplicate name" warning, and the brand hierarchy is already
  // signalled via `sameAs` below (which links to the apex brand babulashotsrd.com).
  sameAs: [mainBrandUrl, bodaUrl, inmobiliariaUrl, droneUrl, santoDomingoHubUrl, "https://www.instagram.com/babulashotsrd/", "https://www.wikidata.org/wiki/Q139892828"]
};

export function breadcrumbSchema(items: Array<{ name: string; path?: string; item?: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((entry, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: entry.name,
      item: entry.item ?? canonicalUrl(entry.path ?? "/")
    }))
  };
}
