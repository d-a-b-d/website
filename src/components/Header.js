import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Header from "@/components/Header";

export default function Home() {
  return (
    <main className="bg-black text-pink-400 scroll-smooth">
      <Header />
      <section id="about">
        <AboutSection />
      </section>
      <section id="projects">
        <ProjectsSection />
      </section>
      <section id="contact">
        <ContactSection />
      </section>
    </main>
  );
}
