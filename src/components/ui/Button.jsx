/**
 * Reusable Polymorphic Button Component (Tema Gelap + Aksen Oranye)
 * 
 * @param {'primary' | 'outline' | 'accent' | 'ghost'} variant
 * @param {'sm' | 'md' | 'lg'} size
 */
export default function Button({
  children,
  href,
  onClick,
  type = 'button',
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'left',
  target,
  rel,
  className = '',
  ...props
}) {
  const baseClasses =
    'inline-flex items-center justify-center gap-2 rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 disabled:opacity-50 disabled:pointer-events-none';

  const sizeClasses = {
    sm: 'text-xs px-3 py-1.5',
    md: 'text-xs sm:text-sm px-4 py-2.5',
    lg: 'text-sm sm:text-base px-5 py-2.5',
  };

  const variantClasses = {
    primary: 'bg-orange-500 text-zinc-950 font-semibold hover:bg-orange-400 shadow-sm',
    outline: 'border border-zinc-700/80 text-zinc-200 hover:bg-zinc-800/80 hover:border-zinc-600',
    accent: 'bg-orange-500 text-zinc-950 font-semibold hover:bg-orange-400 shadow-sm',
    ghost: 'text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/60',
  };

  const combinedClasses = `${baseClasses} ${sizeClasses[size] || sizeClasses.md} ${variantClasses[variant] || variantClasses.primary} ${className}`;

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="inline-flex shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="inline-flex shrink-0">{icon}</span>}
    </>
  );

  if (href) {
    const isExternal = href.startsWith('http') || target === '_blank';
    return (
      <a
        href={href}
        target={target || (isExternal ? '_blank' : undefined)}
        rel={rel || (isExternal ? 'noopener noreferrer' : undefined)}
        className={combinedClasses}
        onClick={onClick}
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={combinedClasses}
      onClick={onClick}
      {...props}
    >
      {content}
    </button>
  );
}
