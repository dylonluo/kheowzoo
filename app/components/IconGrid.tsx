import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaTelegramPlane, FaTwitter } from "react-icons/fa";

export default function IconGrid(): JSX.Element {
  return (
    <div className="items-center justify-center w-full relative text-white">
    <div className="bg-[#c56927] grid grid-cols-3 md:grid-cols-6 gap-2 mt-10 px-16 py-6">
      <Link href="https://dextools.io" target="_blank" rel="noopener noreferrer">
        <Image
          src="/dextool.png"
          alt="Dextools"
          width={50}
          height={50}
          className="mx-auto"
        />
      </Link>
      <Link href="https://solscan.io" target="_blank" rel="noopener noreferrer">
        <Image
          src="/solscan.png"
          alt="Solscan"
          width={50}
          height={50}
          className="mx-auto"
        />
      </Link>
      <Link href="https://dex-screen.io" target="_blank" rel="noopener noreferrer">
        <Image
          src="/dex-screener.png"
          alt="Dex Screen"
          width={50}
          height={50}
          className="mx-auto"
        />
      </Link>
      <Link href="https://coingecko.com" target="_blank" rel="noopener noreferrer">
        <Image
          src="/coin-gecko.png"
          alt="Coin Gecko"
          width={100}
          height={100}
          className="mx-auto"
        />
      </Link>
      <Link
        href="https://telegram.org"
        target="_blank"
        rel="noopener noreferrer"
        className="text-3xl text-white hover:text-gray-300 mx-auto"
      >
        <FaTelegramPlane />
      </Link>
      <Link
        href="https://x.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-3xl text-white hover:text-gray-300 mx-auto"
      >
        <FaTwitter />
      </Link>
    </div>
    </div>

  );
}
