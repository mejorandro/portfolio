import { PhotoCard } from "@/components/shared/photo-card";
import type { PhotoEntry } from "@/types";

type PhotographyPreviewGridProps = {
  photos: PhotoEntry[];
};

export function PhotographyPreviewGrid({
  photos,
}: PhotographyPreviewGridProps) {
  if (photos.length === 0) return null;

  const ordered = [...photos].sort(
    (a, b) => (a.homeOrder ?? 999) - (b.homeOrder ?? 999),
  );

  const widePhoto =
    ordered.find(
      (photo) => photo.image && photo.image.width > photo.image.height,
    ) ?? ordered[0];

  const supportingPhotos = ordered.filter((photo) => photo !== widePhoto).slice(0, 2);

  if (supportingPhotos.length < 2) {
    return (
      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {ordered.map((photo, index) => (
          <PhotoCard
            key={`${photo.title}-${index}`}
            photo={photo}
            priority={index === 0}
          />
        ))}
      </div>
    );
  }

  return (
    <div className="mt-12 grid gap-6 xl:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] xl:items-start">
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-1">
        {supportingPhotos.map((photo, index) => (
          <PhotoCard
            key={photo.title}
            photo={photo}
            priority={index === 0}
            compact
          />
        ))}
      </div>

      <PhotoCard photo={widePhoto} priority />
    </div>
  );
}
