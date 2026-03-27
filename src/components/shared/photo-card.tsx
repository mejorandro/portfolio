import { VisualPanel } from "@/components/shared/visual-panel";
import type { PhotoEntry } from "@/types";

type PhotoCardProps = {
  photo: PhotoEntry;
};

export function PhotoCard({ photo }: PhotoCardProps) {
  return (
    <article className="group overflow-hidden rounded-[2rem] border border-black/6 bg-white shadow-[0_16px_50px_rgba(17,24,39,0.05)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_60px_rgba(17,24,39,0.08)]">
      <div className="aspect-[4/5] p-3">
        <VisualPanel theme={photo.theme} label={photo.title} subtitle={photo.location} />
      </div>

      <div className="px-6 pb-7 pt-2">
        <p className="text-sm uppercase tracking-[0.18em] text-neutral-400">
          {photo.location}
        </p>
        <p className="mt-4 text-lg leading-8 text-neutral-700">{photo.caption}</p>
      </div>
    </article>
  );
}
