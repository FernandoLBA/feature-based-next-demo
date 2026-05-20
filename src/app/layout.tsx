import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { Container } from "@/features/shared";
import QueryProvider from "@/lib/providers/QueryProvider";
import Footer from "@/ui/layout/footer";
import Header from "@/ui/layout/header";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Next demo app",
  description: "Feature based next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-svh antialiased`}
    >
      <body>
        <QueryProvider>
          <main className="flex flex-col h-screen overflow-y-auto">
            <Header />
            <Container className="my-18 pt-5 md:mt-17 mb-16">{children}</Container>
            <Footer />
          </main>
        </QueryProvider>
      </body>
    </html>
  );
}
