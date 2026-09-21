import type { MetadataRoute } from "next";
import { services } from "@/content/services";
import { roofTypes } from "@/content/roof-types";
import { serviceAreas } from "@/content/areas";

const BASE = "https://helsleyroofing.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = [
    "",
    "/services",
    "/roof-types",
    "/service-areas",
    "/about",
    "/about/team",
    "/credentials",
    "/warranty",
    "/gallery",
    "/reviews",
    "/referral-program",
    "/contact",
    "/site-map",
    "/privacy-policy",
  ];

  const now = new Date();

  return [
    ...staticPaths.map((p) => ({
      url: `${BASE}${p}`,
      lastModified: now,
      priority: p === "" ? 1 : 0.8,
    })),
    ...services.map((s) => ({
      url: `${BASE}/services/${s.slug}`,
      lastModified: now,
      priority: 0.7,
    })),
    ...roofTypes.map((r) => ({
      url: `${BASE}/roof-types/${r.slug}`,
      lastModified: now,
      priority: 0.6,
    })),
    ...serviceAreas.map((a) => ({
      url: `${BASE}/service-areas/${a.slug}`,
      lastModified: now,
      priority: 0.6,
    })),
  ];
}
