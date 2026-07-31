import type { SocialLink } from "@/types/navigation";

/** Placeholder links — replace with real URLs when available. */
export const socialLinks: SocialLink[] = [
  {
    href: "https://wa.me/0000000000",
    platform: "whatsapp",
  },
  {
    href: "https://facebook.com/",
    platform: "facebook",
  },
  {
    href: "https://tiktok.com/",
    platform: "tiktok",
  },
  {
    href: "https://instagram.com/",
    platform: "instagram",
  },
];

export const whatsappLink =
  socialLinks.find((link) => link.platform === "whatsapp")?.href ??
  "https://wa.me/0000000000";
