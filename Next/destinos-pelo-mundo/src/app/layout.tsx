import type { Metadata } from "next";
import "@/app/styles/globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Destinos pelo mundo",
  description: "Encontre os melhores destinos para você",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
