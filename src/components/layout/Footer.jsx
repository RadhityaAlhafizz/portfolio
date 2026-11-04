import { PROFILE } from '../../data/profile';
import { NAV_LINKS } from '../../data/navigation';
import { Icon } from '../ui/Icons';
import Container from '../ui/Container';

/**
 * Komponen Layout: Footer (Tema Gelap)
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-800/80 bg-zinc-950 py-8 text-zinc-500 text-xs">
      <Container className="flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Info Hak Cipta */}
        <div>
          <p className="text-zinc-300 font-medium">
            &copy; {currentYear} {PROFILE.name}. Seluruh hak cipta dilindungi.
          </p>
          <p className="mt-0.5 text-zinc-500">
            Dibangun dengan arsitektur React modular &amp; Tailwind CSS.
          </p>
        </div>

        {/* Navigasi Footer & Tombol Ke Atas */}
        <div className="flex items-center gap-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-zinc-400 hover:text-zinc-100 transition-colors"
            >
              {link.label}
            </a>
          ))}
          
          <a
            href="#"
            className="inline-flex items-center gap-1 text-zinc-300 hover:text-orange-400 font-medium ml-2 transition-colors"
            title="Kembali ke atas halaman"
          >
            <span>Ke Atas</span>
            <Icon.ArrowUp className="w-3.5 h-3.5" />
          </a>
        </div>

      </Container>
    </footer>
  );
}
