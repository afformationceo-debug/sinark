"use client";

import { ReactNode } from "react";

type CardVariant = "surface" | "elevated" | "interactive" | "stat" | "featured";
type CardColor = "indigo" | "cyan" | "emerald" | "amber" | "purple" | "neutral";

interface CardProps {
  children: ReactNode;
  className?: string;
  variant?: CardVariant;
  color?: CardColor;
}

const colorMap: Record<CardColor, { border: string; bg: string; hoverBorder: string; featuredBorder: string }> = {
  indigo: {
    border: "border-indigo-500/10",
    bg: "bg-indigo-500/[0.03]",
    hoverBorder: "hover:border-indigo-500/20",
    featuredBorder: "border-l-indigo-500",
  },
  cyan: {
    border: "border-cyan-500/10",
    bg: "bg-cyan-500/[0.03]",
    hoverBorder: "hover:border-cyan-500/20",
    featuredBorder: "border-l-cyan-500",
  },
  emerald: {
    border: "border-emerald-500/10",
    bg: "bg-emerald-500/[0.03]",
    hoverBorder: "hover:border-emerald-500/20",
    featuredBorder: "border-l-emerald-500",
  },
  amber: {
    border: "border-amber-500/10",
    bg: "bg-amber-500/[0.03]",
    hoverBorder: "hover:border-amber-500/20",
    featuredBorder: "border-l-amber-500",
  },
  purple: {
    border: "border-purple-500/10",
    bg: "bg-purple-500/[0.03]",
    hoverBorder: "hover:border-purple-500/20",
    featuredBorder: "border-l-purple-500",
  },
  neutral: {
    border: "border-white/6",
    bg: "bg-white/[0.02]",
    hoverBorder: "hover:border-white/12",
    featuredBorder: "border-l-white/20",
  },
};

export default function Card({
  children,
  className = "",
  variant = "surface",
  color = "neutral",
}: CardProps) {
  const c = colorMap[color];

  const baseClasses = "rounded-2xl transition-all duration-200";

  switch (variant) {
    case "surface":
      return (
        <div className={`${baseClasses} p-6 md:p-8 ${c.bg} border ${c.border} ${className}`}>
          {children}
        </div>
      );

    case "elevated":
      return (
        <div className={`${baseClasses} p-6 md:p-8 ${c.bg} border ${c.border} shadow-[0_2px_16px_rgba(0,0,0,0.25)] ${className}`}>
          {children}
        </div>
      );

    case "interactive":
      return (
        <div className={`${baseClasses} p-6 md:p-8 ${c.bg} border ${c.border} ${c.hoverBorder} hover:-translate-y-0.5 cursor-default ${className}`}>
          {children}
        </div>
      );

    case "stat":
      return (
        <div className={`${baseClasses} p-6 md:p-8 text-center ${className}`}>
          {children}
        </div>
      );

    case "featured":
      return (
        <div className={`${baseClasses} p-6 md:p-8 ${c.bg} border ${c.border} border-l-[3px] ${c.featuredBorder} ${className}`}>
          {children}
        </div>
      );

    default:
      return (
        <div className={`${baseClasses} p-6 md:p-8 ${c.bg} border ${c.border} ${className}`}>
          {children}
        </div>
      );
  }
}
