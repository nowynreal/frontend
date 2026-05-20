import { Card } from "@/components/ui/Card";
import { sampleMessages } from "@/lib/constants";
import { formatDate } from "@/lib/utils";

export default function AdminMessagesPage() {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-ink">Messages</h2>
      <div className="grid gap-4">
        {sampleMessages.map((message) => (
          <Card key={message.id} className="space-y-2">
            <div className="flex items-center justify-between text-sm text-ink/60">
              <span>{message.project}</span>
              <span>{formatDate(message.date)}</span>
            </div>
            <p className="text-sm font-semibold text-ink">{message.from}</p>
            <p className="text-sm text-ink/70">{message.preview}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
