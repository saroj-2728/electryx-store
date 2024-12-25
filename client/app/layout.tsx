import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";
import { ThemeProvider } from "@/context/ThemeContext";
import { poppins, allertaStencil } from "./fonts/fonts";
import { SessionWrapper } from "@/context/SessionWrapper";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Himalayan Threads",
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
          <SessionWrapper>
            <Navbar />
            {children}
          </SessionWrapper>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
