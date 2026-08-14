"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { navigation } from "@/lib/docs-navigation";
import { cn } from "@/lib/utils";

export function DocsSidebar() {
  const pathname = usePathname();

  return (
    <nav className="space-y-6 pb-8">
      {navigation.map((section, sectionIndex) => (
        <div key={section.title ?? sectionIndex}>
          {section.title && (
            <h4 className="mb-2 font-normal text-muted-foreground/50 text-xs uppercase tracking-wider">
              {section.title}
            </h4>
          )}
          <ul className="space-y-1">
            {section.items.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "block py-1 text-sm transition-colors",
                      isActive ? "font-medium text-primary" : "text-muted-foreground hover:text-foreground",
                    )}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </nav>
  );
}
