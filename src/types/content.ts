export interface PageContent {
  description: string;
  title: string;
}

export interface BlogPost {
  body: string;
  slug: string;
  title: string;
}

export type BlogContent = PageContent & {
  emptyMessage: string;
  posts: BlogPost[];
};

export type ThankYouContent = PageContent & {
  body: string;
  ctaLabel: string;
};

export interface NotFoundContent {
  body: string;
  ctaLabel: string;
  title: string;
}

export interface NavigationContent {
  about: string;
  blog: string;
  brand: string;
  home: string;
  privacy: string;
  reviews: string;
  services: string;
  terms: string;
}

export type ServiceCategoryIconId =
  | "mechanical"
  | "electrical"
  | "body"
  | "ac"
  | "tires"
  | "extra";

export interface ServiceCategory {
  icon: ServiceCategoryIconId;
  items: string[];
  title: string;
}

export interface HomeModelGroup {
  items: string[];
  title: string;
}

export interface HomeContent extends PageContent {
  ctaBand: {
    body: string;
    modelGroups: HomeModelGroup[];
    modelsLabel: string;
    title: string;
  };
  hero: {
    body: string;
    features: string[];
    ratingLabel: string;
    socialIntro: string;
    title: string;
  };
  serviceCategories: {
    description: string;
    items: ServiceCategory[];
    title: string;
  };
  whyUs: {
    expectLabel: string;
    items: string[];
    title: string;
  };
}

export interface AboutValue {
  body: string;
  title: string;
}

export interface AboutContent extends PageContent {
  highlights: string[];
  story: string[];
  storyTitle: string;
  values: AboutValue[];
  valuesTitle: string;
}

export interface ServicesContent extends PageContent {
  categories: ServiceCategory[];
}

export interface ReviewItem {
  body: string;
  name: string;
  rating: number;
}

export interface ReviewsContent extends PageContent {
  items: ReviewItem[];
}
