"use client";

import { BadgeCheck } from "lucide-react";
import { useTranslations } from "next-intl";

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { ScrollArea } from "@/components/ui/scroll-area";

import { ProfileSettings } from "../../account/_components/profile-settings";

export function AccountDialog() {
  const t = useTranslations("shell");
  const tAccount = useTranslations("account");

  return (
    <Dialog>
      <DialogTrigger asChild>
        <DropdownMenuItem onSelect={(event) => event.preventDefault()}>
          <BadgeCheck />
          {t("account")}
        </DropdownMenuItem>
      </DialogTrigger>
      <DialogContent className="flex max-h-[calc(100dvh-4rem)] flex-col gap-0 overflow-hidden p-0 sm:max-w-2xl">
        <DialogHeader className="border-b px-6 pt-5 pb-4 pr-12">
          <DialogTitle>{tAccount("breadcrumbAccount")}</DialogTitle>
        </DialogHeader>
        <ScrollArea className="min-h-0 flex-1 px-6 py-4">
          <ProfileSettings />
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
