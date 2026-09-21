export type RoofType = {
  slug: string;
  name: string;
  family: "Asphalt Shingle" | "Premium & Natural" | "Low-Slope & Metal";
  tagline: string;
  image: string;
  imageAlt: string;
  intro: string[];
  characteristics?: { label: string; value: string }[];
  sections?: { title: string; body: string }[];
  faqs?: { q: string; a: string }[];
  variants?: { name: string; body: string }[];
  legacyUrl: string;
};

export const roofTypes: RoofType[] = [
  {
    slug: "asphalt-shingle-roofing",
    name: "Asphalt Shingle Roofing",
    family: "Asphalt Shingle",
    tagline: "The most common and most affordable option in Plano.",
    image: "/img/photos/asphalt.jpg",
    imageAlt: "Asphalt shingle roofing on a Plano, TX home",
    intro: [
      "Asphalt shingle roofing is the most common and most affordable option available in Plano, making it an excellent choice for a budget-friendly roof that is still sturdy and reliable.",
      "It offers a wide array of variations, so homeowners can tailor a roof's finish to their preferences without breaking the bank.",
    ],
    variants: [
      {
        name: "Three-Tab Asphalt Shingles",
        body: "The most common type of asphalt shingle, classified by cutouts that make them look like three separate pieces. Affordable, lightweight, easy to maintain, energy efficient, and can last up to 20 years.",
      },
      {
        name: "Architectural Asphalt Shingles",
        body: "Laminated with an additional asphalt layer and bonded with asphalt sealant, architectural shingles have a more defined, structural look and are more durable and waterproof than three-tab. They come in a variety of shapes, colors and sizes and can mimic the look of premium alternatives like cedar and slate.",
      },
      {
        name: "Fiberglass Shingles",
        body: "Made with a woven fiberglass base, asphalt coating and ceramic granules on top — creating a waterproof, UV-protectant shingle that is lightweight and thin due to lower amounts of asphalt.",
      },
      {
        name: "Organic Mat-Based Shingles",
        body: "Built on a recycled felt paper base. Heavier, thicker and slightly more expensive than fiberglass shingles, but also more rugged and flexible.",
      },
      {
        name: "Impact-Resistant Shingles",
        body: "Impact-resistant shingle options are available and are a common consideration in hail-prone parts of North Texas. Options include impact-resistant composition, synthetic slate and shake, and stone-coated steel.",
      },
      {
        name: "Premium Designer Composition",
        body: "Heavier, dimensional designer profiles for homeowners wanting a distinctive roof line while staying within a composition roofing system.",
      },
    ],
    sections: [
      {
        title: "Affordability",
        body: "An asphalt shingle roof is a fraction of the cost of most other roofing types. Even on the premium end, asphalt shingles give homeowners a cost-effective result. With proper installation and regular maintenance, a quality roof does not have to break the bank.",
      },
      {
        title: "Color Variety",
        body: "Asphalt comes in a wide variety of colors, from neutral grays and browns to more statement-making hues. Depending on budget, homeowners can install asphalt shingle roofing that emulates wood or slate.",
      },
      {
        title: "Simple Installation",
        body: "Asphalt shingle roofing is simple and cost effective to install. New shingles can sometimes be installed in less than a day. With proper maintenance, asphalt shingle roofing will last up to 20 years.",
      },
    ],
    faqs: [
      {
        q: "How much does it cost to replace an asphalt shingle roof?",
        a: "Costs vary depending on the type of asphalt shingle you choose, the contractor, and the materials used. As a broad ballpark the current Helsley site references anywhere between $3.50 and $5.50 per sq. ft. A free inspection and written estimate is the only way to get a real number for your home.",
      },
      {
        q: "How long do asphalt roof shingles last?",
        a: "The average asphalt roof shingles are expected to last around 20 years. Regular maintenance and prompt repairs can help extend that lifespan.",
      },
      {
        q: "What color shingles are best?",
        a: "That is a matter of personal preference combined with what works with the design of the home. Asphalt roofing offers a wide range of colors — it is best to discuss options with your roofer before deciding, since you will live with it for at least two decades.",
      },
    ],
    legacyUrl: "/asphalt-shingle-roofing/",
  },
  {
    slug: "metal-roofing",
    name: "Metal Roofing",
    family: "Low-Slope & Metal",
    tagline: "Standing seam and metal systems built for longevity.",
    image: "/img/photos/roof-types.jpg",
    imageAlt: "Standing seam metal roof on a residential property",
    intro: [
      "More and more homeowners are choosing metal. Metal roof costs are lower than other materials over time, metal roofs last longer, they are more weather resistant, and they are easy to maintain.",
      "Standing seam is the profile most often specified for residential metal roofing, with concealed fasteners and continuous vertical panels.",
    ],
    characteristics: [
      { label: "Common profile", value: "Standing seam" },
      { label: "Best for", value: "Longevity and weather resistance" },
      { label: "Maintenance", value: "Low" },
    ],
    legacyUrl: "/standing-seam-metal-roof/",
  },
  {
    slug: "tile-roofing",
    name: "Tile Roofing",
    family: "Premium & Natural",
    tagline: "Clay or concrete tile with exceptional service life.",
    image: "/img/photos/about.jpg",
    imageAlt: "Tile roof on a North Texas home",
    intro: [
      "Made of either clay or concrete, a tiled roof can mean you never replace your roof again in your lifetime. Tile is low maintenance, extremely durable, and impervious to rot and mildew.",
      "Given these factors, tile roofs can last up to 100 years.",
    ],
    characteristics: [
      { label: "Material", value: "Clay or concrete" },
      { label: "Referenced lifespan", value: "Up to 100 years" },
      { label: "Maintenance", value: "Low" },
    ],
    legacyUrl: "/tile-roofing/",
  },
  {
    slug: "slate-roofing",
    name: "Slate Roofing",
    family: "Premium & Natural",
    tagline: "Natural stone — the pinnacle of roof types.",
    image: "/img/roof-detail.jpg",
    imageAlt: "Natural slate roof detail",
    intro: [
      "Many would agree that slate roofs are the pinnacle in roof types. The natural state of the material gives the home a beautiful finish.",
      "The key distinguishing factor of slate is its lifespan — up to 200 years in some cases, which is only possible because of its extreme durability.",
    ],
    characteristics: [
      { label: "Material", value: "Natural stone" },
      { label: "Referenced lifespan", value: "Up to 200 years" },
      { label: "Character", value: "Premium natural finish" },
    ],
    legacyUrl: "/slate-roofing/",
  },
  {
    slug: "cedar-roofing",
    name: "Cedar Roofing",
    family: "Premium & Natural",
    tagline: "Perhaps the most aesthetically distinctive roof type.",
    image: "/img/photos/residential.jpg",
    imageAlt: "Cedar shake roof on a residential home",
    intro: [
      "Perhaps the most aesthetically superior roof type, cedar roofs add a beautiful finish to a home.",
      "Cedar enjoys a long lifespan thanks to its durability and resistance to the effects of storms. If you are willing to invest, a cedar roof can prove a worthy long-term investment.",
    ],
    characteristics: [
      { label: "Material", value: "Natural cedar" },
      { label: "Character", value: "Warm, textured, distinctive" },
    ],
    legacyUrl: "/cedar-roofing/",
  },
  {
    slug: "flat-roofing",
    name: "Flat Roofing",
    family: "Low-Slope & Metal",
    tagline: "Low-slope systems for homes and larger properties.",
    image: "/img/photos/multifamily.jpg",
    imageAlt: "Flat low-slope roof on a property in the Dallas area",
    intro: [
      "Although not as common in residential areas as other types, flat roofs are an option for some, mainly due to their low cost advantage.",
      "They are easier to install and can increase usable outdoor space. If you are looking for low maintenance, a flat roof is worth looking into.",
    ],
    characteristics: [
      { label: "Best for", value: "Low-slope residential and multi-family" },
      { label: "Advantage", value: "Cost and usable outdoor space" },
    ],
    legacyUrl: "/flat-roofing/",
  },
  {
    slug: "tpo-roofing",
    name: "TPO Roofing",
    family: "Low-Slope & Metal",
    tagline: "Single-ply membrane for low-slope and multi-family roofs.",
    image: "/img/photos/multifamily.jpg",
    imageAlt: "TPO single-ply membrane roof",
    intro: [
      "TPO is a single-ply membrane roofing system commonly specified on low-slope roofs, including multi-family and light commercial properties.",
      "Helsley Roofing installs TPO roofing as part of our low-slope and multi-family roofing work across the Dallas–Fort Worth area.",
    ],
    characteristics: [
      { label: "Type", value: "Single-ply membrane" },
      { label: "Best for", value: "Low-slope and multi-family" },
    ],
    legacyUrl: "/tpo-roofs/",
  },
];

export const roofTypeMap = new Map(roofTypes.map((r) => [r.slug, r]));

export const roofTypeFamilies: {
  name: RoofType["family"];
  types: RoofType[];
}[] = (
  ["Asphalt Shingle", "Premium & Natural", "Low-Slope & Metal"] as const
).map((name) => ({ name, types: roofTypes.filter((r) => r.family === name) }));
