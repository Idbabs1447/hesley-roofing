import { serviceGroups } from "@/content/services";
import { roofTypeFamilies } from "@/content/roof-types";
import { areasByCounty } from "@/content/areas";

export type MegaColumn = {
  heading: string;
  links: { label: string; href: string; description?: string }[];
};

export type NavItem = {
  label: string;
  href: string;
  columns?: MegaColumn[];
  feature?: { title: string; body: string; href: string; cta: string };
};

export const navItems: NavItem[] = [
  {
    label: "Services",
    href: "/services",
    columns: serviceGroups.map((g) => ({
      heading: g.name,
      links: g.services.map((s) => ({
        label: s.navTitle,
        href: `/services/${s.slug}`,
        description: s.summary,
      })),
    })),
    feature: {
      title: "Free Roof Inspections",
      body: "Not sure what you need? Start with a free inspection and a professional written estimate.",
      href: "/contact",
      cta: "Request an inspection",
    },
  },
  {
    label: "Roof Types",
    href: "/roof-types",
    columns: roofTypeFamilies.map((f) => ({
      heading: f.name,
      links: f.types.map((t) => ({
        label: t.name,
        href: `/roof-types/${t.slug}`,
        description: t.tagline,
      })),
    })),
    feature: {
      title: "Compare Roofing Materials",
      body: "Asphalt, metal, tile, slate, cedar and low-slope systems side by side.",
      href: "/roof-types",
      cta: "Explore roof types",
    },
  },
  { label: "Work", href: "/gallery" },
  {
    label: "Service Areas",
    href: "/service-areas",
    columns: areasByCounty.map((c) => ({
      heading: c.county,
      links: c.areas.map((a) => ({ label: a.name, href: `/service-areas/${a.slug}` })),
    })),
  },
  {
    label: "About",
    href: "/about",
    columns: [
      {
        heading: "The Company",
        links: [
          {
            label: "Our Story",
            href: "/about",
            description: "Serving North Texas since 1992.",
          },
          {
            label: "Alan Helsley & Team",
            href: "/about/team",
            description: "The people who show up at your house.",
          },
          {
            label: "Credentials",
            href: "/credentials",
            description: "Manufacturer and association accreditations.",
          },
          {
            label: "Warranty Options",
            href: "/warranty",
            description: "How shingle and workmanship coverage works.",
          },
        ],
      },
      {
        heading: "Customers",
        links: [
          { label: "Reviews", href: "/reviews", description: "5.0 on Google." },
          {
            label: "Referral Rewards",
            href: "/referral-program",
            description: "Tell a neighbor, get a bonus.",
          },
          { label: "Contact", href: "/contact" },
          { label: "Site Map", href: "/site-map" },
        ],
      },
    ],
  },
  { label: "Reviews", href: "/reviews" },
];

export const utilityLinks = [
  { label: "Referral Program", href: "/referral-program" },
];
