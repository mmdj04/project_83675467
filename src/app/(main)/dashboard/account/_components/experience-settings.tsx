"use client";

import { useState } from "react";

import { useRouter } from "next/navigation";

import { Check, Globe2, Maximize2, PanelLeft } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { useTheme } from "next-themes";

import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { setClientCookie } from "@/lib/cookie.client";
import { cn } from "@/lib/utils";

const LOCALES: readonly { code: string; label: string; isNew?: boolean }[] = [
  { code: "pt-BR", label: "Português (Brasil)", isNew: true },
  { code: "en", label: "English" },
];

type ThemeOption = "light" | "dark" | "system";

function ThemeMockup({ variant }: { variant: Exclude<ThemeOption, "system"> }) {
  const dark = variant === "dark";
  return (
    <div
      className={cn(
        "w-24 overflow-hidden rounded-md border shadow-sm",
        dark ? "border-neutral-700 bg-neutral-950" : "border-neutral-200 bg-white",
      )}
    >
      <div
        className={cn(
          "flex items-center gap-1 border-b px-2 py-1.5",
          dark ? "border-neutral-700 bg-neutral-900" : "border-neutral-200 bg-neutral-50",
        )}
      >
        <span className={cn("size-1.5 rounded-full", dark ? "bg-neutral-600" : "bg-neutral-300")} />
        <span className={cn("size-1.5 rounded-full", dark ? "bg-neutral-600" : "bg-neutral-300")} />
        <span className={cn("size-1.5 rounded-full", dark ? "bg-neutral-600" : "bg-neutral-300")} />
      </div>
      <div className="flex gap-1.5 p-2">
        <div className={cn("w-1/3 rounded-sm", dark ? "bg-neutral-800" : "bg-neutral-100")} />
        <div className="flex flex-1 flex-col gap-1">
          <div className={cn("h-1.5 w-full rounded-sm", dark ? "bg-neutral-700" : "bg-neutral-200")} />
          <div className={cn("h-1.5 w-2/3 rounded-sm", dark ? "bg-neutral-700" : "bg-neutral-200")} />
        </div>
      </div>
    </div>
  );
}

function SystemThemeMockup() {
  return (
    <div className="w-24 overflow-hidden rounded-md border border-neutral-400 shadow-sm">
      <div className="h-1.5 bg-neutral-300" />
      <div className="flex">
        <div className="flex w-1/2 flex-col gap-1 bg-white p-2">
          <div className="h-1 w-full rounded-sm bg-neutral-200" />
          <div className="h-1 w-2/3 rounded-sm bg-neutral-200" />
        </div>
        <div className="flex w-1/2 flex-col gap-1 bg-neutral-950 p-2">
          <div className="h-1 w-full rounded-sm bg-neutral-700" />
          <div className="h-1 w-2/3 rounded-sm bg-neutral-700" />
        </div>
      </div>
    </div>
  );
}

function ThemeOptionPreview({ variant, selected }: { variant: ThemeOption; selected: boolean }) {
  return (
    <div
      className={cn(
        "relative flex h-24 w-full overflow-hidden rounded-t-[calc(var(--radius-lg)-2px)]",
        variant === "light" && "bg-neutral-100",
        variant === "dark" && "bg-neutral-900",
      )}
    >
      {variant === "system" && (
        <>
          <div className="w-1/2 bg-neutral-100" />
          <div className="w-1/2 bg-neutral-900" />
        </>
      )}
      {selected && (
        <span className="absolute top-2 right-2 flex size-6 items-center justify-center rounded-full bg-primary text-primary-foreground">
          <Check aria-hidden="true" className="size-3.5" />
        </span>
      )}
      <span className="absolute right-3 bottom-3">
        {variant === "system" ? <SystemThemeMockup /> : <ThemeMockup variant={variant} />}
      </span>
    </div>
  );
}

