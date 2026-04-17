import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ResearchFocus from "@/components/ResearchFocus";
import ProjectsGallery from "@/components/ProjectsGallery";
import TechStack from "@/components/TechStack";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      {/* Subtle grid overlay */}
      <div
        aria-hidden
        className="fixed inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px)," +
            "linear-gradient(90deg, rgba(255,255,255,0.018) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <Navbar />
      <Hero />
      <ResearchFocus />
      <ProjectsGallery />
      <TechStack />
      <Footer />
    </main>
  );
}
