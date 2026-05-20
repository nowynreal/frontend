import { Badge } from "@/components/ui/Badge";
import { Table, TableCell, TableHead, TableRow } from "@/components/ui/Table";
import { sampleTasks } from "@/lib/constants";
import { formatDate } from "@/lib/utils";

const statusTone = {
  todo: "warning",
  in_progress: "neutral",
  waiting: "warning",
  completed: "success",
} as const;

export default function ClientTasksPage() {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-ink">Tasks</h2>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Due</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Assigned to</TableCell>
          </TableRow>
        </TableHead>
        <tbody>
          {sampleTasks.map((task) => (
            <TableRow key={task.id}>
              <TableCell>{task.title}</TableCell>
              <TableCell>{task.description}</TableCell>
              <TableCell>{formatDate(task.dueDate)}</TableCell>
              <TableCell>
                <Badge tone={statusTone[task.status as keyof typeof statusTone]}>
                  {task.status}
                </Badge>
              </TableCell>
              <TableCell>{task.assignedTo}</TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
