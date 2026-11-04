import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tag } from "@/components/ui/tag";
import { CaseStudy } from "@/app/data/portfolio";

export function CaseStudyShell({ caseStudy, behanceUrl }: { caseStudy: CaseStudy; behanceUrl?: string }) {
  return (
    <article className="space-y-16 py-10 md:py-16">
      <header className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
        <div className="space-y-6">
          <div className="flex flex-wrap items-center gap-3">
            <Tag>{caseStudy.context}</Tag>
            <Tag>{caseStudy.role}</Tag>
            <span className="text-xs uppercase tracking-[0.22em] text-muted">{caseStudy.year}</span>
          </div>
          <h1 className="max-w-4xl text-[clamp(2.4rem,6vw,5.8rem)] font-semibold leading-[0.94] tracking-[-0.07em] text-text">
            {caseStudy.title}
          </h1>
          <p className="max-w-3xl text-lg leading-8 text-muted md:text-xl">{caseStudy.description}</p>
          <div className="flex flex-wrap gap-3">
            {behanceUrl ? (
              <Button href={behanceUrl} variant="secondary">
                Open on Behance <ArrowUpRight size={16} />
              </Button>
            ) : null}
            <Button href="/" variant="ghost">
              Back to portfolio <ArrowUpRight size={16} />
            </Button>
          </div>
        </div>
        <div className="rounded-[2rem] border border-border bg-surface p-5">
          <div className="rounded-[1.5rem] border border-dashed border-border bg-[linear-gradient(135deg,rgba(255,255,255,0.85),rgba(239,244,255,0.95))] p-6">
            <p className="text-xs uppercase tracking-[0.28em] text-muted">Project visual</p>
            <p className="mt-4 text-xl font-medium leading-8 text-text">Replace with Figma screenshot</p>
            <p className="mt-3 text-sm leading-6 text-muted">This placeholder is intentionally styled to make future screenshots easy to drop in.</p>
          </div>
        </div>
      </header>

      <section className="grid gap-6 lg:grid-cols-[0.82fr_1.18fr]">
        <div className="space-y-4 rounded-[2rem] border border-border bg-surface p-6 md:p-8 lg:sticky lg:top-24 lg:self-start">
          <p className="text-xs uppercase tracking-[0.28em] text-muted">Case study structure</p>
          <ol className="space-y-3">
            {caseStudy.steps.map((step) => (
              <li key={step.title} className="flex items-center justify-between gap-4 rounded-2xl border border-border bg-white/70 px-4 py-3">
                <span className="text-sm font-medium text-text">{step.title}</span>
                <span className="text-xs uppercase tracking-[0.18em] text-muted">Section</span>
              </li>
            ))}
          </ol>
        </div>

        <div className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-[2rem] border border-border bg-surface p-6">
              <p className="text-xs uppercase tracking-[0.24em] text-muted">Overview</p>
              <p className="mt-4 text-base leading-7 text-muted">{caseStudy.steps[0]?.body}</p>
            </div>
            <div className="rounded-[2rem] border border-border bg-surface p-6">
              <p className="text-xs uppercase tracking-[0.24em] text-muted">Replaceable visual</p>
              <div className="mt-4 grid min-h-[12rem] place-items-center rounded-[1.5rem] border border-dashed border-border bg-white/70 p-6 text-center">
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-muted">Project visual</p>
                  <p className="mt-2 text-lg font-medium text-text">Replace with Figma screenshot</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {caseStudy.steps.slice(1).map((step, index) => (
              <section key={step.title} className="rounded-[1.75rem] border border-border bg-surface p-6">
                <div className="flex items-start justify-between gap-4">
                  <h2 className="text-sm font-medium uppercase tracking-[0.24em] text-accent">{step.title}</h2>
                  <span className="text-xs uppercase tracking-[0.22em] text-muted">{String(index + 2).padStart(2, "0")}</span>
                </div>
                <p className="mt-4 text-base leading-7 text-muted">{step.body}</p>
                {(step.title.includes("Design Exploration") || step.title.includes("Solution")) ? (
                  <div className="mt-5 grid min-h-[11rem] place-items-center rounded-[1.25rem] border border-dashed border-border bg-white/70 p-6 text-center">
                    <div>
                      <p className="text-xs uppercase tracking-[0.24em] text-muted">Project visual</p>
                      <p className="mt-2 text-base font-medium text-text">Replace with Figma screenshot</p>
                    </div>
                  </div>
                ) : null}
              </section>
            ))}
          </div>

          <div className="rounded-[2rem] border border-border bg-text p-6 text-bg md:p-8">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-bg/70">Next step</p>
                <p className="mt-3 text-xl font-medium">Use the live Behance project as the source of truth for the final visual story.</p>
              </div>
              <Link href="/" className="inline-flex items-center gap-2 text-sm font-medium text-bg/80 transition hover:text-bg">
                Back to selected work <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
