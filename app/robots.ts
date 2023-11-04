import { MetadataRoute } from "next";
import { config } from "@/utils";

export default function robots(): MetadataRoute.Robots {
  const { VERCEL_URL } = config;
  const baseUrl = VERCEL_URL
    ? `https://${VERCEL_URL}`
    : "http://localhost:3000";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
