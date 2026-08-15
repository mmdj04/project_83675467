import { getTranslations } from "next-intl/server";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export async function OverviewKpis() {
  const t = await getTranslations("finance");

  return (
    <div className="overflow-hidden rounded-xl bg-card ring-1 ring-foreground/10">
      <div className="grid grid-cols-1 xl:grid-cols-8">
        <Card className="gap-5 overflow-hidden rounded-none border-0 border-foreground/10 border-b ring-0 xl:col-span-4 xl:border-r">
          <CardHeader>
            <CardTitle className="font-normal">{t("netWorth")}</CardTitle>
          </CardHeader>
          <CardContent className="flex items-end justify-between">
            <div className="space-y-1">
              <div className="text-3xl leading-none tracking-tight">$128.4K</div>
              <p className="text-muted-foreground text-xs">{t("netWorthVsLastMonth", { amount: "$9.8K" })}</p>
            </div>
            <Badge className="bg-green-500/10 text-green-700 dark:bg-green-500/15 dark:text-green-300">+8.4%</Badge>
          </CardContent>
        </Card>

        <Card className="gap-5 overflow-hidden rounded-none border-0 border-foreground/10 border-b ring-0 xl:col-span-4">
          <CardHeader>
            <CardTitle className="font-normal">{t("availableCash")}</CardTitle>
          </CardHeader>
          <CardContent className="flex items-end justify-between">
            <div className="flex flex-col gap-1">
              <div className="text-3xl leading-none tracking-tight">$12.8K</div>
              <p className="text-muted-foreground text-xs">{t("aboveAverage", { amount: "$410" })}</p>
            </div>
            <Badge className="bg-green-500/10 text-green-700 dark:bg-green-500/15 dark:text-green-300">+3.2%</Badge>
          </CardContent>
        </Card>

        <Card className="gap-5 overflow-hidden rounded-none border-0 border-foreground/10 ring-0 xl:col-span-4 xl:border-r">
          <CardHeader>
            <CardTitle className="font-normal">{t("monthlySpend")}</CardTitle>
          </CardHeader>
          <CardContent className="flex items-end justify-between">
            <div className="flex flex-col gap-1">
              <div className="text-3xl leading-none tracking-tight">$2,140</div>
              <p className="text-muted-foreground text-xs">{t("moreThanLastMonth", { amount: "$124" })}</p>
            </div>
            <Badge variant="destructive" className="bg-destructive/10 text-destructive">
              +6.1%
            </Badge>
          </CardContent>
        </Card>

        <Card className="gap-5 overflow-hidden rounded-none border-0 ring-0 xl:col-span-4">
          <CardHeader>
            <CardTitle className="font-normal">{t("savingsRate")}</CardTitle>
          </CardHeader>
          <CardContent className="flex items-end justify-between">
            <div className="flex flex-col gap-1">
              <div className="text-3xl leading-none tracking-tight">28%</div>
              <p className="text-muted-foreground text-xs">{t("upFromLastMonth", { percentage: "25.6%" })}</p>
            </div>
            <Badge className="bg-green-500/10 text-green-700 dark:bg-green-500/15 dark:text-green-300">+2.4%</Badge>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
