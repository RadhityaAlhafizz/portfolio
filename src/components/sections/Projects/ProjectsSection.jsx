import { useState } from 'react';
import { projectsData } from '../../../data/projects';
import Section from '../../ui/Section';
import SectionHeading from '../../ui/SectionHeading';
import ProjectCard from './ProjectCard';
import ProjectDetailModal from './ProjectDetailModal';

/**
 * Komponen Bagian: ProjectsSection (Tema Gelap + Aksen Oranye)
 */
export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState('Semua');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['Semua', 'Web', 'Jaringan', 'Aplikasi', 'Data'];

  const filteredProjects =
    activeCategory === 'Semua'
      ? projectsData
      : projectsData.filter((p) => p.category === activeCategory);

  return (
    <Section id="projek" variant="white">
      {/* Header & Filter Bar */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <SectionHeading
          tag="Portofolio Karya"
          title="Projek Pilihan"
          className="mb-0"
        />

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-zinc-900 rounded-lg border border-zinc-800 self-start md:self-end">
          {categories.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`text-xs font-medium px-3 py-1.5 rounded-md transition-all ${isActive
                    ? 'bg-zinc-800 text-orange-400 shadow-xs font-semibold border border-zinc-700'
                    : 'text-zinc-400 hover:text-zinc-200'
                  }`}
              >
                {category}
              </button>
            );
          })}
        </div>
      </div>

      {/* Grid Kartu Projek */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onOpenDetail={setSelectedProject}
          />
        ))}
      </div>

      {/* Modal Detail */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </Section>
  );
}
