import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { Card } from "@/components/ui/Card";
import { PageHero } from "@/components/marketing/PageHero";

const workflowSteps = [
  {
    title: "Scope & product assessment",
    detail:
      "Confirm product category, target channels, and U.S. compliance exposure.",
  },
  {
    title: "Compliance checklist",
    detail:
      "Define FDA, CBP, labeling, and documentation requirements by category.",
  },
  {
    title: "Documentation pack",
    detail:
      "Assemble COAs, ingredient specs, HS codes, and shipping documentation.",
  },
  {
    title: "Market entry assets",
    detail:
      "Prepare buyer-ready decks, pricing sheets, and positioning summaries.",
  },
  {
    title: "Logistics readiness",
    detail: "Coordinate broker, 3PL, and importer-of-record onboarding.",
  },
  {
    title: "Launch & reporting",
    detail:
      "Execute outreach and track progress with weekly operational updates.",
  },
];

export default function WorkflowsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader variant="hero" />
      <main className="flex-1">
        <PageHero
          kicker="Workflows"
          title="Import and market entry workflow"
          subtitle="We standardize cross-border operations so Turkish manufacturers can enter the U.S. market with predictable timelines and compliant shipments."
        />
        <div className="relative z-10 mx-auto w-full max-w-5xl -mt-10 px-6 pb-20">
          <div className="section-shell space-y-10 rounded-3xl p-6 md:p-10">
            <div className="grid gap-4">
              {workflowSteps.map((step, index) => (
                <Card key={step.title} className="flex gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand text-sm font-semibold text-white">
                    {index + 1}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-ink">
                      {step.title}
                    </p>
                    <p className="text-sm text-ink/70">{step.detail}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
