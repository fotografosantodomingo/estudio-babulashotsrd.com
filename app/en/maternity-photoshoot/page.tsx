import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SesionDeFotosPage } from "@/components/SesionDeFotosPage";
import { enSesionPages } from "@/lib/sesionContent";
import { canonicalUrl, siteUrl } from "@/lib/seo";

const SLUG = "maternity-photoshoot";
const ES_MIRROR = canonicalUrl("/sesion-de-fotos-embarazo/");

export const metadata: Metadata = (() => {
  const p = enSesionPages[SLUG];
  return {
    title: p.title,
    description: p.metaDescription,
    alternates: {
      canonical: canonicalUrl(p.url),
      languages: {
        "es-DO": ES_MIRROR,
        es: ES_MIRROR,
        en: canonicalUrl(p.url),
        "x-default": ES_MIRROR
      }
    },
    openGraph: {
      title: p.title,
      description: p.metaDescription,
      url: canonicalUrl(p.url),
      type: "article",
      locale: "en_US",
      siteName: "Babula Shots Estudio",
      images: [{ url: `${siteUrl}${p.heroImage.src}`, alt: p.heroImage.alt }]
    },
    twitter: {
      card: "summary_large_image",
      title: p.title,
      description: p.metaDescription,
      images: [`${siteUrl}${p.heroImage.src}`]
    }
  };
})();

export default function Page() {
  const page = enSesionPages[SLUG];
  if (!page) notFound();
  return <SesionDeFotosPage page={page} locale="en" />;
}
