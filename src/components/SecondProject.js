"use client";

import { useState } from "react";
import { projectVideos } from "@/data/video";

export default function ProjectPageSecond() {
  const [showImage, setShowImage] = useState(false);

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-black px-2 py-8">
      <div className="flex gap-4 items-start">
        <div className="flex flex-col gap-3">
          <Window title="Overview.txt">
            <p className="text-sm">
              Fruit quality assessment system using MobileNetV2.
            </p>
          </Window>

          <Window title="Tech_Stack.ini">
            <p className="text-sm">
              Built using Tensorflow, Flutter, and Flask.
            </p>
          </Window>

          <Window title="Live_Link.url">
            <a
              href="https://link.springer.com/chapter/10.1007/978-3-031-77299-3_13"
              className="text-sm underline text-pink-400 hover:text-pink-200 transition"
            >
              View Project →
            </a>
          </Window>

          <Window title="backend.png">
            <img
              src="/backend.jpg"
              alt="Screenshot"
              width={230}
              className="rounded border border-pink-400 cursor-pointer"
              onClick={() => setShowImage(true)}
            />
            <p className="text-xs mt-1 text-pink-300 text-center">
              Click to enlarge
            </p>
          </Window>
        </div>

        <div
          className="border-[3px] border-pink-400 shadow-[4px_4px_0_0_#000] text-pink-400 rounded-md overflow-hidden bg-black"
          style={{ width: "280px", height: "530px" }}
        >
          <div className="bg-pink-400 text-black px-2 py-0.5 font-bold flex justify-between items-center text-xs border-b border-black">
            <span>demo_video.webm</span>
          </div>
          <div className="m-0 p-0 leading-none">
            <iframe
              src={projectVideos.fruitAssessment}
              allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
              allowFullScreen
              className="block w-full aspect-[9/16] border-none m-0 p-0"
              style={{
                display: "block",
              }}
            />
          </div>
        </div>
      </div>

      {showImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setShowImage(false)}
        >
          <img
            src="/backend.jpg"
            alt="Full Backend Screenshot"
            className="max-w-[90%] max-h-[90%] border-4 border-pink-400 shadow-lg"
          />
        </div>
      )}
    </div>
  );
}

// Retro Window Component
function Window({ title, children }) {
  return (
    <div className="bg-black border-[3px] border-pink-400 shadow-[4px_4px_0_0_#000] text-pink-400 rounded-md max-w-[240px]">
      <div className="bg-pink-400 text-black px-2 py-0.5 font-bold flex justify-between items-center text-xs border-b border-black">
        <span>{title}</span>
      </div>
      <div className="p-2">{children}</div>
    </div>
  );
}
