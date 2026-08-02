import type { SpecialtyServiceSlug } from "@/types/content";

export const routes = {
  about: "/about",
  blog: "/blog",
  home: "/",
  privacyPolicy: "/privacy-policy",
  reviews: "/reviews",
  services: "/services",
  termsAndConditions: "/terms-and-conditions",
} as const;

export type AppRoute = (typeof routes)[keyof typeof routes];

export const specialtyServiceSlugs = [
  "mobile-garage-recovery",
  "spare-parts",
  "car-care",
] as const satisfies readonly SpecialtyServiceSlug[];

export function specialtyServicePath(slug: SpecialtyServiceSlug) {
  return `/services/${slug}` as const;
}
