import type { Metadata } from "next";
import { Instrument_Serif, Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const instrument = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Samunder Singh | Design Engineer, C-DAC Bangalore",
  description:
    "AI-native portfolio of Samunder Singh — Design Engineer at C-DAC Bengaluru working on edge LLMs, Vision AI, GPU software stacks, and open source.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${outfit.variable} ${instrument.variable} h-full antialiased`}>
      <body className="min-h-full bg-white font-sans text-stone-900">
        {children}
      </body>
    </html>
  );
}
