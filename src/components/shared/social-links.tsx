import { socialLinks } from "@/content/shared/socials";
import { cn } from "@/lib/utils";
import type { SocialPlatform } from "@/types/navigation";

interface SocialLinksProps {
  className?: string;
  labels: Record<SocialPlatform, string>;
}

export function SocialLinks({ className, labels }: SocialLinksProps) {
  return (
    <ul
      className={cn("flex flex-wrap items-center gap-x-4 gap-y-2", className)}
    >
      {socialLinks.map((link) => (
        <li key={link.platform}>
          <a
            className="inline-flex min-h-10 items-center text-sm text-white/80 underline-offset-4 transition-colors hover:text-white hover:underline"
            href={link.href}
            rel="noopener noreferrer"
            target="_blank"
          >
            {labels[link.platform]}
          </a>
        </li>
      ))}
    </ul>
  );
}
