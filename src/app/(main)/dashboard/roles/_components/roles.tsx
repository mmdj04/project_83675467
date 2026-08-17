"use client";
import { useMemo, useState } from "react";

import { type ColumnFiltersState, type PaginationState, useTable } from "@tanstack/react-table";
import { AlertTriangle, ChevronRight, FileUp, Search } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

import { Alert, AlertAction, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { dataTableFeatures } from "@/lib/data-table-features";

import { createRolesColumns } from "./roles-table/columns";
import type { Role } from "./roles-table/data";
import { RolesTable } from "./roles-table/table";

function getRoleTypeFilter(groupFilter: string) {
  if (groupFilter === "System roles") {
    return "System";
  }

  if (groupFilter === "Custom roles") {
    return "Custom";
  }

  return "All";
}

function getRoleGroupFilterValue(typeFilter: string) {
  if (typeFilter === "System") {
    return "System roles";
  }

  if (typeFilter === "Custom") {
    return "Custom roles";
  }

  return undefined;
}

export function Roles({ roles }: { roles: Role[] }) {
  const t = useTranslations();
  const locale = useLocale();

  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 12,
  });

  const columns = useMemo(() => createRolesColumns(t, locale), [t, locale]);

  const table = useTable({
    features: dataTableFeatures,
    data: roles,
    columns,
    defaultColumn: {
      size: 140,
      minSize: 80,
      maxSize: 420,
    },
    state: { columnFilters, pagination },
    onColumnFiltersChange: setColumnFilters,
    onPaginationChange: setPagination,
    autoResetPageIndex: false,
    initialState: {
      columnVisibility: { group: false, search: false },
    },
  });

  const search = (table.getColumn("search")?.getFilterValue() as string | undefined) ?? "";
  const groupFilter = (table.getColumn("group")?.getFilterValue() as string | undefined) ?? "";
  const typeFilter = getRoleTypeFilter(groupFilter);
  const ownerFilter = (table.getColumn("owner")?.getFilterValue() as string | undefined) ?? "All";
  const statusFilter = (table.getColumn("status")?.getFilterValue() as string | undefined) ?? "All";

  return (
    <div className="flex h-full flex-col gap-4">
      <div className="flex flex-col items-start gap-4 sm:flex-row sm:justify-between">
        <div className="flex flex-col gap-1">
          <h1 className="text-3xl tracking-tight">{t("roles.title")}</h1>
          <p className="text-muted-foreground text-sm">{t("roles.description")}</p>
        </div>

        <div className="flex items-center gap-2">
          <Button size="sm" variant="outline">
            <FileUp data-icon="inline-start" />
            {t("roles.importJson")}
          </Button>
          <Button size="sm">{t("roles.createRole")}</Button>
        </div>
      </div>

      <Tabs className="h-full gap-4" defaultValue="roles">
        <div className="scrollbar-thin overflow-x-auto [scrollbar-color:var(--border)_transparent] [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-border [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar]:h-1">
          <TabsList
            variant="line"
            className="w-full justify-start gap-2 border-b ps-0 *:data-[slot=tabs-trigger]:flex-none"
          >
            <TabsTrigger value="roles">{t("roles.tabRoles")}</TabsTrigger>
            <TabsTrigger value="permission-sets">{t("roles.tabPermissionSets")}</TabsTrigger>
            <TabsTrigger value="access-reviews">{t("roles.tabAccessReviews")}</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="roles">
          <div className="flex flex-col gap-4">
            <Alert className="border-amber-200 bg-amber-50 text-amber-900 dark:border-amber-900 dark:bg-amber-950 dark:text-amber-50">
              <AlertTriangle className="size-4" />
              <AlertTitle>{t("roles.alertTitle")}</AlertTitle>
              <AlertDescription>{t("roles.alertDescription")}</AlertDescription>
              <AlertAction>
                <Button size="sm" variant="link">
                  {t("roles.reviewChanges")}
                  <ChevronRight data-icon="inline-end" />
                </Button>
              </AlertAction>
            </Alert>

            <div className="overflow-hidden rounded-xl border border-border/70 bg-background">
              <div className="flex flex-col gap-4 px-4 py-4">
                <InputGroup className="h-7 w-full rounded-md sm:w-82">
                  <InputGroupAddon>
                    <Search />
                  </InputGroupAddon>
                  <InputGroupInput
                    className="h-7"
                    placeholder={t("roles.searchPlaceholder")}
                    value={search}
                    onChange={(e) => {
                      table.getColumn("search")?.setFilterValue(e.target.value || undefined);
                      table.setPageIndex(0);
                    }}
                  />
                </InputGroup>

                <div className="flex flex-wrap items-center gap-2">
                  <Select
                    value={typeFilter}
                    onValueChange={(v) => {
                      table.getColumn("group")?.setFilterValue(getRoleGroupFilterValue(v));
                      table.setPageIndex(0);
                    }}
                  >
                    <SelectTrigger size="sm">
                      <span className="text-muted-foreground">{t("roles.typeLabel")}</span>
                      <SelectValue placeholder={t("roles.all")} />
                    </SelectTrigger>
                    <SelectContent position="popper" align="start">
                      <SelectGroup>
                        <SelectItem value="All">{t("roles.all")}</SelectItem>
                        <SelectItem value="System">{t("roles.system")}</SelectItem>
                        <SelectItem value="Custom">{t("roles.custom")}</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>

                  <Select
                    value={ownerFilter}
                    onValueChange={(v) => {
                      table.getColumn("owner")?.setFilterValue(v === "All" ? undefined : v);
                      table.setPageIndex(0);
                    }}
                  >
                    <SelectTrigger size="sm">
                      <span className="text-muted-foreground">{t("roles.ownerLabel")}</span>
                      <SelectValue placeholder={t("roles.all")} />
                    </SelectTrigger>
                    <SelectContent position="popper" align="start">
                      <SelectGroup>
                        <SelectItem value="All">{t("roles.all")}</SelectItem>
                        <SelectItem value="System">{t("roles.system")}</SelectItem>
                        <SelectItem value="Jane Doe">Jane Doe</SelectItem>
                        <SelectItem value="Alex Kim">Alex Kim</SelectItem>
                        <SelectItem value="Chris Lee">Chris Lee</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>

                  <Select
                    value={statusFilter}
                    onValueChange={(v) => {
                      table.getColumn("status")?.setFilterValue(v === "All" ? undefined : v);
                      table.setPageIndex(0);
                    }}
                  >
                    <SelectTrigger size="sm">
                      <span className="text-muted-foreground">{t("roles.statusLabel")}</span>
                      <SelectValue placeholder={t("roles.all")} />
                    </SelectTrigger>
                    <SelectContent position="popper" align="start">
                      <SelectGroup>
                        <SelectItem value="All">{t("roles.all")}</SelectItem>
                        <SelectItem value="Active">{t("roles.active")}</SelectItem>
                        <SelectItem value="Needs review">{t("roles.needsReview")}</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <RolesTable table={table} />
            </div>
          </div>
        </TabsContent>
        <TabsContent value="permission-sets">
          <div className="flex h-full items-center justify-center rounded-md border border-dashed text-muted-foreground text-sm">
            {t("roles.permissionSetsSoon")}
          </div>
        </TabsContent>
        <TabsContent value="access-reviews">
          <div className="flex h-full items-center justify-center rounded-md border border-dashed text-muted-foreground text-sm">
            {t("roles.accessReviewsSoon")}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
