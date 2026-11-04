import { designLensProject } from "./designlens";

export type ProjectType = "behance" | "portfolio-case-study" | "external-product" | "flagship";

export type Project = {
  slug: string;
  title: string;
  context: string;
  description: string;
  role: string;
  year: string;
  tags: string[];
  overview: string;
  image: string;
  /** How the card should behave: internal case study, external product, or flagship feature. */
  projectType: ProjectType;
  /** Present for Behance-sourced projects. */
  behanceUrl?: string;
  /** Internal case-study route, when one exists. */
  caseStudyUrl?: string;
  /** Marks the single flagship project surfaced above the work grid. */
  featured?: boolean;
  /** Capability chips shown on the flagship section. */
  capabilities?: string[];
};

export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  location: string;
  bullets: string[];
};

export type CaseStudyStep = {
  title: string;
  body: string;
};

export type CaseStudy = {
  slug: string;
  title: string;
  context: string;
  role: string;
  year: string;
  description: string;
  steps: CaseStudyStep[];
};

export type AIConcept = {
  title: string;
  description: string;
  approach: string;
  preview: string[];
};

export const site = {
  name: "Prasanth M",
  title: "AI UX Designer | Product Designer | UX Engineer",
  experience: "3.6+ years",
  location: "Chennai, India",
  email: "premprasanth683@gmail.com",
  phone: "+91 7338936273",
  resume: "https://drive.google.com/file/d/1C0jT9-b7YFaKO64xqp_gjgWS9H9T4ULr/view?usp=drive_link",
  currentRole: "Currently designing at FE Fundinfo",
  supportingStatement:
    "AI UX Designer, Product Designer and UX Engineer focused on enterprise SaaS, AI-powered experiences, Agentic UI and scalable design systems.",
  secondStatement:
    "I design human-centered experiences where product thinking, AI and interaction design come together.",
  heroHeadline: "Designing intelligent products that turn complexity into clarity.",
  introStatement: "I work at the intersection of UX, product strategy, AI and engineering.",
  introBody:
    "I transform complex business requirements into intuitive digital experiences, combining human-centered design with AI-assisted workflows, design systems and modern frontend technologies.",
  philosophyTitle: "Good UX hides complexity without hiding capability.",
  philosophyBody:
    "I believe the best interfaces make complex systems feel understandable, predictable and human.",
  linkedin: "https://www.linkedin.com/in/replace-with-resume-url",
  behance: "https://www.behance.net/prasanthm11"
};

