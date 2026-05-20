import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { PageHero } from "@/components/marketing/PageHero";
import { industries } from "@/lib/constants";
import { Card } from "@/components/ui/Card";

export default function IndustriesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader variant="hero" />
      <main className="flex-1">
        <PageHero
          kicker="Industries"
          title="Category expertise built for Turkish exporters"
          subtitle="Our team supports regulated and non-regulated categories with tailored compliance, logistics, and commercial positioning."
        />
        <div className="relative z-10 mx-auto w-full max-w-6xl -mt-10 px-6 pb-20">
          <div className="section-shell space-y-10 rounded-3xl p-6 md:p-10">
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
              {industries.map((industry) => (
                <Card key={industry} className="p-5 text-sm font-semibold">
                  {industry}
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
