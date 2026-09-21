import type { Metadata } from "next";
import { CtaBand, Eyebrow, PageHero, SectionHeading } from "@/components/ui";
import { alanBio, alanQuote, businessPractices } from "@/content/company";
import { owner, team } from "@/content/team";

export const metadata: Metadata = {
  title: "Our Team",
  description:
    "Meet Alan Helsley, owner of Helsley Roofing Company, and the Plano-based sales and office staff behind every roofing project.",
};

export default function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Team"
        title="The People Behind the Work."
        intro="Alan has assembled a knowledgeable and professional sales and office staff, and built solid relationships with suppliers and roofing crews."
        image="/img/photos/group-1.jpg"
        imageAlt="The Helsley Roofing Company team"
        trail={[{ label: "About", href: "/about" }, { label: "Team" }]}
      />

      <section className="shell py-20 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <img
            src={owner.photo}
            alt={`${owner.name}, owner of Helsley Roofing Company`}
            className="aspect-[4/5] w-full object-cover object-top"
          />
          <div>
            <Eyebrow>{owner.role}</Eyebrow>
            <h2 className="text-[2rem] font-extrabold sm:text-[2.6rem]">
              {owner.name}
            </h2>
            <div className="mt-7 space-y-5 leading-relaxed text-[var(--color-muted)]">
              {alanBio.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <blockquote className="mt-8 border-l-2 border-[var(--color-red)] pl-6">
              <p className="font-[family-name:var(--font-serif)] text-[1.2rem] italic leading-snug text-[var(--color-ink)]">
                “{alanQuote}”
              </p>
            </blockquote>

            <h3 className="mt-10 text-[0.72rem] font-bold uppercase tracking-[0.15em] text-[var(--color-muted)]">
              Committed to these business practices
            </h3>
            <ul className="mt-5 grid gap-x-8 gap-y-3 sm:grid-cols-2">
              {businessPractices.map((b) => (
                <li key={b} className="flex gap-3 text-[0.92rem] leading-snug">
                  <span aria-hidden="true" className="text-[var(--color-red)]">
                    ✓
                  </span>
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--color-line)] bg-[var(--color-stone)]">
        <div className="shell py-20 lg:py-24">
          <SectionHeading
            eyebrow="Sales & Office Staff"
            title="Names You'll Hear in Our Reviews."
            intro="These are the team members published on the Helsley Roofing website. Customers regularly mention them by name in Google reviews."
          />
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {team.map((m) => (
              <figure
                key={m.name}
                className="img-zoom overflow-hidden border border-[var(--color-line)] bg-white"
              >
                <span className="block aspect-[4/5] overflow-hidden">
                  <img
                    src={m.photo}
                    alt={`${m.name} of Helsley Roofing Company`}
                    loading="lazy"
                    className="h-full w-full object-cover object-top"
                  />
                </span>
                <figcaption className="p-5">
                  <span className="block font-[family-name:var(--font-display)] text-[1.05rem] font-extrabold">
                    {m.name}
                  </span>
                  <span className="mt-1 block text-[0.78rem] text-[var(--color-muted)]">
                    Helsley Roofing Company
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="shell py-20 lg:py-24">
        <div className="grid gap-4 sm:grid-cols-2">
          <img
            src="/img/photos/group-1.jpg"
            alt="Helsley Roofing Company team photograph"
            loading="lazy"
            className="aspect-[4/3] w-full object-cover"
          />
          <img
            src="/img/photos/group-2.jpg"
            alt="Helsley Roofing Company team members on site"
            loading="lazy"
            className="aspect-[4/3] w-full object-cover"
          />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
