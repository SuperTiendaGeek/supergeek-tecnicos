import Link from "next/link";
import { AutoPrint } from "@/components/print/AutoPrint";
import { EtiquetaOrden } from "@/components/print/EtiquetaOrden";
import { fetchOrdenById } from "@/lib/airtable";

export const dynamic = "force-dynamic";

type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function ImprimirEtiquetaOrdenPage({ params }: PageProps) {
  const { id } = await params;
  const orden = id ? await fetchOrdenById(id) : null;

  if (!orden) {
    return (
      <main style={{ padding: 24, fontFamily: "Arial, Helvetica, sans-serif" }}>
        <h1>Orden no encontrada</h1>
        <p>No se pudo cargar la etiqueta.</p>
        <Link href={id ? `/ordenes/${encodeURIComponent(id)}` : "/ordenes"}>Volver</Link>
      </main>
    );
  }

  return (
    <>
      <AutoPrint backHref={`/ordenes/${encodeURIComponent(id)}`} />
      <EtiquetaOrden orden={orden} />
    </>
  );
}
