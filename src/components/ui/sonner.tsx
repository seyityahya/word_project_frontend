"use client";

import { useTheme } from "next-themes";
import { Toaster as Sonner, ToasterProps } from "sonner";

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      toastOptions={{
        classNames: {
          success: "border-green-200 bg-green-50 text-green-700",
          info: "border-blue-200 bg-blue-50 text-blue-700",
          warning: "border-yellow-200 bg-yellow-50 text-yellow-700",
          error: "border-red-200 bg-red-50 text-red-700",
        },
      }}
      closeButton
      position="top-right"
      {...props}
    />
  );
};

export { Toaster };
