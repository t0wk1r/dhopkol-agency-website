"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
    const { resolvedTheme, setTheme } = useTheme();

    function toggleTheme() {
        const currentTheme =
            resolvedTheme ??
            (document.documentElement.classList.contains("dark")
                ? "dark"
                : "light");

        setTheme(currentTheme === "dark" ? "light" : "dark");
    }

    return (
        <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle light and dark theme"
            className="inline-flex size-11 shrink-0 items-center justify-center rounded-full border border-line bg-background text-heading transition-colors hover:border-primary hover:text-primary"
        >
            <Sun
                size={19}
                aria-hidden="true"
                className="hidden dark:block"
            />

            <Moon
                size={19}
                aria-hidden="true"
                className="block dark:hidden"
            />
        </button>
    );
}