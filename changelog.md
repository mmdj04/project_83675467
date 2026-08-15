# Changelog

Histórico do projeto por mês — cada mês resume todos os commits como uma única atualização (novidades, correções, arquivos agregados e contribuidores).

## 2026-08

**Resumo**: 36 commits • 39 arquivos • +6.474 −2.543 • 30 manutenção, 2 merges, 4 novidades

### Novidades
- Added **profile screen**
- Migrated **dnd kit to** latest implementation and packages
- Migrated **data table to** use tanstack table v9
- Added **patient monitoring dashboard**

### Arquivos principais
- package-lock.json (modificado, +749 −611)
- src/app/(main)/dashboard/profile/_components/profile-overview.tsx (adicionado, +592 −404)
- src/app/(main)/dashboard/patient-monitoring/_components/patient-detail.tsx (adicionado, +446 −200)
- src/app/(main)/dashboard/patient-monitoring/_components/data.ts (adicionado, +630 −10)
- src/app/(main)/dashboard/profile/_components/profile-data.ts (adicionado, +356 −82)
- src/app/(main)/dashboard/patient-monitoring/_components/patient-monitoring.tsx (adicionado, +357 −69)
- src/app/(main)/dashboard/profile/_components/profile-employment-details.tsx (adicionado, +311 −65)
- src/components/ui/questionnaire.tsx (adicionado, +327 −3)
- src/app/(main)/dashboard/patient-monitoring/_components/vital-trend-chart.tsx (adicionado e removido, +157 −157)
- src/app/(main)/dashboard/patient-monitoring/_components/patient-trends.tsx (adicionado, +295 −9)
- src/app/(main)/dashboard/patient-monitoring/_components/vital-waveform.tsx (adicionado, +178 −106)
- src/app/(main)/dashboard/profile/_components/profile-documents.tsx (adicionado, +203 −79)
- src/app/(main)/dashboard/profile/_components/profile-details.tsx (adicionado e removido, +129 −129)
- src/app/(main)/dashboard/profile/_components/profile-header.tsx (adicionado, +239 −11)
- src/app/(main)/dashboard/profile/_components/profile-personal-details.tsx (adicionado, +213 −33)
- +24 outros arquivos

### Contribuidores
- @arhamkhnz

---

## 2026-07

**Resumo**: 38 commits • 44 arquivos • +10.925 −9.515 • 30 manutenção, 2 merges, 2 novidades, 2 refatorações, 1 outros, 1 documentação

### Novidades
- Added **file manager dashboard**
- Added **project versions dropdown** to dashboard header

### Arquivos principais
- package-lock.json (modificado, +9.130 −8.884)
- src/app/(main)/dashboard/file-manager/_components/data.ts (adicionado, +418 −0)
- src/lib/preferences/preferences-config.ts (modificado, +116 −72)
- src/app/(main)/dashboard/_components/sidebar/layout-controls.tsx (modificado, +63 −123)
- src/app/(main)/dashboard/file-manager/_components/file-list-view.tsx (adicionado, +176 −0)
- src/app/(main)/dashboard/file-manager/_components/file-manager-toolbar.tsx (adicionado, +172 −0)
- src/app/(main)/dashboard/file-manager/_components/folders-section.tsx (adicionado, +162 −0)
- src/app/(main)/dashboard/file-manager/page.tsx (adicionado, +133 −5)
- src/app/(main)/dashboard/file-manager/_components/file-grid-view.tsx (adicionado, +134 −0)
- package.json (modificado, +54 −53)
- src/app/(main)/dashboard/file-manager/_components/file-actions.tsx (adicionado, +106 −0)
- src/app/(main)/dashboard/_components/sidebar/nav-documents.tsx (removido, +0 −83)
- src/app/(main)/dashboard/_components/github-repositories-menu.tsx (adicionado, +59 −0)
- src/app/(main)/dashboard/_components/sidebar/app-sidebar.tsx (modificado, +7 −46)
- src/lib/preferences/layout-utils.ts (removido, +0 −48)
- +29 outros arquivos

### Contribuidores
- @arhamkhnz

---

## 2026-06

**Resumo**: 70 commits • 115 arquivos • +29.811 −16.791 • 6 refatorações, 31 manutenção, 2 documentação, 9 novidades, 11 merges, 1 correções, 10 outros

### Novidades
- Added **new shadcn components** & update deps
- Added **tasks**
- Improved **infrastructure health data**
- Refined **infrastructure dashboard**
- Added **infrastructure dashboard**
- Added **full calendar**

