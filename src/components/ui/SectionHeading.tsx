import { ReactNode } from "react";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  icon?: ReactNode;
  align?: "left" | "center";
}

export default function SectionHeading({
  badge,
  title,
  subtitle,
  icon,
  align = "center",
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
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display tracking-tight text-text-primary leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-base md:text-lg text-text-secondary max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
