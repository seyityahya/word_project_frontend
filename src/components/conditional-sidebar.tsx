"use client";

import { usePathname } from "next/navigation";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { useIsMobile } from "@/hooks/use-mobile";

interface ConditionalSidebarProps {
  children: React.ReactNode;
}

export function ConditionalSidebar({ children }: ConditionalSidebarProps) {
  const pathname = usePathname();
  const isMobile = useIsMobile();

  // Hide sidebar on login and register pages
  const hideSidebar = pathname === "/login" || pathname === "/register";

  if (hideSidebar) {
    return <>{children}</>;
  }

  return (
    <SidebarProvider defaultOpen={!isMobile}>
      <AppSidebar />
      <main className="flex-1 w-full relative">
        {/* Mobile'da sidebar açmak için floating trigger button */}
        {isMobile && (
          <div className="fixed top-4 left-4 z-50">
            <SidebarTrigger />
          </div>
        )}
        {children}
      </main>
    </SidebarProvider>
  );
}
