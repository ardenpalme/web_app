import type React from "react"
import ClientLayout from "./clientLayout"
import { TRPCProvider } from '@/components/trpc-provider';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <TRPCProvider>
        <ClientLayout>
          {children}
        </ClientLayout>
    </TRPCProvider>
  );
}

