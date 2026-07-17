import { useState } from 'react';
import type { LookVote } from '../../data/mockContent';
import { stableLikeCount } from '../../data/engagementMetrics';
import { displayCount, readEngagementToggle, writeEngagementToggle } from '../../utils/engagementState';
import { isVogueUserLoggedIn } from '../../utils/authState';
import { FavoriteButton } from '../buttons/FavoriteButton';
import '../../styles/components.css';

type LookVoteCardProps = {
  look: LookVote;
  selected?: boolean;
  showResults?: boolean;
  percentage?: number;
  votes?: number;
  onVote?: (id: string) => void;
};

export function LookVoteCard({ look, selected = false, showResults = false, percentage = 0, votes, onVote }: LookVoteCardProps) {
  const baseLikes = look.likesCount ?? stableLikeCount(look.id);
  const [liked, setLiked] = useState(() =>
    onVote ? Boolean(selected) : Boolean(look.liked || (isVogueUserLoggedIn() && readEngagementToggle('like', look.id))),
  );
  const pressed = onVote ? selected : liked;
  const displayLikes = onVote && votes !== undefined ? votes : baseLikes + (pressed && !look.liked ? 1 : 0);

  const toggleLike = () => {
    if (onVote) {
      onVote(look.id);
      return;
    }

    setLiked((value) => {
      const next = !value;
      writeEngagementToggle('like', look.id, next);
      return next;
    });
  };

  return (
    <article
      className={`look-vote-card look-vote-card--${look.imageTone}${selected ? ' is-selected' : ''}${showResults ? ' has-results' : ''}`}
      role="img"
      aria-label={look.imageAlt}
    >
      {look.imageSrc ? <img src={look.imageSrc} alt={look.imageAlt} /> : null}
      <FavoriteButton
        pressed={pressed}
        count={displayCount(displayLikes)}
        label={`Dar me gusta a ${look.imageAlt}`}
        onClick={toggleLike}
      />
      {showResults ? (
        <div className="look-vote-card__results" aria-label={`${percentage}% elegido por la comunidad`}>
          <span>Elegido por la comunidad</span>
          <small>{percentage}%</small>
          <i>
            <b style={{ width: `${percentage}%` }} />
          </i>
        </div>
      ) : null}
    </article>
  );
}
