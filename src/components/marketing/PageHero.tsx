import Image from "next/image";
import { cx } from "@/lib/utils";

type PageHeroProps = {
  kicker: string;
  title: string;
  subtitle?: string;
};

type HeroVariant = {
  layout: "split" | "compact";
  imageFirst: boolean;
  shellClass: string;
  glowClassNames: string[];
  chips: string[];
};

const DEFAULT_HERO: HeroVariant = {
  layout: "split",
  imageFirst: true,
  shellClass: "page-hero",
  glowClassNames: [
    "absolute -right-40 -top-40 h-96 w-96 rounded-full bg-accent/25 blur-3xl",
    "absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-blue-500/25 blur-3xl",
  ],
  chips: ["Strategy", "Execution", "Support"],
};

const HERO_VARIANTS: Record<string, HeroVariant> = {
  about: {
    layout: "split",
    imageFirst: false,
    shellClass: "bg-[linear-gradient(180deg,#0e2134_0%,#081521_100%)]",
    glowClassNames: [
      "absolute -right-44 -top-36 h-96 w-96 rounded-full bg-accent/30 blur-3xl",
      "absolute -bottom-28 -left-24 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl",
    ],
    chips: ["Market entry", "Compliance", "Execution"],
  },
  "case studies": {
    layout: "split",
    imageFirst: true,
    shellClass: "bg-[linear-gradient(180deg,#0b1b2b_0%,#13263a_100%)]",
    glowClassNames: [
      "absolute -right-36 -top-28 h-80 w-80 rounded-full bg-emerald-400/20 blur-3xl",
      "absolute -bottom-32 -left-28 h-96 w-96 rounded-full bg-accent/25 blur-3xl",
    ],
    chips: ["Projects", "Outcomes", "Industries"],
  },
  "case study": {
    layout: "compact",
    imageFirst: false,
    shellClass: "bg-[linear-gradient(180deg,#0b1b2b_0%,#0f2236_100%)]",
    glowClassNames: [
      "absolute -right-28 -top-28 h-72 w-72 rounded-full bg-blue-500/25 blur-3xl",
      "absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-accent/20 blur-3xl",
    ],
    chips: ["Challenge", "Execution", "Result"],
  },
  contact: {
    layout: "compact",
    imageFirst: false,
    shellClass: "bg-[linear-gradient(180deg,#091826_0%,#10263d_100%)]",
    glowClassNames: [
      "absolute -right-28 top-0 h-72 w-72 rounded-full bg-emerald-400/20 blur-3xl",
      "absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-accent/18 blur-3xl",
    ],
    chips: ["Discovery", "Scope", "Next steps"],
  },
  faq: {
    layout: "compact",
    imageFirst: false,
    shellClass: "bg-[linear-gradient(180deg,#0b1b2b_0%,#15283d_100%)]",
    glowClassNames: [
      "absolute -right-32 -top-28 h-80 w-80 rounded-full bg-amber-400/20 blur-3xl",
      "absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-blue-500/18 blur-3xl",
    ],
    chips: ["Answers", "Timing", "Process"],
  },
  industries: {
    layout: "split",
    imageFirst: true,
    shellClass: "bg-[linear-gradient(180deg,#0c1d2e_0%,#10263d_100%)]",
    glowClassNames: [
      "absolute -right-40 -top-36 h-96 w-96 rounded-full bg-sky-400/22 blur-3xl",
      "absolute -bottom-28 left-0 h-72 w-72 rounded-full bg-accent/20 blur-3xl",
    ],
    chips: ["Food", "Consumer", "Industrial"],
  },
  partners: {
    layout: "split",
    imageFirst: false,
    shellClass: "bg-[linear-gradient(180deg,#091826_0%,#13263a_100%)]",
    glowClassNames: [
      "absolute -right-36 -top-36 h-80 w-80 rounded-full bg-accent/25 blur-3xl",
      "absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-emerald-400/20 blur-3xl",
    ],
    chips: ["Network", "Vetting", "Activation"],
  },
  process: {
    layout: "split",
    imageFirst: true,
    shellClass: "bg-[linear-gradient(180deg,#0b1b2b_0%,#0f2236_100%)]",
    glowClassNames: [
      "absolute -right-32 -top-32 h-80 w-80 rounded-full bg-blue-500/25 blur-3xl",
      "absolute -bottom-28 -left-24 h-72 w-72 rounded-full bg-accent/18 blur-3xl",
    ],
    chips: ["Discovery", "Build", "Launch"],
  },
  references: {
    layout: "compact",
    imageFirst: false,
    shellClass: "bg-[linear-gradient(180deg,#091826_0%,#11283d_100%)]",
    glowClassNames: [
      "absolute -right-24 -top-24 h-72 w-72 rounded-full bg-emerald-400/22 blur-3xl",
      "absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-blue-500/18 blur-3xl",
    ],
    chips: ["Proof", "Clients", "Outcomes"],
  },
  services: {
    layout: "split",
    imageFirst: true,
    shellClass: "bg-[linear-gradient(180deg,#0b1b2b_0%,#13263a_100%)]",
    glowClassNames: [
      "absolute -right-40 -top-40 h-96 w-96 rounded-full bg-accent/28 blur-3xl",
      "absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-sky-400/18 blur-3xl",
    ],
    chips: ["Strategy", "Operations", "Delivery"],
  },
  "supplier qualification": {
    layout: "split",
    imageFirst: false,
    shellClass: "bg-[linear-gradient(180deg,#0c1d2e_0%,#10263d_100%)]",
    glowClassNames: [
      "absolute -right-28 -top-28 h-80 w-80 rounded-full bg-amber-400/22 blur-3xl",
      "absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-accent/18 blur-3xl",
    ],
    chips: ["Audit", "Readiness", "Onboarding"],
  },
  workflows: {
    layout: "split",
    imageFirst: false,
    shellClass: "bg-[linear-gradient(180deg,#091826_0%,#13263a_100%)]",
    glowClassNames: [
      "absolute -right-36 -top-28 h-80 w-80 rounded-full bg-sky-400/24 blur-3xl",
      "absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-accent/18 blur-3xl",
    ],
    chips: ["Documents", "Approvals", "Coordination"],
  },
};

