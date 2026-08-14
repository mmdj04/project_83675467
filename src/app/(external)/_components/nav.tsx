import Link from "next/link";

import { Button } from "@/components/ui/button";

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex size-7 items-center justify-center rounded-md bg-primary font-semibold text-primary-foreground text-xs">
            S
          </div>
          <span className="font-semibold text-sm">Studio Admin</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          <a href="#features" className="text-muted-foreground text-sm hover:text-foreground">
            Features
          </a>
          <a
            href="#installation"
            className="text-muted-foreground text-sm hover:text-foreground"
          >
            Installation
          </a>
          <a href="#stack" className="text-muted-foreground text-sm hover:text-foreground">
            Stack
          </a>
        </nav>

        <Button asChild size="sm">
          <Link href="/dashboard/default">Open Dashboard</Link>
        </Button>
      </div>
    </header>
  );
}
