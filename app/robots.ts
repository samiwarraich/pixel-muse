import { MetadataRoute } from "next";
import { config } from "@/utils";

export default function robots(): MetadataRoute.Robots {
  const { BASE_URL } = config;

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
}
