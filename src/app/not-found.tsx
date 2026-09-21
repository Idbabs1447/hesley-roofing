import Link from "next/link";
import { Button } from "@/components/ui";
import { company } from "@/content/company";

export default function NotFound() {
  return (
    <section className="relative isolate flex min-h-[70svh] items-center overflow-hidden bg-[var(--color-charcoal-deep)]">
      <img
        src="/img/hero.jpg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-25"
      />
      <div className="shell relative py-28">
        <p className="eyebrow text-[var(--color-red)]">404</p>
        <h1 className="mt-4 max-w-2xl text-[2.2rem] font-extrabold leading-[1.06] text-white sm:text-[3rem]">
          That page isn&rsquo;t here — but your roof still needs looking at.
        </h1>
        <p className="mt-5 max-w-lg text-white/65">
          Try the site map, or call the Plano office at {company.phone}.
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Button href="/">Back to Home</Button>
          <Button href="/site-map" variant="light">
            View Site Map
          </Button>
        </div>
        <p className="mt-8 text-[0.85rem] text-white/45">
          Looking for something specific?{" "}
          <Link href="/services" className="text-white underline">
            Browse services
          </Link>
        </p>
      </div>
    </section>
  );
}
