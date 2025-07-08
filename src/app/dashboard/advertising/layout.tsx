import type React from "react"
import {
  Tabs,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="w-full">
      <div className="space-y-2 px-4">
        <h1 className="text-3xl font-bold tracking-tight">DOOH Campaign Manager</h1>
        <p className="text-muted-foreground">Create and manage your digital out-of-home advertising campaigns</p>
      </div>

      <Tabs className="w-full p-4" defaultValue="New Campaign">
        <div className="w-full">
          <TabsList className="w-1/3 flex justify-center">
            <TabsTrigger value="New Campaign" asChild>
              <Link href="/dashboard/advertising">New Campaign</Link>
            </TabsTrigger>
            <TabsTrigger value="Creatives" asChild>
              <Link href="/dashboard/advertising/creatives">Assign Creatives</Link>
            </TabsTrigger>
          </TabsList>
        </div>
      </Tabs>

      {children}
    </div>
  );
}


