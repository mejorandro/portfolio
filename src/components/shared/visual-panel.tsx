import type { VisualTheme } from "@/types";

const themeMap: Record<VisualTheme, string> = {
  linen: "from-[#fbfbfa] via-[#f2f3f5] to-[#dadde3] text-neutral-950",
  stone: "from-[#ece8e2] via-[#f8f7f4] to-[#d9d4cc] text-neutral-950",
  forest: "from-[#0f241c] via-[#1b3f31] to-[#7ca68a] text-white",
  sea: "from-[#0d2038] via-[#24476d] to-[#83b8d4] text-white",
  midnight: "from-[#101010] via-[#262626] to-[#5f5f5f] text-white",
  graphite: "from-[#1b1b1b] via-[#323232] to-[#7a7a7a] text-white",
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
      <div className="absolute inset-0 opacity-45 [background-image:radial-gradient(circle_at_18%_18%,rgba(255,255,255,0.4),transparent_22%),radial-gradient(circle_at_82%_15%,rgba(255,255,255,0.18),transparent_18%),radial-gradient(circle_at_50%_88%,rgba(255,255,255,0.14),transparent_24%)]" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/20 to-transparent" />

      {(label || subtitle) && (
        <div className="absolute inset-x-0 bottom-0 z-10 p-6 md:p-7">
          {label ? (
            <p className="text-lg font-medium tracking-[-0.03em]">{label}</p>
          ) : null}
          {subtitle ? (
            <p className="mt-2 max-w-md text-sm leading-6 text-current/80">{subtitle}</p>
          ) : null}
        </div>
      )}
    </div>
  );
}
