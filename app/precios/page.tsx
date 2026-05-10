import { NetworkPage, getNetworkPageMetadata } from "@/components/NetworkPage";

export const metadata = getNetworkPageMetadata("estudio", "precios", "es");

export default function Page() {
  return <NetworkPage niche="estudio" type="precios" locale="es" />;
}
