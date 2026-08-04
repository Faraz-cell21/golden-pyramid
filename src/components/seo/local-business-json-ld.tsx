import type { Locale } from "@/i18n/config";
import { buildLocalBusinessJsonLd } from "@/lib/local-business-json-ld";

interface LocalBusinessJsonLdProps {
  locale: Locale;
}

export function LocalBusinessJsonLd({ locale }: LocalBusinessJsonLdProps) {
  const jsonLd = buildLocalBusinessJsonLd(locale);

  return (
    <script
      // biome-ignore lint/security/noDangerouslySetInnerHtml: required for JSON-LD
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      type="application/ld+json"
    />
  );
}
