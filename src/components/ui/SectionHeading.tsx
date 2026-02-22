import { ReactNode } from "react";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  icon?: ReactNode;
  align?: "left" | "center";
  /** Show gradient underline beneath title */
  underline?: boolean;
}

export default function SectionHeading({
  badge,
  title,
  subtitle,
  icon,
  align = "center",
  underline = true,
}: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div className={`flex flex-col gap-4 ${alignment} mb-16`}>
      {badge && (
        <span className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium border border-brand-indigo/20 bg-brand-indigo/5 text-brand-indigo backdrop-blur-sm w-fit ${align === "center" ? "mx-auto" : ""}`}>
          {icon && <span className="text-base">{icon}</span>}
          {badge}
        </span>
      )}
      <div className="relative">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display tracking-tight text-text-primary leading-tight">
          {title}
        </h2>
        {underline && (
          <div
            className={`mt-3 h-[2px] rounded-full ${align === "center" ? "mx-auto" : ""}`}
            style={{
              width: "60%",
              maxWidth: "280px",
              background: "linear-gradient(90deg, transparent, #6366f1, #06b6d4, transparent)",
            }}
          />
        )}
      </div>
      {subtitle && (
        <p className="text-base md:text-lg text-text-secondary max-w-2xl leading-relaxed mt-1">
          {subtitle}
        </p>
      )}
    </div>
  );
}
