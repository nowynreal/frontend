const servicesDeep = [
  {
    title: "Uyumluluk ve dokumantasyon",
    description:
      "ABD girisi icin gerekli evraklari birlikte hazirlar ve kontrol ederiz.",
    accent: "bg-accent/25",
    bullets: [
      "FDA kayit rehberligi",
      "Etiket ve icerik kontrolu",
      "Ithalat evragi hazirligi",
    ],
  },
  {
    title: "Ithalatci ve broker koordinasyonu",
    description:
      "ABD tarafindaki paydaslarla sureci takip eder, iletisimi kurariz.",
    accent: "bg-ink/10",
    bullets: [
      "Ithalatci ile operasyonel iletisim",
      "Broker ve liman sureci takibi",
      "Giris oncesi kontrol listesi",
    ],
  },
  {
    title: "Pazar erisimi ve dagitim",
    description:
      "ABD'de dogru kanallara ulasmaniz icin pratik destek saglariz.",
    accent: "bg-accent/15",
    bullets: [
      "Distribitor ve perakende baglantilari",
      "Numune ve urun giris planlamasi",
      "Yerel iletisim ve koordinasyon",
    ],
  },
];

export function ServicesDeep() {
  return (
    <section id="services" className="section-warm scroll-mt-24 py-16">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-semibold text-ink md:text-4xl">
            Operasyonel destek alanlari
          </h2>
          <p className="mt-3 text-base text-ink/70">
            ABD'de sahada yurutulen isleri sizin adiniza takip ederiz.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {servicesDeep.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl border border-ink/10 bg-white/85 p-6"
            >
              <div
                className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl ${service.accent}`}
              />
              <h3 className="text-lg font-semibold text-ink">
                {service.title}
              </h3>
              <p className="mt-2 text-sm text-ink/60">{service.description}</p>
              <ul className="mt-4 space-y-2 text-sm text-ink/70">
                {service.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
