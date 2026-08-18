"use client";

import { useState } from "react";

import { Plus, Trash2 } from "lucide-react";
import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

import { SettingsSection } from "./settings-row";

interface DashboardAction {
  readonly id: string;
  label: string;
  route: string;
  newTab: boolean;
  hidden: boolean;
}

const initialActions: DashboardAction[] = [
  { id: "1", label: "Início", route: "/dashboard/default", newTab: false, hidden: false },
  { id: "2", label: "CRM", route: "/dashboard/crm", newTab: false, hidden: false },
  { id: "3", label: "Finance", route: "/dashboard/finance", newTab: false, hidden: true },
  { id: "4", label: "Separador", route: "", newTab: false, hidden: false },
];

export function LayoutSettings() {
  const t = useTranslations("account");
  const [actions, setActions] = useState<DashboardAction[]>(initialActions);

  function updateAction(id: string, patch: Partial<DashboardAction>) {
    setActions((current) => current.map((action) => (action.id === id ? { ...action, ...patch } : action)));
  }

  function addAction() {
    setActions((current) => [
      ...current,
      { id: crypto.randomUUID(), label: t("newShortcut"), route: "/dashboard/", newTab: false, hidden: false },
    ]);
  }

  return (
    <div className="flex flex-col gap-6 pb-8">
      <SettingsSection title={t("homeActions")} description={t("homeActionsDescription")}>
        {actions.map((action) => (
          <div key={action.id} className="flex flex-col gap-3 p-4">
            <div className="flex flex-wrap items-center gap-2">
              <div className="flex flex-col gap-1.5">
                <Label htmlFor={`action-label-${action.id}`}>{t("actionLabel")}</Label>
                <Input
                  id={`action-label-${action.id}`}
                  value={action.label}
                  onChange={(event) => updateAction(action.id, { label: event.target.value })}
                  className="w-44"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <Label htmlFor={`action-route-${action.id}`}>{t("actionRoute")}</Label>
                <Input
                  id={`action-route-${action.id}`}
                  value={action.route}
                  onChange={(event) => updateAction(action.id, { route: event.target.value })}
                  className="w-56 font-mono"
                />
              </div>
              <div className="flex items-center gap-2 pt-5 text-xs font-medium">
                <Switch
                  checked={action.newTab}
                  onCheckedChange={(checked) => updateAction(action.id, { newTab: checked })}
                  aria-label={t("openNewTab")}
                />
                {t("openNewTab")}
              </div>
              <div className="flex items-center gap-2 pt-5 text-xs font-medium">
                <Switch
                  checked={action.hidden}
                  onCheckedChange={(checked) => updateAction(action.id, { hidden: checked })}
                  aria-label={t("hiddenToggle")}
                />
                {t("hiddenToggle")}
              </div>
              <Button
                size="icon-sm"
                variant="ghost"
                className="pt-5"
                aria-label={t("removeAction")}
                onClick={() => setActions((current) => current.filter((a) => a.id !== action.id))}
              >
                <Trash2 aria-hidden="true" />
              </Button>
            </div>
          </div>
        ))}
        <div className="p-4">
          <Button size="sm" variant="outline" onClick={addAction}>
            <Plus aria-hidden="true" />
            {t("addAction")}
          </Button>
        </div>
      </SettingsSection>
    </div>
  );
}
