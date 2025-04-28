"use client";

import * as React from "react";
import { Moon, Sun, Monitor } from "lucide-react";
import { useTheme } from "@/lib/theme-provider";
import { Button } from "./button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

interface ThemeSwitcherProps {
    className?: string;
    iconClassName?: string;
    variant?: "default" | "outline" | "secondary" | "ghost" | "iconOnly";
}

export function ThemeSwitcher({
    className,
    iconClassName,
    variant = "outline",
}: ThemeSwitcherProps) {
    const { theme, setTheme } = useTheme();

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant={variant}
                    size="icon"
                    className={cn("size-9 rounded-md border-purple-200 dark:border-purple-800/40", className)}
                >
                    <Sun className={cn("size-5 rotate-0 scale-100 transition-all dark:rotate-90 dark:scale-0", iconClassName)} />
                    <Moon className={cn("absolute size-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100", iconClassName)} />
                    <span className="sr-only">Toggle theme</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme("light")} className="flex items-center gap-2">
                    <Sun className="size-4" />
                    <span>Light</span>
                    {theme === "light" && <span className="ml-auto size-2 rounded-full bg-purple-500"></span>}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")} className="flex items-center gap-2">
                    <Moon className="size-4" />
                    <span>Dark</span>
                    {theme === "dark" && <span className="ml-auto size-2 rounded-full bg-purple-500"></span>}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")} className="flex items-center gap-2">
                    <Monitor className="size-4" />
                    <span>System</span>
                    {theme === "system" && <span className="ml-auto size-2 rounded-full bg-purple-500"></span>}
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}