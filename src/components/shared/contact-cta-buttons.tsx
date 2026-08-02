import { contactConfig } from "@/config/contact";
import { whatsappLink } from "@/content/shared/socials";
import type { Dictionary } from "@/i18n/dictionaries";
import { cn } from "@/lib/utils";

interface ContactCtaButtonsProps {
  className?: string;
  ui: Pick<Dictionary["ui"], "callNow" | "messageWhatsapp">;
}

const baseButtonClass =
  "inline-flex min-h-12 flex-1 items-center justify-center rounded-md px-4 font-semibold text-sm transition-colors";

export const whatsappCtaClassName = cn(
  baseButtonClass,
  "bg-[#25D366] text-white hover:bg-[#1ebe57]"
);

export const callCtaClassName = cn(
  baseButtonClass,
  "border border-gold-soft bg-gold-soft text-navy"
);

export function ContactCtaButtons({ className, ui }: ContactCtaButtonsProps) {
  return (
    <div className={cn("flex w-full flex-col gap-3 sm:flex-row", className)}>
      <a
        className={whatsappCtaClassName}
        href={whatsappLink}
        rel="noopener noreferrer"
        target="_blank"
      >
        {ui.messageWhatsapp}
      </a>
      <a className={callCtaClassName} href={contactConfig.phoneHref}>
        {ui.callNow}: {contactConfig.phoneDisplay}
      </a>
    </div>
  );
}
