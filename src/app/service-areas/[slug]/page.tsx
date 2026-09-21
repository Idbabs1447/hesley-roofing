import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaBand, Eyebrow, PageHero, ReviewQuote } from "@/components/ui";
import { InspectionForm } from "@/components/InspectionForm";
import { areaMap, serviceAreas } from "@/content/areas";
import { featuredServices, services } from "@/content/services";
import { reviews } from "@/content/reviews";
import { company, process } from "@/content/company";

export function generateStaticParams() {
  return serviceAreas.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const area = areaMap.get(slug);
  if (!area) return {};
  return {
    title: `Roofers in ${area.name}, TX`,
    description: `${area.blurb} Free roof inspections from Helsley Roofing Company, serving North Texas since 1992.`,
  };
}

export default async function AreaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const area = areaMap.get(slug);
  if (!area) notFound();

  const nearby = serviceAreas
    .filter((a) => a.county === area.county && a.slug !== area.slug)
    .slice(0, 6);

  return (
    <>
      <PageHero
        eyebrow={`${area.county} · Texas`}
        title={`Roofing in ${area.name}.`}
        intro={area.blurb}
        image="/img/hero.jpg"
        imageAlt={`Homes in ${area.name}, Texas`}
        trail={[
          { label: "Service Areas", href: "/service-areas" },
          { label: area.name },
        ]}
      />

      <div className="shell grid gap-14 py-20 lg:grid-cols-[1.55fr_1fr] lg:gap-20 lg:py-28">
        <div>
          <div className="space-y-6 text-[1.05rem] leading-relaxed text-[var(--color-ink)]/85">
            <p>
              Helsley Roofing Company has served homeowners across the Dallas /
              Fort Worth area since {company.foundedYear}, working out of our
              office at {company.address.street} in {company.address.city}.
              {area.hq
                ? " Plano is home — it is where the office sits and where much of our work has always been."
                : ` ${area.name} is part of our regular service area.`}
            </p>
            <p>
              Whether you are dealing with a leak, hail or wind damage, aging
              shingles, worn gutters or a roof that simply needs an honest
              second opinion, the first step is the same: a free inspection and
              a professional written estimate.
            </p>
          </div>

          <h2 className="mt-14 text-[1.5rem] font-extrabold">
            What we do in {area.name}
          </h2>
          <div className="mt-7 grid gap-px border border-[var(--color-line)] bg-[var(--color-line)] sm:grid-cols-2">
            {featuredServices.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group bg-white p-6 transition-colors hover:bg-[var(--color-stone)]"
              >
                <span className="block font-[family-name:var(--font-display)] text-[1.02rem] font-extrabold group-hover:text-[var(--color-red)]">
                  {s.title}
                </span>
                <span className="mt-2 block text-[0.88rem] leading-relaxed text-[var(--color-muted)]">
                  {s.summary}
                </span>
              </Link>
            ))}
          </div>

          <h2 className="mt-14 text-[1.5rem] font-extrabold">
            How a {area.name} project runs
          </h2>
          <ol className="mt-7 space-y-6">
            {process.map((p) => (
              <li key={p.step} className="flex gap-6">
                <span className="font-[family-name:var(--font-display)] text-[0.75rem] font-extrabold tracking-[0.18em] text-[var(--color-red)]">
                  {p.step}
                </span>
                <span>
                  <span className="block font-[family-name:var(--font-display)] text-[1.02rem] font-bold">
                    {p.title}
                  </span>
                  <span className="mt-1.5 block text-[0.92rem] leading-relaxed text-[var(--color-muted)]">
                    {p.body}
                  </span>
                </span>
              </li>
            ))}
          </ol>

          <div className="mt-14">
            <ReviewQuote
              body={reviews[1].body}
              name={reviews[1].name}
              when={reviews[1].when}
            />
          </div>

          {nearby.length ? (
            <div className="mt-14">
              <h2 className="text-[1.3rem] font-extrabold">
                Nearby in {area.county}
              </h2>
              <div className="mt-5 flex flex-wrap gap-2.5">
                {nearby.map((n) => (
                  <Link
                    key={n.slug}
                    href={`/service-areas/${n.slug}`}
                    className="rounded-[2px] border border-[var(--color-line)] px-4 py-2.5 text-[0.82rem] font-semibold transition-colors hover:border-[var(--color-charcoal)] hover:bg-[var(--color-charcoal)] hover:text-white"
                  >
                    {n.name}
                  </Link>
                ))}
              </div>
            </div>
          ) : null}
        </div>

        <aside className="lg:sticky lg:top-28 lg:self-start">
          <InspectionForm compact />
          <div className="mt-6 border border-[var(--color-line)] p-7">
            <Eyebrow tone="muted">All Services</Eyebrow>
            <ul className="space-y-2.5">
              {services.slice(0, 8).map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-[0.88rem] hover:text-[var(--color-red)]"
                  >
                    {s.navTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>

      <CtaBand />
    </>
  );
}
