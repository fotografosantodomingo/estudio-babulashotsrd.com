import Link from "next/link";
import { NetworkPage, getNetworkPageMetadata } from "@/components/NetworkPage";

export const metadata = getNetworkPageMetadata("estudio", "precios", "es");

export default function Page() {
  return (
    <>
      <section className="section compact-section section-divider" style={{ paddingTop: "1.2rem", paddingBottom: 0 }}>
        <div className="wrap">
          <p className="section-tag">Sesión de fotos en Santo Domingo</p>
          <p style={{ marginTop: ".4rem" }}>
            Estos son los precios fijos por tipo de sesión. Para entender qué incluye cada formato, locaciones recomendadas, qué ropa usar y cómo prepararte, abre el catálogo completo:{" "}
            <Link href="/sesion-de-fotos/" className="inline-link">
              Sesión de fotos en Santo Domingo — guía completa
            </Link>
            .
          </p>
        </div>
      </section>
      <NetworkPage niche="estudio" type="precios" locale="es" />
    </>
  );
}
