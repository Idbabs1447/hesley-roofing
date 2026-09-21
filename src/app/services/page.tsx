import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand, PageHero, SectionHeading } from "@/components/ui";
import { serviceGroups } from "@/content/services";
import { process } from "@/content/company";

export const metadata: Metadata = {
  title: "Roofing Services in Plano & DFW",
  description:
    "Residential roofing, roof replacement, roof repair, storm and hail damage repair, gutters and multi-family roofing from Helsley Roofing Company in Plano, Texas.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="We Protect Your Greatest Investment."
        intro="If you have roof or gutter problems, Helsley Roofing Company is the solution. Here is everything we do — from a handful of lifted shingles to a full multi-family roof replacement."
        image="/img/photos/residential-2.png"
        imageAlt="Residential roof installed by Helsley Roofing Company"
        trail={[{ label: "Services" }]}
      />

      <div className="shell py-20 lg:py-28">
        {serviceGroups.map((group) => (
          <section key={group.name} className="mb-20 last:mb-0">
            <div className="mb-10 flex items-baseline gap-5">
              <h2 className="text-[1.6rem] font-extrabold sm:text-[2rem]">
                {group.name}
              </h2>
              <span className="h-px flex-1 bg-[var(--color-line)]" />
            </div>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {group.services.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="img-zoom group flex flex-col overflow-hidden border border-[var(--color-line)] bg-white transition-colors hover:border-[var(--color-charcoal)]"
                >
                  <span className="block aspect-[16/10] overflow-hidden">
                    <img
                      src={s.heroImage}
                      alt={s.heroAlt}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  </span>
                  <span className="flex flex-1 flex-col p-7">
                    <span className="block font-[family-name:var(--font-display)] text-[1.2rem] font-extrabold leading-snug">
                      {s.title}
                    </span>
                    <span className="mt-3 block flex-1 text-[0.9rem] leading-relaxed text-[var(--color-muted)]">
                      {s.summary}
                    </span>
                    <span className="mt-5 block text-[0.7rem] font-bold uppercase tracking-[0.14em] text-[var(--color-red)]">
                      Learn more →
                    </span>
                  </span>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>

      <section className="border-y border-[var(--color-line)] bg-[var(--color-stone)]">
        <div className="shell py-20 lg:py-24">
          <SectionHeading
            eyebrow="How It Works"
            title="A Clear Process From Inspection Forward."
          />
          <ol className="mt-12 grid gap-px bg-[var(--color-line)] md:grid-cols-2 lg:grid-cols-4">
            {process.map((p) => (
              <li key={p.step} className="bg-white p-8">
                <p className="font-[family-name:var(--font-display)] text-[0.78rem] font-extrabold tracking-[0.2em] text-[var(--color-red)]">
                  {p.step}
                </p>
                <h3 className="mt-5 text-[1.1rem] font-extrabold leading-snug">
                  {p.title}
                </h3>
                <p className="mt-3 text-[0.9rem] leading-relaxed text-[var(--color-muted)]">
                  {p.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
