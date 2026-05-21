import {
  LuArrowRight,
  LuCircleDot,
  LuFileSpreadsheet,
  LuShip,
  LuStore,
} from "react-icons/lu";

const journeySteps = [
  {
    title: "Hazirlik",
    detail: "Ürün, etiket, belge, FDA ve uygunluk kontrolü.",
    icon: LuFileSpreadsheet,
  },
  {
    title: "Geçiş",
    detail: "İthalatçı, broker, gümrük ve lojistik koordinasyonu.",
    icon: LuShip,
  },
  {
    title: "Yerleşim",
    detail:
      "Distribütör görüşmeleri, numune gönderimi ve perakende bağlantıları.",
    icon: LuStore,
  },
];

const operationFlow = [
  "Ürün Analizi",
  "Evrak Hazırlığı",
  "ABD İthalatçı Koordinasyonu",
  "Giriş Planı",
  "Pazar Bağlantıları",
];

export function JourneySteps() {
  return (
    <section
      id="process"
      className="section-navy relative scroll-mt-24 overflow-hidden py-16 md:py-20"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_16%_15%,rgba(201,162,75,0.14),transparent_28%),radial-gradient(circle_at_82%_20%,rgba(255,255,255,0.08),transparent_26%),linear-gradient(180deg,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-size-[100%_100%,100%_100%,92px_92px,92px_92px] opacity-60" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/25 to-transparent" />
      <div className="mx-auto w-full max-w-6xl px-6 relative">
        <div className="max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#e0bf73]">
            Market-entry operation flow
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-white md:text-5xl">
            Türkiye’den ABD rafına uzanan operasyon hattı
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-7 text-white/72 md:text-lg">
            Biz sadece danışmanlık vermiyoruz; sürecin sahadaki uygulanabilir
            adımlarını birlikte yönetiyoruz.
          </p>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {journeySteps.map(({ title, detail, icon: Icon }, index) => (
            <article
              key={title}
              className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/6 p-6 backdrop-blur-xl shadow-[0_18px_50px_rgba(3,9,18,0.35)]"
            >
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),transparent_40%)] opacity-70" />
              <div className="relative flex items-start justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-[linear-gradient(180deg,rgba(201,162,75,0.2),rgba(255,255,255,0.06))] text-[#f2ddae]">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/45">
                      0{index + 1}
                    </p>
                    <h3 className="mt-1 text-xl font-semibold text-white">
                      {title}
                    </h3>
                  </div>
                </div>
                <span className="rounded-full border border-[#e0bf73]/25 bg-[#e0bf73]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#f2ddae]">
                  Aşama
                </span>
              </div>
              <p className="relative mt-5 text-sm leading-6 text-white/70">
                {detail}
              </p>
              <div className="relative mt-6 h-px bg-linear-to-r from-transparent via-white/15 to-transparent" />
              <div className="relative mt-4 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-white/50">
                <LuCircleDot
                  className="h-4 w-4 text-[#e0bf73]"
                  aria-hidden="true"
                />
                Sahada yürütülen operasyon adımı
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 overflow-hidden rounded-[30px] border border-white/10 bg-white/5 p-5 backdrop-blur-xl shadow-[0_18px_50px_rgba(3,9,18,0.32)]">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#e0bf73]">
                Operation flow
              </p>
              <h3 className="mt-2 text-lg font-semibold text-white">
                Tek hat üzerinde ilerleyen giriş planı
              </h3>
            </div>
            <p className="max-w-2xl text-sm leading-6 text-white/62 lg:text-right">
              Süreç, dokümandan dağıtım temasına kadar tek bir operasyon zinciri
              olarak yönetilir.
            </p>
          </div>

          <div className="mt-6 grid gap-3 lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr_auto_1fr] lg:items-center">
            {operationFlow.map((label, index) => (
              <div key={label} className="contents lg:contents">
                <div className="rounded-2xl border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.04))] px-4 py-3 text-center shadow-[0_10px_24px_rgba(3,9,18,0.18)]">
                  <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/45">
                    0{index + 1}
                  </div>
                  <div className="mt-1 text-sm font-semibold text-white">
                    {label}
                  </div>
                </div>
                {index < operationFlow.length - 1 ? (
                  <div className="mx-auto flex h-9 w-9 items-center justify-center text-[#e0bf73]">
                    <LuArrowRight className="h-5 w-5" aria-hidden="true" />
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
