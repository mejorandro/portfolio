import { VisualPanel } from "@/components/shared/visual-panel";
import type { PhotoEntry } from "@/types";

type PhotoCardProps = {
  photo: PhotoEntry;
};

export function PhotoCard({ photo }: PhotoCardProps) {
  return (
    <article className="group overflow-hidden rounded-[2rem] border border-black/6 bg-white/70 shadow-[0_15px_50px_rgba(0,0,0,0.04)]">
      <div className="aspect-[4/5] p-3">
        <VisualPanel
          theme={photo.theme}
          label={photo.title}
          subtitle={photo.location}
        />
      </div>

      <div className="px-6 pb-7 pt-2">
        <p className="text-sm uppercase tracking-[0.18em] text-neutral-500">
          {photo.location}
        </p>
        <p className="mt-4 text-lg leading-8 text-neutral-700">{photo.caption}</p>
      </div>
    </article>
  );
}
