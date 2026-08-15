"use client";
import type { ColumnDef } from "@tanstack/react-table";
import { MoreVertical } from "lucide-react";
import type { useTranslations } from "next-intl";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import type { DataTableFeatures } from "@/lib/data-table-features";

import type { Role } from "./data";

type Translator = ReturnType<typeof useTranslations>;

export function createRolesColumns(t: Translator): ColumnDef<DataTableFeatures, Role>[] {
  return [
    {
      id: "group",
      accessorKey: "group",
      filterFn: "equalsString",
      enableHiding: true,
    },
    {
      id: "search",
      accessorFn: (row) => [row.role, row.owner, ...row.permissionSets].join(" "),
      filterFn: "includesString",
      enableHiding: true,
    },
    {
      id: "role",
      accessorKey: "role",
      header: t("roles.columnRole"),
      size: 180,
      minSize: 180,
      cell: ({ row }) => <span className="font-medium text-sm">{row.original.role}</span>,
    },
    {
      id: "accessLevel",
      accessorKey: "accessLevel",
      header: t("roles.columnAccessLevel"),
      size: 120,
      cell: ({ row }) => (
        <Badge className="rounded-sm" variant="outline">
          {row.original.accessLevel}
        </Badge>
      ),
    },
    {
      id: "users",
      accessorKey: "users",
      header: t("roles.columnUsers"),
      size: 70,
      cell: ({ row }) => <span className="text-sm">{row.original.users}</span>,
    },
    {
      id: "permissionSets",
      accessorFn: (row) => row.permissionSets.join(" "),
      header: t("roles.columnPermissionSets"),
      size: 310,
      cell: ({ row }) => (
        <div className="flex flex-wrap items-center justify-start gap-2">
          {row.original.permissionSets.slice(0, 3).map((set) => (
            <Badge className="rounded-sm" variant="outline" key={set}>
              {set}
            </Badge>
          ))}
          {row.original.permissionSets.length > 3 ? (
            <span className="text-sm tabular-nums">+{row.original.permissionSets.length - 3}</span>
          ) : null}
        </div>
      ),
    },
    {
      id: "lastReview",
      accessorKey: "lastReview",
      header: t("roles.columnLastReview"),
      size: 120,
      cell: ({ row }) => <span className="text-sm">{row.original.lastReview}</span>,
    },
    {
      id: "owner",
      accessorKey: "owner",
      header: t("roles.columnOwner"),
      size: 110,
      filterFn: "equalsString",
      cell: ({ row }) => <span className="text-sm">{row.original.owner}</span>,
    },
    {
      id: "status",
      accessorKey: "status",
      header: t("roles.columnStatus"),
      size: 130,
      filterFn: "equalsString",
      cell: ({ row }) => (
        <Badge className="rounded-sm" variant="outline">
          {row.original.status}
        </Badge>
      ),
    },
    {
      id: "actions",
      header: "",
      size: 70,
      cell: ({ row }) => {
        const isSystemRole = row.original.group === "System roles";
        const needsReview = row.original.status === "Needs review";

        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon-sm">
                <MoreVertical />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-48" align="end">
              <DropdownMenuGroup>
                {needsReview ? <DropdownMenuItem>{t("roles.actionReviewChanges")}</DropdownMenuItem> : null}
                <DropdownMenuItem>{t("roles.actionViewDetails")}</DropdownMenuItem>
                <DropdownMenuItem disabled={isSystemRole}>{t("roles.actionEditRole")}</DropdownMenuItem>
                <DropdownMenuItem disabled={isSystemRole}>{t("roles.actionDuplicateRole")}</DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>{t("roles.actionReviewPermissions")}</DropdownMenuItem>
                <DropdownMenuItem>{t("roles.actionManageMembers")}</DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem disabled={isSystemRole} variant="destructive">
                  {t("roles.actionArchiveRole")}
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        );
      },
      enableColumnFilter: false,
    },
  ];
}
