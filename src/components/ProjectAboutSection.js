export default function ProjectDetailSection({
  id,
  title,
  description,
  style,
}) {
  return (
    <div
      id={id}
      className="absolute bg-black border-4 border-pink-400 shadow-[6px_6px_0_0_#000] text-pink-400 max-w-md rounded-md"
      style={style}
    >
      {/* Title Bar */}
      <div className="bg-pink-400 text-black px-3 py-1 font-bold flex justify-between items-center text-sm border-b border-black">
        <span>{title || "Project Window"}</span>
        <div className="flex gap-1">
          <div className="w-3 h-3 bg-black rounded-sm" />
          <div className="w-3 h-3 bg-black rounded-sm" />
          <div className="w-3 h-3 bg-black rounded-sm" />
        </div>
      </div>

      {/* Content */}
      <div className="p-4 text-base">
        <p className="mb-3">{description}</p>
        <a
          href="#projects"
          className="underline text-pink-400 hover:text-pink-200 transition"
        >
          ← Back to Projects
        </a>
      </div>
    </div>
  );
}
