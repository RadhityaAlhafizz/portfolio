/**
 * Reusable Badge Component (Tema Gelap)
 * 
 * @param {'default' | 'mono' | 'accent' | 'emerald' | 'amber'} variant
 * @param {'sm' | 'md'} size
 */
export default function Badge({
  children,
  variant = 'default',
  size = 'md',
  className = '',
}) {
  const sizeClasses = {
    sm: 'text-[11px] px-2 py-0.5',
    md: 'text-xs px-2.5 py-1',
  };

  const variantClasses = {
    default: 'bg-zinc-800/80 text-zinc-300 border-zinc-700/60',
    mono: 'bg-zinc-900 text-zinc-300 border-zinc-800 font-mono',
    accent: 'bg-orange-950/50 text-orange-400 border-orange-800/60',
    emerald: 'bg-emerald-950/40 text-emerald-400 border-emerald-800/60',
    amber: 'bg-amber-950/40 text-amber-300 border-amber-800/60',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded border font-medium ${sizeClasses[size] || sizeClasses.md} ${variantClasses[variant] || variantClasses.default} ${className}`}
    >
      {children}
    </span>
  );
}
