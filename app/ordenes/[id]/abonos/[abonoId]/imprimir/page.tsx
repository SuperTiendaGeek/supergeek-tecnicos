import Link from "next/link";
import { AutoPrint } from "@/components/print/AutoPrint";
import { TicketAbono } from "@/components/print/TicketAbono";
import { fetchOrdenById } from "@/lib/airtable";

export const dynamic = "force-dynamic";

type PageProps = {
  params: Promise<{ id: string; abonoId: string }>;
};

export default async function ImprimirTicketAbonoPage({ params }: PageProps) {
  const { id, abonoId } = await params;
  const orden = id ? await fetchOrdenById(id) : null;
  const abono = orden?.abonosPorOrden.find(
    (item) => item.id === abonoId || item.idAbono === abonoId
  );

  if (!orden || !abono) {
    return (
      <main style={{ padding: 24, fontFamily: "Arial, Helvetica, sans-serif" }}>
        <h1>Abono no encontrado</h1>
        <p>No se pudo cargar el comprobante o el abono no pertenece a esta orden.</p>
        <Link href={id ? `/ordenes/${encodeURIComponent(id)}` : "/ordenes"}>Volver</Link>
      </main>
    );
  }

  return (
    <>
      <AutoPrint backHref={`/ordenes/${encodeURIComponent(id)}`} />
      <TicketAbono orden={orden} abono={abono} />
    </>
  );
}
