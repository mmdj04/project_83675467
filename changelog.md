# Changelog

Histórico do projeto por mês — cada mês resume todos os commits como uma única atualização (novidades, correções, arquivos agregados e contribuidores).

## 2026-08

**Resumo**: 36 commits • 39 arquivos • +6.474 −2.543 • 30 manutenção, 2 merges, 4 novidades

### Novidades
- Added **profile screen** (#80)
- Migrated **dnd kit to** latest implementation and packages
- Migrated **data table to** use tanstack table v9
- Added **patient monitoring dashboard** (#79)

### Manutenção
- Updated **deps**
- Updated
- Quick fix
- Updated **profile layout**
- Updated **deps & components**
- Added **shadcn questionnaire component**
- Updated **next version**
- Updated **readme**
- Quick fixes

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
- src/app/(main)/dashboard/patient-monitoring/_components/use-patient-vital-series.ts (adicionado, +202 −1)
- src/app/(main)/dashboard/kanban/_components/kanban.tsx (modificado, +57 −120)
- src/app/(main)/dashboard/profile/_components/profile-time-off-details.tsx (adicionado, +123 −44)
- src/app/(main)/dashboard/profile/_components/profile-status-sidebar.tsx (adicionado, +127 −31)
- src/app/(main)/dashboard/patient-monitoring/_components/patient-card.tsx (adicionado, +144 −2)
- src/app/(main)/dashboard/(legacy)/default-v1/_components/proposal-sections-table/columns.tsx (modificado, +84 −50)
- src/app/(main)/dashboard/profile/page.tsx (adicionado, +119 −14)
- src/app/(main)/dashboard/(legacy)/default-v1/_components/proposal-sections-table/table.tsx (modificado, +52 −66)
- src/app/(main)/dashboard/profile/_components/profile-fields.tsx (adicionado e removido, +47 −47)
- src/app/(main)/dashboard/invoice/_components/invoice-items.tsx (modificado, +30 −59)
- src/app/(main)/dashboard/patient-monitoring/_components/realtime-utils.ts (adicionado, +64 −0)
- package.json (modificado, +30 −30)
- src/app/(main)/dashboard/kanban/_components/kanban-column.tsx (modificado, +30 −20)
- src/app/(main)/dashboard/patient-monitoring/page.tsx (modificado, +41 −9)
- src/app/(main)/dashboard/(legacy)/crm-v1/_components/recent-leads-table/columns.tsx (modificado, +27 −13)
- src/app/(main)/dashboard/(legacy)/crm-v1/_components/recent-leads-table/table.tsx (modificado, +14 −19)
- src/app/(main)/dashboard/crm/_components/opportunities-section.tsx (modificado, +14 −19)
- src/app/(main)/dashboard/patient-monitoring/_components/chart-grid.ts (adicionado, +30 −0)
- src/app/(main)/dashboard/patient-monitoring/_components/use-realtime-tick.ts (adicionado, +24 −1)
- src/app/(main)/dashboard/kanban/_components/sortable-task-card.tsx (modificado, +9 −14)
- src/app/(main)/dashboard/(legacy)/analytics-v1/_components/analytics-actions-risk-ledger.tsx (modificado, +9 −14)
- src/navigation/sidebar/sidebar-items.ts (modificado, +8 −0)
- README.md (modificado, +5 −0)
- biome.json (modificado, +2 −2)

### Contribuidores
- @mmdj04

---

## 2026-07

**Resumo**: 38 commits • 44 arquivos • +10.925 −9.515 • 30 manutenção, 2 merges, 2 novidades, 2 refatorações, 1 outros, 1 documentação

### Novidades
- Added **file manager dashboard** (#78)
- Added **project versions dropdown** to dashboard header

### Refatorações
- Organized **dashboard components**
- Simplified **preference updates** (#76)

### Manutenção
- Updated **deps**
- Quick fix
- Code cleanup
- Reverted **radix version**
- Updated **readme**
- Updated **deps & lint** fixes
- Updated
- Optimized **prefs**

### Documentação
- Added **React Aria dashboard** link

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
- src/app/(main)/dashboard/_components/sidebar/nav-secondary.tsx (removido, +0 −43)
- src/app/(main)/dashboard/layout.tsx (modificado, +13 −29)
- src/lib/preferences/preference-attributes.ts (adicionado e removido, +18 −18)
- src/lib/fonts/registry.ts (modificado, +16 −18)
- src/lib/preferences/preference-runtime.ts (adicionado, +34 −0)
- src/app/(main)/dashboard/_components/sidebar/theme-switcher.tsx (modificado, +16 −10)
- src/stores/preferences/preferences-store.ts (modificado, +12 −9)
- src/app/layout.tsx (modificado, +5 −14)
- src/navigation/sidebar/sidebar-items.ts (modificado, +16 −2)
- src/app/(main)/dashboard/_components/sidebar/sidebar-support-card.tsx (modificado, +13 −4)
- src/lib/preferences/preferences-storage.ts (modificado, +8 −9)
- src/app/(main)/dashboard/kanban/_components/kanban.tsx (modificado, +5 −6)
- src/app/(main)/dashboard/users/_components/users.tsx (modificado, +6 −5)
- biome.json (modificado, +5 −5)
- src/lib/preferences/theme-utils.ts (modificado, +3 −7)
- README.md (modificado, +6 −2)
- src/app/(main)/dashboard/default/_components/recent-customers-table/table.tsx (modificado, +4 −4)
- src/app/(main)/dashboard/roles/_components/roles.tsx (modificado, +4 −4)
- src/stores/preferences/preferences-provider.tsx (modificado, +3 −3)
- src/scripts/theme-boot.tsx (modificado, +2 −3)
- src/app/(main)/dashboard/crm/_components/opportunities-section.tsx (modificado, +2 −2)
- src/server/server-actions.ts (modificado, +2 −2)
- src/app/(main)/dashboard/_components/sidebar/support-card.tsx (renomeado, +1 −1)
- src/app/(main)/dashboard/tasks/_components/tasks-toolbar.tsx (modificado, +1 −1)
- src/app/(main)/dashboard/_components/header/account-switcher.tsx (renomeado)
- src/app/(main)/dashboard/_components/header/github-repositories-menu.tsx (renomeado)
- src/app/(main)/dashboard/_components/header/layout-controls.tsx (renomeado)
- src/app/(main)/dashboard/_components/header/search-dialog.tsx (renomeado)
- src/app/(main)/dashboard/_components/header/theme-switcher.tsx (renomeado)

### Contribuidores
- @mmdj04

---

## 2026-06

**Resumo**: 70 commits • 115 arquivos • +29.811 −16.791 • 6 refatorações, 31 manutenção, 2 documentação, 9 novidades, 11 merges, 1 correções, 10 outros

### Novidades
- Added **new shadcn components** & update deps
- Added **tasks** (#73)
- Improved **infrastructure health data** (#71)
- Refined **infrastructure dashboard** (#71)
- Added **infrastructure dashboard** (#71)
- Added **full calendar** (#70)
- Added **calendar** (#70)
- Refined **defaults and mobile** items (#69)
- Refined **preview paper layout** (#69)

### Correções
- Polished **collapsed sidebar navigation**

### Refatorações
- Fixed **maintainability findings (by** react doctor)
- Tightened **nav item data** model
- Simplified **nav item rendering**
- Clean up builder components (#69)
- Break into components, fix drag cancel and won status (#68)

### Manutenção
- Updated **deps**
- Updated **deps & components**
- Quick fixes
- Added **scroll fade in** mail list
- Use shadcn chat components for chat screen
- Added **nested ternary lint** rule and clean warnings
- Added **FullCalendar v7 component** setup
- Quick fix
- Updated **readme**
- Added **print invoice**
- Updated
- Updated **deps and fix** lint warnings
- Fixed **layout**
- Chat update

### Documentação
- Added **AGENTS.md guidelines**
- Added **infrastructure dashboard to** readme (#71)

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
- src/app/(main)/dashboard/invoice/_components/data.ts (adicionado, +460 −98)
- src/app/(main)/dashboard/tasks/_components/tasks.tsx (adicionado, +498 −0)
- src/components/calendar/event-calendar-views.tsx (adicionado, +497 −0)
- src/app/(main)/dashboard/roles/_components/roles.tsx (adicionado, +376 −110)
- src/app/(main)/dashboard/infrastructure/_components/infrastructure-project-group.tsx (adicionado e removido, +242 −242)
- src/app/(main)/dashboard/_components/sidebar/nav-main.tsx (modificado, +282 −190)
- src/app/(main)/dashboard/invoice/_components/invoice-paper.tsx (adicionado, +372 −93)
- src/app/(main)/dashboard/calendar/_components/calendar.tsx (adicionado, +369 −87)
- src/app/(main)/dashboard/invoice/page.tsx (modificado, +415 −1)
- src/app/(main)/dashboard/roles/_components/roles-table/table.tsx (adicionado, +416 −0)
- src/app/(main)/dashboard/tasks/_components/columns.tsx (adicionado, +400 −2)
- src/app/(main)/dashboard/kanban/_components/task-card.tsx (adicionado, +358 −8)
- src/app/(main)/dashboard/invoice/_components/invoice-items-editor.tsx (adicionado, +264 −88)
- src/app/(main)/chat/_components/chat-conversations.tsx (adicionado, +247 −85)
- src/app/(main)/dashboard/invoice/_components/invoice-preview.tsx (adicionado, +231 −92)
- src/app/(main)/dashboard/roles/_components/roles-table/columns.tsx (adicionado, +286 −0)
- src/app/(main)/dashboard/invoice/_components/invoice-items.tsx (adicionado, +238 −42)
- src/app/(main)/dashboard/invoice/_components/client-selector.tsx (adicionado, +213 −61)
- src/app/(main)/dashboard/logistics/_components/shipment-details.tsx (adicionado, +273 −0)
- src/app/(main)/dashboard/infrastructure/_components/infrastructure-data.ts (adicionado, +247 −19)
- src/app/(main)/dashboard/roles/_components/roles-table/data.ts (adicionado, +266 −0)
- src/app/(main)/chat/_components/chat-view.tsx (removido, +67 −195)
- src/app/(main)/chat/_components/chat-messages.tsx (adicionado e removido, +131 −131)
- src/app/(main)/chat/_components/chat.tsx (adicionado, +206 −47)
- src/app/(main)/dashboard/invoice/_components/invoice-details-fields.tsx (adicionado e removido, +125 −125)
- src/app/(main)/dashboard/roles/_components/roles-data.ts (removido, +0 −233)
- package.json (modificado, +124 −107)
- src/app/(main)/chat/_components/chat-contact.tsx (adicionado e removido, +115 −115)
- src/app/(main)/dashboard/kanban/_components/kanban-column.tsx (adicionado, +188 −40)
- src/app/(main)/dashboard/invoice/_components/invoice-details.tsx (adicionado, +222 −0)
- src/app/(main)/dashboard/logistics/_components/shipment-route-map.tsx (adicionado, +220 −0)
- src/components/ui/attachment.tsx (adicionado, +207 −3)
- src/app/(main)/chat/_components/chat-header.tsx (adicionado, +187 −22)
- src/app/(main)/dashboard/infrastructure/_components/infrastructure-header.tsx (adicionado, +194 −8)
- src/app/(main)/dashboard/kanban/_components/types.ts (adicionado, +143 −53)
- src/app/(main)/dashboard/tasks/_components/task-priority-filter.tsx (adicionado, +190 −0)
- src/app/(main)/dashboard/tasks/_components/task-status-filter.tsx (adicionado, +190 −0)
- src/app/(main)/chat/_components/chat-settings.tsx (adicionado e removido, +95 −95)
- src/app/(main)/dashboard/tasks/_components/tasks-toolbar.tsx (adicionado, +188 −0)
- src/app/(main)/dashboard/logistics/_components/shipment-list.tsx (adicionado, +185 −0)
- src/app/(main)/dashboard/kanban/_components/deal-card.tsx (adicionado e removido, +91 −91)
- src/app/(main)/dashboard/kanban/_components/kanban-toolbar.tsx (adicionado e removido, +67 −67)
- src/components/ui/message-scroller.tsx (adicionado, +132 −1)
- src/app/(main)/chat/_components/data.tsx (adicionado, +130 −0)
- src/app/(main)/dashboard/roles/_components/role-details-panel.tsx (removido, +0 −130)
- src/components/ui/bubble.tsx (adicionado, +125 −0)
- src/app/(main)/dashboard/roles/_components/roles-table.tsx (removido, +0 −119)
- src/app/(main)/dashboard/invoice/_components/tax-discount-fields.tsx (modificado, +67 −38)
- AGENTS.md (adicionado, +96 −0)
- src/components/ui/message.tsx (adicionado, +92 −0)
- src/navigation/sidebar/sidebar-items.ts (modificado, +66 −24)
- src/app/(main)/dashboard/invoice/_components/invoice-adjustments.tsx (adicionado, +83 −4)
- src/app/(main)/dashboard/invoice/_components/invoice-form.tsx (adicionado, +78 −8)
- src/app/(main)/chat/_components/chat-composer.tsx (adicionado e removido, +35 −35)
- src/components/ui/marker.tsx (adicionado, +69 −0)
- src/app/(main)/dashboard/roles/_components/role-ui.tsx (removido, +0 −63)
- src/app/(main)/dashboard/logistics/_components/logistics.tsx (adicionado, +58 −2)
- README.md (modificado, +32 −26)
- src/app/(main)/dashboard/kanban/_components/utils.ts (adicionado, +48 −10)
- src/app/(main)/chat/_components/use-chat.ts (adicionado, +54 −1)
- src/app/(main)/dashboard/infrastructure/_components/resource-meter.tsx (adicionado e removido, +26 −26)
- biome.json (modificado, +36 −15)
- src/app/(main)/dashboard/invoice/_components/use-visible-center-position.ts (adicionado, +48 −0)
- src/app/globals.css (modificado, +45 −0)
- src/app/(main)/dashboard/infrastructure/page.tsx (adicionado, +42 −2)
- src/app/(main)/dashboard/calendar/_components/events-data.ts (adicionado, +44 −0)
- src/app/(main)/dashboard/kanban/_components/sortable-task-card.tsx (adicionado, +36 −6)
- src/app/(main)/dashboard/analytics/_components/top-traffic-sources.tsx (modificado, +17 −17)
- src/app/(main)/dashboard/kanban/_components/view-tabs.tsx (removido, +0 −33)
- src/app/(main)/dashboard/invoice/_components/address-block.tsx (adicionado e removido, +15 −15)
- src/app/(main)/dashboard/kanban/_components/sortable-deal-card.tsx (adicionado, +30 −0)
- src/app/(main)/dashboard/tasks/page.tsx (adicionado, +28 −0)
- src/app/(main)/dashboard/chat/page.tsx (modificado, +25 −1)
- src/app/(main)/dashboard/invoice/_components/print-invoice.tsx (adicionado, +25 −0)
- src/app/(main)/auth/_components/login-form.tsx (modificado, +11 −11)
- src/app/(main)/auth/_components/register-form.tsx (modificado, +11 −11)
- src/app/(main)/dashboard/_components/sidebar/search-dialog.tsx (modificado, +10 −12)
- src/app/(main)/dashboard/(legacy)/analytics-v1/_components/analytics-overview.tsx (modificado, +13 −8)
- src/hooks/use-lg.ts (adicionado, +19 −0)
- src/app/(main)/dashboard/default/_components/recent-customers-table/table.tsx (modificado, +7 −10)
- src/app/(main)/dashboard/ecommerce/_components/inventory.tsx (modificado, +14 −3)
- src/app/(main)/dashboard/_components/sidebar/sidebar-support-card.tsx (modificado, +4 −4)
- src/components/ui/card.tsx (modificado, +4 −4)
- src/app/(main)/dashboard/kanban/page.tsx (modificado, +5 −1)
- src/app/(main)/dashboard/roles/page.tsx (adicionado, +6 −0)
- src/app/(main)/dashboard/ecommerce/_components/traffic-sources.tsx (modificado, +4 −1)
- src/app/(main)/dashboard/_components/sidebar/layout-controls.tsx (modificado, +5 −0)
- src/components/ui/carousel.tsx (modificado, +2 −2)
- src/app/(main)/dashboard/ecommerce/_components/kpi-strip.tsx (modificado, +2 −1)
- src/app/(main)/dashboard/layout.tsx (modificado, +2 −1)
- src/app/(main)/dashboard/(legacy)/crm-v1/_components/recent-leads-table/schema.ts (modificado, +1 −1)
- src/app/(main)/dashboard/(legacy)/default-v1/_components/chart-area-interactive.tsx (modificado, +0 −2)
- src/app/(main)/dashboard/(legacy)/default-v1/_components/proposal-sections-table/schema.ts (modificado, +1 −1)
- src/app/(main)/dashboard/crm/_components/opportunities-table/schema.ts (modificado, +1 −1)
- src/app/(main)/mail/_components/mail-inbox.tsx (modificado, +1 −1)
- src/app/(main)/mail/_components/mail-list.tsx (modificado, +1 −1)
- src/components/ui/calendar.tsx (modificado, +1 −1)
- src/components/ui/spinner.tsx (modificado, +1 −1)
- src/app/(main)/chat/_components/chat-layout-config.ts (adicionado e removido, +1 −1)
- src/app/(main)/chat/page.tsx (renomeado)

### Contribuidores
- @mmdj04

---

## 2026-05

**Resumo**: 94 commits • 105 arquivos • +36.611 −13.281 • 43 manutenção, 12 merges, 20 novidades, 18 outros, 1 documentação

### Novidades
- Added **initial chat layouts** (#67)
- Added **initial kanban layout** (#68)
- Initial users page layout (#63)
- Added **logistics dashboard** (#62)
- Added **roles route** (#65)
- Added **users route** (#63)
- Added **invoice route** (#69)
- Added **kanban route** (#68)
- Added **calendar route** (#70)
- Added **chat route** (#67)
- Added **dashboard mail preview** (#60)
- Moved **mail into standalone** layout (#60)
- Added **mail sidebar shell** (#60)
- Improved **mail page responsiveness** (#58)
- Finalize academy dashboard layout and KPI cards (#57)
- Promoted **analytics v2 route** (#54)
- Added **analytics page performance** card (#54)
- Added **analytics traffic sources** card (#54)
- Refined **analytics v2 quality** charts (#54)
- Added **analytics realtime and** quality cards (#54)

### Manutenção
- Updated **deps & component**
- Updated **deps**
- Updated **roles layout**
- Updated
- Updated **filters**
- Complete users design
- Added **initial roles page**
- Quick fix
- Removed **unwanted dependency**
- Updated **readme**
- Updated **mail sidebar defaults**
- Updated **deps & components**
- Updated **collapsed responsiveness**
- Updated **responsiveness**
- Quick fixes
- Updated **KPI**
- Reverted **react-day-picker version**
- Height fix
- Align analytics source tab padding
- Adjust analytics sources spacing
- Updated **indicator**

### Documentação
- Added **analytics v1 to** readme (#54)

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
- src/app/(external)/test-chat/page.tsx (adicionado, +654 −0)
- src/app/(main)/dashboard/users/_components/users.tsx (adicionado, +635 −17)
- src/app/(main)/dashboard/mail/_components/mail-view.tsx (adicionado, +578 −42)
- src/app/(main)/dashboard/ecommerce/_components/kpi-strip.tsx (adicionado, +614 −6)
- src/app/(main)/dashboard/ecommerce/_components/recent-orders-table/data.json (adicionado, +616 −0)
- src/app/(external)/test-chat-2/page.tsx (adicionado, +520 −0)
- src/app/(main)/dashboard/academy/_components/performance-highlights.tsx (adicionado, +491 −2)
- src/app/(main)/dashboard/mail-example/_components/app-sidebar.tsx (adicionado e removido, +246 −246)
- src/app/(main)/dashboard/ecommerce/_components/recent-orders.tsx (adicionado, +467 −1)
- src/app/(main)/dashboard/academy/_components/class-schedule.tsx (adicionado, +426 −27)
- src/app/(main)/dashboard/logistics/_components/route-map.tsx (adicionado, +312 −92)
- src/app/(main)/dashboard/mail/_components/mail-display.tsx (adicionado e removido, +199 −199)
- src/app/(main)/dashboard/logistics/_components/main-panel.tsx (adicionado, +305 −90)
- src/app/(main)/dashboard/ecommerce/_components/recent-orders-table/columns.tsx (adicionado, +388 −0)
- src/app/(main)/dashboard/mail/_components/mail-list.tsx (adicionado, +284 −62)
- src/app/(main)/dashboard/logistics/_components/logistics.tsx (adicionado, +311 −31)
- src/app/(main)/dashboard/academy/_components/assignment-status.tsx (adicionado, +342 −0)
- src/app/(main)/dashboard/mail/mail-sidebar.tsx (adicionado e removido, +167 −167)
- src/app/(main)/dashboard/users/_components/users-data.ts (adicionado e removido, +165 −165)
- src/app/(main)/dashboard/analytics-v2/_components/engagement-momentum-card.tsx (adicionado e removido, +152 −152)
- src/app/(main)/dashboard/academy/_components/kpi-cards.tsx (adicionado, +264 −30)
- src/app/(main)/dashboard/mail/_components/mail-nav.tsx (adicionado e removido, +106 −176)
- src/app/(main)/dashboard/ecommerce/_components/inventory.tsx (adicionado, +260 −0)
- src/app/(main)/dashboard/logistics/_components/shipments-panel.tsx (adicionado, +216 −31)
- src/app/(main)/dashboard/users/_components/users-header.tsx (adicionado e removido, +121 −121)
- src/app/(main)/dashboard/academy/_components/upcoming-events.tsx (adicionado, +237 −0)
- src/app/(main)/dashboard/roles/_components/roles-data.ts (adicionado, +233 −0)
- src/app/(main)/dashboard/mail/_components/mail-inbox.tsx (adicionado, +195 −33)
- src/app/(main)/mail/_components/data.tsx (renomeado, +74 −152)
- src/app/(main)/dashboard/ecommerce/_components/traffic-sources.tsx (adicionado, +221 −0)
- src/app/(main)/dashboard/ecommerce/_components/store-traffic.tsx (adicionado, +218 −1)
- src/app/(main)/dashboard/analytics-v2/page.tsx (removido, +95 −114)
- src/app/(main)/dashboard/mail-example/_components/nav-user.tsx (adicionado e removido, +98 −98)
- src/app/(main)/dashboard/analytics-v2/_components/traffic-quality.tsx (adicionado, +180 −1)
- src/app/(main)/dashboard/analytics-v2/_components/visitor-coverage-card.tsx (adicionado e removido, +89 −89)
- src/app/(main)/dashboard/analytics-v2/_components/traffic-trend-card.tsx (adicionado, +151 −6)
- package.json (modificado, +85 −65)
- src/app/(main)/dashboard/roles/_components/role-details-panel.tsx (adicionado, +140 −10)
- src/app/(main)/dashboard/ecommerce/_components/customer-reviews.tsx (adicionado, +144 −2)
- src/app/(main)/dashboard/analytics/_components/analytics-kpi-strip.tsx (adicionado, +142 −0)
- src/app/(main)/dashboard/roles/_components/roles.tsx (adicionado, +136 −0)
- src/app/(main)/dashboard/academy/page.tsx (adicionado, +127 −9)
- src/app/(main)/dashboard/analytics-v2/_components/top-traffic-sources.tsx (adicionado, +132 −4)
- src/app/(main)/dashboard/roles/_components/roles-table.tsx (adicionado, +119 −0)
- src/app/(main)/dashboard/ecommerce/_components/top-products.tsx (adicionado, +105 −0)
- src/app/(main)/dashboard/mail/page.tsx (adicionado, +72 −32)
- src/app/(main)/dashboard/analytics-v2/_components/analytics-toolbar.tsx (modificado, +45 −58)
- src/app/(main)/dashboard/mail-example/page.tsx (adicionado e removido, +49 −49)
- src/app/(main)/dashboard/mail/_components/account-switcher.tsx (adicionado e removido, +48 −48)
- src/app/(main)/dashboard/ecommerce/page.tsx (adicionado, +92 −4)
- src/app/(main)/dashboard/roles/_components/roles-toolbar.tsx (adicionado e removido, +39 −39)
- src/app/(main)/dashboard/mail/_components/nav.tsx (adicionado, +70 −0)
- src/app/(main)/dashboard/roles/_components/roles-header.tsx (adicionado e removido, +34 −34)
- src/app/(main)/dashboard/roles/_components/role-ui.tsx (adicionado, +63 −0)
- src/app/(main)/dashboard/ecommerce/_components/recent-orders-table/formatters.ts (adicionado, +62 −0)
- src/app/(main)/dashboard/logistics/page.tsx (adicionado, +38 −19)
- src/app/(main)/dashboard/roles/_components/roles-tabs.tsx (adicionado e removido, +28 −28)
- src/app/(main)/dashboard/roles/_components/roles-dashboard.tsx (adicionado e removido, +26 −26)
- src/app/(main)/dashboard/analytics-v2/_components/top-pages.tsx (adicionado, +48 −0)
- src/app/(main)/dashboard/mail/_components/mail-layout-config.ts (adicionado e removido, +23 −23)
- src/app/(main)/dashboard/(legacy)/analytics-v1/page.tsx (adicionado, +46 −0)
- src/navigation/sidebar/sidebar-items.ts (modificado, +14 −24)
- src/app/(main)/dashboard/ecommerce/_components/recent-orders-table/schema.ts (adicionado, +26 −0)
- src/app/(main)/dashboard/_components/sidebar/account-switcher.tsx (modificado, +19 −6)
- src/app/(main)/dashboard/logistics/_components/status-badge.tsx (adicionado e removido, +12 −12)
- src/app/(main)/dashboard/users/page.tsx (adicionado, +20 −2)
- src/app/(main)/dashboard/analytics-v2/_components/analytics-kpi-strip.tsx (modificado, +11 −11)
- src/app/(main)/dashboard/mail/_components/use-mail.ts (modificado, +16 −5)
- src/app/(main)/dashboard/mail/layout.tsx (adicionado, +19 −0)
- src/app/(main)/dashboard/analytics-v2/_components/realtime-visitors.tsx (renomeado, +10 −7)
- src/app/(main)/mail/_components/mail-inbox.tsx (renomeado, +5 −11)
- README.md (modificado, +7 −7)
- src/app/(main)/dashboard/layout.tsx (modificado, +10 −2)
- src/app/(main)/dashboard/roles/page.tsx (adicionado, +9 −2)
- biome.json (modificado, +5 −5)
- src/app/(main)/dashboard/finance/_components/overview-kpis.tsx (modificado, +4 −4)
- src/app/(main)/mail/_components/mail-layout-config.ts (adicionado, +6 −0)
- src/app/(main)/dashboard/finance/_components/income-breakdown.tsx (modificado, +3 −3)
- src/components/ui/button.tsx (modificado, +2 −2)
- src/components/ui/toggle-group.tsx (modificado, +2 −2)
- src/app/(main)/dashboard/invoice/page.tsx (adicionado, +3 −0)
- src/app/(main)/dashboard/calendar/page.tsx (adicionado, +3 −0)
- src/app/(main)/dashboard/chat/page.tsx (adicionado, +3 −0)
- src/components/ui/sidebar.tsx (modificado, +1 −1)
- src/app/(main)/dashboard/finance/_components/balance-distribution-card.tsx (modificado, +1 −1)
- src/app/(main)/dashboard/(legacy)/analytics-v1/_components/analytics-actions-manager-queue.tsx (renomeado)
- src/app/(main)/dashboard/(legacy)/analytics-v1/_components/analytics-actions-risk-ledger.tsx (renomeado)
- src/app/(main)/dashboard/(legacy)/analytics-v1/_components/analytics-drivers-coverage-triage.tsx (renomeado)
- src/app/(main)/dashboard/(legacy)/analytics-v1/_components/analytics-drivers-forecast-target.tsx (renomeado)
- src/app/(main)/dashboard/(legacy)/analytics-v1/_components/analytics-overview.tsx (renomeado)

### Contribuidores
- @mmdj04

---

## 2026-04

**Resumo**: 68 commits • 93 arquivos • +9.306 −4.718 • 18 novidades, 21 manutenção, 5 merges, 9 correções, 10 outros, 4 documentação, 1 estilo

### Novidades
- Refined **analytics v2 controls** (#54)
- Added **analytics v2 dashboard** (#54)
- Refactored **wallet component with** crypto assets and physical vault info, rename components for better resonance (#49)
- Refactored **upcoming transactions UI** (#49)
- Added **search at sidebar** (#51)
- Moved **crm v2 to** crm and legacy crm to crm-v1 (#47)
- Refined **crm v2 opportunities** table (#47)
- Added **crm v2 activity** sections (#47)
- Added **crm v2 dashboard** (#47)
- Swapped **default dashboard routes** (#46)
- Refined **default v2 customer** table (#46)
- Refined **default v2 dashboard** tables (#46)
- Refined **default v2 performance** overview (#46)
- Refined **default v2 chart** and dashboard styling (#46)
- Refined **default v2 overview** charts (#46)
- Refresh productivity dates dynamically (#46)
- Added **productivity dashboard layout** (#46)
- Added **default-v2 dashboard and** refresh ui primitives (#46)

### Correções
- Added **use client directive** to upcoming transactions component (#49)
- Added **missing tabs content** import and sort classes (#49)
- Renamed **upcoming transactions component** to remove table suffix and fix import (#49)
- Replaced custom search with built in search from cmdk (#51)
- Resolve code review issues in search dialog (#51)
- Adjust CRM opportunities footer spacing
- Tightened **crm table filtering** and proposal progress (#47)
- Correct default dashboard chart date parsing (#46)
- Style native select options

### Manutenção
- Updated **deps**
- Updated **readme**
- Reorganize finance routes to make v2 the default and move v1 to legacy
- Quick fix
- Refresh biome and icon dependencies
- Added **finance route**
- Refresh ui dependencies
- Refresh shadcn dependencies
- Quick fixes
- Hide productivity dashboard from sidebar
- Apply generated ui updates
- Updated **default font**
- Refresh ui and tooling dependencies
- Bump next and react
- Refresh dependencies and update dashboard icon
- Bump panels and tweak dashboard layout
- Bump next to 16.2.2

### Documentação
- Moved **base ui note** in readme
- Added **base ui repo** link to readme
- Removed **analytics from README** coming soon
- Updated **README screen names**

### Estilo
- Refined **default dashboard activity** chart (#46)

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
- src/app/(main)/dashboard/finance-v2/_components/money-in-vs-out-chart.tsx (adicionado e removido, +96 −96)
- src/app/(main)/dashboard/finance-v2/_components/balance-distribution-card.tsx (adicionado, +181 −0)
- src/app/(main)/dashboard/crm-v2/_components/pipeline-activity.tsx (adicionado, +153 −2)
- src/app/(main)/dashboard/finance-v2/_components/transactions-overview-card.tsx (adicionado, +149 −0)
- src/app/(main)/dashboard/default-v2/_components/customer-flow-table/table.tsx (adicionado e removido, +73 −73)
- src/app/(main)/dashboard/crm-v2/_components/kpi-cards.tsx (adicionado, +124 −4)
- src/app/(main)/dashboard/crm-v2/_components/opportunities-table/columns.tsx (adicionado, +126 −0)
- src/app/(main)/dashboard/finance-v2/_components/wallet.tsx (adicionado, +115 −0)
- src/app/(main)/dashboard/productivity/_components/projects-section.tsx (adicionado, +105 −10)
- src/app/(main)/dashboard/default-v2/_components/metric-cards.tsx (adicionado, +104 −10)
- src/app/(main)/dashboard/finance/page.tsx (modificado, +61 −47)
- package.json (modificado, +51 −52)
- src/app/(main)/dashboard/crm-v2/_components/task-reminders.tsx (adicionado, +100 −0)
- src/app/(main)/dashboard/finance-v2/_components/income-breakdown.tsx (adicionado, +76 −20)
- src/app/(main)/dashboard/finance-v2/_components/quick-actions.tsx (adicionado, +94 −0)
- src/app/(main)/dashboard/analytics-v2/_components/analytics-toolbar.tsx (adicionado, +85 −7)
- src/app/(main)/dashboard/finance-v2/_components/upcoming-transactions-table.tsx (adicionado, +76 −0)
- src/app/(main)/dashboard/productivity/_components/recent-notes-card.tsx (adicionado, +50 −4)
- src/app/(main)/dashboard/productivity/_components/summary-cards.tsx (adicionado, +39 −0)
- src/app/(main)/dashboard/default-v2/_components/customer-flow-table/schema.ts (adicionado e removido, +19 −19)
- src/navigation/sidebar/sidebar-items.ts (modificado, +26 −10)
- src/app/(main)/dashboard/finance-v2/_components/finance-notification.tsx (adicionado, +28 −5)
- src/app/(main)/dashboard/(legacy)/crm-v1/page.tsx (adicionado, +32 −0)
- src/app/(main)/dashboard/productivity/_components/calendar-panel.tsx (adicionado, +32 −0)
- src/app/(main)/dashboard/_components/sidebar/layout-controls.tsx (modificado, +14 −14)
- src/app/(main)/dashboard/productivity/_components/focus-card.tsx (adicionado, +27 −0)
- src/app/(main)/dashboard/productivity/_components/quick-actions.tsx (adicionado, +27 −0)
- src/app/(main)/dashboard/default-v2/_components/proposal-sections-table/schema.ts (adicionado e removido, +13 −13)
- README.md (modificado, +12 −9)
- src/app/(main)/dashboard/_components/sidebar/sidebar-support-card.tsx (modificado, +19 −2)
- biome.json (modificado, +14 −6)
- src/app/(main)/dashboard/analytics-v2/page.tsx (adicionado, +19 −0)
- src/app/(main)/dashboard/productivity/_components/quote-card.tsx (adicionado, +17 −0)
- src/app/(main)/dashboard/crm-v2/page.tsx (adicionado, +15 −0)
- src/components/ui/native-select.tsx (modificado, +12 −3)
- src/app/(main)/dashboard/analytics/_components/analytics-overview.tsx (modificado, +7 −7)
- src/app/(main)/dashboard/crm/_components/opportunities-section.tsx (modificado, +8 −6)
- src/app/(main)/dashboard/crm-v2/_components/opportunities-table/schema.ts (adicionado, +14 −0)
- src/app/(main)/dashboard/(legacy)/default-v1/page.tsx (adicionado, +14 −0)
- src/app/(main)/dashboard/default-v2/page.tsx (adicionado, +11 −0)
- src/app/(main)/dashboard/crm/_components/opportunities-table/columns.tsx (modificado, +2 −8)
- src/lib/cookie.client.ts (modificado, +7 −2)
- src/app/(main)/dashboard/analytics/_components/analytics-actions-risk-ledger.tsx (modificado, +4 −4)
- components.json (modificado, +4 −4)
- src/app/(main)/dashboard/default/_components/performance-overview.tsx (modificado, +4 −4)
- src/app/(main)/dashboard/layout.tsx (modificado, +4 −2)
- src/app/(main)/dashboard/crm/_components/task-reminders.tsx (modificado, +4 −1)
- src/app/(main)/dashboard/finance/_components/upcoming-transactions.tsx (renomeado, +3 −1)
- src/app/(main)/dashboard/page.tsx (modificado, +2 −2)
- src/app/(main)/dashboard/_components/sidebar/theme-switcher.tsx (modificado, +1 −1)
- src/components/ui/alert.tsx (modificado, +1 −1)
- src/components/ui/button-group.tsx (modificado, +1 −1)
- src/components/ui/field.tsx (modificado, +1 −1)
- src/components/ui/item.tsx (modificado, +1 −1)
- src/components/ui/popover.tsx (modificado, +1 −1)
- src/app/globals.css (modificado, +1 −1)
- src/lib/preferences/preferences-config.ts (modificado, +1 −1)
- src/app/(main)/dashboard/_components/sidebar/account-switcher.tsx (modificado, +1 −1)
- src/app/(main)/dashboard/(legacy)/finance-v1/_components/card-overview.tsx (renomeado)
- src/app/(main)/dashboard/(legacy)/finance-v1/_components/cash-flow-overview.tsx (renomeado)
- src/app/(main)/dashboard/(legacy)/finance-v1/_components/income-reliability.tsx (renomeado)
- src/app/(main)/dashboard/(legacy)/finance-v1/_components/kpis/monthly-cash-flow.tsx (renomeado)
- src/app/(main)/dashboard/(legacy)/finance-v1/_components/kpis/net-worth.tsx (renomeado)
- src/app/(main)/dashboard/(legacy)/finance-v1/_components/kpis/primary-account.tsx (renomeado)
- src/app/(main)/dashboard/(legacy)/finance-v1/_components/kpis/savings-rate.tsx (renomeado)
- src/app/(main)/dashboard/(legacy)/finance-v1/_components/spending-breakdown.tsx (renomeado)
- src/app/(main)/dashboard/(legacy)/crm-v1/_components/crm.config.ts (renomeado)
- src/app/(main)/dashboard/(legacy)/crm-v1/_components/insight-cards.tsx (renomeado)
- src/app/(main)/dashboard/(legacy)/crm-v1/_components/operational-cards.tsx (renomeado)
- src/app/(main)/dashboard/(legacy)/crm-v1/_components/overview-cards.tsx (renomeado)
- src/app/(main)/dashboard/(legacy)/crm-v1/_components/recent-leads-table/columns.tsx (renomeado)
- src/app/(main)/dashboard/(legacy)/crm-v1/_components/recent-leads-table/schema.ts (renomeado)
- src/app/(main)/dashboard/(legacy)/crm-v1/_components/recent-leads-table/table.tsx (renomeado)
- src/app/(main)/dashboard/(legacy)/default-v1/_components/chart-area-interactive.tsx (renomeado)
- src/app/(main)/dashboard/(legacy)/default-v1/_components/proposal-sections-table/columns.tsx (renomeado)
- src/app/(main)/dashboard/(legacy)/default-v1/_components/proposal-sections-table/schema.ts (renomeado)
- src/app/(main)/dashboard/(legacy)/default-v1/_components/proposal-sections-table/table.tsx (renomeado)
- src/app/(main)/dashboard/(legacy)/default-v1/_components/section-cards.tsx (renomeado)

### Contribuidores
- @mmdj04
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
- Implemented **analytics dashboard redesign** (#35)

### Correções
- Group dashboard select items
- Refined **support card layout**
- Align layout control selects
- Minor dashboard and command palette fixes
- Run biome via node to avoid Windows spawn issues (#41)
- Make preset generation and lint-staged work cross-platform (#41)

### Refatorações
- Localize dashboard table implementations
- Adopted **field-based rhf forms**
- Finalize 3-row dashboard structure and naming cleanup (#35)

### Manutenção
- Updated **shadcn ui components**
- Removed **preferences storage note**
- Removed **unused deps**
- Updated **deps and shadcn** components
- Updated **deps**
- Updated **deps and shadcn** empty component
- Updated **shadcn components**
- Refresh dashboard owner names
- Updated **deps & shadcn** component
- Align static metrics across dashboard sections

### Estilo
- Split centered layout selectors

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
- src/app/(main)/auth/_components/login-form.tsx (modificado, +58 −52)
- src/app/(main)/auth/_components/register-form.tsx (modificado, +55 −46)
- src/app/(main)/dashboard/analytics/_components/analytics-drivers-coverage-triage.tsx (adicionado, +93 −2)
- src/app/(main)/dashboard/default/_components/data-table.tsx (removido, +7 −87)
- src/app/(main)/dashboard/analytics/_components/analytics-coverage-triage-card.tsx (adicionado, +91 −0)
- package.json (modificado, +38 −39)
- src/components/date-range-picker.tsx (adicionado, +71 −3)
- src/components/ui/chart.tsx (modificado, +44 −27)
- src/app/(main)/dashboard/crm/_components/recent-leads-table/columns.tsx (renomeado, +42 −24)
- src/app/(main)/dashboard/_components/sidebar/search-dialog.tsx (modificado, +37 −24)
- src/app/(main)/dashboard/crm/_components/insight-cards.tsx (modificado, +26 −30)
- src/app/(main)/dashboard/analytics/page.tsx (adicionado, +46 −9)
- src/app/(main)/dashboard/_components/sidebar/layout-controls.tsx (modificado, +27 −26)
- src/app/(main)/dashboard/crm/_components/table-cards.tsx (removido, +0 −48)
- src/components/ui/alert-dialog.tsx (modificado, +25 −22)
- src/app/(main)/dashboard/layout.tsx (modificado, +30 −6)
- src/app/(main)/dashboard/default/_components/table-cell-viewer.tsx (modificado, +21 −15)
- src/components/ui/accordion.tsx (modificado, +25 −10)
- src/components/ui/alert.tsx (modificado, +18 −8)
- src/scripts/generate-theme-presets.ts (modificado, +16 −10)
- src/app/layout.tsx (modificado, +13 −10)
- src/app/(main)/dashboard/default/_components/chart-area-interactive.tsx (modificado, +12 −10)
- src/app/(main)/dashboard/_components/sidebar/sidebar-support-card.tsx (adicionado, +15 −3)
- tsconfig.scripts.json (adicionado, +16 −0)
- src/app/(main)/dashboard/finance/_components/cash-flow-overview.tsx (modificado, +8 −6)
- src/components/data-table/data-table-pagination.tsx (modificado, +8 −6)
- components.json (modificado, +6 −3)
- src/components/ui/avatar.tsx (modificado, +4 −4)
- src/components/ui/toggle.tsx (modificado, +4 −3)
- src/components/ui/button.tsx (modificado, +3 −3)
- src/components/ui/breadcrumb.tsx (modificado, +3 −3)
- src/components/ui/empty.tsx (modificado, +4 −1)
- src/app/(main)/dashboard/crm/page.tsx (modificado, +3 −2)
- src/app/(main)/dashboard/crm/_components/recent-leads-table/schema.ts (renomeado, +3 −1)
- .husky/pre-commit (modificado, +2 −2)
- src/components/ui/badge.tsx (modificado, +2 −2)
- src/navigation/sidebar/sidebar-items.ts (modificado, +1 −2)
- src/components/ui/table.tsx (modificado, +1 −1)
- src/components/ui/tabs.tsx (modificado, +1 −1)
- src/components/ui/toggle-group.tsx (modificado, +1 −1)
- src/components/ui/dialog.tsx (modificado, +1 −1)
- src/components/ui/drawer.tsx (modificado, +1 −1)
- src/components/ui/menubar.tsx (modificado, +1 −1)
- src/components/ui/navigation-menu.tsx (modificado, +1 −1)
- src/components/ui/sheet.tsx (modificado, +1 −1)
- src/app/(main)/dashboard/_components/sidebar/app-sidebar.tsx (modificado, +2 −0)
- src/app/(main)/dashboard/finance/page.tsx (modificado, +1 −1)

### Contribuidores
- @mmdj04

---

## 2026-02

**Resumo**: 3 commits • 9 arquivos • +154 −87 • 3 manutenção

### Manutenção
- Updated **deps**
- Updated **deps & shadcn** components
- Minor fixes

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
- @mmdj04

---

## 2026-01

**Resumo**: 33 commits • 38 arquivos • +5.221 −4.429 • 21 manutenção, 6 novidades, 4 merges, 1 correções, 1 outros

### Novidades
- Added **revenue and risk** summary (#35)
- Added **overview controls** (#35)
- Automatically set resolvedThemeMode in setThemeMode (#32)
- Added **system theme mode** (#32)
- Added **restore defaults button** (#30)
- Added **dynamic font preference** (#29)

### Correções
- Cycle through light/dark/system in theme-switcher (#32)

### Manutenção
- Updated **deps**
- Updated **shadcn components**
- Quick fix
- Minor fixes
- Updated **boot script**
- Improved **theme switching logic**
- Renamed **vars for better** understandability
- Optimized **boot script**
- Apply suggestions
- Enabled **preload for all** fonts
- Fixed **default font**
- Updated **fonts**
- Fixed **css layer order**
- Refined **default theme and** minor UI tweaks
- Updated **deps and minor** fixes
- Renamed **components and small** fixes

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
- src/components/ui/avatar.tsx (modificado, +60 −4)
- src/scripts/theme-boot.tsx (modificado, +38 −26)
- src/app/(main)/dashboard/finance/_components/account-summary.tsx (removido, +0 −62)
- package.json (modificado, +28 −26)
- src/stores/preferences/preferences-store.ts (modificado, +33 −15)
- src/components/ui/popover.tsx (modificado, +42 −1)
- src/components/date-range-picker.tsx (adicionado, +42 −0)
- src/app/(main)/dashboard/finance/_components/kpis/monthly-cash-flow.tsx (adicionado, +36 −0)
- src/app/layout.tsx (modificado, +11 −13)
- src/components/ui/dialog.tsx (modificado, +17 −2)
- src/types/window.d.ts (removido, +2 −15)
- src/components/ui/badge.tsx (modificado, +9 −7)
- src/lib/preferences/preferences-config.ts (modificado, +11 −1)
- src/lib/preferences/layout-utils.ts (modificado, +10 −0)
- src/app/(main)/dashboard/analytics/page.tsx (adicionado, +9 −0)
- src/app/(main)/dashboard/finance/page.tsx (modificado, +4 −4)
- src/lib/preferences/theme.ts (modificado, +5 −2)
- src/app/(main)/dashboard/default/_components/chart-area-interactive.tsx (modificado, +2 −2)
- src/navigation/sidebar/sidebar-items.ts (modificado, +1 −2)
- src/components/ui/button.tsx (modificado, +2 −0)
- src/app/(main)/dashboard/default/_components/section-cards.tsx (modificado, +1 −1)
- src/app/(main)/dashboard/finance/_components/income-reliability.tsx (renomeado, +1 −1)
- src/app/(main)/dashboard/finance/_components/kpis/net-worth.tsx (renomeado, +1 −1)

### Contribuidores
- @likui628
- @mmdj04

---

## 2025-12

**Resumo**: 50 commits • 62 arquivos • +7.176 −16.004 • 10 novidades, 29 manutenção, 7 merges, 2 outros, 1 estilo, 1 correções

### Novidades
- Complete remaining dashboard sections (#27)
- Added **KPI row** (#27)
- Biome init (#25)
- Improved **layout prefs handling** for instant sidebar render (#22)
- Added **“use no memo”** to all table components to prevent React Compiler memoization and fix state issues (#21)
- Added **window prefs bridge** + temporary flicker fix in provider (#20)
- Completed preference persistence setup (#20)
- Moved **sidebar config to** global store and wire it inside AppSidebar (#20)
- Added **preference config** (#18)
- Added **client side cookie** utils (#18)

### Correções
- Align theme boot defaults and use shallow sidebar selector (#24)

### Manutenção
- Redesign my cards
- Redesign cash flow overview chart
- Updated **initial dashboard design**
- Updated **deps**
- Minor updates
- Use biome for formatting preset generated code
- Updated **shadcn components**
- Updated **Biome commands and** clean up styles
- Removed **next eslint config**
- Lint and format codebase using Biome
- Removed **ESLint and Prettier** configs and usage
- Migrated **prettier & eslint** config to biome
- Quick fix
- Updated **layout controls preferences** text
- Simplified **preference logic**
- Style fix and type correction
- Updated **navbar style selectors** to use html data attributes
- Updated **preference config and** style fix
- Added **missing await in** persistPreference
- Disabled **layout controls and** apply minor fixes
- Added **preference config and** conditional server persistence
- Minor changes
- Updated **layout controls and** fix sidebar state logic

### Estilo
- Fixed **sidebar icon alignment**

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
- src/app/layout.tsx (modificado, +50 −18)
- src/app/(main)/dashboard/finance/page.tsx (modificado, +32 −30)
- src/app/(main)/dashboard/finance/_components/account-summary.tsx (adicionado, +62 −0)
- src/app/(main)/dashboard/finance/_components/recent-payments.tsx (adicionado, +62 −0)
- src/app/(main)/dashboard/_components/sidebar/app-sidebar.tsx (modificado, +36 −14)
- src/lib/preferences-storage.ts (adicionado, +45 −5)
- src/app/(main)/dashboard/finance/_components/assets-breakdown.tsx (adicionado, +42 −6)
- src/app/(main)/dashboard/finance/_components/cash-flow-overview.tsx (adicionado, +39 −3)
- src/lib/cookie.client.ts (adicionado, +40 −2)
- src/app/(main)/dashboard/finance/_components/net-worth-summary.tsx (adicionado, +39 −2)
- src/app/(main)/dashboard/_components/sidebar/theme-switcher.tsx (modificado, +13 −13)
- .prettierignore (removido, +0 −24)
- README.md (modificado, +18 −2)
- src/stores/preferences/preferences-store.ts (modificado, +15 −4)
- src/lib/local-storage.client.ts (adicionado, +19 −0)
- .prettierrc (removido, +0 −18)
- src/types/window.d.ts (adicionado, +16 −0)
- src/app/(main)/auth/v2/layout.tsx (modificado, +7 −7)
- src/app/(main)/auth/v1/login/page.tsx (modificado, +6 −6)
- src/app/(main)/auth/v1/register/page.tsx (modificado, +6 −6)
- src/scripts/generate-theme-presets.ts (modificado, +5 −6)
- next.config.mjs (modificado, +4 −4)
- src/components/ui/select.tsx (modificado, +5 −2)
- src/lib/preferences/preferences-storage.ts (renomeado, +5 −2)
- src/components/ui/button.tsx (modificado, +4 −2)
- src/components/ui/calendar.tsx (modificado, +5 −1)
- postcss.config.mjs (modificado, +3 −3)
- src/app/(main)/dashboard/finance/_components/spending-overview.tsx (modificado, +1 −3)
- src/app/(main)/dashboard/finance/_components/currency-exchange.tsx (modificado, +2 −2)
- src/app/(main)/dashboard/crm/_components/crm.config.ts (modificado, +1 −3)
- src/components/data-table/data-table-column-header.tsx (modificado, +4 −0)
- src/components/data-table/data-table-pagination.tsx (modificado, +4 −0)
- src/components/data-table/data-table.tsx (modificado, +4 −0)
- src/components/data-table/drag-column.tsx (modificado, +4 −0)
- src/components/data-table/draggable-row.tsx (modificado, +4 −0)
- .husky/pre-commit (modificado, +2 −2)
- src/lib/theme-utils.ts (modificado, +2 −2)
- src/app/globals.css (modificado, +3 −0)
- src/components/ui/dialog.tsx (modificado, +1 −1)
- src/components/ui/form.tsx (modificado, +1 −1)
- src/components/ui/pagination.tsx (modificado, +1 −1)
- src/app/(main)/auth/_components/login-form.tsx (modificado, +1 −1)
- src/app/(main)/dashboard/crm/_components/table-cards.tsx (modificado, +2 −0)
- src/app/(main)/dashboard/default/_components/data-table.tsx (modificado, +2 −0)
- src/components/data-table/data-table-view-options.tsx (modificado, +2 −0)
- src/lib/preferences/layout.ts (renomeado, +1 −1)
- src/lib/preferences/layout-utils.ts (renomeado)

### Contribuidores
- @mmdj04

---

## 2025-11

**Resumo**: 21 commits • 17 arquivos • +2.066 −1.040 • 19 manutenção, 1 novidades, 1 estilo

### Novidades
- Added **theme boot script** and make root layout static (#18)

### Manutenção
- Simplified **layout controls handlers** and improve preferences provider initialization
- Updated **preferences store logic** and apply minor fixes
- Enabled **layout controls**
- Removed **analytics**
- Updated **deps**
- Updated **avatar to external** url
- Disabled **prefetch on next** Link
- Temporarily disable cookie logic in root layout to avoid rerendering bug
- Disabled **layout controls**
- Disabled **prefetch on sidebar** links to avoid unnecessary route requests
- Added **vercel analytics**
- Updated **layout control toggle** styles
- Updated **deps & apply** uniform toggle item sizing and text classes

### Estilo
- Added **overscroll-behavior**

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
- src/app/not-found.tsx (modificado, +1 −1)
- public/avatars/arhamkhnz.png (removido)

### Contribuidores
- @mmdj04

---

## 2025-10

**Resumo**: 20 commits • 28 arquivos • +2.003 −1.259 • 11 manutenção, 2 documentação, 1 refatorações, 4 outros, 1 novidades, 1 correções

### Novidades
- Migrated **to Next 16,** enable React Compiler, and update ESLint config

### Correções
- Use Shadcn DropdownMenuTrigger instead of Radix UI in data-table-view-options.tsx

### Refatorações
- Renamed **middleware to proxy,** cleanup code, and update tsconfig

### Manutenção
- Updated **deps**
- Updated **deps & shadcn** component
- Updated **dependencies and remove** unused packages
- Added **new shadcn components**

### Documentação
- Updated **Next.js version references** in docs and meta
- Updated **dashboard image and** version in demo URL

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
- components.json (modificado, +2 −1)
- src/config/app-config.ts (modificado, +1 −1)
- src/components/data-table/data-table-view-options.tsx (modificado, +1 −1)
- src/components/ui/badge.tsx (modificado, +1 −1)
- src/components/ui/sidebar.tsx (modificado, +1 −1)
- src/components/ui/checkbox.tsx (modificado, +1 −1)
- src/components/ui/input-group.tsx (modificado, +1 −1)
- src/components/ui/button.tsx (modificado, +2 −0)
- src/components/ui/card.tsx (modificado, +1 −1)
- src/components/ui/context-menu.tsx (modificado, +1 −1)
- src/components/ui/dropdown-menu.tsx (modificado, +1 −1)
- next.config.mjs (modificado, +1 −0)
- media/dashboard.png (modificado)

### Contribuidores
- @mmdj04

---

## 2025-09

**Resumo**: 16 commits • 17 arquivos • +1.339 −1.141 • 2 outros, 11 manutenção, 1 estilo, 1 merges, 1 novidades

### Novidades
- Updated **dashboard layout controls** and layout utils with sticky header (#10)

### Manutenção
- Added **contributing.md**
- Code cleanup, minor fixes & update deps
- Updated **deps**
- Updated **deps & shadcn** components
- Updated **shadcn components**
- Updated **dependencies and refresh** shadcn/ui components
- Added **coming soon page** & update deps
- Updated **non-existing routes to** /dashboard & update deps

### Estilo
- Refined **sticky navbar styles** for consistency

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
- public/next.svg (removido, +0 −1)
- public/vercel.svg (removido, +0 −1)

### Contribuidores
- @fiifiofosu
- @mmdj04

---

## 2025-08

**Resumo**: 11 commits • 6 arquivos • +1.133 −1.100 • 11 manutenção

### Manutenção
- Added **placeholder routes, deps** update & enable turbopack
- Updated **deps**
- Added **not-found page and** code cleanup

### Arquivos principais
- package-lock.json (modificado, +1.060 −1.046)
- package.json (modificado, +43 −43)
- src/app/not-found.tsx (adicionado, +17 −0)
- src/navigation/sidebar/sidebar-items.ts (modificado, +8 −8)
- components.json (modificado, +3 −3)
- src/app/(main)/dashboard/[...not-found]/page.tsx (modificado, +2 −0)

### Contribuidores
- @mmdj04

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

### Manutenção
- Updated **deps**
- Updated **media image**
- Updated **media**
- Eslint accessibility fix
- Removed **unused dependencies &** minor improvements
- Fixed **eslint warnings**
- Fixed **type imports**
- Updated **pre-commit hook to** auto stage theme presets
- Updated **deps & remove** test logs
- Added **test logs in** ThemeSwitcher for debugging
- Moved **preferences store and** provider to stores/ directory
- Added **layout and theme** utility functions, simplify layout & theme control logic
- Optimized **content layout usage** & minor bug fixes
- Temporarily disable middleware to avoid unnecessary edge function executions
- Minor fixes
- Updated **deps & shadcn** components
- Color fixes & code cleanup
- Fixed **CRM route**
- Reverted **theme**
- Updated **dependencies**
- Updated **CRM charts**

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
- src/app/(main)/dashboard/_components/sidebar/layout-controls.tsx (modificado, +103 −38)
- src/scripts/generate-theme-presets.ts (adicionado, +132 −5)
- src/app/(main)/dashboard/crm/_components/operational-cards.tsx (adicionado, +121 −6)
- src/app/(main)/dashboard/finance/_components/currency-exchange.tsx (adicionado, +86 −5)
- src/app/(main)/dashboard/crm/_components/columns.crm.tsx (adicionado, +83 −0)
- src/app/(main)/dashboard/layout.tsx (modificado, +44 −27)
- src/app/(main)/auth/v2/login/page.tsx (adicionado, +57 −12)
- src/app/(main)/auth/v2/register/page.tsx (adicionado, +57 −12)
- src/app/(main)/dashboard/_components/sidebar/theme-switcher.tsx (modificado, +37 −27)
- src/app/(main)/dashboard/crm/_components/dummy-graph.tsx (modificado, +26 −28)
- src/app/(main)/dashboard/finance/_components/pie-chart-flow.tsx (adicionado, +53 −0)
- src/app/(main)/dashboard/default/_components/data-table.tsx (modificado, +4 −47)
- src/components/data-table/data-table.tsx (modificado, +32 −10)
- src/app/(main)/auth/v2/layout.tsx (adicionado, +37 −0)
- src/app/(main)/dashboard/crm/_components/overview-cards-4.tsx (adicionado, +37 −0)
- src/app/(main)/dashboard/_components/sidebar/nav-main.tsx (modificado, +27 −6)
- src/components/preferences-store-provider.tsx (adicionado, +31 −0)
- src/app/(main)/dashboard/finance/page.tsx (adicionado, +30 −0)
- src/app/(main)/dashboard/crm/_components/crm-section-cards.tsx (removido, +0 −26)
- src/app/(main)/dashboard/default/_components/table-cell-viewer.tsx (modificado, +12 −13)
- src/lib/utils.ts (modificado, +18 −5)
- src/app/(main)/dashboard/_components/sidebar/search-dialog.tsx (modificado, +12 −9)
- src/components/preferences-store.ts (adicionado, +18 −0)
- src/app/(main)/auth/v1/login/page.tsx (modificado, +7 −10)
- src/app/(main)/auth/v1/register/page.tsx (modificado, +7 −10)
- src/styles/presets/soft-pop.css (modificado, +16 −0)
- src/styles/presets/tangerine.css (modificado, +16 −0)
- src/app/layout.tsx (modificado, +9 −6)
- src/app/(main)/auth/_components/social-auth/google-button.tsx (adicionado, +14 −0)
- next.config.mjs (modificado, +6 −6)
- src/lib/theme-utils.ts (adicionado, +12 −0)
- src/app/(main)/dashboard/default/_components/schema.ts (adicionado, +11 −0)
- src/middleware.disabled.ts (renomeado, +6 −4)
- src/app/(main)/dashboard/finance/_components/expense-summary.tsx (modificado, +5 −5)
- src/app/(main)/dashboard/[...not-found]/page.tsx (adicionado, +9 −1)
- src/app/(main)/dashboard/crm/_components/schema.ts (adicionado, +10 −0)
- src/app/(main)/dashboard/finance/_components/financial-overview.tsx (modificado, +4 −4)
- src/navigation/sidebar/sidebar-items.ts (modificado, +5 −3)
- src/lib/layout-utils.ts (adicionado, +6 −0)
- src/types/preferences/theme.ts (modificado, +2 −3)
- eslint.config.mjs (modificado, +4 −1)
- src/components/ui/calendar.tsx (modificado, +4 −1)
- src/app/(main)/dashboard/about/page.tsx (removido, +0 −5)
- src/app/(main)/dashboard/default/_components/columns.tsx (modificado, +3 −1)
- src/components/simple-icon.tsx (modificado, +2 −1)
- src/server/server-actions.ts (modificado, +2 −1)
- src/stores/preferences/preferences-store.ts (renomeado, +1 −1)
- .husky/pre-commit (modificado, +2 −0)
- src/app/(main)/unauthorized/page.tsx (modificado, +1 −1)
- src/app/(main)/auth/_components/login-form.tsx (renomeado, +1 −1)
- src/app/(main)/auth/_components/register-form.tsx (renomeado, +1 −1)
- public/avatars/jd.svg (adicionado e removido, +1 −1)
- public/flags/au.svg (adicionado e removido, +1 −1)
- public/flags/br.svg (adicionado e removido, +1 −1)
- public/flags/cn.svg (removido, +0 −1)
- public/flags/fr.svg (removido, +0 −1)
- media/dashboard.png (modificado)
- media/dashboard.jpg (adicionado e removido)
- src/stores/preferences/preferences-provider.tsx (renomeado)
- public/cards/chip.jpg (adicionado e removido)
- public/avatars/a1.jpg (adicionado e removido)
- public/avatars/a2.jpg (adicionado e removido)
- public/avatars/mt.png (adicionado e removido)
- src/app/(main)/dashboard/crm/_components/crm-charts.config.ts (adicionado)

### Contribuidores
- @mmdj04

---

## 2025-06

**Resumo**: 25 commits • 77 arquivos • +3.071 −2.034 • 3 outros, 19 manutenção, 1 merges, 2 novidades

### Novidades
- Added **v1 auth screens** and code cleanup
- Added **content layout switcher** for full width and centered layouts

### Manutenção
- Code cleanup
- Replace static icons with simple icons package & code cleanup
- Improved **data table rendering** logic for better readability
- Improved **data table**
- Updated **deps**
- Migrated **shadcn components to** radix-ui mono package
- Refactored **default dashboard components,** data table restructure & update deps
- Added **search dialog and** refactor code
- Discard last commit and revert changes
- Updated **readme**
- Updated **shadcn components and** dependencies
- Updated **responsive margin logic** for centered layout and inset sidebar
- Code cleanup & improve data table
- Code cleanup & modified data table
- Updated **data table implementation,** code clean & update deps

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
- src/app/(main)/dashboard/_components/sidebar/search-dialog.tsx (adicionado, +76 −0)
- src/app/(main)/dashboard/default/_components/data-table.tsx (renomeado, +15 −58)
- src/app/(main)/dashboard/crm/_components/overview-cards.tsx (adicionado, +71 −0)
- src/app/(main)/auth/login/_components/login-form.tsx (removido, +0 −70)
- src/app/(main)/dashboard/about/components/data-table-row-actions.tsx (removido, +0 −64)
- src/app/(main)/dashboard/finance/_components/pie-chart-flow.tsx (adicionado, +53 −0)
- src/app/(main)/dashboard/_components/data-table/data-table-toolbar.tsx (removido, +3 −49)
- src/app/(main)/dashboard/crm/_components/dummy-graph.tsx (adicionado, +48 −0)
- src/app/(main)/dashboard/layout.tsx (modificado, +29 −19)
- src/app/(main)/auth/v1/login/page.tsx (adicionado, +48 −0)
- src/app/(main)/auth/v1/register/page.tsx (adicionado, +48 −0)
- src/app/(main)/dashboard/crm/_components/statcard.tsx (modificado, +12 −28)
- src/app/(main)/dashboard/default/data-table.tsx (modificado, +3 −34)
- src/lib/layout-preferences.ts (modificado, +22 −13)
- src/app/(main)/dashboard/_components/data-table/drag-column.tsx (adicionado, +32 −0)
- src/app/(main)/dashboard/finance/page.tsx (adicionado, +30 −0)
- src/app/(main)/dashboard/_components/data-table/draggable-row.tsx (adicionado, +27 −0)
- src/app/(main)/dashboard/_components/sidebar/layout-controls.tsx (modificado, +23 −3)
- src/app/(main)/auth/login/page.tsx (removido, +0 −26)
- src/app/(main)/dashboard/default/_components/table-cell-viewer.tsx (modificado, +12 −13)
- src/app/(main)/auth/layout.tsx (removido, +0 −24)
- src/app/(main)/dashboard/default/page.tsx (modificado, +8 −14)
- src/app/(main)/dashboard/crm/_components/radar-chart-label.tsx (modificado, +13 −8)
- src/app/(main)/dashboard/crm/_components/tab-triggers.tsx (modificado, +10 −11)
- src/components/data-table/data-table-column-header.tsx (modificado, +12 −7)
- src/app/(main)/dashboard/default/_components/columns.tsx (modificado, +13 −4)
- src/app/(main)/dashboard/_components/data-table/data-table-column-header.tsx (renomeado, +9 −6)
- src/app/(main)/dashboard/default/_components/schema.ts (adicionado, +11 −0)
- src/app/(main)/dashboard/_components/data-table/table-utils.ts (adicionado, +7 −0)
- src/app/(main)/dashboard/_components/sidebar/app-sidebar.tsx (modificado, +2 −3)
- src/components/ui/drawer.tsx (modificado, +4 −1)
- src/app/(main)/dashboard/crm/_components/crm-section-cards.tsx (modificado, +2 −2)
- src/components/ui/badge.tsx (modificado, +2 −2)
- src/components/ui/breadcrumb.tsx (modificado, +2 −2)
- src/app/(main)/dashboard/crm/_components/transaction.tsx (modificado, +1 −2)
- src/navigation/sidebar/sidebar-items.ts (modificado, +1 −1)
- src/app/(main)/dashboard/crm/page.tsx (modificado, +2 −0)
- src/components/ui/accordion.tsx (modificado, +1 −1)
- src/components/ui/alert-dialog.tsx (modificado, +1 −1)
- src/components/ui/aspect-ratio.tsx (modificado, +1 −1)
- src/components/ui/avatar.tsx (modificado, +1 −1)
- src/app/(main)/dashboard/default/_components/section-cards.tsx (renomeado, +1 −1)
- src/app/(main)/dashboard/_components/sidebar/account-switcher.tsx (modificado, +1 −1)
- src/app/(main)/dashboard/_components/sidebar/theme-switcher.tsx (modificado, +1 −1)
- .gitignore (modificado, +1 −1)
- README.md (modificado, +1 −1)
- components.json (modificado, +1 −1)
- public/icons/bootstrap.svg (removido, +0 −1)
- public/icons/figma.svg (removido, +0 −1)
- public/icons/laravel.svg (removido, +0 −1)
- public/avatars/jd.svg (adicionado, +1 −0)
- public/flags/au.svg (adicionado, +1 −0)
- public/cards/chip.jpg (adicionado)
- public/cards/ae.jpg (adicionado e removido)
- public/cards/mc.jpg (adicionado e removido)
- public/cards/visa.png (adicionado e removido)
- public/avatars/a1.jpg (adicionado)
- public/avatars/a2.jpg (adicionado)
- public/avatars/mt.png (adicionado)
- src/app/(main)/dashboard/default/_components/chart-area-interactive.tsx (renomeado)
- src/app/(main)/dashboard/default/_components/data.json (renomeado)
- src/app/(main)/dashboard/_components/data-table/data-table-view-options.tsx (renomeado)

### Contribuidores
- @Manasa0424
- @mmdj04

---

## 2025-05

**Resumo**: 26 commits • 55 arquivos • +8.328 −7.416 • 13 manutenção, 5 novidades, 5 outros, 1 correções, 1 merges, 1 refatorações

### Novidades
- Added **account switcher component**
- Added **theme switcher**
- Updated **sidebar to use** dropdown menu in collapsed state
- Added **layout preferences panel** with sidebar variant & collapsible settings
- Migrated **to Next.js 15** and Tailwind CSS v4 with new color theme (#4)

### Correções
- Fallback to collapsible layout on mobile sidebar

### Refatorações
- Removed **unnecessary file** (#4)

### Manutenção
- Updated **deps**
- Updated **deps, app config,** and minor code quality fixes
- Code cleanup
- Updated **media image**
- Added **eslint-plugin-sonarjs for commented-out** code detection, clean up code, and update dependencies
- Restructure project components to _components and update dependencies
- Updated **project file structure** with (main) and (external) route groups
- Uncommented redirect code
- Code cleanup, optimize sidebar re-renders, add prettier-plugin-tailwindcss, and lint codebase
- Updated **preview image &** readme
- Updated **README and preview** image

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
- src/components/icons/logo.tsx (removido, +0 −38)
- src/app/(main)/dashboard/layout.tsx (modificado, +27 −10)
- next.config.mjs (modificado, +18 −18)
- src/app/dashboard/components/sidebar/sidebar-header.tsx (removido, +0 −32)
- src/app/layout.tsx (modificado, +16 −13)
- src/utils/roles.ts (removido, +0 −26)
- src/app/(main)/dashboard/_components/sidebar/app-sidebar.tsx (renomeado, +8 −14)
- src/app/(main)/dashboard/_components/sidebar/nav-user.tsx (modificado, +11 −10)
- src/data/users.ts (adicionado, +20 −0)
- src/server/server-actions.ts (adicionado, +20 −0)
- src/app/auth/login/components/login-form.tsx (modificado, +10 −10)
- src/lib/layout-preferences.ts (adicionado, +19 −0)
- src/components/ui/dialog.tsx (modificado, +13 −5)
- src/app/(main)/dashboard/_components/sidebar/theme-switcher.tsx (adicionado, +16 −0)
- src/lib/utils.ts (modificado, +14 −0)
- src/config/app-config.ts (adicionado, +11 −0)
- src/components/ui/command.tsx (modificado, +8 −1)
- src/app/(main)/dashboard/_components/sidebar/nav-documents.tsx (renomeado, +4 −4)
- src/app/auth/login/page.tsx (modificado, +4 −4)
- src/config/project-config.ts (removido, +0 −6)
- src/app/(main)/auth/layout.tsx (renomeado, +1 −5)
- src/app/(main)/auth/login/_components/login-form.tsx (renomeado, +0 −5)
- src/app/auth/layout.tsx (modificado, +2 −2)
- components.json (modificado, +2 −2)
- postcss.config.mjs (modificado, +2 −2)
- .prettierrc (modificado, +2 −1)
- src/components/ui/resizable.tsx (modificado, +1 −1)
- src/components/ui/separator.tsx (modificado, +1 −1)
- src/components/ui/sidebar.tsx (modificado, +1 −1)
- src/app/(main)/auth/login/page.tsx (renomeado, +1 −1)
- src/utils/routes.ts (removido, +0 −1)
- media/dashboard.png (renomeado)
- public/avatars/arhamkhnz.png (adicionado)
- src/app/(external)/page.tsx (renomeado)
- src/app/(main)/auth/login/components/login-form.tsx (renomeado)
- src/app/(main)/dashboard/about/page.tsx (renomeado)
- src/app/(main)/dashboard/components/sidebar/app-sidebar.tsx (renomeado)
- src/app/(main)/dashboard/components/sidebar/chart-area-interactive.tsx (renomeado)
- src/app/(main)/dashboard/components/sidebar/data-table.tsx (renomeado)
- media/dashboard-lg.png (modificado)

### Contribuidores
- @mmdj04

---

## 2025-04

**Resumo**: 1 commits • 3 arquivos • +1.210 −2.109 • 1 manutenção

### Manutenção
- Updated **dependencies & shadcn** components

### Arquivos principais
- package-lock.json (modificado, +1.163 −2.063)
- package.json (modificado, +46 −46)
- eslint.config.mjs (modificado, +1 −0)

### Contribuidores
- @mmdj04

---

## 2025-03

**Resumo**: 7 commits • 22 arquivos • +628 −368 • 6 manutenção, 1 novidades

### Novidades
- Redesign dashboard, cleanup code & update color scheme

### Manutenção
- Updated **dependencies & shadcn** components
- Enabled **bracket spacing in** Prettier config
- Enforce context value memoization eslint rule
- Updated **project dependencies &** refresh shadcn components
- Enforce no-duplicate-imports rule and lint code
- Updated **dependencies**

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
- src/components/ui/select.tsx (modificado, +1 −1)
- src/components/ui/chart.tsx (modificado, +1 −1)
- README.md (modificado, +1 −1)
- src/app/auth/layout.tsx (modificado, +1 −1)
- src/app/dashboard/about/page.tsx (modificado, +0 −2)
- src/components/ui/navigation-menu.tsx (modificado, +1 −1)
- media/dashboard-lg.png (modificado)

### Contribuidores
- @mmdj04

---

## 2025-02

**Resumo**: 2 commits • 7 arquivos • +677 −601 • 2 manutenção

### Manutenção
- Updated **eslint config**
- Updated **shadcn components &** packages to latest version

### Arquivos principais
- package-lock.json (modificado, +596 −543)
- package.json (modificado, +43 −43)
- src/components/ui/menubar.tsx (modificado, +25 −5)
- src/components/ui/sidebar.tsx (modificado, +8 −8)
- eslint.config.mjs (modificado, +3 −0)
- src/components/ui/form.tsx (modificado, +1 −1)
- src/components/ui/select.tsx (modificado, +1 −1)

### Contribuidores
- @mmdj04

---

## 2025-01

**Resumo**: 2 commits • 9 arquivos • +881 −382 • 2 manutenção

### Manutenção
- Updated **eslint config for** file naming conventions and linting rules, linted codebase
- Updated **dependencies & code** cleanup

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
- @mmdj04

---

## 2024-12

**Resumo**: 3 commits • 8 arquivos • +1.815 −1.269 • 3 manutenção

### Manutenção
- Updated **dependencies**
- Updated **ESLint configuration for** function spacing rules & lint code
- Updated **dependencies, eslint &** prettier config, and lint code

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
- @mmdj04

---

## 2024-11

**Resumo**: 14 commits • 23 arquivos • +20.151 −16.414 • 8 manutenção, 1 correções, 3 merges, 2 novidades

### Novidades
- Removed **Airbnb config &** update ESLint to latest version with flat config and custom rules (#2)
- Husky init

### Correções
- Removed **SonarJS configuration to** resolve ESLint compatibility issues

### Manutenção
- Updated **dependencies to latest** versions
- Updated **package-lock and lint** code
- Updated **dependencies**
- Updated **eslint config**
- Updated **Next.js config to** remove comments in production build
- Updated **sidebar items, dashboard** layout, and style improvements
- Refactored **code and update** Shadcn components
- Updated **dependencies, refactor sidebar** code & update Shadcn components

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
- src/components/ui/accordion.tsx (modificado, +2 −3)
- .prettierrc (modificado, +2 −2)
- src/components/ui/calendar.tsx (modificado, +2 −2)
- components.json (modificado, +2 −1)
- src/components/ui/breadcrumb.tsx (modificado, +1 −2)
- src/app/auth/login/components/LoginForm.tsx (modificado, +1 −1)
- src/app/dashboard/layout.tsx (modificado, +1 −1)
- .husky/pre-commit (adicionado, +1 −0)

### Contribuidores
- @mmdj04

---

## 2024-10

**Resumo**: 7 commits • 17 arquivos • +1.311 −1.720 • 6 manutenção, 1 novidades

### Novidades
- Added **shadcn sidebar component,** update to new-york style, update dependencies, and remove custom sidebar

### Manutenção
- Code cleanup
- Updated **version**
- Updated **readme**
- Updated **dashboard preview image**
- Updated **dependencies**
- Updated **dependencies, UI components,** and app config

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
- media/dashboard-lg.png (modificado)
- media/dashboard-sm.gif (removido)

### Contribuidores
- @mmdj04

---

## 2024-09

- Nenhum commit registrado.

---

## 2024-08

**Resumo**: 15 commits • 29 arquivos • +8.449 −290 • 9 manutenção, 2 correções, 4 outros

### Correções
- Improved **responsiveness of sidebar** headings in collapsed state
- Root path redirect

### Manutenção
- Updated **ESLint config and** apply linting corrections
- Updated **branding**
- Updated **dashboard preview image** and README
- Refactored **code & fix** sidebar styling issues
- Fixed **root path redirect**
- Code refactor & minor style adjustments
- Removed **github workflow**
- Minor changes
- Added **project media**

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
- src/app/dashboard/layout.tsx (modificado, +9 −6)
- src/hooks/useVariantBasedOnRoute.ts (modificado, +12 −1)
- .prettierignore (adicionado, +13 −0)
- .prettierrc (adicionado, +7 −0)
- .eslintignore (adicionado, +6 −0)
- src/app/auth/layout.tsx (modificado, +2 −2)
- src/app/dashboard/components/account-switcher.tsx (modificado, +2 −2)
- src/app/page.tsx (modificado, +2 −2)
- next.config.mjs (adicionado, +4 −0)
- src/app/auth/login/components/LoginForm.tsx (modificado, +2 −1)
- src/app/layout.tsx (modificado, +1 −1)
- src/app/auth/login/page.tsx (modificado, +1 −0)
- media/dashboard-lg.png (adicionado)
- media/dashboard-sm.gif (adicionado)

### Contribuidores
- @mmdj04
