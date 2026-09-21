import type { Metadata } from "next";
import { PageHero } from "@/components/ui";
import { addressLines, company } from "@/content/company";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Helsley Roofing Company handles information submitted through this website.",
};

const sections = [
  {
    title: "Information we collect",
    body: "When you submit an inspection request through this website, we collect the information you enter — typically your name, phone number, optional email address, city, the service you are interested in and any message you include.",
  },
  {
    title: "How we use it",
    body: "We use the information you submit to respond to your request, schedule an inspection and communicate with you about roofing work. We do not sell the information you provide.",
  },
  {
    title: "How long we keep it",
    body: "Requests are retained for as long as needed to serve you and to maintain ordinary business records.",
  },
  {
    title: "Third parties",
    body: "This site may embed a map from Google. Interacting with embedded content is subject to that provider's own privacy practices.",
  },
  {
    title: "Your choices",
    body: "You may ask us to update or delete the information you have submitted at any time by calling the office.",
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        compact
        eyebrow="Legal"
        title="Privacy Policy"
        image="/img/photos/about.jpg"
        imageAlt="Helsley Roofing Company office in Plano, Texas"
        trail={[{ label: "Privacy Policy" }]}
      />
      <section className="shell max-w-3xl py-20 lg:py-24">
        <div className="space-y-10">
          {sections.map((s) => (
            <div key={s.title}>
              <h2 className="text-[1.25rem] font-extrabold">{s.title}</h2>
              <p className="mt-3 leading-relaxed text-[var(--color-muted)]">
                {s.body}
              </p>
            </div>
          ))}
          <div>
            <h2 className="text-[1.25rem] font-extrabold">Contact</h2>
            <p className="mt-3 leading-relaxed text-[var(--color-muted)]">
              {company.name}
              <br />
              {addressLines.join(" · ")}
              <br />
              <a
                href={company.phoneHref}
                className="font-semibold text-[var(--color-ink)]"
              >
                {company.phone}
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
