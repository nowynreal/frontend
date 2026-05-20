"use client";

import Link from "next/link";
import type { CSSProperties } from "react";
import { LuPhone } from "react-icons/lu";
import { LinkButton } from "@/components/ui/LinkButton";

export function Hero() {
  const heroStyle: CSSProperties = {
    backgroundImage:
      "radial-gradient(circle at 12% 10%, rgba(201, 162, 75, 0.25), transparent 45%), radial-gradient(circle at 80% 15%, rgba(255, 255, 255, 0.08), transparent 40%), linear-gradient(180deg, rgba(11,27,43,0.5) 0%, rgba(19,38,58,0.5) 100%), url('/home-bg.png')",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "right center",
    backgroundColor: "rgba(11,27,43,0.5)",
  };

  return (
    <>
      <section
        className="section-navy flex items-center border-b border-white/10 hero-bg-inline h-[600px] lg:h-[720px] relative z-10 overflow-hidden"
        style={heroStyle}
      >
        <div className="mx-auto flex w-full max-w-6xl px-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl space-y-6 text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#bf994c]">
              ABD'de yerel operasyon destegi
            </p>
            <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
              ABD'de sizin adiniza <br />
              <span className="text-[#bf994c]">sahada olan</span> bir ekip.
            </h1>
            <p className="max-w-2xl text-base leading-7 text-white/75 md:text-lg">
              Entrix Consulting, uluslararasi ureticilerin ABD pazarina girisini
              kolaylastirir. Dokumantasyon, uyumluluk, ithalatci iletisim ve
              yerel koordinasyon surecini birlikte yonetiriz.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <LinkButton
                href="/contact"
                label="Book a call"
                className="cta-gold-wave text-black shadow-md rounded-sm"
                startIcon={<LuPhone className="h-5 w-5 text-black" />}
              />
              <Link
                href="/services"
                className="rounded-lg border border-white/30 bg-transparent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                Nasil destek oluruz
              </Link>
            </div>
          </div>
          <div className="grid gap-4 text-sm text-white/80">
            <div className="relative hidden w-full max-w-md lg:block">
              <div className="rounded-2xl border border-white/20 p-5 backdrop-blur-xs">
                <div className="mb-4 flex items-center justify-between border-b border-white/20 pb-3">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/60">
                    Canli operasyon takibi
                  </span>
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="h-4 w-4 text-accent"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 3v18h18" />
                    <path d="M7 14l4-4 3 3 5-6" />
                  </svg>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 rounded-xl border border-white/20 bg-white/10 p-3">
                    <span className="text-xs font-semibold text-white">
                      FDA kaydi tamamlandi
                    </span>
                    <span className="ml-auto rounded-full bg-emerald-100 px-2 py-1 text-[10px] font-semibold text-emerald-700">
                      Onaylandi
                    </span>
                  </div>
                  <div className="flex items-center gap-3 rounded-xl border border-white/20 bg-white/10 p-3">
                    <span className="text-xs font-semibold text-white">
                      Gumruk beyannamesi
                    </span>
                    <span className="ml-auto h-5 w-5 animate-spin-slow rounded-full border-2 border-accent border-t-transparent" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <style jsx>{`
        .hero-bg-inline {
          background-position: right center;
        }
        @media (max-width: 1024px) {
          .hero-bg-inline {
            background-position: center top;
          }
        }
      `}</style>
    </>
  );
}
