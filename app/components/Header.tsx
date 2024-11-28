"use client";
import { useState } from "react";
import Link from "next/link";
import { FaTelegramPlane, FaTwitter } from "react-icons/fa";
import { MdMenu, MdClose } from "react-icons/md";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-[#8b4513] fixed top-0 left-0 w-full z-50 text-white py-4 px-6 flex justify-between items-center shadow-md">
      {/* Logo */}
      <div className="text-2xl font-bold">
        <Link href="/" className="hover:opacity-80">
          Kheowzoo
        </Link>
      </div>

      {/* Social Icons */}
      <div className="flex space-x-4 md:space-x-6">
        <Link href="https://x.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="text-xl hover:opacity-80" />
        </Link>
        <Link href="https://telegram.org" target="_blank" rel="noopener noreferrer">
          <FaTelegramPlane className="text-xl hover:opacity-80" />
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
        } fixed top-16 right-0 w-64 bg-[#5a3310]/90 z-50 flex-col items-start space-y-4 p-4 rounded-md shadow-lg md:static md:flex md:flex-row md:space-y-0 md:space-x-6 md:w-auto`}
      >
        <Link
          href="/about"
          className="block px-4 py-2 text-lg font-medium hover:underline md:px-0 md:py-0 md:hover:underline"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          About
        </Link>
        <Link
          href="/gallery"
          className="block px-4 py-2 text-lg font-medium hover:underline md:px-0 md:py-0 md:hover:underline"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Gallery
        </Link>
        <Link
          href="/contact"
          className="block px-4 py-2 text-lg font-medium hover:underline md:px-0 md:py-0 md:hover:underline"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Contact
        </Link>
      </nav>
    </header>
  );
}
