import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink, ShieldCheck } from "lucide-react";
import { designLensFacts, designLensProject } from "@/app/data/designlens";
import { designLensConfigMessage, getDesignLensLink } from "@/lib/designlens";
import { ExternalButton } from "@/components/ui/external-button";
import { Reveal } from "@/components/ui/reveal";
import { Tag } from "@/components/ui/tag";

/**
 * Flagship feature for DesignLens.
 *
 * The product is a separate deployment; this section only links to it.
 * Screenshots are captured from the running application (the demo workspace,
 * which is labelled as sample data inside the product itself).
 */
export function FeaturedDesignLens() {
  const link = getDesignLensLink();
  const configMessage = designLensConfigMessage(link);
  const caseStudyHref = designLensProject.caseStudyUrl ?? "/work/designlens-ux-audit-platform";

  return (
    <section id="featured" className="relative scroll-mt-24 overflow-hidden pb-14 pt-10 md:pb-20 md:pt-14">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        {/* Editorial rule + label */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-y border-border/70 py-4">
          <p className="flex flex-wrap items-center gap-2 text-[10.5px] font-medium uppercase tracking-[0.3em] text-muted">
            <span className="text-text">Featured product</span>
            <span className="text-border">/</span>
            <span>Independent project</span>
          </p>
          <p className="flex items-center gap-2 text-[10.5px] uppercase tracking-[0.24em] text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" aria-hidden="true" />
            Live product · 2026
          </p>
        </div>

        <div className="mt-10 grid gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:items-start lg:gap-14">
          {/* Narrative column */}
          <div className="flex h-full flex-col">
            <Reveal>
              <h2 className="text-[clamp(3.2rem,7.4vw,6.4rem)] font-semibold leading-[0.84] tracking-[-0.07em] text-text">
                DesignLens
              </h2>
              <p className="mt-6 max-w-xl text-[clamp(1.35rem,2.3vw,1.9rem)] font-medium leading-[1.14] tracking-[-0.035em] text-text">
                See beyond the interface.
                <br />
                Improve every experience.
              </p>
              <p className="mt-6 max-w-xl text-sm leading-7 text-muted md:text-base">
                A universal UX audit and design quality platform. Point it at any public page and it measures seven
                dimensions of design quality — then turns those measurements into findings, scores and reports a team can
                act on. Not a concept: a working product with a real audit engine behind it.
              </p>

              <dl className="mt-9 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-border/70 pt-6">
                <div>
                  <dt className="text-[10.5px] uppercase tracking-[0.24em] text-muted">My role</dt>
                  <dd className="mt-2 text-sm font-medium leading-6 text-text">Product Designer | UX Engineer</dd>
                </div>
                <div>
                  <dt className="text-[10.5px] uppercase tracking-[0.24em] text-muted">Project type</dt>
                  <dd className="mt-2 text-sm font-medium leading-6 text-text">Independent product · UX tooling</dd>
                </div>
              </dl>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                {link.url ? (
                  <ExternalButton href={link.url} aria-label="Explore the live DesignLens audit application in a new tab">
                    Explore Live Audit
                    <ExternalLink size={15} aria-hidden="true" />
                  </ExternalButton>
                ) : (
                  <span
                    className="inline-flex cursor-not-allowed items-center gap-2 rounded-full border border-dashed border-border px-5 py-3 text-sm font-medium uppercase tracking-[0.12em] text-muted"
                    aria-disabled="true"
                  >
                    Live audit unavailable
                    <ExternalLink size={15} aria-hidden="true" />
                  </span>
                )}

                <Link
                  href={caseStudyHref}
                  className="group inline-flex items-center justify-center gap-2 rounded-full border border-border bg-surface px-5 py-3 text-sm font-medium uppercase tracking-[0.12em] text-text transition-all duration-300 hover:-translate-y-0.5 hover:border-text/20 hover:bg-elevated focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
                >
                  View Case Study
                  <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                </Link>
              </div>

              {configMessage ? (
                <p className="mt-3 max-w-md text-[11.5px] leading-5 text-muted">{configMessage}</p>
              ) : (
                <p className="mt-3 flex items-center gap-1.5 text-[11.5px] text-muted">
                  <ShieldCheck size={13} className="text-emerald-500" aria-hidden="true" />
                  Opens the separately hosted app in a new tab — no account needed to view the demo.
                </p>
              )}
            </Reveal>

            {/* Depth strip — factual product facts, not marketing numbers */}
            <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-border/70 pt-6 sm:grid-cols-4 lg:mt-auto lg:pt-8">
              {designLensFacts.map((fact) => (
                <div key={fact.label}>
                  <dt className="text-[10px] uppercase leading-4 tracking-[0.18em] text-muted">{fact.label}</dt>
                  <dd className="mt-1.5 text-lg font-semibold tracking-[-0.03em] text-text">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Product visual */}
          <Reveal delay={0.08}>
            <figure>
              <div className="relative">
                <div className="overflow-hidden rounded-[1.6rem] border border-border bg-elevated shadow-soft">
                  <div className="flex items-center gap-2 border-b border-border/80 bg-surface px-4 py-3">
                    <span className="flex gap-1.5" aria-hidden="true">
                      <span className="h-2 w-2 rounded-full bg-border" />
                      <span className="h-2 w-2 rounded-full bg-border" />
                      <span className="h-2 w-2 rounded-full bg-border" />
                    </span>
                    <span className="ml-2 flex-1 truncate rounded-full border border-border bg-bg px-3 py-1 text-[10.5px] tracking-[0.06em] text-muted">
                      {link.host ?? "designlens.app"}
                      <span className="text-border"> / </span>
                      dashboard
                    </span>
                    <span className="hidden shrink-0 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 text-[9.5px] font-medium uppercase tracking-[0.16em] text-emerald-600 sm:inline dark:text-emerald-400">
                      Live
                    </span>
                  </div>
                  <Image
                    src="/designlens/dashboard.png"
                    alt="DesignLens workspace dashboard showing average UX score, score trend, category performance and finding severity distribution"
                    width={1440}
                    height={900}
                    priority
                    className="h-auto w-full"
                    sizes="(min-width: 1024px) 46vw, 100vw"
                  />
                </div>

                {/* Secondary frame: the evidence behind the score */}
                <div className="absolute -bottom-8 -left-5 hidden w-[44%] overflow-hidden rounded-[1.1rem] border border-border bg-elevated shadow-[0_24px_60px_rgba(15,23,42,0.18)] lg:block">
                  <div className="flex items-center justify-between border-b border-border/80 bg-surface px-3 py-2">
                    <span className="text-[9.5px] uppercase tracking-[0.2em] text-muted">Check register</span>
                    <span className="text-[9.5px] uppercase tracking-[0.16em] text-muted">Evidence</span>
                  </div>
                  <Image
                    src="/designlens/checks.png"
                    alt="DesignLens check register listing automated checks with observed values and pass, warning or not-applicable results"
                    width={1440}
                    height={900}
                    className="h-auto w-full"
                    sizes="(min-width: 1024px) 22vw, 45vw"
                  />
                </div>
              </div>

              <figcaption className="mt-14 flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] leading-5 text-muted lg:mt-16">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-dashed border-border px-2 py-0.5 text-[10px] uppercase tracking-[0.16em]">
                  Sample data
                </span>
                Captured from the running app&apos;s read-only demo workspace.
              </figcaption>
            </figure>
          </Reveal>
        </div>

        {/* Capabilities */}
        <div className="mt-12 grid gap-4 border-t border-border/70 pt-6 lg:grid-cols-[200px_1fr] lg:items-start">
          <p className="text-[10px] uppercase tracking-[0.24em] text-muted">Capabilities</p>
          <div className="flex flex-wrap gap-2">
            {designLensProject.capabilities?.map((capability) => (
              <Tag key={capability} className="text-[10px] tracking-[0.14em]">
                {capability}
              </Tag>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
