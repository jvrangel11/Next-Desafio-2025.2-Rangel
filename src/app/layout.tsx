import type { Metadata } from "next";
import { Jost, Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-roboto',
});

const jost = Jost({
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-joust',
});

export const metadata: Metadata = {
  title: "Hércules",
  description: "Vista a FORÇA do estilo",
  icons: {
    icon: 'assets/HERCULES-LOGO-semfundo.png',
    shortcut: 'assets/HERCULES-LOGO-semfundo.png',
    apple: 'assets/HERCULES-LOGO-semfundo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${jost.variable} ${roboto.variable} antialiased`}>
          <div className="top-0 left-0 width"></div>
        {children}
      </body>
    </html>
  );
}
