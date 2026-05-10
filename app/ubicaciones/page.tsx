import { NetworkPage, getNetworkPageMetadata } from "@/components/NetworkPage";

export const metadata = getNetworkPageMetadata("estudio", "ubicaciones", "es");

export default function Page() {
  return <NetworkPage niche="estudio" type="ubicaciones" locale="es" />;
}
