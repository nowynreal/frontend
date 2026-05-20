const metrics = [
  {
    title: "ABD'de yerel temsil",
    detail: "Operasyonel iletisim ve takip icin sahada bir ekip.",
    iconPath: "M4 21V9l8-5 8 5v12H4zm4-2h8v-7H8v7z",
  },
  {
    title: "Dokumantasyon destegi",
    detail: "FDA, etiket ve ithalat evraklarini birlikte hazirlariz.",
    iconPath:
      "M7 4h7l5 5v11a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm6 1.5V9h3.5",
  },
  {
    title: "Ithalatci koordinasyonu",
    detail: "ABD ithalatci ve broker ile sureci birlikte yuruturuz.",
    iconPath: "M4 7h16M4 12h16M4 17h10",
  },
  {
    title: "Pazar erisimi",
    detail: "Distribitor ve perakende baglantilari icin destek.",
    iconPath: "M4 12l4 4 8-8",
  },
];

export function MetricsStrip() {
  return (
    <section className="section-sand py-12">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="mb-6 max-w-2xl">
          <h2 className="text-2xl font-semibold text-ink md:text-3xl">
            ABD girisinde yaninizdayiz
          </h2>
          <p className="mt-2 text-sm text-ink/70">
            Buyuk laflar yerine gunluk operasyon adimlarini birlikte yuruturuz.
          </p>
        </div>
        <div className="flex gap-5 overflow-x-auto pb-2 snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {metrics.map((metric) => (
            <div
              key={metric.title}
              className="snap-start rounded-2xl border border-ink/10 bg-white/90 p-6 shadow-soft backdrop-blur"
              style={{ minWidth: "240px" }}
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/25 text-accent">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d={metric.iconPath} />
                </svg>
              </div>
              <p className="text-sm font-semibold text-ink">{metric.title}</p>
              <p className="mt-2 text-sm text-ink/60">{metric.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
