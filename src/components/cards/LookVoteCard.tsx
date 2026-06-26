import { useState } from 'react';
import type { LookVote } from '../../data/mockContent';
import { FavoriteButton } from '../buttons/FavoriteButton';
import '../../styles/components.css';

export function LookVoteCard({ look }: { look: LookVote }) {
  const [liked, setLiked] = useState(Boolean(look.liked));

  return (
    <article
      className={`look-vote-card look-vote-card--${look.imageTone}`}
      role="img"
      aria-label={look.imageAlt}
    >
      {look.imageSrc ? <img src={look.imageSrc} alt={look.imageAlt} /> : null}
      <FavoriteButton pressed={liked} label={`Dar like a ${look.imageAlt}`} onClick={() => setLiked((value) => !value)} />
    </article>
  );
}
