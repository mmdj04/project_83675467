"use client";

import { type ReactNode, useMemo, useState } from "react";

import { useRouter } from "next/navigation";

import { Check, Globe2, Maximize2, PanelLeft } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { useTheme } from "next-themes";

import { Badge } from "@/components/ui/badge";
import {
  Combobox,
  ComboboxCollection,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxGroup,
  ComboboxInput,
  ComboboxItem,
  ComboboxLabel,
  ComboboxList,
} from "@/components/ui/combobox";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { setClientCookie } from "@/lib/cookie.client";
import { cn } from "@/lib/utils";

const LOCALES: readonly { code: string; label: string; isNew?: boolean }[] = [
  { code: "pt-BR", label: "Português (Brasil)", isNew: true },
  { code: "en", label: "English" },
];

const SAMPLE_DATE = new Date("2026-08-17T12:00:00Z");

const DATE_STYLES = ["full", "long", "medium", "short"] as const;

type TimezoneOption = { value: string; label: string };

type TimezoneGroup = { value: string; items: TimezoneOption[] };

function FormatCell({ last = false, children }: { last?: boolean; children: ReactNode }) {
  return (
    <div className={cn("flex flex-col gap-2 border-b p-3 sm:[&:nth-child(odd)]:border-r", last && "border-b-0")}>
      {children}
    </div>
  );
}

type ThemeOption = "light" | "dark" | "system";

