"use client";

import { useId } from "react";

import { socialLinks } from "@/content/shared/socials";
import { cn } from "@/lib/utils";
import type { SocialPlatform } from "@/types/navigation";

interface SocialLinksProps {
  className?: string;
  exclude?: SocialPlatform[];
  labels: Record<SocialPlatform, string>;
}

export function SocialLinks({
  className,
  exclude = [],
  labels,
}: SocialLinksProps) {
  const links = socialLinks.filter((link) => !exclude.includes(link.platform));
  const gradientId = `ig${useId().replace(/:/g, "")}`;

  return (
    <ul className={cn("flex flex-wrap items-center gap-2.5", className)}>
      {links.map((link) => (
        <li key={link.platform}>
          <a
            aria-label={labels[link.platform]}
            className="inline-flex size-10 items-center justify-center overflow-hidden rounded-full border border-white transition-transform hover:scale-105"
            href={link.href}
            rel="noopener noreferrer"
            target="_blank"
          >
            <SocialIcon gradientId={gradientId} platform={link.platform} />
          </a>
        </li>
      ))}
    </ul>
  );
}

function SocialIcon({
  gradientId,
  platform,
}: {
  gradientId: string;
  platform: SocialPlatform;
}) {
  switch (platform) {
    case "whatsapp":
      return (
        <svg
          aria-hidden="true"
          className="size-full"
          fill="#25D366"
          focusable="false"
          viewBox="0 0 24 24"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      );
    case "facebook":
      return (
        <svg
          aria-hidden="true"
          className="size-full"
          fill="#1877F2"
          focusable="false"
          viewBox="0 0 24 24"
        >
          <path d="M22 12.07C22 6.48 17.52 2 11.93 2S1.86 6.48 1.86 12.07c0 5.02 3.66 9.18 8.44 9.93v-7.02H7.9v-2.91h2.4V9.84c0-2.37 1.41-3.68 3.56-3.68 1.03 0 2.11.18 2.11.18v2.33h-1.19c-1.17 0-1.54.73-1.54 1.48v1.78h2.62l-.42 2.91h-2.2V22c4.78-.75 8.44-4.91 8.44-9.93z" />
        </svg>
      );
    case "tiktok":
      return (
        <svg
          aria-hidden="true"
          className="size-full"
          focusable="false"
          viewBox="0 0 24 24"
        >
          <path
            d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .56.04.83.1v-3.5a6.37 6.37 0 00-.83-.05A6.34 6.34 0 003.15 15.3a6.34 6.34 0 0010.86 4.43v-3.72a8.27 8.27 0 004.83 1.55V11.3a4.84 4.84 0 01-.75-.11 4.83 4.83 0 01-.5-4.5z"
            fill="#25F4EE"
            transform="translate(1.1 0.6)"
          />
          <path
            d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .56.04.83.1v-3.5a6.37 6.37 0 00-.83-.05A6.34 6.34 0 003.15 15.3a6.34 6.34 0 0010.86 4.43v-3.72a8.27 8.27 0 004.83 1.55V11.3a4.84 4.84 0 01-.75-.11 4.83 4.83 0 01-.5-4.5z"
            fill="#FE2C55"
            transform="translate(-1.1 -0.6)"
          />
          <path
            d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .56.04.83.1v-3.5a6.37 6.37 0 00-.83-.05A6.34 6.34 0 003.15 15.3a6.34 6.34 0 0010.86 4.43v-3.72a8.27 8.27 0 004.83 1.55V11.3a4.84 4.84 0 01-.75-.11 4.83 4.83 0 01-.5-4.5z"
            fill="#FFFFFF"
          />
        </svg>
      );
    case "instagram":
      return (
        <svg
          aria-hidden="true"
          className="size-full"
          focusable="false"
          viewBox="0 0 24 24"
        >
          <defs>
            <linearGradient id={gradientId} x1="0%" x2="50%" y1="100%" y2="0%">
              <stop offset="0%" stopColor="#FFD600" />
              <stop offset="25%" stopColor="#FF7A00" />
              <stop offset="50%" stopColor="#FF0069" />
              <stop offset="75%" stopColor="#D300C5" />
              <stop offset="100%" stopColor="#7638FA" />
            </linearGradient>
          </defs>
          <circle cx="12" cy="12" fill={`url(#${gradientId})`} r="12" />
          <rect
            fill="none"
            height="12"
            rx="3.5"
            stroke="#fff"
            strokeWidth="1.85"
            width="12"
            x="6"
            y="6"
          />
          <circle
            cx="12"
            cy="12"
            fill="none"
            r="3.2"
            stroke="#fff"
            strokeWidth="1.85"
          />
          <circle cx="16.35" cy="7.65" fill="#fff" r="1.15" />
        </svg>
      );
    default:
      return null;
  }
}
