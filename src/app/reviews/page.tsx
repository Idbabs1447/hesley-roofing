import type { Metadata } from "next";
import { Button, CtaBand, Eyebrow, PageHero, Stars } from "@/components/ui";
import { company } from "@/content/company";
import { reviews } from "@/content/reviews";

export const metadata: Metadata = {
  title: "Customer Reviews",
  description: `Helsley Roofing Company holds a ${company.googleRating} rating across ${company.googleReviewCount} Google reviews from North Texas homeowners.`,
};

export default function ReviewsPage() {
  return (
    <>
      <PageHero
        eyebrow="Customer Reviews"
        title={
          <>
            Roofing Relationships
            <br />
            <span className="font-[family-name:var(--font-serif)] font-light italic">
              Built on Trust.
            </span>
          </>
        }
        intro="Every review below is published on Helsley Roofing's Google Business Profile. Nothing has been written for us."
        image="/img/photos/group-2.jpg"
        imageAlt="Helsley Roofing Company team members on a project"
        trail={[{ label: "Reviews" }]}
      />

      <section className="border-b border-[var(--color-line)] bg-[var(--color-stone)]">
        <div className="shell flex flex-col items-start gap-8 py-14 sm:flex-row sm:items-end sm:justify-between lg:py-16">
          <div className="flex items-end gap-6">
            <p className="font-[family-name:var(--font-display)] text-[4.5rem] font-extrabold leading-none lg:text-[5.5rem]">
              {company.googleRating}
            </p>
            <div className="pb-2">
              <Stars />
              <p className="mt-2 text-[0.85rem] text-[var(--color-muted)]">
                {company.googleReviewCount} Google Reviews
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button href={company.googleReviewsUrl} variant="dark">
              Read Google Reviews
            </Button>
            <Button href={company.googleWriteReviewUrl} variant="outline">
              Leave a Review
            </Button>
          </div>
        </div>
      </section>

      <section className="shell py-20 lg:py-28">
        <Eyebrow>What North Texas Homeowners Say</Eyebrow>
        <div className="columns-1 gap-5 md:columns-2 lg:columns-3">
          {reviews.map((r) => (
            <figure
              key={r.name + r.when + r.body.slice(0, 20)}
              className="mb-5 break-inside-avoid border border-[var(--color-line)] bg-white p-7"
            >
              <Stars className="text-sm" />
              <blockquote className="mt-4 text-[0.95rem] leading-relaxed text-[var(--color-ink)]/85">
                “{r.body}”
              </blockquote>
              <figcaption className="mt-5 border-t border-[var(--color-line)] pt-4">
                <span className="block text-[0.85rem] font-bold">{r.name}</span>
                <span className="mt-1 block text-[0.72rem] uppercase tracking-[0.1em] text-[var(--color-muted)]">
                  {r.when} · Google Review
                </span>
                <span className="mt-3 flex flex-wrap gap-1.5">
                  {r.topics.map((t) => (
                    <span
                      key={t}
                      className="rounded-[2px] bg-[var(--color-stone)] px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[var(--color-muted)]"
                    >
                      {t}
                    </span>
                  ))}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <CtaBand
        title="Ready to see what the reviews are about?"
        body="Inspections are free. Call the Plano office or send a request and a Helsley estimator will get back to you."
      />
    </>
  );
}
