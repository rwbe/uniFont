import { useState } from 'react';
import { Header } from './components/Header';
import { StyleFilter, type Category } from './components/StyleFilter';
import { GlyphCard } from './components/GlyphCard';
import { Toast } from './components/Toast';
import { EmptyState } from './components/EmptyState';
import { useTextTransform } from './hooks/useTextTransform';
import { useClipboard } from './hooks/useClipboard';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [activeFilter, setActiveFilter] = useState<Category>('all');
  const { allTransformations, hasInput } = useTextTransform(inputValue);
  const { copyToClipboard, toasts } = useClipboard();

  const filteredTransformations =
    activeFilter === 'all'
      ? allTransformations
      : allTransformations.filter(t => t.style.category === activeFilter);

  const handleCopy = (text: string, message: string) => {
    copyToClipboard(text, message);
  };

  return (
    <div className="min-h-screen py-6 px-4">
      <div className="max-w-lg mx-auto">
        <Header inputValue={inputValue} onInputChange={setInputValue} />

        {hasInput ? (
          <>
            <div className="flex items-center justify-between mb-3">
              <StyleFilter activeFilter={activeFilter} onFilterChange={setActiveFilter} />
              <span className="text-neutral-600 text-xs">{filteredTransformations.length}</span>
            </div>

            <div className="border border-neutral-800 rounded-lg divide-y divide-neutral-800/50 max-h-[65vh] overflow-y-auto">
              {filteredTransformations.map(({ style, transformed }) => (
                <GlyphCard
                  key={style.id}
                  style={style}
                  transformed={transformed}
                  onCopy={handleCopy}
                />
              ))}
            </div>
          </>
        ) : (
          <EmptyState />
        )}
      </div>

      <Toast toasts={toasts} />
    </div>
  );
}

export default App;
