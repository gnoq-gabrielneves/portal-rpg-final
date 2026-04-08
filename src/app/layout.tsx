"use client";
import { cn } from "@/lib/utils";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Permite fazer as queries do tanstack
  const queryClient = new QueryClient();
  return (
    <html
      lang="pt-br"
      className={cn("h-full", "antialiased", "font-sans", inter.variable)}
    >
      <head>
        <title>Portal RPG</title>
      </head>
      <body className="min-h-full flex flex-col">
        <Toaster richColors />
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </body>
    </html>
  );
}
