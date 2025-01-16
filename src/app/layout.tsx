import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";
import { Nav } from "@/app/components/header";
import { MainProvider } from "@/providers/maincontext";

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "CupomPDF",
  description: "Crie comprovantes, orçamentos em PDF online!",
  authors: {
    name: "Hermes Lopes Junior",
    url: "hstech.com.br"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <html lang="pt-br">
      <body
        className={`${lexend.variable} antialiased`}>
        <MainProvider>
          <Nav></Nav>
          {children}
        </MainProvider>
      </body>
    </html>
  );
}
