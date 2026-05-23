import { blogPosts } from "@/lib/blogPosts";

type LanguagePaths = { es: string; en: string };

const normalizePath = (pathname: string) => {
  if (!pathname || pathname === "/") return "/";
  const clean = pathname.split("?")[0].split("#")[0];
  return clean.endsWith("/") ? clean : `${clean}/`;
};

// Only fully bilingual pages get an EN counterpart. WP-imported Spanish slugs
// stay Spanish-only and the EN switcher hides on them (no 404s).
// EN-canonical slugs are English (/en/services/, /en/locations/, /en/prices/).
// /en/servicios/, /en/ubicaciones/, /en/precios/ also exist as aliases that
// render the same English content but point canonical to the EN slug.

// Static (top-level) bilingual pairs.
const staticPairs: LanguagePaths[] = [
  { es: "/", en: "/en/" },
  { es: "/servicios/", en: "/en/services/" },
  { es: "/ubicaciones/", en: "/en/locations/" },
  { es: "/precios/", en: "/en/prices/" },
  { es: "/faq/", en: "/en/faq/" },
  // Hand-translated deep service pages (the two highest-impression Spanish-only
  // pages by GSC 2026-05-10: corporate photography 213 imp/mo, studio session 166).
  { es: "/fotografia-corporativa-en-estudio-rd/", en: "/en/corporate-photography-studio-dr/" },
  { es: "/sesion-de-fotos-estudio-santo-domingo/", en: "/en/studio-photo-session-santo-domingo/" }
];

// Auto-generated bilingual blog post pairs. Posts without an `en` variant stay
// Spanish-only (the EN toggle on those pages falls back to /en/ homepage).
// Adding a new bilingual blog post in lib/blogPosts.ts automatically wires up
// the language switcher for it — no edit needed here.
const blogPairs: LanguagePaths[] = blogPosts
  .filter((p) => p.en?.enSlug)
  .map((p) => ({
    es: `/blog/${p.slug}/`,
    en: `/en/blog/${p.en!.enSlug}/`
  }));

const routePairs: LanguagePaths[] = [...staticPairs, ...blogPairs].map((pair) => ({
  es: normalizePath(pair.es),
  en: normalizePath(pair.en)
}));

export function languagePathsFor(pathname: string): LanguagePaths {
  const current = normalizePath(pathname);
  const match = routePairs.find((pair) => pair.es === current || pair.en === current);
  if (match) return match;
  // No EN counterpart for WP slugs — the EN switcher hides on these pages.
  return { es: current, en: "" };
}

export function allLanguageRoutePairs() {
  return routePairs;
}
