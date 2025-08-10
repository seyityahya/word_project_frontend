"use client";

import React from "react";
import {
  Calendar,
  Home,
  Inbox,
  Search,
  Settings,
  ChevronRight,
  User,
  Crown,
  CreditCard,
  Bell,
  LogOut,
  FolderOpen,
  FileText,
  BarChart3,
  UserPlus,
  LogIn,
} from "lucide-react";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarFooter,
  SidebarHeader,
  SidebarTrigger,
} from "@/components/ui/sidebar";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import { Button } from "./ui/button";

// Ana menü öğeleri
const mainItems = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: BarChart3,
    subItems: [
      {
        title: "Overview",
        url: "/dashboard/overview",
      },
      {
        title: "Analytics",
        url: "/dashboard/analytics",
      },
      {
        title: "Reports",
        url: "/dashboard/reports",
      },
    ],
  },
  {
    title: "Projects",
    url: "/projects",
    icon: FolderOpen,
    subItems: [
      {
        title: "All Projects",
        url: "/projects",
      },
      {
        title: "My Projects",
        url: "/projects/my",
      },
      {
        title: "Shared",
        url: "/projects/shared",
      },
    ],
  },
  {
    title: "Documents",
    url: "/documents",
    icon: FileText,
  },
  {
    title: "Calendar",
    url: "/calendar",
    icon: Calendar,
  },
  {
    title: "Inbox",
    url: "/inbox",
    icon: Inbox,
  },
  {
    title: "Search",
    url: "/search",
    icon: Search,
  },
];

