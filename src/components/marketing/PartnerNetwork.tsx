import { partnerNetwork } from "@/lib/constants";

export function PartnerNetwork() {
  return (
    <div className="flex flex-wrap gap-3">
      {partnerNetwork.map((partner) => (
        <span
          key={partner}
          className="rounded-full border border-white/60 bg-white/75 px-4 py-2 text-sm text-ink/70 shadow-soft backdrop-blur"
        >
          {partner}
        </span>
      ))}
    </div>
  );
}
