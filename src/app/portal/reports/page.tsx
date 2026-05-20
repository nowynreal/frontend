import { Card } from "@/components/ui/Card";
import { sampleReports } from "@/lib/constants";
import { formatDate } from "@/lib/utils";

export default function ClientReportsPage() {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-ink">Reports</h2>
      <div className="grid gap-4">
        {sampleReports.map((report) => (
          <Card key={report.id} className="space-y-2">
            <div className="flex items-center justify-between text-sm text-ink/60">
              <span>{report.project}</span>
              <span>{formatDate(report.createdDate)}</span>
            </div>
            <p className="text-sm font-semibold text-ink">{report.title}</p>
            <p className="text-sm text-ink/70">{report.summary}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
