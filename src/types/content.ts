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
