import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SesionDeFotosPage } from "@/components/SesionDeFotosPage";
import { sesionPages } from "@/lib/sesionContent";
import { canonicalUrl, siteUrl } from "@/lib/seo";

const SLUG = "sesion-de-fotos-cumpleanos";

export const metadata: Metadata = (() => {
  const p = sesionPages[SLUG];
  return {
    title: p.title,
    description: p.metaDescription,
    alternates: {
      canonical: canonicalUrl(p.url),
      languages: { "es-DO": canonicalUrl(p.url), "x-default": canonicalUrl(p.url) }
    },
    openGraph: {
      title: p.title,
      description: p.metaDescription,
      url: canonicalUrl(p.url),
      type: "article",
      locale: "es_DO",
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
  const page = sesionPages[SLUG];
  if (!page) notFound();
  return <SesionDeFotosPage page={page} />;
}
