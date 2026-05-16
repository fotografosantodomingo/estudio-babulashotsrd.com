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

// Canonical aggregateRating (4.9/5 from 91 Google reviews — brand-wide).
export const aggregateRating = {
  "@type": "AggregateRating" as const,
  ratingValue: "4.9",
  bestRating: "5",
  worstRating: "1",
  ratingCount: "91",
  reviewCount: "91"
};

// Canonical geo (Santo Domingo centroid as fallback — see memory entry).
// TODO: replace with the studio's actual coordinates when provided.
export const geoCoordinates = {
  "@type": "GeoCoordinates" as const,
  latitude: 18.4861,
  longitude: -69.9312
};

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
  // NOTE: intentionally NOT using `parentOrganization` here. GSC Rich Results flags the
  // nested `name` as a "duplicate name" warning, and the brand hierarchy is already
  // signalled via `sameAs` below (which links to the apex brand babulashotsrd.com).
  sameAs: [mainBrandUrl, bodaUrl, inmobiliariaUrl, droneUrl, santoDomingoHubUrl, "https://www.instagram.com/babulashotsrd/"]
};
