import type { SelectHTMLAttributes } from "react";
import { cx } from "@/lib/utils";

export function Select({
  className,
  children,
  ...props
}: SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select
      className={cx(
        "h-11 w-full rounded-xl border border-ink/15 bg-white/90 px-4 text-sm text-ink shadow-soft outline-none transition focus:border-ink/40",
        className,
      )}
      {...props}
    >
      {children}
    </select>
  );
}