### Correções
- Polished **collapsed sidebar navigation**

### Arquivos principais
- package-lock.json (modificado, +6.371 −11.145)
- src/app/(main)/chat/_components/data.ts (adicionado, +2.571 −251)
- src/app/(main)/dashboard/calendar/_components/event-calendar-views.tsx (adicionado e removido, +1.056 −528)
- src/app/(main)/dashboard/kanban/_components/data.ts (adicionado, +847 −233)
- src/app/(main)/chat/_components/chat-sidebar.tsx (adicionado, +898 −128)
- src/app/(main)/dashboard/logistics/_components/shipment-data.ts (adicionado, +1.001 −0)
- src/app/(main)/dashboard/calendar/page.tsx (adicionado, +477 −470)
- src/app/(main)/dashboard/tasks/_components/data.ts (adicionado, +778 −0)
- src/app/(main)/dashboard/tasks/_components/data.tsx (adicionado, +778 −0)
- src/app/(main)/chat/_components/chat-profile-details.tsx (adicionado, +760 −0)
- src/app/(main)/chat/_components/chat-conversation-list.tsx (adicionado, +705 −12)
- src/app/(main)/dashboard/kanban/_components/kanban.tsx (adicionado, +603 −77)
- src/app/(main)/chat/_components/chat-thread.tsx (adicionado, +578 −77)
- src/app/(external)/test-chat/page.tsx (removido, +0 −654)
- src/app/(main)/dashboard/infrastructure/_components/project-environments.tsx (adicionado, +594 −11)
- +100 outros arquivos

### Contribuidores
- @arhamkhnz

---

## 2026-05

**Resumo**: 94 commits • 105 arquivos • +36.611 −13.281 • 43 manutenção, 12 merges, 20 novidades, 18 outros, 1 documentação

### Novidades
- Added **initial chat layouts**
- Added **initial kanban layout**
- Initial users page layout
- Added **logistics dashboard**
- Added **roles route**
- Added **users route**

### Arquivos principais
- public/features.json (adicionado e removido, +8.028 −8.028)
- src/app/(main)/dashboard/logistics/_components/shipment-data.ts (adicionado, +4.374 −26)
- package-lock.json (modificado, +1.604 −1.164)
- src/app/(main)/dashboard/mail/_components/data.tsx (adicionado, +1.248 −130)
- src/app/(main)/dashboard/logistics/_components/shipment-details.tsx (adicionado, +1.221 −71)
- src/styles/flag-icons/flags.css (adicionado, +1.068 −0)
- src/app/(main)/dashboard/mail/_components/mail-sidebar.tsx (adicionado e removido, +527 −527)
- src/app/(main)/dashboard/users/_components/data.tsx (adicionado, +996 −0)
- src/app/(main)/dashboard/logistics/_components/shipment-route-map.tsx (adicionado, +883 −3)
- src/app/(main)/dashboard/users/_components/users-table.tsx (adicionado, +684 −180)
- src/app/(main)/dashboard/mail/_components/mail.tsx (adicionado e removido, +402 −407)
- src/app/(main)/dashboard/logistics/_components/shipment-list.tsx (adicionado, +743 −3)
- src/app/(main)/dashboard/kanban/page.tsx (adicionado, +726 −1)
- src/app/(main)/dashboard/logistics/_components/data.ts (adicionado, +688 −31)
- src/app/(main)/dashboard/users/_components/users-columns.tsx (adicionado, +665 −2)
- +90 outros arquivos

### Contribuidores
- @arhamkhnz

---

## 2026-04

**Resumo**: 68 commits • 93 arquivos • +9.306 −4.718 • 18 novidades, 21 manutenção, 5 merges, 9 correções, 10 outros, 4 documentação, 1 estilo

### Novidades
- Refined **analytics v2 controls**
- Added **analytics v2 dashboard**
- Refactored **wallet component with** crypto assets and physical vault info, rename components for better resonance
- Refactored **upcoming transactions UI**
- Added **search at sidebar**
- Moved **crm v2 to** crm and legacy crm to crm-v1

### Correções
- Added **use client directive** to upcoming transactions component
- Added **missing tabs content** import and sort classes
- Renamed **upcoming transactions component** to remove table suffix and fix import
- Replaced custom search with built in search from cmdk

