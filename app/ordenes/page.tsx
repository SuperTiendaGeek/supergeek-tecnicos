"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AppShell } from "@/components/layout/AppShell";
import { StatusFilterDropdown } from "@/components/ui/StatusFilterDropdown";
import { ESTADOS_ORDEN } from "@/types";

type OrdenListado = {
  recordId: string;
  idVisible: string;
  clienteNombre: string;
  telefono: string;
  equipo: string;
  ingresaPor: string;
  estadoActual: string;
  fechaIngreso: string;
};

const formatDate = (value: string) => {
  if (!value) return "—";
  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) return value;
  return parsed.toLocaleDateString("es-CO", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

export default function OrdenesPage() {
  const [ordenes, setOrdenes] = useState<OrdenListado[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStatus, setSelectedStatus] = useState<string>("Todos");

  const openOrders = ordenes.length;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/ordenes");
        const json = await res.json();
        if (!res.ok || !json.success) {
          throw new Error(json.error || "No se pudieron cargar las órdenes");
        }
        setOrdenes(json.data ?? []);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Error desconocido");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const normalizedSearch = searchTerm.trim().toLowerCase();
  const filteredOrders = ordenes.filter((orden) => {
    const matchesSearch =
      !normalizedSearch ||
      orden.clienteNombre.toLowerCase().includes(normalizedSearch) ||
      orden.idVisible.toLowerCase().includes(normalizedSearch);

    const matchesStatus =
      selectedStatus === "Todos" || selectedStatus === ""
        ? true
        : (orden.estadoActual || "").toLowerCase() === selectedStatus.toLowerCase();

    return matchesSearch && matchesStatus;
  });

  return (
    <AppShell
      title="Órdenes"
      subtitle="Listado conectado a Airtable (solo lectura)"
      active="ordenes"
    >
      <div className="grid gap-6 xl:grid-cols-[minmax(0,4fr)_minmax(300px,1.1fr)]">
        <div className="space-y-4 w-full">
          <header className="rounded-2xl border border-zinc-900/70 bg-[#181818] shadow-[0_18px_40px_rgba(0,0,0,0.45)] px-6 py-5 flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-wide text-zinc-500">Panel</p>
              <h2 className="text-2xl font-semibold text-white">Órdenes activas</h2>
            </div>
            <div className="text-xs text-zinc-500">Airtable · solo lectura</div>
          </header>

          <section className="rounded-2xl border border-zinc-900/70 bg-[#181818] shadow-[0_18px_40px_rgba(0,0,0,0.45)] p-6 space-y-4 w-full">
            <div className="grid gap-3 lg:gap-4 lg:grid-cols-[minmax(0,2.5fr)_minmax(260px,1.2fr)_auto] items-end w-full">
              <label className="w-full">
                <span className="text-xs uppercase tracking-wide text-[#e3fc02] font-semibold">
                  Buscar por cliente o ID
                </span>
                <div className="mt-2 flex items-center gap-3 rounded-lg border border-[#e3fc02] bg-[#121212] px-4 py-3 text-sm text-zinc-200 shadow-[0_6px_18px_rgba(0,0,0,0.35)]">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 20 20"
                    className="h-4 w-4 text-zinc-500"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <circle cx="9" cy="9" r="5" />
                    <line x1="13.5" y1="13.5" x2="18" y2="18" strokeLinecap="round" />
                  </svg>
                  <input
                    placeholder="Cliente o ID"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full bg-transparent outline-none placeholder:text-zinc-500 text-sm"
                  />
                </div>
              </label>

              <div className="w-full">
                <StatusFilterDropdown
                  value={selectedStatus}
                  onChange={setSelectedStatus}
                  options={[
                    { value: "Todos", label: "Todos los estados" },
                    ...ESTADOS_ORDEN.map((estado) => ({ value: estado, label: estado })),
                  ]}
                />
              </div>

              <button
                type="button"
                className="h-[54px] inline-flex items-center justify-center rounded-lg bg-[#e3fc02] px-5 text-sm font-semibold text-black shadow-[0_10px_20px_rgba(227,252,2,0.25)] hover:brightness-95 transition whitespace-nowrap"
                disabled
              >
                + Nueva orden
              </button>
            </div>

            {loading && <div className="text-sm text-zinc-300">Cargando órdenes...</div>}
            {error && (
              <div className="text-sm text-red-400">
                Ocurrió un problema al cargar las órdenes: {error}
              </div>
            )}

            {!loading && !error && (
              <>
                {filteredOrders.length === 0 ? (
                  <div className="text-sm text-zinc-300">
                    No se encontraron órdenes con esos filtros.
                  </div>
                ) : (
                  <div className="overflow-hidden rounded-xl border border-zinc-900/80 bg-[#151515] w-full">
                    <div className="grid grid-cols-[90px_minmax(0,1.2fr)_minmax(0,2.2fr)_minmax(0,3.4fr)_minmax(0,1.4fr)_minmax(0,1.1fr)_minmax(0,0.9fr)] px-6 py-3 text-[12px] uppercase tracking-wide text-zinc-500 bg-[#0f0f0f]/70 border-b border-zinc-900/80">
                      <span>ID</span>
                      <span>Cliente</span>
                      <span>Equipo</span>
                      <span>Ingresa Por</span>
                      <span>Fecha</span>
                      <span>Estado</span>
                      <span className="text-right">Acción</span>
                    </div>
                    <div className="divide-y divide-zinc-900/80">
                      {filteredOrders.map((orden, idx) => (
                        <div
                          key={orden.recordId}
                          className={`grid grid-cols-[90px_minmax(0,1.2fr)_minmax(0,2.2fr)_minmax(0,3.4fr)_minmax(0,1.4fr)_minmax(0,1.1fr)_minmax(0,0.9fr)] items-center px-6 py-3 text-sm text-zinc-200 transition ${
                            idx % 2 === 0 ? "bg-[#161616]" : "bg-[#1a1a1a]"
                          } hover:bg-[#1d1d1d]`}
                        >
                          <span className="font-semibold text-zinc-100 truncate">{orden.idVisible}</span>
                          <span className="truncate">{orden.clienteNombre || "Cliente no disponible"}</span>
                          <span className="text-zinc-300 truncate">{orden.equipo || "Equipo no especificado"}</span>
                          <span className="text-zinc-300 truncate" title={orden.ingresaPor || "No disponible"}>
                            {orden.ingresaPor || "No disponible"}
                          </span>
                          <span className="text-zinc-400">{formatDate(orden.fechaIngreso)}</span>
                          <span>
                            <span className="inline-block rounded-full border border-[#e3fc02] bg-[#e3fc02]/10 px-3 py-1 text-[12px] font-semibold text-[#e3fc02]">
                              {orden.estadoActual || "Sin estado"}
                            </span>
                          </span>
                          <span className="flex justify-end">
                            <Link
                              href={`/ordenes/${encodeURIComponent(orden.recordId)}`}
                              className="rounded-md border border-zinc-800 bg-zinc-900 px-3 py-1 text-xs font-semibold text-white hover:border-[#e3fc02] hover:text-[#e3fc02] transition"
                            >
                              Ver
                            </Link>
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </>
            )}
          </section>
        </div>

        <aside className="space-y-4">
          <div className="rounded-2xl border border-zinc-900/70 bg-[#181818] shadow-[0_14px_32px_rgba(0,0,0,0.4)] p-4">
            <p className="text-sm font-semibold text-white">Órdenes abiertas</p>
            <p className="mt-2 text-3xl font-bold text-[#e3fc02]">{openOrders}</p>
            <p className="text-xs text-zinc-500 mt-1">Contador basado en lectura actual</p>
          </div>

          <div className="rounded-2xl border border-zinc-900/70 bg-[#181818] shadow-[0_14px_32px_rgba(0,0,0,0.4)] p-4 space-y-3">
            <p className="text-sm font-semibold text-white">Actividad reciente</p>
            <ul className="space-y-2 text-sm text-zinc-300">
              <li>Lectura en vivo desde Airtable</li>
              <li>Guardado de avances habilitado</li>
              <li>Próximamente: timeline visual</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-zinc-900/70 bg-[#181818] shadow-[0_14px_32px_rgba(0,0,0,0.4)] p-4 space-y-3">
            <p className="text-sm font-semibold text-white">Estado del sistema</p>
            <ul className="space-y-2 text-sm text-zinc-300">
              <li>UI: OK</li>
              <li>Backend (Airtable): OK</li>
              <li>Auth: pendiente</li>
            </ul>
          </div>
        </aside>
      </div>
    </AppShell>
  );
}
