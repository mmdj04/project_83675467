import {
  GitHubStarsWheel,
} from "@/components/animate-ui/components/animate/github-stars-wheel";

const STATS = [
  { label: "Screens", value: 30, step: 5 },
  { label: "Components", value: 60, step: 10 },
  { label: "Routes", value: 37, step: 5 },
  { label: "Presets", value: 3, step: 1 },
];

export function Stats() {
  return (
    <section className="border-b">
      <div className="mx-auto max-w-6xl px-4 py-20 md:py-24">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="flex flex-col justify-center gap-4">
            <h2 className="font-semibold text-2xl tracking-tight md:text-4xl">
              A complete starting point
            </h2>
            <p className="text-balance text-muted-foreground text-sm md:text-base">
              Every screen, component, and utility is production-ready. Skip the boilerplate —
              clone, install, and ship.
            </p>
            <div className="flex items-center gap-2 pt-2">
              <GitHubStarsWheel value={1284} step={100} itemsSize={40} />
              <span className="text-muted-foreground text-xs">
                simulated stars on GitHub
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border bg-card p-6 shadow-sm"
              >
                <GitHubStarsWheel value={stat.value} step={stat.step} itemsSize={48} />
                <p className="mt-3 text-muted-foreground text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