### Arquivos principais
- package-lock.json (modificado, +1.401 −1.623)
- src/app/(main)/dashboard/default-v2/_components/data.json (adicionado e removido, +632 −632)
- src/app/(main)/dashboard/(legacy)/default-v1/_components/data.json (adicionado, +1.228 −0)
- src/app/(main)/dashboard/crm-v2/_components/opportunities-table/data.json (adicionado, +1.058 −0)
- src/app/(main)/dashboard/default-v2/_components/performance-overview.tsx (adicionado, +667 −328)
- src/app/(main)/dashboard/default-v2/_components/proposal-sections-table/columns.tsx (adicionado e removido, +417 −417)
- src/app/(main)/dashboard/_components/sidebar/search-dialog.tsx (modificado, +341 −207)
- src/app/(main)/dashboard/crm-v2/_components/opportunities-section.tsx (adicionado, +348 −89)
- src/app/(main)/dashboard/default-v2/_components/proposal-sections-table/table.tsx (removido, +0 −323)
- src/app/(main)/dashboard/finance-v2/_components/overview-kpis.tsx (adicionado, +173 −109)
- src/app/(main)/dashboard/finance-v2/page.tsx (adicionado, +182 −98)
- src/app/(main)/dashboard/finance-v2/_components/expense-recap.tsx (adicionado e removido, +137 −137)
- src/app/(main)/dashboard/default-v2/_components/overview-panels.tsx (adicionado e removido, +135 −135)
- src/app/(main)/dashboard/analytics-v2/_components/analytics-kpi-strip.tsx (adicionado, +203 −61)
- src/app/(main)/dashboard/default-v2/_components/customer-flow-table/columns.tsx (adicionado e removido, +103 −103)
- +78 outros arquivos

### Contribuidores
- @arhamkhnz
- @Muhammadrizo14

---

## 2026-03

**Resumo**: 29 commits • 62 arquivos • +8.798 −3.236 • 11 manutenção, 1 estilo, 3 refatorações, 6 novidades, 6 correções, 2 merges

### Novidades
- Added **github shortcut**
- Added **support footer card**
- Switch shadcn base color to mist
- Updated **shadcn style to** radix-vega
- Expanded **font selector and** add Geist Pixel Square
- Implemented **analytics dashboard redesign**

### Correções
- Group dashboard select items
- Refined **support card layout**
- Align layout control selects
- Minor dashboard and command palette fixes

### Arquivos principais
- package-lock.json (modificado, +4.654 −1.202)
- src/app/(main)/dashboard/analytics/_components/analytics.data.ts (adicionado e removido, +696 −696)
- src/app/(main)/dashboard/analytics/_components/analytics-overview.tsx (adicionado, +573 −183)
- src/app/(main)/dashboard/analytics/_components/analytics-actions-risk-ledger.tsx (adicionado, +344 −15)
- src/app/(main)/dashboard/analytics/_components/analytics-revenue-risk-ledger-card.tsx (adicionado, +329 −0)
- src/app/(main)/dashboard/analytics/_components/analytics-drivers-forecast-target.tsx (adicionado, +214 −74)
- src/app/(main)/dashboard/crm/_components/recent-leads-table/table.tsx (adicionado, +235 −0)
- src/app/(main)/dashboard/default/_components/proposal-sections-table/columns.tsx (renomeado, +223 −5)
- src/app/(main)/dashboard/default/_components/columns.tsx (removido, +5 −194)
- src/app/globals.css (modificado, +103 −84)
- src/components/ui/form.tsx (removido, +0 −167)
- src/lib/fonts/registry.ts (modificado, +105 −51)
- src/app/(main)/dashboard/analytics/_components/analytics-actions-manager-queue.tsx (adicionado, +146 −7)
- src/app/(main)/dashboard/analytics/_components/analytics-forecast-vs-target-card.tsx (adicionado, +144 −0)
- src/app/(main)/dashboard/analytics/_components/analytics-manager-action-queue-card.tsx (adicionado, +139 −0)
- +47 outros arquivos

### Contribuidores
- @arhamkhnz

---

## 2026-02

**Resumo**: 3 commits • 9 arquivos • +154 −87 • 3 manutenção

### Arquivos principais
- package-lock.json (modificado, +132 −66)
- package.json (modificado, +10 −9)
- src/components/ui/badge.tsx (modificado, +2 −2)
- src/components/ui/breadcrumb.tsx (modificado, +2 −2)
- src/components/ui/button-group.tsx (modificado, +2 −2)
- src/components/ui/button.tsx (modificado, +2 −2)
- src/app/(main)/dashboard/analytics/_components/analytics-overview.tsx (modificado, +2 −2)
- src/components/ui/accordion.tsx (modificado, +1 −1)
- src/components/ui/checkbox.tsx (modificado, +1 −1)

