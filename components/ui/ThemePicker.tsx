"use client";

import { useState, useEffect, useRef } from "react";
import { Shuffle } from "lucide-react";

// Theme definitions with display info
const themes = [
  { id: "vscode", name: "vscode", dots: ["#569cd6", "#1e1e1e", "#d4d4d4"] },
  { id: "cyberspace", name: "cyberspace", dots: ["#7dffbc", "#00ff88", "#c9abff"] },
  { id: "8008", name: "8008", dots: ["#939eae", "#f89faf", "#2d2d2d"] },
  { id: "aether", name: "aether", dots: ["#7aa2f7", "#1a1b26", "#e0d0ff"] },
  { id: "dark-magic-girl", name: "dark magic girl", dots: ["#f5e6ff", "#ff77a8", "#1e1432"] },
  { id: "bento", name: "bento", dots: ["#829aab", "#ff934f", "#f0d1b9"] },
  { id: "milkshake", name: "milkshake", dots: ["#b8d4e8", "#2e3440", "#6495ed"] },
  { id: "thai-tea", name: "thai tea", dots: ["#cc8833"] },
  { id: "darling", name: "darling", dots: ["#fceef0", "#b7415b", "#fdf6f6"] },
] as const;

type ThemeId = (typeof themes)[number]["id"];

function ThemeDots({ dots, size = "sm" }: { dots: readonly string[]; size?: "sm" | "md" }) {
  const dotSize = size === "sm" ? "h-2.5 w-2.5" : "h-3 w-3";
  return (
    <div className="flex items-center gap-0.5 bg-surface-hover rounded-full px-1.5 py-1">
      {dots.map((color, i) => (
        <span
          key={i}
          className={`${dotSize} rounded-full`}
          style={{ backgroundColor: color }}
        />
      ))}
    </div>
  );
}

export default function ThemePicker() {
  const [currentTheme, setCurrentTheme] = useState<ThemeId>("vscode");
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Load theme from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("theme") as ThemeId | null;
    if (saved && themes.some((t) => t.id === saved)) {
      setCurrentTheme(saved);
      document.documentElement.setAttribute("data-theme", saved);
    } else {
      document.documentElement.setAttribute("data-theme", "vscode");
    }
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectTheme = (themeId: ThemeId) => {
    setCurrentTheme(themeId);
    localStorage.setItem("theme", themeId);
    document.documentElement.setAttribute("data-theme", themeId);
    setIsOpen(false);
  };

  const randomTheme = () => {
    const otherThemes = themes.filter((t) => t.id !== currentTheme);
    const random = otherThemes[Math.floor(Math.random() * otherThemes.length)];
    selectTheme(random.id);
  };

  const current = themes.find((t) => t.id === currentTheme) ?? themes[0];

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Trigger button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-2 py-1.5 rounded-lg border border-border hover:border-accent/50 transition-colors"
        aria-label="Select theme"
      >
        <Shuffle className="h-3.5 w-3.5 text-muted" />
        <span className="text-xs font-mono text-muted">{current.name}</span>
        <ThemeDots dots={current.dots} />
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 py-2 bg-surface border border-border rounded-xl shadow-lg z-50">
          {themes.map((theme) => (
            <button
              key={theme.id}
              onClick={() => selectTheme(theme.id)}
              className={`w-full flex items-center justify-between px-3 py-2 text-sm hover:bg-surface-hover transition-colors ${
                theme.id === currentTheme ? "text-accent" : "text-foreground"
              }`}
            >
              <span className="font-mono">{theme.name}</span>
              <ThemeDots dots={theme.dots} size="md" />
            </button>
          ))}

          {/* Random button */}
          <div className="border-t border-border mt-2 pt-2 px-3">
            <button
              onClick={randomTheme}
              className="w-full flex items-center justify-center gap-2 py-2 text-sm text-muted hover:text-accent transition-colors"
            >
              <Shuffle className="h-3.5 w-3.5" />
              <span>random</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