export const projects: Project[] = [
  {
    slug: "kiosk-uiux-case-study",
    title: "kiosk UI/UX case study",
    context: "Behance project",
    description: "Public Behance case study for kiosk UI/UX design.",
    role: "UI/UX Designer",
    year: "Behance",
    tags: ["UI/UX", "Case Study", "Behance"],
    overview: "A public kiosk design case study shared on Behance.",
    projectType: "behance",
    behanceUrl: "https://www.behance.net/gallery/253871927/kiosk-UIUX-case-study",
    image: "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/9cf912253871927.Y3JvcCwyNTY1LDIwMDYsMjI4LDEyMA.jpg"
  },
  {
    slug: "social-media-poster",
    title: "Social Media Poster",
    context: "Behance project",
    description: "Public Behance social media poster design.",
    role: "Graphic Designer",
    year: "Behance",
    tags: ["Poster Design", "Social Media", "Behance"],
    overview: "A visual design piece shared on Behance.",
    projectType: "behance",
    behanceUrl: "https://www.behance.net/gallery/240165613/Social-Media-Poster",
    image: "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/037a3e240165613.Y3JvcCwxMDczLDg0MCwzNDUsMA.jpg"
  },
  {
    slug: "youtube-thumbnail-design",
    title: "Youtube Thumbnail Design",
    context: "Behance project",
    description: "Public Behance YouTube thumbnail design.",
    role: "Graphic Designer",
    year: "Behance",
    tags: ["Thumbnail Design", "YouTube", "Behance"],
    overview: "A thumbnail design piece shared on Behance.",
    projectType: "behance",
    behanceUrl: "https://www.behance.net/gallery/240165389/Youtube-Thumbnail-Design",
    image: "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/5928d3240165389.Y3JvcCw5MjAsNzIwLDAsMA.jpg"
  },
  {
    slug: "personal-expense-dashboard-ui",
    title: "Personal Expense Dashboard UI",
    context: "Behance project",
    description: "Public Behance dashboard UI concept for personal expenses.",
    role: "UI/UX Designer",
    year: "Behance",
    tags: ["Dashboard UI", "Finance", "Behance"],
    overview: "A personal finance dashboard concept shared on Behance.",
    projectType: "behance",
    behanceUrl: "https://www.behance.net/gallery/218615621/Personal-Expense-Dashboard-UI",
    image: "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/97af87218615621.Y3JvcCwxMzAwLDEwMTYsMTYwLDEyMg.jpg"
  },
  {
    slug: "email-marketing-uiux-case-study",
    title: "Email Marketing UI UX Case Study",
    context: "Behance project",
    description: "Public Behance email marketing UI/UX case study.",
    role: "UI/UX Designer",
    year: "Behance",
    tags: ["Email Design", "UI/UX", "Behance"],
    overview: "A marketing experience shared as a public Behance case study.",
    projectType: "behance",
    behanceUrl: "https://www.behance.net/gallery/218522845/Email-Marketing-UI-UX-Case-Study",
    image: "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/4a49be218522845.Y3JvcCwxMTkyLDkzMiw2Nyww.jpg"
  },
  {
    slug: "leave-management-application-uxui-case-study",
    title: "Leave Management Application - UX UI Case Study",
    context: "Behance project",
    description: "Public Behance leave management application UX/UI case study.",
    role: "UI/UX Designer",
    year: "Behance",
    tags: ["Web App", "UX/UI", "Behance"],
    overview: "A leave management application case study shared on Behance.",
    projectType: "behance",
    behanceUrl: "https://www.behance.net/gallery/215392085/Leave-Management-Application-UX-UI-Case-Study",
    image: "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/9aff45215392085.Y3JvcCwxMTkyLDkzMywxMDMsMA.png"
  },
  {
    slug: "diabetes-tracker-uiux-case-study",
    title: "Diabetes Tracker UI UX Case Study",
    context: "Behance project",
    description: "Public Behance diabetes tracker UI/UX case study.",
    role: "UI/UX Designer",
    year: "Behance",
    tags: ["Health Tech", "Mobile UX", "Behance"],
    overview: "A health tracking case study shared on Behance.",
    projectType: "behance",
    behanceUrl: "https://www.behance.net/gallery/215391507/Diabetes-Tracker-UI-UX-Case-Study",
    image: "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/9c5871215391507.Y3JvcCwxNjY5LDEzMDUsNjEsMA.jpg"
  },
  {
    slug: "royal-furniture-uiux-design-casestudy",
    title: "Royal Furniture UI UX Design Casestudy",
    context: "Behance project",
    description: "Public Behance furniture UI/UX design case study.",
    role: "UI/UX Designer",
    year: "Behance",
    tags: ["Furniture", "UI/UX", "Behance"],
    overview: "A furniture design case study shared on Behance.",
    projectType: "behance",
    behanceUrl: "https://www.behance.net/gallery/215391151/Royal-Furniture-UI-UX-Design-Casestudy",
    image: "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/0123b4215391151.Y3JvcCwxMDIyLDgwMCw4OCww.png"
  },
  {
    slug: "blinkit-redesign-case-study",
    title: "Blinkit Redesign Case Study",
    context: "Behance project",
    description: "Public Behance Blinkit redesign case study.",
    role: "UI/UX Designer",
    year: "Behance",
    tags: ["Redesign", "Mobile UX", "Behance"],
    overview: "A redesign case study shared on Behance.",
    projectType: "behance",
    behanceUrl: "https://www.behance.net/gallery/211033615/Blinkit-Redesign-Case-Study",
    image: "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/4dc9eb211033615.Y3JvcCwxNjYzLDEzMDAsMCww.jpg"
  },
  {
    slug: "lifestyle-mobile-app-uiux-case-study",
    title: "Lifestyle Mobile App UI UX Case Study",
    context: "Behance project",
    description: "Public Behance lifestyle mobile app UI/UX case study.",
    role: "UI/UX Designer",
    year: "Behance",
    tags: ["Lifestyle", "Mobile UX", "Behance"],
    overview: "A mobile lifestyle concept shared on Behance.",
    projectType: "behance",
    behanceUrl: "https://www.behance.net/gallery/211033127/Lifestyle-Mobile-App-UI-UX-Case-Study",
    image: "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/25a7b2211033127.Y3JvcCwyNjE4LDIwNDgsOTAsMA.png"
  },
  {
    slug: "attactive-mobile-app-uiux-design",
    title: "Attactive Mobile App UI UX Design",
    context: "Behance project",
    description: "Public Behance mobile app UI/UX design project.",
    role: "UI/UX Designer",
    year: "Behance",
    tags: ["Mobile UX", "UI Design", "Behance"],
    overview: "A mobile app design shared on Behance.",
    projectType: "behance",
    behanceUrl: "https://www.behance.net/gallery/200940907/Attactive-Mobile-App-UI-UX-Design",
    image: "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/2862fb200940907.Y3JvcCw1MzE3LDQxNTksNDQ3LDA.jpg"
  },
  {
    slug: "dashboard-app-uiux-design",
    title: "Dashboard App UI UX Design",
    context: "Behance project",
    description: "Public Behance dashboard app UI/UX design project.",
    role: "UI/UX Designer",
    year: "Behance",
    tags: ["Dashboard", "UI/UX", "Behance"],
    overview: "A dashboard app design shared on Behance.",
    projectType: "behance",
    behanceUrl: "https://www.behance.net/gallery/199943323/Dashboard-App-UI-UX-Design",
    image: "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/b6d3e6199943323.Y3JvcCw4NDksNjY0LDI1NCwyMQ.png"
  }
];

