export interface NavItem {
  href: string;
  labelKey: string;
}

export type SocialPlatform = "whatsapp" | "facebook" | "tiktok" | "instagram";

export interface SocialLink {
  href: string;
  platform: SocialPlatform;
}
