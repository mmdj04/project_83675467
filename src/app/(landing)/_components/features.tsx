import { ChartPie, Gauge, Goal, SquareKanban, TrendingUp, Users, Zap } from "lucide-react";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const bars = [35, 55, 45, 70, 60, 85, 65];

function BarMockup() {
  return (
    <div className="flex h-full items-end gap-1.5">
      {bars.map((height) => (
        <div
          key={height}
          className={cn("flex-1 rounded-t-md", height === 85 ? "bg-primary" : "bg-muted-foreground/20")}
          style={{ height: `${height}%` }}
        />
      ))}
    </div>
  );
}

function KpiMockup() {
  return (
    <div className="flex h-full items-center justify-between gap-3">
      <div className="space-y-2">
        <div className="bg-background rounded-lg border p-2">
          <div className="bg-muted-foreground/25 h-1.5 w-10 rounded-full" />
          <div className="bg-muted-foreground/50 mt-1.5 h-2.5 w-14 rounded-full" />
        </div>
        <div className="bg-background rounded-lg border p-2">
          <div className="bg-muted-foreground/25 h-1.5 w-8 rounded-full" />
          <div className="bg-primary mt-1.5 h-2.5 w-12 rounded-full" />
        </div>
      </div>
      <div className="size-16 shrink-0 rounded-full border-4 border-muted-foreground/15 border-t-primary" />
    </div>
  );
}

const avatars = [
  { initials: "AM", className: "bg-sky-500" },
  { initials: "JP", className: "bg-violet-500" },
  { initials: "LK", className: "bg-emerald-500" },
  { initials: "RS", className: "bg-amber-500" },
];

function TeamMockup() {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-3">
      <div className="flex -space-x-2">
        {avatars.map((avatar) => (
          <div
            key={avatar.initials}
            className={cn(
              "flex size-8 items-center justify-center rounded-full border-2 border-background text-[9px] font-semibold text-white",
              avatar.className,
            )}
          >
            {avatar.initials}
          </div>
        ))}
      </div>
      <div className="flex items-center gap-1.5">
        <span className="size-1.5 rounded-full bg-emerald-500" />
        <span className="text-muted-foreground text-[9px] font-medium">8 membros online</span>
      </div>
    </div>
  );
}

const kanbanColumns = [
  {
    title: "A fazer",
    count: 3,
    accent: "bg-sky-500",
    tasks: ["Layout do dashboard", "API de pagamentos"],
  },
  {
    title: "Em andamento",
    count: 2,
    accent: "bg-violet-500",
    tasks: ["Quadro Kanban"],
  },
  {
    title: "Concluído",
    count: 4,
    accent: "bg-emerald-500",
    tasks: ["Login SSO"],
  },
];

function KanbanMockup() {
  return (
    <div className="flex h-full gap-2">
      {kanbanColumns.map((column) => (
        <div key={column.title} className="bg-muted/60 flex-1 rounded-lg border p-1.5">
          <div className="flex items-center justify-between gap-1">
            <span className="text-muted-foreground truncate text-[9px] font-semibold">{column.title}</span>
            <span className="text-muted-foreground/70 text-[9px]">{column.count}</span>
          </div>
          <div className="mt-1.5 space-y-1.5">
            {column.tasks.map((task) => (
              <div key={task} className="bg-background rounded-md border p-1.5">
                <div className="flex items-center gap-1">
                  <span className={cn("size-1.5 shrink-0 rounded-full", column.accent)} />
                  <span className="text-muted-foreground truncate text-[9px] font-medium">{task}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function LiveMockup() {
  return (
    <div className="flex h-full flex-col justify-center gap-2">
      <div className="flex items-center gap-1.5">
        <span className="relative flex size-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
          <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
        </span>
        <span className="text-muted-foreground text-[9px] font-medium">Ao vivo</span>
      </div>
      <svg viewBox="0 0 100 40" preserveAspectRatio="none" className="h-10 w-full">
        <title>Gráfico de acompanhamento em tempo real</title>
        <polyline
          points="0,32 12,26 24,29 36,20 48,24 60,12 72,16 84,8 100,12"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-primary"
        />
        <circle cx="100" cy="12" r="2.5" fill="currentColor" className="text-primary" />
      </svg>
    </div>
  );
}

function GrowthMockup() {
  return (
    <div className="flex h-full flex-col justify-center gap-2">
      <div className="flex items-center justify-between">
        <span className="text-muted-foreground text-[9px] font-medium">Receita mensal</span>
        <span className="bg-emerald-500/15 text-emerald-600 flex items-center gap-1 rounded-full px-1.5 py-0.5 text-[9px] font-semibold">
          <TrendingUp className="size-2.5" />
          +32%
        </span>
      </div>
      <svg viewBox="0 0 100 40" preserveAspectRatio="none" className="text-primary h-12 w-full">
        <title>Gráfico de crescimento de receita</title>
        <defs>
          <linearGradient id="growth-fill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.25" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M0,34 C20,30 25,24 40,22 C55,20 60,12 75,10 C85,8 92,6 100,4 L100,40 L0,40 Z"
          fill="url(#growth-fill)"
        />
        <path
          d="M0,34 C20,30 25,24 40,22 C55,20 60,12 75,10 C85,8 92,6 100,4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="100" cy="4" r="2.5" fill="currentColor" />
      </svg>
    </div>
  );
}

const features = [
  {
    icon: Goal,
    title: "Identifique oportunidades",
    description: "Descubra facilmente áreas inexploradas para expandir seu alcance e crescer sem esforço.",
    mockup: BarMockup,
  },
  {
    icon: ChartPie,
    title: "Insights instantâneos",
    description: "Obtenha insights acionáveis em um relance, permitindo decisões rápidas e certeiras.",
    mockup: KpiMockup,
  },
  {
    icon: Users,
    title: "Engaje sua equipe",
    description: "Aumente o engajamento do time com painéis colaborativos e visões compartilhadas.",
    mockup: TeamMockup,
  },
  {
    icon: SquareKanban,
    title: "Organize com quadros Kanban",
    description: "Planeje, mova e conclua tarefas visualmente com quadros flexíveis para qualquer equipe.",
    mockup: KanbanMockup,
  },
  {
    icon: Gauge,
    title: "Acompanhe em tempo real",
    description: "Monitore indicadores ao vivo e reaja rapidamente às mudanças do seu negócio.",
    mockup: LiveMockup,
  },
  {
    icon: Zap,
    title: "Acelere o crescimento",
    description: "Impulsione o crescimento implementando estratégias que entregam resultados rápido.",
    mockup: GrowthMockup,
  },
];

export function Features() {
  return (
    <div id="features" className="mx-auto w-full max-w-6xl px-6 py-12 lg:py-20">
      <h2 className="mx-auto max-w-xl text-center text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
        Impulsione sua estratégia com recursos inteligentes
      </h2>
      <div className="mx-auto mt-8 grid w-full gap-x-10 gap-y-12 md:grid-cols-2 xl:grid-cols-3 lg:mt-14">
        {features.map((feature) => (
          <Card key={feature.title} className="flex flex-col overflow-hidden rounded-xl border shadow-none">
            <CardHeader>
              <feature.icon />
              <h4 className="mt-3 text-xl font-semibold tracking-tight">{feature.title}</h4>
              <p className="mt-1 text-muted-foreground text-sm sm:text-[17px]">{feature.description}</p>
            </CardHeader>
            <CardContent className="mt-auto px-0 pb-0">
              <div className="bg-muted/50 ml-6 h-44 rounded-tl-xl p-3">
                <feature.mockup />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
