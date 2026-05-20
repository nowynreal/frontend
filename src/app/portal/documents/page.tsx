import { Badge } from "@/components/ui/Badge";
import { EmptyState } from "@/components/ui/EmptyState";
import { Table, TableCell, TableHead, TableRow } from "@/components/ui/Table";
import { sampleDocuments } from "@/lib/constants";
import { formatDate } from "@/lib/utils";

const statusTone = {
  pending: "warning",
  approved: "success",
  rejected: "danger",
  needs_revision: "warning",
} as const;

export default function ClientDocumentsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-ink">Documents</h2>
        <p className="text-sm text-ink/60">
          Upload required files directly in this workspace.
        </p>
      </div>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>File name</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Uploaded by</TableCell>
            <TableCell>Upload date</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <tbody>
          {sampleDocuments.map((doc) => (
            <TableRow key={doc.id}>
              <TableCell>{doc.name}</TableCell>
              <TableCell>{doc.type}</TableCell>
              <TableCell>{doc.uploadedBy}</TableCell>
              <TableCell>{formatDate(doc.uploadDate)}</TableCell>
              <TableCell>
                <Badge tone={statusTone[doc.status as keyof typeof statusTone]}>
                  {doc.status}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
      <EmptyState>
        No additional uploads requested. Your account lead will notify you when
        new documents are needed.
      </EmptyState>
    </div>
  );
}
