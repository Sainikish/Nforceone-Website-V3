import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AiAssistant from "@/components/AiAssistant";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nforceone.com"),
  title: {
    default: "NForceOne | AI. Quality Engineering. Digital Transformation.",
    template: "%s | NForceOne",
  },
  description:
    "NForceOne is an AI, Quality Engineering, and Digital Transformation partner with deep Telecom expertise, delivering at enterprise scale through onshore US and offshore India teams.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <body>
        <Header />
        {children}
        <Footer />
        <AiAssistant />
      </body>
    </html>
  );
}