### Contribuidores
- @arhamkhnz

---

## 2026-01

**Resumo**: 33 commits • 38 arquivos • +5.221 −4.429 • 21 manutenção, 6 novidades, 4 merges, 1 correções, 1 outros

### Novidades
- Added **revenue and risk** summary
- Added **overview controls**
- Automatically set resolvedThemeMode in setThemeMode
- Added **system theme mode**
- Added **restore defaults button**
- Added **dynamic font preference**

### Correções
- Cycle through light/dark/system in theme-switcher

### Arquivos principais
- package-lock.json (modificado, +3.155 −3.155)
- src/lib/fonts/registry.ts (adicionado, +365 −67)
- src/app/(main)/dashboard/analytics/_components/analytics-overview.tsx (adicionado, +310 −14)
- src/app/globals.css (modificado, +193 −109)
- src/app/(main)/dashboard/finance/_components/cash-flow-overview.tsx (adicionado, +211 −21)
- src/app/(main)/dashboard/finance/_components/financial-overview.tsx (removido, +0 −231)
- src/app/(main)/dashboard/finance/_components/card-overview.tsx (adicionado, +176 −24)
- src/stores/preferences/preferences-provider.tsx (modificado, +139 −54)
- src/app/(main)/dashboard/finance/_components/account-overview.tsx (removido, +0 −180)
- src/app/(main)/dashboard/finance/_components/currency-exchange.tsx (removido, +0 −162)
- src/app/(main)/dashboard/finance/_components/expense-summary.tsx (removido, +0 −132)
- src/app/(main)/dashboard/_components/sidebar/layout-controls.tsx (modificado, +111 −19)
- src/lib/preferences/theme-utils.ts (modificado, +81 −19)
- src/app/(main)/dashboard/_components/sidebar/theme-switcher.tsx (modificado, +54 −35)
- src/components/ui/alert-dialog.tsx (modificado, +61 −22)
- +23 outros arquivos

### Contribuidores
- @arhamkhnz
- @likui628

---

## 2025-12

**Resumo**: 50 commits • 62 arquivos • +7.176 −16.004 • 10 novidades, 29 manutenção, 7 merges, 2 outros, 1 estilo, 1 correções

### Novidades
- Complete remaining dashboard sections
- Added **KPI row**
- Biome init
- Improved **layout prefs handling** for instant sidebar render
- Added **“use no memo”** to all table components to prevent React Compiler memoization and fix state issues
- Added **window prefs bridge** + temporary flicker fix in provider

### Correções
- Align theme boot defaults and use shallow sidebar selector

### Arquivos principais
- package-lock.json (modificado, +5.303 −14.564)
- src/app/(main)/dashboard/_components/sidebar/layout-controls.tsx (modificado, +194 −173)
- eslint.config.mjs (removido, +0 −320)
- biome.json (adicionado, +249 −33)
- src/app/(main)/dashboard/finance/_components/account-overview.tsx (modificado, +105 −137)
- src/app/(main)/dashboard/finance/_components/expense-summary.tsx (modificado, +76 −108)
- src/stores/preferences/preferences-provider.tsx (modificado, +87 −89)
- src/lib/preferences/preferences-config.ts (renomeado, +122 −46)
- package.json (modificado, +57 −82)
- src/app/(main)/dashboard/finance/_components/recent-transactions.tsx (adicionado, +83 −40)
- src/scripts/theme-boot.tsx (modificado, +92 −31)
- src/app/(main)/dashboard/layout.tsx (modificado, +30 −72)
- src/app/(main)/dashboard/finance/_components/financial-overview.tsx (modificado, +46 −51)
- src/lib/layout-utils.ts (removido, +40 −47)
- src/lib/preferences-config.ts (adicionado, +72 −14)
- +47 outros arquivos

### Contribuidores
- @arhamkhnz

---

## 2025-11

**Resumo**: 21 commits • 17 arquivos • +2.066 −1.040 • 19 manutenção, 1 novidades, 1 estilo

### Novidades
- Added **theme boot script** and make root layout static

