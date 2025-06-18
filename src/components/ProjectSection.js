// components/ProjectSection.jsx
import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
  return (
    <div className="w-full flex flex-col items-center justify-center px-4">
      <h2 className="text-4xl font-bold mb-10 text-center">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <ProjectCard
          title="Banking RESTful API"
          description="A *humble* attempt at scaling."
          link="#first-project"
        />
        <ProjectCard
          title="Fruitector"
          description="Intelligent fruit quality assessment system."
          link="#second-project"
        />
        <ProjectCard
          title="SER"
          description="Explorations into sequential machine learning?"
          link="#third-project"
        />
      </div>
    </div>
  );
}
