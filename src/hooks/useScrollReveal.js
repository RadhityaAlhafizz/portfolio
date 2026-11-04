import { useEffect, useRef, useState } from 'react';

/**
 * Custom Hook: useScrollReveal
 * Memanfaatkan browser API `IntersectionObserver` bawaan untuk mendeteksi saat elemen
 * masuk ke dalam viewport layar pengguna.
 * 
 * Fitur:
 * - One-shot execution: setelah elemen terlihat, observer dihentikan untuk menghemat memori & CPU.
 * - Aksesibilitas: Menghormati pengaturan OS pengguna `prefers-reduced-motion`.
 * - Performa: Berjalan di level native browser tanpa library berat luar.
 * 
 * @param {Object} options
 * @param {number} options.threshold - Rasio elemen yang harus terlihat (0 - 1), default 0.15
 * @param {string} options.rootMargin - Margin offset sebelum trigger, default '-20px'
 * @returns {[React.RefObject, boolean]}
 */
export function useScrollReveal({
  threshold = 0.15,
  rootMargin = '0px 0px -40px 0px',
} = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Fallback jika browser lawas tidak mendukung IntersectionObserver
    if (!('IntersectionObserver' in window)) {
      setIsVisible(true);
      return;
    }

    // Aksesibilitas: Jika pengguna mematikan animasi di pengaturan sistem operasi
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element); // Berhenti mengamati setelah muncul pertama kali
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [threshold, rootMargin]);

  return [ref, isVisible];
}

