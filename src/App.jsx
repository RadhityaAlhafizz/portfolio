import Navbar from './components/layout/Navbar';
import HeroSection from './components/sections/Hero/HeroSection';
import AboutSection from './components/sections/About/AboutSection';
import ProjectsSection from './components/sections/Projects/ProjectsSection';
import ExperienceSection from './components/sections/Experience/ExperienceSection';
import SkillsSection from './components/sections/Skills/SkillsSection';
import ContactSection from './components/sections/Contact/ContactSection';

/**
 * Komponen Utama App (Root Application)
 * Tema: Gelap (Dark Mode) dengan kombinasi warna aksen Oranye.
 */
function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col font-sans selection:bg-orange-500/30 selection:text-orange-200">
      {/* 1. Navigasi Global */}
      <Navbar />

      {/* 2. Bagian Konten Halaman */}
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ExperienceSection />
        <SkillsSection />
        <ContactSection />
      </main>
    </div>
  );
}

export default App;
