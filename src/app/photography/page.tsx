import type { Metadata } from "next";
import { PhotoCard } from "@/components/shared/photo-card";
import { SectionHeading } from "@/components/shared/section-heading";
import { VisualPanel } from "@/components/shared/visual-panel";
import { photography } from "@/data/site";

export const metadata: Metadata = {
  title: "Photography",
  description: "A visual collection of places, light, and perspective.",
};

export default function PhotographyPage() {
  return (
    <section className="page-shell section-space pt-12 md:pt-16">
      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
        <SectionHeading
          eyebrow="Photography"
          title="A visual collection of places, moments, and perspective."
          description="Minimal captions, larger frames, and enough space for the images to breathe."
        />

        <div className="rounded-[2.25rem] border border-black/6 bg-white p-3 shadow-[0_18px_60px_rgba(17,24,39,0.06)]">
          <div className="aspect-[16/10]">
            <VisualPanel
              theme="sea"
              label="Editorial gallery"
              subtitle="Swap these mock visuals with your own photography when ready."
            />
          </div>
        </div>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {photography.map((photo) => (
          <PhotoCard key={photo.title} photo={photo} />
        ))}
      </div>
    </section>
  );
}
