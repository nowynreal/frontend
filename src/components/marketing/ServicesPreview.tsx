import { services } from "@/lib/constants";
import { Card, CardBody, CardHeader, CardTitle } from "@/components/ui/Card";
import { LinkButton } from "@/components/ui/LinkButton";

export function ServicesPreview() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {services.slice(0, 4).map((service) => (
        <Card key={service.title}>
          <CardHeader>
            <CardTitle>{service.title}</CardTitle>
            <p className="text-sm text-ink/60">{service.description}</p>
          </CardHeader>
          <CardBody>
            <ul className="space-y-2 text-sm text-ink/70">
              {service.includes.slice(0, 3).map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
            <LinkButton
              href="/services"
              label="Explore service"
              variant="outline"
              className="mt-4"
            />
          </CardBody>
        </Card>
      ))}
    </div>
  );
}
