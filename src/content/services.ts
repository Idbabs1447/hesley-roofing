export type Faq = { q: string; a: string };

export type Service = {
  slug: string;
  title: string;
  navTitle: string;
  group: "Roofing" | "Repair & Storm" | "Exterior" | "Property";
  summary: string;
  heroImage: string;
  heroAlt: string;
  eyebrow: string;
  headline: string;
  intro: string[];
  context?: { title: string; body: string }[];
  bullets?: { title: string; body: string }[];
  faqs?: Faq[];
  relatedRoofTypes?: string[];
  children?: string[];
  legacyUrl: string;
  featured?: boolean;
};

export const services: Service[] = [
  {
    slug: "residential-roofing",
    title: "Residential Roofing",
    navTitle: "Residential Roofing",
    group: "Roofing",
    featured: true,
    summary:
      "Roof replacement, new roof installation and roof inspections for North Texas homes.",
    heroImage: "/img/photos/residential.jpg",
    heroAlt:
      "Residential home in Plano, Texas with a newly installed shingle roof",
    eyebrow: "RESIDENTIAL ROOFING",
    headline: "Roofing Built for North Texas Homes.",
    intro: [
      "Helsley Roofing Company works on homes across Plano and the wider Dallas–Fort Worth area. Our team of residential roof specialists is experienced, insured and knowledgeable, and we bring the same level of professionalism to every customer.",
      "Friendliness and respect are a priority here. Serving our Plano neighbors is what drives us to do the best job possible, every time.",
    ],
    context: [
      {
        title: "Roof Replacement",
        body: "Helsley Roofing Company will always advocate for repairs before replacement, but in some cases a roof replacement is simply inevitable. We hold to the highest level of workmanship every time we complete a replacement.",
      },
      {
        title: "New Roof Installation",
        body: "New roofing installation is a daunting task for any homeowner. We make it our mission to keep the process smooth and efficient, advising homeowners at every step.",
      },
      {
        title: "Roof Inspections",
        body: "Inspections are free. An estimator looks at the roof and related components, documents the condition and explains what is actually needed — including when nothing is needed yet.",
      },
    ],
    faqs: [
      {
        q: "How do I know my roof needs to be replaced?",
        a: "Start with your home improvement records to see when the current roof was installed and measure that against the material it is made of. Tell-tale signs include cracked or curled shingles, missing granules, and simply a worn, old-looking roof.",
      },
      {
        q: "Can you replace part of a roof?",
        a: "With shingles or tiles, replacing the faulty parts is often all it takes to restore the roof. If damage extends across a large surface area, replacing the roof may be the more cost-effective option in the long run.",
      },
      {
        q: "How often should you change your roof?",
        a: "It varies greatly by roof type. Asphalt shingles have a lifespan of up to about 30 years, metal can go much longer, concrete and clay tile longer still, and slate can last for generations.",
      },
    ],
    relatedRoofTypes: [
      "asphalt-shingle-roofing",
      "metal-roofing",
      "tile-roofing",
      "slate-roofing",
      "cedar-roofing",
      "flat-roofing",
    ],
    children: ["roof-replacement", "new-roof-installation", "roof-inspections"],
    legacyUrl: "/residential-roofing/",
  },
  {
    slug: "roof-replacement",
    title: "Roof Replacement",
    navTitle: "Roof Replacement",
    group: "Roofing",
    summary:
      "When repair is no longer the right answer, a full replacement done to a published standard of workmanship.",
    heroImage: "/img/roof-detail.jpg",
    heroAlt: "Detail of newly installed architectural asphalt shingles",
    eyebrow: "ROOF REPLACEMENT",
    headline: "Replace It Once. Replace It Right.",
    intro: [
      "Helsley Roofing Company will always advocate for repairs before replacement. When a roof has genuinely reached the end of its service life, we guarantee the highest level of workmanship on the replacement.",
      "You will receive a professional written estimate, daily job supervision while the work is underway, a thorough inspection of the finished job, and a clean and neat jobsite. Payment is collected only upon completion.",
    ],
    relatedRoofTypes: [
      "asphalt-shingle-roofing",
      "metal-roofing",
      "tile-roofing",
      "slate-roofing",
    ],
    faqs: [
      {
        q: "Will you tell me if I don't need a replacement?",
        a: "Yes. Our published practice is to advocate for repair before replacement. Several of our Google reviewers specifically mention being told their roof did not need replacing.",
      },
      {
        q: "Can you show me your work nearby?",
        a: "We can provide a list of new roofs completed in your neighborhood as part of the estimate.",
      },
    ],
    legacyUrl: "/roof-replacement/",
  },
  {
    slug: "new-roof-installation",
    title: "New Roof Installation",
    navTitle: "New Roof Installation",
    group: "Roofing",
    summary:
      "Guided installation of a new roofing system, with options explained before anything is ordered.",
    heroImage: "/img/photos/roof-types.jpg",
    heroAlt: "A range of residential roof types and finishes",
    eyebrow: "NEW ROOF INSTALLATION",
    headline: "A New Roof, Explained Before It Is Installed.",
    intro: [
      "New roofing installation is a daunting task for any homeowner. As local new roof installers in Plano, Helsley Roofing Company makes it our mission to ensure the process runs smoothly and efficiently, advising homeowners every step of the way.",
      "Shingle samples, material options and expectations are reviewed with you before work begins.",
    ],
    relatedRoofTypes: ["asphalt-shingle-roofing", "metal-roofing"],
    legacyUrl: "/residential-roofing/new-roof-installation/",
  },
  {
    slug: "roof-inspections",
    title: "Roof Inspections",
    navTitle: "Roof Inspections",
    group: "Roofing",
    summary:
      "A free, documented look at your roof and the components around it.",
    heroImage: "/img/photos/group-2.jpg",
    heroAlt: "Helsley Roofing team member inspecting a residential roof",
    eyebrow: "FREE ROOF INSPECTION",
    headline: "Start With Knowing What You Have.",
    intro: [
      "Helsley Roofing Company offers free roof inspections. An estimator gets on the roof, documents the condition, and explains what is found — with photos where that helps you understand the issue.",
      "An inspection is the right first step whether you have an active leak, recent storm activity in the neighborhood, or a roof that is simply getting older.",
    ],
    legacyUrl: "/residential-roofing/roof-inspections/",
  },
  {
    slug: "roof-repair",
    title: "Roof Repair",
    navTitle: "Roof Repair",
    group: "Repair & Storm",
    featured: true,
    summary:
      "Targeted repairs — from a handful of shingles to flashing, vents and penetrations.",
    heroImage: "/img/photos/storm.jpg",
    heroAlt: "Roof shingles being repaired on a North Texas home",
    eyebrow: "ROOF REPAIR",
    headline: "Fix the Cause, Not Just the Symptom.",
    intro: [
      "Often, major and even minor roof repairs can make the difference between an old, worn roof and a roof that performs like new. The roof repair team at Helsley Roofing Company is trained and experienced in the intricacies of roofing, big job or small.",
      "We look for the root cause. Our reviewers routinely describe repairs where the crew explained why a section of roof had failed and what would keep it from happening again.",
    ],
    children: ["roof-leak-repair"],
    faqs: [
      {
        q: "Do you handle small repairs?",
        a: "Yes. Repairs around vent pipes, flashing, a few lifted or missing shingles, and similar work are a regular part of what we do.",
      },
      {
        q: "Is the repair estimate free?",
        a: "Inspections are free and you will receive a professional written estimate before any work is scheduled.",
      },
    ],
    legacyUrl: "/roof-repair/",
  },
  {
    slug: "roof-leak-repair",
    title: "Roof Leak Repair",
    navTitle: "Roof Leak Repair",
    group: "Repair & Storm",
    summary:
      "Finding where water is actually getting in — then sealing it properly.",
    heroImage: "/img/photos/storm-damage.jpg",
    heroAlt: "Roof area being examined for the source of a leak",
    eyebrow: "ROOF LEAK REPAIR",
    headline: "Water Rarely Enters Where You See It.",
    intro: [
      "A stain on a ceiling is usually some distance from the actual entry point. Helsley Roofing Company inspects the roof to locate the source, documents it, and recommends the repair that addresses the cause.",
      "Where a temporary measure will protect the home until the permanent repair can be scheduled, we will tell you that too.",
    ],
    legacyUrl: "/roof-leak-repair/",
  },
  {
    slug: "storm-damage-roof-repair",
    title: "Storm Damage Roof Repair",
    navTitle: "Storm Damage Repair",
    group: "Repair & Storm",
    featured: true,
    summary:
      "Hail and wind damage inspection, repair and restoration across the Metroplex.",
    heroImage: "/img/photos/storm-damage.jpg",
    heroAlt: "Storm damaged residential roof in Plano, Texas",
    eyebrow: "STORM DAMAGE REPAIR",
    headline: "After Severe Weather, Start With the Roof.",
    intro: [
      "No matter how prepared you think you are, storms will come along and cause unpredictable damage. Your home's roof is often the first thing to take the impact, and that calls for attention from roofing professionals before further damage follows.",
      "If hail, wind or severe weather has affected your property, Helsley Roofing can inspect roofing concerns and discuss appropriate next steps.",
    ],
    context: [
      {
        title: "Hail Damage",
        body: "Depending on the roofing material, hail may cause splits or cracks that reduce the protective nature of your roofing. Water may seep through and cause further damage, and UV exposure to underlying components may reduce the lifespan of the material.",
      },
      {
        title: "Wind Damage",
        body: "Wind can lift or damage shingles, or remove them completely. Homeowners often cannot see surface damage from the ground, so it is best to get a roofing professional up on the roof for an inspection.",
      },
      {
        title: "Storm Damage Restoration",
        body: "If you are looking for more than a simple repair, we can also restore the roof. Speak to the Helsley team about roof storm damage restoration.",
      },
    ],
    faqs: [
      {
        q: "How do I know if my roof has storm damage?",
        a: "Common signs include missing or damaged shingles, falling debris, and in extreme cases water leaking into the home. If you suspect damage, have a professional inspect it rather than waiting.",
      },
      {
        q: "Is storm damage covered by insurance?",
        a: "This differs across policies and companies. By and large most insurers do address storm damage, but coverage, deductibles and exclusions vary — read your policy terms carefully and speak with your carrier. We are roofers, not insurance advisors, and we cannot predict how a claim will be handled.",
      },
      {
        q: "How long does it take to reroof a house?",
        a: "An average home reroof commonly takes somewhere between one and three days. Larger or more complex roofs take longer.",
      },
    ],
    children: [
      "hail-damage-roof-repair",
      "wind-damage-roof-repair",
      "roof-damage-insurance-claims",
    ],
    legacyUrl: "/storm-damage-roof-repair/",
  },
  {
    slug: "hail-damage-roof-repair",
    title: "Hail Damage Roof Repair",
    navTitle: "Hail Damage",
    group: "Repair & Storm",
    summary:
      "North Texas hail is hard on roofs. We inspect, document and repair.",
    heroImage: "/img/photos/storm.jpg",
    heroAlt: "Hail damaged shingles on a residential roof",
    eyebrow: "HAIL DAMAGE",
    headline: "Hail Damage Is Not Always Visible From the Ground.",
    intro: [
      "With hailstone sizes varying from storm to storm, there is no telling in advance what the extent of the damage may be. Depending on the roofing material, hail can cause splits or cracks that reduce the protective nature of your roofing.",
      "Water may be able to seep through and cause further damage to the home, and UV exposure to underlying roofing components may reduce the lifespan of the roofing material. Impact-resistant shingle options are available.",
    ],
    legacyUrl: "/storm-damage-roof-repair/hail/",
  },
  {
    slug: "wind-damage-roof-repair",
    title: "Wind Damage Roof Repair",
    navTitle: "Wind Damage",
    group: "Repair & Storm",
    summary: "Lifted, damaged or missing shingles after high-wind events.",
    heroImage: "/img/photos/storm-damage.jpg",
    heroAlt: "Wind lifted shingles on a residential roof",
    eyebrow: "WIND DAMAGE",
    headline: "Lifted Shingles Become Leaks.",
    intro: [
      "Wind damage from storms can have just as serious an impact as other severe weather. There is a strong possibility of lifted or damaged shingles, and in some cases completely missing shingles.",
      "Homeowners may not be aware of the surface damage immediately, so it is best to get your local roofing professionals up on the roof for an inspection.",
    ],
    legacyUrl: "/storm-damage-roof-repair/wind-damage-roof-repair/",
  },
  {
    slug: "roof-damage-insurance-claims",
    title: "Roof Damage Insurance Claims",
    navTitle: "Insurance Claims",
    group: "Repair & Storm",
    summary:
      "Documentation and coordination when your roof damage involves a claim.",
    heroImage: "/img/photos/group-1.jpg",
    heroAlt: "Helsley Roofing team reviewing roof documentation",
    eyebrow: "INSURANCE CLAIMS",
    headline: "Documented Work, Clearly Communicated.",
    intro: [
      "Many roof damage projects in North Texas involve an insurance claim. Helsley Roofing documents what we find on the roof and communicates clearly with homeowners throughout the project.",
      "Coverage decisions belong to your insurance carrier. We do not provide insurance or legal advice, and we cannot promise how any claim will be decided. What we can do is inspect the roof, document the condition, and give you a professional estimate for the work.",
    ],
    legacyUrl: "/roof-damage-insurance-claims/",
  },
  {
    slug: "gutters",
    title: "Gutters",
    navTitle: "Gutters",
    group: "Exterior",
    featured: true,
    summary:
      "Gutter and downspout installation and replacement — box, copper, seamless K-style and half-round.",
    heroImage: "/img/photos/gutters.jpg",
    heroAlt: "Newly installed seamless gutters on a Plano, Texas home",
    eyebrow: "GUTTERS",
    headline: "The Roof's Job Isn't Finished at the Edge.",
    intro: [
      "Upgrade your home with quality downspout and gutter installation from Helsley Roofing Company. We work to find the right solution for your home, needs and budget.",
      "Using materials from premier manufacturers, we install gutters that fit your home. The installation process is quick and seamless, and the products provide weather protection and durability — essential in a place like Plano.",
      "The process begins with a thorough evaluation of your home's existing gutters. Once we know where the issues are, we can recommend the proper solution at the right price point.",
    ],
    bullets: [
      {
        title: "Box Gutters",
        body: "A square, boxy profile often used in industrial applications and increasingly popular with homeowners wanting a clean, modern look.",
      },
      {
        title: "Copper Gutter Systems",
        body: "One of the best options for visual character. Copper ages well, lasts, and will never rust. It is pricier than other options and requires professional installation.",
      },
      {
        title: "Seamless / K-Style Gutters",
        body: "An affordable aluminum option, custom-made to fit your home, and a long-lasting solution that will not crack or split.",
      },
      {
        title: "Half-Round Gutters",
        body: "Less likely to clog or corrode and easier to clean, but they handle less volume — which matters in areas with heavy rainfall.",
      },
    ],
    children: ["seamless-gutters"],
    legacyUrl: "/gutters/",
  },
  {
    slug: "seamless-gutters",
    title: "Seamless Gutters",
    navTitle: "Seamless Gutters",
    group: "Exterior",
    summary:
      "Custom-made aluminum gutters formed to fit your home with no seams to split.",
    heroImage: "/img/photos/gutters-hero.jpg",
    heroAlt: "Seamless aluminum gutter run along a residential roofline",
    eyebrow: "SEAMLESS GUTTERS",
    headline: "Fewer Seams. Fewer Failure Points.",
    intro: [
      "Seamless K-style gutters are custom-made to fit your home. Because they are formed in continuous runs rather than joined sections, there are far fewer points where a gutter can crack, split or separate over time.",
      "Aluminum seamless gutters remain one of the most cost-effective long-term gutter solutions we install in Plano and the surrounding communities.",
    ],
    legacyUrl: "/gutters/seamless/",
  },
  {
    slug: "multi-family",
    title: "Multi-Family Roofing",
    navTitle: "Multi-Family Roofing",
    group: "Property",
    featured: true,
    summary:
      "Roofing for apartment communities, condominiums, churches and schools across the DFW area.",
    heroImage: "/img/photos/multifamily.jpg",
    heroAlt: "Multi-family apartment community roofing project",
    eyebrow: "MULTI-FAMILY",
    headline: "Larger Properties, Managed Properly.",
    intro: [
      "If multi-family roofing does not get the attention it deserves, small problems become large ones. What could have been typical maintenance becomes a full-scale repair; what could have been a regular repair becomes a complete replacement.",
      "Helsley Roofing Company offers multi-family roofing solutions across the Dallas–Fort Worth area. Whether your community needs regularly scheduled maintenance or a full roof replacement, our staff is ready to take it on.",
      "With decades of experience in the roofing industry, we have fixed roofing leaks, dealt with multi-family storm damage, and handled a wide range of other roofing problems.",
    ],
    bullets: [
      { title: "Condominiums", body: "Multi-building communities and HOAs." },
      { title: "Churches", body: "Congregation properties across the Metroplex." },
      { title: "Schools", body: "Education campuses and related buildings." },
    ],
    context: [
      {
        title: "Why property managers work with us",
        body: "Our dedicated multi-family team handles all aspects of these larger jobs, including project management and estimating. We set expectations and meet them on every project.",
      },
      {
        title: "Built on relationships",
        body: "We are passionate about building relationships with multi-family complexes and development companies. That relationship begins with upholding high standards of trust, and it is maintained through dedicated service and communication.",
      },
    ],
    relatedRoofTypes: ["flat-roofing", "tpo-roofing", "metal-roofing"],
    legacyUrl: "/multi-family/",
  },
];

export const serviceMap = new Map(services.map((s) => [s.slug, s]));

export function getService(slug: string) {
  return serviceMap.get(slug);
}

export const featuredServices = services.filter((s) => s.featured);

export const serviceGroups: { name: Service["group"]; services: Service[] }[] = (
  ["Roofing", "Repair & Storm", "Exterior", "Property"] as const
).map((name) => ({
  name,
  services: services.filter((s) => s.group === name),
}));

/** Options used by the inspection request form. */
export const serviceOptions = [
  "Free roof inspection",
  "Roof repair",
  "Roof replacement",
  "Storm / hail damage",
  "Roof leak",
  "Gutters",
  "Multi-family property",
  "Something else",
];
