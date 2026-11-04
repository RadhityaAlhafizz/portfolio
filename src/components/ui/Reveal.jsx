import { useScrollReveal } from '../../hooks/useScrollReveal';

/**
 * Reusable Reveal Component
 * Membungkus elemen dengan animasi scroll reveal (fade-in + slide-up ringan)
 * yang halus, profesional, dan hemat performa sesuai PRD Bagian 10.
 * 
 * @param {'up' | 'down' | 'fade'} effect - Jenis pergerakan (default: 'up')
 * @param {number} delay - Waktu tunda dalam milidetik untuk efek cascading/staggered (default: 0)
 * @param {string} className - Kelas tambahan
 */
export default function Reveal({
  children,
  effect = 'up',
  delay = 0,
  className = '',
}) {
  const [ref, isVisible] = useScrollReveal();

  const getTransitionClasses = () => {
    if (isVisible) {
      return 'opacity-100 translate-y-0';
    }

    switch (effect) {
      case 'up':
        return 'opacity-0 translate-y-6';
      case 'down':
        return 'opacity-0 -translate-y-6';
      case 'fade':
      default:
        return 'opacity-0';
    }
  };

  return (
    <div
      ref={ref}
      style={{
        transitionDuration: '700ms',
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
      }}
      className={`transition-all ${getTransitionClasses()} ${className}`}
    >
      {children}
    </div>
  );
}

