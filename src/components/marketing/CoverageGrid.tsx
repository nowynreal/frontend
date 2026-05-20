import { operationalCoverage } from "@/lib/constants";
import { Card } from "@/components/ui/Card";

export function CoverageGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {operationalCoverage.map((item) => (
        <Card key={item.title} className="space-y-2">
          <p className="text-sm font-semibold text-ink">{item.title}</p>
          <p className="text-sm text-ink/70">{item.detail}</p>
        </Card>
      ))}
    </div>
  );
}
