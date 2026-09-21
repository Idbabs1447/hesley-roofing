import type { Metadata } from "next";
import Link from "next/link";
import { Button, CtaBand, PageHero, SectionHeading } from "@/components/ui";
import { roofTypeFamilies, roofTypes } from "@/content/roof-types";

export const metadata: Metadata = {
  title: "Roof Types We Install",
  description:
    "Asphalt shingle, metal, tile, slate, cedar, flat and TPO roofing installed by Helsley Roofing Company in Plano and the Dallas–Fort Worth area.",
};

export default function RoofTypesPage() {
  return (
    <>
      <PageHero
        eyebrow="Roof Types"
        title="Choose the Roof, Not Just the Roofer."
        intro="Helsley Roofing installs a full range of residential and low-slope roofing systems. Explore each material, then let a free inspection tell you which one actually fits your home."
        image="/img/photos/roof-types.jpg"
        imageAlt="A range of residential roof types and materials"
        trail={[{ label: "Roof Types" }]}
      />

      <div className="shell py-20 lg:py-28">
        <SectionHeading
          eyebrow="Compare"
          title="Materials at a glance."
          intro="A quick comparison of what each family of roofing is generally chosen for. Detailed material information lives on each roof type page."
        />

        <div className="mt-12 overflow-x-auto">
          <table className="w-full min-w-[42rem] border-collapse text-left">
            <caption className="sr-only">
              Comparison of roof types installed by Helsley Roofing Company
            </caption>
            <thead>
              <tr className="border-y border-[var(--color-line)]">
                {["Roof Type", "Family", "Generally chosen for"].map((h) => (
                  <th
                    key={h}
                    scope="col"
                    className="py-4 pr-6 text-[0.68rem] font-bold uppercase tracking-[0.15em] text-[var(--color-muted)]"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {roofTypes.map((r) => (
                <tr key={r.slug} className="border-b border-[var(--color-line)]">
                  <th scope="row" className="py-5 pr-6 align-top">
                    <Link
                      href={`/roof-types/${r.slug}`}
                      className="font-[family-name:var(--font-display)] text-[1.02rem] font-extrabold hover:text-[var(--color-red)]"
                    >
                      {r.name}
                    </Link>
                  </th>
                  <td className="py-5 pr-6 align-top text-[0.88rem] text-[var(--color-muted)]">
                    {r.family}
                  </td>
                  <td className="py-5 pr-6 align-top text-[0.88rem] text-[var(--color-muted)]">
                    {r.tagline}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {roofTypeFamilies.map((family) => (
          <section key={family.name} className="mt-20">
            <div className="mb-10 flex items-baseline gap-5">
              <h2 className="text-[1.6rem] font-extrabold sm:text-[2rem]">
                {family.name}
              </h2>
              <span className="h-px flex-1 bg-[var(--color-line)]" />
            </div>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {family.types.map((r) => (
                <Link
                  key={r.slug}
                  href={`/roof-types/${r.slug}`}
                  className="img-zoom group flex flex-col overflow-hidden border border-[var(--color-line)] bg-white transition-colors hover:border-[var(--color-charcoal)]"
                >
                  <span className="block aspect-[16/10] overflow-hidden">
                    <img
                      src={r.image}
                      alt={r.imageAlt}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  </span>
                  <span className="flex flex-1 flex-col p-7">
                    <span className="block font-[family-name:var(--font-display)] text-[1.18rem] font-extrabold">
                      {r.name}
                    </span>
                    <span className="mt-3 block flex-1 text-[0.9rem] leading-relaxed text-[var(--color-muted)]">
                      {r.tagline}
                    </span>
                    <span className="mt-5 block text-[0.7rem] font-bold uppercase tracking-[0.14em] text-[var(--color-red)]">
                      Explore →
                    </span>
                  </span>
                </Link>
              ))}
            </div>
          </section>
        ))}

        <div className="mt-20 border border-[var(--color-line)] bg-[var(--color-stone)] p-8 lg:p-12">
          <h2 className="max-w-2xl text-[1.6rem] font-extrabold leading-snug sm:text-[2rem]">
            Not sure which material is right for your home?
          </h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-[var(--color-muted)]">
            Shingle samples, replacement options and expectations get reviewed
            with you before anything is ordered. Start with a free inspection.
          </p>
          <div className="mt-7">
            <Button href="/contact">Get a Free Inspection</Button>
          </div>
        </div>
      </div>

      <CtaBand />
    </>
  );
}
