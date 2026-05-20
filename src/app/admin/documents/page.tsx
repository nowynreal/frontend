import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Table, TableCell, TableHead, TableRow } from "@/components/ui/Table";
import { sampleDocuments } from "@/lib/constants";
import { formatDate } from "@/lib/utils";

const statusTone = {
  pending: "warning",
  approved: "success",
  rejected: "danger",
  needs_revision: "warning",
} as const;

export default function AdminDocumentsPage() {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-ink">Documents</h2>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>File</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Uploaded</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <tbody>
          {sampleDocuments.map((doc) => (
            <TableRow key={doc.id}>
              <TableCell>{doc.name}</TableCell>
              <TableCell>{doc.type}</TableCell>
              <TableCell>{formatDate(doc.uploadDate)}</TableCell>
              <TableCell>
                <Badge tone={statusTone[doc.status as keyof typeof statusTone]}>
                  {doc.status}
                </Badge>
              </TableCell>
              <TableCell>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" type="button">
                    Approve
                  </Button>
                  <Button size="sm" variant="ghost" type="button">
                    Request edits
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
