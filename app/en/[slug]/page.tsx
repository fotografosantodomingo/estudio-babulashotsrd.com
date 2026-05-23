import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { EnglishServicePage } from "@/components/EnglishServicePage";
import { EN_SERVICE_PAGES } from "@/lib/enServicePages";
import { canonicalUrl } from "@/lib/seo";

type PageProps = { params: Promise<{ slug: string }> };

// Static EN routes that have their own dedicated page.tsx — exclude from this
// dynamic catch-all to avoid Next.js routing conflicts.
const RESERVED = new Set([
  "services", "servicios", "locations", "ubicaciones", "prices", "precios",
  "faq", "blog", "corporate-photography-studio-dr", "studio-photo-session-santo-domingo"
]);

export function generateStaticParams() {
  return EN_SERVICE_PAGES
    .filter((p) => !RESERVED.has(p.enSlug))
    .map((p) => ({ slug: p.enSlug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const entry = EN_SERVICE_PAGES.find((p) => p.enSlug === slug);
  if (!entry) return {};
  const pageUrl = canonicalUrl(entry.enPath);
  const esMirror = canonicalUrl(entry.esPath);
  return {
    title: entry.title,
    description: entry.description,
    alternates: {
      canonical: pageUrl,
      languages: {
        "es-DO": esMirror,
        es: esMirror,
        en: pageUrl,
        "x-default": esMirror
      }
    },
    openGraph: {
      title: entry.title,
      description: entry.description,
      url: pageUrl,
      type: "website",
      locale: "en_US",
      siteName: "Babula Shots Estudio",
      images: [
        {
          url: entry.imageUrl ?? "/wp-content/uploads/2024/06/Estudio-fotografo-santo-domingo.webp",
          width: 1600,
          height: 1067,
          alt: entry.h1
        }
      ]
    }
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  if (RESERVED.has(slug)) notFound();
  const entry = EN_SERVICE_PAGES.find((p) => p.enSlug === slug);
  if (!entry) notFound();
  return <EnglishServicePage entry={entry} />;
}
