import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-purple-600 text-white [a&]:hover:bg-purple-600/90 shadow-xs [a&]:hover:shadow-md [a&]:hover:shadow-purple-600/20 [a&]:hover:-translate-y-0.5",
        error:
          "border-transparent bg-destructive text-white shadow-xs [a&]:hover:bg-destructive/90 [a&]:hover:shadow-md [a&]:hover:shadow-destructive/20 [a&]:hover:-translate-y-0.5 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40",
        success:
          "border-transparent bg-success text-white shadow-xs [a&]:hover:bg-success/90 [a&]:hover:shadow-md [a&]:hover:shadow-success/20 [a&]:hover:-translate-y-0.5 focus-visible:ring-success/20 dark:focus-visible:ring-success/40",
        warning:
          "border-transparent bg-warning text-white shadow-xs [a&]:hover:bg-warning/90 [a&]:hover:shadow-md [a&]:hover:shadow-warning/20 [a&]:hover:-translate-y-0.5 focus-visible:ring-warning/20 dark:focus-visible:ring-warning/40",
        outline:
          "text-purple-600 [a&]:hover:bg-purple-100/50 [a&]:hover:text-purple-700 [a&]:hover:border-purple-500 [a&]:hover:shadow-md [a&]:hover:shadow-purple-500/10 [a&]:hover:-translate-y-0.5 dark:text-purple-500 dark:border-purple-500 dark:[a&]:hover:bg-purple-800/20 dark:[a&]:hover:text-purple-400",
        secondary:
          "border-transparent bg-purple-200 text-purple-800 shadow-xs [a&]:hover:bg-purple-200/80 [a&]:hover:text-purple-700 [a&]:hover:shadow-md [a&]:hover:shadow-purple-200/30 [a&]:hover:-translate-y-0.5 dark:bg-purple-800/30 dark:text-purple-400 dark:[a&]:hover:bg-purple-700/40 dark:[a&]:hover:text-purple-300",
        ghost:
          "border-transparent text-purple-600 [a&]:hover:bg-purple-100/50 [a&]:hover:text-purple-700 [a&]:hover:-translate-y-0.5 dark:text-purple-500 dark:[a&]:hover:bg-purple-800/20 dark:[a&]:hover:text-purple-400",
        link:
          "border-transparent text-purple-600 underline-offset-4 [a&]:hover:underline [a&]:hover:text-purple-700 [a&]:hover:-translate-y-0.5 dark:text-purple-500 dark:[a&]:hover:text-purple-400",
        destructive:
          "border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

function Badge({
  className,
  variant,
  asChild = false,
  startIcon,
  children,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & {
    asChild?: boolean,
    startIcon?: React.ReactNode
  }) {
  const Comp = asChild ? Slot : "span";

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    >
      {startIcon && startIcon}
      {children}
    </Comp>
  );
}

export { Badge, badgeVariants };
