"use client";

import { useEffect, useState } from "react";
import type { UserRole } from "@/types/database";
import { supabase } from "@/lib/supabase/client";
import { LoadingState } from "@/components/ui/LoadingState";
import { ErrorState } from "@/components/ui/ErrorState";

type RoleGateProps = {
  allow: UserRole[];
  children: React.ReactNode;
};

export function RoleGate({ allow, children }: RoleGateProps) {
  const [role, setRole] = useState<UserRole | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    async function loadRole() {
      const localAdmin = localStorage.getItem("entrix_admin") === "true";
      if (localAdmin && isMounted) {
        setRole("admin");
        setLoading(false);
        return;
      }

      const { data } = await supabase.auth.getSession();
      const sessionRole = data.session?.user?.user_metadata?.role as
        | UserRole
        | undefined;

      if (isMounted) {
        setRole(sessionRole ?? null);
        setLoading(false);
      }
    }

    loadRole();

    return () => {
      isMounted = false;
    };
  }, []);

  if (loading) {
    return <LoadingState className="m-6" />;
  }

  if (!role || !allow.includes(role)) {
    return (
      <ErrorState className="m-6">
        Access denied. Please sign in with an authorized account.
      </ErrorState>
    );
  }

  return <>{children}</>;
}
