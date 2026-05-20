import type { HTMLAttributes } from "react";
import { cx } from "@/lib/utils";

export function ErrorState({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cx(
        "rounded-2xl border border-rose-200 bg-rose-50 p-6 text-sm text-rose-900",
        className,
      )}
      {...props}
    >
      {props.children ?? "Something went wrong. Please try again."}
    </div>
  );
}
