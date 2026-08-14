export function Hero() {
  return (
    <section className="bg-background grid min-h-dvh place-items-center overflow-hidden px-8">
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
