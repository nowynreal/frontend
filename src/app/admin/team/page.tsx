import { Card } from "@/components/ui/Card";
import { sampleTeam } from "@/lib/constants";

export default function TeamPage() {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-ink">Team</h2>
      <div className="grid gap-4 md:grid-cols-2">
        {sampleTeam.map((member) => (
          <Card key={member.id} className="space-y-2">
            <p className="text-sm font-semibold text-ink">{member.name}</p>
            <p className="text-sm text-ink/60">{member.role}</p>
            <p className="text-sm text-ink/60">{member.email}</p>
            <p className="text-xs text-ink/50">{member.territory}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
