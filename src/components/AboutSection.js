"use client";

import Draggable from "react-free-draggable";

export default function AboutSection() {
  return (
    <div className="min-h-screen flex items-center justify-center font-mono px-4 gap-6">
      <Draggable handle=".title-bar">
        <div className="relative w-full max-w-md border-[3px] border-black bg-black shadow-[4px_4px_0_0_#000] cursor-move flex flex-col">
          <div className="title-bar bg-pink-400 text-black px-2 py-1 text-sm font-bold flex justify-between items-center">
            <span>About_Me.txt</span>
            <button className="w-4 h-4 bg-black text-pink-400 flex items-center justify-center text-xs font-bold leading-none">
              X
            </button>
          </div>

          <div className="bg-black text-pink-400 p-4 text-center h-72 border-pink-400 flex flex-col items-center justify-center gap-4 overflow-y-auto custom-scrollbar">
            <h1 className="text-3xl font-bold">About Me</h1>
            <p className="text-base max-w-sm">
              Passionate about building intelligent systems that solve
              real-world problems. My work spans machine learning, computer
              vision, and backend development, with hands-on experience creating
              end-to-end solutions.
            </p>

            <div className="flex justify-center gap-4">
              <a href="#second-project">
                <button className="px-4 py-1 bg-pink-400 text-black border-[2px] border-black shadow-[inset_-1px_-1px_0_#888,inset_1px_1px_0_#fff] active:shadow-[inset_1px_1px_0_#888,inset_-1px_-1px_0_#fff]">
                  Projects
                </button>
              </a>
              <a href="#contact">
                <button className="px-4 py-1 bg-pink-400 text-black border-[2px] border-black shadow-[inset_-1px_-1px_0_#888,inset_1px_1px_0_#fff] active:shadow-[inset_1px_1px_0_#888,inset_-1px_-1px_0_#fff]">
                  Contact
                </button>
              </a>
            </div>
          </div>
        </div>
      </Draggable>

      <div className="w-64 h-80 border-[3px] border-black bg-black shadow-[4px_4px_0_0_#000] overflow-y-scroll custom-scrollbar flex flex-col">
        <div className="bg-pink-400 text-black px-2 py-1 text-sm font-bold">
          <span>Tech_Used_Before.txt</span>
        </div>
        <ul className="p-4 text-pink-400 text-sm space-y-2">
          <li>JavaScript</li>
          <li>Python</li>
          <li>Node.js</li>
          <li>Express</li>
          <li>SQL</li>
          <li>MongoDB</li>
          <li>Docker</li>
          <li>GraphQL</li>
          <li>Flask</li>
          <li>Pandas</li>
          <li>React</li>
          <li>Postman</li>
          <li>Tensorflow</li>
          <li></li>
        </ul>
      </div>
    </div>
  );
}
