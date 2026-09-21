import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand, PageHero } from "@/components/ui";
import { areasByCounty } from "@/content/areas";
import { addressLines, company } from "@/content/company";

export const metadata: Metadata = {
  title: "Service Areas Across the DFW Metroplex",
  description:
    "Helsley Roofing Company serves Plano, Allen, Frisco, McKinney, Richardson, Dallas, Fort Worth, Southlake, Grapevine and surrounding North Texas communities.",
};

export default function ServiceAreasPage() {
  return (
    <>
      <PageHero
        eyebrow="Service Areas"
        title="Rooted in Plano. Working Across North Texas."
        intro="Helsley Roofing Company has served the Dallas, Fort Worth and Plano communities since 1992. Below are the cities and county areas we currently work in."
        image="/img/hero.jpg"
        imageAlt="North Texas neighborhood served by Helsley Roofing Company"
        trail={[{ label: "Service Areas" }]}
      />

      <div className="shell py-20 lg:py-28">
        <div className="mb-16 grid gap-10 border border-[var(--color-line)] bg-[var(--color-stone)] p-8 lg:grid-cols-[1fr_auto] lg:items-center lg:p-12">
          <div>
            <p className="eyebrow text-[var(--color-red)]">Headquarters</p>
            <h2 className="mt-3 text-[1.6rem] font-extrabold sm:text-[2rem]">
              Plano, Texas
            </h2>
            <address className="mt-4 not-italic leading-relaxed text-[var(--color-muted)]">
              {addressLines.map((l) => (
                <span key={l} className="block">
                  {l}
                </span>
              ))}
            </address>
          </div>
          <a
            href={company.phoneHref}
            className="font-[family-name:var(--font-display)] text-[2rem] font-extrabold hover:text-[var(--color-red)] lg:text-[2.6rem]"
          >
            {company.phone}
          </a>
        </div>

        {areasByCounty.map((c) => (
          <section key={c.county} className="mb-16 last:mb-0">
            <div className="mb-8 flex items-baseline gap-5">
              <h2 className="text-[1.4rem] font-extrabold sm:text-[1.8rem]">
                {c.county}
              </h2>
              <span className="h-px flex-1 bg-[var(--color-line)]" />
            </div>
            <div className="grid gap-px bg-[var(--color-line)] border border-[var(--color-line)] sm:grid-cols-2 lg:grid-cols-3">
              {c.areas.map((a) => (
                <Link
                  key={a.slug}
                  href={`/service-areas/${a.slug}`}
                  className="group bg-white p-6 transition-colors hover:bg-[var(--color-stone)]"
                >
                  <span className="flex items-center justify-between gap-3">
                    <span className="font-[family-name:var(--font-display)] text-[1.05rem] font-extrabold group-hover:text-[var(--color-red)]">
                      {a.name}
                      {a.hq ? (
                        <span className="ml-2 align-middle text-[0.6rem] font-bold uppercase tracking-[0.14em] text-[var(--color-red)]">
                          HQ
                        </span>
                      ) : null}
                    </span>
                    <span aria-hidden="true" className="text-[var(--color-red)]">
                      →
                    </span>
                  </span>
                  <span className="mt-2 block text-[0.85rem] leading-relaxed text-[var(--color-muted)]">
                    {a.blurb}
                  </span>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>

      <CtaBand />
    </>
  );
}
