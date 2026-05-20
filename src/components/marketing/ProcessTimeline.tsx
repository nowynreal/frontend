import { processSteps } from "@/lib/constants";

export function ProcessTimeline() {
  return (
    <div className="space-y-6">
      {processSteps.map((step, index) => (
        <div
          key={step}
          className="flex items-start gap-4 rounded-2xl border border-white/60 bg-white/85 p-4 shadow-soft backdrop-blur"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand text-sm font-semibold text-white">
            {index + 1}
          </div>
          <div>
            <p className="text-base font-semibold text-ink">{step}</p>
            <p className="text-sm text-ink/60">
              {index === 0
                ? "Confirm product scope, target channels, and commercial goals."
                : index === 1
                  ? "Review documentation, claims, and operational readiness."
                  : index === 2
                    ? "Build a compliance checklist with FDA and CBP requirements."
                    : index === 3
                      ? "Assemble the documentation pack and label adjustments."
                      : index === 4
                        ? "Confirm pricing, positioning, and buyer targeting."
                        : index === 5
                          ? "Coordinate outreach, sample shipments, and channel onboarding."
                          : "Report progress with clear next steps."}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