function getHeroVariant(kicker: string) {
  return HERO_VARIANTS[kicker.trim().toLowerCase()] ?? DEFAULT_HERO;
}

export function PageHero({ kicker, title, subtitle }: PageHeroProps) {
  const variant = getHeroVariant(kicker);

  return (
    <section
      className={cx(
        "relative overflow-hidden text-white",
        variant.layout === "compact"
          ? "py-16 md:py-20"
          : "md:min-h-[calc(100svh-5.75rem)]",
        variant.shellClass,
      )}
    >
      <div className="absolute inset-0 opacity-100">
        {variant.glowClassNames.map((className) => (
          <div key={className} className={className} />
        ))}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_35%),linear-gradient(180deg,transparent,rgba(0,0,0,0.08))]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pt-10">
        <div
          className={cx(
            "grid gap-12",
            variant.layout === "compact"
              ? "justify-items-center text-center"
              : "md:grid-cols-[1fr_1.05fr] md:items-center",
          )}
        >
          {variant.layout === "split" && variant.imageFirst ? (
            <HeroVisual />
          ) : null}

          <div
            className={cx(
              "flex flex-col gap-8",
              variant.layout === "compact"
                ? "max-w-3xl items-center"
                : variant.imageFirst
                  ? "md:order-2"
                  : "md:order-1",
            )}
          >
            <div
              className={cx(
                "space-y-4",
                variant.layout === "compact" && "max-w-3xl",
              )}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
                {kicker}
              </p>
              <h1
                className={cx(
                  "text-4xl font-semibold leading-tight md:text-5xl lg:text-6xl",
                  variant.layout === "compact" && "md:text-5xl lg:text-6xl",
                )}
              >
                {title}
              </h1>
              {subtitle ? (
                <p
                  className={cx(
                    "max-w-2xl text-base leading-7 text-white/80 md:text-lg",
                    variant.layout === "compact" && "mx-auto max-w-3xl",
                  )}
                >
                  {subtitle}
                </p>
              ) : null}
            </div>

            <div className="flex flex-wrap gap-3">
              {variant.chips.map((chip) => (
                <span
                  key={chip}
                  className="rounded-full border border-white/12 bg-white/8 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/75 backdrop-blur"
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>

          {variant.layout === "split" && !variant.imageFirst ? (
            <HeroVisual />
          ) : null}

          {variant.layout === "compact" ? <HeroVisual compact /> : null}
        </div>
      </div>
    </section>
  );
}

function HeroVisual({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className={cx("relative z-10 flex justify-center", compact ? "mt-2" : "")}
    >
      <div
        className={cx(
          "relative flex items-center justify-center rounded-4xl border border-white/12 bg-white/8 p-6 shadow-[0_24px_64px_rgba(0,0,0,0.24)] backdrop-blur-xl",
          compact ? "h-36 w-36 md:h-44 md:w-44" : "h-64 w-64 md:h-80 md:w-80",
        )}
      >
        <div className="absolute inset-0 rounded-4xl bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.14),transparent_45%)]" />
        <Image
          src="/entrix-icon-1.png"
          alt="Entrix Logo"
          width={240}
          height={240}
          className={cx(
            "relative z-10 object-contain drop-shadow-2xl",
            compact ? "h-24 w-24 md:h-28 md:w-28" : "h-32 w-32 md:h-44 md:w-44",
          )}
        />
      </div>
    </div>
  );
}