### Arquivos principais
- package-lock.json (modificado, +1.848 −901)
- src/app/(main)/dashboard/_components/sidebar/layout-controls.tsx (modificado, +71 −57)
- package.json (modificado, +39 −39)
- src/scripts/theme-boot.tsx (adicionado, +45 −0)
- src/app/layout.tsx (modificado, +18 −23)
- src/stores/preferences/preferences-provider.tsx (modificado, +27 −6)
- src/app/(main)/dashboard/_components/sidebar/nav-main.tsx (modificado, +4 −4)
- src/app/globals.css (modificado, +5 −1)
- src/app/(main)/dashboard/_components/sidebar/theme-switcher.tsx (modificado, +2 −2)
- src/data/users.ts (modificado, +1 −1)
- src/app/(main)/auth/v1/login/page.tsx (modificado, +1 −1)
- src/app/(main)/auth/v1/register/page.tsx (modificado, +1 −1)
- src/app/(main)/auth/v2/login/page.tsx (modificado, +1 −1)
- src/app/(main)/auth/v2/register/page.tsx (modificado, +1 −1)
- src/app/(main)/dashboard/_components/sidebar/app-sidebar.tsx (modificado, +1 −1)
- +2 outros arquivos

### Contribuidores
- @arhamkhnz

---

## 2025-10

**Resumo**: 20 commits • 28 arquivos • +2.003 −1.259 • 11 manutenção, 2 documentação, 1 refatorações, 4 outros, 1 novidades, 1 correções

### Novidades
- Migrated **to Next 16,** enable React Compiler, and update ESLint config

### Correções
- Use Shadcn DropdownMenuTrigger instead of Radix UI in data-table-view-options.tsx

### Arquivos principais
- package-lock.json (modificado, +1.344 −1.066)
- src/components/ui/field.tsx (adicionado, +254 −6)
- README.md (modificado, +59 −54)
- src/components/ui/empty.tsx (adicionado, +104 −0)
- package.json (modificado, +41 −42)
- src/components/ui/button-group.tsx (adicionado, +83 −0)
- CONTRIBUTING.md (modificado, +23 −19)
- eslint.config.mjs (modificado, +19 −18)
- src/proxy.disabled.ts (adicionado, +25 −0)
- src/components/ui/toggle-group.tsx (modificado, +15 −5)
- src/middleware.disabled.ts (removido, +0 −19)
- src/components/ui/sonner.tsx (modificado, +16 −1)
- src/middleware/auth-middleware.ts (removido, +0 −16)
- src/components/ui/calendar.tsx (modificado, +4 −1)
- tsconfig.json (modificado, +2 −2)
- +13 outros arquivos

### Contribuidores
- @arhamkhnz

---

## 2025-09

**Resumo**: 16 commits • 17 arquivos • +1.339 −1.141 • 2 outros, 11 manutenção, 1 estilo, 1 merges, 1 novidades

### Novidades
- Updated **dashboard layout controls** and layout utils with sticky header

### Arquivos principais
- package-lock.json (modificado, +885 −926)
- src/components/ui/chart.tsx (modificado, +90 −86)
- CONTRIBUTING.md (adicionado, +131 −8)
- src/app/(main)/dashboard/_components/sidebar/layout-controls.tsx (modificado, +79 −31)
- package.json (modificado, +32 −32)
- src/app/(main)/dashboard/layout.tsx (modificado, +45 −18)
- src/navigation/sidebar/sidebar-items.ts (modificado, +16 −16)
- src/lib/layout-utils.ts (modificado, +21 −7)
- src/types/preferences/layout.ts (modificado, +21 −5)
- src/app/(main)/dashboard/coming-soon/page.tsx (adicionado, +8 −0)
- src/components/ui/button.tsx (modificado, +3 −4)
- src/app/(main)/dashboard/_components/sidebar/app-sidebar.tsx (modificado, +4 −2)
- src/components/ui/tooltip.tsx (modificado, +2 −2)
- src/app/(external)/page.tsx (modificado, +1 −1)
- src/components/ui/input.tsx (modificado, +1 −1)
- +2 outros arquivos

### Contribuidores
- @arhamkhnz
- @fiifiofosu

---

## 2025-08

**Resumo**: 11 commits • 6 arquivos • +1.133 −1.100 • 11 manutenção

### Arquivos principais
- package-lock.json (modificado, +1.060 −1.046)
- package.json (modificado, +43 −43)
- src/app/not-found.tsx (adicionado, +17 −0)
- src/navigation/sidebar/sidebar-items.ts (modificado, +8 −8)
- components.json (modificado, +3 −3)
- src/app/(main)/dashboard/[...not-found]/page.tsx (modificado, +2 −0)

### Contribuidores
- @arhamkhnz

---

## 2025-07

**Resumo**: 52 commits • 79 arquivos • +6.960 −3.397 • 24 manutenção, 1 correções, 17 outros, 6 novidades, 4 merges

