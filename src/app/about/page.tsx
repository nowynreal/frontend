import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { PageHero } from "@/components/marketing/PageHero";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader variant="hero" />
      <main className="flex-1">
        <PageHero
          kicker="About"
          title="A bridge between Turkish producers and U.S. opportunity"
          subtitle="Entrix Partners is built by market entry specialists, compliance advisors, and commercial operators who help Turkish companies launch successfully in the United States. We combine hands-on execution with strategic clarity so leadership teams can move quickly without sacrificing regulatory or brand standards."
        />
        <section className="relative overflow-hidden bg-linear-to-br from-accent/20 via-transparent to-transparent py-16">
          <div className="mx-auto w-full max-w-6xl px-6">
            <div className="grid gap-12 md:grid-cols-[1fr_1.1fr] md:items-center">
              <div className="space-y-6">
                <p className="inline-flex w-fit rounded-full border border-ink/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-ink/60">
                  Who we are
                </p>
                <h2 className="text-4xl font-semibold leading-tight text-ink md:text-5xl">
                  Local U.S. execution with a Turkish operator mindset
                </h2>
                <p className="max-w-2xl text-base leading-7 text-ink/70">
                  We embed alongside export teams to handle compliance,
                  documentation, and go-to-market operations. The result is
                  faster decisions, fewer surprises, and a clear path to U.S.
                  shelf readiness.
                </p>
              </div>
              <div className="grid gap-4">
                {[
                  {
                    title: "Compliance",
                    icon: "✓",
                    color: "from-accent/30",
                  },
                  {
                    title: "Operations",
                    icon: "⚙",
                    color: "from-blue-400/20",
                  },
                  {
                    title: "Commercial activation",
                    icon: "→",
                    color: "from-emerald-400/20",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className={`group rounded-2xl border border-ink/10 bg-linear-to-br ${item.color} to-transparent p-6 transition hover:border-ink/30 hover:shadow-lg`}
                  >
                    <div className="flex items-center gap-4">
                      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-ink text-lg font-bold text-white group-hover:scale-110 transition">
                        {item.icon}
                      </span>
                      <p className="text-lg font-semibold text-ink">
                        {item.title}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section-midnight relative overflow-hidden py-20">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-accent blur-3xl" />
            <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-blue-500 blur-3xl" />
          </div>
          <div className="relative z-10 mx-auto w-full max-w-6xl px-6">
            <div className="grid gap-12 md:grid-cols-[1.2fr_0.8fr]">
              <div className="space-y-6">
                <p className="inline-flex w-fit rounded-full border border-white/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
                  Our story
                </p>
                <h2 className="text-4xl font-semibold leading-tight text-white md:text-5xl">
                  Built to solve the real bottleneck
                </h2>
                <p className="max-w-2xl text-base leading-7 text-white/80">
                  We saw Turkish brands with strong products lose momentum in
                  the U.S. because operations, documentation, and regulatory
                  tasks moved too slowly.
                </p>
                <p className="max-w-2xl text-base leading-7 text-white/80">
                  Entrix exists to eliminate that friction: practical workflows
                  that make importer coordination, packaging updates, and market
                  entry decisions feel clear and controlled.
                </p>
              </div>
              <div className="grid gap-3">
                {[
                  { value: "7", label: "Step workflow" },
                  { value: "6", label: "Industry segments" },
                  { value: "3", label: "Execution lanes" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="group rounded-2xl border border-white/10 bg-linear-to-br from-white/10 to-white/5 p-6 transition hover:border-accent/50 hover:from-accent/20"
                  >
                    <p className="text-4xl font-bold text-white group-hover:text-accent transition">
                      {stat.value}
                    </p>
                    <p className="mt-2 text-xs uppercase tracking-[0.25em] text-white/60 group-hover:text-white/80 transition">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-linear-to-b from-sand to-white py-16">
          <div className="mx-auto w-full max-w-6xl px-6">
            <div className="grid gap-6 md:grid-cols-2">
              {[
                {
                  title: "What we do",
                  detail:
                    "We build the operational layer that keeps U.S. expansion steady: compliance workflows, importer coordination, and partner activation.",
                  label: "Our craft",
                  href: "/services",
                  linkText: "Learn more about our services",
                  linear: "from-accent/30",
                },
                {
                  title: "Built for operators, not just consultants",
                  detail:
                    "We sit with your team, share documentation progress, and keep the U.S. side moving so you can make fast, confident decisions.",
                  label: "Our difference",
                  href: "/references",
                  linkText: "View references",
                  linear: "from-blue-400/30",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className={`group relative overflow-hidden rounded-3xl border border-ink/10 bg-linear-to-br ${item.linear} to-transparent p-8 shadow-soft transition hover:border-ink/30 hover:shadow-lg`}
                >
                  <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-accent/10 blur-3xl opacity-0 transition group-hover:opacity-100" />
                  <div className="relative z-10 space-y-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-ink/50">
                      {item.label}
                    </p>
                    <h3 className="text-2xl font-semibold text-ink">
                      {item.title}
                    </h3>
                    <p className="text-sm text-ink/70">{item.detail}</p>
                    <Link
                      href={item.href}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-accent transition group-hover:gap-3"
                    >
                      {item.linkText}
                      <span aria-hidden className="text-base">
                        →
                      </span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-linear-to-br from-ink via-ink to-ink/95 py-20 text-white">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-accent blur-3xl" />
            <div className="absolute -right-40 -bottom-40 h-80 w-80 rounded-full bg-blue-500 blur-3xl" />
          </div>
          <div className="relative z-10 mx-auto w-full max-w-6xl px-6">
            <div className="mb-16 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
                Numbers
              </p>
              <h2 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
                Trust backed by execution
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base text-white/70">
                We focus on clarity, compliance, and delivery so your team can
                move with confidence.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  value: "7",
                  label: "Step workflow",
                  linear: "from-accent/40 via-accent/20",
                },
                {
                  value: "3",
                  label: "Execution lanes",
                  linear: "from-blue-400/40 via-blue-400/20",
                },
                {
                  value: "6",
                  label: "Industry segments",
                  linear: "from-emerald-400/40 via-emerald-400/20",
                },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className={`group relative overflow-hidden rounded-3xl border border-white/20 bg-linear-to-br ${stat.linear} to-transparent p-8 text-center transition hover:border-white/40 hover:shadow-xl`}
                >
                  <div className="absolute -inset-px bg-linear-to-br from-white/5 to-transparent opacity-0 rounded-3xl transition group-hover:opacity-100" />
                  <div className="relative z-10 space-y-4">
                    <p className="text-6xl font-black text-white group-hover:scale-110 transition">
                      {stat.value}
                    </p>
                    <p className="text-xs uppercase tracking-[0.25em] text-white/70 group-hover:text-white/90 transition">
                      {stat.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-linear-to-b from-cream to-white py-16">
          <div className="mx-auto w-full max-w-6xl px-6">
            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "Our mission",
                  detail:
                    "Make U.S. expansion actionable and compliant for Turkish exporters.",
                  icon: "✓",
                  color: "bg-linear-to-br from-accent/20 to-accent/5",
                },
                {
                  title: "Our approach",
                  detail:
                    "Partner with your internal team and deliver a clear execution roadmap.",
                  icon: "→",
                  color: "bg-linear-to-br from-blue-400/20 to-blue-400/5",
                },
                {
                  title: "Our network",
                  detail:
                    "U.S. compliance experts, distributors, retailers, and logistics partners.",
                  icon: "◆",
                  color: "bg-linear-to-br from-emerald-400/20 to-emerald-400/5",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className={`group relative rounded-2xl border border-ink/10 ${item.color} p-6 transition hover:border-ink/30 hover:shadow-lg`}
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-ink text-white text-lg font-bold group-hover:scale-110 transition">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-ink/70">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-midnight py-16">
          <div className="mx-auto w-full max-w-6xl px-6">
            <div className="rounded-3xl border border-white/10 bg-white/5 px-6 py-10 text-white md:px-10">
              <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
                    Ready to plan
                  </p>
                  <p className="mt-2 text-2xl font-semibold">
                    Let us map your U.S. entry in a focused working session.
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-ink transition hover:bg-accent/90"
                >
                  Schedule a consult
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
