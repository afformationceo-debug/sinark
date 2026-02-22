type DiamondColor = "indigo" | "cyan" | "emerald" | "amber";
type DiamondSize = "sm" | "md" | "lg";

interface DiamondConnectorProps {
  color?: DiamondColor;
  size?: DiamondSize;
  animated?: boolean;
}

const colorMap: Record<DiamondColor, { bg: string; shadow: string }> = {
  indigo: { bg: "bg-brand-indigo", shadow: "shadow-brand-indigo/50" },
  cyan: { bg: "bg-brand-cyan", shadow: "shadow-brand-cyan/50" },
  emerald: { bg: "bg-brand-emerald", shadow: "shadow-brand-emerald/50" },
  amber: { bg: "bg-brand-amber", shadow: "shadow-brand-amber/50" },
};

const sizeMap: Record<DiamondSize, string> = {
  sm: "w-2 h-2",
  md: "w-3 h-3",
  lg: "w-4 h-4",
};

export default function DiamondConnector({
  color = "indigo",
  size = "md",
  animated = false,
}: DiamondConnectorProps) {
  const { bg, shadow } = colorMap[color];

  return (
    <div className="flex items-center justify-center">
      <div
        className={`
          ${sizeMap[size]}
          ${bg}
          ${shadow}
          shadow-lg
          rotate-45
          ${animated ? "animate-pulse-glow" : ""}
        `}
      />
    </div>
  );
}
