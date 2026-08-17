"use client";

import { useState } from "react";

import {
  Blocks,
  BookOpen,
  Bot,
  Briefcase,
  Calendar,
  ChevronDown,
  CircleUser,
  CreditCard,
  Database,
  LayoutGrid,
  LifeBuoy,
  LogOut,
  type LucideIcon,
  Mail,
  Menu,
  MessagesSquare,
  Plug,
  Settings,
  Users,
} from "lucide-react";
import { useTranslations } from "next-intl";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia } from "@/components/ui/empty";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

interface AccountItem {
  readonly id: string;
  readonly labelKey: string;
  readonly icon: LucideIcon;
  readonly descriptionKey?: string;
}

interface AccountSubItem extends AccountItem {}

interface AccountSection extends AccountItem {
  readonly subItems?: readonly AccountSubItem[];
}

interface AccountCategory {
  readonly id: string;
  readonly labelKey: string;
  readonly sections: readonly AccountSection[];
}

const categories: readonly AccountCategory[] = [
  {
    id: "user",
    labelKey: "categoryUser",
    sections: [
      { id: "profile", labelKey: "profile", icon: CircleUser },
      { id: "experience", labelKey: "experience", icon: Briefcase },
      {
        id: "accounts",
        labelKey: "accounts",
        descriptionKey: "accountsDescription",
        icon: Mail,
        subItems: [
          { id: "emails", labelKey: "emails", icon: Mail },
          { id: "calendars", labelKey: "calendars", icon: Calendar },
        ],
      },
    ],
  },
  {
    id: "workspace",
    labelKey: "categoryWorkspace",
    sections: [
      { id: "general", labelKey: "general", icon: Settings },
      { id: "data-model", labelKey: "dataModel", icon: Database },
      { id: "layout", labelKey: "layout", icon: LayoutGrid },
      { id: "members", labelKey: "members", icon: Users },
      { id: "billing", labelKey: "billing", icon: CreditCard },
      { id: "mcp-apis", labelKey: "mcpApis", icon: Plug },
      { id: "apps", labelKey: "apps", icon: Blocks },
      { id: "ai", labelKey: "ai", icon: Bot },
    ],
  },
  {
    id: "other",
    labelKey: "categoryOther",
    sections: [
      { id: "community", labelKey: "community", icon: MessagesSquare },
      { id: "support", labelKey: "support", icon: LifeBuoy },
      { id: "documentation", labelKey: "documentation", icon: BookOpen },
      { id: "logout", labelKey: "logout", icon: LogOut },
    ],
  },
];

const allItems: readonly AccountItem[] = categories.flatMap((category) =>
  category.sections.flatMap((section) => (section.subItems ? [section, ...section.subItems] : [section])),
);

const navItemClasses = "flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-left text-sm transition-colors";
const navItemActiveClasses = "bg-accent font-medium text-accent-foreground";
const navItemInactiveClasses = "text-muted-foreground hover:bg-accent/50 hover:text-foreground";

function AccountNav({ activeId, onSelect }: { readonly activeId: string; readonly onSelect: (id: string) => void }) {
  const t = useTranslations("account");
  const [expanded, setExpanded] = useState<readonly string[]>(["accounts"]);

  function toggle(id: string) {
    setExpanded((previous) => (previous.includes(id) ? previous.filter((item) => item !== id) : [...previous, id]));
  }

  return (
    <nav className="flex flex-col gap-4" aria-label={t("navigationLabel")}>
      {categories.map((category) => (
        <div key={category.id}>
          <p className="mb-1.5 px-2 text-xs font-medium text-muted-foreground">{t(category.labelKey)}</p>
          <ul className="flex flex-col gap-0.5">
            {category.sections.map((section) => {
              const Icon = section.icon;
              const isActive = activeId === section.id || section.subItems?.some((subItem) => subItem.id === activeId);
              const isExpanded = expanded.includes(section.id);
              return (
                <li key={section.id}>
                  {section.subItems ? (
                    <button
                      type="button"
                      onClick={() => toggle(section.id)}
                      aria-expanded={isExpanded}
                      className={cn(navItemClasses, isActive ? navItemActiveClasses : navItemInactiveClasses)}
                    >
                      <Icon aria-hidden="true" className="size-4 shrink-0" />
                      <span className="truncate">{t(section.labelKey)}</span>
                      <ChevronDown
                        aria-hidden="true"
                        className={cn("ml-auto size-4 shrink-0 transition-transform", isExpanded && "rotate-180")}
                      />
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={() => onSelect(section.id)}
                      aria-current={activeId === section.id ? "page" : undefined}
                      className={cn(
                        navItemClasses,
                        activeId === section.id ? navItemActiveClasses : navItemInactiveClasses,
                      )}
                    >
                      <Icon aria-hidden="true" className="size-4 shrink-0" />
                      <span className="truncate">{t(section.labelKey)}</span>
                    </button>
                  )}
                  {section.subItems && isExpanded && (
                    <ul className="mt-0.5 ml-3 flex flex-col gap-0.5 border-l border-border pl-2">
                      {section.subItems.map((subItem) => {
                        const SubIcon = subItem.icon;
                        const isSubActive = activeId === subItem.id;
                        return (
                          <li key={subItem.id}>
                            <button
                              type="button"
                              onClick={() => onSelect(subItem.id)}
                              aria-current={isSubActive ? "page" : undefined}
                              className={cn(
                                navItemClasses,
                                isSubActive ? navItemActiveClasses : navItemInactiveClasses,
                              )}
                            >
                              <SubIcon aria-hidden="true" className="size-4 shrink-0" />
                              <span className="truncate">{t(subItem.labelKey)}</span>
                            </button>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </nav>
  );
}

export function AccountSettings() {
  const t = useTranslations("account");
  const [activeId, setActiveId] = useState("profile");
  const active = allItems.find((item) => item.id === activeId) ?? allItems[0];
  const ActiveIcon = active.icon;

  return (
    <div className="flex min-h-0 flex-1 flex-col gap-4 px-4 md:flex-row md:gap-6">
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="sm">
              <Menu aria-hidden="true" />
              {t("menu")}
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-64 gap-0 p-4">
            <SheetTitle className="sr-only">{t("breadcrumbAccount")}</SheetTitle>
            <div className="scrollbar-thin overflow-y-auto pr-1">
              <AccountNav activeId={activeId} onSelect={setActiveId} />
            </div>
          </SheetContent>
        </Sheet>
      </div>

      <aside className="hidden w-56 shrink-0 md:block">
        <div className="rounded-xl border bg-card p-2">
          <AccountNav activeId={activeId} onSelect={setActiveId} />
        </div>
      </aside>

      <main className="flex min-w-0 flex-1 flex-col">
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
      </main>
    </div>
  );
}
