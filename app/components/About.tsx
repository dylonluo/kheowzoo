"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function AboutKheowzoo() {
  const [activeTab, setActiveTab] = useState<"who" | "why" | "vision">("who");

  return (
    <section className="py-8 bg-black" id="about">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">
          About Kheowzoo
        </h2>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <button
            onClick={() => setActiveTab("who")}
            className={`px-6 py-2 font-semibold ${
              activeTab === "who" ? "text-color-primary" : "text-gray-600"
            }`}
          >
            Who We Are
          </button>
          <button
            onClick={() => setActiveTab("why")}
            className={`px-6 py-2 font-semibold ${
              activeTab === "why" ? "text-color-primary" : "text-gray-600"
            }`}
          >
            Why Us
          </button>
          <button
            onClick={() => setActiveTab("vision")}
            className={`px-6 py-2 font-semibold ${
              activeTab === "vision" ? "text-color-primary" : "text-gray-600"
            }`}
          >
            Vision and Mission
          </button>
        </div>

        {/* Tab Content */}
        <div className="text-center">
          {activeTab === "who" && (
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <Image
                  src="/WebGallery/photos/img18.jpg"
                  alt="Kheowzoo Team"
                  width={500}
                  height={300}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="flex-1 text-center text-gray-300">
                <h3 className="text-2xl font-bold mb-4 text-white">
                  Kheowzoo CTO:
                </h3>
                <p>
                  Home of Meme Animals! Led by a Chinese team as a CTO project,
                  kheowzoo gives every meme animal a home and provides a place
                  for crypto players tired of endless PVP. kheowzoo is the
                  world&apos;s first CTO leading project promoted by the Chinese
                  community. The community adheres to long-term construction and
                  opposes the current vicious PVP infringement on meme culture.
                </p>
                <p className="mt-4">
                  With the purpose of creating a cultural home for harmony and
                  co-prosperity in the crypto world, the community is committed
                  to &quot;providing a home for all stray animals and a home for
                  all homeless meme holders.&quot; We call on meme lovers who
                  love peace and are enthusiastic about building cultural
                  communities to join us.
                </p>
              </div>
            </div>
          )}

          {activeTab === "why" && (
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1 text-center text-gray-300">
                <h3 className="text-2xl font-bold mb-4 text-white">Why Us</h3>
                <p>
                  Home of Meme Animals! Led by a Chinese team as a CTO project,
                  kheowzoo gives every meme animal a home and provides a place
                  for crypto players tired of endless PVP. kheowzoo is the
                  world&apos;s first CTO leading project promoted by the Chinese
                  community. The community adheres to long-term construction and
                  opposes the current vicious PVP infringement on meme culture.
                </p>
                <p className="mt-4">
                  With the purpose of creating a cultural home for harmony and
                  co-prosperity in the crypto world, the community is committed
                  to &quot;providing a home for all stray animals and a home for
                  all homeless meme holders.&quot; We call on meme lovers who
                  love peace and are enthusiastic about building cultural
                  communities to join us.
                </p>
              </div>
              <div className="flex-1">
                <Image
                  src="/WebGallery/photos/img26.jpg"
                  alt="Kheowzoo Features"
                  width={500}
                  height={300}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          )}

          {activeTab === "vision" && (
            <div className="px-8">
              <h3 className="text-2xl font-bold mb-4 text-white">
                Vision and Mission
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-[#964B00] shadow-lg rounded-lg p-6 text-center">
                  <h4 className="text-xl font-semibold text-color-primary mb-4">
                    Our Vision
                  </h4>
                  <p className="text-white">
                    To lead the global Web3 revolution by creating a digital
                    ecosystem that fosters innovation, collaboration, and
                    inclusivity while delivering unparalleled value.
                  </p>
                </div>

                <div className="bg-[#964B00] shadow-lg rounded-lg p-6 text-center">
                  <h4 className="text-xl font-semibold text-color-primary mb-4">
                    Our Mission
                  </h4>
                  <p className="text-white">
                    Empowering users and communities through state-of-the-art
                    technology, providing tools and platforms that promote
                    growth, creativity, and sustainability.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
