export function Hero() {
  return (
    <section className="relative isolate flex flex-col items-center justify-center px-4 py-24 text-center md:py-32">
      <div className="from-background via-background to-muted/30 absolute inset-0 -z-10 bg-gradient-to-b" />
      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center gap-8">
        <h1 className="font-semibold text-4xl tracking-tight md:text-6xl">
          Studio Admin
        </h1>
        <p className="text-balance text-muted-foreground text-sm md:max-w-2xl md:text-base">
          A modern, responsive admin template built with Next.js 16, React 19, TypeScript,
          Tailwind CSS v4, and shadcn/ui.
        </p>
        <div className="huly-glow w-full">
          <div className="huly-glow__back" aria-hidden>
            <div className="huly-glow__back__layer" />
          </div>
          <div className="huly-glow__front">
            <iframe
              src="/dashboard/default"
              className="h-[700px] w-full border-0"
              title="Dashboard Preview"
            />
          </div>
        </div>
      </div>
    </section>
  );
}