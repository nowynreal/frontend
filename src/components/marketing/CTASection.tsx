import { LinkButton } from "@/components/ui/LinkButton";

export function CTASection() {
  return (
    <div className="rounded-3xl border border-white/15 bg-linear-to-br from-slate-900 via-slate-800 to-blue-900 px-8 py-12 text-white shadow-2xl">
      <div className="max-w-2xl space-y-4">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
          Ready to engage
        </p>
        <h3 className="text-3xl font-semibold">
          Build a U.S. market entry plan with a dedicated operations team
        </h3>
        <p className="text-sm text-white/70">
          Share your product scope and timeline. We will return a tailored plan
          with compliance, logistics, and buyer outreach milestones.
        </p>
        <div className="flex flex-wrap gap-3">
          <LinkButton href="/contact" label="Request a Quote" />
          <LinkButton
            href="/services"
            label="Review Services"
            variant="outline"
            className="border-white/40 text-white hover:border-white"
          />
        </div>
      </div>
    </div>
  );
}
