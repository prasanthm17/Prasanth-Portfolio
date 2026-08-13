import { ExperienceItem } from "@/app/data/portfolio";
import { Tag } from "@/components/ui/tag";

export function Timeline({ items }: { items: ExperienceItem[] }) {
  return (
    <div className="relative space-y-8 border-l border-border pl-6 md:pl-8">
      {items.map((item) => (
        <article key={`${item.company}-${item.period}`} className="relative">
          <div className="absolute -left-[1.65rem] top-2 h-3 w-3 rounded-full border border-accent bg-bg shadow-[0_0_0_6px_rgba(37,99,235,0.08)]" />
          <div className="rounded-[1.75rem] border border-border bg-surface p-6 md:p-8">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <h3 className="text-2xl font-semibold tracking-[-0.04em] text-text">{item.company}</h3>
                <p className="mt-1 text-base text-muted">{item.role}</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium text-text">{item.period}</p>
                <p className="mt-1 text-sm text-muted">{item.location}</p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {item.bullets.slice(0, 3).map((bullet) => (
                <Tag key={bullet}>{bullet}</Tag>
              ))}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
