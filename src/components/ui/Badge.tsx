import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  className?: string;
}

export default function Badge({ children, className = "" }: BadgeProps) {
  return (
    <span
      className={`
        inline-flex items-center
        rounded-full px-4 py-1.5
        bg-dark-surface border border-dark-border
        text-sm text-text-secondary
        ${className}
      `}
    >
      {children}
    </span>
  );
}
