import { Badge } from "@/components/ui/Badge";
import { Table, TableCell, TableHead, TableRow } from "@/components/ui/Table";
import { sampleAdminProjects } from "@/lib/constants";
import { formatDate, formatPercent } from "@/lib/utils";

export default function AdminProjectsPage() {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-ink">Projects</h2>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Company</TableCell>
            <TableCell>Service</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Phase</TableCell>
            <TableCell>Start</TableCell>
            <TableCell>Due</TableCell>
            <TableCell>Progress</TableCell>
          </TableRow>
        </TableHead>
        <tbody>
          {sampleAdminProjects.map((project) => (
            <TableRow key={project.id}>
              <TableCell>{project.company}</TableCell>
              <TableCell>{project.serviceType}</TableCell>
              <TableCell>
                <Badge tone="neutral">{project.status}</Badge>
              </TableCell>
              <TableCell>{project.currentPhase}</TableCell>
              <TableCell>{formatDate(project.startDate)}</TableCell>
              <TableCell>{formatDate(project.dueDate)}</TableCell>
              <TableCell>{formatPercent(project.progress)}</TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
