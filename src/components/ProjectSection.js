import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
  return (
    <div className="min-h-screen p-8 flex flex-col items-center">
      <h2 className="text-4xl font-bold mb-6">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <ProjectCard
          title="Retro Game"
          description="Pixel art game demo."
          link="#"
        />
        <ProjectCard
          title="Terminal Portfolio"
          description="A CLI-style portfolio site."
          link="#"
        />
        <ProjectCard title="Blog" description="Minimal dev blog." link="#" />
      </div>
    </div>
  );
}
