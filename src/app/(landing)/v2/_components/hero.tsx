import Link from "next/link";

import { ArrowUpRight, CirclePlay } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] w-full items-center justify-center overflow-hidden border-accent border-b">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-y-14 gap-x-10 px-6 py-12 lg:flex-row lg:py-0">
        <div className="max-w-xl">
          <Badge className="rounded-full py-1">Multi-sistema, multi-equipe</Badge>
          <h1 className="mt-6 max-w-[20ch] text-3xl font-semibold tracking-tight sm:text-5xl lg:text-[2.75rem]">
            Todos os seus sistemas em um único painel
          </h1>
          <p className="mt-6 max-w-[60ch] text-muted-foreground sm:text-lg">
            Explore dashboards prontos para CRM, financeiro, análise de dados e muito mais. Organize sua operação com
            uma interface moderna, responsiva e pronta para produção.
          </p>
          <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row">
            <Button size="lg" className="w-full rounded-full sm:w-auto" asChild>
              <Link href="/dashboard/default">
                Começar agora <ArrowUpRight />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="w-full rounded-full shadow-none sm:w-auto" asChild>
              <Link href="/v2#features">
                <CirclePlay /> Explorar recursos
              </Link>
            </Button>
          </div>
        </div>
        <div className="huly-glow relative w-full max-w-[28rem] lg:max-w-lg xl:max-w-xl">
          <div className="huly-glow__back" aria-hidden>
            <div className="huly-glow__back__layer" />
          </div>
          <div className="huly-glow__front">
            <iframe src="/dashboard/default" className="h-full w-full border-0" title="Dashboard Preview" />
          </div>
        </div>
      </div>
    </div>
  );
}
