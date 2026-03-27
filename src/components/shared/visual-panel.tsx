import type { VisualTheme } from "@/types";

const themeMap: Record<VisualTheme, string> = {
  linen: "from-[#f3efe8] via-[#f8f5ef] to-[#ddd5ca] text-neutral-900",
  sand: "from-[#d3c1a2] via-[#efe2ca] to-[#9f8a6e] text-neutral-950",
  forest: "from-[#0f241c] via-[#1f4d3a] to-[#7fae8c] text-white",
  sea: "from-[#0c2340] via-[#1b4675] to-[#6bb4d6] text-white",
  midnight: "from-[#111111] via-[#222222] to-[#525252] text-white",
  graphite: "from-[#171717] via-[#2d2d2d] to-[#727272] text-white",
};

type VisualPanelProps = {
  theme: VisualTheme;
  label?: string;
  subtitle?: string;
  className?: string;
};

export function VisualPanel({
  theme,
  label,
  subtitle,
  className = "",
}: VisualPanelProps) {
  return (
    <div
      className={`relative h-full w-full overflow-hidden rounded-[2rem] bg-gradient-to-br ${themeMap[theme]} ${className}`}
    >
      <div className="absolute inset-0 opacity-40 [background-image:radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.35),transparent_22%),radial-gradient(circle_at_80%_15%,rgba(255,255,255,0.18),transparent_18%),radial-gradient(circle_at_50%_85%,rgba(255,255,255,0.18),transparent_24%)]" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/25 to-transparent" />

      {(label || subtitle) ? (
        <div className="absolute inset-x-0 bottom-0 z-10 p-6 md:p-7">
          {label ? (
            <p className="text-lg font-medium tracking-[-0.03em]">{label}</p>
          ) : null}
          {subtitle ? (
            <p className="mt-2 max-w-md text-sm leading-6 text-current/80">
              {subtitle}
            </p>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
