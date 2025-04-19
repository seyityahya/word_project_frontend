import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

// Spinner bileşeni için SVG animasyonu
const Spinner = ({ className }: { className?: string }) => {
  return (
    <svg
      className={cn("animate-spin size-4", className)}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      ></circle>
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </svg>
  )
}

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all duration-200 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "bg-purple-600 text-white shadow-xs hover:bg-purple-600/90 hover:shadow-md hover:shadow-purple-600/20 hover:-translate-y-0.5 dark:bg-purple-600 dark:hover:bg-purple-500/90 dark:hover:shadow-purple-600/30",
        error:
          "bg-destructive text-white shadow-xs hover:bg-destructive/90 hover:shadow-md hover:shadow-destructive/20 hover:-translate-y-0.5 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/80 dark:hover:bg-destructive/70 dark:hover:shadow-destructive/30",
        success:
          "bg-success text-white shadow-xs hover:bg-success/90 hover:shadow-md hover:shadow-success/20 hover:-translate-y-0.5 focus-visible:ring-success/20 dark:focus-visible:ring-success/40 dark:bg-success/80 dark:hover:bg-success/70 dark:hover:shadow-success/30",
        warning:
          "bg-warning text-white shadow-xs hover:bg-warning/90 hover:shadow-md hover:shadow-warning/20 hover:-translate-y-0.5 focus-visible:ring-warning/20 dark:focus-visible:ring-warning/40 dark:bg-warning/80 dark:hover:bg-warning/70 dark:hover:shadow-warning/30",
        outline:
          "border border-purple-600 bg-background text-purple-600 shadow-xs hover:bg-purple-100/50 hover:text-purple-700 hover:border-purple-500 hover:shadow-md hover:shadow-purple-500/10 hover:-translate-y-0.5 dark:bg-input/30 dark:border-purple-500 dark:text-purple-500 dark:hover:bg-purple-800/20 dark:hover:border-purple-400 dark:hover:text-purple-400 dark:hover:shadow-purple-600/20",
        secondary:
          "bg-purple-200 text-purple-800 shadow-xs hover:bg-purple-200/80 hover:text-purple-700 hover:shadow-md hover:shadow-purple-200/30 hover:-translate-y-0.5 dark:bg-purple-800/30 dark:text-purple-400 dark:hover:bg-purple-700/40 dark:hover:text-purple-300 dark:hover:shadow-purple-800/20",
        ghost:
          "text-purple-600 hover:bg-purple-100/50 hover:text-purple-700 hover:-translate-y-0.5 dark:text-purple-500 dark:hover:bg-purple-800/20 dark:hover:text-purple-400",
        link: "text-purple-600 underline-offset-4 hover:underline hover:text-purple-700 hover:-translate-y-0.5 dark:text-purple-500 dark:hover:text-purple-400",
        iconOnly:
          "p-2 h-auto w-auto rounded-md hover:bg-accent/50 hover:-translate-y-0.5 dark:hover:bg-accent/30 dark:hover:text-accent-foreground",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
      },
      isLoading: {
        true: 'cursor-not-allowed opacity-70'
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      isLoading: false
    }
  }
)

function Button({
  isLoading,
  className,
  variant,
  size,
  asChild = false,
  children,
  startIcon,
  endIcon,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
    isLoading?: boolean,
    startIcon?: React.ReactNode
    endIcon?: React.ReactNode
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      disabled={isLoading}
      className={cn(buttonVariants({ variant, size, isLoading, className }))}
      {...props}
    >
      {isLoading ? (
        <>
          <Spinner />
          <span>{children}</span>
        </>
      ) : (
        <>
          {!isLoading && startIcon}
          {children}
          {!isLoading && endIcon}
        </>
      )}
    </Comp>
  )
}

export { Button, buttonVariants, Spinner }
