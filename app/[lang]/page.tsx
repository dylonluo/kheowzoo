//import Image from "next/image";
import type { Locale } from "@/i18n-config";
import { getDictionary } from "@/get-dictionaries";

//import Footer from "./components/Footer";
//import Header from "./components/Header";

import Hero from "./components/Hero";
import IconGrid from "./components/IconGrid";

export default async function Home({ params }: { params: { lang: Locale } }) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);
  console.log("dictionary", dictionary);
  return (
    <div>
      <main className="flex flex-col gap-8 row-start-2 items-center">
        <Hero dictionary={dictionary} />
        <IconGrid dictionary={dictionary} />
      </main>
    </div>
  );
}
