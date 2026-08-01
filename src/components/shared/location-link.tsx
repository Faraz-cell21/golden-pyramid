import { contactConfig, getContactLocation } from "@/config/contact";
import type { Locale } from "@/i18n/config";
import { cn } from "@/lib/utils";

interface LocationLinkProps {
  className?: string;
  locale?: Locale;
}

export function LocationLink({ className, locale }: LocationLinkProps) {
  return (
    <a
      className={cn(
        "font-brand underline-offset-2 transition-colors hover:text-gold hover:underline",
        className
      )}
      dir="rtl"
      href={contactConfig.mapsUrl}
      lang="ar"
      rel="noopener noreferrer"
      target="_blank"
    >
      {getContactLocation(locale)}
    </a>
  );
}
