import { LuArrowRight, LuBuilding2, LuFileText, LuGlobe2, LuShieldCheck } from "react-icons/lu";
import { Card, CardBody, CardHeader, CardTitle } from "@/components/ui/Card";
import { LinkButton } from "@/components/ui/LinkButton";

const capabilityCards = [
  {
    title: "Local Representation",
    description: "U.S.-based team owning day-to-day operations.",
    bullets: ["Assigned account lead", "Same-day US response", "Operational ownership"],
    Icon: LuBuilding2,
  },
  {
    title: "Documentation & Compliance",
    description: "Label, FDA and import paperwork prepared for review.",
    bullets: ["Label & claims review", "Filing readiness", "Importer-ready files"],
    Icon: LuFileText,
  },
  {
    title: "Customs & Entry",
    description: "Coordination with importers, brokers and 3PLs for entry readiness.",
    bullets: ["Broker & importer liaison", "Entry readiness checks", "3PL coordination"],
    Icon: LuShieldCheck,
  },
  {
    title: "Market Access",
    description: "We may evaluate distributor, retail and channel opportunities.",
    bullets: ["Distributor review", "Retail evaluation", "Introductions"],
    Icon: LuGlobe2,
  },
];

export function ServicesPreview() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {capabilityCards.map(({ title, description, bullets, Icon }) => (
        <Card
          key={title}
          className="group relative overflow-hidden border border-white/10 bg-white/6 p-0 shadow-[0_16px_40px_rgba(3,9,18,0.12)] backdrop-blur-xl"
        >
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),transparent_40%)] opacity-70" />
          <div className="absolute inset-x-0 bottom-0 h-20 bg-[radial-gradient(circle_at_bottom,rgba(201,162,75,0.12),transparent_72%)]" />
          <CardHeader className="relative mb-0 p-6 pb-4">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#e0bf73]">
                  U.S. operations partner
                </p>
                <CardTitle className="mt-3 text-xl text-white">{title}</CardTitle>
              </div>
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-[linear-gradient(180deg,rgba(201,162,75,0.2),rgba(255,255,255,0.06))] text-[#f2ddae]">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </div>
            </div>
            <p className="mt-3 max-w-[34ch] text-sm leading-6 text-white/70">
              {description}
            </p>
          </CardHeader>

          <CardBody className="relative p-6 pt-0">
            <ul className="space-y-2 text-sm text-white/78">
              {bullets.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#e0bf73]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-5 flex items-center justify-between gap-3 border-t border-white/10 pt-4 text-sm text-white/70">
              <span className="font-semibold">Next:</span>
              <LinkButton
                href="/contact"
                label="Talk to our team"
                variant="primary"
                className="rounded-full bg-[linear-gradient(180deg,#e2bf73,#bf994c)] text-black"
              />
            </div>
          </CardBody>
        </Card>
      ))}
    </div>
  );
}
