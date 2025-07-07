"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CalendarIcon, Clock, Users, Target, Megaphone, ChevronDown } from "lucide-react"
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
import { useUser, useClerk } from "@clerk/nextjs";

const defaultStart = "2023-10-15T10:00:18.000Z"
const defaultEnd = "2023-10-22T19:07:23.000Z"

// Navigation items under Analytics
const analyticsItems = [
  {
    title: "Customers",
    url: "/dashboard/customers",
    icon: Users,
  },
  {
    title: "Audience",
    url: "/dashboard/audience",
    icon: Target,
  },
  {
    title: "Advertising",
    url: "/dashboard/advertising",
    icon: Megaphone,
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

  const { user } = useUser();
  const { signOut } = useClerk();

  return (
        <SidebarProvider>
          <Sidebar>
            <SidebarHeader>
              <SidebarMenu>
                <SidebarMenuItem>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <SidebarMenuButton>
                        <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                          <span className="text-sm font-semibold">AC</span>
                        </div>
                        <div className="grid flex-1 text-left text-sm leading-tight">
                          <span className="truncate font-semibold">Acme Corp</span>
                          <span className="truncate text-xs">Enterprise</span>
                        </div>
                        <ChevronDown className="ml-auto" />
                      </SidebarMenuButton>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-[--radix-popper-anchor-width] min-w-56 rounded-lg">
                      <DropdownMenuItem>
                        <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                          <span className="text-sm font-semibold">AC</span>
                        </div>
                        <div className="grid flex-1 text-left text-sm leading-tight">
                          <span className="truncate font-semibold">Acme Corp</span>
                          <span className="truncate text-xs">Enterprise</span>
                        </div>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                          <span className="text-sm font-semibold">ST</span>
                        </div>
                        <div className="grid flex-1 text-left text-sm leading-tight">
                          <span className="truncate font-semibold">Startup Inc</span>
                          <span className="truncate text-xs">Pro</span>
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
                        className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                      >
                        <Avatar className="h-8 w-8 rounded-lg">
                          <AvatarImage src="/placeholder.svg?height=32&width=32" alt="John Doe" />
                          <AvatarFallback className="rounded-lg">JD</AvatarFallback>
                        </Avatar>
                        <div className="grid flex-1 text-left text-sm leading-tight">
                          <span className="truncate font-semibold">{user?.fullName ?? ""}</span>
                          <span className="truncate text-xs">{user?.primaryEmailAddress?.emailAddress ?? ""}</span>
                        </div>
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
            <main>
            {children}
            </main>
            </TimeRangeContext.Provider>
          </SidebarInset>
        </SidebarProvider>
  );
}

