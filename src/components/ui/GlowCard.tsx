import { ReactNode } from "react";

type GlowCardVariant = "indigo" | "cyan" | "emerald" | "amber" | "purple";

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  variant?: GlowCardVariant;
  hover?: boolean;
  /** Animated spinning gradient border */
  animated?: boolean;
  /** Top accent gradient bar */
  accentBar?: boolean;
  /** Corner glow dots */
  cornerDots?: boolean;
}

const variantStyles: Record<GlowCardVariant, { bg: string; border: string; shadow: string }> = {
  indigo: {
    bg: "linear-gradient(135deg, rgba(99,102,241,0.18) 0%, rgba(99,102,241,0.06) 100%)",
    border: "1px solid rgba(99,102,241,0.35)",
    shadow: "0 0 40px rgba(99,102,241,0.12), inset 0 1px 0 rgba(99,102,241,0.1)",
  },
  cyan: {
    bg: "linear-gradient(135deg, rgba(6,182,212,0.18) 0%, rgba(6,182,212,0.06) 100%)",
    border: "1px solid rgba(6,182,212,0.35)",
    shadow: "0 0 40px rgba(6,182,212,0.12), inset 0 1px 0 rgba(6,182,212,0.1)",
  },
  emerald: {
    bg: "linear-gradient(135deg, rgba(16,185,129,0.18) 0%, rgba(16,185,129,0.06) 100%)",
    border: "1px solid rgba(16,185,129,0.35)",
    shadow: "0 0 40px rgba(16,185,129,0.12), inset 0 1px 0 rgba(16,185,129,0.1)",
  },
  amber: {
    bg: "linear-gradient(135deg, rgba(245,158,11,0.18) 0%, rgba(245,158,11,0.06) 100%)",
    border: "1px solid rgba(245,158,11,0.35)",
    shadow: "0 0 40px rgba(245,158,11,0.12), inset 0 1px 0 rgba(245,158,11,0.1)",
  },
  purple: {
    bg: "linear-gradient(135deg, rgba(168,85,247,0.18) 0%, rgba(168,85,247,0.06) 100%)",
    border: "1px solid rgba(168,85,247,0.35)",
    shadow: "0 0 40px rgba(168,85,247,0.12), inset 0 1px 0 rgba(168,85,247,0.1)",
  },
};

export default function GlowCard({
  children,
  className = "",
  variant = "indigo",
  hover = true,
  animated = false,
  accentBar = false,
  cornerDots = false,
}: GlowCardProps) {
  const s = variantStyles[variant];

  // If animated border, use CSS class instead of inline styles for border
  if (animated) {
    const animatedClass = `gradient-border-${variant}`;
    const cornerClass = cornerDots ? `corner-dots corner-dots-${variant}` : "";
    const accentClass = accentBar ? `accent-bar-${variant}` : "";
    return (
      <div
        className={`rounded-2xl p-6 md:p-8 transition-all duration-300 ease-out ${animatedClass} ${cornerClass} ${accentClass} ${hover ? "hover:scale-[1.02] hover:-translate-y-1" : ""} ${className}`}
        style={{
          boxShadow: s.shadow,
        }}
      >
        {children}
      </div>
    );
  }

  const cornerClass = cornerDots ? `corner-dots corner-dots-${variant}` : "";
  const accentClass = accentBar ? `accent-bar-${variant}` : "";

  return (
    <div
      className={`rounded-2xl p-6 md:p-8 transition-all duration-300 ease-out ${cornerClass} ${accentClass} ${hover ? "hover:scale-[1.02] hover:-translate-y-1" : ""} ${className}`}
      style={{
        background: s.bg,
        border: s.border,
        boxShadow: s.shadow,
        backdropFilter: "blur(12px)",
      }}
    >
      {children}
    </div>
  );
}
