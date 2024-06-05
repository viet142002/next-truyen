import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import NextTopLoader from "nextjs-toploader";

import "./globals.css";

import { cn } from "~/lib/utils";
import { Toaster } from "~/components/ui/toaster";
import StoreProvider from "~/redux/StoreProvider";
import { getCookie } from "~/helpers/server";
import Header from "~/components/layouts/headers";

const fontSans = FontSans({
    subsets: ["latin"],
    variable: "--font-sans",
});

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const token = getCookie("token");

    return (
        <html lang='vi' suppressHydrationWarning>
            <body
                className={cn(
                    "min-h-svh bg-background font-sans antialiased",
                    fontSans.variable
                )}
            >
                <NextTopLoader />
                <StoreProvider
                    initialState={{
                        auth: {
                            token: token,
                            data: null,
                        },
                    }}
                >
                    <Header />
                    {children}
                </StoreProvider>
                <Toaster />
            </body>
        </html>
    );
}