### Novidades
- Added **theme preset generation** script, standardize types, and update UI
- Added **zustand store for** theme and preset with context-based provider
- Added **theme preset switcher** and fix minor UI/UX issues
- Added **v2 auth pages**
- Added **finance dashboard**
- Added **CRM dashboard &** improve layout

### Correções
- Override shadow utilities to respect theme presets & update deps

### Arquivos principais
- package-lock.json (modificado, +3.447 −2.106)
- src/app/(main)/dashboard/finance/_components/card-details.tsx (adicionado e removido, +193 −193)
- src/app/(main)/dashboard/finance/_components/budget.tsx (adicionado e removido, +176 −176)
- src/app/(main)/dashboard/crm/_components/crm.config.ts (adicionado, +333 −0)
- src/app/(main)/dashboard/crm/_components/overview-cards.tsx (adicionado, +288 −23)
- README.md (modificado, +97 −132)
- src/app/(main)/dashboard/crm/_components/overview-cards-2.tsx (adicionado, +227 −0)
- src/app/(main)/dashboard/crm/_components/overview-cards-3.tsx (adicionado, +203 −0)
- src/app/(main)/dashboard/crm/_components/statcard.tsx (removido, +0 −193)
- src/app/(main)/dashboard/finance/_components/account-overview.tsx (adicionado, +183 −3)
- package.json (modificado, +90 −90)
- src/app/globals.css (modificado, +96 −71)
- src/app/(main)/dashboard/finance/_components/summary.tsx (adicionado, +163 −0)
- src/app/(main)/dashboard/crm/_components/insight-cards.tsx (adicionado, +154 −0)
- src/styles/presets/brutalist.css (modificado, +84 −63)
- +64 outros arquivos

### Contribuidores
- @arhamkhnz

---

## 2025-06

**Resumo**: 25 commits • 77 arquivos • +3.071 −2.034 • 3 outros, 19 manutenção, 1 merges, 2 novidades

### Novidades
- Added **v1 auth screens** and code cleanup
- Added **content layout switcher** for full width and centered layouts

### Arquivos principais
- package-lock.json (modificado, +1.203 −986)
- src/components/ui/calendar.tsx (modificado, +186 −51)
- src/app/(main)/dashboard/finance/_components/card-details.tsx (adicionado, +193 −0)
- src/app/(main)/dashboard/finance/_components/budget.tsx (adicionado, +176 −0)
- src/app/(main)/dashboard/finance/_components/summary.tsx (adicionado, +163 −0)
- src/app/(main)/dashboard/_components/data-table/data-table-faceted-filter.tsx (removido, +0 −128)
- src/components/data-table/data-table.tsx (modificado, +73 −35)
- package.json (modificado, +41 −66)
- src/app/(main)/dashboard/about/components/data-table.tsx (removido, +0 −104)
- src/app/(main)/dashboard/about/components/columns.tsx (removido, +0 −103)
- src/app/(main)/auth/v1/login/_components/login-form.tsx (adicionado, +99 −0)
- src/app/(main)/auth/v1/register/_components/register-form.tsx (adicionado, +97 −0)
- src/app/(main)/dashboard/_components/data-table/data-table.tsx (adicionado, +89 −2)
- src/app/(main)/dashboard/_components/data-table/data-table-pagination.tsx (adicionado, +88 −0)
- src/app/(main)/dashboard/about/components/data-table-pagination.tsx (removido, +0 −82)
- +62 outros arquivos

### Contribuidores
- @arhamkhnz
- @Manasa0424

---

## 2025-05

**Resumo**: 26 commits • 55 arquivos • +8.328 −7.416 • 13 manutenção, 5 novidades, 5 outros, 1 correções, 1 merges, 1 refatorações

### Novidades
- Added **account switcher component**
- Added **theme switcher**
- Updated **sidebar to use** dropdown menu in collapsed state
- Added **layout preferences panel** with sidebar variant & collapsible settings
- Migrated **to Next.js 15** and Tailwind CSS v4 with new color theme

### Correções
- Fallback to collapsible layout on mobile sidebar

