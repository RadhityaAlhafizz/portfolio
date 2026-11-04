/**
 * Reusable SectionHeading Component
 * Menggabungkan subtitle kategori kecil (orange), judul utama h2 (zinc-100), dan deskripsi opsional (zinc-400).
 */
export default function SectionHeading({
  tag,
  title,
  description,
  className = 'mb-10',
}) {
  return (
    <div className={className}>
      {tag && (
        <p className="text-xs font-semibold uppercase tracking-wider text-orange-500 mb-1">
          {tag}
        </p>
      )}
      <h2 className="text-2xl sm:text-3xl font-bold text-zinc-100 tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-2 text-sm text-zinc-400 max-w-xl leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
