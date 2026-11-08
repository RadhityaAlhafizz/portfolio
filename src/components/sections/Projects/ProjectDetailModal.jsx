import Modal from '../../ui/Modal';
import Badge from '../../ui/Badge';
import Button from '../../ui/Button';
import { Icon } from '../../ui/Icons';

/**
 * Komponen Modal Detail Projek (ProjectDetailModal - Tema Gelap)
 */
export default function ProjectDetailModal({ project, onClose }) {
  if (!project) return null;

  const modalSubtitle = (
    <div className="flex items-center gap-2">
      <Badge variant="default" size="sm">
        {project.category}
      </Badge>
      {project.isConfidential && (
        <Badge variant="amber" size="sm">
          Internal / Proyek Magang
        </Badge>
      )}
    </div>
  );

  const modalFooter = (
    <div className="flex items-center justify-between gap-3">
      {project.githubUrl ? (
        <Button
          href={project.githubUrl}
          variant="primary"
          size="sm"
          icon={<Icon.GitHub className="w-4 h-4 text-zinc-950" />}
        >
          Lihat Kode di GitHub
        </Button>
      ) : (
        <span className="text-xs text-zinc-500 italic">
          Repositori internal / lab simulasi
        </span>
      )}

      <Button variant="outline" size="sm" onClick={onClose}>
        Tutup
      </Button>
    </div>
  );

  return (
    <Modal
      isOpen={Boolean(project)}
      onClose={onClose}
      title={project.title}
      subtitle={modalSubtitle}
      footer={modalFooter}
    >
      <div className="space-y-5 text-sm sm:text-base text-zinc-300">
        
        {/* Gambar Pratinjau Projek */}
        {project.image && (
          <div className="relative h-48 sm:h-60 w-full overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950">
            <img
              src={project.image}
              alt={project.title}
              className="h-full w-full object-cover"
            />
          </div>
        )}

        {/* Deskripsi Lengkap */}
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-1">
            Tentang Projek
          </h3>
          <p className="leading-relaxed text-sm sm:text-base text-zinc-300">
            {project.fullDescription}
          </p>
        </div>

        {/* Peran & Kontribusi */}
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-1">
            Peran &amp; Tanggung Jawab
          </h3>
          <p className="leading-relaxed bg-zinc-950 border border-zinc-800 rounded p-3 text-xs sm:text-sm text-zinc-200">
            {project.role}
          </p>
        </div>

        {/* Sorotan Teknis */}
        {project.highlights && project.highlights.length > 0 && (
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-2">
              Poin Teknis &amp; Implementasi Utama
            </h3>
            <ul className="space-y-1.5 list-disc list-inside text-xs sm:text-sm text-zinc-300">
              {project.highlights.map((point, index) => (
                <li key={index} className="leading-relaxed">
                  {point}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Tech Stack */}
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-2">
            Teknologi yang Digunakan
          </h3>
          <div className="flex flex-wrap gap-1.5">
            {project.techStack.map((tech) => (
              <Badge key={tech} variant="mono" size="md">
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* Catatan Kerahasiaan */}
        {project.confidentialNote && (
          <div className="p-3 bg-amber-950/40 border border-amber-800/60 rounded text-xs text-amber-300 leading-relaxed">
            <strong>Catatan:</strong> {project.confidentialNote}
          </div>
        )}

      </div>
    </Modal>
  );
}
