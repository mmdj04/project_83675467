export function Hero() {
  return (
    <section className="bg-background flex h-[1200px] flex-col items-center justify-center gap-10 overflow-hidden px-8">
      <div className="text-center relative z-10">
        <h1 className="font-semibold text-4xl tracking-tight text-white md:text-6xl">
          BCRM
        </h1>
        <p className="mt-3 text-lg text-neutral-400">
          Multi-sistema, multi-equipe, tudo em um só lugar.
        </p>
      </div>
      <div className="huly-glow w-full max-w-[60rem]">
        <div className="huly-glow__back" aria-hidden>
          <div className="huly-glow__back__layer" />
        </div>
        <div className="huly-glow__front">
          <iframe
            src="/dashboard/default"
            className="h-full w-full border-0"
            title="Dashboard Preview"
          />
        </div>
      </div>
    </section>
  );
}
