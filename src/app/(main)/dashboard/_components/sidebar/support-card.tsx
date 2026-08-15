"use client";

import Link from "next/link";

import { useTranslations } from "next-intl";
import { siX } from "simple-icons";

import { SimpleIcon } from "@/components/simple-icon";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function SupportCard() {
  const t = useTranslations("shell");

  return (
    <Card size="sm" className="overflow-hidden shadow-none group-data-[collapsible=icon]:hidden">
      <CardHeader className="min-w-0 px-4">
        <CardTitle className="truncate text-sm">{t("supportTitle")}</CardTitle>
        <CardDescription className="line-clamp-3">
          {t("supportDescription")}&nbsp;
          <Link
            href="https://x.com/arhamkhnz"
            target="_blank"
            rel="noreferrer"
            aria-label={t("reachOutOnX")}
            className="inline-flex items-center text-foreground"
          >
            <SimpleIcon icon={siX} aria-hidden className="size-3 fill-foreground" />
          </Link>
          &nbsp;{t("orBy")}{" "}
          <Link
            href="https://github.com/arhamkhnz#want-to-connect"
            target="_blank"
            rel="noreferrer"
            className="text-foreground hover:underline"
          >
            {t("email")}
          </Link>
          .
        </CardDescription>
      </CardHeader>
    </Card>
  );
}
