import { MetadataRoute } from "next";
import { config } from "@/utils";

export default function sitemap(): MetadataRoute.Sitemap {
  const { BASE_URL } = config;

  return [
    {
      url: BASE_URL,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${BASE_URL}/privacy-policy`,
      lastModified: new Date().toISOString(),
    },
  ];
}
