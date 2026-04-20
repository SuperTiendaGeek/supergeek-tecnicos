import { NextResponse } from "next/server";
import { fetchOrdenes } from "@/lib/airtable";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const ordenes = await fetchOrdenes(30);
    return NextResponse.json({ success: true, data: ordenes });
  } catch (error) {
    console.error("Error al obtener ordenes desde Airtable:", error);
    const message = error instanceof Error ? error.message : "Error inesperado";
    return NextResponse.json({ success: false, error: message }, { status: 500 });
  }
}
