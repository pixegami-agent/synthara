import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
