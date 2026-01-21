import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MotionProvider from "@/components/shared/MotionProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "George Vekios - Portfolio",
  description:
    "Full-stack developer focused on clean UIs, reliable APIs, and practical cloud deployments.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable}`} data-theme="vscode">
      <body className="min-h-screen bg-background text-foreground antialiased">
        <MotionProvider>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1 px-6 sm:px-10 lg:px-16 py-10">
              {children}
            </main>
            <Footer />
          </div>
        </MotionProvider>
      </body>
    </html>
  );
}
