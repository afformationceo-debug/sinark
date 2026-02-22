type ConnectorVariant = "solid" | "dashed";
type ConnectorColor = "indigo" | "cyan" | "emerald" | "amber" | "purple";

interface NodeConnectorProps {
  variant?: ConnectorVariant;
  color?: ConnectorColor;
  vertical?: boolean;
  className?: string;
}

const colorHexMap: Record<ConnectorColor, string> = {
  indigo: "rgba(99, 102, 241, 0.4)",
  cyan: "rgba(6, 182, 212, 0.4)",
  emerald: "rgba(16, 185, 129, 0.4)",
  amber: "rgba(245, 158, 11, 0.4)",
  purple: "rgba(168, 85, 247, 0.4)",
};

export default function NodeConnector({
  variant = "dashed",
  color = "indigo",
  vertical = true,
  className = "",
}: NodeConnectorProps) {
  const strokeColor = colorHexMap[color];
  const dashArray = variant === "dashed" ? "6 4" : undefined;

  if (vertical) {
    return (
      <svg
        width="2"
        height="80"
        viewBox="0 0 2 80"
        fill="none"
        className={`mx-auto ${className}`}
      >
        <line
          x1="1"
          y1="0"
          x2="1"
          y2="80"
          stroke={strokeColor}
          strokeWidth="2"
          strokeDasharray={dashArray}
        />
      </svg>
    );
  }

  return (
    <svg
      width="80"
      height="2"
      viewBox="0 0 80 2"
      fill="none"
      className={className}
    >
      <line
        x1="0"
        y1="1"
        x2="80"
        y2="1"
        stroke={strokeColor}
        strokeWidth="2"
        strokeDasharray={dashArray}
      />
    </svg>
  );
}
