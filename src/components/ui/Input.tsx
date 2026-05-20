import type { InputHTMLAttributes } from "react";
import { cx } from "@/lib/utils";

export function Input({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cx(
        "h-11 w-full rounded-xl border border-ink/15 bg-white/90 px-4 text-sm text-ink shadow-soft outline-none transition focus:border-ink/40",
        className,
      )}
      {...props}
    />
  );
}
