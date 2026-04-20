import { Sidebar } from "./Sidebar";
import { TopBar } from "./TopBar";
import React from "react";

type AppShellProps = {
  title: string;
  subtitle?: string;
  active?: Parameters<typeof Sidebar>[0]["active"];
  children: React.ReactNode;
  rightSlot?: React.ReactNode;
};

export function AppShell({ title, subtitle, active, children, rightSlot }: AppShellProps) {
  return (
    <div className="min-h-screen bg-[#141414] text-white">
      <Sidebar active={active} />
      <div className="ml-[264px] px-5 lg:px-8 py-8 space-y-6">
        <TopBar title={title} subtitle={subtitle} rightSlot={rightSlot} />
        <main className="space-y-6 w-full">{children}</main>
      </div>
    </div>
  );
}
