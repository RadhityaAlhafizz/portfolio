import Container from './Container';
import Reveal from './Reveal';

/**
 * Reusable Section Wrapper
 * Menstandarkan padding vertikal, garis pemisah border-b, warna latar antarbagian,
 * dan animasi scroll reveal otomatis.
 * 
 * @param {'white' | 'muted'} variant - Gaya latar belakang
 * @param {boolean} animate - Apakah menyertakan animasi scroll reveal (default: true)
 */
export default function Section({
  id,
  children,
  variant = 'white',
  animate = true,
  className = '',
}) {
  const bgClasses = {
    white: 'bg-zinc-950',
    muted: 'bg-zinc-900/40',
  };

  const content = animate ? <Reveal effect="up">{children}</Reveal> : children;

  return (
    <section
      id={id}
      className={`py-16 md:py-20 border-b border-zinc-800/80 ${bgClasses[variant] || bgClasses.white} ${className}`}
    >
      <Container>{content}</Container>
    </section>
  );
}
