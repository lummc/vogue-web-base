import { useEffect, useMemo, useState } from 'react';
import type { LookVote } from '../../data/mockContent';
import { isVogueUserLoggedIn, subscribeToVogueAuthChange } from '../../utils/authState';
import { routePath } from '../../utils/routes';
import { LookVoteCard } from '../cards/LookVoteCard';
import '../../styles/components.css';

type VogueChoiceSectionProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
  looks: LookVote[];
};

const VOGUE_CHOICE_VOTE_KEY = 'vogue-choice-met-gala-vote';
const baseVotes = [2785, 5802, 8093, 4210, 3190];

export function VogueChoiceSection({ eyebrow, title, subtitle, looks }: VogueChoiceSectionProps) {
  const [loggedIn, setLoggedIn] = useState(isVogueUserLoggedIn);
  const [selectedId, setSelectedId] = useState(() => window.localStorage.getItem(VOGUE_CHOICE_VOTE_KEY) || '');

  useEffect(
    () =>
      subscribeToVogueAuthChange(() => {
        setLoggedIn(isVogueUserLoggedIn());
        setSelectedId(window.localStorage.getItem(VOGUE_CHOICE_VOTE_KEY) || '');
      }),
    [],
  );

  const votes = useMemo(() => {
    const values = looks.map((_, index) => baseVotes[index] ?? 2100);
    const selectedIndex = looks.findIndex((look) => look.id === selectedId);

    if (selectedIndex >= 0) {
      values[selectedIndex] += 1;
    }

    return values;
  }, [looks, selectedId]);

  const totalVotes = votes.reduce((sum, value) => sum + value, 0);
  const showResults = loggedIn;

  const voteForLook = (id: string) => {
    setSelectedId((currentId) => {
      const nextId = currentId === id ? '' : id;

      if (nextId) {
        window.localStorage.setItem(VOGUE_CHOICE_VOTE_KEY, nextId);
      } else {
        window.localStorage.removeItem(VOGUE_CHOICE_VOTE_KEY);
      }

      return nextId;
    });
  };

  return (
    <section className={`vogue-choice${loggedIn ? ' is-logged-in' : ' is-logged-out'}`}>
      <hr className="vogue-choice__rule" />
      <div className="vogue-choice__copy">
        <p className="vogue-choice__eyebrow">{eyebrow}</p>
        <h2 className="vogue-choice__title">{title}</h2>
        <p className="vogue-choice__subtitle">{subtitle}</p>
      </div>
      {!loggedIn ? (
        <div className="vogue-choice__login-cta">
          <p>Para votar</p>
          <a href={routePath('/registro')}>Inicia sesion</a>
        </div>
      ) : null}
      <div className="vogue-choice__viewport" aria-label="Looks para votar">
        <div className="vogue-choice__track">
          {looks.map((look, index) => (
            <LookVoteCard
              key={look.id}
              look={look}
              selected={look.id === selectedId && loggedIn}
              showResults={showResults}
              votes={votes[index]}
              percentage={totalVotes > 0 ? Math.round((votes[index] / totalVotes) * 100) : 0}
              onVote={voteForLook}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
