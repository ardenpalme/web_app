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
      <div className="space-y-2 px-4">
        <h1 className="text-3xl font-bold tracking-tight">Campaign Manager</h1>
      </div>

      <Tabs className="w-full p-4" defaultValue="New Campaign">
        <div className="w-full">
          <TabsList className="w-1/3 flex justify-center">
            <TabsTrigger value="Status" asChild>
              <Link href="/dashboard/advertising/status">Review</Link>
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


