import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { ContactForm } from "@/components/marketing/ContactForm";
import { PageHero } from "@/components/marketing/PageHero";

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader variant="hero" />
      <main className="flex-1">
        <PageHero
          kicker="Contact"
          title="Book a consultation with our market entry team"
          subtitle="Share details about your company and products. We will respond with a tailored plan and next steps."
        />
        <div className="relative z-10 mx-auto w-full max-w-5xl -mt-10 px-6 pb-20">
          <div className="section-shell space-y-10 rounded-3xl p-6 md:p-10">
            <ContactForm />
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
