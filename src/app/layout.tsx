import type { Metadata } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const interDisplay = Inter_Tight({
  variable: "--font-inter-display",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Seren — Votre guide pour les démarches après une perte",
  description:
    "Seren vous accompagne pas à pas dans toutes les démarches administratives après la perte d'un proche. Clair, humain, apaisant.",
  icons: {
    icon: "/logo-bubble.svg",
    shortcut: "/logo-bubble.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${interDisplay.variable} antialiased`}>
      <body suppressHydrationWarning className="min-h-screen flex flex-col bg-white text-text">
        {children}
      </body>
    </html>
  );
}
