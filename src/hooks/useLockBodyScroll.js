import { useEffect } from 'react';

/**
 * Custom Hook: useLockBodyScroll
 * Mencegah halaman utama bergulir (scroll) di belakang saat modal atau popup dibuka.
 * Mengembalikan overflow saat komponen dilepas (unmounted) atau isLocked bernilai false.
 * 
 * @param {boolean} isLocked - Apakah scroll saat ini harus dikunci
 */
export function useLockBodyScroll(isLocked = true) {
  useEffect(() => {
    if (!isLocked) return;

    // Simpan style overflow awal sebelum diubah
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isLocked]);
}

