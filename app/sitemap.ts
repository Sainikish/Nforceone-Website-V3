import type { MetadataRoute } from "next";
import { services } from "@/lib/services-data";
import { industries } from "@/lib/industries-data";
import { caseStudies } from "@/lib/case-studies-data";

const BASE_URL = "https://nforceone.com";

const STATIC_ROUTES = [
  "",
  "/about",
  "/services",
  "/industries",
  "/innovation",
  "/case-studies",
  "/careers",
  "/contact",
  "/faq",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
  }));

  const serviceEntries: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${BASE_URL}/services/${service.slug}`,
    lastModified: new Date(),
  }));

  const industryEntries: MetadataRoute.Sitemap = industries.map((industry) => ({
    url: `${BASE_URL}/industries/${industry.slug}`,
    lastModified: new Date(),
  }));

  const caseStudyEntries: MetadataRoute.Sitemap = caseStudies.map((study) => ({
    url: `${BASE_URL}/case-studies/${study.slug}`,
    lastModified: new Date(),
  }));

  return [...staticEntries, ...serviceEntries, ...industryEntries, ...caseStudyEntries];
}
