import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Accordion } from "@/components/Accordion";
import { CtaBand, Eyebrow, PageHero, ReviewQuote } from "@/components/ui";
import { InspectionForm } from "@/components/InspectionForm";
import { roofTypeMap, roofTypes } from "@/content/roof-types";
import { reviews } from "@/content/reviews";

export function generateStaticParams() {
  return roofTypes.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const type = roofTypeMap.get(slug);
  if (!type) return {};
  return { title: `${type.name} in Plano, TX`, description: type.tagline };
}

export default async function RoofTypePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const type = roofTypeMap.get(slug);
  if (!type) notFound();

  const others = roofTypes.filter((r) => r.slug !== type.slug).slice(0, 4);
  const review = reviews[1];

  return (
    <>
      <PageHero
        eyebrow={type.family}
        title={type.name}
        intro={type.tagline}
        image={type.image}
        imageAlt={type.imageAlt}
        trail={[{ label: "Roof Types", href: "/roof-types" }, { label: type.name }]}
      />

      <div className="shell grid gap-14 py-20 lg:grid-cols-[1.55fr_1fr] lg:gap-20 lg:py-28">
        <div>
          <div className="space-y-6 text-[1.05rem] leading-relaxed text-[var(--color-ink)]/85">
            {type.intro.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          {type.characteristics?.length ? (
            <dl className="mt-12 grid gap-px border border-[var(--color-line)] bg-[var(--color-line)] sm:grid-cols-3">
              {type.characteristics.map((c) => (
                <div key={c.label} className="bg-white p-6">
                  <dt className="text-[0.66rem] font-bold uppercase tracking-[0.15em] text-[var(--color-muted)]">
                    {c.label}
                  </dt>
                  <dd className="mt-2 font-[family-name:var(--font-display)] text-[1.05rem] font-extrabold">
                    {c.value}
                  </dd>
                </div>
              ))}
            </dl>
          ) : null}

          {type.variants?.length ? (
            <div className="mt-14">
              <h2 className="text-[1.6rem] font-extrabold">
                Types of {type.name.replace(" Roofing", "")} we install
              </h2>
              <div className="mt-7 space-y-8">
                {type.variants.map((v) => (
                  <div key={v.name} className="border-l-2 border-[var(--color-red)] pl-7">
                    <h3 className="text-[1.15rem] font-extrabold">{v.name}</h3>
                    <p className="mt-2.5 leading-relaxed text-[var(--color-muted)]">
                      {v.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ) : null}

          {type.sections?.length ? (
            <div className="mt-14">
              <h2 className="text-[1.6rem] font-extrabold">
                Benefits of {type.name.toLowerCase()}
              </h2>
              <div className="mt-7 grid gap-px border border-[var(--color-line)] bg-[var(--color-line)] sm:grid-cols-3">
                {type.sections.map((s) => (
                  <div key={s.title} className="bg-white p-6">
                    <h3 className="font-[family-name:var(--font-display)] text-[1.02rem] font-extrabold">
                      {s.title}
                    </h3>
                    <p className="mt-2.5 text-[0.9rem] leading-relaxed text-[var(--color-muted)]">
                      {s.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ) : null}

          <figure className="img-zoom mt-14 overflow-hidden">
            <img
              src={type.image}
              alt={type.imageAlt}
              loading="lazy"
              className="aspect-[16/9] w-full object-cover"
            />
          </figure>

          {type.faqs?.length ? (
            <div className="mt-16">
              <h2 className="mb-7 text-[1.5rem] font-extrabold">
                Frequently asked questions
              </h2>
              <Accordion items={type.faqs} />
            </div>
          ) : null}

          <div className="mt-16">
            <ReviewQuote body={review.body} name={review.name} when={review.when} />
          </div>
        </div>

        <aside className="lg:sticky lg:top-28 lg:self-start">
          <InspectionForm compact />
          <div className="mt-6 border border-[var(--color-line)] p-7">
            <Eyebrow tone="muted">Other Roof Types</Eyebrow>
            <ul className="space-y-3">
              {others.map((r) => (
                <li key={r.slug}>
                  <Link
                    href={`/roof-types/${r.slug}`}
                    className="text-[0.9rem] font-semibold hover:text-[var(--color-red)]"
                  >
                    {r.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/roof-types"
                  className="text-[0.78rem] font-bold uppercase tracking-[0.12em] text-[var(--color-red)]"
                >
                  All roof types →
                </Link>
              </li>
            </ul>
          </div>
        </aside>
      </div>

      <CtaBand />
    </>
  );
}
