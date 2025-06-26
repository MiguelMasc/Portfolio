import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "./_components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import TopBar from "./_components/topbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="z-10 relative">
          <ThemeProvider  attribute="class" 
                          defaultTheme="system" 
                          enableSystem
                          disableTransitionOnChange>
            <TopBar />
            {/* <NavBar /> */}
            {children}
          </ThemeProvider>
        </div>
      </body>
    </html>
  );
}
