import Link from "next/link";
import { portalNav } from "@/lib/constants";

export function PortalSidebar() {
  return (
    <aside className="hidden h-full w-64 flex-col border-r border-ink/10 bg-white/90 p-6 md:flex">
      <div className="mb-8">
        <p className="text-xs uppercase tracking-[0.2em] text-ink/50">Client</p>
        <p className="text-lg font-semibold text-ink">Client Portal</p>
      </div>
      <nav className="flex flex-1 flex-col gap-2 text-sm font-medium text-ink/70">
        {portalNav.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="rounded-xl px-3 py-2 transition hover:bg-ink/5 hover:text-ink"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
