"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

type BaseProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  magnetic?: boolean;
  className?: string;
};

type ButtonOnlyProps = BaseProps & ComponentPropsWithoutRef<"button"> & { href?: undefined };
type LinkProps = BaseProps & Omit<ComponentPropsWithoutRef<typeof Link>, "href" | "className" | "children"> & { href: string };

type ButtonProps = ButtonOnlyProps | LinkProps;

export function Button({ href, variant = "primary", magnetic = true, className, children, ...props }: ButtonProps) {
  const base = cn(
    "group inline-flex items-center justify-center gap-2 rounded-full border px-5 py-3 text-sm font-medium tracking-[0.12em] uppercase transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-bg focus-visible:ring-accent",
    magnetic && "will-change-transform",
    variant === "primary" && "border-transparent bg-text text-bg hover:-translate-y-0.5 hover:bg-[#0b1220]",
    variant === "secondary" && "border-border bg-surface text-text hover:-translate-y-0.5 hover:border-text/20 hover:bg-elevated",
    variant === "ghost" && "border-border bg-transparent text-text hover:-translate-y-0.5 hover:bg-surface"
  );

  if (href) {
    const linkProps = props as Omit<ComponentPropsWithoutRef<typeof Link>, "href" | "className" | "children">;
    return (
      <Link href={href} className={cn(base, className)} {...linkProps}>
        {children}
      </Link>
    );
  }

  const buttonProps = props as ComponentPropsWithoutRef<"button">;
  return (
    <button className={cn(base, className)} {...buttonProps}>
      {children}
    </button>
  );
}
