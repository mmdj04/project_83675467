"use client";

import { useTranslations } from "next-intl";

import { Badge } from "@/components/ui/badge";
import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia } from "@/components/ui/empty";

import { accountItems, useActiveSection } from "../../_components/sidebar/account-navigation";
import { ExperienceSettings } from "./experience-settings";
import { ProfileSettings } from "./profile-settings";

export function AccountContent() {
  const t = useTranslations("account");
  const activeId = useActiveSection();
  const active = accountItems.find((item) => item.id === activeId) ?? accountItems[0];
  const ActiveIcon = active.icon;

  if (active.id === "profile") {
    return (
      <div className="flex min-h-0 flex-1 flex-col px-4 md:px-6">
        <ProfileSettings />
      </div>
    );
  }

  if (active.id === "experience") {
    return (
      <div className="flex min-h-0 flex-1 flex-col px-4 md:px-6">
        <ExperienceSettings />
      </div>
    );
  }

  return (
    <div className="flex min-h-0 flex-1 flex-col px-4 md:px-6">
      <Empty className="rounded-xl border">
        <EmptyMedia variant="icon">
          <ActiveIcon aria-hidden="true" />
        </EmptyMedia>
        <EmptyHeader>
          <h2 className="font-semibold text-lg">{t(active.labelKey)}</h2>
          {active.descriptionKey && <p className="text-muted-foreground text-sm">{t(active.descriptionKey)}</p>}
          <Badge className="border-primary/20 text-primary" variant="outline">
            {t("inDevelopmentTitle")}
          </Badge>
        </EmptyHeader>
        <EmptyContent>
          <EmptyDescription>{t("inDevelopmentDescription")}</EmptyDescription>
        </EmptyContent>
      </Empty>
    </div>
  );
}
