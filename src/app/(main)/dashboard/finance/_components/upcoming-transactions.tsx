"use client";

import { addDays, format, set } from "date-fns";
import { enUS, type Locale, ptBR } from "date-fns/locale";
import { ChevronRight, Zap } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { siClaude, siLinear, siResend } from "simple-icons";

import { SimpleIcon } from "@/components/simple-icon";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Item, ItemActions, ItemContent, ItemDescription, ItemGroup, ItemMedia, ItemTitle } from "@/components/ui/item";
import { formatCurrency } from "@/lib/utils";

const dateFnsLocales: Record<string, Locale> = { "pt-BR": ptBR, en: enUS };

const transactions = [
  {
    id: 1,
    title: "Claude Pro Subscription",
    dayOffset: 2,
    hour: 14,
    minute: 45,
    icon: siClaude,
  },
  {
    id: 2,
    title: "Resend Pro Team",
    dayOffset: 4,
    hour: 7,
    minute: 0,
    icon: siResend,
  },
  {
    id: 3,
    title: "Linear Plus Plan",
    dayOffset: 10,
    hour: 7,
    minute: 0,
    icon: siLinear,
  },
];

export function UpcomingTransactions() {
  const locale = useLocale();
  const t = useTranslations("finance");
  const dateFnsLocale = dateFnsLocales[locale] ?? enUS;
  const timePattern = dateFnsLocale === ptBR ? "HH.mm" : "hh.mm a";

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-normal">{t("upcomingBills")}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-1">
            <h2 className="flex items-baseline text-3xl leading-none tracking-tight">
              <span className="font-normal">{formatCurrency(1245, {}, locale)}</span>
            </h2>
            <p className="text-muted-foreground text-sm leading-none">{t("billsDue", { count: 3 })}</p>
          </div>
          <div className="flex w-max items-center gap-2 rounded-md border border-border bg-muted/70 px-2 py-1.5 text-sm">
            <Zap className="size-4 fill-primary text-primary" />
            <span className="text-muted-foreground">{t("autopay", { amount: formatCurrency(145, {}, locale) })}</span>
          </div>
        </div>

        <ItemGroup>
          {transactions.map((transaction) => (
            <Item key={transaction.id} variant="outline" size="xs">
              <ItemMedia>
                <div className="grid size-9 place-items-center rounded-md border bg-background">
                  <SimpleIcon icon={transaction.icon} />
                </div>
              </ItemMedia>
              <ItemContent>
                <ItemTitle>{transaction.title}</ItemTitle>
                <ItemDescription>
                  {format(
                    set(addDays(new Date(), transaction.dayOffset), {
                      hours: transaction.hour,
                      minutes: transaction.minute,
                    }),
                    `${timePattern} '•' MMMM dd, yyyy`,
                    { locale: dateFnsLocale },
                  )}
                </ItemDescription>
              </ItemContent>
              <ItemActions>
                <ChevronRight className="size-5 text-muted-foreground" />
              </ItemActions>
            </Item>
          ))}
        </ItemGroup>
      </CardContent>
    </Card>
  );
}
