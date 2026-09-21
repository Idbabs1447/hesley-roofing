import type { Metadata } from "next";
import { Button, CtaBand, PageHero, SectionHeading } from "@/components/ui";
import { company, referral } from "@/content/company";

export const metadata: Metadata = {
  title: "Helsley Referral Rewards",
  description:
    "Existing Helsley Roofing customers may be eligible for a referral bonus when a referred friend or neighbor contracts with us for a new roof.",
};

export default function ReferralPage() {
  return (
    <>
      <PageHero
        eyebrow="Helsley Referral Rewards"
        title={
          <>
            Love Your Roof?
            <br />
            <span className="font-[family-name:var(--font-serif)] font-light italic">
              Tell a Neighbor.
            </span>
          </>
        }
        intro="Positive word of mouth is how this company has grown since 1992. The referral program is our way of saying thank you."
        image="/img/hero.jpg"
        imageAlt="North Texas neighborhood with newly roofed homes"
        trail={[{ label: "Referral Program" }]}
      />

      <section className="shell py-20 lg:py-28">
        <div className="grid gap-14 lg:grid-cols-[1.25fr_1fr] lg:gap-20">
          <div>
            <div className="space-y-6 text-[1.05rem] leading-relaxed text-[var(--color-ink)]/85">
              <p>{referral.intro}</p>
              <p className="font-semibold text-[var(--color-ink)]">
                {referral.mechanic}
              </p>
            </div>

            <h2 className="mt-14 text-[1.5rem] font-extrabold">
              Referral bonus amounts
            </h2>
            <div className="mt-6 grid gap-px border border-[var(--color-line)] bg-[var(--color-line)] sm:grid-cols-3">
              {referral.tiers.map((t) => (
                <div key={t.scope} className="bg-white p-8 text-center">
                  <p className="font-[family-name:var(--font-display)] text-[2.4rem] font-extrabold leading-none text-[var(--color-ink)]">
                    {t.amount}
                  </p>
                  <p className="mt-3 text-[0.75rem] font-bold uppercase tracking-[0.12em] text-[var(--color-muted)]">
                    {t.scope}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-5 text-[0.85rem] leading-relaxed text-[var(--color-muted)]">
              A &ldquo;square&rdquo; is the roofing industry unit for 100 square
              feet of roof area. Reward amounts reflect the program as currently
              published — please confirm current amounts with the office before
              making a referral.
            </p>

            <h2 className="mt-14 text-[1.5rem] font-extrabold">
              How the program works
            </h2>
            <ul className="mt-6 divide-y divide-[var(--color-line)] border-y border-[var(--color-line)]">
              {referral.rules.map((r, i) => (
                <li key={r} className="flex gap-6 py-5">
                  <span className="font-[family-name:var(--font-display)] text-[0.72rem] font-extrabold tracking-[0.18em] text-[var(--color-red)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="leading-relaxed">{r}</span>
                </li>
              ))}
            </ul>

            <p className="mt-8 leading-relaxed text-[var(--color-muted)]">
              Existing Helsley customers may be eligible for referral rewards
              when a referred customer contracts for a qualifying new roof. If
              you are not sure whether a referral qualifies, call the office and
              ask — that is the fastest way to find out.
            </p>
          </div>

          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="border border-[var(--color-line)] bg-[var(--color-stone)] p-8">
              <p className="eyebrow text-[var(--color-red)]">Make a Referral</p>
              <h2 className="mt-3 text-[1.5rem] font-extrabold leading-snug">
                Give us their name before the job finishes.
              </h2>
              <p className="mt-4 leading-relaxed text-[var(--color-muted)]">
                Call the Plano office and let us know who you sent our way, or
                send a note through the contact form.
              </p>
              <a
                href={company.phoneHref}
                className="mt-6 block font-[family-name:var(--font-display)] text-[2rem] font-extrabold hover:text-[var(--color-red)]"
              >
                {company.phone}
              </a>
              <div className="mt-6 flex flex-col gap-3">
                <Button href="/contact">Contact the Office</Button>
                <Button href="/reviews" variant="outline">
                  Read Our Reviews
                </Button>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="border-t border-[var(--color-line)] bg-[var(--color-stone)]">
        <div className="shell py-16 lg:py-20">
          <SectionHeading
            eyebrow="Why It Matters"
            title="Word of mouth built this company."
            intro="Customers in our Google reviews describe using Helsley across two, three and even four decades — and referring friends along the way."
            action={
              <Button href="/reviews" variant="outline">
                Read Reviews
              </Button>
            }
          />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
