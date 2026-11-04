import { useState, useCallback } from 'react';

/**
 * Custom Hook: useCopyToClipboard
 * Memisahkan logika browser API clipboard dari komponen UI.
 * Memberikan feedback `isCopied` yang otomatis kembali ke false setelah durasi tertentu.
 * 
 * @param {number} resetInterval - Durasi status tersalin (ms), default 2500ms
 * @returns {{ isCopied: boolean, copy: (text: string) => Promise<boolean> }}
 */
export function useCopyToClipboard(resetInterval = 2500) {
  const [isCopied, setIsCopied] = useState(false);

  const copy = useCallback(
    async (text) => {
      if (!navigator?.clipboard) {
        console.warn('Clipboard API tidak didukung pada browser ini.');
        return false;
      }

      try {
        await navigator.clipboard.writeText(text);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), resetInterval);
        return true;
      } catch (error) {
        console.error('Gagal menyalin teks:', error);
        setIsCopied(false);
        return false;
      }
    },
    [resetInterval]
  );

  return { isCopied, copy };
}