export const caseStudies: CaseStudy[] = [
  {
    slug: "kiosk-uiux-case-study",
    title: "kiosk UI/UX case study",
    context: "Behance project",
    role: "UI/UX Designer",
    year: "Behance",
    description: "Public Behance case study for kiosk UI/UX design.",
    steps: [
      { title: "01 — Overview", body: "Public Behance case study for kiosk UI/UX design." },
      { title: "02 — Problem", body: "Project details were not provided publicly beyond the title, so the page uses a safe summary only." },
      { title: "03 — Context", body: "Behance portfolio project." },
      { title: "04 — My Role", body: "UI/UX Designer." },
      { title: "05 — UX Challenge", body: "Keep the route informative without inventing unsupported details." },
      { title: "06 — Process", body: "Placeholder structure for future project notes and screenshots." },
      { title: "07 — Design Exploration", body: "Replace with Figma screenshot." },
      { title: "08 — Solution", body: "Project summary card that points to the public Behance work." },
      { title: "09 — Impact", body: "No additional public claims were added." },
      { title: "10 — Learnings", body: "Use the Behance project page as the source of truth for the final visual story." }
    ]
  },
  {
    slug: "personal-expense-dashboard-ui",
    title: "Personal Expense Dashboard UI",
    context: "Behance project",
    role: "UI/UX Designer",
    year: "Behance",
    description: "Public Behance dashboard UI concept for personal expenses.",
    steps: [
      { title: "01 — Overview", body: "Public Behance project for a personal expense dashboard UI." },
      { title: "02 — Problem", body: "No additional public context was used beyond the project title." },
      { title: "03 — Context", body: "Behance portfolio project." },
      { title: "04 — My Role", body: "UI/UX Designer." },
      { title: "05 — UX Challenge", body: "Use the project page for final visuals and notes." },
      { title: "06 — Process", body: "Placeholder structure for future screenshots and annotations." },
      { title: "07 — Design Exploration", body: "Replace with Figma screenshot." },
      { title: "08 — Solution", body: "Public project summary only." },
      { title: "09 — Impact", body: "No unsupported metrics added." },
      { title: "10 — Learnings", body: "Dashboard work is best understood through the Behance visual story." }
    ]
  },
  {
    slug: "email-marketing-uiux-case-study",
    title: "Email Marketing UI UX Case Study",
    context: "Behance project",
    role: "UI/UX Designer",
    year: "Behance",
    description: "Public Behance email marketing UI/UX case study.",
    steps: [
      { title: "01 — Overview", body: "Public Behance case study for email marketing UI/UX." },
      { title: "02 — Problem", body: "No additional public details were added." },
      { title: "03 — Context", body: "Behance portfolio project." },
      { title: "04 — My Role", body: "UI/UX Designer." },
      { title: "05 — UX Challenge", body: "Keep the story accurate and lightweight." },
      { title: "06 — Process", body: "Placeholder route for future screenshots and notes." },
      { title: "07 — Design Exploration", body: "Replace with Figma screenshot." },
      { title: "08 — Solution", body: "Project summary linked back to Behance." },
      { title: "09 — Impact", body: "No unsupported claims added." },
      { title: "10 — Learnings", body: "Treat the Behance project as the source of truth." }
    ]
  },
  {
    slug: "leave-management-application-uxui-case-study",
    title: "Leave Management Application - UX UI Case Study",
    context: "Behance project",
    role: "UI/UX Designer",
    year: "Behance",
    description: "Public Behance leave management application UX/UI case study.",
    steps: [
      { title: "01 — Overview", body: "Public Behance case study for a leave management application." },
      { title: "02 — Problem", body: "No additional public details were added." },
      { title: "03 — Context", body: "Behance portfolio project." },
      { title: "04 — My Role", body: "UI/UX Designer." },
      { title: "05 — UX Challenge", body: "Keep it concise and accurate." },
      { title: "06 — Process", body: "Placeholder structure for future design notes and screens." },
      { title: "07 — Design Exploration", body: "Replace with Figma screenshot." },
      { title: "08 — Solution", body: "Public project summary only." },
      { title: "09 — Impact", body: "No unsupported metrics added." },
      { title: "10 — Learnings", body: "Use the live Behance project for the detailed story." }
    ]
  },
  {
    slug: "diabetes-tracker-uiux-case-study",
    title: "Diabetes Tracker UI UX Case Study",
    context: "Behance project",
    role: "UI/UX Designer",
    year: "Behance",
    description: "Public Behance diabetes tracker UI/UX case study.",
    steps: [
      { title: "01 — Overview", body: "Public Behance case study for a diabetes tracker UI/UX design." },
      { title: "02 — Problem", body: "No additional public details were added." },
      { title: "03 — Context", body: "Behance portfolio project." },
      { title: "04 — My Role", body: "UI/UX Designer." },
      { title: "05 — UX Challenge", body: "Keep the route informative and honest." },
      { title: "06 — Process", body: "Placeholder structure for future screenshots and notes." },
      { title: "07 — Design Exploration", body: "Replace with Figma screenshot." },
      { title: "08 — Solution", body: "Project summary linked back to Behance." },
      { title: "09 — Impact", body: "No unsupported claims added." },
      { title: "10 — Learnings", body: "Health-tracking work should be presented with the full project context." }
    ]
  },
  {
    slug: "royal-furniture-uiux-design-casestudy",
    title: "Royal Furniture UI UX Design Casestudy",
    context: "Behance project",
    role: "UI/UX Designer",
    year: "Behance",
    description: "Public Behance furniture UI/UX design case study.",
    steps: [
      { title: "01 — Overview", body: "Public Behance case study for a furniture UI/UX design." },
      { title: "02 — Problem", body: "No additional public details were added." },
      { title: "03 — Context", body: "Behance portfolio project." },
      { title: "04 — My Role", body: "UI/UX Designer." },
      { title: "05 — UX Challenge", body: "Keep the route concise and accurate." },
      { title: "06 — Process", body: "Placeholder structure for future screenshots and notes." },
      { title: "07 — Design Exploration", body: "Replace with Figma screenshot." },
      { title: "08 — Solution", body: "Project summary linked back to Behance." },
      { title: "09 — Impact", body: "No unsupported metrics added." },
      { title: "10 — Learnings", body: "Furniture design work should show the full visual flow in the live case study." }
    ]
  },
  {
    slug: "blinkit-redesign-case-study",
    title: "Blinkit Redesign Case Study",
    context: "Behance project",
    role: "UI/UX Designer",
    year: "Behance",
    description: "Public Behance Blinkit redesign case study.",
    steps: [
      { title: "01 — Overview", body: "Public Behance redesign case study for Blinkit." },
      { title: "02 — Problem", body: "No additional public details were added." },
      { title: "03 — Context", body: "Behance portfolio project." },
      { title: "04 — My Role", body: "UI/UX Designer." },
      { title: "05 — UX Challenge", body: "Keep the summary linked to the project title only." },
      { title: "06 — Process", body: "Placeholder structure for future screens and notes." },
      { title: "07 — Design Exploration", body: "Replace with Figma screenshot." },
      { title: "08 — Solution", body: "Public project summary only." },
      { title: "09 — Impact", body: "No unsupported claims added." },
      { title: "10 — Learnings", body: "Use the Behance page for the complete redesign story." }
    ]
  },
  {
    slug: "lifestyle-mobile-app-uiux-case-study",
    title: "Lifestyle Mobile App UI UX Case Study",
    context: "Behance project",
    role: "UI/UX Designer",
    year: "Behance",
    description: "Public Behance lifestyle mobile app UI/UX case study.",
    steps: [
      { title: "01 — Overview", body: "Public Behance case study for a lifestyle mobile app." },
      { title: "02 — Problem", body: "No additional public details were added." },
      { title: "03 — Context", body: "Behance portfolio project." },
      { title: "04 — My Role", body: "UI/UX Designer." },
      { title: "05 — UX Challenge", body: "Keep the story accurate and lightweight." },
      { title: "06 — Process", body: "Placeholder structure for future screenshots and notes." },
      { title: "07 — Design Exploration", body: "Replace with Figma screenshot." },
      { title: "08 — Solution", body: "Public project summary only." },
      { title: "09 — Impact", body: "No unsupported claims added." },
      { title: "10 — Learnings", body: "The live Behance project should carry the detailed visual narrative." }
    ]
  },
  {
    slug: "attactive-mobile-app-uiux-design",
    title: "Attactive Mobile App UI UX Design",
    context: "Behance project",
    role: "UI/UX Designer",
    year: "Behance",
    description: "Public Behance mobile app UI/UX design project.",
    steps: [
      { title: "01 — Overview", body: "Public Behance project for a mobile app UI/UX design." },
      { title: "02 — Problem", body: "No additional public details were added." },
      { title: "03 — Context", body: "Behance portfolio project." },
      { title: "04 — My Role", body: "UI/UX Designer." },
      { title: "05 — UX Challenge", body: "Avoid inventing unsupported project details." },
      { title: "06 — Process", body: "Placeholder structure for future screenshots and notes." },
      { title: "07 — Design Exploration", body: "Replace with Figma screenshot." },
      { title: "08 — Solution", body: "Public project summary only." },
      { title: "09 — Impact", body: "No unsupported claims added." },
      { title: "10 — Learnings", body: "Use the Behance page as the source of truth for the full story." }
    ]
  },
  {
    slug: "dashboard-app-uiux-design",
    title: "Dashboard App UI UX Design",
    context: "Behance project",
    role: "UI/UX Designer",
    year: "Behance",
    description: "Public Behance dashboard app UI/UX design project.",
    steps: [
      { title: "01 — Overview", body: "Public Behance dashboard app UI/UX design." },
      { title: "02 — Problem", body: "No additional public details were added." },
      { title: "03 — Context", body: "Behance portfolio project." },
      { title: "04 — My Role", body: "UI/UX Designer." },
      { title: "05 — UX Challenge", body: "Keep the case study rooted to the public project." },
      { title: "06 — Process", body: "Placeholder structure for future screenshots and notes." },
      { title: "07 — Design Exploration", body: "Replace with Figma screenshot." },
      { title: "08 — Solution", body: "Public project summary only." },
      { title: "09 — Impact", body: "No unsupported claims added." },
      { title: "10 — Learnings", body: "The Behance project page should carry the detailed dashboard narrative." }
    ]
  }
];

