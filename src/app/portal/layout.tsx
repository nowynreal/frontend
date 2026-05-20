"use client";

import { RoleGate } from "@/components/auth/RoleGate";
import { PortalSidebar } from "@/components/layout/PortalSidebar";
import { TopBar } from "@/components/layout/TopBar";

export default function PortalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <RoleGate allow={["client"]}>
      <div className="flex min-h-screen bg-muted">
        <PortalSidebar />
        <div className="flex flex-1 flex-col">
          <TopBar
            title="Client Portal"
            subtitle="Track projects, documents, and next steps"
          />
          <main className="flex-1 bg-muted p-6">{children}</main>
        </div>
      </div>
    </RoleGate>
  );
}
