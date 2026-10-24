import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import ThemeProvider from "@/components/theme-provider";
import SupportChat from "@/components/shared/support-chat";
import Preloader from "@/components/shared/preloader";

import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
    display: "swap",
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
    display: "swap",
});

export const metadata: Metadata = {
    title: {
        default: "Dhopkol — Software Development & IT Services",
        template: "%s | Dhopkol",
    },
    description:
        "Dhopkol delivers custom software, websites, and reliable IT services to help businesses grow.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-background font-sans text-body`}
            >
                <ThemeProvider>
                    <Preloader />
                    <Navbar />
                    {children}
                    <Footer />
                    <SupportChat />
                </ThemeProvider>
            </body>
        </html>
    );
}