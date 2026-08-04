import type { MetadataRoute } from "next";

import {
  carBrandPath,
  carBrandSlugs,
  routes,
  specialtyServicePath,
  specialtyServiceSlugs,
} from "@/config/routes";
import { siteConfig } from "@/config/site";
import { defaultLocale, type Locale, locales } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

const TRAILING_SLASHES = /\/+$/;

type ChangeFrequency = NonNullable<
  MetadataRoute.Sitemap[number]["changeFrequency"]
>;

interface PathEntry {
  changeFrequency: ChangeFrequency;
  path: string;
  priority: number;
}

function absoluteUrl(locale: Locale, path: string) {
  const normalized = path === "/" ? "" : path.replace(TRAILING_SLASHES, "");
  return `${siteConfig.url}/${locale}${normalized}`;
}

function languageAlternates(path: string) {
  const languages: Record<string, string> = {
    "x-default": absoluteUrl(defaultLocale, path),
  };

  for (const locale of locales) {
    languages[locale] = absoluteUrl(locale, path);
  }

  return languages;
}

function entry(
  path: string,
  priority: number,
  changeFrequency: ChangeFrequency
): MetadataRoute.Sitemap[number][] {
  return locales.map((locale) => ({
    alternates: {
      languages: languageAlternates(path),
    },
    changeFrequency,
    lastModified: new Date(),
    priority,
    url: absoluteUrl(locale, path),
  }));
}

export default function sitemap(): MetadataRoute.Sitemap {
  const blogSlugs = getDictionary(defaultLocale).blog.posts.map(
    (post) => post.slug
  );

  const paths: PathEntry[] = [
    { changeFrequency: "weekly", path: routes.home, priority: 1 },
    { changeFrequency: "monthly", path: routes.about, priority: 0.8 },
    { changeFrequency: "weekly", path: routes.services, priority: 0.9 },
    { changeFrequency: "weekly", path: routes.cars, priority: 0.9 },
    { changeFrequency: "weekly", path: routes.blog, priority: 0.7 },
    { changeFrequency: "weekly", path: routes.reviews, priority: 0.7 },
    {
      changeFrequency: "yearly",
      path: routes.privacyPolicy,
      priority: 0.3,
    },
    {
      changeFrequency: "yearly",
      path: routes.termsAndConditions,
      priority: 0.3,
    },
    ...specialtyServiceSlugs.map((slug) => ({
      changeFrequency: "monthly" as const,
      path: specialtyServicePath(slug),
      priority: 0.85,
    })),
    ...carBrandSlugs.map((slug) => ({
      changeFrequency: "monthly" as const,
      path: carBrandPath(slug),
      priority: 0.8,
    })),
    ...blogSlugs.map((slug) => ({
      changeFrequency: "monthly" as const,
      path: `${routes.blog}/${slug}`,
      priority: 0.65,
    })),
  ];

  return paths.flatMap(({ path, priority, changeFrequency }) =>
    entry(path, priority, changeFrequency)
  );
}
