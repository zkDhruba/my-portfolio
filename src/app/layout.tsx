import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/layout/ScrollProgress";
import SmoothScroll from "@/components/layout/SmoothScroll";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Reza MD Zakiul Karim Dhruba | Frontend Engineer",
  description:
    "Frontend Engineer crafting fast, scalable web experiences. Specializing in React, Next.js, TypeScript, and modern web technologies.",
  keywords: [
    "Frontend Engineer",
    "React Developer",
    "Next.js",
    "TypeScript",
    "Web Developer",
    "Portfolio",
  ],
  authors: [{ name: "Reza MD Zakiul Karim Dhruba" }],
  openGraph: {
    title: "Reza MD Zakiul Karim Dhruba | Frontend Engineer",
    description:
      "Frontend Engineer crafting fast, scalable web experiences.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Reza MD Zakiul Karim Dhruba | Frontend Engineer",
    description:
      "Frontend Engineer crafting fast, scalable web experiences.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full`} suppressHydrationWarning>
      <head>
        {/* Prevent FOUC on dark mode */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('theme');
                if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark');
                }
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans antialiased noise-bg">
        <SmoothScroll>
          <ScrollProgress />
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
