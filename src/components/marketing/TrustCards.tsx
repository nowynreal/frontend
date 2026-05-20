import { trustCards } from "@/lib/constants";
import { Card, CardBody, CardHeader, CardTitle } from "@/components/ui/Card";

export function TrustCards() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {trustCards.map((card) => (
        <Card key={card.title} className="bg-white">
          <CardHeader>
            <CardTitle>{card.title}</CardTitle>
          </CardHeader>
          <CardBody>
            <p className="text-sm text-ink/70">{card.description}</p>
          </CardBody>
        </Card>
      ))}
    </div>
  );
}
