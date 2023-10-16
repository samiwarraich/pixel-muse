import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://pixel-muse.vercel.app";
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: baseUrl + "/privacy-policy",
      lastModified: new Date(),
    },
  ];
}
