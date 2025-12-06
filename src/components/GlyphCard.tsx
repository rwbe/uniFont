import type { StyleDefinition } from '../data/unicodeMap';

interface GlyphCardProps {
  style: StyleDefinition;
  transformed: string;
  onCopy: (text: string, styleName: string) => void;
}

export function GlyphCard({ style, transformed, onCopy }: GlyphCardProps) {
  const handleClick = () => {
    onCopy(transformed, `${style.name} copied`);
  };

  return (
    <div onClick={handleClick} className="style-item fade-in group">
      <div className="flex items-center justify-between gap-3">
        <span className="text-base text-neutral-100 break-all leading-relaxed flex-1">
          {transformed}
        </span>
        <div className="flex items-center gap-2 shrink-0">
          <span className="text-xs text-neutral-500 group-hover:text-neutral-400 transition-colors">
            {style.name}
          </span>
          <svg
            className="w-3.5 h-3.5 text-neutral-600 group-hover:text-neutral-400 transition-colors"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
