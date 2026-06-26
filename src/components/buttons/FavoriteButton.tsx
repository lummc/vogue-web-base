import { Heart } from 'lucide-react';
import '../../styles/components.css';

type FavoriteButtonProps = {
  pressed?: boolean;
  label: string;
  onClick?: () => void;
};

export function FavoriteButton({ pressed = false, label, onClick }: FavoriteButtonProps) {
  return (
    <button className="favorite-button" type="button" aria-label={label} aria-pressed={pressed} onClick={onClick}>
      <Heart size={28} strokeWidth={1.8} fill={pressed ? 'currentColor' : 'none'} />
    </button>
  );
}
