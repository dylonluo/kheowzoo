import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Kheowzoo",
  description: "Experience the next generation of Web3 technology with KheowZoo.",
  keywords: ["KheowZoo", "Web3", "Blockchain", "NFTs", "Material Library"],
  authors: [{ name: "KheowZoo Team" }],
  viewport: "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no",
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
              : "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
          }
        />
      </head>
      <body className="scroll-smooth">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