### Arquivos principais
- package-lock.json (modificado, +7.304 −5.560)
- src/app/(main)/dashboard/_components/sidebar/data-table.tsx (removido, +0 −705)
- package.json (modificado, +136 −120)
- src/app/(main)/dashboard/_components/sidebar/chart-area-interactive.tsx (removido, +0 −239)
- src/app/dashboard/components/sidebar/app-sidebar.tsx (modificado, +174 −37)
- src/app/(main)/dashboard/_components/sidebar/nav-main.tsx (modificado, +124 −62)
- src/components/app-sidebar.tsx (removido, +0 −179)
- README.md (modificado, +144 −29)
- src/app/(main)/dashboard/_components/sidebar/account-switcher.tsx (adicionado, +89 −8)
- src/app/(main)/dashboard/_components/sidebar/layout-controls.tsx (adicionado, +84 −2)
- src/app/(main)/dashboard/_components/sidebar/section-cards.tsx (removido, +0 −83)
- src/constants/dummy-data.ts (removido, +0 −78)
- eslint.config.mjs (modificado, +24 −30)
- src/app/(main)/dashboard/_components/sidebar/site-header.tsx (removido, +17 −31)
- src/app/(main)/dashboard/_components/sidebar/sidebar-breadcrumbs.tsx (removido, +0 −40)
- +40 outros arquivos

### Contribuidores
- @arhamkhnz

---

## 2025-04

**Resumo**: 1 commits • 3 arquivos • +1.210 −2.109 • 1 manutenção

### Arquivos principais
- package-lock.json (modificado, +1.163 −2.063)
- package.json (modificado, +46 −46)
- eslint.config.mjs (modificado, +1 −0)

### Contribuidores
- @arhamkhnz

---

## 2025-03

**Resumo**: 7 commits • 22 arquivos • +628 −368 • 6 manutenção, 1 novidades

### Novidades
- Redesign dashboard, cleanup code & update color scheme

### Arquivos principais
- package-lock.json (modificado, +562 −318)
- package.json (modificado, +17 −16)
- src/components/ui/sidebar.tsx (modificado, +14 −4)
- next.config.mjs (modificado, +9 −0)
- src/components/ui/dropdown-menu.tsx (modificado, +4 −4)
- src/components/ui/form.tsx (modificado, +3 −3)
- src/components/ui/context-menu.tsx (modificado, +2 −2)
- src/components/ui/menubar.tsx (modificado, +2 −2)
- eslint.config.mjs (modificado, +4 −0)
- src/app/dashboard/components/sidebar/sidebar-navigation.tsx (modificado, +1 −3)
- src/app/auth/login/page.tsx (modificado, +0 −4)
- .prettierrc (modificado, +2 −1)
- src/middleware/auth-middleware.ts (modificado, +1 −2)
- src/components/ui/hover-card.tsx (modificado, +1 −1)
- src/components/ui/popover.tsx (modificado, +1 −1)
- +7 outros arquivos

### Contribuidores
- @arhamkhnz

---

## 2025-02

**Resumo**: 2 commits • 7 arquivos • +677 −601 • 2 manutenção

### Arquivos principais
- package-lock.json (modificado, +596 −543)
- package.json (modificado, +43 −43)
- src/components/ui/menubar.tsx (modificado, +25 −5)
- src/components/ui/sidebar.tsx (modificado, +8 −8)
- eslint.config.mjs (modificado, +3 −0)
- src/components/ui/form.tsx (modificado, +1 −1)
- src/components/ui/select.tsx (modificado, +1 −1)

### Contribuidores
- @arhamkhnz

---

## 2025-01

**Resumo**: 2 commits • 9 arquivos • +881 −382 • 2 manutenção

### Arquivos principais
- package-lock.json (modificado, +833 −319)
- src/scripts/updateRouteList.ts (removido, +0 −41)
- package.json (modificado, +15 −16)
- eslint.config.mjs (modificado, +27 −0)
- src/app/dashboard/components/sidebar/app-sidebar.tsx (modificado, +4 −4)
- src/app/auth/login/page.tsx (modificado, +1 −1)
- src/app/dashboard/components/sidebar/sidebar-navigation.tsx (renomeado, +1 −1)
- src/app/auth/login/components/login-form.tsx (renomeado)
- src/app/dashboard/components/sidebar/sidebar-footer-menu.tsx (renomeado)

### Contribuidores
- @arhamkhnz

---

## 2024-12

**Resumo**: 3 commits • 8 arquivos • +1.815 −1.269 • 3 manutenção

### Arquivos principais
- package-lock.json (modificado, +1.705 −1.172)
- package.json (modificado, +55 −54)
- src/app/auth/login/components/LoginForm.tsx (modificado, +19 −19)
- src/app/dashboard/components/sidebar/app-sidebar.tsx (modificado, +13 −13)
- eslint.config.mjs (modificado, +13 −1)
- src/app/auth/login/page.tsx (modificado, +5 −5)
- src/app/auth/layout.tsx (modificado, +3 −3)
- src/app/dashboard/about/page.tsx (modificado, +2 −2)

