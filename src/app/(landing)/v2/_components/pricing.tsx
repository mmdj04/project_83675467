import Link from "next/link";

import { CircleCheck } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Starter",
    price: "R$ 49",
    description: "Para começar a organizar o seu negócio com os módulos essenciais.",
    features: ["1 módulo de dashboard", "Tema claro e escuro", "Até 3 usuários", "Suporte por e-mail"],
    buttonText: "Começar grátis",
  },
  {
    name: "Pro",
    price: "R$ 99",
    isPopular: true,
    description: "Para equipes que querem todos os módulos e mais produtividade.",
    features: [
      "Todos os módulos",
      "Multi-idioma (PT/EN)",
      "Até 15 usuários",
      "Presets de tema personalizados",
      "Suporte prioritário",
    ],
    buttonText: "Testar por 14 dias",
  },
  {
    name: "Enterprise",
    price: "R$ 199",
    description: "Para empresas que precisam de escala, integrações e suporte dedicado.",
    features: ["Tudo do plano Pro", "Usuários ilimitados", "Integrações personalizadas", "Gerente de conta dedicado"],
    buttonText: "Falar com vendas",
  },
];

export function Pricing() {
  return (
    <div id="pricing" className="mx-auto max-w-5xl px-6 py-12 lg:py-20">
      <h2 className="text-center text-4xl font-semibold tracking-tight sm:text-5xl">Planos</h2>
      <div className="mt-8 grid grid-cols-1 items-center gap-8 lg:mt-14 lg:grid-cols-3 lg:gap-0">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={cn(
              "bg-accent/50 relative rounded-xl border p-7",
              "lg:first:rounded-r-none lg:last:rounded-l-none",
              plan.isPopular && "border-primary bg-background rounded-xl py-12 lg:rounded-xl!",
            )}
          >
            {plan.isPopular && (
              <Badge className="absolute top-0 right-1/2 -translate-y-1/2 translate-x-1/2">Mais popular</Badge>
            )}
            <h3 className="text-lg font-medium">{plan.name}</h3>
            <p className="mt-2 text-4xl font-bold">{plan.price}</p>
            <p className="text-muted-foreground mt-4 font-medium">{plan.description}</p>
            <Separator className="my-6" />
            <ul className="space-y-2">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2">
                  <CircleCheck className="mt-1 size-4 text-green-600" />
                  {feature}
                </li>
              ))}
            </ul>
            <Button
              variant={plan.isPopular ? "default" : "outline"}
              size="lg"
              className="mt-6 w-full rounded-full"
              asChild
            >
              <Link href="/auth/v2/register">{plan.buttonText}</Link>
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
