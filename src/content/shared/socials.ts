import type { SocialLink } from "@/types/navigation";

export const socialLinks: SocialLink[] = [
  {
    href: "https://wa.me/971552407409",
    platform: "whatsapp",
  },
  {
    href: "https://www.facebook.com/share/195eZkwkYi/?mibextid=wwXIfr",
    platform: "facebook",
  },
  {
    href: "https://www.tiktok.com/@neveenelshreif",
    platform: "tiktok",
  },
  {
    href: "https://www.instagram.com/alharam.althahabi",
    platform: "instagram",
  },
];

export const whatsappLink =
  socialLinks.find((link) => link.platform === "whatsapp")?.href ??
  "https://wa.me/971552407409";
