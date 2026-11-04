import Badge from '../../ui/Badge';
import { Icon } from '../../ui/Icons';

/**
 * Komponen Kartu Projek (ProjectCard - Tema Gelap)
 */
export default function ProjectCard({ project, onOpenDetail }) {
  return (
    <article className="border border-zinc-800 bg-zinc-900 rounded-lg p-5 sm:p-6 flex flex-col justify-between hover:border-zinc-700 transition-colors shadow-xs">
      <div>
        
        {/* Kategori & Label Kerahasiaan */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <Badge variant="default" size="sm">
            {project.category}
          </Badge>
          {project.isConfidential && (
            <Badge variant="amber" size="sm">
              Internal / Confidential
            </Badge>
          )}
        </div>

        {/* Judul Projek */}
        <h3 className="text-lg font-bold text-zinc-100 tracking-tight leading-snug">
          {project.title}
        </h3>

        {/* Deskripsi Ringkas */}
        <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
          {project.shortDescription}
        </p>

        {/* Peran Singkat */}
        <div className="mt-4 pt-3 border-t border-zinc-800/80">
          <p className="text-[11px] text-zinc-500 font-semibold uppercase tracking-wider">
            Peran Saya:
          </p>
          <p className="mt-0.5 text-xs text-zinc-300 leading-relaxed line-clamp-2">
            {project.role}
          </p>
        </div>

        {/* Tech Stack Pills */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.techStack.map((tech) => (
            <Badge key={tech} variant="mono" size="sm">
              {tech}
            </Badge>
          ))}
        </div>

      </div>

      {/* Aksi Bawah */}
      <div className="mt-6 pt-4 border-t border-zinc-800/80 flex items-center justify-between gap-2">
        <button
          type="button"
          onClick={() => onOpenDetail(project)}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-200 hover:text-orange-400 underline underline-offset-4 transition-colors"
        >
          <span>Baca Selengkapnya</span>
          <Icon.ArrowRight className="w-3 h-3" />
        </button>

        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 rounded text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 transition-colors"
            title="Lihat Kode di GitHub"
            aria-label={`GitHub repo untuk ${project.title}`}
          >
            <Icon.GitHub className="w-4 h-4 text-zinc-300" />
          </a>
        )}
      </div>
    </article>
  );
}
