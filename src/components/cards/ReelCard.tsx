import { Play } from 'lucide-react';
import type { ReelItem } from '../../data/mockContent';
import '../../styles/components.css';

export function ReelCard({ reel }: { reel: ReelItem }) {
  const hasMedia = Boolean(reel.videoSrc || reel.imageSrc);

  return (
    <article className={`reel-card reel-card--${reel.imageTone}`}>
      <div className={`reel-card__media${hasMedia ? ' reel-card__media--asset' : ''}`} aria-label={reel.imageAlt}>
        {reel.videoSrc ? (
          <video src={reel.videoSrc} autoPlay muted loop playsInline preload="metadata" aria-label={reel.imageAlt} />
        ) : reel.imageSrc ? (
          <img src={reel.imageSrc} alt={reel.imageAlt} />
        ) : null}
        <span className="reel-card__play" aria-hidden="true">
          <Play size={30} fill="currentColor" strokeWidth={1.5} />
        </span>
      </div>
      <h3 className="reel-card__title">{reel.title}</h3>
    </article>
  );
}
