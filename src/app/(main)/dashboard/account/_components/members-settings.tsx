"use client";

import { useState } from "react";

import { Mail, Plus, RefreshCw, Trash2 } from "lucide-react";
import { useTranslations } from "next-intl";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { users } from "@/data/users";
import { getInitials } from "@/lib/utils";

import { SettingsSection } from "./settings-row";

interface PendingInvite {
  readonly id: string;
  readonly email: string;
  readonly role: "admin" | "member";
}

const initialInvites: readonly PendingInvite[] = [
  { id: "1", email: "maria@empresa.com", role: "member" },
  { id: "2", email: "joao@empresa.com", role: "admin" },
];

const initialDomains = ["empresa.com"];

export function MembersSettings() {
  const t = useTranslations("account");
  const [invites, setInvites] = useState<PendingInvite[]>([...initialInvites]);
  const [domains, setDomains] = useState<string[]>([...initialDomains]);
  const [inviteEmail, setInviteEmail] = useState("");
  const [inviteRole, setInviteRole] = useState<"admin" | "member">("member");
  const [domainInput, setDomainInput] = useState("");

  function handleAddInvite() {
    if (!inviteEmail.trim()) {
      return;
    }
    setInvites((current) => [...current, { id: crypto.randomUUID(), email: inviteEmail.trim(), role: inviteRole }]);
    setInviteEmail("");
  }

  function handleAddDomain() {
    const value = domainInput
      .trim()
      .replace(/^https?:\/\//, "")
      .replace(/^www\./, "");
    if (!value) {
      return;
    }
    setDomains((current) => (current.includes(value) ? current : [...current, value]));
    setDomainInput("");
  }

  return (
    <div className="flex flex-col gap-6 pb-8">
      <Tabs defaultValue="team">
        <TabsList variant="line">
          <TabsTrigger value="team">{t("team")}</TabsTrigger>
          <TabsTrigger value="invites">{t("invites")}</TabsTrigger>
        </TabsList>
        <TabsContent value="team" className="mt-4">
          <SettingsSection title={t("team")} description={t("teamDescription")}>
            {users.map((user) => (
              <div
                key={user.id}
                className="flex flex-col gap-3 p-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6"
              >
                <div className="flex min-w-0 items-center gap-3">
                  <Avatar className="size-10 rounded-lg">
                    <AvatarImage src={user.avatar || undefined} alt={user.name} />
                    <AvatarFallback className="rounded-lg">{getInitials(user.name)}</AvatarFallback>
                  </Avatar>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-medium">{user.name}</p>
                    <p className="truncate text-muted-foreground text-xs">{user.email}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge className="border-green-600 text-green-600" variant="outline">
                    {t("active")}
                  </Badge>
                  <Select defaultValue={user.role === "administrator" ? "admin" : "member"}>
                    <SelectTrigger className="w-36">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="admin">{t("roleAdmin")}</SelectItem>
                      <SelectItem value="member">{t("roleMember")}</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button size="icon-sm" variant="ghost" aria-label={t("removeMember")}>
                    <Trash2 aria-hidden="true" />
                  </Button>
                </div>
              </div>
            ))}
          </SettingsSection>
        </TabsContent>
        <TabsContent value="invites" className="mt-4">
          <SettingsSection title={t("inviteTitle")} description={t("inviteDescription")}>
            <div className="flex flex-col gap-3 p-4 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
              <div className="flex flex-wrap items-end gap-2">
                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="invite-email">{t("email")}</Label>
                  <Input
                    id="invite-email"
                    type="email"
                    value={inviteEmail}
                    onChange={(event) => setInviteEmail(event.target.value)}
                    placeholder={t("invitePlaceholder")}
                    className="w-56"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="invite-role">{t("role")}</Label>
                  <Select value={inviteRole} onValueChange={(value) => setInviteRole(value as "admin" | "member")}>
                    <SelectTrigger id="invite-role" className="w-36">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="admin">{t("roleAdmin")}</SelectItem>
                      <SelectItem value="member">{t("roleMember")}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button size="sm" onClick={handleAddInvite}>
                  <Plus aria-hidden="true" />
                  {t("sendInvite")}
                </Button>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground text-xs">
                <Mail aria-hidden="true" className="size-4" />
                {t("inviteLinkHint")}
              </div>
            </div>
          </SettingsSection>

          <SettingsSection title={t("pendingInvites")} description={t("pendingInvitesDescription")}>
            {invites.length === 0 ? (
              <p className="p-4 text-muted-foreground text-sm">{t("noPendingInvites")}</p>
            ) : (
              invites.map((invite) => (
                <div key={invite.id} className="flex flex-col gap-3 p-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex min-w-0 items-center gap-3">
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-muted">
                      <Mail aria-hidden="true" className="size-4" />
                    </span>
                    <div className="min-w-0">
                      <p className="truncate text-sm font-medium">{invite.email}</p>
                      <p className="text-muted-foreground text-xs">
                        {t(invite.role === "admin" ? "roleAdmin" : "roleMember")}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button size="sm" variant="outline">
                      <RefreshCw aria-hidden="true" />
                      {t("resend")}
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => setInvites((current) => current.filter((i) => i.id !== invite.id))}
                    >
                      {t("cancelInvite")}
                    </Button>
                  </div>
                </div>
              ))
            )}
          </SettingsSection>

          <SettingsSection title={t("approvedDomains")} description={t("approvedDomainsDescription")}>
            <div className="flex flex-col gap-3 p-4 sm:flex-row sm:items-end sm:justify-between">
              <div className="flex flex-wrap items-end gap-2">
                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="domain-input" className="sr-only">
                    {t("approvedDomains")}
                  </Label>
                  <Input
                    id="domain-input"
                    value={domainInput}
                    onChange={(event) => setDomainInput(event.target.value)}
                    placeholder={t("domainPlaceholder")}
                    className="w-56 font-mono"
                  />
                </div>
                <Button size="sm" onClick={handleAddDomain}>
                  <Plus aria-hidden="true" />
                  {t("addDomain")}
                </Button>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 p-4 pt-0">
              {domains.map((domain) => (
                <Badge key={domain} variant="outline" className="gap-1.5 py-1 font-mono">
                  {domain}
                  <button
                    type="button"
                    aria-label={`${t("removeDomain")} ${domain}`}
                    onClick={() => setDomains((current) => current.filter((d) => d !== domain))}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    <Trash2 aria-hidden="true" className="size-3" />
                  </button>
                </Badge>
              ))}
            </div>
          </SettingsSection>
        </TabsContent>
      </Tabs>
    </div>
  );
}
