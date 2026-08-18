import Link from "next/link";

import { CircleCheck, HardDrive, Minus } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Starter",
    price: "R$ 550",
    description: "Para começar a organizar o seu negócio com os módulos essenciais.",
    features: [
      "Módulos essenciais do dashboard",
      "Tema claro e escuro",
      "Dados 100% no seu computador",
      "Funciona offline",
      "Suporte por e-mail",
    ],
    buttonText: "Assinar agora",
  },
  {
    name: "Pro",
    price: "R$ 880",
    isPopular: true,
    description: "Para quem quer todos os módulos e mais produtividade.",
    features: [
      "Todos os módulos (CRM, Finanças, Infra e mais)",
      "Multi-idioma (PT/EN)",
      "Presets de tema personalizados",
      "Usuários ilimitados",
      "Suporte prioritário",
    ],
    buttonText: "Assinar agora",
  },
  {
    name: "Enterprise",
    price: "R$ 2.250",
    description: "Para empresas que precisam de escala, integrações e suporte dedicado.",
    features: [
      "Tudo do plano Pro",
      "Integrações e APIs personalizadas",
      "Implementação e treinamento",
      "Suporte dedicado",
    ],
    buttonText: "Falar com vendas",
  },
];

const comparison: {
  feature: string;
  starter: boolean | string;
  pro: boolean | string;
  enterprise: boolean | string;
}[] = [
  { feature: "Preço mensal", starter: "R$ 550", pro: "R$ 880", enterprise: "R$ 2.250" },
  { feature: "Infraestrutura externa (servidores/nuvem)", starter: "Nenhuma", pro: "Nenhuma", enterprise: "Nenhuma" },
  { feature: "Dados no seu computador", starter: true, pro: true, enterprise: true },
  { feature: "Módulos", starter: "Essenciais", pro: "Todos", enterprise: "Todos" },
  { feature: "Tema claro e escuro", starter: true, pro: true, enterprise: true },
  { feature: "Multi-idioma (PT/EN)", starter: false, pro: true, enterprise: true },
  { feature: "Presets de tema personalizados", starter: false, pro: true, enterprise: true },
  { feature: "Usuários", starter: "Até 3", pro: "Ilimitados", enterprise: "Ilimitados" },
  { feature: "Suporte prioritário", starter: false, pro: true, enterprise: true },
  { feature: "Implementação personalizada", starter: false, pro: false, enterprise: true },
];

function FeatureValue({ value }: { value: boolean | string }) {
  if (value === true) {
    return <CircleCheck className="size-4 text-green-600" />;
  }
  if (value === false) {
    return <Minus className="size-4 text-muted-foreground" />;
  }
  return <span className="text-muted-foreground">{value}</span>;
}

export function Pricing() {
  return (
    <div id="pricing" className="mx-auto max-w-5xl px-6 py-12 lg:py-20">
      <h2 className="text-center text-4xl font-semibold tracking-tight sm:text-5xl">Planos</h2>
      <div className="mx-auto mt-4 flex max-w-2xl items-start gap-2 rounded-xl border bg-muted/50 px-4 py-3 text-sm text-muted-foreground">
        <HardDrive className="mt-0.5 size-4 shrink-0 text-primary" />
        <p>
          100% local: o Studio Admin é instalado no seu Desktop e não usa infraestrutura externa — sem servidores, sem
          nuvem e sem custos ocultos. Você paga apenas o plano mensal.
        </p>
      </div>
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
            <p className="mt-2 text-4xl font-bold">
              {plan.price}
              <span className="text-muted-foreground ml-1 text-sm font-normal">/mês</span>
            </p>
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
      <div className="mt-14">
        <h3 className="text-center text-2xl font-semibold tracking-tight">Compare os planos</h3>
        <div className="mt-8 hidden overflow-hidden rounded-xl border md:block">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-1/2">Recursos</TableHead>
                <TableHead className="text-center">Starter</TableHead>
                <TableHead className="bg-primary/5 text-center">
                  <span className="font-semibold text-primary">Pro</span>
                </TableHead>
                <TableHead className="text-center">Enterprise</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {comparison.map((row) => (
                <TableRow key={row.feature}>
                  <TableCell className="font-medium">{row.feature}</TableCell>
                  <TableCell className="text-center">
                    <FeatureValue value={row.starter} />
                  </TableCell>
                  <TableCell className="bg-primary/5 text-center">
                    <FeatureValue value={row.pro} />
                  </TableCell>
                  <TableCell className="text-center">
                    <FeatureValue value={row.enterprise} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <div className="mt-8 space-y-4 md:hidden">
          {comparison.map((row) => (
            <div key={row.feature} className="overflow-hidden rounded-xl border">
              <div className="bg-muted/50 px-4 py-2.5 text-sm font-medium">{row.feature}</div>
              <div className="divide-y">
                {[
                  { label: "Starter", value: row.starter, highlighted: false },
                  { label: "Pro", value: row.pro, highlighted: true },
                  { label: "Enterprise", value: row.enterprise, highlighted: false },
                ].map(({ label, value, highlighted }) => (
                  <div
                    key={label}
                    className={cn("flex items-center justify-between px-4 py-2.5", highlighted && "bg-primary/5")}
                  >
                    <span className={cn("text-sm", highlighted && "font-semibold text-primary")}>{label}</span>
                    <FeatureValue value={value} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
