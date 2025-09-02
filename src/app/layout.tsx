import type { Metadata } from "next";
import { Jost, Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-roboto',
});

const jostSerif = Jost({
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-joust',
});

export const metadata: Metadata = {
  title: "Hércules",
  description: "Vista a FORÇA do estilo",
};

import Header from "@/components/navbar";
import Footer from "@/components/navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jostSerif.variable} ${jostSerif.variable} antialiased`}>
          <div className="top-0 left-0 width"></div>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
