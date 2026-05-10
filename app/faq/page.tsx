import { NetworkPage, getNetworkPageMetadata } from "@/components/NetworkPage";

export const metadata = getNetworkPageMetadata("estudio", "faq", "es");

export default function Page() {
  return <NetworkPage niche="estudio" type="faq" locale="es" />;
}