export const experience: ExperienceItem[] = [
  {
    company: "FE Fundinfo",
    role: "UX Engineer",
    period: "March 2025 — Present",
    location: "Chennai, India",
    bullets: [
      "Designed Agentic UI workflows for enterprise applications.",
      "Leveraged Figma AI and Generative AI tools for ideation, wireframing and design exploration.",
      "Built scalable Design System components using Figma, Storybook and Material UI.",
      "Collaborated with product managers and engineers on AI-assisted enterprise workflows.",
      "Improved enterprise UX through intelligent interaction patterns and reusable design components."
    ]
  },
  {
    company: "Nibav Lifts Pvt Ltd",
    role: "UX UI Designer",
    period: "June 2024 — February 2025",
    location: "Chennai, India",
    bullets: [
      "Reduced manual paperwork by 70%.",
      "Designed Sales, SOS, COP and Lift Control Mobile App experiences.",
      "Improved operational efficiency by 50%.",
      "Reduced dashboard data retrieval time by 35%.",
      "Increased mobile app adoption by 45%.",
      "Improved workflow efficiency by 40%.",
      "Reduced internal application error rates by 30%."
    ]
  },
  {
    company: "Xenovex Technologies Pvt Ltd",
    role: "UX UI Designer",
    period: "April 2023 — June 2024",
    location: "Chennai, India",
    bullets: [
      "Redesigned government, international and domestic projects.",
      "Improved KCBT Bus Terminus Mobile App usability by 40%.",
      "Improved ISP website conversion by 25%.",
      "Increased ACT Fibernet Mobile App retention by 30%.",
      "Reduced design-to-development handoff time by 50%."
    ]
  },
  {
    company: "Besant Technologies",
    role: "Part-Time UI/UX Trainer",
    period: "April 2024 — August 2024",
    location: "Chennai, India",
    bullets: [
      "Trained 200+ students.",
      "Helped students create 100+ real-world projects.",
      "Developed interactive learning materials.",
      "Integrated React.js, HTML, CSS and JavaScript into curriculum."
    ]
  }
];

