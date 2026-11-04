import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight, ExternalLink } from "lucide-react";
import { designLensFacts, designLensProject, designLensSections } from "@/app/data/designlens";
import { designLensConfigMessage, getDesignLensLink } from "@/lib/designlens";
import { ExternalButton } from "@/components/ui/external-button";
import { PageTransition } from "@/components/page-transition";
import { Reveal } from "@/components/ui/reveal";
import { SiteNav } from "@/components/site-nav";
import { Tag } from "@/components/ui/tag";

const CASE_STUDY_TITLE = "DesignLens – Universal UX Audit Platform | Prasanth M";
const CASE_STUDY_DESCRIPTION =
  "Explore DesignLens, an independent UX audit and design quality platform designed to evaluate accessibility, usability and digital product experiences.";

export const metadata: Metadata = {
  title: CASE_STUDY_TITLE,
  description: CASE_STUDY_DESCRIPTION,
  alternates: { canonical: "/work/designlens-ux-audit-platform" },
  openGraph: {
    title: CASE_STUDY_TITLE,
    description: CASE_STUDY_DESCRIPTION,
    type: "article",
    url: "/work/designlens-ux-audit-platform",
    images: [
      {
        url: "/designlens/dashboard.png",
        width: 1440,
        height: 900,
        alt: "DesignLens workspace dashboard"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: CASE_STUDY_TITLE,
    description: CASE_STUDY_DESCRIPTION,
    images: ["/designlens/dashboard.png"]
  }
};

function LiveProductCta({
  variant = "primary",
  label = "Explore the Live Product"
}: {
  variant?: "primary" | "secondary" | "inverse";
  label?: string;
}) {
  const link = getDesignLensLink();
  if (!link.url) {
    return (
      <span className="inline-flex cursor-not-allowed items-center gap-2 rounded-full border border-dashed border-border px-5 py-3 text-sm font-medium uppercase tracking-[0.12em] text-muted">
        Live product unavailable
      </span>
    );
  }
  return (
    <ExternalButton
      href={link.url}
      variant={variant}
      aria-label={`${label} — opens the DesignLens application in a new tab`}
    >
      {label}
      <ExternalLink size={15} aria-hidden="true" />
    </ExternalButton>
  );
}

export default function DesignLensCaseStudyPage() {
  const link = getDesignLensLink();
  const configMessage = designLensConfigMessage(link);

  return (
    <PageTransition>
      <main className="relative z-10 overflow-x-clip pt-20 md:pt-24">
        <SiteNav />

        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border/70 py-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-muted transition hover:text-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
            >
              <ArrowLeft size={15} aria-hidden="true" /> Back to portfolio
            </Link>
            <p className="text-[10.5px] uppercase tracking-[0.24em] text-muted">
              Case study · Independent product
            </p>
          </div>
        </div>

        {/* Hero */}
        <header className="mx-auto max-w-[1440px] px-4 pb-10 pt-10 sm:px-6 md:pb-14 md:pt-14 lg:px-8">
          <Reveal>
            <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <Tag className="border-text/20 text-text">Product design</Tag>
                  <Tag>UX engineering</Tag>
                  <Tag>Accessibility</Tag>
                </div>
                <h1 className="mt-6 text-[clamp(3rem,8vw,7rem)] font-semibold leading-[0.84] tracking-[-0.075em] text-text">
                  DesignLens
                </h1>
                <p className="mt-5 max-w-2xl text-[clamp(1.3rem,2.4vw,2rem)] font-medium leading-[1.15] tracking-[-0.035em] text-text">
                  A universal UX audit platform designed to make design quality measurable — and honest about what it can
                  measure.
                </p>
                <div className="mt-7 flex flex-wrap items-center gap-3">
                  <LiveProductCta />
                  <Link
                    href="/#work"
                    className="group inline-flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-3 text-sm font-medium uppercase tracking-[0.12em] text-text transition hover:-translate-y-0.5 hover:border-text/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
                  >
                    More work
                    <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                  </Link>
                </div>
                {configMessage ? <p className="mt-3 max-w-md text-[11.5px] leading-5 text-muted">{configMessage}</p> : null}
              </div>

              <dl className="grid grid-cols-2 gap-x-6 gap-y-5 border-t border-border/70 pt-6 lg:border-t-0 lg:pt-0">
                <div>
                  <dt className="text-[10.5px] uppercase tracking-[0.24em] text-muted">Role</dt>
                  <dd className="mt-2 text-sm font-medium leading-6 text-text">Product Designer | UX Engineer</dd>
                </div>
                <div>
                  <dt className="text-[10.5px] uppercase tracking-[0.24em] text-muted">Type</dt>
                  <dd className="mt-2 text-sm font-medium leading-6 text-text">Independent product</dd>
                </div>
                <div>
                  <dt className="text-[10.5px] uppercase tracking-[0.24em] text-muted">Year</dt>
                  <dd className="mt-2 text-sm font-medium leading-6 text-text">2026</dd>
                </div>
                <div>
                  <dt className="text-[10.5px] uppercase tracking-[0.24em] text-muted">Scope</dt>
                  <dd className="mt-2 text-sm font-medium leading-6 text-text">Concept → IA → UI → build</dd>
                </div>
              </dl>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <figure className="mt-10 overflow-hidden rounded-[1.75rem] border border-border bg-elevated shadow-soft md:mt-14">
              <div className="flex items-center gap-2 border-b border-border/80 bg-surface px-4 py-3">
                <span className="flex gap-1.5" aria-hidden="true">
                  <span className="h-2 w-2 rounded-full bg-border" />
                  <span className="h-2 w-2 rounded-full bg-border" />
                  <span className="h-2 w-2 rounded-full bg-border" />
                </span>
                <span className="ml-2 truncate rounded-full border border-border bg-bg px-3 py-1 text-[10.5px] tracking-[0.06em] text-muted">
                  {link.host ?? "designlens.app"} / workspace / dashboard
                </span>
              </div>
              <Image
                src="/designlens/dashboard.png"
                alt="DesignLens workspace dashboard with average UX score, quality score trend, category performance and finding severity distribution"
                width={1440}
                height={900}
                priority
                className="h-auto w-full"
                sizes="(min-width: 1440px) 1376px, 100vw"
              />
            </figure>
          </Reveal>

          <dl className="mt-8 grid grid-cols-2 gap-x-8 gap-y-4 border-t border-border/70 pt-6 sm:grid-cols-4">
            {designLensFacts.map((fact) => (
              <div key={fact.label}>
                <dt className="text-[10px] uppercase tracking-[0.2em] text-muted">{fact.label}</dt>
                <dd className="mt-1 text-lg font-semibold tracking-[-0.03em] text-text">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </header>

        {/* Body */}
        <div className="mx-auto grid max-w-[1440px] gap-10 px-4 pb-16 sm:px-6 lg:grid-cols-[220px_1fr] lg:gap-14 lg:px-8">
          <nav aria-label="Case study sections" className="hidden lg:block">
            <div className="sticky top-28 space-y-2 border-t border-border/70 pt-5">
              <p className="text-[10px] uppercase tracking-[0.24em] text-muted">Contents</p>
              <ol className="mt-3 space-y-1">
                {designLensSections.map((section) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className="group flex items-baseline gap-2 rounded-lg px-2 py-1.5 text-[12.5px] leading-5 text-muted transition hover:bg-surface hover:text-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
                    >
                      <span className="tabular-nums text-[10px] tracking-[0.1em] text-border group-hover:text-muted">
                        {section.number}
                      </span>
                      {section.title}
                    </a>
                  </li>
                ))}
              </ol>
            </div>
          </nav>

          <div className="min-w-0">
            {designLensSections.map((section, index) => (
              <Reveal key={section.id} delay={index === 0 ? 0 : 0.03}>
                <article
                  id={section.id}
                  className="scroll-mt-28 border-t border-border/70 py-10 first:border-t-0 first:pt-0 md:py-12"
                >
                  <div className="grid gap-6 md:grid-cols-[92px_1fr] md:gap-10">
                    <div className="flex items-center gap-3 md:block">
                      <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-muted">{section.number}</p>
                      <span className="hidden h-px w-10 bg-border md:mt-3 md:block" aria-hidden="true" />
                    </div>

                    <div className="min-w-0">
                      <h2 className="text-[clamp(1.6rem,2.6vw,2.4rem)] font-semibold leading-[1.02] tracking-[-0.045em] text-text">
                        {section.title}
                      </h2>
                      <p className="mt-4 max-w-3xl text-base leading-8 text-text/85 md:text-[17px]">{section.lede}</p>

                      {section.body ? (
                        <div className="mt-5 max-w-3xl space-y-4">
                          {section.body.map((paragraph) => (
                            <p key={paragraph} className="text-sm leading-7 text-muted md:text-[15px] md:leading-8">
                              {paragraph}
                            </p>
                          ))}
                        </div>
                      ) : null}

                      {section.bullets ? (
                        <ul className="mt-6 grid max-w-3xl gap-3 sm:grid-cols-2">
                          {section.bullets.map((bullet) => (
                            <li key={bullet.title} className="rounded-2xl border border-border/80 bg-surface p-4">
                              <p className="text-[12.5px] font-semibold tracking-[-0.01em] text-text">{bullet.title}</p>
                              <p className="mt-1.5 text-[12.5px] leading-6 text-muted">{bullet.text}</p>
                            </li>
                          ))}
                        </ul>
                      ) : null}

                      {section.artifact ? (
                        <div className="mt-7 max-w-3xl overflow-hidden rounded-2xl border border-border/80">
                          <div className="flex items-center justify-between border-b border-border/80 bg-surface px-4 py-3">
                            <p className="text-[10.5px] uppercase tracking-[0.2em] text-muted">{section.artifact.title}</p>
                            <span className="text-[10px] uppercase tracking-[0.18em] text-border">Artifact</span>
                          </div>
                          <dl className="divide-y divide-border/70">
                            {section.artifact.rows.map((row) => (
                              <div key={row.label} className="grid gap-1 px-4 py-3 sm:grid-cols-[150px_1fr] sm:gap-6">
                                <dt className="text-[11px] uppercase tracking-[0.14em] text-muted">{row.label}</dt>
                                <dd className="text-[13px] leading-6 text-text">{row.value}</dd>
                              </div>
                            ))}
                          </dl>
                        </div>
                      ) : null}

                      {section.image ? (
                        <figure className="mt-7 max-w-4xl">
                          <div className="overflow-hidden rounded-2xl border border-border bg-elevated shadow-soft">
                            <Image
                              src={section.image.src}
                              alt={section.image.alt}
                              width={1440}
                              height={900}
                              className="h-auto w-full"
                              sizes="(min-width: 1024px) 760px, 100vw"
                            />
                          </div>
                          <figcaption className="mt-3 text-[11.5px] leading-5 text-muted">{section.image.caption}</figcaption>
                        </figure>
                      ) : null}
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}

            {/* Closing CTA */}
            <Reveal>
              <section className="mt-4 rounded-[2rem] border border-border bg-text px-6 py-9 text-bg md:px-10 md:py-11">
                <p className="text-[10.5px] uppercase tracking-[0.28em] text-bg/70">The working product</p>
                <h2 className="mt-4 max-w-3xl text-[clamp(1.9rem,3.6vw,3.1rem)] font-semibold leading-[0.95] tracking-[-0.05em]">
                  The case study ends; the audit engine does not.
                </h2>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-bg/75 md:text-base">
                  Open the live application and run an audit yourself — or explore the read-only demo workspace with eight
                  sample projects and eighteen audits of history.
                </p>
                <div className="mt-7 flex flex-wrap items-center gap-3">
                  <LiveProductCta variant="inverse" />
                  <Link
                    href="/"
                    className="inline-flex items-center gap-2 rounded-full border border-white/25 px-5 py-3 text-sm font-medium uppercase tracking-[0.12em] text-bg/90 transition hover:border-white/50 hover:text-bg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bg focus-visible:ring-offset-2 focus-visible:ring-offset-text"
                  >
                    Back to portfolio
                    <ArrowUpRight size={15} aria-hidden="true" />
                  </Link>
                </div>
                {configMessage ? <p className="mt-4 text-[11.5px] text-bg/60">{configMessage}</p> : null}
              </section>
            </Reveal>

            <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-border/70 pt-6 text-sm text-muted">
              <Link href="/" className="inline-flex items-center gap-2 transition hover:text-text">
                <ArrowLeft size={15} aria-hidden="true" /> Back to portfolio
              </Link>
              <p className="text-[11px] uppercase tracking-[0.2em]">
                {designLensProject.role} · {designLensProject.year}
              </p>
            </div>
          </div>
        </div>
      </main>
    </PageTransition>
  );
}
