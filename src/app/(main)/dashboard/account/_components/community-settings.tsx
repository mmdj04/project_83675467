"use client";

import { useState } from "react";

import { Bot, Kanban, type LucideIcon, MessagesSquare, Network } from "lucide-react";
import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

import { SettingRow, SettingsSection } from "./settings-row";

interface EarlyAccessFeature {
  readonly id: string;
  readonly nameKey: string;
  readonly descriptionKey: string;
  readonly icon: LucideIcon;
  readonly enabled: boolean;
}

const features: readonly EarlyAccessFeature[] = [
  {
    id: "junction",
    nameKey: "featureJunctionRelations",
    descriptionKey: "featureJunctionRelationsDescription",
    icon: Network,
    enabled: true,
  },
  {
    id: "ai",
    nameKey: "featureAiAssist",
    descriptionKey: "featureAiAssistDescription",
    icon: Bot,
    enabled: false,
  },
  {
    id: "kanban",
    nameKey: "featureKanbanCharts",
    descriptionKey: "featureKanbanChartsDescription",
    icon: Kanban,
    enabled: true,
  },
];

export function CommunitySettings() {
  const t = useTranslations("account");
  const [enabledFeatures, setEnabledFeatures] = useState<Set<string>>(
    new Set(features.filter((feature) => feature.enabled).map((feature) => feature.id)),
  );

  function toggleFeature(id: string) {
    setEnabledFeatures((current) => {
      const next = new Set(current);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  }

  return (
    <div className="flex flex-col gap-6 pb-8">
      <SettingsSection title={t("earlyAccess")} description={t("earlyAccessDescription")}>
        {features.map((feature) => {
          const Icon = feature.icon;
          const isEnabled = enabledFeatures.has(feature.id);
          return (
            <SettingRow key={feature.id} title={t(feature.nameKey)} description={t(feature.descriptionKey)}>
              <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-muted">
                <Icon aria-hidden="true" className="size-4" />
              </span>
              <Switch
                checked={isEnabled}
                onCheckedChange={() => toggleFeature(feature.id)}
                aria-label={t(feature.nameKey)}
              />
            </SettingRow>
          );
        })}
      </SettingsSection>

      <SettingsSection title={t("feedback")} description={t("feedbackDescription")}>
        <div className="flex items-center justify-between gap-4 p-4">
          <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-muted">
            <MessagesSquare aria-hidden="true" className="size-4" />
          </span>
          <Button size="sm" variant="outline">
            {t("joinCommunity")}
          </Button>
        </div>
      </SettingsSection>
    </div>
  );
}
