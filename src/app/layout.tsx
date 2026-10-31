import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#06080D",
};

export const metadata: Metadata = {
  title: "ENBK • Software Engineering & Soluções Digitais",
  description:
    "Catálogo e portfólio oficial de engenharia de software de Natan Billig. Soluções de alta performance, ERP SaaS, controle financeiro multi-moeda e automações bancárias com IA.",
  keywords: [
    "ENBK",
    "Natan Billig",
    "Software Engineer",
    "SaaS",
    "Next.js",
    "Supabase",
    "IA",
    "ERP",
    "Fintech",
  ],
  authors: [{ name: "Natan Billig" }],
  openGraph: {
    title: "ENBK • Software Engineering & Soluções Digitais",
    description: "Catálogo oficial de sistemas e soluções de software de Natan Billig.",
    type: "website",
    locale: "pt_BR",
    siteName: "ENBK",
  },
  twitter: {
    card: "summary_large_image",
    title: "ENBK • Software Engineering & Soluções Digitais",
    description: "Catálogo oficial de sistemas e soluções de software de Natan Billig.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark scroll-smooth">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased bg-[#06080D] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200`}
      >
        <div className="relative min-h-screen overflow-x-clip">
          {/* Subtle Cyber Matrix / Grid background */}
          <div className="pointer-events-none fixed inset-0 cyber-grid opacity-40 z-0" />
          
          {/* Futuristic ambient light glows */}
          <div className="pointer-events-none fixed top-[-10%] left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-cyan-500/10 blur-[130px] rounded-full z-0" />
          <div className="pointer-events-none fixed top-[40%] right-[-10%] w-[500px] h-[350px] bg-emerald-500/5 blur-[140px] rounded-full z-0" />
          <div className="pointer-events-none fixed bottom-[-10%] left-[-10%] w-[500px] h-[350px] bg-cyan-600/5 blur-[140px] rounded-full z-0" />

          {/* Page Content */}
          <div className="relative z-10 flex flex-col min-h-screen">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
