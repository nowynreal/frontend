import Link from "next/link";
import Image from "next/image";
import { brand } from "@/lib/branding";
import { marketingNav } from "@/lib/constants";
import { LinkButton } from "@/components/ui/LinkButton";
import { cx } from "@/lib/utils";

type SiteHeaderProps = {
  variant?: "default" | "hero";
};

export function SiteHeader({ variant = "default" }: SiteHeaderProps) {
  const isHero = variant === "hero";

  return (
    <header
      className={cx(
        "sticky top-0 z-30 overflow-visible border-b backdrop-blur-xl transition-colors",
        isHero
          ? "border-white/10 bg-[linear-gradient(180deg,rgba(11,27,43,0.92),rgba(11,27,43,0.78))] text-white shadow-[0_18px_48px_rgba(11,27,43,0.22)]"
          : "border-ink/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.94),rgba(241,245,250,0.86))] text-ink shadow-[0_16px_40px_rgba(11,27,43,0.08)]",
      )}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/70 to-transparent" />
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-6 px-6 py-3 md:py-4">
        <Link href="/" className="inline-flex items-center">
          <Image
            src="/entrix-logo-5.png"
            alt={brand.companyName}
            width={160}
            height={36}
            priority
            className={cx("block", isHero ? "" : "")}
          />
        </Link>
        <nav
          className={cx(
            "hidden items-center gap-6 text-sm font-medium md:flex",
            isHero ? "text-white/75" : "text-ink/70",
          )}
        >
          {marketingNav.map((item) =>
            item.children && item.label !== "Company" ? (
              <div key={item.label} className="group relative">
                <button
                  type="button"
                  className={cx(
                    "inline-flex items-center gap-2 transition",
                    isHero ? "hover:text-white" : "hover:text-ink",
                  )}
                  aria-haspopup="true"
                >
                  {item.label}
                  <span className="text-[10px]">v</span>
                </button>
                <div className="invisible absolute left-0 top-full z-50 w-56 translate-y-1 pt-3 opacity-0 transition group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  <div className="rounded-2xl border border-ink/10 bg-white/95 p-3 shadow-soft backdrop-blur-xl">
                    <div className="flex flex-col gap-2 text-sm text-ink/70">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="rounded-lg px-2 py-1 transition hover:bg-ink/5 hover:text-ink"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={cx(
                  "transition",
                  isHero ? "hover:text-white" : "hover:text-ink",
                )}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>
        <details className="group relative md:hidden">
          <summary
            className={cx(
              "cursor-pointer list-none rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] transition",
              isHero
                ? "border-white/15 bg-white/8 text-white/80 hover:bg-white/12"
                : "border-ink/20 bg-white/55 text-ink/70 hover:bg-white/80",
            )}
          >
            Menu
          </summary>
          <div className="absolute right-0 mt-3 w-64 rounded-2xl border border-ink/10 bg-white/95 p-3 shadow-soft backdrop-blur-xl">
            <div className="flex flex-col gap-3 text-sm text-ink/70">
              {marketingNav.map((item) => (
                <div key={item.label} className="space-y-1">
                  <Link
                    href={item.href}
                    className="text-xs font-semibold uppercase tracking-[0.2em] text-ink"
                  >
                    {item.label}
                  </Link>
                  {item.children ? (
                    <div className="flex flex-col gap-2 pl-2">
                      {item.children.map((child) => (
                        <Link key={child.href} href={child.href}>
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </div>
              ))}
              <Link href="/login" className="font-semibold text-ink">
                Client Login
              </Link>
            </div>
          </div>
        </details>
        <div className="hidden items-center gap-3 md:flex">
          <LinkButton
            href="/login"
            label="Portal Girisi"
            variant="outline"
            className={
              isHero
                ? "border-white/20 bg-white/8 text-white hover:bg-white/12"
                : "border-ink/20 bg-white/70 text-ink"
            }
          />
          <LinkButton
            href="/contact"
            label="Gorusme Planla"
            className={
              isHero ? "cta-gold-wave text-black" : "cta-gold-wave text-black"
            }
          />
        </div>
      </div>
    </header>
  );
}
