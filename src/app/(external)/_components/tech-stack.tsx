const STACK = [
  { name: "Next.js 16", category: "Framework" },
  { name: "React 19", category: "UI Library" },
  { name: "TypeScript", category: "Language" },
  { name: "Tailwind CSS v4", category: "Styling" },
  { name: "shadcn/ui", category: "Components" },
  { name: "Radix UI", category: "Primitives" },
  { name: "Zustand", category: "State" },
  { name: "React Hook Form", category: "Forms" },
  { name: "Zod", category: "Validation" },
  { name: "Recharts", category: "Charts" },
  { name: "next-themes", category: "Theming" },
  { name: "Animate UI", category: "Animations" },
];

export function TechStack() {
  return (
    <section className="border-b">
      <div className="mx-auto max-w-6xl px-4 py-20 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-semibold text-2xl tracking-tight md:text-4xl">
            A modern, batteries-included stack
          </h2>
          <p className="mt-3 text-balance text-muted-foreground text-sm md:text-base">
            Every dependency was chosen for its ergonomics, performance, and long-term
            stability. No lock-in — swap any layer with confidence.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {STACK.map((item) => (
            <div
              key={item.name}
              className="flex items-center gap-2 rounded-full border bg-card px-4 py-2 shadow-sm"
            >
              <span className="font-medium text-sm">{item.name}</span>
              <span className="text-muted-foreground text-xs">{item.category}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
