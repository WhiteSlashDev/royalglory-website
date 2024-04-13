import type { Metadata } from "next";
import "@/styles/globals.css"
import { Inter as FontSans } from "next/font/google"
import React from "react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site"
import { ThemeProvider } from "@/components/theme-provider"
import { SiteHeader } from "@/components/site-header";

const fontSans = FontSans({
    subsets: ["latin"],
    variable: "--font-sans",
})

export const metadata: Metadata = {
    title: {
        default: siteConfig.name,
        template: `%s - ${siteConfig.name}`,
    },
    description: siteConfig.description,
    themeColor: [
        { media: "(prefers-color-scheme: light)", color: "white" },
        { media: "(prefers-color-scheme: dark)", color: "black" },
    ],
};

interface RootLayoutProps {
    children: React.ReactNode
}

export default function RootLayout({children}: RootLayoutProps) {
    return (
        <>
            <html lang="en" suppressHydrationWarning>
            <head/>
            <body
                className={cn(
                    "min-h-screen bg-background font-sans antialiased",
                    fontSans.variable
                )}
            >
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
                <div className="relative flex min-h-screen flex-col">
                    <SiteHeader/>
                    <div className="h-screen">{children}</div>
                </div>
            </ThemeProvider>
            </body>
            </html>
        </>
    )
}
