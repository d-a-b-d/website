export default function ProjectCard({ title, description, link }) {
  return (
    <a
      href={link}
      className="block p-6 border border-pink-400 rounded-lg hover:bg-pink-400 hover:text-black transition"
      target="_blank"
      rel="noopener noreferrer"
    >
      <h3 className="text-2xl font-semibold mb-2">{title}</h3>
      <p>{description}</p>
    </a>
  );
}
