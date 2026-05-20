import Link from "next/link";
import { cx } from "@/lib/utils";
import type { ReactNode } from "react";

type LinkButtonProps = {
  href: string;
  label: string;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  startIcon?: ReactNode;
};

const variantStyles = {
  primary: "bg-brand text-white hover:bg-brand/90",
  secondary: "bg-accent text-ink hover:bg-accent/85",
  outline: "border border-ink/20 text-ink hover:border-ink/40",
};

const sizeStyles = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6 text-sm",
  lg: "h-12 px-7 text-base",
};

export function LinkButton({
  href,
  label,
  variant = "primary",
  size = "md",
  className,
  startIcon,
}: LinkButtonProps) {
  return (
    <Link
      href={href}
      className={cx(
        "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition",
        variantStyles[variant],
        sizeStyles[size],
        className,
      )}
    >
      {startIcon ? (
        <span className="relative z-10 inline-flex items-center gap-2">
          <span className="inline-flex items-center">{startIcon}</span>
          <span>{label}</span>
        </span>
      ) : (
        <span className="relative z-10">{label}</span>
      )}
    </Link>
  );
}
