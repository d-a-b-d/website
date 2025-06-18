import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectSection";
import ContactSection from "@/components/ContactSection";
import Header from "@/components/Header";
import ProjectDetailSection from "@/components/ProjectAboutSection";
import projectDetails from "@/data/ProjectAboutText";
import AnimatedSection from "@/components/AnimatedSection";
import ProjectPageFirst from "@/components/FirstProject";
import ProjectPageSecond from "@/components/SecondProject";
import ProjectPageThird from "@/components/ThirdProject";

export default function Home() {
  return (
    <main className="scroll-smooth font-mono text-pink-400">
      {/* === Header + About Section with Background Video === */}
      <div className="relative min-h-screen overflow-hidden">
        {/* Background Video */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
          src="/back.webm"
          autoPlay
          loop
          muted
          playsInline
        />

        {/* Foreground Content */}
        <div className="relative z-10">
          <Header />
          <section
            id="about"
            className="min-h-screen flex items-center justify-center"
          >
            <AboutSection />
          </section>
        </div>
      </div>

      {/* === Projects Section and Detail Windows === */}
      <div className="bg-black relative z-10">
        {/* Main Projects Grid */}
        <AnimatedSection>
          <section
            id="projects"
            className="min-h-screen flex items-center justify-center"
          >
            <ProjectsSection />
          </section>
        </AnimatedSection>

        {/* Project Windows Styled in Pyramid Layout */}
        <AnimatedSection delay={0.2}>
          <section id="first-project" className="relative min-h-screen">
            <ProjectPageFirst />
          </section>
        </AnimatedSection>

        <AnimatedSection delay={0.4}>
          <section id="second-project" className="relative min-h-screen">
            <ProjectPageSecond />
          </section>
        </AnimatedSection>

        <AnimatedSection delay={0.6}>
          <section id="third-project" className="relative min-h-screen">
            <ProjectPageThird />
          </section>
        </AnimatedSection>

        {/* Contact Section */}
        <AnimatedSection delay={0.1}>
          <section
            id="contact"
            className="min-h-screen flex items-center justify-center"
          >
            <ContactSection />
          </section>
        </AnimatedSection>
      </div>
    </main>
  );
}
