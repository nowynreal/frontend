import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { Card } from "@/components/ui/Card";
import { PageHero } from "@/components/marketing/PageHero";
import { caseStudies } from "@/lib/constants";

type CaseStudyPageProps = {
  params: { slug: string };
};

export default function CaseStudyPage({ params }: CaseStudyPageProps) {
  const study = caseStudies.find((item) => item.slug === params.slug);

  if (!study) {
    notFound();
  }

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader variant="hero" />
      <main className="flex-1">
        <PageHero
          kicker="Case Study"
          title={study.company}
          subtitle={study.summary}
        />
        <div className="relative z-10 mx-auto w-full max-w-5xl -mt-10 px-6 pb-20">
          <div className="section-shell space-y-8 rounded-3xl p-6 md:p-10">
            <div className="grid gap-6 md:grid-cols-[1.2fr_0.8fr]">
              <Card className="space-y-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-ink/50">
                    {study.sector}
                  </p>
                  <p className="text-lg font-semibold text-ink">
                    {study.focus}
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
              <Card className="space-y-3">
                <p className="text-xs uppercase tracking-[0.2em] text-ink/50">
                  Highlights
                </p>
                <ul className="space-y-2 text-sm text-ink/70">
                  {study.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
