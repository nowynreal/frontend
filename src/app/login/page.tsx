import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { LoginForm } from "@/components/auth/LoginForm";
import { Card } from "@/components/ui/Card";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <div className="mx-auto w-full max-w-xl space-y-12 px-6 py-14 md:py-20">
          <div className="space-y-4 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink/60">
              Client Login
            </p>
            <h1 className="text-3xl font-semibold text-ink">
              Access your project workspace
            </h1>
            <p className="text-sm text-ink/70">
              Sign in with the account provided by your account lead.
            </p>
          </div>
          <Card className="p-6">
            <LoginForm />
          </Card>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
