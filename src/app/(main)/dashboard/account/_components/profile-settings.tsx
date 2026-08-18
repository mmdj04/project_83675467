"use client";

import { type ChangeEvent, useRef, useState } from "react";

import { LogOut, type LucideIcon, MonitorSmartphone, Smartphone, Trash2, Upload } from "lucide-react";
import { useTranslations } from "next-intl";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { rootUser } from "@/data/users";
import { cn, getInitials } from "@/lib/utils";

interface Device {
  readonly id: string;
  readonly name: string;
  readonly location: string;
  readonly lastActive: string;
  readonly icon: LucideIcon;
  readonly current: boolean;
}

const devices: readonly Device[] = [
  {
    id: "chrome",
    name: "Chrome on Windows",
    location: "São Paulo, Brazil",
    lastActive: "2 minutes ago",
    icon: MonitorSmartphone,
    current: true,
  },
  {
    id: "iphone",
    name: "Safari on iPhone",
    location: "Rio de Janeiro, Brazil",
    lastActive: "Yesterday",
    icon: Smartphone,
    current: false,
  },
];

function SettingRow({
  title,
  description,
  children,
}: {
  readonly title: string;
  readonly description: string;
  readonly children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-3 p-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
      <div className="min-w-0">
        <h3 className="font-medium text-sm">{title}</h3>
        <p className="mt-0.5 text-muted-foreground text-xs">{description}</p>
      </div>
      <div className="flex flex-wrap items-center gap-2">{children}</div>
    </div>
  );
}

export function ProfileSettings() {
  const t = useTranslations("account");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [firstName, setFirstName] = useState(rootUser.name.split(" ")[0]);
  const [lastName, setLastName] = useState(rootUser.name.split(" ").slice(1).join(" "));
  const [email, setEmail] = useState(rootUser.email);
  const [avatar, setAvatar] = useState(rootUser.avatar);
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);

  function handlePictureChange(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (file) {
      setAvatar(URL.createObjectURL(file));
    }
  }

  return (
    <div className="flex flex-col divide-y rounded-xl border">
      <SettingRow title={t("profilePicture")} description={t("profilePictureDescription")}>
        <Avatar className="size-12 rounded-full">
          <AvatarImage src={avatar || undefined} alt={t("profilePicture")} />
          <AvatarFallback className="rounded-full text-sm">{getInitials(rootUser.name)}</AvatarFallback>
        </Avatar>
        <Button type="button" onClick={() => fileInputRef.current?.click()} size="sm" variant="outline">
          <Upload aria-hidden="true" />
          {t("uploadPicture")}
        </Button>
        <Button
          type="button"
          onClick={() => setAvatar("")}
          size="sm"
          variant="ghost"
          className="text-destructive hover:text-destructive"
        >
          {t("removePicture")}
        </Button>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          className="hidden"
          aria-hidden="true"
          tabIndex={-1}
          onChange={handlePictureChange}
        />
      </SettingRow>

      <SettingRow title={t("name")} description={t("nameDescription")}>
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="profile-first-name">{t("firstName")}</Label>
          <Input id="profile-first-name" value={firstName} onChange={(event) => setFirstName(event.target.value)} />
        </div>
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="profile-last-name">{t("lastName")}</Label>
          <Input id="profile-last-name" value={lastName} onChange={(event) => setLastName(event.target.value)} />
        </div>
        <Button size="sm">{t("save")}</Button>
      </SettingRow>

      <SettingRow title={t("email")} description={t("emailDescription")}>
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="profile-email" className="sr-only">
            {t("email")}
          </Label>
          <Input id="profile-email" type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
        </div>
        <Button size="sm">{t("save")}</Button>
      </SettingRow>

      <SettingRow title={t("twoFactor")} description={t("twoFactorDescription")}>
        <Badge className={cn(twoFactorEnabled && "border-green-600 text-green-600")} variant="outline">
          {twoFactorEnabled ? t("twoFactorEnabled") : t("twoFactorDisabled")}
        </Badge>
        <Switch checked={twoFactorEnabled} onCheckedChange={setTwoFactorEnabled} aria-label={t("twoFactor")} />
      </SettingRow>

      <SettingRow title={t("setPassword")} description={t("setPasswordDescription")}>
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="profile-new-password">{t("newPassword")}</Label>
          <Input id="profile-new-password" type="password" autoComplete="new-password" />
        </div>
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="profile-confirm-password">{t("confirmPassword")}</Label>
          <Input id="profile-confirm-password" type="password" autoComplete="new-password" />
        </div>
        <Button size="sm">{t("save")}</Button>
      </SettingRow>

      <div className="flex flex-col gap-3 p-4">
        <div className="min-w-0">
          <h3 className="font-medium text-sm">{t("devices")}</h3>
          <p className="mt-0.5 text-muted-foreground text-xs">{t("devicesDescription")}</p>
        </div>
        <div className="flex flex-col gap-2">
          {devices.map((device) => {
            const Icon = device.icon;
            return (
              <div key={device.id} className="flex items-center justify-between gap-3 rounded-lg border p-3">
                <div className="flex min-w-0 items-center gap-3">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-muted">
                    <Icon aria-hidden="true" className="size-4" />
                  </span>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-medium">{device.name}</p>
                    <p className="truncate text-muted-foreground text-xs">
                      {device.location} · {device.lastActive}
                    </p>
                  </div>
                </div>
                {device.current ? (
                  <Badge className="border-green-600 text-green-600" variant="outline">
                    {t("activeNow")}
                  </Badge>
                ) : (
                  <Button size="icon-sm" variant="ghost" aria-label={t("signOut")}>
                    <LogOut aria-hidden="true" />
                  </Button>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <SettingRow title={t("dangerZone")} description={t("dangerZoneDescription")}>
        <Button variant="destructive" size="sm" className="text-destructive-foreground">
          <Trash2 aria-hidden="true" />
          {t("deleteAccount")}
        </Button>
      </SettingRow>
    </div>
  );
}
