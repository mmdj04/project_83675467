import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="font-semibold">Studio Admin</h3>
            <p className="mt-2 text-muted-foreground text-sm">
              A modern admin dashboard template built with Next.js, React, Tailwind, and
              shadcn/ui.
            </p>
          </div>

          <div>
            <h4 className="font-medium text-sm">Resources</h4>
            <ul className="mt-2 space-y-1 text-muted-foreground text-sm">
              <li>
                <Link href="/dashboard/default" className="hover:underline">
                  Dashboard
                </Link>
              </li>
              <li>
                <a
                  href="https://animate-ui.com/docs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Animate UI Docs
                </a>
              </li>
              <li>
                <a
                  href="https://ui.shadcn.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  shadcn/ui
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-sm">Get started</h4>
            <p className="mt-2 text-muted-foreground text-sm">
              Open the dashboard to explore every screen, layout, and component.
            </p>
            <Button asChild size="sm" className="mt-3">
              <Link href="/dashboard/default">Launch Dashboard</Link>
            </Button>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col items-center justify-between gap-2 md:flex-row">
          <p className="text-muted-foreground text-xs">
            © {new Date().getFullYear()} Studio Admin. All rights reserved.
          </p>
          <p className="text-muted-foreground text-xs">
            Built with Next.js · shadcn/ui · Animate UI
          </p>
        </div>
      </div>
    </footer>
  );
}
