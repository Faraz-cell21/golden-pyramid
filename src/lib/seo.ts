import { siteConfig } from "@/config/site";
import type { Locale } from "@/i18n/config";

export function buildPageMetadata(
  _locale: Locale,
  title: string,
  description: string
) {
  return {
    description,
    title: `${title} | ${siteConfig.name}`,
  };
}
