import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { EmptyState } from "@/components/ui/EmptyState";
import { sampleClientDashboard } from "@/lib/constants";

export default function ClientDashboardPage() {
  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-3">
        <Card className="space-y-2">
          <p className="text-xs uppercase tracking-[0.2em] text-ink/50">
            Company
          </p>
          <p className="text-lg font-semibold text-ink">
            {sampleClientDashboard.companyName}
          </p>
          <p className="text-sm text-ink/60">Active Project</p>
          <p className="text-sm text-ink/80">
            {sampleClientDashboard.activeProject}
          </p>
        </Card>
        <Card className="space-y-2">
          <p className="text-xs uppercase tracking-[0.2em] text-ink/50">
            Current Phase
          </p>
          <p className="text-lg font-semibold text-ink">
            {sampleClientDashboard.currentPhase}
          </p>
          <Badge tone="success">{sampleClientDashboard.status}</Badge>
        </Card>
        <Card className="space-y-2">
          <p className="text-xs uppercase tracking-[0.2em] text-ink/50">
            Next Action
          </p>
          <p className="text-lg font-semibold text-ink">
            {sampleClientDashboard.nextAction}
          </p>
          <p className="text-sm text-ink/60">Due within 5 business days</p>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="space-y-4">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-ink/50">
              Missing Documents
            </p>
            <p className="text-lg font-semibold text-ink">
              Items needed to stay on schedule
            </p>
          </div>
          {sampleClientDashboard.missingDocuments.length ? (
            <ul className="space-y-2 text-sm text-ink/70">
              {sampleClientDashboard.missingDocuments.map((doc) => (
                <li key={doc}>• {doc}</li>
              ))}
            </ul>
          ) : (
            <EmptyState>No missing documents right now.</EmptyState>
          )}
        </Card>
        <Card className="space-y-4">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-ink/50">
              Recent Updates
            </p>
            <p className="text-lg font-semibold text-ink">
              Latest activity from your account lead
            </p>
          </div>
          <ul className="space-y-2 text-sm text-ink/70">
            {sampleClientDashboard.recentUpdates.map((update) => (
              <li key={update}>• {update}</li>
            ))}
          </ul>
        </Card>
      </div>
    </div>
  );
}
