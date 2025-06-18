export default function Header() {
  return (
    <header className="w-full p-6 flex justify-between items-center border-b border-pink-400">
      <h1 className="text-3xl font-bold">Duaa Amer</h1>
      <nav className="space-x-4">
        <a href="#projects" className="hover:underline">
          Projects
        </a>
        <a href="#contact" className="hover:underline">
          Contact
        </a>
      </nav>
    </header>
  );
}
