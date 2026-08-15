import { format, isToday, isYesterday, subDays } from "date-fns";
import { enUS, type Locale, ptBR } from "date-fns/locale";
import { BookOpen, FileText } from "lucide-react";
import { getLocale, getTranslations } from "next-intl/server";

import { Button } from "@/components/ui/button";
import { Card, CardAction, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type ProductivityTranslator = Awaited<ReturnType<typeof getTranslations<"productivity">>>;

function formatNoteDate(date: Date, t: ProductivityTranslator, locale: Locale) {
  if (isToday(date)) return t("todayDate");
  if (isYesterday(date)) return t("yesterdayDate");
  return format(date, "MMM d", { locale });
}

export async function RecentNotesCard() {
  const t = await getTranslations("productivity");
  const locale = await getLocale();
  const dateFnsLocales: Record<string, Locale> = { "pt-BR": ptBR, en: enUS };
  const dateFnsLocale = dateFnsLocales[locale] ?? enUS;
  const today = new Date();

  const recentNotes = [
    { title: "Design principles that scale", date: formatNoteDate(today, t, dateFnsLocale), icon: FileText },
    {
      title: `Content ideas – ${format(today, "MMMM", { locale: dateFnsLocale })}`,
      date: formatNoteDate(subDays(today, 1), t, dateFnsLocale),
      icon: FileText,
    },
    { title: "Lessons from the week", date: formatNoteDate(subDays(today, 4), t, dateFnsLocale), icon: FileText },
    { title: "Books I'm Reading", date: formatNoteDate(subDays(today, 5), t, dateFnsLocale), icon: BookOpen },
  ] as const;

  return (
    <Card className="shadow-xs">
      <CardHeader>
        <CardTitle>{t("recentNotes")}</CardTitle>
        <CardAction>
          <Button variant="ghost" size="sm" className="text-muted-foreground">
            {t("viewAll")}
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        {recentNotes.map((note) => (
          <div key={note.title} className="flex items-start gap-4">
            <note.icon className="size-5 text-muted-foreground" />
            <div className="min-w-0">
              <div className="truncate font-medium text-sm leading-none">{note.title}</div>
              <div className="text-muted-foreground text-xs">{note.date}</div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
