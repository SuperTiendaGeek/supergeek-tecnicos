import Link from "next/link";
import { useMemo } from "react";

type SidebarProps = {
  active?: "ordenes" | "clientes" | "tecnicos" | "configuracion";
};

const navItems: { key: SidebarProps["active"]; label: string; href?: string }[] = [
  { key: "ordenes", label: "Órdenes", href: "/ordenes" },
  { key: "clientes", label: "Clientes", href: "/clientes" },
  { key: "tecnicos", label: "Técnicos" },
  { key: "configuracion", label: "Configuración" },
];

export function Sidebar({ active }: SidebarProps) {
  const current = useMemo(() => active ?? null, [active]);

  return (
    <aside className="fixed inset-y-0 left-0 z-30 w-[264px] bg-[#0f0f0f] border-r border-zinc-900/70 shadow-[8px_0_32px_rgba(0,0,0,0.55)]">
      <div className="h-24 px-7 flex items-center border-b border-zinc-900/70 bg-gradient-to-r from-[#1d1c1c] via-[#141414] to-[#0e0e0e]">
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 rounded-xl bg-[#e3fc02] text-black font-black text-xl grid place-content-center tracking-tight shadow-[0_10px_25px_rgba(227,252,2,0.35)]">
            SG
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-lg font-semibold text-white tracking-tight">SUPER GEEK</span>
            <span className="text-xs text-zinc-400">App de Técnicos</span>
          </div>
        </div>
      </div>
      <nav className="px-4 py-6 space-y-1.5 text-sm">
        {navItems.map((item) => {
          const isActive = current === item.key;
          const className =
            "w-full px-3.5 py-3 rounded-lg transition flex items-center gap-3 border font-medium " +
            (isActive
              ? "border-[#e3fc02]/80 bg-[#e3fc02]/15 text-white shadow-inner shadow-[#e3fc02]/15"
              : "border-transparent text-zinc-300 hover:border-zinc-800 hover:bg-zinc-900/60 hover:text-white");

          const content = (
            <>
              <span className="h-1.5 w-1.5 rounded-full bg-[#e3fc02] opacity-80" />
              <span className="flex-1">{item.label}</span>
              {!item.href && (
                <span className="text-[10px] text-zinc-500 uppercase tracking-wide">Próx.</span>
              )}
            </>
          );

          return item.href ? (
            <Link key={item.key} href={item.href} className={className}>
              {content}
            </Link>
          ) : (
            <button key={item.key} type="button" className={className} disabled>
              {content}
            </button>
          );
        })}
      </nav>
    </aside>
  );
}
