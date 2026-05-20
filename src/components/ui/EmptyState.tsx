import type { HTMLAttributes } from "react";
import { cx } from "@/lib/utils";

export function EmptyState({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cx(
        "rounded-2xl border border-dashed border-ink/20 bg-white/60 p-6 text-center text-sm text-ink/70",
        className,
      )}
      {...props}
    >
      {props.children}
    </div>
  );
}
