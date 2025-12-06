interface ToastProps {
  toasts: Array<{ id: number; text: string; visible: boolean }>;
}

export function Toast({ toasts }: ToastProps) {
  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 flex flex-col gap-2">
      {toasts.map(toast => (
        <div
          key={toast.id}
          className={`px-3 py-2 bg-neutral-800 border border-neutral-700 text-neutral-200 text-xs font-medium rounded-md
                     ${toast.visible ? 'toast-enter' : 'toast-exit'}`}
        >
          {toast.text}
        </div>
      ))}
    </div>
  );
}
