import { Check, X } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const comparison = [
  {
    other: "Dashboards genéricos e difíceis de configurar",
    yours: "11 módulos prontos para diferentes áreas do negócio",
  },
  {
    other: "Interfaces confusas que desmotivam a equipe",
    yours: "Interface moderna e responsiva em todos os dispositivos",
  },
  {
    other: "Dados dispersos em múltiplos sistemas",
    yours: "Todos os dados consolidados em um único painel",
  },
  {
    other: "Acesso limitado a uma plataforma",
    yours: "Multi-equipe com controle de acesso por função",
  },
  {
    other: "Suporte técnico demorado e impessoal",
    yours: "Suporte prioritário com respostas rápidas",
  },
];

export function Comparison() {
  return (
    <section className="bg-background text-foreground">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="bg-foreground text-background overflow-hidden rounded-2xl border p-8 lg:p-12">
          <h2 className="text-center text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            Diferente dos outros <span className="text-primary">painéis</span>
          </h2>
          <p className="text-muted-foreground mx-auto mt-4 max-w-2xl text-center">
            Enquanto outras soluções são genéricas e complicadas, o Studio Admin foi feito para empresas que querem
            produtividade de verdade.
          </p>

          <div className="mt-12 grid gap-4 lg:grid-cols-2">
            <Card className="bg-background/10 gap-2 border-none p-6">
              <CardHeader className="p-0">
                <CardTitle className="text-muted-foreground text-sm font-medium uppercase tracking-wider">
                  Outros sistemas
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 p-0 pt-4">
                {comparison.map((item) => (
                  <div key={item.other} className="flex items-start gap-3">
                    <span className="text-destructive mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-destructive/20">
                      <X className="size-3" />
                    </span>
                    <span className="text-muted-foreground text-sm">{item.other}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="bg-background text-foreground gap-2 border-none p-6 shadow-lg">
              <CardHeader className="p-0">
                <CardTitle className="text-sm font-medium uppercase tracking-wider text-primary">
                  Studio Admin
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 p-0 pt-4">
                {comparison.map((item) => (
                  <div key={item.yours} className="flex items-start gap-3">
                    <span className="text-primary mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <Check className="size-3" />
                    </span>
                    <span className="text-sm font-medium">{item.yours}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
