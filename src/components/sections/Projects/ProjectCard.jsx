import Badge from '../../ui/Badge';
import { Icon } from '../../ui/Icons';

/**
 * Lengkungan terbalik (inverse corner) berukuran 14px.
 * Bentuk: area di pojok kiri-bawah yang dipotong busur berpusat di pojok kanan-atas.
 * Satu bentuk ini dipakai untuk KEDUA sisi tab, tanpa rotasi, karena keduanya
 * membulatkan sudut "cembung" gambar yang sama arahnya.
 */
function Fillet({ className = '' }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      className={`pointer-events-none absolute h-3.5 w-3.5 text-zinc-900 ${className}`}
      fill="currentColor"
    >
      <path d="M0 0V20H20A20 20 0 0 1 0 0Z" />
    </svg>
  );
}

/**
 * Komponen Kartu Projek: Cutout Card Style (inspirasi Cult UI)
 *
 * Aturan agar rapi:
 * - Warna kartu, tab, dan lengkungan HARUS sama dan solid (bg-zinc-900 / text-zinc-900),
 *   tanpa transparansi atau blur, supaya tidak ada sambungan yang terlihat.
 * - Radius tab (14px) = ukuran lengkungan (14px). Tinggi tab (36px) >= 2 x radius.
 * - Sudut kiri-bawah tab otomatis terpotong radius gambar (overflow-hidden) dan
 *   menyatu dengan warna kartu.
 */
export default function ProjectCard({ project, onOpenDetail }) {
  return (
    <article className="group relative flex flex-col justify-between overflow-hidden rounded-[26px] border border-zinc-800/90 bg-zinc-900 p-3 sm:p-3.5 shadow-xl transition-all duration-300 hover:border-zinc-700 hover:shadow-2xl hover:-translate-y-1">

      {/* 1. Bagian Media / Gambar dengan Cutout Tab */}
      <div className="relative h-48 sm:h-56 w-full overflow-hidden rounded-[20px] bg-zinc-950">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />
        ) : (
          <div className="h-full w-full bg-gradient-to-br from-zinc-800 to-zinc-950 flex items-center justify-center text-zinc-600">
            <Icon.ExternalLink className="w-8 h-8" />
          </div>
        )}

        {/* Gradien overlay halus */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

        {/* Tab kategori (cutout) */}
        <div className="absolute bottom-0 left-0 flex h-9 items-center rounded-tr-[14px] bg-zinc-900 px-4">
          <span className="text-[11px] font-bold uppercase tracking-widest text-orange-400">
            {project.category}
          </span>

          {/* Lengkungan di atas tab (menyambung ke tepi kiri gambar) */}
          <Fillet className="left-0 bottom-full translate-y-px" />
          {/* Lengkungan di kanan tab (menyambung ke tepi bawah gambar) */}
          <Fillet className="left-full bottom-0 -translate-x-px" />
        </div>

        {/* Badge status Confidential jika ada */}
        {project.isConfidential && (
          <div className="absolute top-3 right-3 rounded-full bg-amber-500/20 border border-amber-500/30 px-2.5 py-0.5 text-[10px] font-semibold text-amber-300 backdrop-blur-md">
            Internal
          </div>
        )}
      </div>

      {/* 2. Bagian Konten Kartu */}
      <div className="px-1.5 pt-4 pb-1 sm:p-3 flex flex-col flex-1 justify-between">
        <div>
          {/* Judul Projek */}
          <h3 className="text-lg sm:text-xl font-bold tracking-tight text-zinc-100 group-hover:text-orange-400 transition-colors line-clamp-1">
            {project.title}
          </h3>

          {/* Deskripsi Ringkas */}
          <p className="mt-2 text-xs sm:text-sm text-zinc-400 leading-relaxed line-clamp-2">
            {project.shortDescription}
          </p>

          {/* Tech Stack Pills */}
          <div className="mt-3.5 flex flex-wrap gap-1.5">
            {project.techStack.map((tech) => (
              <Badge key={tech} variant="mono" size="sm">
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* 3. Baris Aksi Bawah */}
        <div className="mt-5 pt-3.5 border-t border-zinc-800/80 flex items-center justify-between gap-2">
          {/* Tautan GitHub (kiri), hanya tampil jika projek punya repo */}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 min-w-0 text-xs font-medium text-zinc-300 hover:text-orange-400 transition-colors"
              title="Lihat Kode di GitHub"
              aria-label={`GitHub repo untuk ${project.title}`}
            >
              <Icon.GitHub className="w-4 h-4 shrink-0" />
              <span className="truncate">GitHub</span>
            </a>
          )}

          {/* Tombol Baca Selengkapnya (kanan) */}
          <div className="ml-auto flex items-center shrink-0">
            <button
              type="button"
              onClick={() => onOpenDetail(project)}
              className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-full bg-zinc-100 text-zinc-950 hover:bg-orange-500 hover:text-zinc-950 transition-all shadow-sm cursor-pointer"
            >
              <span>Baca Selengkapnya</span>
              <Icon.ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </div>

      </div>
    </article>
  );
}