import { brand } from "@/lib/branding";
import { Button } from "@/components/ui/Button";

export function TopBar({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4 border-b border-ink/10 bg-white/70 px-6 py-4">
      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-ink/50">
          {brand.shortName}
        </p>
        <h1 className="text-xl font-semibold text-ink">{title}</h1>
        {subtitle ? (
          <p className="text-sm text-ink/60">{subtitle}</p>
        ) : null}
      </div>
      <Button variant="outline" size="sm" type="button">
        Sign out
      </Button>
    </div>
  );
}
