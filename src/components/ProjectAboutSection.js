export default function ProjectDetailSection({ id, title, description }) {
  return (
    <section
      id={id}
      className="min-h-screen p-8 flex items-center justify-center"
    >
      <div className="bg-black/70 p-6 rounded-xl border border-pink-400 max-w-2xl">
        <h2 className="text-4xl font-bold mb-4">{title}</h2>
        <p className="text-lg">{description}</p>
        <a
          href="#projects"
          className="mt-6 inline-block text-pink-400 underline hover:text-pink-200 transition"
        >
          ← Back to Projects
        </a>
      </div>
    </section>
  );
}
