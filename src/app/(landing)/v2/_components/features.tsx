import { ChartPie, FolderSync, Gauge, Goal, Users, Zap } from "lucide-react";

import { Card, CardContent, CardHeader } from "@/components/ui/card";

const features = [
  {
    icon: Goal,
    title: "Identifique oportunidades",
    description: "Descubra facilmente áreas inexploradas para expandir seu alcance e crescer sem esforço.",
  },
  {
    icon: ChartPie,
    title: "Insights instantâneos",
    description: "Obtenha insights acionáveis em um relance, permitindo decisões rápidas e certeiras.",
  },
  {
    icon: Users,
    title: "Engaje sua equipe",
    description: "Aumente o engajamento do time com painéis colaborativos e visões compartilhadas.",
  },
  {
    icon: FolderSync,
    title: "Automatize o fluxo de trabalho",
    description: "Simplifique processos automatizando tarefas repetitivas, economizando tempo e esforço.",
  },
  {
    icon: Gauge,
    title: "Acompanhe em tempo real",
    description: "Monitore indicadores ao vivo e reaja rapidamente às mudanças do seu negócio.",
  },
  {
    icon: Zap,
    title: "Acelere o crescimento",
    description: "Impulsione o crescimento implementando estratégias que entregam resultados rápido.",
  },
];

export function Features() {
  return (
    <div id="features" className="mx-auto w-full max-w-6xl px-6 py-12 lg:py-20">
      <h2 className="mx-auto max-w-xl text-center text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
        Impulsione sua estratégia com recursos inteligentes
      </h2>
      <div className="mx-auto mt-8 grid w-full gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-3 lg:mt-14">
        {features.map((feature) => (
          <Card key={feature.title} className="flex flex-col overflow-hidden rounded-xl border shadow-none">
            <CardHeader>
              <feature.icon />
              <h4 className="mt-3 text-xl font-semibold tracking-tight">{feature.title}</h4>
              <p className="mt-1 text-muted-foreground text-sm sm:text-[17px]">{feature.description}</p>
            </CardHeader>
            <CardContent className="mt-auto px-0 pb-0">
              <div className="bg-muted ml-6 h-40 rounded-tl-xl" />
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
