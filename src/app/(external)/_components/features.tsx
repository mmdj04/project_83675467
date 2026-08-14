"use client";

import {
  BarChart3,
  Component,
  Gauge,
  MessageSquare,
  Moon,
  Palette,
  Rocket,
  Settings,
} from "lucide-react";

import {
  Tabs,
  TabsContent,
  TabsContents,
  TabsList,
  TabsTrigger,
} from "@/components/animate-ui/components/animate/tabs";

const FEATURES = [
  {
    value: "dashboard",
    label: "Dashboard",
    icon: Gauge,
    title: "30+ dashboard screens",
    description:
      "Pre-built screens for Analytics, CRM, Finance, E-commerce, Logistics, Kanban, Calendar, Mail, Chat, and more — ready to drop into your project.",
  },
  {
    value: "components",
    label: "Components",
    icon: Component,
    title: "60+ shadcn/ui components",
    description:
      "A complete, accessible component library built on Radix UI. Sidebars, dialogs, data tables, charts, comboboxes, command palettes — all included.",
  },
  {
    value: "theme",
    label: "Themes",
    icon: Moon,
    title: "Light, dark & presets",
    description:
      "Three curated theme presets (Brutalist, Soft Pop, Tangerine) plus full light/dark mode. Switch instantly with an animated view transition.",
  },
  {
    value: "responsive",
    label: "Responsive",
    icon: Rocket,
    title: "Mobile, tablet, desktop",
    description:
      "Adaptive layouts that respect visual-viewport changes on tablets. Sidebars collapse, navigation transforms, tables reflow — without compromise.",
  },
  {
    value: "forms",
    label: "Forms",
    icon: Settings,
    title: "Typed forms with Zod",
    description:
      "React Hook Form + Zod resolver. Validated inputs, comboboxes, file uploads, OTP inputs, date pickers — all strictly typed end-to-end.",
  },
  {
    value: "charts",
    label: "Charts",
    icon: BarChart3,
    title: "Beautiful data viz",
    description:
      "Recharts integration with semantic tokens. Area, bar, line, pie, radar, and radial charts — all themable through CSS variables.",
  },
  {
    value: "realtime",
    label: "Realtime",
    icon: MessageSquare,
    title: "Mail & Chat modules",
    description:
      "Standalone Mail and Chat experiences with working thread navigation, message composition, conversation grouping, and optimistic UI.",
  },
  {
    value: "config",
    label: "Configurable",
    icon: Palette,
    title: "User preferences",
    description:
      "Per-user layout preferences: sidebar variant, navbar style, content layout, font family, theme preset. Persisted to cookies with anti-flicker boot.",
  },
];

export function Features() {
  return (
    <section id="features" className="border-b">
      <div className="mx-auto max-w-6xl px-4 py-20 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-semibold text-2xl tracking-tight md:text-4xl">
            Everything you need, nothing you don't
          </h2>
          <p className="mt-3 text-balance text-muted-foreground text-sm md:text-base">
            Studio Admin is opinionated where it matters — accessibility, theming, responsive
            behavior — and flexible everywhere else. Drop in the screens you need, swap the rest.
          </p>
        </div>

        <Tabs defaultValue="dashboard" className="mt-12">
          <TabsList className="mx-auto flex h-auto flex-wrap justify-center gap-2 bg-transparent p-0">
            {FEATURES.map((f) => {
              const Icon = f.icon;
              return (
                <TabsTrigger
                  key={f.value}
                  value={f.value}
                  className="data-[state=active]:bg-background data-[state=active]:shadow-sm"
                >
                  <Icon className="size-4" />
                  <span className="hidden sm:inline">{f.label}</span>
                </TabsTrigger>
              );
            })}
          </TabsList>

          <TabsContents>
            {FEATURES.map((f) => {
              const Icon = f.icon;
              return (
                <TabsContent
                  key={f.value}
                  value={f.value}
                  className="mx-auto mt-10 max-w-3xl"
                >
                  <div className="rounded-xl border bg-card p-6 shadow-sm md:p-10">
                    <div className="flex items-start gap-4">
                      <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <Icon className="size-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-xl md:text-2xl">{f.title}</h3>
                        <p className="mt-2 text-muted-foreground text-sm md:text-base">
                          {f.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              );
            })}
          </TabsContents>
        </Tabs>
      </div>
    </section>
  );
}
