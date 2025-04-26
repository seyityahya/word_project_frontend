"use client";

import * as React from "react";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface IDatePickerProps {
  className?: string;
  date?: Date | undefined;
  onSelect?: SelectSingleEventHandler | undefined;
  placeholder?: string;
}

export function DatePicker(
  {
    className,
    date,
    onSelect,
    placeholder = "Select a date",
  }: IDatePickerProps = { placeholder: "Select a date" }
) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-[240px] justify-start text-left font-normal",
            !date && "text-muted-foreground",
            className
          )}
        >
          <CalendarIcon />
          {date ? format(date, "PPP") : <span>{placeholder}</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start"></PopoverContent>
    </Popover>
  );
}
