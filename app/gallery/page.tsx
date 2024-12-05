"use client";
import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Header from "../components/Header";

interface VideoPreview {
  src: string;
  title: string;
  caption: string;
}

const videoPreviews: VideoPreview[] = [
  {
    src: "/WebGallery/videos/kheowzoo_mv.mp4",
    title: "Kheowzoo Official Music Video",
    caption: "Enjoy the groove",
  },
  {
    src: "/WebGallery/videos/vid1.mp4",
    title: "Wildlife Exploration",
    caption: "Discover exotic wildlife at Kheowzoo.",
  },
  {
    src: "/WebGallery/videos/vid2.mp4",
    title: "Khewozoo to the moon!!",
    caption: "Leggo",
  },
  {
    src: "/WebGallery/videos/vid3.mp4",
    title: "New video",
    caption: "Charity to rescue stray animals",
  },
];

export default function Gallery() {
  const [activeTab, setActiveTab] = useState<"images" | "videos">("images");
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [videoStates, setVideoStates] = useState(
    videoPreviews.map(() => ({ muted: true, isPlaying: false }))
  );

  const images = useMemo<string[]>(
    () => Array.from({ length: 57 }, (_, i) => `img${i + 1}.jpg`),
    []
  );

  const toggleMute = (index: number) => {
    setVideoStates((prevState) =>
      prevState.map((state, i) =>
        i === index ? { ...state, muted: !state.muted } : state
      )
    );
  };

  const handleHover = (index: number, play: boolean) => {
    setVideoStates((prevState) =>
      prevState.map((state, i) =>
        i === index ? { ...state, isPlaying: play } : state
      )
    );
  };

  return (
    <div>
      <div>
        <Header />
      </div>
      <section className="pt-16 pb-8 w-full bg-black/50" id="gallery">
        <div className="max-w-7xl mx-auto mt-8 px-6">
          <h2 className="text-3xl font-bold text-center mb-0 text-white">
            Gallery
          </h2>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-8">
            <button
              onClick={() => setActiveTab("images")}
              className={`px-6 py-2 font-semibold text-lg ${
                activeTab === "images" ? "text-green-500" : "text-gray-400"
              } hover:text-green-400 transition`}
            >
              Images
            </button>
            <button
              onClick={() => setActiveTab("videos")}
              className={`px-6 py-2 font-semibold text-lg ${
                activeTab === "videos" ? "text-green-500" : "text-gray-400"
              } hover:text-green-400 transition`}
            >
              Videos
            </button>
          </div>

          {/* Tab Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {activeTab === "videos" &&
              videoPreviews.map((video, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="relative"
                  onMouseEnter={() => handleHover(index, true)}
                  onMouseLeave={() => handleHover(index, false)}
                >
                  <div className="relative w-full h-[260px] overflow-hidden rounded-lg">
                    <video
                      src={video.src}
                      className="w-full h-full object-fill"
                      muted={videoStates[index].muted}
                      loop={videoStates[index].isPlaying}
                      autoPlay={videoStates[index].isPlaying}
                      onClick={() => setSelectedVideo(video.src)}
                    />
                    {/* Mute/Unmute Button */}
                    <button
                      onClick={() => toggleMute(index)}
                      className="absolute top-2 right-2 bg-black/60 text-white p-1 rounded-full"
                    >
                      {videoStates[index].muted ? "🔇" : "🔊"}
                    </button>
                  </div>
                  {/* Title and Caption */}
                  <div className="mt-2 text-center">
                    <h3 className="text-lg font-semibold text-white">
                      {video.title}
                    </h3>
                    <p className="text-sm text-gray-300">{video.caption}</p>
                  </div>
                </motion.div>
              ))}

            {activeTab === "images" &&
              images.slice(0, 3).map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="relative">
                    <Image
                      src={`/WebGallery/photos/${image}`}
                      alt={`Gallery Image ${index + 1}`}
                      width={400}
                      height={300}
                      className="w-full h-[300px] object-cover rounded-lg"
                    />
                  </div>
                </motion.div>
              ))}
          </div>

          <div className="flex justify-center mt-8">
            {/* <Link
              href="/more"
              className="inline-block bg-color-primary text-color-bg py-3 px-8 rounded-lg text-xl font-semibold hover:underline hover:bg-opacity-90 transition"
            >
              View More
            </Link> */}
          </div>
        </div>
      </section>

      {/* Video Player */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">
          <video
            src={selectedVideo}
            controls
            autoPlay
            className="w-full max-w-3xl rounded-lg"
          />
          <button
            onClick={() => setSelectedVideo(null)}
            className="absolute top-4 right-4 text-white bg-black/50 p-2 rounded-full"
          >
            ✖
          </button>
        </div>
      )}
    </div>
  );
}
