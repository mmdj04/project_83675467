"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface ChangelogEntry {
  date: string;
  hash: string;
  message: string;
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
      /^- (\d{4}-\d{2}-\d{2}) — `([a-f0-9]+)` — (.+)$/
    );
    if (entryMatch && currentMonth) {
      currentMonth.entries.push({
        date: entryMatch[1],
        hash: entryMatch[2],
        message: entryMatch[3],
      });
    }
  }

  return months;
}

const changelogData = `# Changelog

## 2026-08

- 2026-08-13 — \`69cb88e\` — docs: add monthly changelog
- 2026-08-12 — \`bfc7da4\` — chore: update deps
- 2026-08-11 — \`65bc9a1\` — chore: update deps
- 2026-08-10 — \`8f107f0\` — chore: update deps
- 2026-08-09 — \`5afd104\` — feat: add profile screen
- 2026-08-08 — \`150bf4a\` — feat: migrate dnd kit to latest implementation
- 2026-08-08 — \`934daf7\` — feat: migrate data table to tanstack table v9

## 2026-07

- 2026-07-31 — \`8236988\` — refactor: organize dashboard components
- 2026-07-31 — \`4177da6\` — feat: add project versions dropdown
- 2026-07-28 — \`2ec9b47\` — chore: quick fix
- 2026-07-02 — \`a9be558\` — chore: optimise preferences
- 2026-07-01 — \`43f47b8\` — refactor: fix maintainability findings

## 2026-06

- 2026-06-30 — \`07078ce\` — docs: add AGENTS.md guidelines
- 2026-06-27 — \`9dc0e89\` — chore: add scroll fade in mail list
- 2026-06-26 — \`4cbf771\` — feat: add new shadcn components
- 2026-06-24 — \`cc90bbc\` — feat: add tasks screen
- 2026-06-19 — \`df4898f\` — feat: add infrastructure dashboard
- 2026-06-16 — \`4edb326\` — feat: add full calendar
- 2026-06-14 — \`b9f907d\` — feat: add invoice screen
- 2026-06-11 — \`ca2b42b\` — feat: add kanban
- 2026-06-08 — \`3ed82f3\` — feat: add chat screen

## 2026-05

- 2026-05-31 — \`fe1c38c\` — chore: update deps
- 2026-05-22 — \`3e199b4\` — chore: update deps
- 2026-05-21 — \`6391871\` — chore: complete users design
- 2026-05-20 — \`d9ad326\` — feat: add initial chat layouts
- 2026-05-20 — \`b13977d\` — feat: add initial kanban layout
- 2026-05-19 — \`824abfc\` — feat: add logistics dashboard
- 2026-05-17 — \`e3ae25a\` — feat: email
- 2026-05-12 — \`e6fedb8\` — feat: academy dashboard

## 2026-04

- 2026-04-30 — \`62d50ad\` — feat: refine analytics v2 controls
- 2026-04-29 — \`0bcdcc5\` — feat: add analytics v2 dashboard
- 2026-04-26 — \`36369f2\` — feat: finance v2
- 2026-04-21 — \`94b3553\` — feat: add crm v2 dashboard
- 2026-04-17 — \`683b129\` — feat: swap default dashboard routes
- 2026-04-13 — \`d8531f8\` — feat: add productivity dashboard

## 2026-03

- 2026-03-26 — \`1d09520\` — chore: update deps
- 2026-03-10 — \`a7fdf1d\` — refactor: localize dashboard table implementations
- 2026-03-09 — \`68210a1\` — refactor: adopt field-based rhf forms
- 2026-03-09 — \`4c7be9f\` — feat: switch shadcn base color to mist
- 2026-03-09 — \`8e86098\` — feat: update shadcn style to radix-vega
- 2026-03-08 — \`bf29717\` — feat: expand font selector
- 2026-03-08 — \`8d65324\` — feat: add analytics dashboard
- 2026-03-07 — \`7b6b2e8\` — feat: implement analytics dashboard redesign

## 2026-02

- 2026-02-11 — \`233cc7a\` — chore: minor fixes

## 2026-01

- 2026-01-09 — \`a613c2d\` — feat: add revenue and risk summary
- 2026-01-08 — \`1c30052\` — feat: add overview controls
- 2026-01-05 — \`3da75ed\` — feat: add system theme mode
- 2026-01-04 — \`fea7eb2\` — feat: add restore defaults button
- 2026-01-03 — \`23d6dc9\` — feat: add dynamic font preference
- 2026-01-01 — \`ada1b56\` — feat: redesign finance dashboard

## 2025-12

- 2025-12-28 — \`96a0532\` — feat: add KPI row
- 2025-12-13 — \`d06f62c\` — feat: biome init
- 2025-12-11 — \`ddc866b\` — fix: align theme boot defaults
- 2025-12-08 — \`1898e64\` — feat: add window prefs bridge
- 2025-12-07 — \`bcce819\` — feat: completed preference persistence setup

## 2025-11

- 2025-11-30 — \`b986677\` — chore: update preferences store logic
- 2025-11-30 — \`d948542\` — feat: add theme boot script

## 2025-10

- 2025-10-25 — \`f8b6935\` — docs: update Next.js version references
- 2025-10-25 — \`81f2338\` — refactor: rename middleware to proxy
- 2025-10-25 — \`f1c109c\` — feat: migrate to Next 16

## 2025-09

- 2025-09-29 — \`158312e\` — chore: code cleanup
- 2025-09-17 — \`069354c\` — feat: sticky header upon scroll

## 2025-08

- 2025-08-11 — \`4ab4018\` — chore: add not-found page
- 2025-08-10 — \`ff06832\` — chore: update deps

## 2025-07

- 2025-07-30 — \`0fe2d66\` — chore: update deps
- 2025-07-13 — \`5465097\` — feat: add theme preset switcher
- 2025-07-09 — \`966b143\` — feat: add v2 auth pages
- 2025-07-09 — \`aac7533\` — feat: add finance dashboard
- 2025-07-08 — \`9c2af48\` — feat: add CRM dashboard

## 2025-06

- 2025-06-30 — \`c606a95\` — chore: code cleanup
- 2025-06-29 — \`c02ea98\` — chore: replace static icons with simple icons
- 2025-06-12 — \`12bbbd2\` — chore: refactor default dashboard components
- 2025-06-09 — \`73a390e\` — chore: add search dialog

## 2025-05

- 2025-05-30 — \`06b1590\` — chore: update deps
- 2025-05-22 — \`99faf0e\` — feat: add theme switcher
- 2025-05-21 — \`6ff72f1\` — feat: update sidebar to dropdown menu
- 2025-05-20 — \`ef185da\` — feat: add account switcher
- 2025-05-20 — \`871c848\` — feat: add layout preferences panel
- 2025-05-04 — \`b2865a1\` — feat: migrate to Next.js 15 and Tailwind CSS v4

## 2025-04

- 2025-04-28 — \`880bcfc\` — chore: update dependencies

## 2025-03

- 2025-03-19 — \`72028c4\` — chore: update dependencies
- 2025-03-09 — \`8483c1d\` — chore: update project dependencies
- 2025-03-05 — \`04ec0ae\` — feat: redesign dashboard

## 2025-02

- 2025-02-27 — \`05d3178\` — chore: update shadcn components

## 2025-01

- 2025-01-17 — \`ebcf6b2\` — chore: update eslint config
- 2025-01-17 — \`cf35a03\` — chore: update dependencies

## 2024-12

- 2024-12-31 — \`cbcba5c\` — chore: update dependencies
- 2024-12-23 — \`c2ee29b\` — chore: update dependencies

## 2024-11

- 2024-11-27 — \`a36c300\` — chore: update dependencies
- 2024-11-23 — \`f449f53\` — chore: update eslint config
- 2024-11-11 — \`599456f\` — feat: remove Airbnb config
- 2024-11-08 — \`89d445e\` — feat: husky init

## 2024-10

- 2024-10-25 — \`69076b4\` — feat: add shadcn sidebar component
- 2024-10-13 — \`192f4bb\` — chore: update version
- 2024-10-11 — \`479db3a\` — chore: update dependencies

## 2024-09

- Nenhum commit registrado.

## 2024-08

- 2024-08-24 — \`033af77\` — chore: update ESLint config
- 2024-08-20 — \`1a01589\` — chore: update branding
- 2024-08-15 — \`7faee33\` — chore: update dashboard preview image
- 2024-08-14 — \`f9c7d7c\` — chore: refactor code
- 2024-08-01 — \`9850627\` — initial commit`;

export function Changelog() {
  const months = React.useMemo(() => parseChangelog(changelogData), []);
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
            {months.map((m) => (
              <div
                key={m.month}
                ref={(el) => {
                  if (el) monthRefs.current.set(m.month, el);
                }}
                data-month={m.month}
                className="mb-12"
              >
                <h3 className="mb-4 font-semibold text-xl text-foreground">
                  {m.month}
                </h3>
                <div className="space-y-3">
                  {m.entries.map((entry) => (
                    <div
                      key={entry.hash}
                      className="flex items-start gap-3 rounded-lg border border-border bg-background p-4 transition-colors hover:bg-accent/50"
                    >
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
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
