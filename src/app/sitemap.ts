import { MetadataRoute } from "next";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://kallabatlaw.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "/", priority: 1.0, changeFrequency: "weekly" as const },
    { path: "/for-employers", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/for-individuals", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/work-visas", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/green-cards", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/family-immigration", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/citizenship", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/industries", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/about", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/attorneys", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/faqs", priority: 0.6, changeFrequency: "monthly" as const },
    { path: "/forms", priority: 0.6, changeFrequency: "monthly" as const },
    { path: "/forms/h1b-employer", priority: 0.5, changeFrequency: "yearly" as const },
    { path: "/forms/h1b-employee", priority: 0.5, changeFrequency: "yearly" as const },
    { path: "/forms/tn-employer", priority: 0.5, changeFrequency: "yearly" as const },
    { path: "/forms/tn-employee", priority: 0.5, changeFrequency: "yearly" as const },
    { path: "/forms/e3-employer", priority: 0.5, changeFrequency: "yearly" as const },
    { path: "/forms/h4-td-dependent", priority: 0.5, changeFrequency: "yearly" as const },
    { path: "/contact", priority: 0.8, changeFrequency: "monthly" as const },
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
