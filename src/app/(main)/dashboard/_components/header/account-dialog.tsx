"use client";

import { useState } from "react";

import {
  BadgeCheck,
  Blocks,
  BookOpen,
  Bot,
  Briefcase,
  Calendar,
  CircleUser,
  CreditCard,
  Database,
  LayoutGrid,
  LifeBuoy,
  LogOut,
  type LucideIcon,
  Mail,
  MessagesSquare,
  Plug,
  Settings,
  Users,
} from "lucide-react";
import { useTranslations } from "next-intl";

import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia } from "@/components/ui/empty";
import { cn } from "@/lib/utils";

import { ExperienceSettings } from "../../account/_components/experience-settings";
import { ProfileSettings } from "../../account/_components/profile-settings";

interface AccountNavItem {
  readonly id: string;
  readonly labelKey: string;
  readonly icon: LucideIcon;
  readonly descriptionKey?: string;
  readonly subItems?: readonly AccountNavItem[];
}

interface AccountNavCategory {
  readonly id: string;
  readonly labelKey: string;
  readonly items: readonly AccountNavItem[];
}

const NAV_CATEGORIES: readonly AccountNavCategory[] = [
  {
    id: "user",
    labelKey: "categoryUser",
    items: [
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
    items: [
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
    items: [
      { id: "community", labelKey: "community", icon: MessagesSquare },
      { id: "support", labelKey: "support", icon: LifeBuoy },
      { id: "documentation", labelKey: "documentation", icon: BookOpen },
      { id: "logout", labelKey: "logout", icon: LogOut },
    ],
  },
];

export function AccountDialog() {
  const t = useTranslations("shell");
  const tAccount = useTranslations("account");
  const [activeSection, setActiveSection] = useState("profile");

  function renderContent() {
    if (activeSection === "profile") {
      return <ProfileSettings />;
    }

    if (activeSection === "experience") {
      return <ExperienceSettings />;
    }

    const allItems = NAV_CATEGORIES.flatMap((c) => c.items).flatMap((i) => (i.subItems ? [i, ...i.subItems] : [i]));
    const activeItem = allItems.find((i) => i.id === activeSection);
    const ActiveIcon = activeItem?.icon ?? CircleUser;

    return (
      <Empty className="rounded-xl border">
        <EmptyMedia variant="icon">
          <ActiveIcon aria-hidden="true" />
        </EmptyMedia>
        <EmptyHeader>
          <h2 className="font-semibold text-lg">{tAccount(activeItem?.labelKey ?? "profile")}</h2>
          {activeItem?.descriptionKey && (
            <p className="text-muted-foreground text-sm">{tAccount(activeItem.descriptionKey)}</p>
          )}
          <Badge className="border-primary/20 text-primary" variant="outline">
            {tAccount("inDevelopmentTitle")}
          </Badge>
        </EmptyHeader>
        <EmptyContent>
          <EmptyDescription>{tAccount("inDevelopmentDescription")}</EmptyDescription>
        </EmptyContent>
      </Empty>
    );
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <DropdownMenuItem onSelect={(event) => event.preventDefault()}>
          <BadgeCheck />
          {t("account")}
        </DropdownMenuItem>
      </DialogTrigger>
      <DialogContent className="flex max-h-[min(100dvh-4rem)] flex-col gap-0 overflow-hidden p-0 sm:max-w-3xl">
        <DialogHeader className="border-b px-6 pt-5 pb-4 pr-12">
          <DialogTitle>{tAccount("breadcrumbAccount")}</DialogTitle>
        </DialogHeader>
        <div className="flex min-h-0 flex-1 overflow-hidden">
          <nav className="w-48 shrink-0 overflow-y-auto border-r py-2">
            {NAV_CATEGORIES.map((category) => (
              <div key={category.id}>
                <p className="px-4 py-1.5 font-medium text-muted-foreground text-xs uppercase tracking-wider">
                  {tAccount(category.labelKey)}
                </p>
                {category.items.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeSection === item.id;
                  const hasSubItems = Boolean(item.subItems?.length);
                  return (
                    <div key={item.id}>
                      <button
                        type="button"
                        onClick={() => setActiveSection(item.id)}
                        className={cn(
                          "flex w-full items-center gap-2 rounded-md px-4 py-1.5 text-sm transition-colors",
                          isActive
                            ? "bg-accent font-medium text-accent-foreground"
                            : "text-muted-foreground hover:bg-accent/50 hover:text-foreground",
                        )}
                      >
                        <Icon className="size-4 shrink-0" />
                        <span className="truncate">{tAccount(item.labelKey)}</span>
                      </button>
                      {hasSubItems &&
                        item.subItems?.map((subItem) => {
                          const SubIcon = subItem.icon;
                          const isSubActive = activeSection === subItem.id;
                          return (
                            <button
                              key={subItem.id}
                              type="button"
                              onClick={() => setActiveSection(subItem.id)}
                              className={cn(
                                "flex w-full items-center gap-2 rounded-md py-1.5 pl-10 pr-4 text-sm transition-colors",
                                isSubActive
                                  ? "bg-accent font-medium text-accent-foreground"
                                  : "text-muted-foreground hover:bg-accent/50 hover:text-foreground",
                              )}
                            >
                              <SubIcon className="size-4 shrink-0" />
                              <span className="truncate">{tAccount(subItem.labelKey)}</span>
                            </button>
                          );
                        })}
                    </div>
                  );
                })}
              </div>
            ))}
          </nav>
          <div className="min-h-0 flex-1 overflow-y-auto p-6">{renderContent()}</div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
