"use client";

import * as React from "react";
import { flushSync } from "react-dom";
import { Monitor, Moon, Sun } from "lucide-react";
import { useShallow } from "zustand/react/shallow";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { usePreferencesStore } from "@/stores/preferences/preferences-provider";

type ThemeSelection = "light" | "dark" | "system";
type Resolved = "light" | "dark";
type Direction = "btt" | "ttb" | "ltr" | "rtl";

function getSystemEffective(): Resolved {
  if (typeof window === "undefined") return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function getClipKeyframes(direction: Direction): [string, string] {
  switch (direction) {
    case "ltr":
      return ["inset(0 100% 0 0)", "inset(0 0 0 0)"];
    case "rtl":
      return ["inset(0 0 0 100%)", "inset(0 0 0 0)"];
    case "ttb":
      return ["inset(0 0 100% 0)", "inset(0 0 0 0)"];
    case "btt":
      return ["inset(100% 0 0 0)", "inset(0 0 0 0)"];
    default:
      return ["inset(0 100% 0 0)", "inset(0 0 0 0)"];
  }
}

interface ThemeTogglerButtonProps extends React.ComponentProps<typeof Button> {
  modes?: ThemeSelection[];
  direction?: Direction;
  onImmediateChange?: (theme: ThemeSelection) => void;
}

function ThemeTogglerButton({
  modes = ["light", "dark", "system"],
  direction = "ltr",
  onImmediateChange,
  onClick,
  className,
  ...props
}: ThemeTogglerButtonProps) {
  const { themeMode, resolvedThemeMode, setPreference } = usePreferencesStore(
    useShallow((state) => ({
      themeMode: state.values.theme_mode,
      resolvedThemeMode: state.resolvedThemeMode,
      setPreference: state.setPreference,
    })),
  );

  const [preview, setPreview] = React.useState<{
    effective: ThemeSelection;
    resolved: Resolved;
  } | null>(null);

  const currentEffective = (preview?.effective ?? themeMode) as ThemeSelection;
  const currentResolved = (preview?.resolved ?? resolvedThemeMode) as Resolved;

  const [fromClip, toClip] = getClipKeyframes(direction);

  const toggleTheme = React.useCallback(
    async (nextTheme: ThemeSelection) => {
      const resolved = nextTheme === "system" ? getSystemEffective() : nextTheme;

      setPreview({ effective: nextTheme, resolved });
      onImmediateChange?.(nextTheme);

      if (nextTheme === "system" && resolved === resolvedThemeMode) {
        setPreference("theme_mode", nextTheme);
        return;
      }

      if (!document.startViewTransition) {
        flushSync(() => {
          setPreview({ effective: nextTheme, resolved });
        });
        setPreference("theme_mode", nextTheme);
        return;
      }

      await document.startViewTransition(() => {
        flushSync(() => {
          setPreview({ effective: nextTheme, resolved });
          document.documentElement.classList.toggle("dark", resolved === "dark");
        });
      }).ready;

      document.documentElement
        .animate({ clipPath: [fromClip, toClip] }, {
          duration: 700,
          easing: "ease-in-out",
          pseudoElement: "::view-transition-new(root)",
        })
        .finished.finally(() => {
          setPreference("theme_mode", nextTheme);
          setPreview(null);
        });
    },
    [onImmediateChange, resolvedThemeMode, fromClip, toClip, setPreference],
  );

  const getNextTheme = (current: ThemeSelection): ThemeSelection => {
    const i = modes.indexOf(current);
    if (i === -1) return modes[0];
    return modes[(i + 1) % modes.length];
  };

  const getIcon = (effective: ThemeSelection, resolved: Resolved) => {
    const theme = modes.includes("system") ? effective : resolved;
    return theme === "system" ? <Monitor /> : theme === "dark" ? <Moon /> : <Sun />;
  };

  return (
    <>
      <Button
        size="icon"
        className={cn(className)}
        onClick={(e) => {
          onClick?.(e);
          toggleTheme(getNextTheme(currentEffective));
        }}
        aria-label={`Current theme: ${currentEffective}. Click to cycle themes`}
        {...props}
      >
        {getIcon(currentEffective, currentResolved)}
      </Button>
      <style>{`::view-transition-old(root), ::view-transition-new(root){animation:none;mix-blend-mode:normal;}`}</style>
    </>
  );
}

export { ThemeTogglerButton, type ThemeTogglerButtonProps };
