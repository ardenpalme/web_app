"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CalendarIcon, Clock, Users, Target, Megaphone, ChevronDown, BriefcaseBusiness} from "lucide-react"
import { format } from "date-fns"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { TimeRangeContext } from "@/context/time-range-context"
import { formatDateTimeRange } from "@/lib/utils"
import { useUser, useClerk, useOrganization } from "@clerk/nextjs";
import { TRPCProvider } from '@/components/trpc-provider';

const defaultStart = "2023-10-15T10:00:18.000Z"
const defaultEnd = "2023-10-22T19:07:23.000Z"

// Navigation items under Analytics
const analyticsItems = [
  {
    title: "Advertising",
    url: "/dashboard/advertising/status",
    icon: BriefcaseBusiness,
  },
]

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [startDate, setStartDate] = useState<Date>(new Date(defaultStart))
  const [endDate, setEndDate] = useState<Date>(new Date(defaultEnd))
  const [startTime, setStartTime] = useState("10:00")
  const [endTime, setEndTime] = useState("19:07")
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false)
  const pathname = usePathname()

  const timeRange = formatDateTimeRange(startDate, startTime, endDate, endTime);

  const { signOut } = useClerk();

  const UserInfo = () => {
    const { user, isLoaded } = useUser();

    if (!isLoaded) {
      return (
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-muted animate-pulse" />
          <div className="flex flex-col gap-1">
            <div className="h-3 w-24 rounded bg-muted animate-pulse" />
            <div className="h-2 w-16 rounded bg-muted animate-pulse" />
          </div>
        </div>
      );
    }

    if (!user) return null;

    const initials = `${user.firstName?.[0] ?? ""}${user.lastName?.[0] ?? ""}`.toUpperCase();

    return (
      <div className="flex items-center gap-2">
        <Avatar className="h-8 w-8 rounded-lg">
          <AvatarImage src={user.imageUrl} alt={user.fullName ?? "User"} />
          <AvatarFallback className="rounded-lg">{initials || "?"}</AvatarFallback>
        </Avatar>
        <div className="grid flex-1 text-left text-sm leading-tight">
          <span className="truncate font-semibold">{user.fullName}</span>
          <span className="truncate text-xs">{user.primaryEmailAddress?.emailAddress}</span>
        </div>
      </div>
    );
  }

  const OrgHeader = () => {
    const { organization, isLoaded } = useOrganization();
      
    if (!isLoaded) {
    return (
      <div className="flex items-center gap-2">
        <div className="size-8 rounded-lg bg-muted animate-pulse" />
        <div className="flex flex-col gap-1">
          <div className="h-3 w-20 rounded bg-muted animate-pulse" />
          <div className="h-2 w-12 rounded bg-muted animate-pulse" />
        </div>
      </div>
    );
  }

    if(!organization) {
      return null;
    }

    return (
      <div className="flex items-center gap-2">
        <img
          src={organization.imageUrl}
          alt="Org Logo"
          className="size-8 rounded-lg object-cover"
        />
        <div className="grid flex-1 text-left text-sm leading-tight">
          <span className="truncate font-semibold">{organization.name}</span>
        </div>
      </div>
    );
  }

  return (
        <SidebarProvider>
          <Sidebar>
            <SidebarHeader>
              <SidebarMenu>
                <SidebarMenuItem>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <SidebarMenuButton className="cursor-pointer">
                        <OrgHeader />
                        <ChevronDown className="ml-auto" />
                      </SidebarMenuButton>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-[--radix-popper-anchor-width] min-w-56 rounded-lg">
                      <DropdownMenuItem>
                        <div className="cursor-pointer grid flex-1 text-left text-sm leading-tight">
                          <span className="truncate font-medium">View Members</span>
                        </div>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <div className="cursor-pointer grid flex-1 text-left text-sm leading-tight">
                          <span className="truncate font-medium">Request Admin Access</span>
                        </div>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <div className="cursor-pointer grid flex-1 text-left text-sm leading-tight">
                          <span className="truncate font-medium">Leave Org</span>
                        </div>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarHeader>
            <SidebarContent>
              <Collapsible defaultOpen className="group/collapsible">
                <SidebarGroup>
                  <SidebarGroupLabel asChild>
                    <CollapsibleTrigger className="flex w-full items-center justify-between">
                      Analytics
                      <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
                    </CollapsibleTrigger>
                  </SidebarGroupLabel>
                  <CollapsibleContent>
                    <SidebarGroupContent>
                      <SidebarMenu>
                        {analyticsItems.map((item) => (
                          <SidebarMenuItem key={item.title}>
                            <SidebarMenuButton asChild isActive={pathname === item.url}>
                              <Link href={item.url}>
                                <item.icon />
                                <span>{item.title}</span>
                              </Link>
                            </SidebarMenuButton>
                          </SidebarMenuItem>
                        ))}
                      </SidebarMenu>
                    </SidebarGroupContent>
                  </CollapsibleContent>
                </SidebarGroup>
              </Collapsible>
            </SidebarContent>
            <SidebarFooter>
              <SidebarMenu>
                <SidebarMenuItem>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <SidebarMenuButton
                        size="lg"
                        className="cursor-pointer data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                      >
                        <UserInfo />
                        <ChevronDown className="ml-auto size-4" />
                      </SidebarMenuButton>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      className="w-[--radix-popper-anchor-width] min-w-56 rounded-lg"
                      side="bottom"
                      align="end"
                      sideOffset={4}
                    >
                      <DropdownMenuItem
                          className="cursor-pointer"
                      >
                        <span>Profile Settings</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem
                          className="cursor-pointer"
                      >
                        <span>Notifications</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem
                          onClick={() => signOut({ redirectUrl: '/' })}
                          className="cursor-pointer"
                      >
                        <span>Sign out</span>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarFooter>
          </Sidebar>
          <SidebarInset>
            <TimeRangeContext.Provider value={{timeRange}}>
            <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
              <div className="flex items-center gap-2 px-4">
                <SidebarTrigger className="-ml-1" />
              </div>
            </header>
            <main className="flex-auto px-4">
              <TRPCProvider>
              {children}
              </TRPCProvider>
            </main>
            </TimeRangeContext.Provider>
          </SidebarInset>
        </SidebarProvider>
  );
}


