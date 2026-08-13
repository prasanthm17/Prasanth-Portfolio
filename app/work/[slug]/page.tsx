import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { caseStudies, projects } from "@/app/data/portfolio";
import { Button } from "@/components/ui/button";
import { CaseStudyShell } from "@/components/case-study-shell";

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export default function WorkCaseStudyPage({ params }: { params: { slug: string } }) {
  const caseStudy = caseStudies.find((item) => item.slug === params.slug);
  const project = projects.find((item) => item.slug === params.slug);

  if (!caseStudy || !project) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-[1440px] px-4 py-6 sm:px-6 lg:px-8 lg:py-10">
      <div className="mb-10 flex items-center justify-between gap-4">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted transition hover:text-text">
          <ArrowLeft size={16} /> Back to home
        </Link>
        <Button href="/" variant="secondary">View more work</Button>
      </div>
      <CaseStudyShell caseStudy={caseStudy} behanceUrl={project.behanceUrl} />
    </main>
  );
}
