export const routes = {
  about: "/about",
  blog: "/blog",
  home: "/",
  privacyPolicy: "/privacy-policy",
  reviews: "/reviews",
  services: "/services",
  termsAndConditions: "/terms-and-conditions",
  thankYou: "/thank-you",
} as const;

export type AppRoute = (typeof routes)[keyof typeof routes];
