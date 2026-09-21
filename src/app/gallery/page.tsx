import type { Metadata } from "next";
import { CtaBand, PageHero } from "@/components/ui";
import { Gallery } from "@/components/Gallery";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "Roofing, repair, storm damage, gutter and multi-family project photography from Helsley Roofing Company in Plano, Texas.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Work"
        title="Roofs, Gutters and Crews Across the Metroplex."
        intro="A look at the kind of work Helsley Roofing does day to day. Filter by the type of project you are considering."
        image="/img/photos/residential-2.png"
        imageAlt="Completed residential roofing project"
        trail={[{ label: "Our Work" }]}
      />

      <section className="shell py-20 lg:py-28">
        <Gallery />
      </section>

      <CtaBand />
    </>
  );
}
