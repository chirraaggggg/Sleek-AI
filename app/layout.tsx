import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import { NuqsAdapter } from 'nuqs/adapters/next/app';
import "./globals.css";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/theme-provider";
import { SupabaseProvider } from "@/components/auth";
import { QueryProvider } from "@/components/query-provider";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const fraunces = Fraunces({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Vuno — Design websites with AI",
  description: "Describe your site. Get a production-ready page in seconds.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${fraunces.variable} bg-white text-slate-900 antialiased`}
      >
        <SupabaseProvider>
          <QueryProvider>
            <NuqsAdapter>
              <ThemeProvider
                attribute="class"
                defaultTheme="light"
                enableSystem={false}
                disableTransitionOnChange
              >
                <TooltipProvider>
                  {children}

                  <Toaster richColors />
                </TooltipProvider>
              </ThemeProvider>

            </NuqsAdapter>
          </QueryProvider>
        </SupabaseProvider>

      </body>
    </html>
  );
}
