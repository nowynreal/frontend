import Link from "next/link";

export function ChecklistBanner() {
  return (
    <section className="mx-auto mb-16 w-full max-w-6xl px-6">
      <div className="rounded-3xl border border-white/15 bg-[linear-gradient(180deg,#0b1b2b_0%,#13263a_100%)] px-8 py-10 text-white">
        <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-semibold md:text-3xl">
              ABD girisine hazir misiniz?
            </h2>
            <p className="mt-2 text-sm text-white/70 md:text-base">
              Ithalat oncesi kontrol listemiz ile evrak ve iletisim adimlarini
              netlestirin.
            </p>
          </div>
          <div className="flex flex-col items-start">
            <Link
              href="/contact"
              className="rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-ink"
            >
              Checklist indir (PDF)
            </Link>
            <p className="mt-2 text-[10px] uppercase tracking-[0.3em] text-white/60">
              Guncel liste
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
