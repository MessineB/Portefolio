"use client";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const [theme, setTheme] = useState<"light"|"dark"|null>(null);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme-ready", "true");
    const attr = document.documentElement.getAttribute("data-theme");
    setTheme((attr === "dark" || attr === "light") ? attr : "light");
  }, []);

  function toggleTheme() {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try { localStorage.setItem("theme", next); } catch {}
    setTheme(next);
  }

  if (!theme) return null;

  return (
    <button
      onClick={toggleTheme}
      aria-label={theme === "dark" ? "Passer en mode clair" : "Passer en mode sombre"}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border ui-border bg-[var(--card-bg)]/80 backdrop-blur hover:bg-[var(--hover-bg)]"
    >
      {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
}
