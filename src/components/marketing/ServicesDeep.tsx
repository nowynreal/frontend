import { LuFileText, LuMapPin, LuShieldCheck, LuTruck } from "react-icons/lu";

const servicesDeep = [
  {
    step: "01",
    title: "Uygunluk Kontrolü",
    description: "FDA, etiket, içerik ve ürün kategorisi ön kontrolü.",
    status: "Hazırlık aşaması",
    Icon: LuShieldCheck,
  },
  {
    step: "02",
    title: "Evrak Hazırlığı",
    description:
      "İthalat dosyası, etiket bilgileri ve gerekli formlar düzenlenir.",
    status: "Dosya işleniyor",
    Icon: LuFileText,
  },
  {
    step: "03",
    title: "ABD Tarafı Koordinasyon",
    description:
      "İthalatçı, broker, depo/liman ve yerel paydaşlarla süreç takip edilir.",
    status: "Operasyon akışı",
    Icon: LuTruck,
  },
  {
    step: "04",
    title: "Pazar Bağlantıları",
    description:
      "Distribütör, perakende ve yerel satış kanalları için giriş planı oluşturulur.",
    status: "Pazar açılımı",
    Icon: LuMapPin,
  },
];

export function ServicesDeep() {
  return (
    <section
      id="services"
      className="section-midnight relative scroll-mt-24 overflow-hidden py-16 md:py-20"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(201,162,75,0.18),transparent_34%),radial-gradient(circle_at_82%_18%,rgba(255,255,255,0.08),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-size-[100%_100%,100%_100%,88px_88px,88px_88px] opacity-70" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/30 to-transparent" />
      <div className="mx-auto w-full max-w-6xl px-6 relative">
        <div className="max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#e0bf73]">
            ABD operasyon takip paneli
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-white md:text-5xl">
            ABD pazarına girişte yalnız değilsiniz — süreci sizin adınıza takip
            eden yerel ekip.
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-7 text-white/72 md:text-lg">
            Evrak, uygunluk, ithalatçı koordinasyonu ve dağıtım bağlantılarını
            tek bir operasyon akışında yönetiyoruz.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {servicesDeep.map(({ step, title, description, status, Icon }) => (
            <article
              key={title}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/6 p-5 shadow-[0_18px_50px_rgba(3,9,18,0.35)] backdrop-blur-xl transition-transform duration-200 hover:-translate-y-1 hover:border-[#e0bf73]/35 hover:bg-white/8"
            >
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),transparent_38%)] opacity-70" />
              <div className="absolute inset-x-0 bottom-0 h-24 bg-[radial-gradient(circle_at_bottom,rgba(201,162,75,0.14),transparent_70%)]" />
              <div className="relative flex items-start justify-between gap-3">
                <span className="rounded-full border border-[#e0bf73]/35 bg-[#e0bf73]/12 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#f2ddae]">
                  {step}
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/6 px-3 py-1 text-[11px] font-medium text-white/65">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_0_3px_rgba(16,185,129,0.15)]" />
                  {status}
                </span>
              </div>

              <div className="relative mt-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-[linear-gradient(180deg,rgba(201,162,75,0.2),rgba(255,255,255,0.06))] text-[#f2ddae] shadow-[0_12px_28px_rgba(201,162,75,0.16)]">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </div>

              <h3 className="relative mt-4 text-lg font-semibold text-white">
                {title}
              </h3>
              <p className="relative mt-2 text-sm leading-6 text-white/68">
                {description}
              </p>

              <div className="relative mt-5 flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-white/45">
                <span className="h-px flex-1 bg-linear-to-r from-white/0 via-white/20 to-white/0" />
                <span>Operasyon akışı</span>
                <span className="h-px flex-1 bg-linear-to-r from-white/0 via-white/20 to-white/0" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
