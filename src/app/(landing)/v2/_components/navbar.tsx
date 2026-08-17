"use client";

import { useState } from "react";

import Link from "next/link";

import { Menu } from "lucide-react";

import { ThemeTogglerButton } from "@/components/theme-toggler-button";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

const navLinks = [
  { name: "Início", href: "/v2" },
  { name: "Recursos", href: "#features" },
  { name: "FAQ", href: "#faq" },
  { name: "Depoimentos", href: "#testimonials" },
  { name: "Preços", href: "#pricing" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="border-accent bg-background border-b">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/v2" className="font-semibold tracking-tight">
          Studio Admin
        </Link>

        <NavigationMenu className="hidden md:block">
          <NavigationMenuList className="gap-6">
            {navLinks.map((link) => (
              <NavigationMenuItem key={link.href}>
                <NavigationMenuLink asChild>
                  <Link href={link.href}>{link.name}</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-3">
          <ThemeTogglerButton />
          <Button variant="outline" className="hidden sm:inline-flex" asChild>
            <Link href="/auth/v2/login">Entrar</Link>
          </Button>
          <Button className="hidden sm:inline-flex" asChild>
            <Link href="/dashboard/default">Começar</Link>
          </Button>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="outline" size="icon" aria-label="Abrir menu">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72 p-6">
              <SheetTitle className="mb-6">Menu</SheetTitle>
              <nav className="space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="flex flex-col gap-2 pt-4">
                  <Button variant="outline" asChild>
                    <Link href="/auth/v2/login">Entrar</Link>
                  </Button>
                  <Button asChild>
                    <Link href="/dashboard/default">Começar</Link>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
