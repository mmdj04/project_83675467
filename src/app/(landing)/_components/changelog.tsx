"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface ChangelogEntry {
  date: string;
  hash: string;
  message: string;
  details: string[];
}

interface ChangelogMonth {
  month: string;
  entries: ChangelogEntry[];
}

function parseChangelog(content: string): ChangelogMonth[] {
  const months: ChangelogMonth[] = [];
  const lines = content.split("\n");
  let currentMonth: ChangelogMonth | null = null;

  for (const line of lines) {
    const monthMatch = line.match(/^## (\d{4}-\d{2})$/);
    if (monthMatch) {
      currentMonth = { month: monthMatch[1], entries: [] };
      months.push(currentMonth);
      continue;
    }

    const entryMatch = line.match(
      /^- (\d{4}-\d{2}-\d{2}) — `([a-f0-9]{7})` — (.+)$/
    );
    if (entryMatch && currentMonth) {
      currentMonth.entries.push({
        date: entryMatch[1],
        hash: entryMatch[2],
        message: entryMatch[3],
        details: [],
      });
      continue;
    }

    if (
      currentMonth &&
      currentMonth.entries.length > 0 &&
      /^\s+\S/.test(line)
    ) {
      const last = currentMonth.entries[currentMonth.entries.length - 1];
      last.details.push(line.trim());
    }
  }

  return months;
}

export function Changelog({ content }: { content: string }) {
  const months = React.useMemo(() => parseChangelog(content), [content]);
  const [activeMonth, setActiveMonth] = React.useState(months[0]?.month || "");
  const contentRef = React.useRef<HTMLDivElement>(null);
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

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <section className="bg-background px-8 py-24">
      <div className="mx-auto max-w-[60rem]">
        <div className="mb-16 text-center">
          <h2 className="font-semibold text-3xl tracking-tight text-foreground md:text-5xl">
            Changelog
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Histórico de atualizações do projeto.
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
          <div ref={contentRef} className="flex-1 overflow-hidden">
            <Accordion
              type="multiple"
              defaultValue={months.slice(0, 3).map((m) => m.month)}
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
                    {m.month}
                    <span className="ml-2 rounded-full bg-muted px-2 py-0.5 font-mono text-xs text-muted-foreground">
                      {m.entries.length}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-3 pt-2">
                      {m.entries.map((entry) => (
                        <div
                          key={entry.hash}
                          className="rounded-lg border border-border bg-background p-4 transition-colors hover:bg-accent/50"
                        >
                          <div className="flex items-start gap-3">
                            <span className="whitespace-nowrap font-mono text-xs text-muted-foreground">
                              {formatDate(entry.date)}
                            </span>
                            <span className="shrink-0 rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-muted-foreground">
                              {entry.hash}
                            </span>
                            <span className="text-sm text-foreground">
                              {entry.message}
                            </span>
                          </div>
                          {entry.details.length > 0 && (
                            <ul className="mt-2 space-y-1 border-l border-border pl-4">
                              {entry.details.map((detail) => (
                                <li
                                  key={detail}
                                  className="font-mono text-xs text-muted-foreground"
                                >
                                  {detail}
                                </li>
                              ))}
                            </ul>
                          )}
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