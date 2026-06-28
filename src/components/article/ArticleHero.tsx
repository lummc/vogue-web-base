import { useEffect, useRef, useState } from 'react';
import { Bookmark, Heart, Share2 } from 'lucide-react';
import type { ArticleContent } from '../../data/articleContent';
import { requireVogueAuth } from '../../utils/authInteraction';
import '../../styles/components.css';

export function ArticleHero({ hero }: { hero: ArticleContent['hero'] }) {
  const [saved, setSaved] = useState(false);
  const [liked, setLiked] = useState(false);
  const [copied, setCopied] = useState(false);
  const [justSaved, setJustSaved] = useState(false);
  const [justLiked, setJustLiked] = useState(false);
  const savedTimer = useRef<number | null>(null);
  const likedTimer = useRef<number | null>(null);

  useEffect(
    () => () => {
      if (savedTimer.current !== null) window.clearTimeout(savedTimer.current);
      if (likedTimer.current !== null) window.clearTimeout(likedTimer.current);
    },
    [],
  );

  const toggleSaved = () => {
    requireVogueAuth(() => {
      if (!saved) {
        if (savedTimer.current !== null) window.clearTimeout(savedTimer.current);
        setJustSaved(false);
        window.requestAnimationFrame(() => setJustSaved(true));
        savedTimer.current = window.setTimeout(() => setJustSaved(false), 420);
      }

      setSaved(!saved);
    });
  };

  const toggleLiked = () => {
    requireVogueAuth(() => {
      if (!liked) {
        if (likedTimer.current !== null) window.clearTimeout(likedTimer.current);
        setJustLiked(false);
        window.requestAnimationFrame(() => setJustLiked(true));
        likedTimer.current = window.setTimeout(() => setJustLiked(false), 420);
      }

      setLiked(!liked);
    });
  };

  const shareArticle = async () => {
    const url = window.location.href;

    try {
      await navigator.clipboard?.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    }
  };

  return (
    <section className={`article-hero article-hero--${hero.imageTone}`} aria-label={hero.title}>
      <div className="article-hero__image" role="img" aria-label={hero.imageAlt}>
        {hero.imageSrc ? <img src={hero.imageSrc} alt={hero.imageAlt} /> : null}
      </div>
      <div className="article-hero__copy">
        <p className="article-hero__category">{hero.category}</p>
        <h1 className="article-hero__title">{hero.title}</h1>
        <p className="article-hero__subtitle">{hero.subtitle}</p>
        <p className="article-hero__author">{hero.author}</p>
        <p className="article-hero__date">{hero.date}</p>
      </div>
      <div className="article-hero__actions" aria-label="Acciones del articulo">
        <button
          type="button"
          className={`article-action-button${saved ? ' is-saved' : ''}${justSaved ? ' icon-bounce' : ''}`}
          aria-label={saved ? 'Quitar guardado' : 'Guardar artículo'}
          aria-pressed={saved}
          data-active={saved}
          onClick={toggleSaved}
        >
          <Bookmark size={34} strokeWidth={1.6} fill={saved ? 'currentColor' : 'none'} />
        </button>
        <button
          type="button"
          className={`article-action-button${liked ? ' is-liked' : ''}${justLiked ? ' like-pop' : ''}`}
          aria-label={liked ? 'Quitar me gusta' : 'Dar me gusta'}
          aria-pressed={liked}
          data-active={liked}
          onClick={toggleLiked}
        >
          <Heart size={34} strokeWidth={1.6} fill={liked ? 'currentColor' : 'none'} />
          {justLiked ? (
            <span className="floating-heart" aria-hidden="true">
              <Heart size={14} strokeWidth={1.5} fill="currentColor" />
            </span>
          ) : null}
        </button>
        <button type="button" className="article-action-button" aria-label="Compartir" data-active={copied} onClick={shareArticle}>
          <Share2 size={34} strokeWidth={1.6} />
          {copied ? <span className="article-action-button__label">Copiado</span> : null}
        </button>
      </div>
    </section>
  );
}
