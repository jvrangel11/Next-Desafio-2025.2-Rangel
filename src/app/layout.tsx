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
  variable: '--font-jost', 
});

export const metadata: Metadata = {
  title: "Hércules",
  description: "Vista a FORÇA do estilo",
  icons: {
    icon: '/assets/Hercules-logo2.png',      
    shortcut: '/assets/Hercules-logo2.png',  
    apple: '/assets/Hercules-logo2.png',    
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>

        <link rel="icon" href="/assets/Hercules-logo2.png" />
        <link rel="shortcut icon" href="/assets/Hercules-logo2.png" />
        <link rel="apple-touch-icon" href="/assets/Hercules-logo2.png" />
      </head>
      <body className={`${jost.variable} ${roboto.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}