import type { MetadataRoute } from "next";
import { projects } from "@/app/data/portfolio";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://prasanthm.vercel.app";
  return [
    { url: baseUrl, lastModified: new Date() },
    ...projects.map((project) => ({ url: `${baseUrl}/work/${project.slug}`, lastModified: new Date() }))
  ];
}
