import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";
import { LanguageProvider } from "@/context/LanguageContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Ángel Salazar | Desarrollador Full Stack",
  description: "Desarrollador Full Stack especializado en Next.js, TypeScript y arquitecturas limpias. Creando experiencias digitales desde Tijuana, México.",
  openGraph: {
    title: "Ángel Salazar | Desarrollador Full Stack",
    description: "Experiencias digitales con Next.js, TypeScript y código limpio.",
    url: "https://angelsalazar.dev",
    siteName: "Ángel Salazar Portfolio",
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ángel Salazar | Desarrollador Full Stack",
    description: "Experiencias digitales con Next.js, TypeScript y código limpio.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        <LanguageProvider>
          <ThemeProvider>
            {children}
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
