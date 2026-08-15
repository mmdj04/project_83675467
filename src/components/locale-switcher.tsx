"use client";

import { useRouter } from "next/navigation";

import { Check, Globe } from "lucide-react";
import { useLocale } from "next-intl";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const LOCALES = [
  { code: "pt-BR", label: "Português (Brasil)" },
  { code: "en", label: "English" },
] as const;

export function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();

  function setLocale(code: string) {
    document.cookie = `locale=${code}; path=/; max-age=31536000; samesite=lax`;
    router.refresh();
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" aria-label="Idioma" className="gap-1 text-muted-foreground">
          <Globe className="size-4" />
          {locale.toUpperCase()}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {LOCALES.map((option) => (
          <DropdownMenuItem key={option.code} onSelect={() => setLocale(option.code)}>
            <span className="flex w-4 shrink-0 items-center justify-center">{locale === option.code && <Check />}</span>
            {option.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
