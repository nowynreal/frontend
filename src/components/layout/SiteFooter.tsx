import Link from "next/link";
import { brand } from "@/lib/branding";
import { marketingNavFooter } from "@/lib/constants";

export function SiteFooter() {
  const initials = brand.shortName
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <footer className="section-midnight border-t border-white/10">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-6 py-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-sm font-semibold text-ink">
              {initials}
            </span>
            <div>
              <p className="text-sm font-semibold text-white">
                {brand.companyName}
              </p>
              <p className="text-xs text-white/60">{brand.slogan}</p>
            </div>
          </div>
          <p className="text-sm text-white/60">
            ABD'de yerel temsil, dokumantasyon destegi ve operasyonel iletisim
            sunariz.
          </p>
          <p className="text-sm text-white/70">{brand.contactEmail}</p>
        </div>
        <div className="space-y-3">
          <p className="text-sm font-semibold text-white">Kesfet</p>
          <div className="flex flex-col gap-2 text-sm text-white/70">
            {marketingNavFooter.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="space-y-3">
          <p className="text-sm font-semibold text-white">Operasyon</p>
          <div className="flex flex-col gap-2 text-sm text-white/70">
            <Link href="/workflows" className="hover:text-white">
              Ithalat sureci
            </Link>
            <Link href="/supplier-qualification" className="hover:text-white">
              Tedarikci hazirligi
            </Link>
            <span className="text-white/60">Koordinasyon agi</span>
            <Link href="/case-studies" className="hover:text-white">
              Ornek calismalar
            </Link>
            <span className="text-white/60">SSS</span>
          </div>
        </div>
        <div className="space-y-3">
          <p className="text-sm font-semibold text-white">Iletisim</p>
          <div className="flex flex-col gap-2 text-sm text-white/70">
            <Link href={brand.social.linkedin} className="hover:text-white">
              LinkedIn
            </Link>
            <Link href={brand.social.x} className="hover:text-white">
              X (Twitter)
            </Link>
            <Link href={brand.social.youtube} className="hover:text-white">
              YouTube
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-xs text-white/50">
        {brand.companyName} · ABD pazar giris operasyon destegi
      </div>
    </footer>
  );
}
