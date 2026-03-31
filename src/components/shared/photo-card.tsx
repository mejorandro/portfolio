import Image from "next/image";
import type { CSSProperties } from "react";
import type { PhotoEntry } from "@/types";

type PhotoCardProps = {
  photo: PhotoEntry;
  priority?: boolean;
  compact?: boolean;
};

export function PhotoCard({
  photo,
  priority = false,
  compact = false,
}: PhotoCardProps) {
  const aspectRatio = photo.image
    ? `${photo.image.width} / ${photo.image.height}`
    : compact
      ? "4 / 5"
      : "3 / 4";

  return (
    <article className="group">
      <div className="overflow-hidden rounded-[1.75rem] border border-black/6 bg-white shadow-[0_10px_30px_rgba(17,24,39,0.04)] transition duration-500 group-hover:shadow-[0_16px_40px_rgba(17,24,39,0.07)]">
        <div
          className="relative w-full bg-neutral-100"
          style={{ aspectRatio } as CSSProperties}
        >
          {photo.image ? (
            <Image
              src={photo.image.src}
              alt={photo.image.alt}
              fill
              priority={priority}
              sizes={
                compact
                  ? "(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 28vw"
                  : "(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
              }
              className="object-cover transition duration-700 group-hover:scale-[1.02]"
            />
          ) : null}
        </div>
      </div>

      <div className={compact ? "px-1 pt-4" : "px-1 pt-5"}>
        <h3
          className={
            compact
              ? "text-lg tracking-[-0.02em] text-neutral-900"
              : "text-[1.05rem] tracking-[-0.02em] text-neutral-900"
          }
        >
          {photo.title}
        </h3>
        <p
          className={
            compact
              ? "mt-2 text-sm leading-7 text-neutral-600"
              : "mt-2 text-sm leading-7 text-neutral-600"
          }
        >
          {photo.caption}
        </p>
      </div>
    </article>
  );
}
