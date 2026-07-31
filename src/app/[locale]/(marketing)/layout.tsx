import { notFound } from "next/navigation";
import type { ReactNode } from "react";

import { SiteShell } from "@/components/layout/site-shell";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

interface MarketingLayoutProps {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function MarketingLayout({
  children,
  params,
}: MarketingLayoutProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const dictionary = getDictionary(locale);

  return (
    <SiteShell dictionary={dictionary} locale={locale}>
      {children}
    </SiteShell>
  );
}
