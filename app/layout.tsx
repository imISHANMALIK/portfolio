import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ishan Malik — Agentic Developer & ML Researcher",
  description:
    "ML Researcher & Agentic Developer at NYU. Specializing in Reinforcement Learning, Optimal Transport, and Quantitative Finance.",
  keywords: [
    "ML Research",
    "Reinforcement Learning",
    "Optimal Transport",
    "Quantitative Finance",
    "NYU",
    "Agentic AI",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} scroll-smooth`}
    >
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
