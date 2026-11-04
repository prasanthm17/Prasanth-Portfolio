import type { MetadataRoute } from "next";
import { caseStudies } from "@/app/data/portfolio";

const BASE_URL = "https://prasanthm.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  // Only routes that actually exist are listed: the DesignLens flagship case
  // study plus the internal Behance case studies.
  const flagship = {
    url: `${BASE_URL}/work/designlens-ux-audit-platform`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.9
  };

  const internalCaseStudies = caseStudies.map((study) => ({
    url: `${BASE_URL}/work/${study.slug}`,
    lastModified,
    changeFrequency: "yearly" as const,
    priority: 0.6
  }));

  return [
    { url: BASE_URL, lastModified, changeFrequency: "monthly" as const, priority: 1 },
    flagship,
    ...internalCaseStudies
  ];
}
