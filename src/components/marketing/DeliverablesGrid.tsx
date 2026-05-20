import { deliverables } from "@/lib/constants";
import { Card } from "@/components/ui/Card";

export function DeliverablesGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {deliverables.map((item) => (
        <Card key={item.title} className="space-y-4">
          <div>
            <p className="text-sm font-semibold text-ink">{item.title}</p>
            <p className="text-xs uppercase tracking-[0.2em] text-ink/50">
              Included
            </p>
          </div>
          <ul className="space-y-2 text-sm text-ink/70">
            {item.bullets.map((bullet) => (
              <li key={bullet}>• {bullet}</li>
            ))}
          </ul>
        </Card>
      ))}
    </div>
  );
}
