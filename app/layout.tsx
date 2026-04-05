import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne-var",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Synthara — AI Automation Platform",
  description: "Automate everything. Ship faster. Synthara connects your tools, agents, and workflows into one intelligent layer.",
  openGraph: {
    title: "Synthara — AI Automation Platform",
    description: "The AI automation platform for teams that move fast.",
    siteName: "Synthara",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${syne.variable}`}>
      <body>{children}</body>
    </html>
  );
}
