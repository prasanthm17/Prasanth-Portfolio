import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, BriefcaseBusiness, LayoutGrid, MonitorSmartphone, PenTool, Sparkles } from "lucide-react";
import { caseStudies, type Project } from "@/app/data/portfolio";
import { Tag } from "@/components/ui/tag";
import { cn } from "@/lib/utils";

function getProjectIcon(project: Project) {
  const tags = project.tags.join(" ").toLowerCase();
  const title = project.title.toLowerCase();

  if (tags.includes("dashboard") || title.includes("dashboard")) {
    return LayoutGrid;
  }

  if (tags.includes("mobile") || tags.includes("app") || title.includes("mobile")) {
    return MonitorSmartphone;
  }

  if (tags.includes("poster") || tags.includes("thumbnail") || tags.includes("email") || title.includes("poster") || title.includes("thumbnail")) {
    return PenTool;
  }

  if (tags.includes("ui/ux") || tags.includes("case study") || title.includes("case study")) {
    return Sparkles;
  }

  return BriefcaseBusiness;
}

type ProjectLink = { href: string; external: boolean; label: string };

/**
 * Resolves where a project card should go.
 * Behance projects without an internal case study link straight to Behance so a
 * card can never lead to a dead route; the flagship links to its own route.
 */
function resolveProjectLink(project: Project): ProjectLink {
  if (project.caseStudyUrl) {
    return { href: project.caseStudyUrl, external: false, label: "View case study" };
  }

  const hasInternalCaseStudy = caseStudies.some((study) => study.slug === project.slug);
  if (hasInternalCaseStudy) {
    return { href: `/work/${project.slug}`, external: false, label: "View case study" };
  }

  if (project.behanceUrl) {
    return { href: project.behanceUrl, external: true, label: "Open on Behance" };
  }

  return { href: `/work/${project.slug}`, external: false, label: "View case study" };
}

export function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) {
  const Icon = getProjectIcon(project);
  const link = resolveProjectLink(project);
  const isBehance = project.projectType === "behance";

  const className = cn(
    "group flex h-full min-h-[34rem] flex-col overflow-hidden rounded-[2rem] border border-border bg-surface transition duration-500 hover:-translate-y-1 hover:shadow-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg",
    featured && "md:grid md:grid-cols-[1.15fr_0.85fr]"
  );

  const body = (
    <>
      <div className="flex flex-1 flex-col gap-6 p-6 md:p-8">
        <div className="flex items-start justify-between gap-4">
          <div className="flex flex-wrap items-center gap-3">
            <Tag>{project.context}</Tag>
            <span className="text-xs uppercase tracking-[0.24em] text-muted">{project.year}</span>
          </div>
          <div className="grid h-11 w-11 place-items-center rounded-2xl border border-border bg-white text-accent shadow-soft transition group-hover:-translate-y-0.5 group-hover:shadow-md">
            <Icon size={18} strokeWidth={1.9} aria-hidden="true" />
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="max-w-[16ch] text-[clamp(1.7rem,2.4vw,2.8rem)] font-semibold leading-[0.96] tracking-[-0.05em] text-text">
            {project.title}
          </h3>
          <p className="max-w-xl text-base leading-7 text-muted md:text-lg">{project.description}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
        <div className="mt-auto flex items-center justify-between gap-4 pt-8 text-sm font-medium text-text">
          <span>{project.role}</span>
          <span className="inline-flex items-center gap-2 text-accent transition-transform group-hover:translate-x-1">
            {link.label} <ArrowUpRight size={16} aria-hidden="true" />
          </span>
        </div>
      </div>
      <div className={cn("relative h-[18rem] overflow-hidden border-t border-border md:h-full md:border-l md:border-t-0", featured && "md:h-full")}>
        <Image
          src={project.image}
          alt={isBehance ? `${project.title} thumbnail from Behance` : `${project.title} product interface`}
          fill
          className="object-cover transition duration-700 group-hover:scale-[1.03]"
          sizes="(min-width: 1024px) 40vw, 100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.02),rgba(15,23,42,0.42))]" />
        <div className="absolute inset-0 flex items-end p-6 md:p-8">
          <div className="max-w-xs rounded-3xl border border-white/20 bg-white/75 p-4 backdrop-blur-sm">
            <p className="text-[11px] uppercase tracking-[0.24em] text-muted">{isBehance ? "Behance visual" : "Product preview"}</p>
            <p className="mt-3 text-sm leading-6 text-text">
              {isBehance ? "Public project thumbnail from Behance." : "Interface captured from the live product."}
            </p>
          </div>
        </div>
      </div>
    </>
  );

  if (link.external) {
    return (
      <a
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${project.title} — opens on Behance in a new tab`}
        className={className}
      >
        {body}
      </a>
    );
  }

  return (
    <Link href={link.href} className={className}>
      {body}
    </Link>
  );
}
