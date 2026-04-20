import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SUPER GEEK - App de Técnicos",
  description: "Sistema interno para gestión de órdenes de reparación",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}