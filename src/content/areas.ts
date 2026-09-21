export type ServiceArea = {
  slug: string;
  name: string;
  county: "Collin County" | "Dallas County" | "Denton County" | "Tarrant County";
  blurb: string;
  legacyUrl: string;
  hq?: boolean;
};

/**
 * Every area below appears on the current helsleyroofing.com service-areas
 * architecture. No additional cities have been invented.
 */
export const serviceAreas: ServiceArea[] = [
  {
    slug: "plano-tx-roofers",
    name: "Plano",
    county: "Collin County",
    hq: true,
    blurb:
      "Helsley Roofing Company is headquartered on K Avenue in Plano, and Plano homes have been our core work since 1992.",
    legacyUrl: "/",
  },
  {
    slug: "allen-tx-roofers",
    name: "Allen",
    county: "Collin County",
    blurb:
      "Residential roofing, repair, storm damage work and gutters for Allen homeowners.",
    legacyUrl: "/service-areas/allen-tx-roofers/",
  },
  {
    slug: "anna-tx-roofers",
    name: "Anna",
    county: "Collin County",
    blurb:
      "Roofing services for Anna and the northern Collin County communities.",
    legacyUrl: "/service-areas/anna-tx-roofers/",
  },
  {
    slug: "fairview-tx-roofers",
    name: "Fairview",
    county: "Collin County",
    blurb:
      "Roof replacement, repair and inspection services throughout Fairview.",
    legacyUrl: "/service-areas/fairview-tx-roofers/",
  },
  {
    slug: "frisco-tx-roofers",
    name: "Frisco",
    county: "Collin County",
    blurb:
      "Roofing for Frisco homes, including hail and wind damage inspections.",
    legacyUrl: "/service-areas/frisco-tx-roofers/",
  },
  {
    slug: "mckinney-tx-roofers",
    name: "McKinney",
    county: "Collin County",
    blurb:
      "Roof repair and replacement across McKinney's established and newer neighborhoods.",
    legacyUrl: "/service-areas/mckinney-tx-roofers/",
  },
  {
    slug: "melissa-tx-roofers",
    name: "Melissa",
    county: "Collin County",
    blurb: "Roofing services for Melissa homeowners.",
    legacyUrl: "/service-areas/melissa-tx-roofers/",
  },
  {
    slug: "collin-county-tx-roofers",
    name: "Collin County",
    county: "Collin County",
    blurb:
      "Countywide roofing coverage from our Plano office, including the communities listed here.",
    legacyUrl: "/service-areas/collin-county-tx-roofers/",
  },
  {
    slug: "richardson-tx-roofers",
    name: "Richardson",
    county: "Dallas County",
    blurb:
      "Alan Helsley was raised in Richardson. These are the streets this company started on.",
    legacyUrl: "/service-areas/richardson-tx-roofers/",
  },
  {
    slug: "dallas-tx-roofers",
    name: "Dallas",
    county: "Dallas County",
    blurb:
      "Residential roofing, repair and storm damage services across Dallas.",
    legacyUrl: "/service-areas/dallas-tx-roofers/",
  },
  {
    slug: "highland-park-tx-roofers",
    name: "Highland Park",
    county: "Dallas County",
    blurb:
      "Roofing for Highland Park homes, including premium and natural roofing materials.",
    legacyUrl: "/service-areas/highland-park-tx-roofers/",
  },
  {
    slug: "university-park-tx-roofers",
    name: "University Park",
    county: "Dallas County",
    blurb:
      "Roof replacement and repair for University Park's established housing stock.",
    legacyUrl: "/service-areas/university-park-tx-roofers/",
  },
  {
    slug: "carrollton-tx-roofers",
    name: "Carrollton",
    county: "Dallas County",
    blurb: "Roofing and gutter services for Carrollton homeowners.",
    legacyUrl: "/service-areas/carrollton-tx-roofers/",
  },
  {
    slug: "farmers-branch-tx-roofers",
    name: "Farmers Branch",
    county: "Dallas County",
    blurb: "Roof repair, replacement and inspections in Farmers Branch.",
    legacyUrl: "/service-areas/farmers-branch-tx-roofers/",
  },
  {
    slug: "grand-prairie-tx-roofers",
    name: "Grand Prairie",
    county: "Dallas County",
    blurb: "Roofing services for Grand Prairie properties.",
    legacyUrl: "/service-areas/grand-prairie-tx-roofers/",
  },
  {
    slug: "northern-dallas-county-tx-roofers",
    name: "Northern Dallas County",
    county: "Dallas County",
    blurb:
      "Coverage across the northern Dallas County communities surrounding our Plano office.",
    legacyUrl: "/service-areas/northern-dallas-county-tx-roofers/",
  },
  {
    slug: "southern-denton-county-tx-roofers",
    name: "Southern Denton County",
    county: "Denton County",
    blurb:
      "Roofing services throughout the southern Denton County communities.",
    legacyUrl: "/service-areas/southern-denton-county-tx-roofers/",
  },
  {
    slug: "fort-worth-tx-roofers",
    name: "Fort Worth",
    county: "Tarrant County",
    blurb:
      "Helsley Roofing serves the Dallas / Fort Worth area, including Fort Worth proper.",
    legacyUrl: "/service-areas/fort-worth-tx-roofers/",
  },
  {
    slug: "colleyville-tx-roofers",
    name: "Colleyville",
    county: "Tarrant County",
    blurb: "Residential roofing and repair services in Colleyville.",
    legacyUrl: "/service-areas/colleyville-tx-roofers/",
  },
  {
    slug: "grapevine-tx-roofers",
    name: "Grapevine",
    county: "Tarrant County",
    blurb: "Roof replacement, repair and gutters for Grapevine homes.",
    legacyUrl: "/service-areas/grapevine-tx-roofers/",
  },
  {
    slug: "southlake-tx-roofers",
    name: "Southlake",
    county: "Tarrant County",
    blurb:
      "Roofing services for Southlake homeowners, including premium roofing materials.",
    legacyUrl: "/service-areas/southlake-tx-roofers/",
  },
  {
    slug: "eastern-tarrant-county-tx-roofers",
    name: "Eastern Tarrant County",
    county: "Tarrant County",
    blurb:
      "Coverage across the eastern Tarrant County communities between Dallas and Fort Worth.",
    legacyUrl: "/service-areas/eastern-tarrant-county-tx-roofers/",
  },
];

export const areaMap = new Map(serviceAreas.map((a) => [a.slug, a]));

export const areasByCounty: {
  county: ServiceArea["county"];
  areas: ServiceArea[];
}[] = (
  [
    "Collin County",
    "Dallas County",
    "Denton County",
    "Tarrant County",
  ] as const
).map((county) => ({
  county,
  areas: serviceAreas.filter((a) => a.county === county),
}));
