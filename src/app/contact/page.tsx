import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow, PageHero, ReviewQuote, Stars } from "@/components/ui";
import { InspectionForm } from "@/components/InspectionForm";
import { addressLines, company, process } from "@/content/company";
import { featuredReviews } from "@/content/reviews";

export const metadata: Metadata = {
  title: "Contact & Free Inspection",
  description: `Call Helsley Roofing Company at ${company.phone} or request a free roof inspection from our office at ${company.address.street}, Plano, TX.`,
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        compact
        eyebrow="Contact · Free Inspection"
        title={
          <>
            Let&rsquo;s Talk
            <br />
            <span className="font-[family-name:var(--font-serif)] font-light italic">
              About Your Roof.
            </span>
          </>
        }
        intro="Inspections are free. Tell us what you are seeing and a Helsley estimator will follow up from our Plano office."
        image="/img/roof-detail.jpg"
        imageAlt="Close detail of a professionally installed shingle roof"
        trail={[{ label: "Contact" }]}
      />

      <section className="shell grid gap-14 py-16 lg:grid-cols-[1fr_1.15fr] lg:gap-20 lg:py-24">
        <div>
          <Eyebrow>Get in Touch</Eyebrow>
          <h2 className="text-[1.8rem] font-extrabold leading-snug sm:text-[2.2rem]">
            Helsley Roofing Company
          </h2>

          <dl className="mt-10 divide-y divide-[var(--color-line)] border-y border-[var(--color-line)]">
            <div className="flex flex-wrap items-baseline justify-between gap-4 py-6">
              <dt className="text-[0.7rem] font-bold uppercase tracking-[0.15em] text-[var(--color-muted)]">
                Phone
              </dt>
              <dd>
                <a
                  href={company.phoneHref}
                  className="font-[family-name:var(--font-display)] text-[1.9rem] font-extrabold hover:text-[var(--color-red)]"
                >
                  {company.phone}
                </a>
              </dd>
            </div>
            <div className="flex flex-wrap items-baseline justify-between gap-4 py-6">
              <dt className="text-[0.7rem] font-bold uppercase tracking-[0.15em] text-[var(--color-muted)]">
                Office
              </dt>
              <dd className="text-right">
                <address className="not-italic leading-relaxed">
                  {addressLines.map((l) => (
                    <span key={l} className="block">
                      {l}
                    </span>
                  ))}
                </address>
              </dd>
            </div>
            <div className="flex flex-wrap items-baseline justify-between gap-4 py-6">
              <dt className="text-[0.7rem] font-bold uppercase tracking-[0.15em] text-[var(--color-muted)]">
                Reputation
              </dt>
              <dd className="flex items-center gap-3">
                <Stars className="text-sm" />
                <span className="text-[0.88rem] text-[var(--color-muted)]">
                  {company.googleRating} · {company.googleReviewCount} reviews
                </span>
              </dd>
            </div>
            <div className="flex flex-wrap items-baseline justify-between gap-4 py-6">
              <dt className="text-[0.7rem] font-bold uppercase tracking-[0.15em] text-[var(--color-muted)]">
                Service area
              </dt>
              <dd>
                <Link
                  href="/service-areas"
                  className="text-[0.92rem] font-semibold link-underline"
                >
                  Plano &amp; the DFW Metroplex →
                </Link>
              </dd>
            </div>
          </dl>

          <div className="mt-12">
            <Eyebrow tone="muted">What Happens Next</Eyebrow>
            <ol className="space-y-5">
              {process.map((p) => (
                <li key={p.step} className="flex gap-5">
                  <span className="font-[family-name:var(--font-display)] text-[0.72rem] font-extrabold tracking-[0.16em] text-[var(--color-red)]">
                    {p.step}
                  </span>
                  <span>
                    <span className="block text-[0.98rem] font-bold">
                      {p.title}
                    </span>
                    <span className="mt-1 block text-[0.88rem] leading-relaxed text-[var(--color-muted)]">
                      {p.body}
                    </span>
                  </span>
                </li>
              ))}
            </ol>
          </div>

          <div className="mt-12 overflow-hidden border border-[var(--color-line)]">
            <iframe
              title="Map showing the Helsley Roofing Company office in Plano, Texas"
              src="https://www.google.com/maps?q=6817%20K%20Ave%20%23102%2C%20Plano%2C%20TX%2075074&output=embed"
              loading="lazy"
              className="h-72 w-full border-0"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <div>
          <InspectionForm />
          <div className="mt-6">
            <ReviewQuote
              body={featuredReviews[0].body}
              name={featuredReviews[0].name}
              when={featuredReviews[0].when}
            />
          </div>
        </div>
      </section>
    </>
  );
}
