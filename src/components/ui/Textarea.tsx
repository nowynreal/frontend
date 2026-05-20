import type { TextareaHTMLAttributes } from "react";
import { cx } from "@/lib/utils";

export function Textarea({
  className,
  ...props
}: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className={cx(
        "w-full rounded-xl border border-ink/15 bg-white/90 px-4 py-3 text-sm text-ink shadow-soft outline-none transition focus:border-ink/40",
        className,
      )}
      {...props}
    />
  );
}
