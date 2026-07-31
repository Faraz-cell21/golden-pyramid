import { routes } from "@/config/routes";
import type { NavItem } from "@/types/navigation";

export const mainNav: NavItem[] = [
  { href: routes.home, labelKey: "home" },
  { href: routes.about, labelKey: "about" },
  { href: routes.services, labelKey: "services" },
  { href: routes.reviews, labelKey: "reviews" },
  { href: routes.blog, labelKey: "blog" },
];

export const footerNav: NavItem[] = [
  { href: routes.privacyPolicy, labelKey: "privacy" },
  { href: routes.termsAndConditions, labelKey: "terms" },
];
