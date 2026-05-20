"use client";

import { RoleGate } from "@/components/auth/RoleGate";
import { AdminSidebar } from "@/components/layout/AdminSidebar";
import { TopBar } from "@/components/layout/TopBar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <RoleGate allow={["admin", "team_member"]}>
      <div className="flex min-h-screen bg-muted">
        <AdminSidebar />
        <div className="flex flex-1 flex-col">
          <TopBar
            title="CRM Dashboard"
            subtitle="Manage leads, clients, and delivery"
          />
          <main className="flex-1 bg-muted p-6">{children}</main>
        </div>
      </div>
    </RoleGate>
  );
}
