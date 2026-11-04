import { useEffect } from 'react';
import { useLockBodyScroll } from '../../hooks/useLockBodyScroll';
import { Icon } from './Icons';

/**
 * Reusable Accessible Modal Shell (Tema Gelap)
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

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className={`bg-zinc-900 rounded-lg border border-zinc-800 w-full ${maxWidth} max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl text-zinc-100`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Modal */}
        <div className="flex items-start justify-between gap-4 pb-4 border-b border-zinc-800">
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
            className="p-1.5 rounded-md text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 transition-colors"
            aria-label="Tutup modal"
          >
            <Icon.Close className="w-5 h-5" />
          </button>
        </div>

        {/* Konten Utama */}
        <div className="mt-5">{children}</div>

        {/* Footer */}
        {footer && (
          <div className="mt-8 pt-4 border-t border-zinc-800">{footer}</div>
        )}
      </div>
    </div>
  );
}
