import type { Metadata } from "next";
import Image from "next/image";
import { PhotoCard } from "@/components/shared/photo-card";
import { SectionHeading } from "@/components/shared/section-heading";
import { getCoverPhoto, getFeaturedPhotography, photography } from "@/data/photography";

export const metadata: Metadata = {
  title: "Photography",
  description: "A visual collection of places, light, and perspective.",
};

const heroPhoto = getCoverPhoto() ?? photography[0];

export default function PhotographyPage() {
  return (
    <section className="page-shell section-space pt-12 md:pt-16">
      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
        <SectionHeading
          eyebrow="Photography"
          title="A more personal collection of frames, places, and slower moments."
          description="A small selection of photographs that live a little outside the work itself — quieter observations, everyday details, and the kind of perspective that usually stays with me."
        />

        {heroPhoto?.image ? (
          <div className="overflow-hidden rounded-[2.25rem] border border-black/6 bg-white p-3 shadow-[0_18px_60px_rgba(17,24,39,0.06)]">
            <div
              className="relative w-full overflow-hidden rounded-[1.7rem] bg-neutral-100"
              style={{ aspectRatio: `${heroPhoto.image.width} / ${heroPhoto.image.height}` }}
            >
              <Image
                src={heroPhoto.image.src}
                alt={heroPhoto.image.alt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 54vw"
                className="object-cover"
              />
            </div>
          </div>
        ) : null}
      </div>

      <div className="mt-12 columns-1 gap-6 md:columns-2 xl:columns-3">
        {photography.map((photo, index) => (
          <div key={`${photo.title}-${index}`} className="mb-6 break-inside-avoid">
            <PhotoCard photo={photo} priority={index === 0} />
          </div>
        ))}
      </div>
    </section>
  );
}
