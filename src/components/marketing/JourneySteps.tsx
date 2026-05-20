const journeySteps = [
  {
    title: "Hazirlik",
    detail: "Urun, hedef kanal ve ABD giris gerekliliklerini netlestiririz.",
  },
  {
    title: "Dokumantasyon",
    detail: "Etiket, icerik ve ithalat evraklarini birlikte hazirlariz.",
  },
  {
    title: "Koordinasyon",
    detail: "ABD ithalatci ve broker ile sureci takip ederiz.",
  },
  {
    title: "Pazar girisi",
    detail: "Numune, sevkiyat ve distribitor gorusmelerini ilerletiriz.",
  },
];

export function JourneySteps() {
  return (
    <section id="process" className="section-blue-sky scroll-mt-24 py-16">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-ink md:text-4xl">
            Birlikte nasil calisiyoruz?
          </h2>
          <p className="mt-3 text-base text-ink/70">
            Sureclerimizi net adimlara bolerek operasyonel seffaflik sagliyoruz.
          </p>
        </div>
        <div className="relative mt-10 grid gap-6 md:grid-cols-4">
          {journeySteps.map((step, index) => (
            <div key={step.title} className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border-4 border-white bg-white shadow-md">
                <span className="text-sm font-semibold text-ink">
                  {index + 1}
                </span>
              </div>
              <h4 className="mt-4 text-base font-semibold text-ink">
                {step.title}
              </h4>
              <p className="mt-2 text-sm text-ink/60">{step.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
