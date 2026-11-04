import type { Project } from "@/app/data/portfolio";

export const designLensProject: Project = {
  slug: "designlens-ux-audit-platform",
  title: "DesignLens",
  context: "Independent Product",
  description:
    "A universal UX audit and design quality platform. Point it at any public page and it measures seven dimensions of design quality, then turns the measurements into findings, scores and reports a team can act on.",
  role: "Product Designer | UX Engineer",
  year: "2026",
  tags: ["Product Design", "UX Engineering", "Accessibility", "Design Systems"],
  overview:
    "DesignLens is the product I designed and built to answer a question I kept hitting in practice: how do you evaluate a digital experience consistently, without a spreadsheet, a checklist in someone's head, or a tool that only half-measures?",
  image: "/designlens/dashboard.png",
  projectType: "flagship",
  featured: true,
  caseStudyUrl: "/work/designlens-ux-audit-platform",
  capabilities: [
    "UX Audit Automation",
    "Accessibility Evaluation",
    "WCAG Checks",
    "Usability Analysis",
    "Visual Design Assessment",
    "Responsive Design Evaluation",
    "Design Consistency",
    "Quality Scoring",
    "Audit Analytics",
    "Report Generation"
  ]
};

export const designLensFacts = [
  { label: "Audit dimensions", value: "7" },
  { label: "Automated checks per run", value: "50+" },
  { label: "Execution stages", value: "10" },
  { label: "Export formats", value: "PDF · HTML · JSON" }
];

export type CaseStudySection = {
  id: string;
  number: string;
  title: string;
  lede: string;
  body?: string[];
  bullets?: Array<{ title: string; text: string }>;
  image?: { src: string; alt: string; caption: string };
  artifact?: { title: string; rows: Array<{ label: string; value: string }> };
};

