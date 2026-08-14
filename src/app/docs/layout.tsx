import type { Metadata } from "next";

import { CopyPageButton } from "@/components/copy-page-button";
import { DocsMobileNav } from "@/components/docs-mobile-nav";
import { DocsSidebar } from "@/components/docs-sidebar";
import { Header } from "@/components/header";

export const metadata: Metadata = {
  title: {
    default: "Studio Admin Docs",
    template: "%s | Studio Admin Docs",
  },
  description: "Documentation for Studio Admin template",
};

export default function DocsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100">
      <Header />
      <DocsMobileNav />
      <div className="mx-auto flex max-w-5xl gap-16 px-6 py-8 lg:py-12">
        <aside className="scrollbar-thin scrollbar-thumb-zinc-200 dark:scrollbar-thumb-zinc-700 scrollbar-thumb-rounded-full sticky top-28 hidden h-[calc(100vh-7rem)] w-48 shrink-0 overflow-y-scroll overscroll-y-auto lg:block">
          <DocsSidebar />
        </aside>
        <div className="min-w-0 max-w-2xl flex-1 pb-20">
          <div className="mb-4 flex justify-end">
            <CopyPageButton />
          </div>
          <article className="prose">{children}</article>
        </div>
      </div>
    </div>
  );
}
