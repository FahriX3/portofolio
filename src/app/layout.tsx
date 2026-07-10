import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fahri Azzam Mandriva - Software Developer & System Architect",
  description: "Portfolio of Fahri Azzam Mandriva, a Software Developer and System Architect specializing in multi-stack programming, IoT, and embedded systems.",
  keywords: ["Fahri Azzam Mandriva", "Software Developer", "System Architect", "IoT", "Embedded Systems", "Next.js", "React"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${inter.variable} ${outfit.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-slate-950 text-slate-100 selection:bg-emerald-500/30">
        {children}
      </body>
    </html>
  );
}
