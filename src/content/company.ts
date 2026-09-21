/**
 * Company data sourced from the current official Helsley Roofing website
 * (helsleyroofing.com) plus verified business-listing information.
 *
 * Anything that could not be verified is either omitted or carries a
 * `verify: true` flag for client confirmation before production launch.
 * These flags are internal only and are never rendered publicly.
 */

export const company = {
  name: "Helsley Roofing Company",
  shortName: "Helsley Roofing",
  foundedYear: 1992, // Verified: homepage — "Since 1992 the Helsley Roofing Company..."
  alanStartYear: 1978, // Verified: About page, Alan Helsley first-person bio
  city: "Plano",
  state: "Texas",
  stateAbbr: "TX",
  address: {
    street: "6817 K Ave #102",
    city: "Plano",
    state: "TX",
    zip: "75074",
  },
  phone: "972-578-8982",
  phoneHref: "tel:9725788982",
  googleRating: "5.0",
  googleReviewCount: 84,
  googleReviewsUrl:
    "https://search.google.com/local/reviews?placeid=ChIJH2-McCIZTIYR_23c80Xgqww",
  googleWriteReviewUrl:
    "https://search.google.com/local/writereview?placeid=ChIJH2-McCIZTIYR_23c80Xgqww",
  legacyUrl: "https://helsleyroofing.com/",
} as const;

export const addressLines = [
  company.address.street,
  `${company.address.city}, ${company.address.state} ${company.address.zip}`,
];

/** Verified on the About page: Alan's first-person statement. */
export const alanBio = [
  "I was born in Dallas, raised in Richardson, and have lived in the Metroplex my entire life. I began working in the roofing industry as a teenager in 1978.",
  "I have gained years of experience in the industry as a laborer, sales assistant, salesman, and currently as business owner and manager. I have assembled a knowledgeable and professional sales and office staff, and I have built solid relationships with my suppliers and roofing crews.",
];

export const alanQuote =
  "My main goal is to earn the satisfaction and loyalty of all homeowners that entrust Helsley Roofing with their roofing projects.";

/** Verified on the About page — Alan's published commitments. */
export const businessPractices = [
  "Return phone calls in a timely manner.",
  "Be punctual for all appointments.",
  "Be knowledgeable, professional and courteous.",
  "Present a professional estimate.",
  "Provide a list of new roofs completed in the neighborhood.",
  "Provide daily job supervision.",
  "Inspect finished job thoroughly.",
  "Maintain a clean and neat jobsite.",
  "Collect payment only upon completion.",
];

export type Credential = {
  name: string;
  detail: string;
  url?: string;
  /** Internal flag: time-sensitive status, confirm with client before launch. */
  verify?: boolean;
};

/** Sourced from the current "Our Accreditations" section. */
export const credentials: Credential[] = [
  {
    name: "GAF",
    detail: "Master Elite Contractor",
    url: "https://www.gaf.com/",
    verify: true,
  },
  {
    name: "TAMKO",
    detail: "Pro Certified Contractor",
    url: "https://www.tamko.com/find-a-pro",
    verify: true,
  },
  {
    name: "Owens Corning",
    detail: "Preferred Contractor",
    verify: true,
  },
  {
    name: "CertainTeed",
    detail: "ShingleMaster",
    url: "http://www.certainteed.com/",
    verify: true,
  },
  {
    name: "BBB",
    detail: "Accredited Business",
    url: "https://www.bbb.org/us/tx/plano/profile/roofing-contractors/helsley-roofing-company-0875-19000036",
    verify: true,
  },
  {
    name: "NTRCA",
    detail: "North Texas Roofing Contractors Association",
    url: "https://www.ntrca.com/",
    verify: true,
  },
  {
    name: "RCAT",
    detail: "Roofing Contractors Association of Texas",
    url: "https://www.rcat.net/",
    verify: true,
  },
  {
    name: "EPA",
    detail: "Lead-Safe Certified Firm",
    url: "https://www.epa.gov/lead",
    verify: true,
  },
  {
    name: "Contractor Connection",
    detail: "Network Member",
    url: "https://www.contractorconnection.com/",
    verify: true,
  },
];

