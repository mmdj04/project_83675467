import {
  BarChart3,
  Globe,
  Lock,
  Zap,
  Users,
  CreditCard,
  FileText,
  Settings,
} from "lucide-react";

const features = [
  {
    title: "Multi-sistema",
    description:
      "Gerencie múltiplos projetos e equipes em um só lugar. Dashboards personalizados para cada área.",
    icon: Globe,
    span: "col-span-1",
  },
  {
    title: "Gestão Financeira",
    description:
      "Controle total sobre receitas, despesas, faturas e pagamentos. Relatórios em tempo real com gráficos interativos.",
    icon: BarChart3,
    span: "col-span-2",
  },
  {
    title: "Segurança",
    description:
      "Autenticação avançada, permissões por role e criptografia de dados.",
    icon: Lock,
    span: "col-span-2",
  },
  {
    title: "Performance",
    description:
      "Carregamento ultrarrápido e experiência fluida em qualquer dispositivo.",
    icon: Zap,
    span: "col-span-1",
  },
];

export function Features() {
  return (
    <section className="bg-background px-8 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="font-semibold text-3xl tracking-tight text-foreground md:text-5xl">
            Tudo que você precisa
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Recursos poderosos para gerenciar seu negócio de forma inteligente.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className={`rounded-2xl border border-border bg-card p-8 transition-colors hover:bg-accent/50 ${feature.span}`}
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 font-semibold text-xl text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
