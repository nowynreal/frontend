import type { HTMLAttributes, TableHTMLAttributes } from "react";
import { cx } from "@/lib/utils";

export function Table({
  className,
  ...props
}: TableHTMLAttributes<HTMLTableElement>) {
  return (
    <div className="overflow-x-auto">
      <table
        className={cx(
          "w-full border-separate border-spacing-y-2 text-left text-sm",
          className,
        )}
        {...props}
      />
    </div>
  );
}

export function TableHead({
  className,
  ...props
}: HTMLAttributes<HTMLTableSectionElement>) {
  return (
    <thead
      className={cx("text-xs uppercase tracking-wide text-ink/50", className)}
      {...props}
    />
  );
}

export function TableRow({
  className,
  ...props
}: HTMLAttributes<HTMLTableRowElement>) {
  return (
    <tr
      className={cx(
        "rounded-xl bg-white/80 shadow-soft [&>td:first-child]:rounded-l-xl [&>td:last-child]:rounded-r-xl",
        className,
      )}
      {...props}
    />
  );
}

export function TableCell({
  className,
  ...props
}: HTMLAttributes<HTMLTableCellElement>) {
  return (
    <td className={cx("px-4 py-3 text-ink", className)} {...props} />
  );
}
