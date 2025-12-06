export function EmptyState() {
  return (
    <div className="py-24 flex flex-col items-center text-center">
      <h3 className="text-neutral-700 font-medium mb-1">Nenhum texto ainda</h3>

      <p className="text-neutral-500 text-sm max-w-xs">
        Digite algo no campo acima para gerar o texto estilizado.
      </p>
    </div>
  );
}
