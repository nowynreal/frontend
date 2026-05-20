import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import {
  services,
  processSteps,
  operationalCoverage,
  industries,
  trustCards,
} from "@/lib/constants";
import Link from "next/link";
import { LinkButton } from "@/components/ui/LinkButton";

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader variant="hero" />

      <main className="flex-1">
        {/* Intro: hero-less header */}
        <section className="relative bg-white/3 py-16">
          <div className="mx-auto w-full max-w-6xl px-6">
            <div className="grid gap-6 md:grid-cols-[1fr_0.9fr] md:items-center">
              <div>
                <h1 className="text-3xl font-semibold leading-tight md:text-4xl">
                  Full‑spectrum U.S. market entry support
                </h1>
                <p className="mt-4 max-w-2xl text-ink/70">
                  Each engagement is tailored to your industry, compliance
                  needs, and channel strategy. Pick a focused service or combine
                  into a program that moves you to market.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <LinkButton href="/contact" label="Talk to our team" />
                  <LinkButton
                    href="/contact"
                    label="Request brochure"
                    variant="outline"
                  />
                </div>
              </div>

              <div className="hidden md:flex items-center justify-center">
                <div className="rounded-2xl border border-ink/10 bg-white/6 p-6 shadow-soft">
                  <p className="font-semibold text-ink">Typical engagement</p>
                  <ol className="mt-3 space-y-2 text-ink/70">
                    <li>01 Assess — Discovery & roadmap</li>
                    <li>02 Prepare — Compliance readiness</li>
                    <li>03 Coordinate — Channel activation</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust strip */}
        <div className="mx-auto w-full max-w-6xl px-6 -mt-6">
          <div className="flex flex-col gap-3 rounded-2xl bg-white/6 border border-ink/6 p-4 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-6">
              {trustCards.slice(0, 3).map((t) => (
                <div key={t.title} className="flex items-start gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-ink text-white">
                    ✓
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-ink">{t.title}</p>
                    <p className="text-xs text-ink/70">{t.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex gap-3">
              <LinkButton href="/contact" label="Talk to our team" />
              <LinkButton
                href="/contact"
                label="Request brochure"
                variant="outline"
              />
            </div>
          </div>
        </div>

        {/* Services Grid with featured card */}
        <section
          id="services"
          className="relative z-10 mx-auto w-full max-w-6xl -mt-10 px-6 pb-20"
        >
          <div className="space-y-8">
            <div className="grid gap-6 md:grid-cols-2">
              {services.map((service, idx) => {
                const isFeatured = idx === 0;
                if (isFeatured) {
                  return (
                    <article
                      key={service.title}
                      className="group md:col-span-2 relative overflow-hidden rounded-3xl border-2 border-accent/40 bg-linear-to-br from-white/6 to-white/3 p-8 shadow-[0_30px_80px_rgba(11,27,43,0.18)]"
                    >
                      <div className="flex items-start gap-6">
                        <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-ink text-white text-xl">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden
                          >
                            <path
                              d="M12 2L15 8L22 9L17 14L18 21L12 18L6 21L7 14L2 9L9 8L12 2Z"
                              stroke="currentColor"
                              strokeWidth="0.6"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-semibold text-ink">
                            {service.title}
                          </h3>
                          <p className="mt-2 text-ink/70">
                            {service.description}
                          </p>
                          <div className="mt-4 flex items-center gap-4">
                            <LinkButton href="/contact" label={service.cta} />
                            <Link
                              href="/contact"
                              className="text-sm font-semibold text-accent"
                            >
                              Talk to sales →
                            </Link>
                          </div>
                        </div>
                      </div>
                    </article>
                  );
                }

                return (
                  <article
                    key={service.title}
                    className="group rounded-2xl border border-ink/10 bg-white/4 p-6 transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-accent/40"
                  >
                    <header className="mb-3 flex items-center gap-3">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-white/8 text-ink">
                        {service.title.includes("Compliance") ? (
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12 2L3 6V11C3 16 7 21 12 22C17 21 21 16 21 11V6L12 2Z"
                              stroke="currentColor"
                              strokeWidth="1.2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        ) : service.title.includes("Amazon") ||
                          service.title.includes("Market") ? (
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M3 12H21"
                              stroke="currentColor"
                              strokeWidth="1.2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M12 3L16 12L12 21L8 12L12 3Z"
                              stroke="currentColor"
                              strokeWidth="1.2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        ) : (
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle
                              cx="12"
                              cy="12"
                              r="8"
                              stroke="currentColor"
                              strokeWidth="1.2"
                            />
                          </svg>
                        )}
                      </span>
                      <div>
                        <h4 className="text-lg font-semibold text-ink">
                          {service.title}
                        </h4>
                        <p className="text-sm text-ink/60">
                          {service.description}
                        </p>
                      </div>
                    </header>

                    <div className="text-ink/70 mb-4">
                      <p className="text-sm">
                        {service.includes.slice(0, 3).join(" • ")}
                      </p>
                    </div>

                    <footer className="flex items-center justify-between">
                      <Link
                        href="/contact"
                        className="text-sm font-semibold text-accent"
                      >
                        {service.cta} →
                      </Link>
                      <Link
                        href="#"
                        className="text-sm text-ink/50 opacity-0 group-hover:opacity-100 transition"
                      >
                        Details
                      </Link>
                    </footer>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Process preview */}
        <section id="process" className="mx-auto w-full max-w-6xl px-6 py-16">
          <div className="section-shell rounded-3xl p-8">
            <h2 className="text-2xl font-semibold">How we work</h2>
            <ol className="mt-6 grid gap-4 md:grid-cols-4">
              {processSteps.slice(0, 4).map((step, i) => (
                <li key={step} className="flex flex-col items-start gap-3">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-ink text-white font-semibold">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <p className="font-semibold text-ink">{step}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Operations, Supplier, Industries sections (unchanged) */}
        <section
          id="operations"
          className="mx-auto w-full max-w-6xl px-6 py-16"
        >
          <div className="section-shell rounded-3xl p-8">
            <h2 className="text-2xl font-semibold">Operations</h2>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {operationalCoverage.map((op) => (
                <div key={op.title} className="p-4">
                  <p className="font-semibold text-ink">{op.title}</p>
                  <p className="text-ink/70">{op.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="supplier-qualification"
          className="mx-auto w-full max-w-6xl px-6 py-16"
        >
          <div className="section-shell rounded-3xl p-8">
            <h2 className="text-2xl font-semibold">Supplier Qualification</h2>
            <p className="mt-4 text-ink/70">
              We assess supplier readiness, documentation, and packaging so your
              products meet U.S. requirements.
            </p>
            <div className="mt-6">
              <LinkButton href="/supplier-qualification" label="Learn more" />
            </div>
          </div>
        </section>

        <section
          id="industries"
          className="mx-auto w-full max-w-6xl px-6 py-16"
        >
          <div className="section-shell rounded-3xl p-8">
            <h2 className="text-2xl font-semibold">Industries</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {industries.map((ind) => (
                <div key={ind} className="rounded-2xl border border-ink/10 p-4">
                  <p className="font-semibold text-ink">{ind}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
