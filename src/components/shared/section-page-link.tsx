import Link from "next/link";

import { cn } from "@/lib/utils";

interface SectionPageLinkProps {
  className?: string;
  href: string;
  label: string;
}

export function SectionPageLink({
  className,
  href,
  label,
}: SectionPageLinkProps) {
  return (
    <div className={cn("mt-8 flex justify-center", className)}>
      <Link
        className="inline-flex min-h-11 items-center justify-center rounded-md border border-navy bg-navy px-5 font-semibold text-sm text-white transition-colors hover:bg-navy-soft"
        href={href}
        prefetch
      >
        {label}
      </Link>
    </div>
  );
}
