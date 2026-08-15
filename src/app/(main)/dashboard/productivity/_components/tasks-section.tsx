"use client";

import * as React from "react";

import { Calendar1, Plus } from "lucide-react";
import { useTranslations } from "next-intl";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

type Task = {
  title: string;
  tagKey: string;
  time: string;
  checked: boolean;
};

const tasks: Task[] = [
  { title: "Finalize Q2 roadmap", tagKey: "tagWork", time: "10:00 AM", checked: false },
  { title: "Review design system updates", tagKey: "tagDesign", time: "11:30 AM", checked: true },
  { title: "Reply to important emails", tagKey: "tagAdmin", time: "2:00 PM", checked: false },
  { title: "Plan creator content for this week", tagKey: "tagContent", time: "4:30 PM", checked: false },
  { title: "Prepare weekly team sync notes", tagKey: "tagPlanning", time: "6:00 PM", checked: false },
];

export function TasksSection() {
  const t = useTranslations("productivity");
  const [items, setItems] = React.useState(tasks);

  return (
    <section className="flex flex-col gap-2">
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-xl tracking-tight">{t("tasks")}</h2>
        <div className="flex items-center gap-2">
          <Select defaultValue="today">
            <SelectTrigger className="w-30">
              <SelectValue placeholder={t("rangeToday")} />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="today">{t("rangeToday")}</SelectItem>
                <SelectItem value="tomorrow">{t("rangeTomorrow")}</SelectItem>
                <SelectItem value="this-week">{t("rangeThisWeek")}</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Button>
            <Plus data-icon="inline-start" />
            {t("newTask")}
          </Button>
        </div>
      </div>

      <div className="overflow-hidden rounded-xl border bg-background shadow-xs">
        <div className="divide-y">
          {items.map((task) => (
            <div key={task.title} className="flex items-center gap-2 p-4">
              <Checkbox
                checked={task.checked}
                aria-label={task.title}
                onCheckedChange={(checked) => {
                  setItems((current) =>
                    current.map((item) => (item.title === task.title ? { ...item, checked: checked === true } : item)),
                  );
                }}
              />
              <div className="min-w-0 flex-1">
                <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex min-w-0 flex-col gap-2 lg:flex-row lg:items-center lg:gap-4">
                    <span className="truncate text-sm">{task.title}</span>
                    <Badge variant="outline" className="px-3 py-1 font-normal">
                      {t(task.tagKey)}
                    </Badge>
                  </div>
                  <div className="flex shrink-0 items-center gap-3 text-muted-foreground text-sm">
                    <span>{task.time}</span>
                    <Calendar1 className="size-4" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
