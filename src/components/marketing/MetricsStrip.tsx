import {
  LuBuilding2,
  LuFileText,
  LuGlobe2,
  LuShieldCheck,
  LuArrowRight,
} from "react-icons/lu";

const metrics = [
  {
    title: "Local Representation & Operations",
    detail: "A U.S.-based team handling day-to-day coordination, follow-up, and execution on your behalf.",
    note: "Local presence",
    Icon: LuBuilding2,
  },
  {
    title: "Documentation & Compliance",
    detail: "Support for FDA, labeling, filing, and the operational paperwork needed to move products forward.",
    note: "Compliance support",
    Icon: LuFileText,
  },
  {
    title: "Customs & Entry Coordination",
    detail: "Readiness checks and coordination with importers, brokers, logistics, and U.S. counterparts.",
    note: "Entry coordination",
    Icon: LuShieldCheck,
  },
  {
    title: "Market Access & Commercial Networks",
    detail: "For suitable products, we may help evaluate distributor, retail, and market-entry opportunities through our local relationships.",
    note: "Opportunity driven",
    Icon: LuGlobe2,
  },
];

export function MetricsStrip() {
  return (
    <section className="section-navy relative overflow-hidden py-16 md:py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(201,162,75,0.16),transparent_30%),radial-gradient(circle_at_82%_14%,rgba(255,255,255,0.08),transparent_26%),linear-gradient(180deg,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-size-[100%_100%,100%_100%,84px_84px,84px_84px] opacity-55" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/25 to-transparent" />
      <div className="mx-auto w-full max-w-6xl px-6 relative">
        <div className="mb-8 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#e0bf73]">
            U.S. operations partner
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-white md:text-5xl">
            ABD girişinde yalnız değilsiniz
          </h2>
          <p className="mt-4 text-base leading-7 text-white/72 md:text-lg">
            Kapasitemiz, risk azaltan yerel operasyon desteği ve doğru ürünler için fırsatları değerlendirebilecek ticari bağlantılar sunar.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {metrics.map(({ title, detail, note, Icon }) => (
            <article
              key={title}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/6 p-6 backdrop-blur-xl shadow-[0_18px_50px_rgba(3,9,18,0.35)] transition-transform duration-200 hover:-translate-y-1 hover:border-[#e0bf73]/35 hover:bg-white/8"
            >
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),transparent_40%)] opacity-70" />
              <div className="absolute inset-x-0 bottom-0 h-24 bg-[radial-gradient(circle_at_bottom,rgba(201,162,75,0.14),transparent_72%)]" />

              <div className="relative flex items-start justify-between gap-3">
                <span className="rounded-full border border-[#e0bf73]/30 bg-[#e0bf73]/12 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#f2ddae]">
                  {note}
                </span>
                <span className="rounded-full border border-white/10 bg-white/6 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-white/55">
                  U.S. ready
                </span>
              </div>

              <div className="relative mt-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-[linear-gradient(180deg,rgba(201,162,75,0.2),rgba(255,255,255,0.06))] text-[#f2ddae] shadow-[0_12px_28px_rgba(201,162,75,0.16)]">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </div>

              <h3 className="relative mt-4 text-lg font-semibold text-white">
                {title}
              </h3>
              <p className="relative mt-2 text-sm leading-6 text-white/68">
                {detail}
              </p>

              <div className="relative mt-5 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-white/48">
                <LuArrowRight className="h-4 w-4 text-[#e0bf73]" aria-hidden="true" />
                Capability with local follow-through
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
