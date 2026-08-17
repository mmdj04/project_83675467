"use client";

import { useState } from "react";

import Markdown from "react-markdown";

import { cn } from "@/lib/utils";

import { modules } from "./modules/modules-data";

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .trim();
}

function extractText(children: React.ReactNode): string {
  if (typeof children === "string") return children;
  if (typeof children === "number") return String(children);
  if (Array.isArray(children)) return children.map(extractText).join("");
  if (children && typeof children === "object") {
    const obj = children as unknown as Record<string, unknown>;
    if ("props" in obj) {
      const props = obj.props as { children?: React.ReactNode } | undefined;
      return extractText(props?.children);
    }
  }
  return "";
}

function headingWithAnchor(Tag: "h1" | "h2" | "h3") {
  return function Heading({ children }: { children?: React.ReactNode }) {
    const id = slugify(extractText(children));
    return (
      <Tag id={id} className="heading-anchor">
        {children}
        <a href={`#${id}`} aria-label="Link to this section">
          #
        </a>
      </Tag>
    );
  };
}

export function ModulesSection() {
  const [activeId, setActiveId] = useState(modules[0].id);
  const activeModule = modules.find((module) => module.id === activeId) ?? modules[0];

  return (
    <section id="modulos" className="bg-background">
      <div className="sticky top-0 z-40 border-border border-b bg-background/80 px-6 py-3 backdrop-blur-sm lg:hidden">
        <div className="flex gap-2 overflow-x-auto">
          {modules.map((module) => (
            <button
              key={module.id}
              type="button"
              onClick={() => setActiveId(module.id)}
              className={cn(
                "shrink-0 rounded-full px-3 py-1 text-sm whitespace-nowrap transition-colors",
                module.id === activeId
                  ? "bg-foreground text-background"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              {module.name}
            </button>
          ))}
        </div>
      </div>
      <div className="mx-auto flex max-w-5xl gap-16 px-6 py-8 lg:py-12">
        <aside className="scrollbar-thin scrollbar-thumb-zinc-200 scrollbar-thumb-rounded-full dark:scrollbar-thumb-zinc-700 sticky top-8 hidden h-[calc(100vh-4rem)] w-48 shrink-0 overflow-y-scroll overscroll-y-auto lg:block">
          <nav className="space-y-6 pb-8">
            <div>
              <h4 className="text-muted-foreground/50 mb-2 text-xs font-normal tracking-wider uppercase">Módulos</h4>
              <ul className="space-y-1">
                {modules.map((module) => (
                  <li key={module.id}>
                    <button
                      type="button"
                      onClick={() => setActiveId(module.id)}
                      className={cn(
                        "flex w-full items-center gap-2 py-1 text-left text-sm transition-colors",
                        module.id === activeId
                          ? "font-medium text-primary"
                          : "text-muted-foreground hover:text-foreground",
                      )}
                    >
                      <module.icon className="size-4 shrink-0" />
                      {module.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </aside>
        <div className="min-w-0 max-w-2xl flex-1 pb-20">
          <article className="prose" key={activeModule.id}>
            <Markdown
              components={{
                h1: headingWithAnchor("h1"),
                h2: headingWithAnchor("h2"),
                h3: headingWithAnchor("h3"),
              }}
            >
              {activeModule.markdown}
            </Markdown>
          </article>
        </div>
      </div>
    </section>
  );
}
