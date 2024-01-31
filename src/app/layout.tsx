import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "../styles/globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-heading" });

export const metadata: Metadata = {
  title: "Transify"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={cn("relative h-full font-sans antialiased", `${inter.variable} font-sans`, `${manrope.variable} font-sans`)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="class"
          enableSystem
          disableTransitionOnChange
        >
          <main className="relative flex flex-col min-h-screen">
            <Navbar />
            <Toaster />
            <div className="flex-grow flex-1">
              {children}
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
