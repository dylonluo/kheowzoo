"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";



export default function AboutKheowzoo({dictionary}) {
  const [activeTab, setActiveTab] = useState<"who" | "why" | "vision">("who");

  const imageAnimation = {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 },
    transition: { duration: 0.7, ease: "easeInOut" },
  };

  const textAnimation = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 },
    transition: { duration: 0.7, delay: 0.3, ease: "easeInOut" },
  };

  return (
    <section className="py-8 bg-black" id="about">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">
          About Kheowzoo
        </h2>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          {["who", "why", "vision"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as "who" | "why" | "vision")}
              className={`px-6 py-2 font-semibold ${
                activeTab === tab ? "text-color-primary" : "text-gray-600"
              }`}
            >
              {tab === "who" && "Who We Are"}
              {tab === "why" && "Why Us"}
              {tab === "vision" && "Vision and Mission"}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="text-center">
          {activeTab === "who" && (
            <div className="flex flex-col md:flex-row items-center gap-8">
              <motion.div {...imageAnimation} className="flex-1">
                <Image
                  src="/WebGallery/photos/img58.jpg"
                  alt="Kheowzoo Team"
                  width={500}
                  height={300}
                  className="rounded-lg shadow-lg"
                  priority
                  placeholder="blur"
                  blurDataURL="/WebGallery/photos/blurred-img58.jpg"
                />
              </motion.div>
              <motion.div
                {...textAnimation}
                className="flex-1 text-center text-gray-300"
              >
                <h3 className="text-2xl font-bold mb-4 text-white">
                  Kheowzoo CTO:
                </h3>
                <p>
                  {dictionary.about.whoWeAreA}
                </p>
                <p className="mt-4">
                  {dictionary.about.whoWeAreB}
                </p>
              </motion.div>
            </div>
          )}

          {activeTab === "why" && (
            <div className="flex flex-col md:flex-row items-center gap-8">
              <motion.div {...imageAnimation} className="flex-1">
                <Image
                  src="/WebGallery/photos/img26.jpg"
                  alt="Kheowzoo Features"
                  width={500}
                  height={300}
                  className="rounded-lg shadow-lg"
                  placeholder="blur"
                  blurDataURL="/WebGallery/photos/blurred-img26.jpg"
                />
              </motion.div>
              <motion.div
                {...textAnimation}
                className="flex-1 text-center text-gray-300"
              >
                <h3 className="text-2xl font-bold mb-4 text-white">Why Us</h3>
                <p>
                  {dictionary.about.whyUsContent}
                </p>
              </motion.div>
            </div>
          )}

          {activeTab === "vision" && (
            <motion.div {...textAnimation} className="px-8">
              <h3 className="text-2xl font-bold mb-4 text-white">
                {dictionary.about.missionAndVision}  
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div
                  {...imageAnimation}
                  className="bg-[#964B00] shadow-lg rounded-lg p-6 text-center"
                >
                  <h4 className="text-xl font-semibold text-color-primary mb-4">
                    {dictionary.about.visionTitle}
                  </h4>
                  <p className="text-white">
                    {dictionary.about.vision}
                  </p>
                </motion.div>

                <motion.div
                  {...imageAnimation}
                  className="bg-[#964B00] shadow-lg rounded-lg p-6 text-center"
                >
                  <h4 className="text-xl font-semibold text-color-primary mb-4">
                    {dictionary.about.missionTitle}
                  </h4>
                  <p className="text-white">
                    {dictionary.about.mission}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
