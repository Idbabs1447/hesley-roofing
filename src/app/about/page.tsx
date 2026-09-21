import type { Metadata } from "next";
import Link from "next/link";
import {
  Button,
  CtaBand,
  Eyebrow,
  PageHero,
  ReviewQuote,
  SectionHeading,
} from "@/components/ui";
import {
  alanBio,
  alanQuote,
  businessPractices,
  company,
  credentials,
  whyHelsley,
} from "@/content/company";
import { featuredReviews } from "@/content/reviews";
import { team } from "@/content/team";

export const metadata: Metadata = {
  title: "About Helsley Roofing Company",
  description:
    "Since 1992, Helsley Roofing Company has served Plano, Dallas and Fort Worth homeowners. Owner Alan Helsley has worked in roofing since 1978.",
};

const timeline = [
  {
    year: "1978",
    title: "Alan begins working in roofing",
    body: "Born in Dallas and raised in Richardson, Alan Helsley started in the roofing industry as a teenager — first as a laborer.",
  },
  {
    year: "Through the years",
    title: "Laborer to salesman to owner",
    body: "Alan gained experience as a laborer, sales assistant and salesman before moving into ownership and management.",
  },
  {
    year: "1992",
    title: "Helsley Roofing Company serves North Texas",
    body: "The current Helsley Roofing website states the company has served Dallas / Fort Worth homeowners since 1992.",
  },
  {
    year: "Today",
    title: "A Plano-based roofing company",
    body: `Helsley Roofing operates from ${company.address.street} in Plano with a knowledgeable sales and office staff and long-standing supplier and crew relationships.`,
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow={`Serving North Texas Since ${company.foundedYear}`}
        title={
          <>
            Local Roots.
            <br />
            <span className="font-[family-name:var(--font-serif)] font-light italic">
              Decades of Roofing Experience.
            </span>
          </>
        }
        intro="Helsley Roofing Company is one of the trusted names in the Plano and Dallas area, and we have been proudly serving the local community for the last 30 years."
        image="/img/photos/about.jpg"
        imageAlt="Helsley Roofing Company work in a North Texas neighborhood"
        trail={[{ label: "About" }]}
      />

      <section className="shell py-20 lg:py-28">
        <div className="grid gap-14 lg:grid-cols-[1.4fr_1fr] lg:gap-20">
          <div className="space-y-6 text-[1.08rem] leading-relaxed text-[var(--color-ink)]/85">
            <p>
              Since {company.foundedYear} the Helsley Roofing Company has served
              homeowners in the Dallas / Fort Worth area. Our dedication to
              roofing services and customer service has earned us a reputation
              as one of the most reputable and skilled roofing companies in the
              area.
            </p>
            <p>
              Along with Dallas / Fort Worth homeowners, we have weathered many
              storms, and we have seen many advancements, improvements and new
              options in residential roofing products. Whether you are looking
              for a simple but durable roof or for a unique and customized roof,
              we offer many services and products that add value and beauty to
              your home.
            </p>
            <p>
              We believe the success of our business is the result of our
              commitment to provide homeowners with exceptional service,
              products and workmanship. Homeowner satisfaction and loyalty is
              the goal we strive to earn with every roofing project we complete.
            </p>
          </div>
          <div className="border-l-2 border-[var(--color-red)] pl-7 lg:pl-9">
            <p className="font-[family-name:var(--font-serif)] text-[1.6rem] leading-snug font-light italic">
              “The community of Dallas, Fort Worth and Plano has placed their
              trust in us for the last 30 years.”
            </p>
            <p className="mt-5 text-[0.72rem] font-bold uppercase tracking-[0.14em] text-[var(--color-muted)]">
              Helsley Roofing Company
            </p>
          </div>
        </div>
      </section>

      {/* Alan */}
      <section className="border-y border-[var(--color-line)] bg-[var(--color-stone)]">
        <div className="shell grid gap-12 py-20 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-20 lg:py-28">
          <img
            src="/img/team/alan.jpg"
            alt="Alan Helsley, owner of Helsley Roofing Company"
            loading="lazy"
            className="aspect-[4/5] w-full object-cover object-top"
          />
          <div>
            <Eyebrow>Owner</Eyebrow>
            <h2 className="text-[2rem] leading-[1.06] font-extrabold sm:text-[2.6rem]">
              Alan Helsley
            </h2>
            <div className="mt-7 space-y-5 leading-relaxed text-[var(--color-muted)]">
              {alanBio.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <blockquote className="mt-8 border-l-2 border-[var(--color-red)] pl-6">
              <p className="font-[family-name:var(--font-serif)] text-[1.2rem] italic leading-snug text-[var(--color-ink)]">
                “{alanQuote}”
              </p>
            </blockquote>
            <div className="mt-8">
              <Button href="/about/team" variant="dark">
                Meet the Team
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="shell py-20 lg:py-28">
        <SectionHeading
          eyebrow="Timeline"
          title="A Company Built One Decade at a Time."
        />
        <ol className="mt-14 grid gap-px bg-[var(--color-line)] md:grid-cols-2 lg:grid-cols-4">
          {timeline.map((t) => (
            <li key={t.year} className="bg-[var(--color-warm)] p-8 lg:p-9">
              <p className="font-[family-name:var(--font-serif)] text-[1.7rem] font-light italic leading-none text-[var(--color-red)]">
                {t.year}
              </p>
              <h3 className="mt-5 text-[1.08rem] font-extrabold leading-snug">
                {t.title}
              </h3>
              <p className="mt-3 text-[0.9rem] leading-relaxed text-[var(--color-muted)]">
                {t.body}
              </p>
            </li>
          ))}
        </ol>
      </section>

      {/* Business practices */}
      <section className="bg-[var(--color-charcoal)]">
        <div className="shell py-20 lg:py-28">
          <SectionHeading
            tone="light"
            eyebrow="Published Commitments"
            title="Nine Business Practices Alan Puts in Writing."
            intro="These commitments have been published by Helsley Roofing for years. They are the standard every project is held to."
          />
          <ul className="mt-14 grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
            {businessPractices.map((b, i) => (
              <li
                key={b}
                className="flex gap-4 bg-[var(--color-charcoal)] p-7"
              >
                <span className="font-[family-name:var(--font-display)] text-[0.72rem] font-extrabold tracking-[0.16em] text-[var(--color-red)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-[0.95rem] leading-relaxed text-white/75">
                  {b}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Team strip */}
      <section className="shell py-20 lg:py-24">
        <SectionHeading
          eyebrow="Our Team"
          title="The People Who Show Up at Your House."
          intro="Alan has assembled a knowledgeable and professional sales and office staff. Many of them are named by customers in our Google reviews."
          action={
            <Button href="/about/team" variant="outline">
              Meet the Team
            </Button>
          }
        />
        <div className="mt-12 grid grid-cols-3 gap-3 sm:grid-cols-4 lg:grid-cols-7">
          {team.map((m) => (
            <figure key={m.name} className="img-zoom overflow-hidden">
              <span className="block aspect-[4/5] overflow-hidden bg-[var(--color-stone)]">
                <img
                  src={m.photo}
                  alt={`${m.name} of Helsley Roofing Company`}
                  loading="lazy"
                  className="h-full w-full object-cover object-top"
                />
              </span>
              <figcaption className="mt-2.5 text-[0.78rem] font-bold uppercase tracking-[0.1em]">
                {m.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Why + credentials */}
      <section className="border-y border-[var(--color-line)] bg-[var(--color-stone)]">
        <div className="shell py-20 lg:py-24">
          <SectionHeading eyebrow="Why Helsley" title="What Sets This Company Apart." />
          <div className="mt-12 grid gap-px bg-[var(--color-line)] sm:grid-cols-2 lg:grid-cols-3">
            {whyHelsley.map((w) => (
              <div key={w.title} className="bg-white p-8">
                <h3 className="text-[1.08rem] font-extrabold leading-snug">
                  {w.title}
                </h3>
                <p className="mt-3 text-[0.92rem] leading-relaxed text-[var(--color-muted)]">
                  {w.body}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4">
            <span className="eyebrow text-[var(--color-muted)]">Accredited with</span>
            {credentials.map((c) => (
              <span
                key={c.name}
                className="text-[0.82rem] font-bold uppercase tracking-[0.1em] text-[var(--color-ink)]/60"
              >
                {c.name}
              </span>
            ))}
            <Link
              href="/credentials"
              className="text-[0.75rem] font-bold uppercase tracking-[0.12em] text-[var(--color-red)]"
            >
              View credentials →
            </Link>
          </div>
        </div>
      </section>

      {/* Reputation */}
      <section className="shell py-20 lg:py-24">
        <SectionHeading
          eyebrow="Customer Reputation"
          title="Decades of Repeat Customers."
          action={
            <Button href="/reviews" variant="outline">
              Read Reviews
            </Button>
          }
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {featuredReviews.slice(0, 3).map((r) => (
            <ReviewQuote key={r.name + r.when} body={r.body} name={r.name} when={r.when} />
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
