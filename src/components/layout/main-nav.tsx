import Link from "next/link";

import { mainNav } from "@/config/navigation";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { localizedPath } from "@/lib/utils";

interface MainNavProps {
  locale: Locale;
  navigation: Dictionary["navigation"];
}

export function MainNav({ locale, navigation }: MainNavProps) {
  return (
    <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
      {mainNav.map((item) => (
        <Link
          className="inline-flex min-h-11 items-center rounded-md px-3 font-medium text-navy/80 text-sm transition-colors hover:bg-navy/5 hover:text-navy"
          href={localizedPath(locale, item.href)}
          key={item.href}
        >
          {navigation[item.labelKey as keyof typeof navigation]}
        </Link>
      ))}
    </nav>
  );
}
