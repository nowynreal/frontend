import { referenceLogos } from "@/lib/constants";

export function LogoMarquee() {
  return (
    <section id="references" className="scroll-mt-24 bg-white py-10">
      <div className="mx-auto w-full max-w-6xl px-6">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.3em] text-ink/50">
          Referanslarimiz
        </p>
        <div className="marquee mt-6">
          <div className="marquee-track">
            {referenceLogos.concat(referenceLogos).map((logo, index) => (
              <div key={`${logo.label}-${index}`} className="marquee-item">
                {logo.type === "image" ? (
                  <a
                    href={logo.href}
                    className="logo-plain"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src={logo.src}
                      alt={`${logo.label} logo`}
                      className={`${logo.sizeClass ?? "h-10"} w-auto min-w-24`}
                    />
                  </a>
                ) : (
                  <div className="logo-plain">{logo.label}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
