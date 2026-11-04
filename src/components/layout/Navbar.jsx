import { useState, useEffect } from 'react';
import { NAV_LINKS } from '../../data/navigation';
import { Icon } from '../ui/Icons';
import Container from '../ui/Container';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => setIsMobileMenuOpen(false);
  const showSolid = isScrolled || isMobileMenuOpen;

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 border-b ${showSolid
        ? 'bg-zinc-950/90 backdrop-blur-md border-zinc-800/80'
        : 'bg-transparent border-transparent'
        }`}
    >
      <Container>
        <div className="flex items-center justify-end md:justify-center h-16">

          {/* Menu Navigasi Desktop (di tengah) */}
          <nav className="hidden md:flex items-center space-x-1" aria-label="Navigasi Utama">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-1.5 text-sm font-medium text-zinc-300 hover:text-zinc-100 hover:bg-orange-600/60 rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Tombol Menu Mobile */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md text-zinc-300 hover:text-zinc-100 hover:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-orange-500"
              aria-label={isMobileMenuOpen ? 'Tutup menu' : 'Buka menu'}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <Icon.Close /> : <Icon.Menu />}
            </button>
          </div>

        </div>
      </Container>

      {/* Menu Panel Mobile */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-zinc-800 bg-zinc-950 px-4 pt-2 pb-4 space-y-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleLinkClick}
              className="block px-3 py-2 rounded-md text-base font-medium text-zinc-300 hover:text-zinc-100 hover:bg-zinc-900 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}