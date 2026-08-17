import Link from "next/link";

import { ArrowUpRight } from "lucide-react";

import { ThemeTogglerButton } from "@/components/theme-toggler-button";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="flex h-[900px] flex-col items-center justify-center gap-10 overflow-hidden bg-background px-8">
      <div className="fixed top-6 right-6 z-50">
        <ThemeTogglerButton />
      </div>
      <div className="relative z-10 w-full max-w-[60rem] text-left">
        <h1 className="font-semibold text-4xl text-foreground tracking-tight md:text-6xl">Studio Admin</h1>
        <p className="mt-3 text-lg text-muted-foreground">Multi-sistema, multi-equipe, tudo em um só lugar.</p>
        <Button className="mt-8 rounded-full" size="lg" asChild>
          <Link href="/v2">
            Landing Page V2 <ArrowUpRight />
          </Link>
        </Button>
      </div>
      <div className="huly-glow w-full max-w-[60rem]">
        <div className="huly-glow__back" aria-hidden>
          <div className="huly-glow__back__layer" />
        </div>
        <div className="huly-glow__front">
          <iframe src="/dashboard/default" className="h-full w-full border-0" title="Dashboard Preview" />
        </div>
      </div>
    </section>
  );
}
