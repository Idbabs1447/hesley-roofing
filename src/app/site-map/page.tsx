import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand, PageHero } from "@/components/ui";
import { services } from "@/content/services";
import { roofTypes } from "@/content/roof-types";
import { serviceAreas } from "@/content/areas";

export const metadata: Metadata = {
  title: "Site Map",
  description: "Every page on the Helsley Roofing Company website.",
};

const companyLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Our Team", href: "/about/team" },
  { label: "Credentials & Accreditations", href: "/credentials" },
  { label: "Warranty Options", href: "/warranty" },
  { label: "Our Work", href: "/gallery" },
  { label: "Customer Reviews", href: "/reviews" },
  { label: "Referral Rewards", href: "/referral-program" },
  { label: "Contact & Free Inspection", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy-policy" },
];

function Column({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h2 className="mb-5 text-[0.7rem] font-bold uppercase tracking-[0.15em] text-[var(--color-muted)]">
        {title}
      </h2>
      <ul className="space-y-2.5">
        {links.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              className="text-[0.92rem] hover:text-[var(--color-red)] link-underline"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function SiteMapPage() {
  return (
    <>
      <PageHero
        compact
        eyebrow="Site Map"
        title="Everything on This Site."
        image="/img/photos/roof-types.jpg"
        imageAlt="Roofing materials and types"
        trail={[{ label: "Site Map" }]}
      />
      <section className="shell grid gap-12 py-20 sm:grid-cols-2 lg:grid-cols-4 lg:py-24">
        <Column title="Company" links={companyLinks} />
        <Column
          title="Services"
          links={[
            { label: "All Services", href: "/services" },
            ...services.map((s) => ({
              label: s.title,
              href: `/services/${s.slug}`,
            })),
          ]}
        />
        <Column
          title="Roof Types"
          links={[
            { label: "All Roof Types", href: "/roof-types" },
            ...roofTypes.map((r) => ({
              label: r.name,
              href: `/roof-types/${r.slug}`,
            })),
          ]}
        />
        <Column
          title="Service Areas"
          links={[
            { label: "All Service Areas", href: "/service-areas" },
            ...serviceAreas.map((a) => ({
              label: a.name,
              href: `/service-areas/${a.slug}`,
            })),
          ]}
        />
      </section>
      <CtaBand />
    </>
  );
}
