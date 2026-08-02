export interface PageContent {
  description: string;
  title: string;
}

export interface LegalSection {
  items?: string[];
  paragraphs: string[];
  title: string;
}

export interface LegalPageContent extends PageContent {
  lastUpdatedLabel: string;
  sections: LegalSection[];
}

export interface BlogPost {
  body: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  slug: string;
  title: string;
}

export type BlogContent = PageContent & {
  emptyMessage: string;
  posts: BlogPost[];
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

export interface ServiceCategory {
  image: string;
  imageAlt: string;
  items: string[];
  title: string;
}

export interface HomeContent extends PageContent {
  ctaBand: {
    body: string;
    title: string;
    trustPoints: string[];
    vehiclesLine: string;
  };
  hero: {
    body: string;
    features: string[];
    reviewPlatforms: Array<{
      countLabel: string;
      platform: "google" | "facebook" | "trustpilot";
      platformLabel: string;
      rating: string;
      summary: string;
    }>;
    socialIntro: string;
    title: string;
  };
  latestBlog: {
    title: string;
    viewAllLabel: string;
  };
  reviewsShowcase: {
    title: string;
    viewAllLabel: string;
  };
  serviceCategories: {
    description: string;
    items: ServiceCategory[];
    title: string;
    viewAllLabel: string;
  };
  videoShowcase: {
    body: string;
    sideEnd: {
      paragraphs: string[];
      title: string;
    };
    sideStart: {
      paragraphs: string[];
      title: string;
    };
    title: string;
  };
  whyUs: {
    expectLabel: string;
    items: string[];
    title: string;
    viewAllLabel: string;
  };
}

export interface AboutContent extends PageContent {
  intro: string[];
  introTitle: string;
  whyUs: string[];
  whyUsTitle: string;
}

export interface ServicesContent extends PageContent {
  categories: ServiceCategory[];
}

export interface ReviewItem {
  body: string;
  location: string;
  name: string;
  rating: number;
}

export interface ReviewsContent extends PageContent {
  items: ReviewItem[];
}
