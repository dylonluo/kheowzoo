import type { Metadata } from "next";
import localFont from "next/font/local";
//import Header from "./components/Header";
//import Footer from "./components/Footer";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Kheowzoo",
  description:
    "Experience the next generation of Web3 technology with KheowZoo.",
  keywords: ["KheowZoo", "Web3", "Blockchain", "NFTs", "Material Library"],
  authors: [{ name: "KheowZoo Team" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
              : "width=device-width, initial-scale=1"
          }
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
       
        <main className="min-h-screen">{children}</main>
   
      </body>
    </html>
  );
}