export const designLensSections: CaseStudySection[] = [
  {
    id: "overview",
    number: "01",
    title: "Project overview",
    lede: "DesignLens is an independent product: a UX audit and design quality platform that evaluates any public web interface across seven dimensions and produces a scored, evidence-backed report.",
    body: [
      "The product takes a URL, renders the page in a headless browser, measures the rendered result, and derives findings from those measurements. It covers accessibility, usability, visual design, responsive behaviour, content, performance and design consistency.",
      "I worked across the whole surface: product definition, information architecture, interaction and interface design, the scoring model, the design system, and the frontend and audit pipeline that make the output real rather than decorative."
    ],
    artifact: {
      title: "Product at a glance",
      rows: [
        { label: "Category", value: "Independent product / UX tooling" },
        { label: "My role", value: "Product Designer · UX Engineer" },
        { label: "Scope", value: "Concept → IA → UI → scoring model → build" },
        { label: "Stack", value: "React · TypeScript · Express · SQLite · Playwright" }
      ]
    }
  },
  {
    id: "problem",
    number: "02",
    title: "The problem",
    lede: "UX quality is usually argued about, not measured. Teams either trust a gut feeling in a review, or they inherit a checklist nobody has time to complete properly.",
    body: [
      "Accessibility is the clearest case: automated scanners find a slice of the problem and report it in developer language, while the parts that need judgement — hierarchy, clarity, consistency, whether the flow makes sense — are left to a document that goes stale the moment the next sprint ships.",
      "The result is predictable. Critical issues get rediscovered every quarter, findings have no evidence attached, and nobody can say whether the product is actually better than it was three months ago."
    ],
    bullets: [
      {
        title: "Checks without evidence",
        text: "A finding like \"contrast is low\" is not actionable until you know which element, at what ratio, on which surface."
      },
      {
        title: "Scores without method",
        text: "A single number out of 100 hides what was measured — and what was quietly skipped."
      },
      {
        title: "No comparable history",
        text: "Without a stable model, two audits of the same page cannot be compared honestly."
      }
    ]
  },
  {
    id: "opportunity",
    number: "03",
    title: "The opportunity",
    lede: "Most audit tooling is either a scanner or a document. The gap is a product that behaves like a design review: measured, explainable, and repeatable.",
    body: [
      "I had already built internal audit tooling for a single product family, and the limitation was structural: the hierarchy was fixed to one organisation's product, one design system, one set of sample data. The method was sound; the container was not.",
      "The opportunity was to separate the method from the product — to make the audit universal, the scoring transparent, and the output something a designer, an engineer and a stakeholder could all read without translation."
    ]
  },
  {
    id: "vision",
    number: "04",
    title: "Product vision",
    lede: "See beyond the interface. Improve every experience.",
    body: [
      "The vision was a platform where any team can create a project for any product, in any industry, and build a comparable audit history over time — with every score traceable to something that was actually measured.",
      "That produced three design principles that shaped every decision afterwards:",
      "Honesty over completeness. If a check could not run, the product says so and excludes it from the score rather than guessing. A category that could not be evaluated reads as not evaluated.",
      "Evidence before opinion. Every automated finding quotes the observed value that triggered it, so a skeptical engineer can re-verify it in a minute.",
      "Automation with boundaries. Anything needing human judgement — task success, screen-reader experience, visual craft — is surfaced as a manual prompt and never scored."
    ]
  },
  {
    id: "strategy",
    number: "05",
    title: "Research & UX strategy",
    lede: "This was built from domain experience and heuristic review, not from a formal research programme — and the case study says so rather than inventing interviews.",
    body: [
      "The inputs were the audit artefacts I had produced and consumed in practice: heuristic reviews, accessibility reports, design-QA tickets, and the recurring arguments about whether a design was \"better\". I mapped where those artefacts failed — missing evidence, unclear ownership, no trend — and treated each failure as a product requirement.",
      "I also pressure-tested the model against real pages while building: every check had to produce a believable result on a page I had not designed for. That constraint killed several ideas that sounded good in a document and produced noise in practice."
    ],
    bullets: [
      {
        title: "What I deliberately did not do",
        text: "No user interviews, no adoption metrics, no business-impact claims. The decisions below are documented against observable product behaviour instead."
      },
      {
        title: "Validation approach",
        text: "Every audit run against a live page was treated as a test: does this check find something real, and can the evidence be verified?"
      }
    ]
  },
  {
    id: "ia",
    number: "06",
    title: "Information architecture",
    lede: "A five-level model that works for any product: workspace → project → page → audit → finding.",
    body: [
      "The original tooling was organised around a fixed product hierarchy — modules and sub-pages belonging to one internal portal. That model could not survive contact with a different company, so I replaced it with a generic chain that holds for a bank dashboard and a personal portfolio alike.",
      "Audits are immutable records, not editable documents. Re-running creates a new audit, which is what makes comparison across time meaningful. Findings belong to an audit but carry their own status, so resolution progress is tracked independently of the score."
    ],
    artifact: {
      title: "Domain model",
      rows: [
        { label: "Workspace", value: "Isolation boundary; demo mode is a separate workspace" },
        { label: "Project", value: "One website or application, any industry, with its own brief" },
        { label: "Page", value: "An auditable entry point with a saved URL" },
        { label: "Audit", value: "An immutable run with scope, stages, scores and metrics" },
        { label: "Finding", value: "Evidence, severity, recommendation and status" }
      ]
    }
  },
  {
    id: "journey",
    number: "07",
    title: "User journey",
    lede: "The primary journey had to work for a first-time visitor and a returning auditor without splitting into two products.",
    body: [
      "A visitor arrives with a URL in mind. The demo workspace exists so they can see a finished audit before committing to creating one — eight sample projects with history, findings and reports, clearly labelled as sample data and read-only.",
      "A returning auditor arrives with a project and a question: did the last sprint help? The dashboard answers that in one screen — score trend, category averages, severity mix, recent activity — before they open a single audit."
    ],
    bullets: [
      { title: "Discover", text: "Land, open the demo, understand the shape of an audit within a minute." },
      { title: "Create", text: "Project → page → scope → configure → review → run, with the run itself visible." },
      { title: "Act", text: "Triage findings by severity, track status, export the report for stakeholders." },
      { title: "Verify", text: "Re-run later and read the delta against the previous audit." }
    ],
    image: {
      src: "/designlens/findings.png",
      alt: "DesignLens findings list showing severity totals, filters and finding cards with category and WCAG criteria",
      caption: "The triage step: every finding in the workspace, filterable by severity, status, category and project."
    }
  },
  {
    id: "workflow",
    number: "08",
    title: "Audit workflow",
    lede: "A seven-step wizard configures the run; ten stages execute it, and every stage shown corresponds to work actually performed.",
    body: [
      "The wizard covers project, target, scope, configuration, review, execution and results. The execution screen is the part I care most about: it reports stages as they complete — resolving the target, loading the page, capturing structure and styles, running the accessibility rule engine, measuring breakpoints, evaluating categories, generating findings, scoring, comparing, preparing the report.",
      "Stages that are out of scope are marked skipped rather than silently omitted, so the progress view never implies work that did not happen. A failed run shows the real error instead of a generic message."
    ],
    image: {
      src: "/designlens/audit-overview.png",
      alt: "DesignLens audit result screen showing an overall score, category bars and the audit brief",
      caption: "Audit result: overall score, category breakdown and the brief the run was evaluated against."
    }
  },
  {
    id: "dashboard",
    number: "09",
    title: "Dashboard & analytics",
    lede: "The dashboard answers one question — is design quality improving? — and everything on it is computed from stored audits.",
    body: [
      "Score trend, category averages, severity distribution, open and resolved counts, and recent activity all derive from the same records. Nothing on the dashboard is hard-coded, which was a deliberate constraint: a dashboard that can drift from the data is worse than no dashboard.",
      "The category bars use a consistent threshold model (strong / fair / weak) so colour carries meaning rather than decoration, and categories that were not evaluated render as not evaluated instead of an ambiguous zero."
    ],
    image: {
      src: "/designlens/dashboard.png",
      alt: "DesignLens dashboard with project count, average score, score trend and severity distribution",
      caption: "Workspace dashboard. The data shown is the read-only demo workspace shipped with the product."
    }
  },
  {
    id: "findings",
    number: "10",
    title: "Audit findings & recommendations",
    lede: "A finding has to survive the question \"where did you see that?\" — so evidence is a first-class field, not a footnote.",
    body: [
      "Each finding carries a title, description, category, severity, affected page, the observed value, why it matters, a recommendation, a suggested implementation, and a status (open, in review, resolved, won't fix). Automated findings are labelled as automated; the interface never presents a judgement call as a measurement.",
      "The finding card expands into evidence and implementation, because the two audiences read differently: a designer wants the principle and the impact, an engineer wants the selector and the fix. Both are in the same object."
    ],
    image: {
      src: "/designlens/checks.png",
      alt: "DesignLens check register showing each automated check with its observed value, expected value and result",
      caption: "The check register behind the score: every automated check with its observed value and result."
    }
  },
  {
    id: "accessibility",
    number: "11",
    title: "Accessibility & design quality",
    lede: "Accessibility is weighted highest in the model because its failures exclude people outright — but the product is explicit about what automation can and cannot see.",
    body: [
      "The engine runs axe-core against WCAG 2.0, 2.1 and 2.2 A–AA plus best-practice rules, then adds structural checks automation can verify: document language, page title, image alternative text coverage, control labelling, heading order, landmarks, skip links, duplicate ids and positive tabindex.",
      "Above that sit measurement checks no scanner reports: focus visibility measured by actually moving focus, typographic scale and leading, palette breadth, touch-target sizing at mobile width, horizontal overflow at three breakpoints, and design-token drift in radius, shadow and spacing.",
      "The boundary is stated in the product itself: screen-reader traversal, 200% zoom reflow, reduced motion and task-completion testing are listed as manual prompts that never contribute to the score."
    ],
    image: {
      src: "/designlens/evidence.png",
      alt: "DesignLens evidence tab showing performance timings, axe-core rules and score breakdown",
      caption: "Evidence view: navigation timings, axe-core rules with affected node counts, and the category breakdown."
    }
  },
  {
    id: "design-system",
    number: "12",
    title: "Design system & components",
    lede: "The product had to look like an instrument, not a marketing page: quiet surfaces, one accent, and a token layer that keeps the interface consistent as it grows.",
    body: [
      "I built a token system for colour, typography, spacing, radius, elevation and component states, with light and dark treated as two designed modes rather than an inversion. Semantic tokens carry meaning — score-strong, score-fair, score-weak, and per-severity colours — so a component never hard-codes a hex value.",
      "The interface is assembled from a small set of primitives (button, card, badge, select, dialog, table, tabs) plus product components: score ring, category bars, severity bar, finding card, stage timeline. Reuse is why the dashboard, audit detail and report feel like one product rather than three screens."
    ],
    bullets: [
      { title: "Token-first", text: "Colour, radius and spacing resolve through variables; no one-off values in components." },
      { title: "Semantic over decorative", text: "Score and severity colours are defined once and reused across every surface, including exports." },
      { title: "Accessible by construction", text: "Focus-visible rings, 44px targets and contrast-checked pairs are defaults, not fixes applied later." }
    ]
  },
  {
    id: "technical",
    number: "13",
    title: "Technical collaboration",
    lede: "Design decisions were only kept if the implementation could be honest about them.",
    body: [
      "The audit pipeline renders the page with Playwright, injects axe-core, measures computed styles and layout geometry, and repeats the measurement at mobile and tablet widths. Scoring is a separate, pure layer over those measurements, which is what makes the model testable.",
      "That separation changed design decisions. Because scores are a weighted pass rate over the checks that ran, the UI has to show which checks ran — so the check register became a first-class screen rather than a debug view. Because not-applicable checks leave the denominator, the interface needs a truthful \"not evaluated\" state, which became a visible part of the score components.",
      "The design also had to hold up in exports: the PDF and HTML reports are generated from the same stored report model as the in-app view, so what a stakeholder prints matches what the team reviewed."
    ],
    artifact: {
      title: "Scoring model, as shipped",
      rows: [
        { label: "Category score", value: "100 × Σ(weight × status) ÷ Σ(weight) · pass 1, warning 0.5, fail 0" },
        { label: "Overall score", value: "Weight-normalised mean over evaluated categories only" },
        { label: "Weights", value: "A11y 24 · Usability 20 · Visual 16 · Responsive 12 · Content 12 · Perf 9 · Consistency 7" },
        { label: "Not evaluated", value: "Excluded from the denominator; shown as a state, never as zero" }
      ]
    }
  },
  {
    id: "challenges",
    number: "14",
    title: "Challenges & decisions",
    lede: "Three decisions shaped the product more than any visual choice.",
    bullets: [
      {
        title: "Making the audit universal",
        text: "The first version inherited a fixed product hierarchy from internal tooling. Replacing it with workspace → project → page → audit meant rewriting the data model — and made the product usable outside one organisation. This was the decision that turned a tool into a product."
      },
      {
        title: "Refusing to guess",
        text: "It is tempting to fill an unmeasurable category with a neutral 50 so the UI looks complete. I chose the harder interface: show not evaluated, explain why, and keep the score honest. It produces fewer green numbers and far more trust."
      },
      {
        title: "Separating automation from judgement",
        text: "Early drafts mixed automated and manual findings in one list, which implied equal confidence. Labelling detection method and excluding manual items from scoring cost some visual simplicity and made the report defensible."
      },
      {
        title: "Sample data that admits it is sample data",
        text: "The demo workspace needed enough data to feel real. Rather than silently seeding fabricated results, the demo is a separate read-only workspace, every sample audit is labelled, and the UI states that the numbers are authored examples rather than live captures."
      }
    ]
  },
  {
    id: "outcome",
    number: "15",
    title: "Outcome & learnings",
    lede: "A working product, a defensible method, and a clearer idea of what design tooling owes its users.",
    body: [
      "DesignLens runs complete audits end to end: it loads a public page, measures it, produces scored categories with a check register, generates findings with evidence, compares against the previous run, and exports PDF, HTML and JSON from the same dataset. The demo workspace carries eight projects and eighteen audits of history so the analytics have something real to display.",
      "The honest limitation is scope, not ambition: it audits publicly reachable pages, so authenticated flows are out of scope, and no automated tool can judge whether a flow is understandable to a first-time user. The product says both of those things where a user will read them.",
      "What I would take into the next product: interface honesty is a design material. Deciding what the product refuses to claim — a guessed score, an unmeasured pass, a fabricated metric — shaped the information architecture, the copy and the components more than any style choice did."
    ],
    image: {
      src: "/designlens/report.png",
      alt: "DesignLens audit report showing the executive summary, overall score and category scores with weights and finding counts",
      caption: "The generated report: executive summary, weighted category scores, and PDF, HTML and JSON export from one dataset."
    },
    artifact: {
      title: "Capabilities shipped",
      rows: [
        { label: "Audit engine", value: "Live rendering, axe-core rules, breakpoint passes, evidence capture" },
        { label: "Scoring", value: "Seven weighted categories with a per-check register" },
        { label: "Findings", value: "Severity, status, evidence, recommendation, implementation" },
        { label: "Reporting", value: "In-app report plus PDF, HTML and JSON exports" },
        { label: "Analytics", value: "Score trend, category averages, severity distribution, activity" },
        { label: "Modes", value: "Authenticated workspace and a read-only demo workspace" }
      ]
    }
  }
];
