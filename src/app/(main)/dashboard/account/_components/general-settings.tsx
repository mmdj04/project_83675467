"use client";

import { type ChangeEvent, useMemo, useRef, useState } from "react";

import { useLocale, useTranslations } from "next-intl";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { getInitials } from "@/lib/utils";

import { SettingRow, SettingsSection } from "./settings-row";

const CURRENCIES = ["BRL", "USD", "EUR", "GBP", "JPY", "CAD", "AUD", "CHF", "CNY", "MXN"] as const;

const CURRENCY_PRECISIONS = ["0", "2", "3", "4"] as const;

const DATE_STYLES = ["full", "long", "medium", "short"] as const;

export function GeneralSettings() {
  const t = useTranslations("account");
  const locale = useLocale();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [workspaceName, setWorkspaceName] = useState("Studio Admin");
  const [logo, setLogo] = useState("");
  const [subdomain, setSubdomain] = useState("studio-admin");
  const [customDomain, setCustomDomain] = useState("");
  const [updateTimestamp, setUpdateTimestamp] = useState(true);
  const [markReplied, setMarkReplied] = useState(true);
  const [reopenOnNew, setReopenOnNew] = useState(false);
  const [currency, setCurrency] = useState("BRL");
  const [currencyPrecision, setCurrencyPrecision] = useState("2");
  const [numberFormat, setNumberFormat] = useState("1.234,56");
  const [dateFormat, setDateFormat] = useState("short");
  const [timeFormat, setTimeFormat] = useState("24h");

  const dateFormatOptions = useMemo(
    () =>
      DATE_STYLES.map((style) => ({
        value: style,
        label: new Intl.DateTimeFormat(locale, { dateStyle: style }).format(new Date("2026-08-17T12:00:00Z")),
      })),
    [locale],
  );

  function handleLogoChange(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (file) {
      setLogo(URL.createObjectURL(file));
    }
  }

  return (
    <div className="flex flex-col gap-6 pb-8">
      <SettingsSection title={t("workspaceIdentity")} description={t("workspaceIdentityDescription")}>
        <SettingRow title={t("workspaceLogo")} description={t("workspaceLogoDescription")}>
          <Avatar className="size-12 rounded-lg">
            <AvatarImage src={logo || undefined} alt={t("workspaceLogo")} />
            <AvatarFallback className="rounded-lg text-sm">{getInitials(workspaceName)}</AvatarFallback>
          </Avatar>
          <Button type="button" onClick={() => fileInputRef.current?.click()} size="sm" variant="outline">
            {t("uploadLogo")}
          </Button>
          <Button
            type="button"
            onClick={() => setLogo("")}
            size="sm"
            variant="ghost"
            className="text-destructive hover:text-destructive"
          >
            {t("removeLogo")}
          </Button>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            className="hidden"
            aria-hidden="true"
            tabIndex={-1}
            onChange={handleLogoChange}
          />
        </SettingRow>
        <SettingRow title={t("workspaceName")} description={t("workspaceNameDescription")}>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="workspace-name" className="sr-only">
              {t("workspaceName")}
            </Label>
            <Input
              id="workspace-name"
              value={workspaceName}
              onChange={(event) => setWorkspaceName(event.target.value)}
            />
          </div>
          <Button size="sm">{t("save")}</Button>
        </SettingRow>
        <SettingRow title={t("subdomain")} description={t("subdomainDescription")}>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="workspace-subdomain" className="sr-only">
              {t("subdomain")}
            </Label>
            <Input
              id="workspace-subdomain"
              value={subdomain}
              onChange={(event) => setSubdomain(event.target.value)}
              className="font-mono"
            />
          </div>
          <Button size="sm">{t("save")}</Button>
        </SettingRow>
        <SettingRow title={t("customDomain")} description={t("customDomainDescription")}>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="workspace-custom-domain" className="sr-only">
              {t("customDomain")}
            </Label>
            <Input
              id="workspace-custom-domain"
              value={customDomain}
              onChange={(event) => setCustomDomain(event.target.value)}
              placeholder="crm.suaempresa.com"
              className="font-mono"
            />
          </div>
          <Button size="sm">{t("save")}</Button>
        </SettingRow>
      </SettingsSection>

      <SettingsSection title={t("behavior")} description={t("behaviorDescription")}>
        <SettingRow title={t("updateTimestampToggle")} description={t("updateTimestampToggleDescription")}>
          <Switch
            checked={updateTimestamp}
            onCheckedChange={setUpdateTimestamp}
            aria-label={t("updateTimestampToggle")}
          />
        </SettingRow>
        <SettingRow title={t("markRepliedToggle")} description={t("markRepliedToggleDescription")}>
          <Switch checked={markReplied} onCheckedChange={setMarkReplied} aria-label={t("markRepliedToggle")} />
        </SettingRow>
        <SettingRow title={t("reopenOnNewToggle")} description={t("reopenOnNewToggleDescription")}>
          <Switch checked={reopenOnNew} onCheckedChange={setReopenOnNew} aria-label={t("reopenOnNewToggle")} />
        </SettingRow>
      </SettingsSection>

      <SettingsSection title={t("defaults")} description={t("defaultsDescription")}>
        <SettingRow title={t("currency")} description={t("currencyDescription")}>
          <Select value={currency} onValueChange={setCurrency}>
            <SelectTrigger className="w-40">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {CURRENCIES.map((code) => (
                <SelectItem key={code} value={code}>
                  {code}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </SettingRow>
        <SettingRow title={t("currencyPrecision")} description={t("currencyPrecisionDescription")}>
          <Select value={currencyPrecision} onValueChange={setCurrencyPrecision}>
            <SelectTrigger className="w-40">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {CURRENCY_PRECISIONS.map((precision) => (
                <SelectItem key={precision} value={precision}>
                  {precision}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </SettingRow>
        <SettingRow title={t("numberFormat")} description={t("numberFormatDescription")}>
          <Select value={numberFormat} onValueChange={setNumberFormat}>
            <SelectTrigger className="w-40">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1.234,56">{t("formatNumberDotComma")}</SelectItem>
              <SelectItem value="1,234.56">{t("formatNumberCommaDot")}</SelectItem>
              <SelectItem value="1 234,56">{t("formatNumberSpaceComma")}</SelectItem>
            </SelectContent>
          </Select>
        </SettingRow>
        <SettingRow title={t("dateFormat")} description={t("dateFormatDescription")}>
          <Select value={dateFormat} onValueChange={setDateFormat}>
            <SelectTrigger className="w-40">
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
        </SettingRow>
        <SettingRow title={t("timeFormat")} description={t("timeFormatDescription")}>
          <Select value={timeFormat} onValueChange={setTimeFormat}>
            <SelectTrigger className="w-40">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="12h">{t("formatTime12h")}</SelectItem>
              <SelectItem value="24h">{t("formatTime24h")}</SelectItem>
            </SelectContent>
          </Select>
        </SettingRow>
      </SettingsSection>
    </div>
  );
}
