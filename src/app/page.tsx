import Link from "next/link";
import {
  Button,
  CtaBand,
  Eyebrow,
  ReviewQuote,
  SectionHeading,
  Stars,
} from "@/components/ui";
import {
  company,
  alanQuote,
  credentials,
  process,
  referral,
  whyHelsley,
} from "@/content/company";
import { featuredServices } from "@/content/services";
import { roofTypes } from "@/content/roof-types";
import { areasByCounty, serviceAreas } from "@/content/areas";
import { featuredReviews } from "@/content/reviews";
import { gallery } from "@/content/team";

export default function HomePage() {
  return (
    <>
      {/* 1 — HERO */}
      <section className="relative isolate flex min-h-[92svh] items-end overflow-hidden bg-[var(--color-charcoal-deep)]">
        <img
          src="/img/hero.jpg"
          alt="North Texas home with a newly installed architectural shingle roof"
          className="absolute inset-0 h-full w-full object-cover"
          fetchPriority="high"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-[var(--color-charcoal-deep)] via-[var(--color-charcoal-deep)]/72 to-[var(--color-charcoal-deep)]/45"
        />
        <div className="shell relative w-full pb-16 pt-32 lg:pb-24 lg:pt-44">
          <div className="max-w-3xl">
            <Eyebrow tone="light">
              North Texas Roofing • Since {company.foundedYear}
            </Eyebrow>
            <h1 className="text-[2.6rem] leading-[1.02] font-extrabold text-white sm:text-[3.6rem] lg:text-[4.4rem]">
              Decades of Experience.
              <br />
              <span className="font-[family-name:var(--font-serif)] font-light italic tracking-[-0.02em]">
                One Roof at a Time.
              </span>
            </h1>
            <p className="mt-7 max-w-xl text-[1.05rem] leading-relaxed text-white/72">
              Residential roofing, repair and storm-related roofing services from
              an established Plano roofing company.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button href="/contact">Get a Free Inspection</Button>
              <Button href={company.phoneHref} variant="light">
                Call {company.phone}
              </Button>
            </div>

            <div className="mt-10 flex items-center gap-4 border-t border-white/12 pt-6">
              <Stars />
              <p className="text-[0.85rem] text-white/65">
                <span className="font-bold text-white">
                  {company.googleRating} on Google
                </span>{" "}
                · {company.googleReviewCount} Reviews
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2 — TRUST STRIP */}
      <section className="border-b border-[var(--color-line)] bg-[var(--color-stone)]">
        <div className="shell grid grid-cols-2 divide-x divide-[var(--color-line)] lg:grid-cols-4">
          {[
            { big: `Since ${company.foundedYear}`, small: "Serving North Texas" },
            { big: `${company.googleRating} ★`, small: "Google Rating" },
            { big: `${company.googleReviewCount}`, small: "Google Reviews" },
            { big: "Free", small: "Roof Inspections" },
          ].map((t, i) => (
            <div
              key={t.small}
              className={`px-4 py-8 text-center lg:px-6 lg:py-10 ${i < 2 ? "border-b border-[var(--color-line)] lg:border-b-0" : ""}`}
            >
              <p className="font-[family-name:var(--font-display)] text-[1.5rem] font-extrabold leading-none text-[var(--color-ink)] lg:text-[2rem]">
                {t.big}
              </p>
              <p className="mt-2.5 text-[0.7rem] font-semibold uppercase tracking-[0.15em] text-[var(--color-muted)]">
                {t.small}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 3 — SERVICES */}
      <section className="shell py-20 lg:py-28">
        <SectionHeading
          eyebrow="What We Do"
          title="Roofing Services for North Texas Homes and Properties."
          intro="If you have roof or gutter problems, Helsley Roofing Company is the solution. Every service below is work we do today, from our office in Plano."
          action={
            <Button href="/services" variant="outline">
              View All Services
            </Button>
          }
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {featuredServices.map((s, i) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className={`img-zoom group relative isolate flex min-h-[20rem] flex-col justify-end overflow-hidden bg-[var(--color-charcoal)] p-7 lg:min-h-[24rem] ${
                i === 0 ? "lg:col-span-2 lg:min-h-[28rem]" : ""
              }`}
            >
              <img
                src={s.heroImage}
                alt={s.heroAlt}
                loading={i === 0 ? "eager" : "lazy"}
                className="absolute inset-0 -z-10 h-full w-full object-cover opacity-55"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 -z-10 bg-gradient-to-t from-black/88 via-black/45 to-transparent"
              />
              <h3 className="text-[1.5rem] font-extrabold text-white lg:text-[1.8rem]">
                {s.title}
              </h3>
              <p className="mt-3 max-w-md text-[0.9rem] leading-relaxed text-white/68">
                {s.summary}
              </p>
              <span className="mt-5 text-[0.72rem] font-bold uppercase tracking-[0.14em] text-[var(--color-red)] group-hover:text-white">
                Explore →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* 4 — ALAN / HERITAGE */}
      <section className="bg-[var(--color-stone)]">
        <div className="shell grid gap-12 py-20 lg:grid-cols-2 lg:items-center lg:gap-20 lg:py-28">
          <div className="relative">
            <img
              src="/img/team/alan.jpg"
              alt="Alan Helsley, owner of Helsley Roofing Company"
              loading="lazy"
              className="aspect-[4/5] w-full object-cover object-top"
            />
            <div className="absolute -bottom-6 -right-2 hidden bg-[var(--color-red)] px-7 py-6 text-white sm:block lg:-right-8">
              <p className="font-[family-name:var(--font-serif)] text-[2.4rem] leading-none font-light italic">
                1978
              </p>
              <p className="mt-2 text-[0.68rem] font-bold uppercase tracking-[0.15em] text-white/80">
                Alan&rsquo;s first year in roofing
              </p>
            </div>
          </div>

          <div>
            <Eyebrow>Experience Built Over Decades</Eyebrow>
            <h2 className="text-[2rem] leading-[1.06] font-extrabold sm:text-[2.7rem]">
              Roofing Has Been
              <br />
              Alan Helsley&rsquo;s Craft
              <br />
              <span className="font-[family-name:var(--font-serif)] font-light italic">
                Since 1978.
              </span>
            </h2>
            <div className="mt-7 space-y-5 leading-relaxed text-[var(--color-muted)]">
              <p>
                Alan was born in Dallas, raised in Richardson, and has lived in
                the Metroplex his entire life. He began working in the roofing
                industry as a teenager in 1978.
              </p>
              <p>
                Since then he has worked as a laborer, a sales assistant, a
                salesman, and today as business owner and manager — assembling a
                knowledgeable sales and office staff and building solid
                relationships with suppliers and roofing crews along the way.
              </p>
            </div>

            <blockquote className="mt-8 border-l-2 border-[var(--color-red)] pl-6">
              <p className="font-[family-name:var(--font-serif)] text-[1.25rem] leading-snug italic text-[var(--color-ink)]">
                “{alanQuote}”
              </p>
              <footer className="mt-4 text-[0.72rem] font-bold uppercase tracking-[0.14em] text-[var(--color-muted)]">
                Alan Helsley — Owner
              </footer>
            </blockquote>

            <div className="mt-9">
              <Button href="/about/team" variant="dark">
                Meet Alan &amp; the Team
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 5 — WHY HELSLEY */}
      <section className="shell py-20 lg:py-28">
        <SectionHeading
          eyebrow="Why Helsley"
          title="A Roofing Company That Behaves Like a Neighbor."
          intro="These are not slogans. Each one comes from how this company has described its own work for decades."
        />
        <div className="mt-14 grid gap-px bg-[var(--color-line)] sm:grid-cols-2 lg:grid-cols-3">
          {whyHelsley.map((w, i) => (
            <div key={w.title} className="bg-[var(--color-warm)] p-8 lg:p-10">
              <p className="font-[family-name:var(--font-serif)] text-[1.6rem] font-light italic leading-none text-[var(--color-red)]">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-5 text-[1.15rem] font-extrabold leading-snug">
                {w.title}
              </h3>
              <p className="mt-3 text-[0.92rem] leading-relaxed text-[var(--color-muted)]">
                {w.body}
              </p>
            </div>
          ))}
          <div className="flex flex-col justify-center bg-[var(--color-charcoal)] p-8 lg:p-10">
            <p className="text-[0.95rem] leading-relaxed text-white/70">
              Payment collected only upon completion. Daily job supervision. A
              clean and neat jobsite.
            </p>
            <Link
              href="/about"
              className="mt-6 text-[0.72rem] font-bold uppercase tracking-[0.14em] text-[var(--color-red)] link-underline"
            >
              Read our business practices →
            </Link>
          </div>
        </div>
      </section>

      {/* 6 — ROOF TYPES PREVIEW */}
      <section className="border-y border-[var(--color-line)] bg-[var(--color-stone)]">
        <div className="shell py-20 lg:py-28">
          <SectionHeading
            eyebrow="Roof Types"
            title="Every Roof We Install, Explained."
            intro="Asphalt shingle through natural slate — including the impact-resistant options North Texas homeowners ask about most."
            action={
              <Button href="/roof-types" variant="outline">
                Compare Roof Types
              </Button>
            }
          />
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {roofTypes.map((r) => (
              <Link
                key={r.slug}
                href={`/roof-types/${r.slug}`}
                className="img-zoom group flex flex-col overflow-hidden border border-[var(--color-line)] bg-white"
              >
                <span className="block aspect-[4/3] overflow-hidden">
                  <img
                    src={r.image}
                    alt={r.imageAlt}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </span>
                <span className="flex flex-1 flex-col p-6">
                  <span className="text-[0.62rem] font-bold uppercase tracking-[0.16em] text-[var(--color-red)]">
                    {r.family}
                  </span>
                  <span className="mt-2.5 block font-[family-name:var(--font-display)] text-[1.08rem] font-extrabold leading-snug">
                    {r.name}
                  </span>
                  <span className="mt-2 block text-[0.85rem] leading-relaxed text-[var(--color-muted)]">
                    {r.tagline}
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 7 — GOOGLE REPUTATION */}
      <section className="bg-[var(--color-charcoal)]">
        <div className="shell py-20 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.6fr] lg:gap-16">
            <div>
              <Eyebrow tone="light">What North Texas Homeowners Say</Eyebrow>
              <h2 className="text-[2rem] leading-[1.06] font-extrabold text-white sm:text-[2.7rem]">
                Built on Work
                <br />
                Worth Recommending.
              </h2>
              <div className="mt-10 flex items-end gap-5">
                <p className="font-[family-name:var(--font-display)] text-[4.5rem] font-extrabold leading-none text-white">
                  {company.googleRating}
                </p>
                <div className="pb-2">
                  <Stars />
                  <p className="mt-1.5 text-[0.82rem] text-white/55">
                    {company.googleReviewCount} Google Reviews
                  </p>
                </div>
              </div>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Button href="/reviews" variant="primary">
                  Read All Reviews
                </Button>
                <Button href={company.googleReviewsUrl} variant="light">
                  Read on Google
                </Button>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {featuredReviews.slice(0, 4).map((r) => (
                <ReviewQuote
                  key={r.name + r.when}
                  body={r.body}
                  name={r.name}
                  when={r.when}
                  tone="light"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8 — WORK GALLERY PREVIEW */}
      <section className="shell py-20 lg:py-28">
        <SectionHeading
          eyebrow="Our Work"
          title="Roofs, Gutters and Crews Across the Metroplex."
          action={
            <Button href="/gallery" variant="outline">
              View the Gallery
            </Button>
          }
        />
        <div className="mt-14 grid grid-cols-2 gap-3 lg:grid-cols-4">
          {gallery.slice(0, 8).map((g) => (
            <Link
              key={g.src + g.category}
              href="/gallery"
              className="img-zoom group relative block aspect-square overflow-hidden bg-[var(--color-stone)]"
            >
              <img
                src={g.src}
                alt={g.alt}
                loading="lazy"
                className="h-full w-full object-cover"
              />
              <span className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent p-3 text-[0.62rem] font-bold uppercase tracking-[0.14em] text-white">
                {g.category}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* 9 — CREDENTIALS */}
      <section className="border-y border-[var(--color-line)] bg-[var(--color-stone)]">
        <div className="shell py-20 lg:py-24">
          <SectionHeading
            eyebrow="Credentials & Accreditations"
            title="Certified by the Manufacturers We Install."
            intro="Helsley Roofing's team is credentialed with leading roofing manufacturers and regional trade associations."
            action={
              <Button href="/credentials" variant="outline">
                View Credentials
              </Button>
            }
          />
          <ul className="mt-12 grid grid-cols-2 gap-px border border-[var(--color-line)] bg-[var(--color-line)] sm:grid-cols-3 lg:grid-cols-5">
            {credentials.slice(0, 10).map((c) => (
              <li
                key={c.name}
                className="flex min-h-[7rem] flex-col items-center justify-center bg-white px-4 py-6 text-center"
              >
                <span className="font-[family-name:var(--font-display)] text-[0.95rem] font-extrabold uppercase tracking-[0.06em] text-[var(--color-ink)]">
                  {c.name}
                </span>
                <span className="mt-1.5 text-[0.7rem] leading-snug text-[var(--color-muted)]">
                  {c.detail}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 10 — PROCESS */}
      <section className="shell py-20 lg:py-28">
        <SectionHeading
          eyebrow="How It Works"
          title="A Clear Process From Inspection Forward."
        />
        <ol className="mt-14 grid gap-px bg-[var(--color-line)] md:grid-cols-2 lg:grid-cols-4">
          {process.map((p) => (
            <li key={p.step} className="bg-[var(--color-warm)] p-8 lg:p-9">
              <p className="font-[family-name:var(--font-display)] text-[0.78rem] font-extrabold tracking-[0.2em] text-[var(--color-red)]">
                {p.step}
              </p>
              <h3 className="mt-5 text-[1.12rem] font-extrabold leading-snug">
                {p.title}
              </h3>
              <p className="mt-3 text-[0.9rem] leading-relaxed text-[var(--color-muted)]">
                {p.body}
              </p>
            </li>
          ))}
        </ol>
      </section>

      {/* 11 — SERVICE AREAS */}
      <section className="bg-[var(--color-charcoal-deep)]">
        <div className="shell py-20 lg:py-28">
          <SectionHeading
            tone="light"
            eyebrow="Where We Work"
            title="Rooted in Plano. Working Across DFW."
            intro={`Helsley Roofing serves ${serviceAreas.length - 1}+ communities and county areas across the Dallas–Fort Worth Metroplex from our office on K Avenue.`}
            action={
              <Button href="/service-areas" variant="light">
                All Service Areas
              </Button>
            }
          />
          <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {areasByCounty.map((c) => (
              <div key={c.county}>
                <p className="eyebrow mb-4 text-white/40">{c.county}</p>
                <ul className="space-y-2.5">
                  {c.areas.map((a) => (
                    <li key={a.slug}>
                      <Link
                        href={`/service-areas/${a.slug}`}
                        className="text-[0.92rem] text-white/62 hover:text-white"
                      >
                        {a.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12 — REFERRAL */}
      <section className="shell py-20 lg:py-28">
        <div className="grid items-center gap-12 border border-[var(--color-line)] bg-white p-8 lg:grid-cols-[1.3fr_1fr] lg:gap-16 lg:p-14">
          <div>
            <Eyebrow>Helsley Referral Rewards</Eyebrow>
            <h2 className="text-[1.9rem] leading-[1.08] font-extrabold sm:text-[2.4rem]">
              Love Your Roof?
              <br />
              <span className="font-[family-name:var(--font-serif)] font-light italic">
                Tell a Neighbor.
              </span>
            </h2>
            <p className="mt-6 max-w-xl leading-relaxed text-[var(--color-muted)]">
              {referral.mechanic} Existing Helsley customers may be eligible for
              referral rewards when a referred customer contracts for a
              qualifying new roof.
            </p>
            <div className="mt-8">
              <Button href="/referral-program" variant="dark">
                View Referral Program
              </Button>
            </div>
          </div>
          <div className="grid gap-px bg-[var(--color-line)]">
            {referral.tiers.map((t) => (
              <div
                key={t.scope}
                className="flex items-baseline justify-between gap-4 bg-[var(--color-stone)] px-6 py-5"
              >
                <span className="font-[family-name:var(--font-display)] text-[1.7rem] font-extrabold leading-none text-[var(--color-ink)]">
                  {t.amount}
                </span>
                <span className="text-[0.78rem] font-semibold uppercase tracking-[0.1em] text-[var(--color-muted)]">
                  {t.scope}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 13 — FINAL CTA */}
      <CtaBand />
    </>
  );
}
