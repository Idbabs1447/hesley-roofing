export type TeamMember = {
  name: string;
  role?: string;
  photo: string;
  /** Internal: full names/titles beyond the current site are not invented. */
  note?: string;
};

/**
 * The current About page publishes first names and photographs for the team.
 * Full titles are not published for most of the team, so none are invented.
 * Surnames shown are the ones customers used in published Google reviews.
 */
export const owner: TeamMember = {
  name: "Alan Helsley",
  role: "Owner",
  photo: "/img/team/alan.jpg",
};

export const team: TeamMember[] = [
  { name: "Brad", photo: "/img/team/brad.jpg" },
  { name: "Chris", photo: "/img/team/chris.jpg" },
  { name: "Daniel", photo: "/img/team/daniel.jpg" },
  { name: "Heather", photo: "/img/team/heather.jpg" },
  { name: "Larry", photo: "/img/team/larry.jpg" },
  { name: "Robert", photo: "/img/team/robert.jpg" },
  { name: "Chris K", photo: "/img/team/chris-k.jpg" },
];

export type GalleryItem = {
  src: string;
  alt: string;
  category:
    | "Residential"
    | "Roof Repair"
    | "Storm Damage"
    | "Gutters"
    | "Multi-Family"
    | "The Team";
};

/** Images sourced from the current Helsley Roofing website. */
export const gallery: GalleryItem[] = [
  {
    src: "/img/hero.jpg",
    alt: "North Texas home with a newly installed architectural shingle roof",
    category: "Residential",
  },
  {
    src: "/img/photos/residential.jpg",
    alt: "Residential roofing project completed by Helsley Roofing Company",
    category: "Residential",
  },
  {
    src: "/img/photos/residential-2.png",
    alt: "Residential roof installed by Helsley Roofing Company in Plano",
    category: "Residential",
  },
  {
    src: "/img/photos/asphalt.jpg",
    alt: "Asphalt shingle roofing installed on a Plano home",
    category: "Residential",
  },
  {
    src: "/img/roof-detail.jpg",
    alt: "Close detail of newly installed dimensional shingles and ridge vent",
    category: "Roof Repair",
  },
  {
    src: "/img/photos/storm.jpg",
    alt: "Roof shingle repair following a North Texas storm",
    category: "Roof Repair",
  },
  {
    src: "/img/photos/storm-damage.jpg",
    alt: "Storm damaged roof inspected by Helsley Roofing Company",
    category: "Storm Damage",
  },
  {
    src: "/img/photos/gutters.jpg",
    alt: "Gutter installation completed by Helsley Roofing Company",
    category: "Gutters",
  },
  {
    src: "/img/photos/gutters-hero.jpg",
    alt: "Seamless gutter run along a residential roofline",
    category: "Gutters",
  },
  {
    src: "/img/photos/multifamily.jpg",
    alt: "Multi-family roofing project in the Dallas Fort Worth area",
    category: "Multi-Family",
  },
  {
    src: "/img/photos/about.jpg",
    alt: "Helsley Roofing Company work in a North Texas neighborhood",
    category: "Residential",
  },
  {
    src: "/img/photos/group-1.jpg",
    alt: "The Helsley Roofing Company team",
    category: "The Team",
  },
  {
    src: "/img/photos/group-2.jpg",
    alt: "Helsley Roofing Company team members on site",
    category: "The Team",
  },
];

export const galleryCategories = [
  "All",
  ...Array.from(new Set(gallery.map((g) => g.category))),
] as const;
