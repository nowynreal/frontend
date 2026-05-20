import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { brand } from "@/lib/branding";
import "./globals.css";

const bodyFont = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const displayFont = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: `${brand.companyName} | U.S. Market Entry Consulting`,
  description:
    "Market entry, compliance, and growth support for Turkish companies expanding into the United States.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bodyFont.variable} ${displayFont.variable} h-full antialiased`}
    >
      <body
        className="min-h-full flex flex-col"
        style={
          {
            "--brand-primary": brand.primaryColor,
            "--brand-accent": brand.accentColor,
            "--brand-bg": brand.backgroundColor,
          } as React.CSSProperties
        }
      >
        {children}
      </body>
    </html>
  );
}
