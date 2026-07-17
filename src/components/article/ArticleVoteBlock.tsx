import { Heart } from 'lucide-react';
import { useState } from 'react';
import type { ArticleContent } from '../../data/articleContent';
import { requireVogueAuth } from '../../utils/authInteraction';
import { isVogueUserLoggedIn } from '../../utils/authState';
import '../../styles/components.css';

const getVoteStorageKey = (question: string) => `vogue-article-vote-${question.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;

function getResultPercents(vote: ArticleContent['vote'], selected: string | null) {
  if (!selected) {
    return vote.options.map((option) => option.percent);
  }

  const rawValues = vote.options.map((option) => {
    const baseVotes = option.percent + (option.label === selected ? 1 : 0);
    return (baseVotes / 101) * 100;
  });
  const floored = rawValues.map(Math.floor);
  let remainder = 100 - floored.reduce((sum, value) => sum + value, 0);
  const rankedRemainders = rawValues
    .map((value, index) => ({ index, remainder: value - Math.floor(value) }))
    .sort((a, b) => b.remainder - a.remainder);

  for (let i = 0; i < rankedRemainders.length && remainder > 0; i += 1) {
    floored[rankedRemainders[i].index] += 1;
    remainder -= 1;
  }

  return floored;
}

export function ArticleVoteBlock({ vote }: { vote: ArticleContent['vote'] }) {
  const storageKey = getVoteStorageKey(vote.question);
  const [selected, setSelected] = useState<string | null>(() => (isVogueUserLoggedIn() ? window.localStorage.getItem(storageKey) : null));
  const resultPercents = getResultPercents(vote, selected);

  const chooseOption = (label: string) => {
    requireVogueAuth(() => {
      const nextSelection = selected === label ? null : label;
      setSelected(nextSelection);

      if (nextSelection) {
        window.localStorage.setItem(storageKey, nextSelection);
      } else {
        window.localStorage.removeItem(storageKey);
      }
    });
  };

  return (
    <section className="article-vote-block" data-voted={Boolean(selected)} aria-label={vote.question}>
      <h2>{vote.question}</h2>
      <div className="article-vote-block__options">
        {vote.options.map((option, index) => {
          const isSelected = selected === option.label;
          const percent = resultPercents[index];

          return (
            <button
              className="article-vote-option"
              data-selected={isSelected}
              data-voted={Boolean(selected)}
              key={option.label}
              onClick={() => chooseOption(option.label)}
              type="button"
              aria-pressed={isSelected}
              aria-label={`${selected ? 'Cambiar voto a' : 'Votar por'} ${option.label}`}
            >
              <span className="article-vote-option__row">
                <span>{option.label}</span>
                {selected ? <strong>{percent}%</strong> : null}
                <Heart className="article-vote-option__heart" size={34} strokeWidth={2.2} fill={isSelected ? 'currentColor' : 'none'} />
              </span>
              <span className="article-vote-option__bar">
                <span style={{ width: selected ? `${percent}%` : '100%' }} />
              </span>
            </button>
          );
        })}
      </div>
    </section>
  );
}
