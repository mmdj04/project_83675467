"use client";

import { useState } from "react";

import { Calendar, Code2, CreditCard, Hash, type LucideIcon, Mail, Plus, Trash2 } from "lucide-react";
import { useTranslations } from "next-intl";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";

import { SettingRow, SettingsSection } from "./settings-row";

interface Integration {
  readonly id: string;
  readonly nameKey: string;
  readonly descriptionKey: string;
  readonly icon: LucideIcon;
  readonly connected: boolean;
}

const integrations: readonly Integration[] = [
  { id: "email", nameKey: "appEmail", descriptionKey: "appEmailDescription", icon: Mail, connected: true },
  { id: "calendar", nameKey: "appCalendar", descriptionKey: "appCalendarDescription", icon: Calendar, connected: true },
  { id: "slack", nameKey: "appSlack", descriptionKey: "appSlackDescription", icon: Hash, connected: false },
  { id: "github", nameKey: "appGithub", descriptionKey: "appGithubDescription", icon: Code2, connected: false },
  { id: "stripe", nameKey: "appStripe", descriptionKey: "appStripeDescription", icon: CreditCard, connected: false },
];

interface ApiKey {
  readonly id: string;
  readonly name: string;
  readonly value: string;
  readonly createdAt: string;
}

const initialKeys: readonly ApiKey[] = [
  { id: "1", name: "Produção", value: "sk_live_••••••••••••4f2a", createdAt: "12 ago 2026" },
  { id: "2", name: "Teste", value: "sk_test_••••••••••••9b1c", createdAt: "3 jul 2026" },
];

export function AppsSettings() {
  const t = useTranslations("account");
  const [connectedApps, setConnectedApps] = useState<Set<string>>(
    new Set(integrations.filter((app) => app.connected).map((app) => app.id)),
  );
  const [keys, setKeys] = useState<ApiKey[]>([...initialKeys]);
  const [newKeyName, setNewKeyName] = useState("");

  function toggleApp(id: string) {
    setConnectedApps((current) => {
      const next = new Set(current);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  }

  function handleCreateKey() {
    const name = newKeyName.trim();
    if (!name) {
      return;
    }
    setKeys((current) => [
      {
        id: crypto.randomUUID(),
        name,
        value: `sk_live_••••••••••••${Math.random().toString(36).slice(2, 6)}`,
        createdAt: "hoje",
      },
      ...current,
    ]);
    setNewKeyName("");
  }

  return (
    <div className="flex flex-col gap-6 pb-8">
      <SettingsSection title={t("integrations")} description={t("integrationsDescription")}>
        {integrations.map((app) => {
          const Icon = app.icon;
          const isConnected = connectedApps.has(app.id);
          return (
            <SettingRow key={app.id} title={t(app.nameKey)} description={t(app.descriptionKey)}>
              <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-muted">
                <Icon aria-hidden="true" className="size-4" />
              </span>
              <Badge className={cn(isConnected && "border-green-600 text-green-600")} variant="outline">
                {isConnected ? t("connected") : t("notConnected")}
              </Badge>
              <Switch checked={isConnected} onCheckedChange={() => toggleApp(app.id)} aria-label={t(app.nameKey)} />
            </SettingRow>
          );
        })}
      </SettingsSection>

      <SettingsSection title={t("apiKeys")} description={t("apiKeysDescription")}>
        <div className="flex flex-col gap-3 p-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex flex-wrap items-end gap-2">
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="api-key-name">{t("keyName")}</Label>
              <Input
                id="api-key-name"
                value={newKeyName}
                onChange={(event) => setNewKeyName(event.target.value)}
                placeholder={t("keyNamePlaceholder")}
                className="w-56"
              />
            </div>
            <Button size="sm" onClick={handleCreateKey}>
              <Plus aria-hidden="true" />
              {t("createKey")}
            </Button>
          </div>
        </div>
        {keys.map((key) => (
          <div key={key.id} className="flex flex-col gap-3 p-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="min-w-0">
              <p className="truncate font-mono text-sm">{key.value}</p>
              <p className="text-muted-foreground text-xs">
                {key.name} · {key.createdAt}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Button size="sm" variant="outline" onClick={() => navigator.clipboard?.writeText(key.value)}>
                {t("copyKey")}
              </Button>
              <Button
                size="sm"
                variant="ghost"
                className="text-destructive hover:text-destructive"
                onClick={() => setKeys((current) => current.filter((k) => k.id !== key.id))}
              >
                <Trash2 aria-hidden="true" />
                {t("revokeKey")}
              </Button>
            </div>
          </div>
        ))}
      </SettingsSection>
    </div>
  );
}
