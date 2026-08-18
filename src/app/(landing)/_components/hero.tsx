import Link from "next/link";

import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="mx-auto flex w-full max-w-6xl flex-col items-center px-6 pt-24 pb-16 text-center">
      <div className="relative z-10">
        <h1 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">Studio Admin</h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          Multi-sistema, multi-equipe, tudo em um só lugar.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button asChild size="lg">
            <Link href="/auth/v2/login">Entrar na demo</Link>
          </Button>
        </div>
      </div>
      <div className="huly-glow mt-12 w-full max-w-4xl">
        <div className="huly-glow__back" aria-hidden>
          <div className="huly-glow__back__layer" />
        </div>
        <div className="huly-glow__front">
          <div className="flex h-full w-full items-center justify-center bg-muted">
            <span className="text-muted-foreground">Imagem em breve</span>
          </div>
        </div>
      </div>
    </section>
  );
}
