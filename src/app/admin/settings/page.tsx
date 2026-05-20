import { brand } from "@/lib/branding";
import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-ink">Settings</h2>
        <p className="text-sm text-ink/60">
          Update brand information stored in Supabase.
        </p>
      </div>
      <Card className="space-y-4">
        <div className="grid gap-4 md:grid-cols-2">
          <Input defaultValue={brand.companyName} placeholder="Company name" />
          <Input defaultValue={brand.slogan} placeholder="Slogan" />
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <Input defaultValue={brand.contactEmail} placeholder="Contact email" />
          <Input defaultValue={brand.primaryColor} placeholder="Primary color" />
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <Input defaultValue={brand.accentColor} placeholder="Accent color" />
          <Input defaultValue="" placeholder="Logo URL" />
        </div>
        <Button type="button" className="w-full md:w-auto">
          Save settings
        </Button>
      </Card>
    </div>
  );
}
