import { industries } from "@/lib/constants";
import Link from "next/link";

export function IndustriesCompact() {
  const list = industries.slice(0, 5);

  return (
    <section id="industries" className="section-sand scroll-mt-24 py-16">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-ink md:text-4xl">
              Uzman oldugumuz sektorler
            </h2>
            <p className="mt-2 text-sm text-ink/70">
              Her endustriye ozel regulasyon derinligi.
            </p>
          </div>
          <Link
            href="/industries"
            className="text-sm font-semibold text-accent transition"
          >
            Tumunu incele
          </Link>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-5">
          {list.map((industry) => (
            <div
              key={industry}
              className="glass-card flex flex-col items-center gap-3 rounded-xl bg-white/85 p-5 text-center text-xs font-semibold text-ink"
            >
              <span className="h-8 w-8 rounded-full bg-accent/20" />
              <span>{industry}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