export function ExperienceSettings() {
  const t = useTranslations("account");
  const tShell = useTranslations("shell");
  const locale = useLocale();
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const [navigation, setNavigation] = useState("side-panel");
  const [dateFormat, setDateFormat] = useState("DD/MM/YYYY");
  const [timeFormat, setTimeFormat] = useState("24h");
  const [numberFormat, setNumberFormat] = useState("1.234,56");
  const [timezone, setTimezone] = useState("America/Sao_Paulo");
  const [calendar, setCalendar] = useState("gregorian");

  function handleLocaleChange(code: string) {
    setClientCookie("locale", code, 365);
    router.refresh();
  }

  return (
    <div className="flex flex-col gap-6 pb-8">
      <section>
        <h3 className="mb-1 font-semibold text-base">{t("appearance")}</h3>
        <RadioGroup className="grid grid-cols-3 gap-3" value={theme ?? "system"} onValueChange={setTheme}>
          <Label
            htmlFor="appearance-light"
            className="flex-col items-stretch cursor-pointer rounded-lg border-2 border-input transition-colors has-[[data-state=checked]]:border-primary"
          >
            <ThemeOptionPreview variant="light" selected={(theme ?? "system") === "light"} />
            <span className="block px-3 py-2 text-sm font-medium">{t("appearanceLight")}</span>
            <RadioGroupItem value="light" id="appearance-light" className="sr-only" />
          </Label>
          <Label
            htmlFor="appearance-dark"
            className="flex-col items-stretch cursor-pointer rounded-lg border-2 border-input transition-colors has-[[data-state=checked]]:border-primary"
          >
            <ThemeOptionPreview variant="dark" selected={(theme ?? "system") === "dark"} />
            <span className="block px-3 py-2 text-sm font-medium">{t("appearanceDark")}</span>
            <RadioGroupItem value="dark" id="appearance-dark" className="sr-only" />
          </Label>
          <Label
            htmlFor="appearance-system"
            className="flex-col items-stretch cursor-pointer rounded-lg border-2 border-input transition-colors has-[[data-state=checked]]:border-primary"
          >
            <ThemeOptionPreview variant="system" selected={(theme ?? "system") === "system"} />
            <span className="block px-3 py-2 text-sm font-medium">{t("appearanceSystem")}</span>
            <RadioGroupItem value="system" id="appearance-system" className="sr-only" />
          </Label>
        </RadioGroup>
        <input type="hidden" name="appearance" value={theme ?? "system"} />
      </section>

      <section>
        <h3 className="mb-1 font-semibold text-base">{t("navigation")}</h3>
        <p className="mb-3 text-muted-foreground text-sm">{t("navigationDescription")}</p>
        <RadioGroup className="rounded-lg border" value={navigation} onValueChange={setNavigation}>
          <Label
            htmlFor="navigation-side-panel"
            className="flex cursor-pointer items-center gap-3 border-b p-3 transition-colors has-[[data-state=checked]]:bg-accent/50"
          >
            <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
              <PanelLeft aria-hidden="true" className="size-5 text-primary" />
            </span>
            <span className="flex-1">
              <span className="block font-medium text-sm">{t("navigationSidePanel")}</span>
              <span className="block text-muted-foreground text-xs">{t("navigationSidePanelDescription")}</span>
            </span>
            <RadioGroupItem value="side-panel" id="navigation-side-panel" />
          </Label>
          <Label
            htmlFor="navigation-full-page"
            className="flex cursor-pointer items-center gap-3 p-3 transition-colors has-[[data-state=checked]]:bg-accent/50"
          >
            <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
              <Maximize2 aria-hidden="true" className="size-5 text-primary" />
            </span>
            <span className="flex-1">
              <span className="block font-medium text-sm">{t("navigationFullPage")}</span>
              <span className="block text-muted-foreground text-xs">{t("navigationFullPageDescription")}</span>
            </span>
            <RadioGroupItem value="full-page" id="navigation-full-page" />
          </Label>
        </RadioGroup>
      </section>

      <section>
        <h3 className="mb-1 font-semibold text-base">{t("language")}</h3>
        <p className="mb-3 text-muted-foreground text-sm">{t("languageDescription")}</p>
        <RadioGroup className="rounded-lg border" value={locale} onValueChange={handleLocaleChange}>
          {LOCALES.map((option, index) => (
            <Label
              key={option.code}
              htmlFor={`language-${option.code}`}
              className={cn(
                "flex cursor-pointer items-center gap-3 p-3 transition-colors has-[[data-state=checked]]:bg-accent/50",
                index < LOCALES.length - 1 && "border-b",
              )}
            >
              <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <Globe2 aria-hidden="true" className="size-5 text-primary" />
              </span>
              <span className="flex-1">
                <span className="block font-medium text-sm">{option.label}</span>
                {option.isNew && (
                  <Badge className="mt-0.5 border-green-600 text-green-600" variant="outline">
                    {tShell("badgeNew")}
                  </Badge>
                )}
              </span>
              <RadioGroupItem value={option.code} id={`language-${option.code}`} />
            </Label>
          ))}
        </RadioGroup>
      </section>

      <section>
        <h3 className="mb-1 font-semibold text-base">{t("formats")}</h3>
        <p className="mb-3 text-muted-foreground text-sm">{t("formatsDescription")}</p>
        <div className="rounded-lg border">
          <div className="grid gap-0 sm:grid-cols-2">
            {(
              [
                {
                  id: "format-date",
                  label: t("dateFormat"),
                  value: dateFormat,
                  onChange: setDateFormat,
                  options: [
                    { value: "DD/MM/YYYY", label: t("formatDateDMY") },
                    { value: "MM/DD/YYYY", label: t("formatDateMDY") },
                    { value: "YYYY-MM-DD", label: t("formatDateISO") },
                  ],
                },
                {
                  id: "format-time",
                  label: t("timeFormat"),
                  value: timeFormat,
                  onChange: setTimeFormat,
                  options: [
                    { value: "12h", label: t("formatTime12h") },
                    { value: "24h", label: t("formatTime24h") },
                  ],
                },
                {
                  id: "format-number",
                  label: t("numberFormat"),
                  value: numberFormat,
                  onChange: setNumberFormat,
                  options: [
                    { value: "1.234,56", label: t("formatNumberDotComma") },
                    { value: "1,234.56", label: t("formatNumberCommaDot") },
                    { value: "1 234,56", label: t("formatNumberSpaceComma") },
                  ],
                },
                {
                  id: "format-timezone",
                  label: t("timezone"),
                  value: timezone,
                  onChange: setTimezone,
                  options: [
                    { value: "America/Sao_Paulo", label: t("timezoneSaoPaulo") },
                    { value: "UTC", label: t("timezoneLondon") },
                    { value: "America/New_York", label: t("timezoneNewYork") },
                    { value: "Europe/Berlin", label: t("timezoneBerlin") },
                    { value: "Asia/Shanghai", label: t("timezoneShanghai") },
                  ],
                },
                {
                  id: "format-calendar",
                  label: t("calendar"),
                  value: calendar,
                  onChange: setCalendar,
                  options: [
                    { value: "gregorian", label: t("calendarGregorian") },
                    { value: "iso", label: t("calendarISO") },
                  ],
                },
              ] as const
            ).map((field, fieldIndex) => (
              <div
                key={field.id}
                className={cn(
                  "flex flex-col gap-2 border-b p-3",
                  fieldIndex < 4 && "sm:[&:nth-child(odd)]:border-r",
                  fieldIndex >= 4 && "border-b-0 sm:[&:nth-child(odd)]:border-r",
                )}
              >
                <Label htmlFor={field.id}>{field.label}</Label>
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger id={field.id} className="w-full">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {field.options.map((opt) => (
                      <SelectItem key={opt.value} value={opt.value}>
                        {opt.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
