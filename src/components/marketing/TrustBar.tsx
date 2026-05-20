import {
  LuShieldCheck,
  LuFileText,
  LuPackage,
  LuUsers,
  LuShare2,
} from "react-icons/lu";

const trustMarks = [
  { label: "FDA kayit\nrehberligi", Icon: LuShieldCheck },
  { label: "Etiket ve\nicerik kontrolu", Icon: LuFileText },
  { label: "Ithalat evraki\nhazirligi", Icon: LuPackage },
  { label: "ABD ithalatci\niletisim", Icon: LuUsers },
  { label: "Distribitor ve perakende baglantisi", Icon: LuShare2 },
];

export function TrustBar() {
  return (
    <section className="section-gold relative z-10 border-y border-ink/10 py-10">
      <div className="mx-auto w-full max-w-6xl px-6">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.3em] text-ink/60">
          Operasyonel kapsam ve ABD giris destegi
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-sm font-semibold text-ink/70">
          {trustMarks.map(({ label, Icon }) => (
            <div key={label} className="flex items-center gap-3">
              <Icon
                className="h-8 w-8 text-ink/90 md:h-10 md:w-10"
                aria-hidden="true"
              />
              <span className="text-sm md:text-base whitespace-pre-line">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
