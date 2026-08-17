"use client";

import Link from "next/link";

import { Command, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { useShallow } from "zustand/react/shallow";

import { Button } from "@/components/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { rootUser } from "@/data/users";
import { usePreferencesStore } from "@/stores/preferences/preferences-provider";

import { AccountNav } from "./account-navigation";
import { MobileSidebarClose } from "./mobile-sidebar-close";
import { NavUser } from "./nav-user";
import { SupportCard } from "./support-card";

export function AccountSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const t = useTranslations("account");
  const { sidebarVariant, sidebarCollapsible, isSynced } = usePreferencesStore(
    useShallow((s) => ({
      sidebarVariant: s.values.sidebar_variant,
      sidebarCollapsible: s.values.sidebar_collapsible,
      isSynced: s.isSynced,
    })),
  );

  const variant = isSynced ? sidebarVariant : props.variant;
  const collapsible = isSynced ? sidebarCollapsible : props.collapsible;

  return (
    <Sidebar {...props} variant={variant} collapsible={collapsible}>
      <SidebarHeader>
        <div className="flex items-center gap-1">
          <SidebarMenu className="flex-1">
            <SidebarMenuItem>
              <SidebarMenuButton asChild tooltip={t("breadcrumbAccount")}>
                <Link prefetch={false} href="/dashboard/account">
                  <Command />
                  <span className="font-semibold text-base">{t("breadcrumbAccount")}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
          <Button
            asChild
            aria-label={t("exitAccount")}
            className="group-data-[collapsible=icon]:hidden"
            size="icon-sm"
            variant="ghost"
          >
            <Link prefetch={false} href="/dashboard/default">
              <X />
            </Link>
          </Button>
          <MobileSidebarClose />
        </div>
      </SidebarHeader>
      <SidebarContent>
        <AccountNav />
      </SidebarContent>
      <SidebarFooter>
        <SupportCard />
        <NavUser user={rootUser} />
      </SidebarFooter>
    </Sidebar>
  );
}
