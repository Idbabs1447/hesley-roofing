import type { Metadata } from "next";
import { CtaBand, PageHero, SectionHeading } from "@/components/ui";
import { companyHighlights, credentials } from "@/content/company";

export const metadata: Metadata = {
  title: "Credentials & Accreditations",
  description:
    "Helsley Roofing Company's manufacturer certifications and trade association memberships, including GAF, TAMKO, Owens Corning, CertainTeed, BBB, NTRCA and RCAT.",
};

export default function CredentialsPage() {
  return (
    <>
      <PageHero
        eyebrow="Credentials & Accreditations"
        title="Certified by the Manufacturers We Install."
        intro="Helsley Roofing Company's team of roofing professionals is certified by leading manufacturers in the roofing industry and holds memberships with regional trade associations."
        image="/img/roof-detail.jpg"
        imageAlt="Detail of a professionally installed shingle roof"
        trail={[{ label: "Credentials" }]}
      />

      <section className="shell py-20 lg:py-28">
        <SectionHeading
          eyebrow="Accreditations"
          title="Manufacturer & Association Credentials."
          intro="Certification programs are issued and maintained by each manufacturer or association. Ask your Helsley estimator to confirm the current status of any credential that matters to your project."
        />

        <ul className="mt-14 grid gap-px border border-[var(--color-line)] bg-[var(--color-line)] sm:grid-cols-2 lg:grid-cols-3">
          {credentials.map((c) => (
            <li key={c.name} className="bg-white p-8">
              <p className="font-[family-name:var(--font-display)] text-[1.15rem] font-extrabold uppercase tracking-[0.04em]">
                {c.name}
              </p>
              <p className="mt-2 text-[0.92rem] leading-relaxed text-[var(--color-muted)]">
                {c.detail}
              </p>
              {c.url ? (
                <a
                  href={c.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-block text-[0.7rem] font-bold uppercase tracking-[0.13em] text-[var(--color-red)] link-underline"
                >
                  Visit {c.name} ↗
                </a>
              ) : null}
            </li>
          ))}
        </ul>
      </section>

      <section className="border-y border-[var(--color-line)] bg-[var(--color-stone)]">
        <div className="shell py-20 lg:py-24">
          <SectionHeading
            eyebrow="Also Worth Knowing"
            title="Practical Details Homeowners Ask About."
          />
          <ul className="mt-12 grid gap-px border border-[var(--color-line)] bg-[var(--color-line)] sm:grid-cols-2 lg:grid-cols-4">
            {companyHighlights.map((h) => (
              <li
                key={h}
                className="flex min-h-[8rem] items-center bg-white p-7 text-[1rem] font-semibold leading-snug"
              >
                {h}
              </li>
            ))}
          </ul>
          <p className="mt-8 max-w-3xl text-[0.9rem] leading-relaxed text-[var(--color-muted)]">
            Certification and rating statuses can change over time. The items
            shown here reflect what Helsley Roofing Company currently publishes.
            For the most current standing of any specific program, contact the
            office or the issuing organization directly.
          </p>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
