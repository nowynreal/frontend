import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { ProcessTimeline } from "@/components/marketing/ProcessTimeline";
import { PageHero } from "@/components/marketing/PageHero";

export default function ProcessPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader variant="hero" />
      <main className="flex-1">
        <PageHero
          kicker="Process"
          title="A structured pathway to U.S. market entry"
          subtitle="You will always know what happens next, who owns each task, and how progress is tracked."
        />
        <div className="relative z-10 mx-auto w-full max-w-5xl -mt-10 px-6 pb-20">
          <div className="section-shell space-y-10 rounded-3xl p-6 md:p-10">
            <ProcessTimeline />
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
