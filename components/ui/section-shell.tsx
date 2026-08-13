import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function SectionShell({ children, className, id }: { children: ReactNode; className?: string; id?: string }) {
  return (
    <section id={id} className={cn("scroll-mt-28 border-t border-border/70 py-12 md:py-16", className)}>
      {children}
    </section>
  );
}
