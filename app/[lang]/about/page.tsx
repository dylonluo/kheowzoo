import React from "react";
import { Locale } from "@/i18n-config";
import AboutKheowzoo from "../components/About";
import { getDictionary } from "@/get-dictionaries";


async function page({ params }: { params: { lang: Locale } }) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);
  console.log("dictionary", dictionary);

  return (
    <div>
      <AboutKheowzoo lang={lang} dictionary={dictionary} />
    </div>
  );
}

export default page;
