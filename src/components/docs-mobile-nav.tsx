"use client";

import { useMemo, useState } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { allDocsPages, navigation } from "@/lib/docs-navigation";

export function DocsMobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const currentPage = useMemo(() => {
    const page = allDocsPages.find((p) => p.href === pathname);
    return page ?? allDocsPages[0];
  }, [pathname]);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger className="sticky top-14 z-40 flex w-full items-center justify-between border-border border-b bg-background/80 px-6 py-3 backdrop-blur-sm focus:outline-none lg:hidden">
        <div className="font-medium text-sm">{currentPage?.name}</div>
        <div className="flex h-8 w-8 items-center justify-center">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-muted-foreground"
          >
            <line x1="8" y1="6" x2="21" y2="6" />
            <line x1="8" y1="12" x2="21" y2="12" />
            <line x1="8" y1="18" x2="21" y2="18" />
            <line x1="3" y1="6" x2="3.01" y2="6" />
            <line x1="3" y1="12" x2="3.01" y2="12" />
            <line x1="3" y1="18" x2="3.01" y2="18" />
          </svg>
        </div>
      </SheetTrigger>
      <SheetContent side="left" showCloseButton={false} className="overflow-y-auto p-6">
        <SheetTitle className="mb-6">Table of Contents</SheetTitle>
        <nav className="space-y-6">
          {navigation.map((section, sectionIndex) => (
            <div key={section.title ?? sectionIndex}>
              {section.title && (
                <h4 className="mb-2 font-medium text-muted-foreground text-xs uppercase tracking-wider">
                  {section.title}
                </h4>
              )}
              <ul className="space-y-1">
                {section.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={`block py-2 text-sm transition-colors ${
                        pathname === item.href
                          ? "font-medium text-primary"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
