import type { Metadata } from "next";

import Header from "./components/Header";
import Footer from "./components/Footer";

import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";

import "./globals.css";

interface RootLayoutProps {
  children: React.ReactNode;
  params: { lang: Locale };
}

export const metadata: Metadata = {
  title: "Kheowzoo",
  description:
    "Experience the next generation of Web3 technology with KheowZoo.",
  keywords: ["KheowZoo", "Web3", "Blockchain", "NFTs", "Material Library"],
  authors: [{ name: "KheowZoo Team" }],
  viewport:
    "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no",
};

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function RootLayout({
  children,
  params,
}: RootLayoutProps) {
  const { lang } = await params;
  console.log(lang);
  return (
    <html lang={lang}>
      <head>
        <title>{String(metadata.title) ?? "Default Title"}</title>
        <meta
          name="description"
          content={metadata.description ?? "Default description"}
        />
        <meta
          name="keywords"
          content={
            Array.isArray(metadata.keywords)
              ? metadata.keywords.join(", ")
              : metadata.keywords ?? "Default keywords"
          }
        />
        <meta
          name="viewport"
          content={
            typeof metadata.viewport === "string"
              ? metadata.viewport
              : "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
          }
        />
      </head>
      <body className="scroll-smooth">
        <Header lang={lang} />
        <main className="min-h-screen">{children}</main>
        <Footer lang={lang} />
      </body>
    </html>
  );
}
