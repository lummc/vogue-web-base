import { useEffect, useRef, useState } from 'react';
import { Heart } from 'lucide-react';
import { requireVogueAuth } from '../../utils/authInteraction';
import '../../styles/components.css';

type FavoriteButtonProps = {
  pressed?: boolean;
  label: string;
  onClick?: () => void;
};

export function FavoriteButton({ pressed = false, label, onClick }: FavoriteButtonProps) {
  const [justLiked, setJustLiked] = useState(false);
  const animationTimer = useRef<number | null>(null);

  useEffect(
    () => () => {
      if (animationTimer.current !== null) {
        window.clearTimeout(animationTimer.current);
      }
    },
    [],
  );

  const handleClick = () => {
    if (onClick) {
      requireVogueAuth(() => {
        onClick();

        if (!pressed) {
          if (animationTimer.current !== null) {
            window.clearTimeout(animationTimer.current);
          }

          setJustLiked(false);
          window.requestAnimationFrame(() => setJustLiked(true));
          animationTimer.current = window.setTimeout(() => setJustLiked(false), 420);
        }
      });
    }
  };

  return (
    <button
      className={`favorite-button${pressed ? ' is-liked' : ''}${justLiked ? ' like-pop' : ''}`}
      type="button"
      aria-label={pressed ? label.replace(/^Dar (?:like|me gusta)/i, 'Quitar me gusta') : label}
      aria-pressed={pressed}
      onClick={handleClick}
    >
      <span className="favorite-button__icon" aria-hidden="true">
        <Heart size={28} strokeWidth={1.8} fill={pressed ? 'currentColor' : 'none'} />
      </span>
      {justLiked ? (
        <span className="floating-heart" aria-hidden="true">
          <Heart size={14} strokeWidth={1.5} fill="currentColor" />
        </span>
      ) : null}
    </button>
  );
}
