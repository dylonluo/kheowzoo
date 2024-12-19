import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaTelegramPlane, FaTwitter } from "react-icons/fa";

export default function IconGrid(): JSX.Element {
  return (
    <div className="items-center justify-center w-full relative text-white">
      <div className="bg-[#c56927] grid grid-cols-3 md:grid-cols-6 gap-2 mt-10 px-16 py-6">
        <Link
          href="https://www.dextools.io/app/en/solana/pair-explorer/5tCgQ8g9t7YxupJMmQBYTdXq6fJ8KbwFMrvAhfb9thG"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/images/dextool.png"
            alt="Dextools"
            width={50}
            height={50}
            className="mx-auto hover:scale-110"
          />
        </Link>
        <Link
          href="https://gmgn.ai/sol/token/edt2ItNX_AiQcnL5gPjEXVH1E1FGUdN1WhPz4qXAZfQJxpGrJpump"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/images/gmgn.png"
            alt="Gmgn"
            width={50}
            height={50}
            className="mx-auto hover:scale-110"
          />
        </Link>
        <Link
          href="https://dexscreener.com/solana/5tCgQ8g9t7YxupJMmQBYTdXq6fJ8KbwFMrvAhfb9thG"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/images/dex-screener.png"
            alt="Dex Screen"
            width={50}
            height={50}
            className="mx-auto hover:scale-110"
          />
        </Link>
        <Link
          href="https://www.coingecko.com/en/coins/khaokheowzoo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/images/coin-gecko.png"
            alt="Coin Gecko"
            width={100}
            height={100}
            className="mx-auto hover:scale-110"
          />
        </Link>
        <Link
          href="https://t.me/kheowzooCHINA"
          target="_blank"
          rel="noopener noreferrer"
          className="text-4xl text-green-200 mt-2 py-1 hover:scale-110 hover:text-green-300 mx-auto"
        >
          <FaTelegramPlane />
        </Link>
        <Link
          href="https://t.me/kheowzoo001"
          target="_blank"
          rel="noopener noreferrer"
          className="text-4xl text-black mt-2 py-1 hover:scale-110 hover:text-gray-300 mx-auto"
        >
          <FaTelegramPlane />
        </Link>
        {/* <Link
          href="https://x.com/kzoo_cto?s=21&t=pJn57akjnssvCPVZ-pc6ZQ"
          target="_blank"
          rel="noopener noreferrer"
          className="text-4xl text-green-200 mt-2 py-1 hover:scale-110 hover:text-green-300 mx-auto"
        >
          <FaTwitter />
        </Link> */}
        <Link
          href="https://x.com/kzoo_cto?s=21&t=pJn57akjnssvCPVZ-pc6ZQ"
          target="_blank"
          rel="noopener noreferrer"
          className="text-4xl text-black mt-2 py-1 hover:scale-110 hover:text-green-300 mx-auto"
        >
          <FaTwitter />
        </Link>
	<Link
          href="https://www.tiktok.com/@kheowzoo8?_t=8sFK14NpNry&_r=1"
          target="_blank"
          rel="noopener noreferrer"
         className="text-4xl text-black mt-2 py-1 hover:scale-110 hover:text-green-300 mx-auto"
	 >
        <Image
            src="/images/tiktok.png"
            alt="Dex Screen"
            width={50}
            height={50}
            className="mx-auto hover:scale-110"
          />
        </Link>
      </div>
    </div>
  );
}
