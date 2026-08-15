"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface ChangelogSection {
  title: string;
  items: string[];
}

interface ChangelogMonth {
  month: string;
  summary: string;
  sections: ChangelogSection[];
}

function parseChangelog(content: string): ChangelogMonth[] {
  const months: ChangelogMonth[] = [];
  let currentMonth: ChangelogMonth | null = null;
  let currentSection: ChangelogSection | null = null;

  for (const line of content.split("\n")) {
    const monthMatch = line.match(/^## (\d{4}-\d{2})$/);
    if (monthMatch) {
      currentMonth = { month: monthMatch[1], summary: "", sections: [] };
      months.push(currentMonth);
      currentSection = null;
      continue;
    }
    if (!currentMonth) continue;

    const summaryMatch = line.match(/^\*\*Resumo\*\*: (.+)$/);
    if (summaryMatch) {
      currentMonth.summary = summaryMatch[1];
      continue;
    }

    const sectionMatch =
      line.match(/^### (.+)$/) || line.match(/^\*\*(.+)\*\*$/);
    if (sectionMatch) {
      currentSection = { title: sectionMatch[1], items: [] };
      currentMonth.sections.push(currentSection);
      continue;
    }

    const itemMatch = line.match(/^- (.+)$/);
    if (itemMatch && currentSection) {
      currentSection.items.push(itemMatch[1]);
    }
  }

  return months;
}

export function Changelog({ content }: { content: string }) {
  const months = React.useMemo(() => parseChangelog(content), [content]);
  const [activeMonth, setActiveMonth] = React.useState(months[0]?.month || "");
  const monthRefs = React.useRef<Map<string, HTMLDivElement>>(new Map());

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const month = entry.target.getAttribute("data-month");
            if (month) setActiveMonth(month);
          }
        }
      },
      { rootMargin: "-20% 0px -60% 0px" }
    );

    for (const ref of monthRefs.current.values()) {
      observer.observe(ref);
    }

    return () => observer.disconnect();
  }, [months]);

  const scrollToMonth = (month: string) => {
    const el = monthRefs.current.get(month);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const commitCount = (summary: string) =>
    summary.match(/(\d+) commits/)?.[1];

  const renderItem = (item: string) => {
    const parts = item.split("**");
    return parts.map((part, i) =>
      i % 2 === 1 ? (
        <strong key={i} className="font-semibold text-foreground">
          {part}
        </strong>
      ) : (
        part
      )
    );
  };

  return (
    <section className="bg-background px-8 py-24">
      <div className="mx-auto max-w-[60rem]">
        <div className="mb-16 text-center">
          <h2 className="font-semibold text-3xl tracking-tight text-foreground md:text-5xl">
            Changelog
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Atualizações mensais do projeto.
          </p>
        </div>

        <div className="flex gap-12">
          {/* Sidebar */}
          <nav className="hidden w-48 flex-shrink-0 md:block">
            <div className="sticky top-8 max-h-[calc(100vh-4rem)] overflow-y-auto">
              <p className="mb-4 font-medium text-sm text-foreground">
                Meses
              </p>
              <ul className="space-y-1">
                {months.map((m) => (
                  <li key={m.month}>
                    <button
                      onClick={() => scrollToMonth(m.month)}
                      className={cn(
                        "w-full rounded-md px-3 py-1.5 text-left text-sm transition-colors",
                        activeMonth === m.month
                          ? "bg-accent font-medium text-accent-foreground"
                          : "text-muted-foreground hover:bg-accent/50 hover:text-foreground"
                      )}
                    >
                      {m.month}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </nav>

          {/* Content */}
          <div className="flex-1 overflow-hidden">
            <Accordion
              type="multiple"
              defaultValue={months.slice(0, 1).map((m) => m.month)}
            >
              {months.map((m) => (
                <AccordionItem
                  key={m.month}
                  value={m.month}
                  ref={(el) => {
                    if (el) monthRefs.current.set(m.month, el);
                  }}
                  data-month={m.month}
                >
                  <AccordionTrigger className="py-3 font-semibold text-xl text-foreground">
                    <span className="flex items-center gap-2">
                      {m.month}
                      <span className="rounded-full bg-muted px-2 py-0.5 font-mono text-xs leading-none text-muted-foreground">
                        {commitCount(m.summary) ?? m.sections.length}
                      </span>
                    </span>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4 pt-2">
                      {m.summary && (
                        <p className="text-sm text-muted-foreground">
                          {m.summary}
                        </p>
                      )}
                      {m.sections.map((s) => (
                        <div
                          key={s.title}
                          className="rounded-lg border border-border bg-background p-4 transition-colors hover:bg-accent/50"
                        >
                          <h4 className="mb-2 font-semibold text-sm text-foreground">
                            {s.title}
                          </h4>
                          <ul className="space-y-1.5">
                            {s.items.map((item) => (
                              <li
                                key={item}
                                className={cn(
                                  "text-sm text-muted-foreground",
                                  s.title === "Arquivos principais" &&
                                    "font-mono text-xs"
                                )}
                              >
                                {s.title === "Arquivos principais"
                                  ? item
                                  : renderItem(item)}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}