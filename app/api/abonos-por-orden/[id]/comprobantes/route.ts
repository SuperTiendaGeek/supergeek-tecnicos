import { NextResponse } from "next/server";
import { addComprobanteToAbonoPorOrdenById } from "@/lib/airtable";

export const dynamic = "force-dynamic";

type Params = { params: Promise<{ id: string }> };
const MAX_ATTACHMENT_SIZE_BYTES = 5 * 1024 * 1024;

export async function POST(request: Request, { params }: Params) {
  const { id } = await params;

  if (!id) {
    return NextResponse.json(
      { success: false, error: "Falta id de abono por orden" },
      { status: 400 }
    );
  }

  const formData = await request.formData();
  const maybeFile = formData.get("comprobanteArchivo");

  if (!(maybeFile instanceof File) || maybeFile.size <= 0) {
    return NextResponse.json(
      { success: false, error: "Debes seleccionar un archivo de comprobante." },
      { status: 400 }
    );
  }

  if (maybeFile.size > MAX_ATTACHMENT_SIZE_BYTES) {
    return NextResponse.json(
      { success: false, error: "El comprobante excede 5MB. Sube un archivo más liviano." },
      { status: 400 }
    );
  }

  const isAllowedType =
    maybeFile.type.startsWith("image/") || maybeFile.type === "application/pdf" || maybeFile.type === "";
  if (!isAllowedType) {
    return NextResponse.json(
      { success: false, error: "El comprobante debe ser una imagen o PDF." },
      { status: 400 }
    );
  }

  try {
    const bytes = await maybeFile.arrayBuffer();
    const result = await addComprobanteToAbonoPorOrdenById({
      abonoPorOrdenRecordId: id,
      comprobanteArchivo: {
        filename: maybeFile.name || `comprobante-${Date.now()}`,
        contentType: maybeFile.type || "application/octet-stream",
        fileBase64: Buffer.from(bytes).toString("base64"),
      },
    });

    return NextResponse.json(
      { success: true, data: result.abono, warning: result.warning ?? null },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error al agregar comprobante al abono", error);
    const message = error instanceof Error ? error.message : "Error inesperado";
    return NextResponse.json({ success: false, error: message }, { status: 500 });
  }
}
