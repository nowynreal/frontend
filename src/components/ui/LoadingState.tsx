import type { HTMLAttributes } from "react";
import { cx } from "@/lib/utils";

export function LoadingState({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cx(
        "flex items-center justify-center rounded-2xl border border-ink/10 bg-white/70 p-6 text-sm text-ink/70",
        className,
      )}
      {...props}
    >
      {props.children ?? "Loading data..."}
    </div>
  );
}
