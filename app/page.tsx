import Link from "next/link";
import { ArrowRight, ArrowUpRight, Brain, BriefcaseBusiness, Download, LayoutGrid, Linkedin, Mail, MonitorSmartphone, PenTool, Sparkles, Wrench } from "lucide-react";
import { aiConcepts, education, experience, projects, site, skills } from "@/app/data/portfolio";
import { Button } from "@/components/ui/button";
import { CopyEmail } from "@/components/ui/copy-email";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionShell } from "@/components/ui/section-shell";
import { Tag } from "@/components/ui/tag";
import { ProjectCard } from "@/components/project-card";
import { PageTransition } from "@/components/page-transition";
import { SiteNav } from "@/components/site-nav";
import { Timeline } from "@/components/timeline";
import { cn } from "@/lib/utils";

function HeroVisual() {
  return (
    <div className="relative mx-auto max-w-[38rem]">
      <div className="absolute inset-0 rounded-[2.5rem] bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.18),transparent_38%),radial-gradient(circle_at_bottom_right,rgba(15,23,42,0.08),transparent_28%)] blur-2xl" />
      <div className="relative overflow-hidden rounded-[2.5rem] border border-border bg-[linear-gradient(145deg,rgba(255,255,255,0.86),rgba(239,244,255,0.74))] p-5 shadow-soft">
        <div className="grid gap-4">
          <div className="rounded-[2rem] border border-border bg-white/80 p-4">
            <p className="text-xs uppercase tracking-[0.24em] text-muted">Portrait</p>
            <div className="relative mt-4 aspect-[3/4] overflow-hidden rounded-[1.5rem] border border-border bg-[linear-gradient(180deg,rgba(255,255,255,0.9),rgba(220,230,255,0.7))]">
              <div
                className="absolute inset-0 bg-cover bg-no-repeat"
                style={{ backgroundImage: "url('/portrait-hero.png')", backgroundPosition: "center 10%" }}
                aria-label="Portrait of Prasanth M"
                role="img"
              />
            </div>
            <div className="mt-4 rounded-[1.5rem] border border-text/10 bg-text px-4 py-4 text-bg shadow-soft">
              <p className="text-lg font-semibold tracking-[-0.02em]">Prasanth M</p>
              <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.22em] text-bg/80">AI UX Designer · Product Designer · UX Engineer</p>
              <div className="mt-3 space-y-1 text-sm leading-6 text-bg">
                <a href={`mailto:${site.email}`} className="block text-bg/90 transition hover:text-bg">
                  {site.email}
                </a>
                <a href={`tel:${site.phone.replace(/[^\d+]/g, "")}`} className="block text-bg/90 transition hover:text-bg">
                  {site.phone}
                </a>
              </div>
            </div>
          </div>
          <div className="grid gap-3 md:grid-cols-3">
            {[
              ["Focus", "AI UX + Product Design"],
              ["Base", "Enterprise SaaS"],
              ["Home", "Chennai, India"]
            ].map(([label, value]) => (
              <div key={label} className="rounded-[1.25rem] border border-border bg-white/75 p-4">
                <p className="text-[11px] uppercase tracking-[0.24em] text-muted">{label}</p>
                <p className="mt-2 text-sm font-medium text-text">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <SectionShell id="home" className="border-t-0 pt-[4.5rem] pb-8 md:pt-[5.5rem] md:pb-12">
      <div className="mx-auto grid max-w-[1440px] items-start gap-10 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 xl:gap-16">
        <Reveal>
          <div className="space-y-6">
            <Tag>{site.experience} · {site.location} · FE Fundinfo</Tag>
            <p className="text-xs font-medium uppercase tracking-[0.32em] text-muted">AI UX DESIGNER / PRODUCT DESIGNER / UX ENGINEER</p>
            <h1 className="max-w-3xl text-[clamp(2.6rem,5.6vw,4.9rem)] font-semibold leading-[0.96] tracking-[-0.08em] text-text">
              <span className="text-accent">Designing intelligent</span> products with clarity.
            </h1>
            <p className="max-w-xl text-sm leading-7 text-muted md:text-base">AI UX Designer, Product Designer and UX Engineer focused on enterprise SaaS, AI experiences, and design systems.</p>
            <div className="flex flex-wrap items-center gap-4">
              <MagneticButton>
                <Button href="#work" variant="primary">
                  View Selected Work <ArrowRight size={16} />
                </Button>
              </MagneticButton>
              <MagneticButton>
                <Button href={site.resume} variant="secondary">
                  Download Resume <Download size={16} />
                </Button>
              </MagneticButton>
            </div>
            <div className="flex flex-wrap items-center gap-2 text-sm text-muted">
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-2 text-text">
                <span className="h-2 w-2 rounded-full bg-emerald-500" /> {site.currentRole}
              </span>
              <span className="rounded-full border border-border bg-surface px-3 py-2 text-text">Available for Product Design / AI UX opportunities</span>
            </div>
          </div>
        </Reveal>
        <HeroVisual />
      </div>
    </SectionShell>
  );
}

function IntroSection() {
  const overviewCards = [
    {
      title: "AI UX",
      body: "Agentic UI, prompts, and human control.",
      icon: Sparkles,
    },
    {
      title: "Product Design",
      body: "Enterprise SaaS, dashboards, and mobile flows.",
      icon: LayoutGrid,
    },
    {
      title: "UX Engineer",
      body: "Design systems, Storybook, Material UI.",
      icon: MonitorSmartphone,
    },
  ];

  return (
    <SectionShell id="overview" className="bg-[linear-gradient(180deg,rgba(255,255,255,0.12),rgba(255,255,255,0))]">
      <div className="mx-auto grid max-w-[1440px] gap-6 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
        <SectionHeading eyebrow="Overview" title="UX that makes complex systems feel lighter." />
        <div className="grid gap-4 md:grid-cols-3">
          {overviewCards.map(({ title, body, icon: Icon }) => (
            <div key={title} className="rounded-[1.5rem] border border-border bg-surface p-5">
              <div className="flex items-start justify-between gap-4">
                <div className="rounded-2xl border border-border bg-white p-3 text-accent shadow-soft">
                  <Icon size={20} strokeWidth={1.8} />
                </div>
                <span className="text-[11px] uppercase tracking-[0.22em] text-muted">{title}</span>
              </div>
              <div className="mt-5 h-px w-full bg-border/70" />
              <p className="mt-4 text-sm leading-6 text-muted">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}

function SelectedWorkSection() {
  return (
    <SectionShell id="work">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Selected Work"
            title="Selected Behance work."
            description="A tighter set of public projects with the strongest recruiter signal."
          />
          <Link href={site.behance} className="inline-flex items-center gap-2 text-sm font-medium text-accent transition hover:translate-x-1">
            More on Behance <ArrowUpRight size={16} />
          </Link>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {projects.slice(0, 6).map((project, index) => (
            <Reveal key={project.slug} delay={index * 0.05}>
              <ProjectCard project={project} featured={index < 2} />
            </Reveal>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}

function DesignSystemSection() {
  return (
    <SectionShell id="systems">
      <div className="mx-auto grid max-w-[1440px] gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <SectionHeading eyebrow="Design Systems" title="Systems, not screens." description="I enjoy designing systems that make good experiences repeatable." />
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-border bg-surface p-6">
            <p className="text-xs uppercase tracking-[0.24em] text-muted">Interactive component playground</p>
            <div className="mt-6 flex flex-wrap gap-3">
              {['Default', 'Hover', 'Focus', 'Disabled'].map((state, index) => (
                <button
                  key={state}
                  type="button"
                  className={cn(
                    'rounded-full border px-4 py-2 text-sm transition',
                    index === 0 && 'border-text bg-text text-bg',
                    index === 1 && 'border-border bg-white text-text hover:-translate-y-0.5 hover:shadow-soft',
                    index === 2 && 'border-accent bg-accentSoft text-accent ring-2 ring-accent/30',
                    index === 3 && 'cursor-not-allowed border-border bg-border/30 text-muted'
                  )}
                  disabled={index === 3}
                >
                  Button
                </button>
              ))}
            </div>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-muted">Typography scale</p>
                <div className="mt-4 space-y-2 text-text">
                  <p className="text-3xl font-semibold tracking-[-0.05em]">Display / 48</p>
                  <p className="text-xl font-medium tracking-[-0.03em]">Headline / 28</p>
                  <p className="text-base">Body / 16</p>
                </div>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-muted">Tokens</p>
                <div className="mt-4 grid grid-cols-3 gap-3">
                  {['8', '12', '16', '24', '32', '48'].map((token) => (
                    <div key={token} className="rounded-2xl border border-border bg-white p-3 text-center text-sm text-muted">{token}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-[2rem] border border-border bg-surface p-6">
            <p className="text-xs uppercase tracking-[0.24em] text-muted">Foundations</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {['Design Tokens', 'Component Libraries', 'Figma Variables', 'Storybook', 'Material UI', 'Atomic Design', 'Accessibility', 'Reusable Patterns'].map((item) => (
                <Tag key={item}>{item}</Tag>
              ))}
            </div>
            <div className="mt-8 grid gap-3 md:grid-cols-2">
              <div className="rounded-2xl border border-border bg-white/75 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-muted">Color tokens</p>
                <div className="mt-4 flex gap-2">
                  <span className="h-12 w-12 rounded-full bg-[#0f172a]" />
                  <span className="h-12 w-12 rounded-full bg-[#2563eb]" />
                  <span className="h-12 w-12 rounded-full bg-[#dbeafe]" />
                </div>
              </div>
              <div className="rounded-2xl border border-border bg-white/75 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-muted">Component system</p>
                <div className="mt-4 space-y-3 text-sm text-text">
                  <div className="flex items-center justify-between"><span>Button</span><span>States</span></div>
                  <div className="flex items-center justify-between"><span>Tag</span><span>Variants</span></div>
                  <div className="flex items-center justify-between"><span>Card</span><span>Responsive</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}

function AILabSection() {
  return (
    <SectionShell id="ai-lab">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="AI Lab" title="Exploring what happens when AI becomes part of the interface." description="Experimental concepts framed as interactive cards, workflow states and prototype-ready patterns." />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {aiConcepts.map((concept, index) => (
            <Reveal key={concept.title} delay={index * 0.05}>
              <div className="group rounded-[2rem] border border-border bg-surface p-6 transition hover:-translate-y-1 hover:shadow-soft">
                <p className="text-xs uppercase tracking-[0.24em] text-muted">{concept.title}</p>
                <p className="mt-4 text-lg leading-8 text-text">{concept.description}</p>
                <div className="mt-6 rounded-[1.5rem] border border-border bg-white/70 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-muted">Interaction preview</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {concept.preview.map((step, stepIndex) => (
                      <span key={step} className="inline-flex items-center gap-2 rounded-full border border-border bg-bg px-3 py-2 text-xs text-text">
                        {step}
                        {stepIndex < concept.preview.length - 1 ? <ArrowRight size={12} className="text-muted" /> : null}
                      </span>
                    ))}
                  </div>
                </div>
                <p className="mt-5 text-sm leading-6 text-muted">{concept.approach}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}

function ToolsSection() {
  const tools = ["Figma AI", "ChatGPT", "Claude", "Gemini", "Cursor AI", "v0", "Lovable", "Bolt.new"];
  return (
    <SectionShell id="tools">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="AI Tools" title="Tools that support faster exploration." />
        <div className="mt-10 overflow-hidden rounded-[2rem] border border-border bg-surface py-6">
          <div className="flex min-w-max animate-[marquee_28s_linear_infinite] gap-4 px-6">
            {[...tools, ...tools].map((tool, index) => (
              <Tag key={`${tool}-${index}`} className="text-[12px]">{tool}</Tag>
            ))}
          </div>
        </div>
      </div>
    </SectionShell>
  );
}

function ExperienceSection() {
  return (
    <SectionShell id="experience">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Experience" title="Experience" description="A compact timeline with the roles recruiters care about most." />
        <div className="mt-8">
          <Timeline items={experience} />
        </div>
      </div>
    </SectionShell>
  );
}

function SnapshotSection() {
  const snapshotCards = [
    {
      title: "How I think",
      body: "Understand, simplify, design, build, validate.",
      icon: Brain,
    },
    {
      title: "Primary strengths",
      items: ["AI UX", "Product Design", "Design Systems", "Enterprise SaaS", "Human-AI Interaction", "Accessibility"],
      icon: Sparkles,
    },
    {
      title: "Tools",
      items: ["Figma", "Storybook", "Material UI", "React", "TypeScript"],
      icon: Wrench,
    },
  ];

  return (
    <SectionShell id="about">
      <div className="mx-auto grid max-w-[1440px] gap-5 px-4 sm:px-6 lg:grid-cols-3 lg:px-8 lg:items-stretch">
        {snapshotCards.map(({ title, body, items, icon: Icon }) => (
          <div key={title} className="flex h-full min-h-[13.5rem] flex-col rounded-[2rem] border border-border bg-surface p-6">
            <div className="flex min-h-[3.25rem] items-center justify-between gap-4">
              <p className="max-w-[12ch] text-xs uppercase tracking-[0.24em] text-muted">{title}</p>
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl border border-border bg-white text-accent shadow-soft">
                <Icon size={18} strokeWidth={1.9} />
              </div>
            </div>
            {body ? (
              <p className="mt-4 text-base leading-7 text-text">{body}</p>
            ) : null}
            {items ? (
              <div className="mt-auto flex flex-wrap gap-2 pt-4">
                {items.map((item) => (
                  <Tag key={item}>{item}</Tag>
                ))}
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </SectionShell>
  );
}

function ContactSection() {
  return (
    <SectionShell id="contact">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <div className="rounded-[2.5rem] border border-border bg-text px-6 py-10 text-bg md:px-10 md:py-12">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-bg/70">Contact</p>
              <h2 className="mt-4 max-w-3xl text-[clamp(2.2rem,4vw,4rem)] font-semibold leading-[0.95] tracking-[-0.06em] text-bg">Have a complex product problem?</h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-bg/75 md:text-lg">Let&apos;s turn it into a clearer experience.</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <CopyEmail email={site.email} />
                  <Button href={site.linkedin} variant="secondary">LinkedIn</Button>
                  <Button href={site.behance} variant="ghost">Behance</Button>
              </div>
              <div className="mt-6 space-y-2 text-sm text-bg/70">
                <p><a href={`mailto:${site.email}`} className="underline underline-offset-4">{site.email}</a></p>
                <p>{site.phone}</p>
              </div>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <p className="text-sm uppercase tracking-[0.24em] text-bg/70">Quick links</p>
              <div className="mt-5 grid gap-3">
                <Button href={`mailto:${site.email}`} variant="primary">Email Me <Mail size={16} /></Button>
                  <Button href={site.linkedin} variant="secondary">LinkedIn <Linkedin size={16} /></Button>
                  <Button href={site.behance} variant="ghost">Behance <Sparkles size={16} /></Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-4 px-4 text-sm text-muted sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div>
          <p className="font-semibold tracking-[0.22em] text-text">PRASANTH M</p>
          <p className="mt-1">AI UX Designer · Product Designer · UX Engineer</p>
        </div>
        <div className="flex flex-wrap gap-4">
          <Link href={site.linkedin}>LinkedIn</Link>
          <Link href={site.behance}>Behance</Link>
          <Link href={`mailto:${site.email}`}>Email</Link>
        </div>
        <p>Chennai, India · © 2026 Prasanth M</p>
      </div>
    </footer>
  );
}

export default function HomePage() {
  return (
    <PageTransition>
      <main className="relative z-10 overflow-hidden pt-20 md:pt-24">
        <SiteNav />
        <Hero />
        <IntroSection />
        <SelectedWorkSection />
        <SnapshotSection />
        <ExperienceSection />
        <ContactSection />
        <Footer />
      </main>
    </PageTransition>
  );
}
