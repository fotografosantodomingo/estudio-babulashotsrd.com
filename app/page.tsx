import type { Metadata } from "next";
import { HomePage } from "@/components/HomePage";
import { getSeo } from "@/lib/estudioContent";
import { canonicalUrl } from "@/lib/seo";

const seo = getSeo("https://estudio.babulashotsrd.com/");

// CTR-tuned homepage title + description. Overrides the scraped WP SEO because
// GSC shows the page ranks pos 8.7 for "sesion de fotos" (979 impressions, 3
// clicks → 0.3% CTR). Leading with the top-query phrase + 4.9★ rating badge.
// Covers both top intent clusters: "sesion de fotos" + "estudio santo domingo".
const homepageTitle = "Sesión de Fotos · Estudio en Santo Domingo · 4.9★ Babula Shots";
const homepageDescription =
  "Estudio fotográfico profesional en Santo Domingo. Sesiones de retrato, comida, moda y corporativo. Reserva 809 720 9547 · 4.9★ 98 reseñas Google.";

export const metadata: Metadata = {
  title: homepageTitle,
  description: homepageDescription,
  alternates: {
    canonical: canonicalUrl("/"),
    languages: { "es-DO": canonicalUrl("/"), en: canonicalUrl("/en/"), "x-default": canonicalUrl("/") }
  },
  openGraph: {
    title: homepageTitle,
    description: homepageDescription,
    url: canonicalUrl("/"),
    type: "website",
    locale: "es_DO",
    siteName: "Babula Shots Estudio",
    images: seo?.ogImage
      ? [{ url: seo.ogImage }]
      : [
          {
            url: "/wp-content/uploads/2024/06/social-card-1200x630.webp",
            width: 1200,
            height: 630,
            alt: "Babula Shots Estudio"
          }
        ]
  }
};

export default function Page() {
  return <HomePage />;
}
