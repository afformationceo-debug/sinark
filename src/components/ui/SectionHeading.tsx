import { ReactNode } from "react";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  icon?: ReactNode;
  align?: "left" | "center";
  underline?: boolean;
}

export default function SectionHeading({
  badge,
  title,
  subtitle,
  icon,
  align = "center",
  underline = false,
}: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div className={`flex flex-col gap-3 ${alignment} mb-14`}>
      {badge && (
        <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium tracking-wide uppercase border border-white/8 bg-white/[0.03] text-text-secondary w-fit ${align === "center" ? "mx-auto" : ""}`}>
          {icon && <span className="text-sm">{icon}</span>}
          {badge}
        </span>
      )}
      <h2 className="text-[28px] md:text-[32px] lg:text-[40px] font-bold font-display tracking-tight text-text-primary leading-tight">
        {title}
      </h2>
      {underline && (
        <div
          className={`h-[2px] rounded-full ${align === "center" ? "mx-auto" : ""}`}
          style={{
            width: "60%",
            maxWidth: "280px",
            background: "linear-gradient(90deg, transparent, #a5b4fc, #67e8f9, transparent)",
          }}
        />
      )}
      {subtitle && (
        <p className="text-[15px] md:text-base text-text-secondary max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
