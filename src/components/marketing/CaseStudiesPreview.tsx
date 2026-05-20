import { caseStudiesPreview } from "@/lib/constants";
import { Card } from "@/components/ui/Card";

export function CaseStudiesPreview() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {caseStudiesPreview.map((study) => (
        <Card key={study.company} className="space-y-3">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-ink/50">
              {study.focus}
            </p>
            <p className="text-lg font-semibold text-ink">{study.company}</p>
          </div>
          <p className="text-sm text-ink/70">{study.outcome}</p>
        </Card>
      ))}
    </div>
  );
}
