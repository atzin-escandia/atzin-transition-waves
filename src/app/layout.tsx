import type { Metadata } from "next";
import { Instrument_Serif } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const serif = Instrument_Serif({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-serif',
  style: ['normal', 'italic'],
});

export const metadata: Metadata = {
  title: {
    default: 'Atzin Escandia ✷ Software Developer',
    template: '%s ✷ Atzin Escandia',
  },
  description: 'Atzin Escandia ✷ Creative Software developer & content creator ✷ I build functional and animated websites for other creative humans!',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${serif.variable} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
