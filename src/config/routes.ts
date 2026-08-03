import type { CarBrandSlug, SpecialtyServiceSlug } from "@/types/content";

export const routes = {
  about: "/about",
  blog: "/blog",
  cars: "/cars",
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
] as const satisfies readonly SpecialtyServiceSlug[];

export const carBrandSlugs = [
  "mercedes",
  "bmw",
  "audi",
  "porsche",
  "range-rover",
  "bentley",
  "toyota",
  "nissan",
  "lexus",
  "jaguar",
  "volvo",
  "volkswagen",
  "hyundai",
  "kia",
  "honda",
  "ford",
  "mitsubishi",
  "jeep",
] as const satisfies readonly CarBrandSlug[];

export function specialtyServicePath(slug: SpecialtyServiceSlug) {
  return `/services/${slug}` as const;
}

export function carBrandPath(slug: CarBrandSlug) {
  return `/cars/${slug}` as const;
}
