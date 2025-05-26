import { ReactNode } from "react";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "AxiomBolt - Enhance Your Trading",
  description:
    "Supercharge your trading experience with AxiomBolt. Trade faster, smarter, and better.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        <div className="min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
