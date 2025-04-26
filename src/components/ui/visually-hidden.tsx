"use client";

import { cn } from "@/lib/utils";
import { forwardRef, HTMLAttributes } from "react";

export interface VisuallyHiddenProps extends HTMLAttributes<HTMLSpanElement> {}

const VisuallyHidden = forwardRef<HTMLSpanElement, VisuallyHiddenProps>(
  ({ className, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          "absolute h-px w-px p-0 overflow-hidden whitespace-nowrap border-0",
          "clip-[rect(0px,0px,0px,0px)]",
          className
        )}
        {...props}
      />
    );
  }
);

VisuallyHidden.displayName = "VisuallyHidden";

export { VisuallyHidden };