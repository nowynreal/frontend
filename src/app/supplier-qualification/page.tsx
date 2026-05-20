import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { Card } from "@/components/ui/Card";
import { PageHero } from "@/components/marketing/PageHero";

const qualificationSteps = [
  {
    title: "Factory readiness review",
    detail: "Assess capacity, certifications, and production quality controls.",
  },
  {
    title: "Compliance documentation",
    detail: "Collect COAs, GMP, ingredient files, and traceability records.",
  },
  {
    title: "Packaging and labeling",
    detail: "Verify U.S. label format, claims language, and packaging specs.",
  },
  {
    title: "Logistics capability",
    detail: "Confirm lead times, INCOTERMS, and export documentation quality.",
  },
  {
    title: "Commercial alignment",
    detail: "Review pricing, MOQs, and distributor expectations.",
  },
];

export default function SupplierQualificationPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader variant="hero" />
      <main className="flex-1">
        <PageHero
          kicker="Supplier Qualification"
          title="Ensure suppliers meet U.S. buyer expectations"
          subtitle="We qualify Turkish manufacturers so buyers see consistent documentation, quality standards, and production readiness."
        />
        <div className="relative z-10 mx-auto w-full max-w-5xl -mt-10 px-6 pb-20">
          <div className="section-shell space-y-10 rounded-3xl p-6 md:p-10">
            <div className="grid gap-4">
              {qualificationSteps.map((step) => (
                <Card key={step.title} className="space-y-2">
                  <p className="text-sm font-semibold text-ink">{step.title}</p>
                  <p className="text-sm text-ink/70">{step.detail}</p>
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
