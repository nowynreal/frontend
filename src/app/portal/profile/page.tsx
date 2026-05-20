import { Card } from "@/components/ui/Card";

export default function ClientProfilePage() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-ink">Profile</h2>
      <Card className="grid gap-4 md:grid-cols-2">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-ink/50">
            Account owner
          </p>
          <p className="text-lg font-semibold text-ink">Ece Kaya</p>
          <p className="text-sm text-ink/60">ece@marmaranaturals.com</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-ink/50">
            Company
          </p>
          <p className="text-lg font-semibold text-ink">Marmara Naturals</p>
          <p className="text-sm text-ink/60">Supplements · Turkey</p>
        </div>
      </Card>
      <Card className="space-y-2">
        <p className="text-xs uppercase tracking-[0.2em] text-ink/50">
          Support contact
        </p>
        <p className="text-sm text-ink/70">
          Reach your account lead at support@anatoliabridge.com.
        </p>
      </Card>
    </div>
  );
}
