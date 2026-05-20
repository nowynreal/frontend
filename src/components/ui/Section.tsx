import type { HTMLAttributes } from "react";
import { cx } from "@/lib/utils";

type SectionProps = HTMLAttributes<HTMLElement> & {
  kicker?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
};

export function Section({
  kicker,
  title,
  subtitle,
  align = "left",
  className,
  children,
  ...props
}: SectionProps) {
  const alignment = align === "center" ? "items-center text-center" : "";

  return (
    <section className={cx("space-y-8", className)} {...props}>
      <div className={cx("space-y-3", alignment)}>
        {kicker ? (
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-ink/50">
            {kicker}
          </p>
        ) : null}
        <h2 className="text-3xl font-semibold text-ink md:text-4xl">{title}</h2>
        {subtitle ? (
          <p className="max-w-3xl text-base leading-7 text-ink/70 md:text-lg">
            {subtitle}
          </p>
        ) : null}
      </div>
      <div className={cx("space-y-6", alignment)}>{children}</div>
    </section>
  );
}
