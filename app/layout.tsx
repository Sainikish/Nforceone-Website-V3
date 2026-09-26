import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AiAssistant from "@/components/AiAssistant";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
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
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body>
        <Header />
        {children}
        <Footer />
        <AiAssistant />
      </body>
    </html>
  );
}
