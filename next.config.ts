import type { NextConfig } from "next";

/**
 * SEO MIGRATION MAP
 * ------------------------------------------------------------------
 * Every legacy helsleyroofing.com URL discovered during the crawl is
 * mapped to its new destination with a permanent (301) redirect so no
 * existing local SEO equity is lost.
 */
const legacyRedirects: { source: string; destination: string }[] = [
  // Services
  { source: "/residential-roofing", destination: "/services/residential-roofing" },
  { source: "/residential-roofing/new-roof-installation", destination: "/services/new-roof-installation" },
  { source: "/residential-roofing/roof-inspections", destination: "/services/roof-inspections" },
  { source: "/roof-replacement", destination: "/services/roof-replacement" },
  { source: "/roof-repair", destination: "/services/roof-repair" },
  { source: "/roof-leak-repair", destination: "/services/roof-leak-repair" },
  { source: "/storm-damage-roof-repair", destination: "/services/storm-damage-roof-repair" },
  { source: "/storm-damage-roof-repair/hail", destination: "/services/hail-damage-roof-repair" },
  { source: "/storm-damage-roof-repair/hail-damage-roof-repair", destination: "/services/hail-damage-roof-repair" },
  { source: "/storm-damage-roof-repair/wind-damage-roof-repair", destination: "/services/wind-damage-roof-repair" },
  { source: "/roof-damage-insurance-claims", destination: "/services/roof-damage-insurance-claims" },
  { source: "/gutters", destination: "/services/gutters" },
  { source: "/gutters/seamless", destination: "/services/seamless-gutters" },
  { source: "/multi-family", destination: "/services/multi-family" },

  // Roof types
  { source: "/asphalt-shingle-roofing", destination: "/roof-types/asphalt-shingle-roofing" },
  { source: "/asphalt-shingle-roofing/three-tab", destination: "/roof-types/asphalt-shingle-roofing" },
  { source: "/asphalt-shingle-roofing/architectural-shingle-roofing", destination: "/roof-types/asphalt-shingle-roofing" },
  { source: "/asphalt-shingle-roofing/fiberglass-shingle-roofing", destination: "/roof-types/asphalt-shingle-roofing" },
  { source: "/asphalt-shingle-roofing/organic-mat-based-shingle", destination: "/roof-types/asphalt-shingle-roofing" },
  { source: "/asphalt-shingle-roofing/composition-laminated", destination: "/roof-types/asphalt-shingle-roofing" },
  { source: "/asphalt-shingle-roofing/composition-laminated/three-tab", destination: "/roof-types/asphalt-shingle-roofing" },
  { source: "/asphalt-shingle-roofing/composition-laminated/ir-composition", destination: "/roof-types/asphalt-shingle-roofing" },
  { source: "/asphalt-shingle-roofing/composition-laminated/premium-designer-composition", destination: "/roof-types/asphalt-shingle-roofing" },
  { source: "/asphalt-shingle-roofing/impact-resistant", destination: "/roof-types/asphalt-shingle-roofing" },
  { source: "/asphalt-shingle-roofing/impact-resistant/ir-stone-coated-steel", destination: "/roof-types/asphalt-shingle-roofing" },
  { source: "/asphalt-shingle-roofing/impact-resistant/ir-synthetic-slate-shake", destination: "/roof-types/asphalt-shingle-roofing" },
  { source: "/asphalt-shingle-roofing/specialty-roofs", destination: "/roof-types/asphalt-shingle-roofing" },
  { source: "/asphalt-shingle-roofing/slate", destination: "/roof-types/slate-roofing" },
  { source: "/asphalt-shingle-roofing/stone", destination: "/roof-types/asphalt-shingle-roofing" },
  { source: "/standing-seam-metal-roof", destination: "/roof-types/metal-roofing" },
  { source: "/metal-roofing", destination: "/roof-types/metal-roofing" },
  { source: "/tile-roofing", destination: "/roof-types/tile-roofing" },
  { source: "/slate-roofing", destination: "/roof-types/slate-roofing" },
  { source: "/cedar-roofing", destination: "/roof-types/cedar-roofing" },
  { source: "/flat-roofing", destination: "/roof-types/flat-roofing" },
  { source: "/tpo-roofs", destination: "/roof-types/tpo-roofing" },
  { source: "/allen-tx-tile-roofers", destination: "/roof-types/tile-roofing" },

  // Company
  { source: "/about-us", destination: "/about" },
  { source: "/homepage-2", destination: "/" },
  { source: "/customer-reviews", destination: "/reviews" },
  { source: "/referral-rewards", destination: "/referral-program" },
  { source: "/free-inspection", destination: "/contact" },
  { source: "/gallery", destination: "/gallery" },
  { source: "/sitemap", destination: "/site-map" },
  { source: "/around-the-web", destination: "/reviews" },
  { source: "/blog", destination: "/" },
  { source: "/tips-to-ensure-a-successful-roofing-job", destination: "/services" },
];

const nextConfig: NextConfig = {
  async redirects() {
    // Legacy /service-areas/<city>-tx-roofers paths are preserved verbatim
    // by the new route, so they need no redirect.
    return legacyRedirects
      .filter((r) => r.source !== r.destination)
      .map((r) => ({ ...r, permanent: true }));
  },
};

export default nextConfig;
