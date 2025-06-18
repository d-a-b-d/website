export default function ProjectPageThird() {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 bg-black">
      <div className="flex flex-col items-center gap-4 w-full max-w-xs">
        <Window title="Social_Media_API.txt">
          <p>
            Social Media API with auth, testing, posting and photo-uploading
            features.
          </p>
        </Window>

        <Window title="Tech_Stack.ini">
          <p>Built using Node.js, Express, and Jest.</p>
        </Window>

        <Window title="Curious?">
          <a
            href="https://github.com/d-a-b-d/acebook/"
            className="underline text-pink-400 hover:text-pink-200 transition"
          >
            View Repo →
          </a>
        </Window>
      </div>
    </div>
  );
}

function Window({ title, children }) {
  return (
    <div className="w-full bg-black border-4 border-pink-400 shadow-[6px_6px_0_0_#000] rounded-md text-pink-400">
      <div className="bg-pink-400 text-black px-3 py-1 font-bold text-sm border-b border-black flex justify-between items-center">
        <span>{title}</span>
        <div className="flex gap-1">
          <div className="w-3 h-3 bg-black rounded-sm" />
          <div className="w-3 h-3 bg-black rounded-sm" />
          <div className="w-3 h-3 bg-black rounded-sm" />
        </div>
      </div>
      <div className="p-4 text-sm">{children}</div>
    </div>
  );
}
