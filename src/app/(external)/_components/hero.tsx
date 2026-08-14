import Link from "next/link";

import { AvatarGroup, AvatarGroupTooltip } from "@/components/animate-ui/components/animate/avatar-group";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const contributors = [
  { name: "Olivia", src: "https://i.pravatar.cc/100?img=1" },
  { name: "Phoenix", src: "https://i.pravatar.cc/100?img=12" },
  { name: "Lana", src: "https://i.pravatar.cc/100?img=5" },
  { name: "Demi", src: "https://i.pravatar.cc/100?img=9" },
  { name: "Candice", src: "https://i.pravatar.cc/100?img=10" },
];

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden border-b">
      <div className="from-background via-background to-muted/30 absolute inset-0 -z-10 bg-gradient-to-b" />
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 px-4 py-24 text-center md:py-32">
        <div className="flex flex-col items-center gap-4">
          <p className="text-muted-foreground text-xs uppercase tracking-[0.2em]">
            Studio Admin Template
          </p>
          <h1 className="font-semibold text-4xl tracking-tight md:text-6xl">
            Build admin dashboards{" "}
            <span className="text-muted-foreground">at the speed of thought.</span>
          </h1>
          <p className="text-balance text-muted-foreground text-sm md:max-w-2xl md:text-base">
            A modern, responsive admin template built with Next.js 16, React 19, TypeScript,
            Tailwind CSS v4, and shadcn/ui. Packed with 30+ ready-to-use screens, role-based
            layouts, animated components, and full theme presets.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Button asChild size="lg">
            <Link href="/dashboard/default">Open Dashboard</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="#features">Explore Features</Link>
          </Button>
        </div>

        <div className="flex items-center gap-3 pt-4">
          <AvatarGroup>
            {contributors.map((c) => (
              <Avatar key={c.name} className="border-2 border-background">
                <AvatarImage src={c.src} alt={c.name} />
                <AvatarFallback>{c.name[0]}</AvatarFallback>
                <AvatarGroupTooltip>{c.name}</AvatarGroupTooltip>
              </Avatar>
            ))}
          </AvatarGroup>
          <p className="text-muted-foreground text-xs">
            Crafted with care. Used by teams shipping production-grade admin panels.
          </p>
        </div>
      </div>
    </section>
  );
}
