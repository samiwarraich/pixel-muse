import { MetadataRoute } from "next";
import { config } from "@/utils";

export default function sitemap(): MetadataRoute.Sitemap {
  const { VERCEL_URL } = config;
  const baseUrl = VERCEL_URL
    ? `https://${VERCEL_URL}`
    : "http://localhost:3000";

  return [
    {
      url: baseUrl,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date().toISOString(),
    },
  ];
}
