import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";
import { MainProvider } from "@/providers/maincontext";
import { Modal } from "./components/modal";
import AdSense from "./components/AdSense/AdSense";

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Comprovante PDF",
  description: "Crie orçamentos, simule cupons, notas em PDF online. Baixe ou imprima, grátis!",
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
        <AdSense pId={process.env.NEXT_PUBLIC_PUB_ID as string}></AdSense>
        <MainProvider>
          <Modal></Modal>
          {children}
        </MainProvider>
      </body>
    </html>
  );
}
