/* eslint-disable react/no-unescaped-entities */
"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
// import { Locale } from "@/i18n-config";
// import { getDictionary } from "@/get-dictionaries";

const contractAddress: string = "AiQcnL5gPjEXVH1E1FGUdN1WhPz4qXAZfQJxpGrJpump";

export default function Hero({ dictionary }): JSX.Element {
  // const dictionary = getDictionary(lang);

  const [showToast, setShowToast] = useState<boolean>(false);
  console.log("dictionary", dictionary);

  const copyToClipboard = (): void => {
    navigator.clipboard.writeText(contractAddress);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 5000);
  };

  return (
    <div className="hero-section flex flex-col items-center justify-center  w-full relative text-white">
      <div className="w-full mt-12 h-[20vh] md:h-[30vh] relative">
        <Image
          src="/images/banner.png"
          alt="Hero Banner"
          className="absolute top-0 left-0 object-fill"
          fill
          priority
        />
      </div>

      <div className="z-10 px-4 max-w-4xl text-center mt-6">
        <h1 className="text-3xl md:text-6xl font-bold mb-6 animate__animated animate__fadeIn animate__delay-1s">
          {dictionary.home.welcome}
        </h1>
        <p className="text-xl font-semibold text-green-300 md:text-2xl mb-6 animate__animated animate__fadeIn animate__delay-2s">
          {dictionary.hero.join}
        </p>
        <h2 className="text-lg md:text-xl font-bold text-color-primary animate__animated animate__fadeIn animate__delay-3s">
          {dictionary.hero.contractAddress}
        </h2>

        <p
          className="text-lg font-medium mx-4 md:text-2xl px-8 text-white underline cursor-pointer mt-2 animate__animated animate__fadeIn animate__delay-4s"
          onClick={copyToClipboard}
        >
          AiQcnL5gPjEXVH1E1FGUdN1WhPz
          <br />
          4qXAZfQJxpGrJpump
        </p>
        <a
          href={`https://solscan.io/token/${contractAddress}`}
          target="_blank"
          rel="noopener noreferrer"
          className="block mt-4 text-[#5a3310] text-2xl font-bold underline animate__animated animate__fadeIn animate__delay-3s"
        >
          {dictionary.hero.viewOnSolscan}
        </a>

        <Link
          href="https://jup.ag/swap/SOL-AiQcnL5gPjEXVH1E1FGUdN1WhPz4qXAZfQJxpGrJpump"
          target="_blank"
          passHref
          className="inline-block mt-6 px-6 py-3 bg-green-500 hover:bg-green-600 text-white text-lg font-bold rounded transition-colors animate__animated animate__fadeIn animate__delay-4s"
        >
          {dictionary.hero.buyNow}
        </Link>
      </div>

      {/* Include the IconGrid component */}

      {showToast && (
        <div className="fixed bottom-5 right-5 bg-green-500 text-white px-4 py-2 rounded shadow-md animate__animated animate__fadeInUp">
          Contract Address copied to clipboard!
        </div>
      )}
    </div>
  );
}
