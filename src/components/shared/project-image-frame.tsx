import Image from "next/image";
import { VisualPanel } from "@/components/shared/visual-panel";
import type { VisualTheme } from "@/types";

type ProjectImageFrameProps = {
  src?: string;
  alt?: string;
  theme: VisualTheme;
  aspectClassName: string;
  priority?: boolean;
  sizes?: string;
  overlay?: boolean;
  title?: string;
  caption?: string;
};

export function ProjectImageFrame({
  src,
  alt,
  theme,
  aspectClassName,
  priority = false,
  sizes = "100vw",
  overlay = false,
  title,
  caption,
}: ProjectImageFrameProps) {
  return (
    <div className={`relative overflow-hidden rounded-[1.6rem] bg-neutral-100 ${aspectClassName}`}>
      {src ? (
        <>
          <Image
            src={src}
            alt={alt ?? title ?? "Project screenshot"}
            fill
            priority={priority}
            sizes={sizes}
            className="object-cover object-top"
          />

          {overlay ? (
            <>
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/8 to-transparent" />
              {(title || caption) && (
                <div className="absolute inset-x-0 bottom-0 p-6 text-white md:p-8">
                  {title ? (
                    <p className="text-xl font-semibold tracking-[-0.03em] md:text-2xl">
                      {title}
                    </p>
                  ) : null}
                  {caption ? (
                    <p className="mt-3 max-w-2xl text-sm leading-7 text-white/88 md:text-base">
                      {caption}
                    </p>
                  ) : null}
                </div>
              )}
            </>
          ) : null}
        </>
      ) : (
        <VisualPanel theme={theme} label={overlay ? title : undefined} subtitle={overlay ? caption : undefined} />
      )}
    </div>
  );
}