export const aiConcepts: AIConcept[] = [
  {
    title: "Agentic Design System",
    description: "A system where product components and AI behaviors work from shared foundations.",
    approach: "Token-driven interface patterns with state-aware actions.",
    preview: ["Tokens", "States", "Actions", "Responses"]
  },
  {
    title: "AI Workflow Builder",
    description: "Visualizing how intent becomes action through an AI-assisted process.",
    approach: "Workflow cards with a clear sequence and animated state flow.",
    preview: ["User Intent", "AI Agent", "Context", "Action", "Result"]
  },
  {
    title: "AI Dashboard Experience",
    description: "A more legible dashboard where AI surfaces guidance, not noise.",
    approach: "Contextual insights, summary layers and progressive disclosure.",
    preview: ["Signal", "Summary", "Recommendation"]
  },
  {
    title: "AI Financial Assistant Concepts",
    description: "Interface concepts for assisting complex financial decisions.",
    approach: "Conversation, comparison and explainability patterns.",
    preview: ["Ask", "Compare", "Explain", "Act"]
  },
  {
    title: "Prompt-Driven UI Prototypes",
    description: "Early interface directions explored with AI-assisted prompting.",
    approach: "Low-friction iteration loops with editable prompt states.",
    preview: ["Prompt", "Variant", "Review", "Refine"]
  }
];

