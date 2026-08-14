"use client";

import { AlertTriangle, Check } from "lucide-react";

import {
  Tabs,
  TabsContent,
  TabsContents,
  TabsList,
  TabsTrigger,
} from "@/components/animate-ui/components/animate/tabs";

const ACCESSIBILITY_FEATURES = [
  {
    title: "Keyboard navigation",
    description:
      "Every interactive element is reachable with Tab, activatable with Enter/Space, and dismissable with Escape.",
  },
  {
    title: "Visible focus rings",
    description:
      "Custom focus-visible rings with sufficient contrast against any background — both in light and dark modes.",
  },
  {
    title: "ARIA semantics",
    description:
      "Tooltips, dialogs, menus, and tabs expose proper roles, labels, and live regions to assistive technologies.",
  },
  {
    title: "Reduced motion",
    description:
      "All Animate UI components honor the prefers-reduced-motion media query and disable non-essential animations.",
  },
];

const TROUBLESHOOTING = [
  {
    issue: "Hydration mismatch on theme toggle",
    solution:
      "Ensure the ThemeBootScript runs before hydration. Use suppressHydrationWarning on the <html> element.",
  },
  {
    issue: "Tailwind classes not applied",
    solution:
      "Verify the component is registered in your components.json and that tailwind.config.js scans its location.",
  },
  {
    issue: "shiki themes not loading",
    solution:
      "CodeTabs uses dynamic imports. Make sure shiki is installed and your bundler supports dynamic imports for ESM-only packages.",
  },
  {
    issue: "Animation flickers on first render",
    solution:
      "Wrap the animated element in a container with `overflow: hidden` and avoid animating layout properties — use transform and opacity.",
  },
];

export function AccessibilityTroubleshooting() {
  return (
    <section className="border-b bg-muted/30">
      <div className="mx-auto max-w-6xl px-4 py-20 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-semibold text-2xl tracking-tight md:text-4xl">
            Accessible by default, easy to debug
          </h2>
          <p className="mt-3 text-balance text-muted-foreground text-sm md:text-base">
            Built on top of Radix UI primitives and Animate UI components, which respect
            accessibility standards out of the box.
          </p>
        </div>

        <Tabs defaultValue="a11y" className="mt-10">
          <TabsList className="mx-auto bg-transparent">
            <TabsTrigger value="a11y">
              <Check className="size-4" />
              Accessibility
            </TabsTrigger>
            <TabsTrigger value="debug">
              <AlertTriangle className="size-4" />
              Troubleshooting
            </TabsTrigger>
          </TabsList>

          <TabsContents>
            <TabsContent value="a11y" className="mx-auto mt-8 max-w-3xl">
              <ul className="grid gap-4 md:grid-cols-2">
                {ACCESSIBILITY_FEATURES.map((feature) => (
                  <li
                    key={feature.title}
                    className="rounded-xl border bg-card p-5 shadow-sm"
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex size-8 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                        <Check className="size-4" />
                      </div>
                      <div>
                        <h3 className="font-medium text-sm">{feature.title}</h3>
                        <p className="mt-1 text-muted-foreground text-xs">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </TabsContent>

            <TabsContent value="debug" className="mx-auto mt-8 max-w-3xl">
              <ul className="grid gap-4 md:grid-cols-2">
                {TROUBLESHOOTING.map((item) => (
                  <li
                    key={item.issue}
                    className="rounded-xl border bg-card p-5 shadow-sm"
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex size-8 shrink-0 items-center justify-center rounded-md bg-destructive/10 text-destructive">
                        <AlertTriangle className="size-4" />
                      </div>
                      <div>
                        <h3 className="font-medium text-sm">{item.issue}</h3>
                        <p className="mt-1 text-muted-foreground text-xs">
                          {item.solution}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </TabsContent>
          </TabsContents>
        </Tabs>
      </div>
    </section>
  );
}
