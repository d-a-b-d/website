export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-6xl font-bold mb-4">Your Name</h1>
      <p className="text-pinkcustom text-2xl mb-8 max-w-xl text-center">
        I’m a developer passionate about building cool stuff.
      </p>
      <section className="w-full max-w-3xl grid grid-cols-1 sm:grid-cols-3 gap-6">
        <ProjectCard
          title="Project One"
          description="Description of project one."
          link="#"
        />
        <ProjectCard
          title="Project Two"
          description="Description of project two."
          link="#"
        />
        <ProjectCard
          title="Project Three"
          description="Description of project three."
          link="#"
        />
      </section>
    </main>
  );
}

function ProjectCard({ title, description, link }: { title: string; description: string; link: string }) {
  return (
    <a
      href={link}
      className="block p-6 border border-pinkcustom rounded-lg hover:bg-pinkcustom hover:text-black transition"
      target="_blank"
      rel="noopener noreferrer"
    >
      <h2 className="text-2xl font-semibold mb-2">{title}</h2>
      <p>{description}</p>
    </a>
  );
}
