import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/context/ThemeContext";
import { poppins, allertaStencil } from "./fonts/fonts";

export const metadata: Metadata = {
  title: "Electryx Store",
  description: "A store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${allertaStencil.variable} font-sans antialiased bg-back-light dark:bg-back-dark text-txt-light dark:text-txt-dark`}
      >
        <ThemeProvider>
            <Navbar />
            {children}
            <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
