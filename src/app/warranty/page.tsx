import type { Metadata } from "next";
import { Button, CtaBand, PageHero, SectionHeading } from "@/components/ui";
import { warrantyPoints, company } from "@/content/company";

export const metadata: Metadata = {
  title: "Warranty Options",
  description:
    "How shingle manufacturer warranties and workmanship coverage work on a Helsley Roofing Company project in Plano, Texas.",
};

export default function WarrantyPage() {
  return (
    <>
      <PageHero
        eyebrow="Warranty Options"
        title="Coverage, Explained Without the Asterisks Hidden."
        intro="Helsley Roofing advertises a lifetime warranty on your shingle roof. Because roofing coverage is layered, here is how the pieces actually fit together — and what to ask before you sign anything."
        image="/img/roof-detail.jpg"
        imageAlt="Newly installed shingles and ridge detail"
        trail={[{ label: "Warranty Options" }]}
      />

      <section className="shell py-20 lg:py-28">
        <SectionHeading
          eyebrow="The Layers"
          title="Three things a roofing warranty actually covers."
        />
        <div className="mt-14 grid gap-px border border-[var(--color-line)] bg-[var(--color-line)] lg:grid-cols-3">
          {warrantyPoints.map((w, i) => (
            <div key={w.title} className="bg-white p-8 lg:p-10">
              <p className="font-[family-name:var(--font-display)] text-[0.75rem] font-extrabold tracking-[0.18em] text-[var(--color-red)]">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h2 className="mt-5 text-[1.2rem] font-extrabold leading-snug">
                {w.title}
              </h2>
              <p className="mt-3 leading-relaxed text-[var(--color-muted)]">
                {w.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-14 border-l-2 border-[var(--color-red)] bg-[var(--color-stone)] p-8 lg:p-10">
          <h2 className="text-[1.3rem] font-extrabold">
            Questions worth asking on your estimate
          </h2>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {[
              "Which manufacturer and product line is being installed?",
              "What exactly does the manufacturer's warranty cover, and for how long?",
              "Is the coverage prorated, and from what point?",
              "Does the warranty require registration after installation?",
              "Is the coverage transferable if I sell the home?",
              "What workmanship coverage is included, in writing?",
            ].map((q) => (
              <li key={q} className="flex gap-3 text-[0.95rem] leading-snug">
                <span aria-hidden="true" className="text-[var(--color-red)]">
                  ✓
                </span>
                {q}
              </li>
            ))}
          </ul>
          <p className="mt-7 text-[0.88rem] leading-relaxed text-[var(--color-muted)]">
            Warranty terms are specific to the system installed on your home.
            Call the Plano office at{" "}
            <a
              href={company.phoneHref}
              className="font-semibold text-[var(--color-ink)]"
            >
              {company.phone}
            </a>{" "}
            and we will walk through the applicable terms for your roof.
          </p>
          <div className="mt-8">
            <Button href="/contact">Get a Free Inspection</Button>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
