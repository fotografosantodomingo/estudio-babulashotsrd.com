import { NetworkPage, getNetworkPageMetadata } from "@/components/NetworkPage";

export const metadata = getNetworkPageMetadata("estudio", "servicios", "es");

export default function Page() {
  return <NetworkPage niche="estudio" type="servicios" locale="es" />;
}
