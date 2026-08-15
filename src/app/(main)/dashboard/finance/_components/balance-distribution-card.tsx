"use client";

import * as React from "react";

import { useLocale, useTranslations } from "next-intl";
import { Label, Pie, PieChart } from "recharts";

import { Card, CardAction, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { type ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { formatCurrency } from "@/lib/utils";

type BalanceKey = "investment" | "main" | "reserve" | "savings";

const accountLabelKeys: Record<BalanceKey, string> = {
  main: "accountMain",
  savings: "accountSavings",
  investment: "accountInvestment",
  reserve: "accountReserve",
};

const balanceData: {
  account: string;
  amount: number;
  key: BalanceKey;
  percentage: number;
}[] = [
  {
    account: "Main Wallet",
    amount: 122_540,
    key: "main",
    percentage: 52.2,
  },
  {
    account: "Savings Account",
    amount: 48_320,
    key: "savings",
    percentage: 20.6,
  },
  {
    account: "Investment Account",
    amount: 36_780,
    key: "investment",
    percentage: 15.7,
  },
  {
    account: "Reserve Account",
    amount: 27_256,
    key: "reserve",
    percentage: 11.5,
  },
];

const chartConfig = {
  amount: {
    label: "Balance",
  },
  investment: {
    color: "var(--chart-1)",
    label: "Investment Account",
  },
  main: {
    color: "var(--chart-2)",
    label: "Main Wallet",
  },
  reserve: {
    color: "var(--chart-3)",
    label: "Reserve Account",
  },
  savings: {
    color: "var(--chart-4)",
    label: "Savings Account",
  },
} satisfies ChartConfig;

const currencies = {
  BRL: {
    labelKey: "currencyBrl",
  },
  EUR: {
    labelKey: "currencyEuro",
  },
  GBP: {
    labelKey: "currencyGbp",
  },
  USD: {
    labelKey: "currencyUsd",
  },
} as const;

type Currency = keyof typeof currencies;

const getAccountColor = (key: BalanceKey) => {
  const config = chartConfig[key];

  return "color" in config ? config.color : undefined;
};

const chartData = balanceData.map((item) => ({
  ...item,
  fill: getAccountColor(item.key),
}));
const totalBalance = balanceData.reduce((total, item) => total + item.amount, 0);

export function BalanceDistributionCard() {
  const locale = useLocale();
  const t = useTranslations("finance");
  const [currency, setCurrency] = React.useState<Currency>("BRL");

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-normal">{t("accountAllocation")}</CardTitle>
        <CardAction>
          <Select onValueChange={(value) => setCurrency(value as Currency)} value={currency}>
            <SelectTrigger className="w-36" size="sm">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {Object.entries(currencies).map(([value, item]) => (
                  <SelectItem key={value} value={value}>
                    {t(item.labelKey)}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </CardAction>
      </CardHeader>

      <CardContent className="grid items-center gap-4 sm:grid-cols-[minmax(0,0.9fr)_minmax(0,1fr)]">
        <ChartContainer config={chartConfig} className="mx-auto aspect-square h-50">
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  hideLabel
                  className="w-52"
                  formatter={(value, name, item) => {
                    const itemKey = (item?.payload as { key?: BalanceKey } | undefined)?.key;

                    return (
                      <>
                        <span className="font-medium font-mono text-foreground tabular-nums">
                          {formatCurrency(Number(value), { currency, noDecimals: true }, locale)}
                        </span>{" "}
                        <span className="text-muted-foreground">
                          {t(accountLabelKeys[itemKey ?? (name as BalanceKey)] ?? name)}
                        </span>
                      </>
                    );
                  }}
                />
              }
            />
            <Pie
              cornerRadius={6}
              data={chartData}
              dataKey="amount"
              innerRadius={65}
              nameKey="account"
              outerRadius={90}
              paddingAngle={2}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (!(viewBox && "cx" in viewBox && "cy" in viewBox)) {
                    return null;
                  }

                  return (
                    <text dominantBaseline="middle" textAnchor="middle" x={viewBox.cx} y={viewBox.cy}>
                      <tspan className="fill-muted-foreground text-xs" x={viewBox.cx} y={(viewBox.cy ?? 0) - 8}>
                        {t("total")}
                      </tspan>
                      <tspan
                        className="fill-foreground font-medium text-lg tabular-nums"
                        x={viewBox.cx}
                        y={(viewBox.cy ?? 0) + 14}
                      >
                        {formatCurrency(totalBalance, { currency, noDecimals: true }, locale)}
                      </tspan>
                    </text>
                  );
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>

        <div className="flex min-w-0 flex-col gap-3">
          {chartData.map((item) => (
            <div className="grid grid-cols-[1fr_auto] items-end gap-3" key={item.key}>
              <div className="min-w-0">
                <div className="flex min-w-0 items-center gap-1">
                  <span aria-hidden="true" className="h-2 w-1 rounded-full" style={{ backgroundColor: item.fill }} />
                  <p className="truncate text-muted-foreground text-xs">{t(accountLabelKeys[item.key])}</p>
                </div>
                <p className="font-medium tabular-nums">
                  {formatCurrency(item.amount, { currency, noDecimals: true }, locale)}
                </p>
              </div>
              <div className="font-medium tabular-nums">{item.percentage}%</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
