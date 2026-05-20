import { proofStrip } from "@/lib/constants";

export function ProofStrip() {
  return (
    <div className="grid gap-4 rounded-2xl border border-white/60 bg-white/80 px-6 py-4 shadow-soft backdrop-blur md:grid-cols-3">
      {proofStrip.map((item) => (
        <div key={item.title} className="space-y-1">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink/50">
            {item.title}
          </p>
          <p className="text-sm text-ink/70">{item.detail}</p>
        </div>
      ))}
    </div>
  );
}