function ThemeOptionPreview({ variant, selected }: { variant: ThemeOption; selected: boolean }) {
  return (
    <div
      className={cn(
        "relative h-32 w-full overflow-hidden rounded-lg p-2.5",
        variant === "light" && "bg-neutral-100",
        variant === "dark" && "bg-neutral-900",
      )}
    >
      {variant === "system" && (
        <>
          <div className="absolute inset-y-0 left-0 w-1/2 bg-neutral-100" />
          <div className="absolute inset-y-0 right-0 w-1/2 bg-neutral-900" />
        </>
      )}

      {variant === "system" ? (
        <div className="relative flex h-full w-full gap-2.5">
          <div className="flex flex-1 flex-col justify-end overflow-hidden rounded-lg border border-neutral-200 bg-white p-3">
            <span className="font-bold text-2xl text-neutral-950">Aa</span>
          </div>
          <div className="flex flex-1 flex-col justify-end overflow-hidden rounded-lg border border-neutral-700 bg-neutral-950 p-3">
            <span className="font-bold text-2xl text-white">Aa</span>
          </div>
        </div>
      ) : (
        <div
          className={cn(
            "flex h-full w-full flex-col justify-end overflow-hidden rounded-lg border p-3",
            variant === "dark" ? "border-neutral-700 bg-neutral-950" : "border-neutral-200 bg-white",
          )}
        >
          <span className={cn("font-bold text-2xl", variant === "dark" ? "text-white" : "text-neutral-950")}>Aa</span>
        </div>
      )}

      {selected && (
        <span className="absolute right-3 bottom-3 z-10 flex size-6 items-center justify-center rounded-full bg-primary text-primary-foreground">
          <Check aria-hidden="true" className="size-3.5" />
        </span>
      )}
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
  const [dateFormat, setDateFormat] = useState("short");
  const [timeFormat, setTimeFormat] = useState("24h");
  const [numberFormat, setNumberFormat] = useState("1.234,56");
  const [timezone, setTimezone] = useState("America/Sao_Paulo");
  const [calendar, setCalendar] = useState("gregory");

  function handleLocaleChange(code: string) {
    setClientCookie("locale", code, 365);
    router.refresh();
  }

  const dateFormatOptions = useMemo(
    () =>
      DATE_STYLES.map((style) => ({
        value: style,
        label: new Intl.DateTimeFormat(locale, { dateStyle: style }).format(SAMPLE_DATE),
      })),
    [locale],
  );

  const calendarOptions = useMemo(
    () =>
      Intl.supportedValuesOf("calendar").map((calendarCode) => ({
        value: calendarCode,
        label: `${new Intl.DateTimeFormat(locale, {
          calendar: calendarCode,
          day: "numeric",
          month: "long",
          year: "numeric",
        }).format(SAMPLE_DATE)} (${calendarCode})`,
      })),
    [locale],
  );

  const timezoneGroups = useMemo<TimezoneGroup[]>(() => {
    const formatOffset = (zone: string) =>
      new Intl.DateTimeFormat(locale, { timeZone: zone, timeZoneName: "shortOffset", hour: "2-digit" })
        .formatToParts(SAMPLE_DATE)
        .find((part) => part.type === "timeZoneName")?.value ?? "";
    const toOption = (zone: string): TimezoneOption => ({
      value: zone,
      label: `${zone} (${formatOffset(zone)})`,
    });
    const groups = new Map<string, TimezoneOption[]>();
    for (const zone of Intl.supportedValuesOf("timeZone")) {
      const region = zone.split("/")[0];
      const group = groups.get(region);
      if (group) {
        group.push(toOption(zone));
      } else {
        groups.set(region, [toOption(zone)]);
      }
    }
    return [
      { value: "UTC", items: [toOption("UTC")] },
      ...[...groups.entries()]
        .sort(([a], [b]) => a.localeCompare(b))
        .map(([region, items]) => ({ value: region, items })),
    ];
  }, [locale]);

  const selectedTimezone = useMemo(
    () => timezoneGroups.flatMap((group) => group.items).find((option) => option.value === timezone) ?? null,
    [timezone, timezoneGroups],
  );

  return (
    <div className="flex flex-col gap-6 pb-8">
      <section>
        <h3 className="mb-1 font-semibold text-base">{t("appearance")}</h3>
        <RadioGroup className="grid grid-cols-3 gap-3" value={theme ?? "system"} onValueChange={setTheme}>
          <Label
            htmlFor="appearance-light"
            className="cursor-pointer flex-col items-stretch rounded-lg border-2 border-input transition-colors has-[[data-state=checked]]:border-primary"
          >
            <ThemeOptionPreview variant="light" selected={(theme ?? "system") === "light"} />
            <span className="block px-3 py-2 font-medium text-sm">{t("appearanceLight")}</span>
            <RadioGroupItem value="light" id="appearance-light" className="sr-only" />
          </Label>
          <Label
            htmlFor="appearance-dark"
            className="cursor-pointer flex-col items-stretch rounded-lg border-2 border-input transition-colors has-[[data-state=checked]]:border-primary"
          >
            <ThemeOptionPreview variant="dark" selected={(theme ?? "system") === "dark"} />
            <span className="block px-3 py-2 font-medium text-sm">{t("appearanceDark")}</span>
            <RadioGroupItem value="dark" id="appearance-dark" className="sr-only" />
          </Label>
          <Label
            htmlFor="appearance-system"
            className="cursor-pointer flex-col items-stretch rounded-lg border-2 border-input transition-colors has-[[data-state=checked]]:border-primary"
          >
            <ThemeOptionPreview variant="system" selected={(theme ?? "system") === "system"} />
            <span className="block px-3 py-2 font-medium text-sm">{t("appearanceSystem")}</span>
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
            <FormatCell>
              <Label htmlFor="format-date">{t("dateFormat")}</Label>
              <Select value={dateFormat} onValueChange={setDateFormat}>
                <SelectTrigger id="format-date" className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {dateFormatOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </FormatCell>
            <FormatCell>
              <Label htmlFor="format-time">{t("timeFormat")}</Label>
              <Select value={timeFormat} onValueChange={setTimeFormat}>
                <SelectTrigger id="format-time" className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="12h">{t("formatTime12h")}</SelectItem>
                  <SelectItem value="24h">{t("formatTime24h")}</SelectItem>
                </SelectContent>
              </Select>
            </FormatCell>
            <FormatCell>
              <Label htmlFor="format-number">{t("numberFormat")}</Label>
              <Select value={numberFormat} onValueChange={setNumberFormat}>
                <SelectTrigger id="format-number" className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1.234,56">{t("formatNumberDotComma")}</SelectItem>
                  <SelectItem value="1,234.56">{t("formatNumberCommaDot")}</SelectItem>
                  <SelectItem value="1 234,56">{t("formatNumberSpaceComma")}</SelectItem>
                </SelectContent>
              </Select>
            </FormatCell>
            <FormatCell>
              <Label htmlFor="format-timezone">{t("timezone")}</Label>
              <Combobox
                items={timezoneGroups}
                value={selectedTimezone}
                onValueChange={(option) => setTimezone(option?.value ?? "")}
                autoHighlight
              >
                <ComboboxInput
                  id="format-timezone"
                  placeholder={t("timezoneSearchPlaceholder")}
                  showTrigger
                  showClear
                  className="w-full"
                />
                <ComboboxContent>
                  <ComboboxEmpty>{t("timezoneNoResults")}</ComboboxEmpty>
                  <ComboboxList>
                    {(group) => (
                      <ComboboxGroup key={group.value} items={group.items}>
                        <ComboboxLabel>{group.value}</ComboboxLabel>
                        <ComboboxCollection>
                          {(option) => (
                            <ComboboxItem key={option.value} value={option}>
                              {option.label}
                            </ComboboxItem>
                          )}
                        </ComboboxCollection>
                      </ComboboxGroup>
                    )}
                  </ComboboxList>
                </ComboboxContent>
              </Combobox>
            </FormatCell>
            <FormatCell last>
              <Label htmlFor="format-calendar">{t("calendar")}</Label>
              <Select value={calendar} onValueChange={setCalendar}>
                <SelectTrigger id="format-calendar" className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {calendarOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </FormatCell>
          </div>
        </div>
      </section>
    </div>
  );
}