export const skills = {
  ux: [
    "AI UX Design",
    "AI Product Design",
    "Agentic UI",
    "Human-AI Interaction",
    "Enterprise SaaS",
    "UX Strategy",
    "Information Architecture",
    "User Research",
    "Wireframing",
    "Prototyping",
    "Accessibility / WCAG",
    "Product Thinking"
  ],
  systems: ["Design Systems", "Design Tokens", "Component Libraries", "Storybook", "Atomic Design", "Material UI", "Figma Variables"],
  ai: [
    "Agentic UI Design",
    "AI Product Design",
    "Conversational UX",
    "Prompt Engineering for Design",
    "AI-assisted Prototyping",
    "Generative AI Integration"
  ],
  programming: ["HTML", "CSS", "JavaScript", "TypeScript", "React"]
};

export const education = [
  {
    degree: "UI/UX Design",
    institution: "Image Creative Institution",
    period: "December 2022 — March 2023",
    result: "First Class"
  },
  {
    degree: "BCA — Computer Application",
    institution: "St. Joseph's Arts & Science College",
    period: "2019 — 2022",
    result: "72% — First Class"
  }
];

/** The flagship product, surfaced above the regular work grid. */
export const flagshipProjects: Project[] = [designLensProject];

/** Every project including the flagship, used for sitemap and metadata. */
export const allProjects: Project[] = [designLensProject, ...projects];

export function getProjectBySlug(slug: string): Project | undefined {
  return allProjects.find((project) => project.slug === slug);
}
