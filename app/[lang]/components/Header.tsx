"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
//import { FaTelegramPlane, FaTwitter } from "react-icons/fa";
import { MdMenu, MdClose } from "react-icons/md";
import { Locale } from "@/i18n-config";

export default function Header({ lang }: { lang: Locale }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleLanguage = () => {
    const newLang = lang === "en" ? "zh" : "en";
    window.location.href = `/${newLang}`;
  };

  return (
    <header className="bg-[#8b4513] fixed top-0 left-0 w-full z-50 text-white py-4 px-6 flex justify-between items-center shadow-md">
      {/* Logo */}
      <div className="flex items-center text-2xl font-bold space-x-2">
        <Image
          src="/images/logo.png"
          alt="Kheowzoo Logo"
          width={40}
          height={40}
        />
        <Link
          href={`/${lang}`}
          className="hover:opacity-80 font-sans text-xl md:text-2xl"
        >
          Kheowzoo
        </Link>
      </div>

      {/* Mobile Menu Toggle */}
      <button
        className="text-white focus:outline-none md:hidden"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? (
          <MdClose className="text-2xl" />
        ) : (
          <MdMenu className="text-2xl" />
        )}
      </button>

      {/* Navigation */}
      <nav
        className={`${
          isMobileMenuOpen ? "flex" : "hidden"
        } fixed top-16 right-0 w-64 bg-[#5a3310]/90 z-50 flex-col items-start space-y-4 p-4 rounded-md shadow-lg md:static md:flex md:flex-row md:space-y-0 md:space-x-6 md:w-auto md:bg-transparent`}
      >
        <Link
          href={`/${lang}/about`}
          className="block px-4 py-2 text-lg font-medium hover:underline md:px-0 md:py-0 md:hover:underline"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          {lang === "en" ? "About" : "社区详情"}
        </Link>
        {/* <Link
          href={`/${lang}/news`}
          className="block px-4 py-2 text-lg font-medium hover:underline md:px-0 md:py-0 md:hover:underline"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          News
        </Link> */}
        <Link
          href={`/${lang}/gallery`}
          className="block px-4 py-2 text-lg font-medium hover:underline md:px-0 md:py-0 md:hover:underline"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          {lang === "en" ? "Gallery" : "相册"}
        </Link>
        <Link
          href="https://x.com/i/communities/1846046371033633151"
          target="_blank"
          className="block px-4 py-2 text-lg text-green-500 hover:text-green-300 font-medium hover:underline md:px-0 md:py-0 md:hover:underline"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          
          {lang === "en" ? "Animal Rescue⁣" : "动物救助行动"}

        </Link>
        <button
          className="text-white focus:outline-none"
          onClick={toggleLanguage}
        >
          {lang === "en" ? "中文" : "English"}
        </button>
      </nav>
    </header>
  );
}