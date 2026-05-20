import { industryNotes } from "@/lib/constants";
import { Card } from "@/components/ui/Card";

export function IndustriesPreview() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
      {industryNotes.map((item) => (
        <Card key={item.industry} className="space-y-2 p-4">
          <p className="text-sm font-semibold text-ink">{item.industry}</p>
          <p className="text-sm text-ink/60">{item.note}</p>
        </Card>
      ))}
    </div>
  );
}
