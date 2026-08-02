import { ContactCtaButtons } from "@/components/shared/contact-cta-buttons";
import type { Dictionary } from "@/i18n/dictionaries";

interface PageContactCtaProps {
  ui: Pick<Dictionary["ui"], "callNow" | "messageWhatsapp">;
}

export function PageContactCta({ ui }: PageContactCtaProps) {
  return (
    <section className="border-navy/10 border-t bg-navy">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10">
        <ContactCtaButtons ui={ui} />
      </div>
    </section>
  );
}
