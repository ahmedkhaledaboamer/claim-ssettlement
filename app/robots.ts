import type { MetadataRoute } from "next";

const baseUrl = "https://www.primeclaimssettlement.ae";

function getHostFromBaseUrl(url: string): string | undefined {
  try {
    const parsed = new URL(url);
    return parsed.host;
  } catch {
    return undefined;
  }
}

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${baseUrl}/sitemap.xml`,
    host: getHostFromBaseUrl(baseUrl),
  };
}

