export default function ProjectPageFirst() {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 bg-black">
      <div className="flex flex-col items-center gap-4 w-full max-w-xs">
        <div className="w-full bg-black border-4 border-pink-400 shadow-[6px_6px_0_0_#000] rounded-md text-pink-400">
          <div className="bg-pink-400 text-black px-3 py-1 font-bold text-sm border-b border-black">
            Overview.txt
          </div>
          <div className="p-4 text-sm">
            <p>
              A RESTful API for banking transactions that utilizes worker thread
              for high throughput.
            </p>
          </div>
        </div>

        <div className="w-full bg-black border-4 border-pink-400 shadow-[6px_6px_0_0_#000] rounded-md text-pink-400">
          <div className="bg-pink-400 text-black px-3 py-1 font-bold text-sm border-b border-black">
            Tech_Stack.txt
          </div>
          <div className="p-4 text-sm">
            <ul className="list-disc pl-4">
              <li>Express.js</li>
              <li>PostgreSQL</li>
            </ul>
          </div>
        </div>

        <div className="w-full bg-black border-4 border-pink-400 shadow-[6px_6px_0_0_#000] rounded-md text-pink-400">
          <div className="bg-pink-400 text-black px-3 py-1 font-bold text-sm border-b border-black">
            Links.txt
          </div>
          <div className="p-4 text-sm">
            <a
              href="https://github.com/d-a-b-d/banking-app"
              className="underline hover:text-pink-200 transition"
              target="_blank"
            >
              GitHub Repo →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
