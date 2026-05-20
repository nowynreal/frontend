import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { PageHero } from "@/components/marketing/PageHero";
import { caseStudies } from "@/lib/constants";

export default function CaseStudiesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader variant="hero" />
      <main className="flex-1">
        <PageHero
          kicker="Case Studies"
          title="Engagements built on real operational outcomes"
          subtitle="Each project includes compliance, documentation, and commercial activation tailored to the U.S. market."
        />
        <div className="relative z-10 mx-auto w-full max-w-5xl -mt-10 px-6 pb-20">
          <div className="section-shell space-y-10 rounded-3xl p-6 md:p-10">
            <div className="grid gap-6">
              {caseStudies.map((study) => (
                <Link key={study.slug} href={`/case-studies/${study.slug}`}>
                  <Card className="space-y-3 transition hover:-translate-y-1 hover:border-ink/20 hover:shadow-lg">
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-ink/50">
                        {study.sector}
                      </p>
                      <p className="text-lg font-semibold text-ink">
                        {study.company}
                      </p>
                    </div>
                    <p className="text-sm text-ink/70">
                      <span className="font-semibold text-ink">Challenge:</span>{" "}
                      {study.challenge}
                    </p>
                    <p className="text-sm text-ink/70">
                      <span className="font-semibold text-ink">Result:</span>{" "}
                      {study.result}
                    </p>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
