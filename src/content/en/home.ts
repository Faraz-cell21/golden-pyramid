import { services } from "@/content/en/services";
import type { HomeContent } from "@/types/content";

export const home: HomeContent = {
  ctaBand: {
    body: "Call or WhatsApp Golden Pyramid for a clear estimate and trusted garage care.",
    title: "Book service with Golden Pyramid today",
    trustPoints: [
      "All major car brands",
      "Clear estimates",
      "Fast WhatsApp support",
    ],
    vehiclesLine: "We service everyday cars, SUVs, and specialty vehicles.",
  },
  description:
    "Professional automotive care from Golden Pyramid. Mobile-first garage website prototype.",
  hero: {
    body: "Independent garage care with skilled technicians, clear estimates, and modern diagnostics. Follow us for updates and offers.",
    features: [
      "Maintenance and care for all major car brands",
      "Experienced, trained technicians",
      "Modern diagnostic equipment",
      "Friendly customer support",
    ],
    ratingLabel: "Customer rating placeholder: 4.8 / 5",
    socialIntro: "Find us on social:",
    title: "Your trusted garage for professional auto care",
  },
  serviceCategories: {
    description: services.description,
    items: services.categories,
    title: services.title,
  },
  title: "Home",
  whyUs: {
    expectLabel: "You can expect:",
    items: [
      "Professional technicians and brand specialists",
      "Transparent estimates and expert advice",
      "Quality parts and careful workmanship",
      "A modern facility with up-to-date tools",
      "Clear communication from start to finish",
    ],
    title: "Why choose Golden Pyramid for your car?",
  },
};
