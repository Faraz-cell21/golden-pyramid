import { contactConfig } from "@/config/contact";
import { whatsappLink } from "@/content/shared/socials";
import type { Dictionary } from "@/i18n/dictionaries";

interface PageContactCtaProps {
  ui: Pick<Dictionary["ui"], "callNow" | "messageWhatsapp">;
}

export function PageContactCta({ ui }: PageContactCtaProps) {
  return (
    <section className="border-navy/10 border-t bg-navy/5">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-8 sm:flex-row sm:px-6 sm:py-10">
        <a
          className="inline-flex min-h-12 flex-1 items-center justify-center rounded-md bg-navy px-4 font-medium text-sm text-white"
          href={contactConfig.phoneHref}
        >
          {ui.callNow}: {contactConfig.phoneDisplay}
        </a>
        <a
          className="inline-flex min-h-12 flex-1 items-center justify-center rounded-md border border-navy px-4 font-medium text-navy text-sm"
          href={whatsappLink}
          rel="noopener noreferrer"
          target="_blank"
        >
          {ui.messageWhatsapp}
        </a>
      </div>
    </section>
  );
}
