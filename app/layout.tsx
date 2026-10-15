import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

import Header from "@/components/common/header"
import Footer from "@/components/common/footer"

const outfit = Outfit({subsets: ["latin"]});



export const metadata: Metadata = {
  title: "open_share - Share Your Creations, Discover New Launches",
  description: "open_share is a platform for sharing open source projects.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
    lang="en"
    className={`${outfit.className} antialiased`}
    >
      <body className="min-h-full flex flex-col">
      <Header/>
      {children}
      <Footer/>
      </body>
    </html>
  );
}
