import { ReactNode, MouseEventHandler } from "react";

type ButtonVariant = "primary" | "secondary";

interface ButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  href?: string;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
}

export default function Button({
  children,
  variant = "primary",
  href,
  className = "",
  onClick,
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold transition-all duration-300 cursor-pointer";

  const variantClasses: Record<ButtonVariant, string> = {
    primary:
      "bg-gradient-to-r from-brand-indigo to-brand-cyan text-white shadow-lg shadow-brand-indigo/25 hover:shadow-brand-indigo/40 hover:shadow-xl hover:brightness-110",
    secondary:
      "border border-dark-border text-text-secondary hover:text-text-primary hover:bg-dark-surface hover:border-text-tertiary",
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  );
}
