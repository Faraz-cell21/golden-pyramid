export const heroCrossfadeImages = [
  "/images/generated/hero-workshop-lift.webp",
  "/images/generated/hero-open-hood.webp",
  "/images/generated/hero-evening-bays.webp",
] as const;

export const whyUsCollageSlots = [
  {
    alt: "Brake service and workshop detail shots",
    className: "start-0 top-0 z-10 h-[62%] w-[64%]",
    images: [
      "/images/generated/detail-brakes.webp",
      "/images/generated/detail-white-sedan.webp",
    ],
    intervalMs: 4800,
  },
  {
    alt: "Vehicles on lifts in the workshop",
    className: "end-0 top-[14%] z-20 h-[58%] w-[60%]",
    images: [
      "/images/generated/detail-sports-lift.webp",
      "/images/generated/hero-workshop-lift.webp",
    ],
    intervalMs: 5600,
  },
  {
    alt: "Open hood service in a modern bay",
    className: "bottom-0 start-[16%] z-30 h-[52%] w-[66%]",
    images: [
      "/images/generated/detail-white-sedan.webp",
      "/images/generated/hero-open-hood.webp",
    ],
    intervalMs: 6400,
  },
] as const;

export const aboutWorkshopImages = [
  "/images/generated/detail-white-sedan.webp",
  "/images/generated/detail-sports-lift.webp",
  "/images/generated/detail-brakes.webp",
] as const;

export const ctaBandImages = [
  "/images/generated/hero-evening-bays.webp",
  "/images/generated/hero-workshop-lift.webp",
] as const;