### Contribuidores
- @arhamkhnz

---

## 2024-11

**Resumo**: 14 commits • 23 arquivos • +20.151 −16.414 • 8 manutenção, 1 correções, 3 merges, 2 novidades

### Novidades
- Removed **Airbnb config &** update ESLint to latest version with flat config and custom rules
- Husky init

### Correções
- Removed **SonarJS configuration to** resolve ESLint compatibility issues

### Arquivos principais
- package-lock.json (modificado, +19.716 −15.998)
- eslint.config.mjs (adicionado, +252 −15)
- .eslintrc.json (removido, +0 −202)
- package.json (modificado, +87 −94)
- src/app/globals.css (modificado, +24 −25)
- src/navigation/sidebar/sidebarItems.tsx (modificado, +16 −16)
- src/components/nav-main.tsx (modificado, +12 −12)
- src/app/dashboard/components/sidebar/app-sidebar.tsx (renomeado, +8 −7)
- .eslintignore (removido, +0 −14)
- src/app/dashboard/components/sidebar/sidebarFooterMenu.tsx (renomeado, +5 −4)
- src/app/dashboard/components/sidebar/sidebarProjects.tsx (renomeado, +5 −4)
- src/components/app-sidebar.tsx (modificado, +3 −4)
- next.config.mjs (modificado, +5 −1)
- src/app/dashboard/components/sidebar/sidebarNavigation.tsx (renomeado, +3 −3)
- src/app/dashboard/components/sidebar/team-switcher.tsx (renomeado, +3 −3)
- +8 outros arquivos

### Contribuidores
- @arhamkhnz

---

## 2024-10

**Resumo**: 7 commits • 17 arquivos • +1.311 −1.720 • 6 manutenção, 1 novidades

### Novidades
- Added **shadcn sidebar component,** update to new-york style, update dependencies, and remove custom sidebar

### Arquivos principais
- package-lock.json (modificado, +1.206 −1.191)
- src/app/dashboard/components/sidebar.tsx (removido, +1 −207)
- src/navigation/sidebar-items/sidebarItems.tsx (removido, +0 −113)
- package.json (modificado, +47 −46)
- src/app/dashboard/components/account-switcher.tsx (removido, +5 −87)
- src/app/dashboard/components/user-nav.tsx (removido, +0 −59)
- src/app/dashboard/layout.tsx (modificado, +38 −7)
- components.json (modificado, +6 −3)
- README.md (modificado, +2 −2)
- .eslintignore (modificado, +2 −1)
- src/components/ui/command.tsx (modificado, +1 −1)
- src/components/ui/input.tsx (modificado, +1 −1)
- src/components/ui/toaster.tsx (modificado, +1 −1)
- .prettierignore (modificado, +0 −1)
- .gitignore (modificado, +1 −0)
- +2 outros arquivos

### Contribuidores
- @arhamkhnz

---

## 2024-09

- Nenhum commit registrado.

---

## 2024-08

**Resumo**: 15 commits • 29 arquivos • +8.449 −290 • 9 manutenção, 2 correções, 4 outros

### Correções
- Improved **responsiveness of sidebar** headings in collapsed state
- Root path redirect

### Arquivos principais
- package-lock.json (adicionado, +7.921 −0)
- .eslintrc.json (adicionado, +103 −2)
- src/app/dashboard/components/sidebar.tsx (modificado, +51 −39)
- .github/workflows/sync-to-public.yml (adicionado e removido, +38 −38)
- src/components/DateRangePicker.tsx (adicionado, +71 −0)
- src/app/dashboard/home/components/date-range-picker.tsx (removido, +0 −59)
- src/app/dashboard/page.tsx (renomeado, +45 −12)
- README.md (adicionado, +47 −7)
- src/app/dashboard/home/components/recent-sales.tsx (removido, +0 −54)
- src/constants/dummyData.ts (renomeado, +28 −22)
- .gitignore (adicionado, +36 −0)
- src/app/dashboard/unauthorized/page.tsx (removido, +0 −27)
- src/navigation/sidebar-items/sidebarItems.tsx (modificado, +10 −15)
- LICENSE (adicionado, +21 −0)
- components.json (adicionado, +17 −0)
- +14 outros arquivos

### Contribuidores
- @arhamkhnz
