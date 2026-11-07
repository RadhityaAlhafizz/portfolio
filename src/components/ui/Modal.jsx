import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useLockBodyScroll } from '../../hooks/useLockBodyScroll';
import { Icon } from './Icons';

/**
 * Reusable Accessible Modal Shell (Tema Gelap)
 * Menggunakan React Portal agar selalu ter-render tepat di tengah viewport layar
 * dan terhindar dari batas CSS transform/overflow container pembungkusnya.
 */
export default function Modal({
  isOpen,
  onClose,
  title,
  subtitle,
  children,
  footer,
  maxWidth = 'max-w-2xl',
}) {
  useLockBodyScroll(isOpen);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const modalContent = (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className={`relative bg-zinc-900 rounded-xl border border-zinc-800 w-full ${maxWidth} max-h-[85vh] flex flex-col shadow-2xl text-zinc-100 my-auto`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Modal - Sticky di atas */}
        <div className="flex items-start justify-between gap-4 p-5 sm:p-6 border-b border-zinc-800 bg-zinc-900 rounded-t-xl shrink-0">
          <div>
            {subtitle && <div className="mb-2">{subtitle}</div>}
            {title && (
              <h2 className="text-xl sm:text-2xl font-bold text-zinc-100 tracking-tight">
                {title}
              </h2>
            )}
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-md text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 transition-colors cursor-pointer"
            aria-label="Tutup modal"
          >
            <Icon.Close className="w-5 h-5" />
          </button>
        </div>

        {/* Konten Utama - Scrollable jika teks panjang */}
        <div className="overflow-y-auto p-5 sm:p-6 flex-1">
          {children}
        </div>

        {/* Footer - Tetap terlihat di bawah */}
        {footer && (
          <div className="p-5 sm:p-6 pt-4 border-t border-zinc-800 bg-zinc-900/60 rounded-b-xl shrink-0">
            {footer}
          </div>
        )}
      </div>
    </div>
  );

  return typeof document !== 'undefined'
    ? createPortal(modalContent, document.body)
    : null;
}
