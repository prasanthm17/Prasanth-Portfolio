import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left"
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center") }>
      {eyebrow ? <p className="mb-4 text-xs font-medium uppercase tracking-[0.28em] text-muted">{eyebrow}</p> : null}
      <h2 className="text-[clamp(2rem,4vw,4rem)] font-semibold leading-[0.94] tracking-[-0.05em] text-text">{title}</h2>
      {description ? <p className="mt-5 text-base leading-7 text-muted md:text-lg">{description}</p> : null}
    </div>
  );
}
