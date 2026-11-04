"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BriefcaseBusiness, Clock3, ExternalLink, Gauge, House, Mail, Menu, UserRound, X } from "lucide-react";
import { useEffect, useState } from "react";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { getDesignLensLink } from "@/lib/designlens";

const links = [
  { href: "home", label: "Home", icon: House },
  { href: "work", label: "Work", icon: BriefcaseBusiness },
  { href: "about", label: "About", icon: UserRound },
  { href: "experience", label: "Experience", icon: Clock3 },
  { href: "contact", label: "Contact", icon: Mail }
] as const;

export function SiteNav() {
  const auditLink = getDesignLensLink();
  const pathname = usePathname();
  const onHome = pathname === "/";
  const [open, setOpen] = useState(false);
  const [compact, setCompact] = useState(false);
  const [active, setActive] = useState<string>("home");

  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!onHome) {
      setActive("");
      return;
    }

    const sectionIds = links.map((link) => link.href);

    const updateActiveSection = () => {
      const marker = window.scrollY + 180;
      let nextActive = "home";

      if (marker < 240) {
        setActive("home");
        return;
      }

      for (const sectionId of sectionIds) {
        const element = document.getElementById(sectionId);
        if (!element) {
          continue;
        }

        if (element.offsetTop <= marker) {
          nextActive = sectionId;
        }
      }

      setActive(nextActive);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, [onHome]);

  return (
    <header className={cn("fixed inset-x-0 top-0 z-50 border-b border-transparent backdrop-blur-xl transition", compact && "border-border/80 bg-bg/95 shadow-[0_10px_30px_rgba(15,23,42,0.08)]") }>
      <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="inline-flex items-center gap-3 text-text">
          <span className="grid h-10 w-10 place-items-center rounded-full border border-border bg-surface text-xs font-semibold tracking-[0.18em] text-accent shadow-soft">
            PM
          </span>
          <span className="hidden flex-col leading-none sm:flex">
            <span className="text-sm font-semibold tracking-[0.28em]">PRASANTH M</span>
            <span className="text-[11px] uppercase tracking-[0.2em] text-muted">AI UX / PRODUCT DESIGN</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-2 lg:flex">
          {links.map(({ href, label, icon: Icon }) => (
            <Link
              key={href}
              href={`#${href}`}
              className={cn(
                "inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm transition",
                active === href ? "border-text bg-text text-bg" : "border-border bg-surface text-muted hover:-translate-y-0.5 hover:border-text/20 hover:text-text"
              )}
            >
              <Icon size={14} />
              {label}
            </Link>
          ))}
          {auditLink.url ? (
            <a
              href={auditLink.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open the DesignLens UX Audit Lab in a new tab"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-accentSoft px-4 py-2 text-sm font-medium text-accent transition hover:-translate-y-0.5 hover:border-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
            >
              <Gauge size={14} aria-hidden="true" />
              UX Audit Lab
              <ExternalLink size={12} aria-hidden="true" />
            </a>
          ) : null}
          <ThemeToggle />
        </nav>
        <div className="flex items-center gap-3 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-label="Toggle menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-text"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>
      <div className={cn("overflow-hidden border-border bg-bg transition-[max-height,opacity] duration-500 lg:hidden", open ? "max-h-[calc(100vh-4rem)] border-t opacity-100" : "max-h-0 opacity-0")}>
        <div className="mx-auto flex max-w-[1440px] flex-col gap-4 overflow-y-auto px-4 py-5 sm:px-6 lg:px-8">
          {links.map(({ href, label, icon: Icon }) => (
            <Link key={href} href={`#${href}`} onClick={() => setOpen(false)} className={cn("inline-flex items-center gap-3 rounded-2xl border px-4 py-4 text-xl font-semibold tracking-[-0.04em]", active === href ? "border-text bg-text text-bg" : "border-border bg-surface text-text") }>
              <Icon size={18} />
              {label}
            </Link>
          ))}
          {auditLink.url ? (
            <a
              href={auditLink.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              aria-label="Open the DesignLens UX Audit Lab in a new tab"
              className="inline-flex items-center gap-3 rounded-2xl border border-border bg-accentSoft px-4 py-4 text-xl font-semibold tracking-[-0.04em] text-accent"
            >
              <Gauge size={18} aria-hidden="true" />
              UX Audit Lab
              <ExternalLink size={16} className="ml-auto" aria-hidden="true" />
            </a>
          ) : null}
          <Button href="#contact" variant="secondary" className="w-fit" onClick={() => setOpen(false)}>
            Contact
          </Button>
        </div>
      </div>
    </header>
  );
}
