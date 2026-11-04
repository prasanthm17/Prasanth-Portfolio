import { cn } from "@/lib/utils";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

/**
 * External anchor styled like the portfolio Button.
 * Deliberately not using next/link: an external product should be a real,
 * crawlable anchor with an explicit target and rel.
 */
export function ExternalButton({
  href,
  children,
  variant = "primary",
  className,
  ...props
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "inverse";
  className?: string;
} & Omit<ComponentPropsWithoutRef<"a">, "href" | "className" | "children">) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group inline-flex items-center justify-center gap-2 rounded-full border px-5 py-3 text-sm font-medium uppercase tracking-[0.12em] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg",
        variant === "primary" && "border-transparent bg-text text-bg hover:-translate-y-0.5 hover:bg-[#0b1220]",
        variant === "secondary" && "border-border bg-surface text-text hover:-translate-y-0.5 hover:border-text/20 hover:bg-elevated",
        variant === "ghost" && "border-border bg-transparent text-text hover:-translate-y-0.5 hover:bg-surface",
        variant === "inverse" && "border-transparent bg-bg text-text hover:-translate-y-0.5 hover:bg-bg/90",
        className
      )}
      {...props}
    >
      {children}
    </a>
  );
}
