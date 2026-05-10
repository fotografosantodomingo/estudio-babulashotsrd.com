import type { Metadata } from "next";
import { NetworkPage } from "@/components/NetworkPage";
import { canonicalUrl } from "@/lib/seo";

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
  openGraph: {
    title,
    description,
    url: canonicalUrl(enPath),
    type: "website",
    locale: "en_US",
    siteName: "Babula Shots Estudio"
  },
  twitter: { card: "summary_large_image", title, description }
};

export default function Page() {
  return <NetworkPage niche="estudio" type="ubicaciones" locale="en" />;
}
