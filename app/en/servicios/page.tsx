import type { Metadata } from "next";
import { NetworkPage } from "@/components/NetworkPage";
import { canonicalUrl } from "@/lib/seo";

// Alias for the legacy /en/servicios/ path. Same English content as /en/services/
// but canonical points at the EN slug so search engines index only one URL.
const enPath = "/en/services/";
const esPath = "/servicios/";
const title = "Studio Services | Babula Shots";
const description = "Coverage, deliverables and turnaround per studio service: portraits, corporate, food, product, maternity, fashion editorial.";

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
  return <NetworkPage niche="estudio" type="servicios" locale="en" />;
}