/**
 * Current site states: "Proud to Offer A Lifetime Warranty on Your Shingle Roof"
 * alongside "BBB A+ rated business", "Inspection and Restoration Experts",
 * "We Accept Credit Card Payments", "Impact Resistant Shingles Available".
 * Warranty wording intentionally presented as options with conditions noted.
 */
export const warrantyPoints = [
  {
    title: "Manufacturer shingle warranties",
    body: "The current Helsley Roofing website advertises a lifetime warranty on your shingle roof. Manufacturer lifetime shingle warranties are issued by the shingle manufacturer and carry their own coverage terms, proration schedules, registration requirements and transferability rules.",
  },
  {
    title: "Workmanship",
    body: "Installation workmanship coverage is separate from the manufacturer's material warranty. Ask your Helsley estimator to put the applicable workmanship terms for your specific roofing system in writing on your estimate.",
  },
  {
    title: "System and product choice matters",
    body: "Coverage varies by manufacturer, by product line and by whether a full roofing system is installed. Impact-resistant shingle options are available and may carry different terms.",
  },
];

export const companyHighlights = [
  "BBB A+ rated business", // current site claim (flagged for verification)
  "Inspection and Restoration Experts",
  "We Accept Credit Card Payments",
  "Impact Resistant Shingles Available",
];

export const process = [
  {
    step: "01",
    title: "Request a Free Inspection",
    body: "Call the office or send a request. Tell us what you are seeing — a leak, missing shingles, storm concerns, aging gutters or a roof nearing the end of its life.",
  },
  {
    step: "02",
    title: "Roof & Property Evaluation",
    body: "A Helsley estimator inspects the roof and related components, documents what is found, and explains the condition of your roof in plain language.",
  },
  {
    step: "03",
    title: "Recommended Next Steps",
    body: "You receive a professional written estimate. We will always look at repair before replacement where repair is the right answer, and we can provide a list of new roofs completed in your neighborhood.",
  },
  {
    step: "04",
    title: "Roofing Work",
    body: "Our crews complete the work with daily job supervision, a clean and neat jobsite, a thorough final inspection — and payment collected only upon completion.",
  },
];

export const whyHelsley = [
  {
    title: "Decades of Roofing Experience",
    body: "Helsley Roofing Company has served Dallas, Fort Worth and Plano homeowners since 1992, and Alan Helsley has worked in the roofing industry since 1978.",
  },
  {
    title: "Local North Texas Roots",
    body: "Born in Dallas, raised in Richardson, and in the Metroplex his entire life — Alan built this company in the same neighborhoods it still serves.",
  },
  {
    title: "Professional Roof Inspection",
    body: "Inspections are free. You get a professional estimate and a clear explanation of what your roof actually needs.",
  },
  {
    title: "Quality Roofing Craftsmanship",
    body: "Daily job supervision, a thorough final inspection, and a clean and neat jobsite are published commitments, not marketing lines.",
  },
  {
    title: "Established Supplier & Crew Relationships",
    body: "Alan has built solid relationships with his suppliers and roofing crews, and assembled a knowledgeable, professional sales and office staff.",
  },
];

/** Verified referral structure from /referral-rewards/. Amounts flagged. */
export const referral = {
  intro:
    "We believe that our dedication to customer satisfaction sets us apart from other roofing companies. Because the positive word of mouth advertising we receive is very important to us and to the success of our business, we have set up a referral program designed to show our appreciation by rewarding our loyal customers.",
  mechanic:
    "Anytime you give our name to a friend or neighbor, and they contract with us for a new roof, we will send you a referral bonus.",
  tiers: [
    { amount: "$75", scope: "10–20 Squares", verify: true },
    { amount: "$130", scope: "21–40 Squares", verify: true },
    { amount: "$150", scope: "40 Squares or more", verify: true },
  ],
  rules: [
    "Please let us know of your referral prior to the completion of the roofing project.",
    "When the account is paid in full, we will send you your bonus.",
    "Only one reward will be awarded per contract.",
  ],
};
