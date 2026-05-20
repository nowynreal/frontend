import Link from "next/link";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { PageHero } from "@/components/marketing/PageHero";
import { caseStudies, referenceLogos } from "@/lib/constants";

export default function ReferencesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader variant="hero" />
      <main className="flex-1">
        <PageHero
          kicker="References"
          title="Companies we have supported"
          subtitle="Each reference opens a dedicated case study with operational outcomes."
        />
        <div className="relative z-10 mx-auto w-full max-w-6xl -mt-10 px-6 pb-20">
          <div className="section-shell rounded-3xl p-6 md:p-10">
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {referenceLogos
                .filter((logo) => logo.caseStudySlug)
                .map((logo) => {
                  const study = caseStudies.find(
                    (item) => item.slug === logo.caseStudySlug,
                  );

                  if (!study) {
                    return null;
                  }

                  const initials = study.company
                    .split(" ")
                    .map((word) => word[0])
                    .slice(0, 2)
                    .join("")
                    .toUpperCase();

                  return (
                    <Link
                      key={study.slug}
                      href={`/case-studies/${study.slug}`}
                      className="group relative overflow-hidden rounded-3xl border border-ink/10 bg-white/85 p-6 shadow-soft transition hover:-translate-y-1 hover:border-ink/30 hover:shadow-xl"
                    >
                      <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-accent/20 blur-2xl opacity-0 transition group-hover:opacity-100" />
                      <div className="absolute -bottom-12 -left-12 h-28 w-28 rounded-full bg-ink/5 blur-2xl opacity-0 transition group-hover:opacity-100" />
                      <div className="relative space-y-4">
                        <div className="flex items-center gap-4">
                          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-ink text-sm font-semibold text-white">
                            {logo.type === "image" && logo.src ? (
                              <img
                                src={logo.src}
                                alt={`${logo.label} logo`}
                                className="h-8 w-auto"
                              />
                            ) : (
                              initials
                            )}
                          </div>
                          <div>
                            <p className="text-xs uppercase tracking-[0.2em] text-ink/50">
                              {study.sector}
                            </p>
                            <p className="text-lg font-semibold text-ink">
                              {study.company}
                            </p>
                          </div>
                        </div>
                        <p className="text-sm text-ink/70">{study.summary}</p>
                        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-ink/60 transition group-hover:text-ink">
                          View case study
                          <span className="text-sm">-&gt;</span>
                        </div>
                      </div>
                    </Link>
                  );
                })}
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
