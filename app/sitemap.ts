import type { MetadataRoute } from "next";
import { routing } from "../i18n/routing";

const baseUrl = "https://www.primeclaimssettlement.ae";

const staticPaths = [
  "",
  "/identity",
  "/execution",
  "/services",
  "/administrative-department",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const urls: MetadataRoute.Sitemap = [];

  for (const locale of routing.locales) {
    for (const path of staticPaths) {
      const isRoot = path === "";

      urls.push({
        url: `${baseUrl}/${locale}${path}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: isRoot ? 1 : 0.8,
      });
    }
  }

  return urls;
}

