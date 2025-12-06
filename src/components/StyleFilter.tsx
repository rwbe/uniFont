type Category = 'all' | 'serif' | 'sans' | 'decorative' | 'special' | 'symbols';

interface StyleFilterProps {
  activeFilter: Category;
  onFilterChange: (filter: Category) => void;
}

const filters: { id: Category; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'serif', label: 'Serif' },
  { id: 'sans', label: 'Sans' },
  { id: 'decorative', label: 'Decorative' },
  { id: 'special', label: 'Special' },
  { id: 'symbols', label: 'Symbols' },
];

export function StyleFilter({ activeFilter, onFilterChange }: StyleFilterProps) {
  return (
    <div className="flex flex-wrap gap-1.5 mb-4">
      {filters.map(filter => (
        <button
          key={filter.id}
          onClick={() => onFilterChange(filter.id)}
          className={`filter-btn ${
            activeFilter === filter.id ? 'filter-btn-active' : 'filter-btn-inactive'
          }`}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
}

export type { Category };
