export default function AboutSection() {
  return (
    <div className="min-h-screen flex items-center justify-center font-mono px-4">
      <div className="relative w-full max-w-md border-[3px] border-black bg-black shadow-[4px_4px_0_0_#000]">
        <div className="title-bar flex justify-between items-center bg-pink-400 text-black px-2 py-1 text-sm font-bold border-b-2 border-black">
          <span>About_Me.txt</span>
          <button className="w-4 h-4 bg-black text-pink-400 flex items-center justify-center text-xs font-bold leading-none">
            X
          </button>
        </div>

        <div className="bg-black text-pink-400 p-4 text-center border-t-[6px] border-pink-400">
          <h1 className="text-3xl font-bold mb-3">About Me</h1>
          <p className="text-base mb-6">
            Passionate about building
            intelligent systems that solve real-world problems. My work
            spans machine learning, computer vision, and backend
            development, with hands-on experience creating end-to-end solutions.
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
    </div>
  );
}
