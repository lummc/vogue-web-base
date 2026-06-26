import { useState } from 'react';
import type { ArticleContent } from '../../data/articleContent';
import '../../styles/components.css';

export function ArticleVoteBlock({ vote }: { vote: ArticleContent['vote'] }) {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section className="article-vote-block" aria-label={vote.question}>
      <h2>{vote.question}</h2>
      <div className="article-vote-block__options">
        {vote.options.map((option) => {
          const isSelected = selected === option.label;

          return (
            <button
              className="article-vote-option"
              data-selected={isSelected}
              data-voted={Boolean(selected)}
              key={option.label}
              onClick={() => setSelected(option.label)}
              type="button"
            >
              <span className="article-vote-option__row">
                <span>{option.label}</span>
                {selected ? <strong>{option.percent}%</strong> : null}
              </span>
              <span className="article-vote-option__bar">
                <span style={{ width: selected ? `${option.percent}%` : '72%' }} />
              </span>
            </button>
          );
        })}
      </div>
    </section>
  );
}
