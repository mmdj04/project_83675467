"use client";

import { useState } from "react";

import { usePathname } from "next/navigation";

export function CopyPageButton() {
  const pathname = usePathname();
  const [state, setState] = useState<"idle" | "loading" | "copied">("idle");

  const handleCopy = async () => {
    setState("loading");
    try {
      const response = await fetch(`/api/docs-markdown?path=${encodeURIComponent(pathname)}`);
      if (!response.ok) {
        throw new Error("Failed to fetch markdown");
      }
      const markdown = await response.text();
      await navigator.clipboard.writeText(markdown);
      setState("copied");
      setTimeout(() => setState("idle"), 2000);
    } catch {
      setState("idle");
    }
  };

  return (
    <button
      onClick={handleCopy}
      disabled={state === "loading"}
      className="flex items-center gap-1.5 rounded-md border border-border px-2.5 py-1.5 text-muted-foreground text-xs transition-colors hover:bg-muted hover:text-foreground disabled:opacity-50"
      aria-label="Copy page as Markdown"
    >
      {state === "copied" ? (
        <>
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
          Copied
        </>
      ) : (
        <>
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
          </svg>
          Copy Page
        </>
      )}
    </button>
  );
}
