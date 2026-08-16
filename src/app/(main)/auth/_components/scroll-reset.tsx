"use client";

import { useEffect } from "react";

import { usePathname } from "next/navigation";

export function ScrollReset() {
  const _pathname = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}
