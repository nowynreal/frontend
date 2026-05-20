import { Card } from "@/components/ui/Card";
import { crmMetrics, sampleAdminProjects, sampleTasks } from "@/lib/constants";
import { Badge } from "@/components/ui/Badge";

export default function AdminDashboardPage() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-3">
        {crmMetrics.map((metric) => (
          <Card key={metric.label} className="space-y-2">
            <p className="text-xs uppercase tracking-[0.2em] text-ink/50">
              {metric.label}
            </p>
            <p className="text-2xl font-semibold text-ink">{metric.value}</p>
          </Card>
        ))}
      </div>
      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="space-y-4">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-ink/50">
              Projects by status
            </p>
            <p className="text-lg font-semibold text-ink">Active pipeline</p>
          </div>
          <div className="space-y-2 text-sm text-ink/70">
            {sampleAdminProjects.map((project) => (
              <div
                key={project.id}
                className="flex items-center justify-between"
              >
                <span>{project.company}</span>
                <Badge tone="neutral">{project.status}</Badge>
              </div>
            ))}
          </div>
        </Card>
        <Card className="space-y-4">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-ink/50">
              Tasks due soon
            </p>
            <p className="text-lg font-semibold text-ink">Next 14 days</p>
          </div>
          <div className="space-y-2 text-sm text-ink/70">
            {sampleTasks.map((task) => (
              <div key={task.id} className="flex items-center justify-between">
                <span>{task.title}</span>
                <Badge tone="warning">{task.status}</Badge>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
