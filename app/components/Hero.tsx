"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function Hero() {
  const contractAddress = "AiQcnL5gPjEXVH1E1FGUdN1WhPz4qXAZfQJxpGrJpump";
  const [showToast, setShowToast] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractAddress);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 5000); // Clear toast after 5 seconds
  };

  return (
    <div className="hero-section flex flex-col items-center justify-start w-full relative text-white">
      {/* Responsive Banner Image */}
      <div className="w-full h-[40vh] md:h-[50vh] relative">
        <Image
          src="/banner.png" // Replace with your image file
          alt="Hero Banner"
          layout="fill"
          objectFit="cover"
          priority
          className="absolute top-0 left-0"
        />
      </div>

      {/* Hero Text Section */}
      <div className="z-10 px-4 max-w-4xl text-center mt-6">
        <h1 className="text-3xl md:text-6xl font-bold mb-6 animate__animated animate__fadeIn animate__delay-1s">
          Welcome to Kheowzoo
        </h1>

        <p className="text-lg md:text-xl mb-2 animate__animated animate__fadeIn animate__delay-2s">
          Explore the cutting edge of blockchain-powered conservation. Join a
          community redefining the future of wildlife and Web3 technology.
        </p>
      </div>

      {/* Contract Address Section */}
      <div className="z-10 mx-4 px-4 max-w-4xl text-center mt-8">
        <h2 className="text-lg md:text-xl font-bold text-color-primary animate__animated animate__fadeIn animate__delay-3s">
          Contract Address
        </h2>
        <p
          className="text-base md:text-base px-4 text-white underline cursor-pointer mt-2 animate__animated animate__fadeIn animate__delay-3s"
          onClick={copyToClipboard}
        >
          {contractAddress}
        </p>
        <a
          href={`https://solscan.io/token/${contractAddress}`}
          target="_blank"
          rel="noopener noreferrer"
          className="block mt-4 text-green-500 text-lg underline animate__animated animate__fadeIn animate__delay-3s"
        >
          View on Solscan
        </a>
      </div>

      {/* Toast Notification */}
      {showToast && (
        <div className="fixed bottom-5 right-5 bg-green-500 text-white px-4 py-2 rounded shadow-md animate__animated animate__fadeInUp">
          Contract Address copied to clipboard!
        </div>
      )}
    </div>
  );
}
