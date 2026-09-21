import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Accordion } from "@/components/Accordion";
import {
  Button,
  CtaBand,
  Eyebrow,
  PageHero,
  ReviewQuote,
  SectionHeading,
} from "@/components/ui";
import { InspectionForm } from "@/components/InspectionForm";
import { getService, services } from "@/content/services";
import { roofTypeMap } from "@/content/roof-types";
import { reviews } from "@/content/reviews";
import { process } from "@/content/company";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: `${service.title} in Plano, TX`,
    description: service.summary,
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const children = (service.children ?? [])
    .map((c) => getService(c))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  const related = (service.relatedRoofTypes ?? [])
    .map((r) => roofTypeMap.get(r))
    .filter((r): r is NonNullable<typeof r> => Boolean(r));

  const review =
    reviews.find((r) =>
      r.topics.some((t) =>
        service.title.toLowerCase().includes(t.toLowerCase().split(" ")[0]),
      ),
    ) ?? reviews[0];

  const siblings = services.filter(
    (s) => s.group === service.group && s.slug !== service.slug,
  );

  return (
    <>
      <PageHero
        eyebrow={service.eyebrow}
        title={service.headline}
        intro={service.intro[0]}
        image={service.heroImage}
        imageAlt={service.heroAlt}
        trail={[
          { label: "Services", href: "/services" },
          { label: service.title },
        ]}
      />

      <div className="shell grid gap-14 py-20 lg:grid-cols-[1.55fr_1fr] lg:gap-20 lg:py-28">
        <div>
          <div className="space-y-6 text-[1.05rem] leading-relaxed text-[var(--color-ink)]/85">
            {service.intro.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          {service.context?.length ? (
            <div className="mt-14 space-y-10">
              {service.context.map((c) => (
                <div key={c.title} className="border-l-2 border-[var(--color-red)] pl-7">
                  <h2 className="text-[1.3rem] font-extrabold">{c.title}</h2>
                  <p className="mt-3 leading-relaxed text-[var(--color-muted)]">
                    {c.body}
                  </p>
                </div>
              ))}
            </div>
          ) : null}

          {service.bullets?.length ? (
            <div className="mt-14">
              <h2 className="text-[1.5rem] font-extrabold">Options we install</h2>
              <div className="mt-7 grid gap-px bg-[var(--color-line)] border border-[var(--color-line)] sm:grid-cols-2">
                {service.bullets.map((b) => (
                  <div key={b.title} className="bg-white p-6">
                    <h3 className="font-[family-name:var(--font-display)] text-[1.02rem] font-extrabold">
                      {b.title}
                    </h3>
                    <p className="mt-2.5 text-[0.9rem] leading-relaxed text-[var(--color-muted)]">
                      {b.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ) : null}

          <figure className="mt-14 img-zoom overflow-hidden">
            <img
              src={service.heroImage}
              alt={service.heroAlt}
              loading="lazy"
              className="aspect-[16/9] w-full object-cover"
            />
            <figcaption className="mt-3 text-[0.78rem] text-[var(--color-muted)]">
              {service.heroAlt}
            </figcaption>
          </figure>

          {children.length ? (
            <div className="mt-14">
              <h2 className="text-[1.5rem] font-extrabold">Related services</h2>
              <ul className="mt-6 divide-y divide-[var(--color-line)] border-y border-[var(--color-line)]">
                {children.map((c) => (
                  <li key={c.slug}>
                    <Link
                      href={`/services/${c.slug}`}
                      className="group flex items-center justify-between gap-6 py-5"
                    >
                      <span>
                        <span className="block font-[family-name:var(--font-display)] text-[1.05rem] font-bold group-hover:text-[var(--color-red)]">
                          {c.title}
                        </span>
                        <span className="mt-1 block text-[0.88rem] text-[var(--color-muted)]">
                          {c.summary}
                        </span>
                      </span>
                      <span aria-hidden="true" className="text-[var(--color-red)]">
                        →
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          {related.length ? (
            <div className="mt-14">
              <h2 className="text-[1.5rem] font-extrabold">Roof types for this work</h2>
              <div className="mt-6 flex flex-wrap gap-2.5">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/roof-types/${r.slug}`}
                    className="rounded-[2px] border border-[var(--color-line)] px-4 py-2.5 text-[0.82rem] font-semibold transition-colors hover:border-[var(--color-charcoal)] hover:bg-[var(--color-charcoal)] hover:text-white"
                  >
                    {r.name}
                  </Link>
                ))}
              </div>
            </div>
          ) : null}

          {service.faqs?.length ? (
            <div className="mt-16">
              <h2 className="mb-7 text-[1.5rem] font-extrabold">
                Frequently asked questions
              </h2>
              <Accordion items={service.faqs} />
            </div>
          ) : null}

          <div className="mt-16">
            <ReviewQuote body={review.body} name={review.name} when={review.when} />
          </div>
        </div>

        <aside className="lg:sticky lg:top-28 lg:self-start">
          <InspectionForm compact />

          <div className="mt-6 border border-[var(--color-line)] bg-[var(--color-stone)] p-7">
            <Eyebrow>Our Process</Eyebrow>
            <ol className="space-y-5">
              {process.map((p) => (
                <li key={p.step} className="flex gap-4">
                  <span className="font-[family-name:var(--font-display)] text-[0.72rem] font-extrabold tracking-[0.16em] text-[var(--color-red)]">
                    {p.step}
                  </span>
                  <span className="text-[0.88rem] font-semibold leading-snug">
                    {p.title}
                  </span>
                </li>
              ))}
            </ol>
          </div>

          {siblings.length ? (
            <div className="mt-6 border border-[var(--color-line)] p-7">
              <Eyebrow tone="muted">More in {service.group}</Eyebrow>
              <ul className="space-y-3">
                {siblings.map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`/services/${s.slug}`}
                      className="text-[0.9rem] font-semibold hover:text-[var(--color-red)]"
                    >
                      {s.navTitle}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </aside>
      </div>

      <section className="border-t border-[var(--color-line)] bg-[var(--color-stone)]">
        <div className="shell py-16 lg:py-20">
          <SectionHeading
            eyebrow="Next Step"
            title="Free inspections, in plain language."
            intro="A Helsley estimator will look at the roof, document what is there, and give you a professional written estimate."
            action={<Button href="/contact">Get a Free Inspection</Button>}
          />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
