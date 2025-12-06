import { useState, useCallback } from 'react';

interface ToastMessage {
  id: number;
  text: string;
  visible: boolean;
}

export function useClipboard() {
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const copyToClipboard = useCallback(async (text: string, successMessage?: string) => {
    try {
      await navigator.clipboard.writeText(text);
      const id = Date.now();
      const message = successMessage || 'Copiado!';

      setToasts(prev => [...prev, { id, text: message, visible: true }]);

      setTimeout(() => {
        setToasts(prev => prev.map(t => (t.id === id ? { ...t, visible: false } : t)));
      }, 2000);

      setTimeout(() => {
        setToasts(prev => prev.filter(t => t.id !== id));
      }, 2300);

      return true;
    } catch {
      return false;
    }
  }, []);

  return { copyToClipboard, toasts };
}
