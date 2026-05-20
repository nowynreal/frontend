import { caseStudiesPreview } from "@/lib/constants";

export function Testimonials() {
  const testimonials = caseStudiesPreview.slice(0, 2);

  return (
    <section id="testimonials" className="section-midnight scroll-mt-24 py-16">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-semibold text-white md:text-4xl">
            Musteri deneyimleri
          </h2>
          <p className="mt-2 text-base text-white/70">
            ABD'de yerel iletisim ve operasyon destegiyle ilerleyen calismalar.
          </p>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {testimonials.map((item) => (
            <div
              key={item.company}
              className="rounded-2xl border border-white/15 bg-white/10 p-6"
            >
              <p className="text-sm text-white/80">"{item.outcome}"</p>
              <div className="mt-6 flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/20 text-xs font-semibold text-white">
                  {item.company
                    .split(" ")
                    .map((word) => word[0])
                    .slice(0, 2)
                    .join("")}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">
                    {item.company}
                  </p>
                  <p className="text-xs uppercase tracking-[0.2em] text-white/60">
                    {item.focus}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