// Animasyonlu Maskot Componentleri
const AnimatedMascot = ({
  src,
  alt,
  className = "",
  type = "eggplant", // "eggplant" veya "tomato"
}: {
  src: string;
  alt: string;
  className?: string;
  type?: "eggplant" | "tomato";
}) => {
  const [isHappy, setIsHappy] = React.useState(false);
  const [isMounted, setIsMounted] = React.useState(false);

  // Her maskotun farklı karakteristik hareketleri
  const mascotAnimations = {
    eggplant: {
      float: { y: [-3, 3, -3], duration: 3 },
      personality: { rotate: [-2, 2, -2], duration: 7 },
      bounce: { scale: [1, 1.15, 1], duration: 3.5 },
      blinkDelay: 8,
      happinessInterval: 5000,
    },
    tomato: {
      float: { y: [-2, 4, -2], duration: 2.5 },
      personality: { rotate: [-3, 3, -3], duration: 3.5 },
      bounce: { scale: [1, 1.2, 1], duration: 3.5 },
      blinkDelay: 6,
      happinessInterval: 4000,
    },
  };

  const currentAnim = mascotAnimations[type];

  React.useEffect(() => {
    // Mount durumunu ayarla
    setIsMounted(true);
  }, []);

  React.useEffect(() => {
    if (!isMounted) return;

    // Deterministik mutluluk anları
    const interval = setInterval(() => {
      setIsHappy(true);
      setTimeout(() => setIsHappy(false), 1500);
    }, currentAnim.happinessInterval);

    return () => clearInterval(interval);
  }, [isMounted, currentAnim.happinessInterval]);

  // Server-side rendering sırasında hiçbir animasyon gösterme
  if (!isMounted) {
    return (
      <div className={`absolute pointer-events-none ${className}`}>
        <Image
          src={src}
          alt={alt}
          width={100}
          height={100}
          className="drop-shadow-2xl filter brightness-110 contrast-110 w-full h-full object-contain"
        />
      </div>
    );
  }

  return (
    <motion.div
      className={`absolute pointer-events-none ${className}`}
      initial={{ opacity: 0, scale: 0, rotate: -180 }}
      animate={{
        opacity: 1,
        scale: 1,
        rotate: 0,
        y: currentAnim.float.y,
      }}
      transition={{
        opacity: { duration: 0.8, ease: "easeOut" },
        scale: { duration: 0.8, ease: "backOut" },
        rotate: { duration: 0.8, ease: "backOut" },
        y: {
          duration: currentAnim.float.duration,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
      whileHover={{
        scale: 1.3,
        rotate: [0, -10, 10, -5, 0],
        transition: {
          scale: { duration: 0.3 },
          rotate: { duration: 0.8, ease: "easeInOut" },
        },
      }}
    >
      {/* Ana karakter gövdesi */}
      <motion.div
        animate={{
          rotate: currentAnim.personality.rotate,
        }}
        transition={{
          duration: currentAnim.personality.duration,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {/* Mutluluk animasyonu */}
        <motion.div
          animate={
            isHappy
              ? {
                  scale: currentAnim.bounce.scale,
                  y: [-10, 0],
                }
              : {}
          }
          transition={{
            scale: {
              duration: currentAnim.bounce.duration,
              repeat: isHappy ? 2 : 0,
              ease: "easeInOut",
            },
            y: { duration: 3, ease: "easeOut" },
          }}
        >
          {/* Göz kırpma efekti */}
          <motion.div
            animate={{
              scaleY: [1, 0.05, 1],
            }}
            transition={{
              duration: 0.15,
              delay: currentAnim.blinkDelay,
              repeat: Infinity,
              repeatDelay: currentAnim.blinkDelay,
              ease: "easeInOut",
            }}
            style={{ transformOrigin: "center 35%" }}
          >
            <Image
              src={src}
              alt={alt}
              width={100}
              height={100}
              className="drop-shadow-2xl filter brightness-110 contrast-110 w-full h-full object-contain"
            />
          </motion.div>

          {/* Kalp efekti (mutlu olduğunda) */}
          <AnimatePresence>
            {isHappy && (
              <motion.div
                className="absolute -top-2 -right-2 text-red-500 text-xl"
                initial={{ scale: 0, opacity: 0 }}
                animate={{
                  scale: [0, 1.5, 1],
                  opacity: [0, 1, 0],
                  y: [-20, -40],
                }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              >
                ❤️
              </motion.div>
            )}
          </AnimatePresence>

          {/* Parıltı efekti */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            animate={{
              opacity: [0, 0.3, 0],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: 1, // Sabit delay
              ease: "easeInOut",
            }}
          >
            <div className="w-full h-full bg-gradient-to-r from-yellow-200/20 to-orange-200/20 rounded-full blur-sm" />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Hover'da çıkan yıldız efekti */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-yellow-400"
            style={{
              top: `${20 + i * 20}%`,
              left: `${10 + i * 30}%`,
            }}
            animate={{
              rotate: [0, 360],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut",
            }}
          >
            ✨
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export function AppSidebar() {
  const { data: session, status } = useSession();

  return (
    <Sidebar collapsible="icon" className="border-r">
      <SidebarHeader className="flex flex-row items-center justify-between p-2">
        <div className="flex items-center gap-2 group-data-[collapsible=icon]:justify-center">
          <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
            <Home className="size-4" />
          </div>
          <div className="grid flex-1 text-left text-sm leading-tight group-data-[collapsible=icon]:hidden">
            <span className="truncate font-semibold">My App</span>
          </div>
        </div>
        <SidebarTrigger className="group-data-[collapsible=icon]:mx-auto" />
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  {item.subItems ? (
                    <Collapsible>
                      <CollapsibleTrigger asChild>
                        <SidebarMenuButton tooltip={item.title}>
                          <item.icon />
                          <span>{item.title}</span>
                          <ChevronRight className="ml-auto h-4 w-4" />
                        </SidebarMenuButton>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <SidebarMenuSub>
                          {item.subItems.map((subItem) => (
                            <SidebarMenuSubItem key={subItem.title}>
                              <SidebarMenuSubButton asChild>
                                <a href={subItem.url}>
                                  <span>{subItem.title}</span>
                                </a>
                              </SidebarMenuSubButton>
                            </SidebarMenuSubItem>
                          ))}
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    </Collapsible>
                  ) : (
                    <SidebarMenuButton asChild tooltip={item.title}>
                      <a href={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Tools</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="Settings">
                  <a href="/settings">
                    <Settings />
                    <span>Settings</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          {status === "loading" ? (
            // Loading state
            <SidebarMenuItem>
              <SidebarMenuButton disabled tooltip="Loading...">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <User className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">Loading...</span>
                </div>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ) : session ? (
            // Authenticated state - Show user profile
            <SidebarMenuItem>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <SidebarMenuButton
                    size="lg"
                    className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                    tooltip={session.user?.name || "User"}
                  >
                    <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                      <User className="size-4" />
                    </div>
                    <div className="grid flex-1 text-left text-sm leading-tight">
                      <span className="truncate font-semibold">
                        {session.user?.name || "User"}
                      </span>
                      <span className="truncate text-xs">
                        {session.user?.identifier || ""}
                      </span>
                    </div>
                    <ChevronRight className="ml-auto size-4" />
                  </SidebarMenuButton>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
                  side="bottom"
                  align="end"
                  sideOffset={4}
                >
                  <DropdownMenuItem>
                    <Crown className="mr-2 h-4 w-4" />
                    <span>Upgrade to Pro</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <User className="mr-2 h-4 w-4" />
                    <span>View Profile</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <CreditCard className="mr-2 h-4 w-4" />
                    <span>Billing</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Bell className="mr-2 h-4 w-4" />
                    <span>Notifications</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Account Settings</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className="text-red-600"
                    onClick={() => signOut()}
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log Out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </SidebarMenuItem>
          ) : (
            // Unauthenticated state - Show login/register buttons with animated mascots
            <div className="group-data-[collapsible=icon]:grid-cols-1 grid md:grid-cols-2 gap-4 p-4">
              <div className="relative overflow-visible group-data-[collapsible=icon]:flex group-data-[collapsible=icon]:justify-center">
                {/* Patlıcan Maskotu - Collapsed durumda görünmez */}
                <div className="group-data-[collapsible=icon]:hidden">
                  <AnimatedMascot
                    src="/patlıcan-sidebar.png"
                    alt="Patlıcan Maskotu"
                    className="-top-10 left-1/2 transform -translate-x-1/2 w-20 h-20 z-0"
                    type="eggplant"
                  />
                </div>
                <Link
                  href="/login"
                  className="group-data-[collapsible=icon]:w-auto"
                >
                  <Button className="group-data-[collapsible=icon]:size-8 group-data-[collapsible=icon]:p-0 w-full bg-blue-600/90 hover:bg-blue-700/90 h-12 relative mt-6 z-10 backdrop-blur-sm">
                    <LogIn className="h-5 w-5 group-data-[collapsible=icon]:mr-0 mr-2" />
                    <span className="group-data-[collapsible=icon]:hidden">
                      Giriş Yap
                    </span>
                  </Button>
                </Link>
              </div>

              <div className="relative overflow-visible group-data-[collapsible=icon]:hidden">
                {/* Domates Maskotu */}
                <AnimatedMascot
                  src="/domates-sidebar.png"
                  alt="Domates Maskotu"
                  className="-top-10 left-1/2 transform -translate-x-1/2 w-20 h-20 z-0"
                  type="tomato"
                />
                <Link href="/register">
                  <Button
                    variant="outline"
                    className="w-full border-gray-600 text-gray-300 hover:bg-gray-800/90 h-12 relative mt-6 z-10 backdrop-blur-sm"
                  >
                    <UserPlus className="h-5 w-5 mr-2" />
                    Kayıt Ol
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
