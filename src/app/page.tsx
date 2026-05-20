import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { Hero } from "@/components/marketing/Hero";
import { TrustBar } from "@/components/marketing/TrustBar";
import { LogoMarquee } from "@/components/marketing/LogoMarquee";
import { MetricsStrip } from "@/components/marketing/MetricsStrip";
import { ServicesDeep } from "@/components/marketing/ServicesDeep";
import { JourneySteps } from "@/components/marketing/JourneySteps";
import { IndustriesCompact } from "@/components/marketing/IndustriesCompact";
import { Testimonials } from "@/components/marketing/Testimonials";
import { ChecklistBanner } from "@/components/marketing/ChecklistBanner";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader variant="hero" />
      <main className="flex-1">
        <Hero />
        <TrustBar />
        <LogoMarquee />
        <MetricsStrip />
        <ServicesDeep />
        <JourneySteps />
        <IndustriesCompact />
        <Testimonials />
        <ChecklistBanner />
      </main>
      <SiteFooter />
    </div>
  );
}
