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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="w-full">
      <div className="px-4 pb-10">
        <h1 className="text-3xl font-bold tracking-tight">Campaign Manager</h1>
      </div>

      <Tabs className="w-full px-4" defaultValue="Campaign Manager">
        <div className="w-full">
          <TabsList className="p-1 flex justify-center">
            <TabsTrigger value="Status" asChild>
              <Link href="/dashboard/advertising/status">Gneral Overview</Link>
            </TabsTrigger>
            <TabsTrigger value="Campaign Manager" asChild>
              <Link href="/dashboard/advertising">Manage Campaigns</Link>
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


