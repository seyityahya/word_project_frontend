"use client";

import * as React from "react";
import { createContext, useContext, useEffect, useState } from "react";

type Theme = "dark" | "light" | "system";

type ThemeProviderProps = {
    children: React.ReactNode;
    defaultTheme?: Theme;
    storageKey?: string;
    attribute?: string;
    enableSystem?: boolean;
    disableTransitionOnChange?: boolean;
};

type ThemeProviderState = {
    theme: Theme;
    setTheme: (theme: Theme) => void;
};

const initialState: ThemeProviderState = {
    theme: "system",
    setTheme: () => null,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
    children,
    defaultTheme = "system",
    storageKey = "theme-preference",
    enableSystem = true, // Default to enabling system theme
    disableTransitionOnChange = false,
    ...props
}: ThemeProviderProps) {
    const [theme, setTheme] = useState<Theme>(defaultTheme);

    useEffect(() => {
        const savedTheme = localStorage.getItem(storageKey) as Theme | null;

        if (savedTheme) {
            setTheme(savedTheme);
        } else if (defaultTheme === "system" && enableSystem) {
            const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
                ? "dark"
                : "light";
            setTheme(systemTheme);
        }
    }, [defaultTheme, storageKey, enableSystem]);

    useEffect(() => {
        const root = window.document.documentElement;

        if (disableTransitionOnChange) {
            root.classList.add("transition-none");
            // Force a reflow to make sure the class is applied immediately
            window.getComputedStyle(root).getPropertyValue("opacity");
        }

        root.classList.remove("light", "dark");

        if (theme === "system" && enableSystem) {
            const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
                ? "dark"
                : "light";
            root.classList.add(systemTheme);
        } else {
            root.classList.add(theme);
        }

        if (disableTransitionOnChange) {
            // Remove the class after the changes were made
            setTimeout(() => {
                root.classList.remove("transition-none");
            }, 0);
        }
    }, [theme, disableTransitionOnChange, enableSystem]);

    const value = {
        theme,
        setTheme: (theme: Theme) => {
            localStorage.setItem(storageKey, theme);
            setTheme(theme);
        },
    };

    return (
        <ThemeProviderContext.Provider {...props} value={value}>
            {children}
        </ThemeProviderContext.Provider>
    );
}

export const useTheme = () => {
    const context = useContext(ThemeProviderContext);

    if (context === undefined)
        throw new Error("useTheme must be used within a ThemeProvider");

    return context;
};