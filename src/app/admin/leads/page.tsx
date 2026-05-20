import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Table, TableCell, TableHead, TableRow } from "@/components/ui/Table";
import { sampleLeads } from "@/lib/constants";
import { formatDate } from "@/lib/utils";

export default function LeadsPage() {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-ink">Leads</h2>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Company</TableCell>
            <TableCell>Service</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Assigned</TableCell>
            <TableCell>Created</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <tbody>
          {sampleLeads.map((lead) => (
            <TableRow key={lead.id}>
              <TableCell>{lead.fullName}</TableCell>
              <TableCell>{lead.companyName}</TableCell>
              <TableCell>{lead.desiredService}</TableCell>
              <TableCell>
                <Badge tone="neutral">{lead.status}</Badge>
              </TableCell>
              <TableCell>{lead.assignedTo}</TableCell>
              <TableCell>{formatDate(lead.createdAt)}</TableCell>
              <TableCell>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" type="button">
                    Update status
                  </Button>
                  <Button size="sm" variant="ghost" type="button">
                    Convert
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
