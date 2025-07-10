"use client"

import type React from "react"
import {
  Tabs,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import Link from "next/link";
import { DndProvider } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend"
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const path_segments = usePathname().split("/");
  const last_path_segment = path_segments[path_segments.length - 1];
  return (
    <div className="w-full">
      <div className="px-4 pb-10">
        <h1 className="text-3xl font-bold tracking-tight">Campaigns</h1>
      </div>

      <Tabs className="w-full px-4" value={last_path_segment}>
        <div className="w-full">
          <TabsList className="p-1 flex justify-center">
            <TabsTrigger value="status" asChild>
              <Link href="/dashboard/advertising/status">Overview</Link>
            </TabsTrigger>
            <TabsTrigger value="manager" asChild>
              <Link href="/dashboard/advertising/manager">Manage Campaigns</Link>
            </TabsTrigger>
          </TabsList>
        </div>
      </Tabs>

      <div>
        <DndProvider backend={HTML5Backend}>
          {children}
        </DndProvider>
      </div>
    </div>
  );
}


