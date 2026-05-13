import type { Metadata } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import Script from "next/script";
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
        <Script id="clarity" strategy="afterInteractive">
          {`(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script","wqgeomynwy");`}
        </Script>
      </body>
    </html>
  );
}
