interface HeaderProps {
  inputValue: string;
  onInputChange: (value: string) => void;
}

export function Header({ inputValue, onInputChange }: HeaderProps) {
  return (
    <header className="mb-6">
      <div className="mb-4">
        <h1 className="text-xl font-semibold text-neutral-100 tracking-tight">UniFont</h1>
        <p className="text-xs text-neutral-500 mt-0.5">Conversor de texto Unicode</p>
      </div>

      <div className="relative">
        <input
          type="text"
          value={inputValue}
          onChange={e => onInputChange(e.target.value)}
          placeholder="Digite seu texto..."
          autoFocus
          className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 rounded-lg
                     text-neutral-100 text-sm placeholder:text-neutral-600
                     focus:outline-none focus:border-neutral-700
                     transition-colors duration-150"
        />
      </div>
    </header>
  );
}
