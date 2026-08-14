"use client";

import { CodeTabs } from "@/components/animate-ui/components/animate/code-tabs";

const INSTALL_CODES = {
  npm: "npm install",
  pnpm: "pnpm add",
  yarn: "yarn add",
  bun: "bun add",
};

const COMPONENT_CODES = {
  "shadcn CLI": "npx shadcn@latest add button card sidebar",
  "Manual": "import { Button } from '@/components/ui/button';",
};

export function Installation() {
  return (
    <section className="border-b bg-muted/30">
      <div className="mx-auto max-w-5xl px-4 py-20 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-semibold text-2xl tracking-tight md:text-4xl">
            Up and running in seconds
          </h2>
          <p className="mt-3 text-balance text-muted-foreground text-sm md:text-base">
            Bootstrap with your favorite package manager, then pull in any component with a
            single command.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div>
            <h3 className="mb-3 font-medium text-sm">Install dependencies</h3>
            <CodeTabs codes={INSTALL_CODES} />
          </div>

          <div>
            <h3 className="mb-3 font-medium text-sm">Add a component</h3>
            <CodeTabs codes={COMPONENT_CODES} />
          </div>
        </div>
      </div>
    </section>
  );
}
