import type { Metadata } from "next";
import { NetworkPage } from "@/components/NetworkPage";
import { canonicalUrl } from "@/lib/seo";

// Alias for the legacy /en/ubicaciones/ path. Same English content as /en/locations/
// but canonical points at the EN slug so search engines index only one URL.
const enPath = "/en/locations/";
const esPath = "/ubicaciones/";
const title = "Studio Locations | Babula Shots";
const description = "Cities and zones we cover for studio sessions in the Dominican Republic: Santo Domingo, Punta Cana, Santiago, Casa de Campo, Bavaro and 18+ more.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: canonicalUrl(enPath),
    languages: {
      "es-DO": canonicalUrl(esPath),
      en: canonicalUrl(enPath),
      "x-default": canonicalUrl(esPath)
    }
  },
  robots: { index: false, follow: true },
  openGraph: {
    title,
    description,
    url: canonicalUrl(enPath),
    type: "website",
    locale: "en_US",
    siteName: "Babula Shots Estudio"
  }
};

export default function Page() {
  return <NetworkPage niche="estudio" type="ubicaciones" locale="en" />;
}
