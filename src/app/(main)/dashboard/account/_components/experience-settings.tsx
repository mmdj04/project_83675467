"use client";

import { useState } from "react";

import { useRouter } from "next/navigation";

import { Globe2, Monitor, Moon, PanelLeft, Square, Sun } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { useTheme } from "next-themes";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { setClientCookie } from "@/lib/cookie.client";
import { cn } from "@/lib/utils";

const LOCALES: readonly { code: string; label: string; isNew?: boolean }[] = [
  { code: "pt-BR", label: "Português (Brasil)", isNew: true },
  { code: "en", label: "English" },
];

function RadioOption({
  id,
  value,
  icon,
  label,
}: {
  readonly id: string;
  readonly value: string;
  readonly icon: React.ReactNode;
  readonly label: string;
}) {
  return (
    <Label
      htmlFor={id}
      className={cn(
        "flex cursor-pointer items-center justify-between gap-3 rounded-lg border p-3 transition-colors has-[[data-state=checked]]:border-primary",
      )}
    >
      <span className="flex items-center gap-3">
        <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-muted">{icon}</span>
        <span className="text-sm font-medium">{label}</span>
      </span>
      <RadioGroupItem value={value} id={id} />
    </Label>
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
    <div className="flex flex-col gap-4 pb-8">
      <Card>
        <CardHeader>
          <CardTitle>{t("appearance")}</CardTitle>
          <CardDescription>{t("appearanceDescription")}</CardDescription>
        </CardHeader>
        <CardContent>
          <RadioGroup className="gap-3" value={theme ?? "system"} onValueChange={setTheme}>
            <RadioOption
              id="appearance-light"
              value="light"
              icon={<Sun aria-hidden="true" className="size-4" />}
              label={t("appearanceLight")}
            />
            <RadioOption
              id="appearance-dark"
              value="dark"
              icon={<Moon aria-hidden="true" className="size-4" />}
              label={t("appearanceDark")}
            />
            <RadioOption
              id="appearance-system"
              value="system"
              icon={<Monitor aria-hidden="true" className="size-4" />}
              label={t("appearanceSystem")}
            />
          </RadioGroup>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>{t("navigation")}</CardTitle>
          <CardDescription>{t("navigationDescription")}</CardDescription>
        </CardHeader>
        <CardContent>
          <RadioGroup className="gap-3" value={navigation} onValueChange={setNavigation}>
            <RadioOption
              id="navigation-side-panel"
              value="side-panel"
              icon={<PanelLeft aria-hidden="true" className="size-4" />}
              label={t("navigationSidePanel")}
            />
            <RadioOption
              id="navigation-full-page"
              value="full-page"
              icon={<Square aria-hidden="true" className="size-4" />}
              label={t("navigationFullPage")}
            />
          </RadioGroup>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>{t("language")}</CardTitle>
          <CardDescription>{t("languageDescription")}</CardDescription>
        </CardHeader>
        <CardContent>
          <RadioGroup className="gap-3" value={locale} onValueChange={handleLocaleChange}>
            {LOCALES.map((option) => (
              <Label
                key={option.code}
                htmlFor={`language-${option.code}`}
                className="flex cursor-pointer items-center justify-between gap-3 rounded-lg border p-3 transition-colors has-[[data-state=checked]]:border-primary"
              >
                <span className="flex items-center gap-3">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-muted">
                    <Globe2 aria-hidden="true" className="size-4" />
                  </span>
                  <span className="text-sm font-medium">{option.label}</span>
                  {option.isNew && (
                    <Badge className="border-green-600 text-green-600" variant="outline">
                      {tShell("badgeNew")}
                    </Badge>
                  )}
                </span>
                <RadioGroupItem value={option.code} id={`language-${option.code}`} />
              </Label>
            ))}
          </RadioGroup>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>{t("formats")}</CardTitle>
          <CardDescription>{t("formatsDescription")}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="flex flex-col gap-2">
              <Label htmlFor="format-date">{t("dateFormat")}</Label>
              <Select value={dateFormat} onValueChange={setDateFormat}>
                <SelectTrigger id="format-date" className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="DD/MM/YYYY">{t("formatDateDMY")}</SelectItem>
                  <SelectItem value="MM/DD/YYYY">{t("formatDateMDY")}</SelectItem>
                  <SelectItem value="YYYY-MM-DD">{t("formatDateISO")}</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col gap-2">
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
            </div>
            <div className="flex flex-col gap-2">
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
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="format-timezone">{t("timezone")}</Label>
              <Select value={timezone} onValueChange={setTimezone}>
                <SelectTrigger id="format-timezone" className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="America/Sao_Paulo">{t("timezoneSaoPaulo")}</SelectItem>
                  <SelectItem value="UTC">{t("timezoneLondon")}</SelectItem>
                  <SelectItem value="America/New_York">{t("timezoneNewYork")}</SelectItem>
                  <SelectItem value="Europe/Berlin">{t("timezoneBerlin")}</SelectItem>
                  <SelectItem value="Asia/Shanghai">{t("timezoneShanghai")}</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="format-calendar">{t("calendar")}</Label>
              <Select value={calendar} onValueChange={setCalendar}>
                <SelectTrigger id="format-calendar" className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="gregorian">{t("calendarGregorian")}</SelectItem>
                  <SelectItem value="iso">{t("calendarISO")}</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
