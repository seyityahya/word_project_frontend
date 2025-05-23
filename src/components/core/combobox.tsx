"use client";

import * as React from "react";
import { Check, ChevronsUpDown, X } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { Badge } from "@/components/ui/badge";

// Generic type for the item structure
export type ComboboxItem = {
    value: string;
    label: string;
};

interface ComboboxProps {
    items: ComboboxItem[];
    placeholder?: string;
    searchPlaceholder?: string;
    emptyMessage?: string;
    className?: string;
    multiSelect?: boolean;
    onChange?: (value: string | string[]) => void;
    value?: string | string[];
}

export function Combobox({
    items,
    placeholder = "Select an item...",
    searchPlaceholder = "Search items...",
    emptyMessage = "No items found.",
    className,
    multiSelect = false,
    onChange,
    value: controlledValue,
}: ComboboxProps) {
    const [open, setOpen] = React.useState(false);
    const [internalValue, setInternalValue] = React.useState<string | string[]>(multiSelect ? [] : "");

    // Use either controlled or internal state
    const value = controlledValue !== undefined ? controlledValue : internalValue;

    // Handle selection
    const handleSelect = (currentValue: string) => {
        let newValue: string | string[];

        if (multiSelect) {
            // For multi-select, toggle the selected value in the array
            const valueArray = Array.isArray(value) ? value : [];
            newValue = valueArray.includes(currentValue)
                ? valueArray.filter(v => v !== currentValue)
                : [...valueArray, currentValue];
        } else {
            // For single select, toggle the value (deselect if clicking the same item)
            newValue = currentValue === value ? "" : currentValue;
            setOpen(false); // Close dropdown for single select
        }

        setInternalValue(newValue);
        onChange?.(newValue);
    };

    // Handle removal of a selected item (for multi-select)
    const handleRemove = (itemValue: string, e: React.MouseEvent) => {
        e.stopPropagation(); // Prevent opening the dropdown

        if (multiSelect && Array.isArray(value)) {
            const newValue = value.filter(v => v !== itemValue);
            setInternalValue(newValue);
            onChange?.(newValue);
        }
    };

    // Get display text for single selection
    const getDisplayText = () => {
        if (multiSelect) return "";

        if (value && typeof value === "string") {
            return items.find(item => item.value === value)?.label || placeholder;
        }

        return placeholder;
    };

    // Render selected badges for multi-select
    const renderSelectedItems = () => {
        if (!multiSelect || !Array.isArray(value) || value.length === 0) return null;

        return (
            <div className="flex flex-wrap gap-1">
                {value.map(val => {
                    const item = items.find(item => item.value === val);
                    return item ? (
                        <Badge
                            key={val}
                            className="bg-accent/40 dark:bg-accent/30 text-accent-foreground dark:text-accent-foreground border-none px-2 py-1 flex items-center"
                        >
                            <span>{item.label}</span>
                            <span
                                role="button"
                                tabIndex={0}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleRemove(val, e);
                                }}
                                onKeyDown={(e) => {
                                    if (e.key === "Enter" || e.key === " ") {
                                        e.preventDefault();
                                        e.stopPropagation();
                                        handleRemove(val, e as unknown as React.MouseEvent);
                                    }
                                }}
                                className="ml-1 inline-flex items-center justify-center w-4 h-4 rounded-full cursor-pointer"
                                style={{ pointerEvents: "all" }}
                            >
                                <X className="h-2.5 w-2.5" />
                            </span>
                        </Badge>
                    ) : null;
                })}
            </div>
        );
    };

    return (
        <div className={className}>
            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    <Button
                        variant="outline"
                        role="combobox"
                        aria-expanded={open}
                        className="w-full justify-between min-h-10 bg-background/50 hover:bg-background/80 focus:bg-background/80 active:bg-background/80 border shadow-sm"
                    >
                        <div className="flex items-center flex-wrap gap-1 pr-2 w-full">
                            {multiSelect && Array.isArray(value) && value.length > 0 ? (
                                renderSelectedItems()
                            ) : (
                                <span className="truncate text-foreground">{getDisplayText()}</span>
                            )}
                        </div>
                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 text-purple-500 dark:text-purple-400" />
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-full p-0 bg-popover border-border" align="start">
                    <Command className="bg-transparent">
                        <CommandInput placeholder={searchPlaceholder} className="h-9 bg-transparent border-b border-border focus:ring-purple-400/50" />
                        <CommandList className="bg-transparent">
                            <CommandEmpty className="text-muted-foreground">{emptyMessage}</CommandEmpty>
                            <CommandGroup className="bg-transparent">
                                {items.map((item) => (
                                    <CommandItem
                                        key={item.value}
                                        value={item.value}
                                        onSelect={handleSelect}
                                        className="text-foreground hover:bg-accent/50 aria-selected:bg-accent/50"
                                    >
                                        {item.label}
                                        <Check
                                            className={cn(
                                                "ml-auto h-4 w-4 text-purple-600 dark:text-purple-400",
                                                Array.isArray(value)
                                                    ? value.includes(item.value) ? "opacity-100" : "opacity-0"
                                                    : value === item.value ? "opacity-100" : "opacity-0"
                                            )}
                                        />
                                    </CommandItem>
                                ))}
                            </CommandGroup>
                        </CommandList>
                    </Command>
                </PopoverContent>
            </Popover>
        </div>
    );
}
