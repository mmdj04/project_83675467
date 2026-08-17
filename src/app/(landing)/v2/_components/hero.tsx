export function Hero() {
  return (
    <section className="mx-auto flex w-full max-w-6xl flex-col items-center px-6 pt-24 pb-16 text-center">
      <h1 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">Studio Admin</h1>
      <p className="mt-4 max-w-2xl text-lg text-muted-foreground">Multi-sistema, multi-equipe, tudo em um só lugar.</p>
      <div className="mt-12 flex aspect-video w-full max-w-4xl items-center justify-center rounded-2xl border bg-muted">
        <span className="text-muted-foreground">Imagem em breve</span>
      </div>
    </section>
  );
}
