"use client";

import { type ChangeEvent, useRef, useState } from "react";

import { LogOut, type LucideIcon, MonitorSmartphone, Smartphone, Trash2, Upload } from "lucide-react";
import { useTranslations } from "next-intl";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
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
    <div className="flex flex-col gap-4 pb-8">
      <Card>
        <CardHeader>
          <CardTitle>{t("profilePicture")}</CardTitle>
          <CardDescription>{t("profilePictureDescription")}</CardDescription>
        </CardHeader>
        <CardContent className="flex items-center gap-4">
          <Avatar className="size-20 rounded-full">
            <AvatarImage src={avatar || undefined} alt={t("profilePicture")} />
            <AvatarFallback className="rounded-full text-lg">{getInitials(rootUser.name)}</AvatarFallback>
          </Avatar>
          <div className="flex flex-wrap gap-2">
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
          </div>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            className="hidden"
            aria-hidden="true"
            tabIndex={-1}
            onChange={handlePictureChange}
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>{t("name")}</CardTitle>
          <CardDescription>{t("nameDescription")}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="flex flex-col gap-2">
              <Label htmlFor="profile-first-name">{t("firstName")}</Label>
              <Input id="profile-first-name" value={firstName} onChange={(event) => setFirstName(event.target.value)} />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="profile-last-name">{t("lastName")}</Label>
              <Input id="profile-last-name" value={lastName} onChange={(event) => setLastName(event.target.value)} />
            </div>
          </div>
          <div className="mt-4 flex justify-end">
            <Button size="sm">{t("save")}</Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>{t("email")}</CardTitle>
          <CardDescription>{t("emailDescription")}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-2">
            <Label htmlFor="profile-email">{t("email")}</Label>
            <Input id="profile-email" type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
          </div>
          <div className="mt-4 flex justify-end">
            <Button size="sm">{t("save")}</Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>{t("twoFactor")}</CardTitle>
          <CardDescription>{t("twoFactorDescription")}</CardDescription>
        </CardHeader>
        <CardContent className="flex items-center justify-between gap-4">
          <Badge className={cn(twoFactorEnabled && "border-green-600 text-green-600")} variant="outline">
            {twoFactorEnabled ? t("twoFactorEnabled") : t("twoFactorDisabled")}
          </Badge>
          <Switch checked={twoFactorEnabled} onCheckedChange={setTwoFactorEnabled} aria-label={t("twoFactor")} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>{t("setPassword")}</CardTitle>
          <CardDescription>{t("setPasswordDescription")}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="flex flex-col gap-2">
              <Label htmlFor="profile-new-password">{t("newPassword")}</Label>
              <Input id="profile-new-password" type="password" autoComplete="new-password" />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="profile-confirm-password">{t("confirmPassword")}</Label>
              <Input id="profile-confirm-password" type="password" autoComplete="new-password" />
            </div>
          </div>
          <div className="mt-4 flex justify-end">
            <Button size="sm">{t("save")}</Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>{t("devices")}</CardTitle>
          <CardDescription>{t("devicesDescription")}</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-3">
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
        </CardContent>
      </Card>

      <Card className="border-destructive/40">
        <CardHeader>
          <CardTitle className="text-destructive">{t("dangerZone")}</CardTitle>
          <CardDescription>{t("dangerZoneDescription")}</CardDescription>
        </CardHeader>
        <CardContent>
          <Button variant="destructive" size="sm">
            <Trash2 aria-hidden="true" />
            {t("deleteAccount")}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
