import { addDays, format } from "date-fns";
import { ClipboardCheck, Globe, Orbit, Plus } from "lucide-react";
import { getTranslations } from "next-intl/server";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardAction, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const projects = [
  {
    title: "Q2 Roadmap",
    statusKey: "statusInProgress",
    description: "Ship better, ship smarter.",
    progress: 68,
    dueDays: 9,
    icon: Orbit,
  },
  {
    title: "Website Redesign",
    statusKey: "statusPlanning",
    description: "Clean, modern, and fast.",
    progress: 42,
    dueDays: 21,
    icon: Globe,
  },
  {
    title: "Onboarding",
    statusKey: "statusPlanning",
    description: "Trim first-run steps.",
    progress: 31,
    dueDays: 18,
    icon: ClipboardCheck,
  },
] as const;

export async function ProjectsSection() {
  const t = await getTranslations("productivity");
  const today = new Date();

  return (
    <section className="flex flex-col gap-2">
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-xl tracking-tight">{t("projects")}</h2>
        <div className="flex items-center gap-2">
          <Select defaultValue="active">
            <SelectTrigger className="w-28">
              <SelectValue placeholder={t("filterActive")} />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="active">{t("filterActive")}</SelectItem>
                <SelectItem value="planning">{t("filterPlanning")}</SelectItem>
                <SelectItem value="completed">{t("filterCompleted")}</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Button variant="outline">
            <Plus data-icon="inline-start" />
            {t("newProject")}
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {projects.map((project) => (
          <Card key={project.title} className="shadow-xs">
            <CardHeader>
              <CardTitle>
                <div className="flex items-center gap-2">
                  <project.icon className="size-4 text-muted-foreground" />
                  <span>{project.title}</span>
                </div>
              </CardTitle>
              <CardAction>
                <Badge variant="outline">{t(project.statusKey)}</Badge>
              </CardAction>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-1">
                <div className="text-sm leading-none">{project.description}</div>
                <div className="flex items-center gap-3">
                  <Progress value={project.progress} className="h-2" />
                  <span className="shrink-0 text-sm">{project.progress}%</span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="py-2.5">
              <span className="text-muted-foreground">
                {t("dueDate", { date: format(addDays(today, project.dueDays), "MMM d") })}
              </span>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
