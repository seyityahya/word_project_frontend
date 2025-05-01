"use client";

import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { tr } from "date-fns/locale";

export interface DatePickerProps {
    date: Date | undefined;
    setDate: (date: Date | undefined) => void;
    placeholder?: string;
    className?: string;
    disabled?: boolean;
    format?: string;
    showClearButton?: boolean;
}

export function DatePicker({
    date,
    setDate,
    placeholder = "Tarih seçin",
    className,
    format: dateFormat = "PPP",
    disabled = false,
    showClearButton = true,
}: DatePickerProps) {
    const [open, setOpen] = React.useState(false);

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    className={cn(
                        "w-full justify-start text-left font-normal",
                        !date && "text-muted-foreground",
                        className
                    )}
                    disabled={disabled}
                >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? (
                        <span>{format(date, dateFormat, { locale: tr })}</span>
                    ) : (
                        <span>{placeholder}</span>
                    )}
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                    mode="single"
                    selected={date}
                    onSelect={(date) => {
                        setDate(date);
                        setOpen(false);
                    }}
                    initialFocus
                />
                {showClearButton && date && (
                    <div className="p-2 border-t">
                        <Button
                            variant="ghost"
                            className="w-full text-muted-foreground hover:text-foreground"
                            onClick={() => {
                                setDate(undefined);
                                setOpen(false);
                            }}
                            size="sm"
                        >
                            Temizle
                        </Button>
                    </div>
                )}
            </PopoverContent>
        </Popover>
    );
}

export interface DateRangePickerProps {
    dateRange: {
        from: Date | undefined;
        to: Date | undefined;
    };
    setDateRange: (dateRange: { from: Date | undefined; to: Date | undefined }) => void;
    placeholder?: string;
    className?: string;
    disabled?: boolean;
    showClearButton?: boolean;
}

export function DateRangePicker({
    dateRange,
    setDateRange,
    placeholder = "Tarih aralığı seçin",
    className,
    disabled = false,
    showClearButton = true,
}: DateRangePickerProps) {
    const [open, setOpen] = React.useState(false);

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    className={cn(
                        "w-full justify-start text-left font-normal",
                        !dateRange.from && "text-muted-foreground",
                        className
                    )}
                    disabled={disabled}
                >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {dateRange.from ? (
                        dateRange.to ? (
                            <span>
                                {format(dateRange.from, "P", { locale: tr })} -{" "}
                                {format(dateRange.to, "P", { locale: tr })}
                            </span>
                        ) : (
                            format(dateRange.from, "PPP", { locale: tr })
                        )
                    ) : (
                        <span>{placeholder}</span>
                    )}
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                    mode="range"
                    selected={dateRange}
                    onSelect={setDateRange}
                    numberOfMonths={2}
                    initialFocus
                />
                {showClearButton && dateRange.from && (
                    <div className="p-2 border-t">
                        <Button
                            variant="ghost"
                            className="w-full text-muted-foreground hover:text-foreground"
                            onClick={() => {
                                setDateRange({ from: undefined, to: undefined });
                                setOpen(false);
                            }}
                            size="sm"
                        >
                            Temizle
                        </Button>
                    </div>
                )}
            </PopoverContent>
        </Popover>
    );
}

export interface InputDatePickerProps {
    date: Date | undefined;
    setDate: (date: Date | undefined) => void;
    placeholder?: string;
    className?: string;
    disabled?: boolean;
    format?: string;
}

export function InputDatePicker({
    date,
    setDate,
    placeholder = "GG/AA/YYYY",
    className,
    disabled = false,
    format: dateFormat = "P",
}: InputDatePickerProps) {
    const [open, setOpen] = React.useState(false);
    const [inputValue, setInputValue] = React.useState<string>(
        date ? format(date, dateFormat, { locale: tr }) : ""
    );

    React.useEffect(() => {
        if (date) {
            setInputValue(format(date, dateFormat, { locale: tr }));
        } else {
            setInputValue("");
        }
    }, [date, dateFormat]);

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <div className="relative">
                <input
                    type="text"
                    placeholder={placeholder}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    className={cn(
                        "w-full rounded-md border border-input bg-transparent px-3 py-2 pr-10 text-sm shadow-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-purple-400",
                        className
                    )}
                    disabled={disabled}
                    onClick={() => !open && setOpen(true)}
                />
                <PopoverTrigger asChild>
                    <Button
                        variant="ghost"
                        className="absolute right-0 top-0 h-full px-3 py-2 text-muted-foreground"
                        disabled={disabled}
                    >
                        <CalendarIcon className="h-4 w-4" />
                    </Button>
                </PopoverTrigger>
            </div>
            <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                    mode="single"
                    selected={date}
                    onSelect={(date) => {
                        setDate(date);
                        if (date) {
                            setInputValue(format(date, dateFormat, { locale: tr }));
                        }
                        setOpen(false);
                    }}
                    initialFocus
                />
            </PopoverContent>
        </Popover>
    );
}