import { useState } from 'react';
import { Bookmark, Heart, Share2 } from 'lucide-react';
import type { ArticleContent } from '../../data/articleContent';
import '../../styles/components.css';

export function ArticleHero({ hero }: { hero: ArticleContent['hero'] }) {
  const [saved, setSaved] = useState(false);
  const [liked, setLiked] = useState(false);
  const [copied, setCopied] = useState(false);

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
          className="article-action-button"
          aria-label="Guardar articulo"
          aria-pressed={saved}
          data-active={saved}
          onClick={() => setSaved((value) => !value)}
        >
          <Bookmark size={34} strokeWidth={1.6} fill={saved ? 'currentColor' : 'none'} />
        </button>
        <button
          type="button"
          className="article-action-button"
          aria-label="Me gusta"
          aria-pressed={liked}
          data-active={liked}
          onClick={() => setLiked((value) => !value)}
        >
          <Heart size={34} strokeWidth={1.6} fill={liked ? 'currentColor' : 'none'} />
        </button>
        <button type="button" className="article-action-button" aria-label="Compartir" data-active={copied} onClick={shareArticle}>
          <Share2 size={34} strokeWidth={1.6} />
          {copied ? <span className="article-action-button__label">Copiado</span> : null}
        </button>
      </div>
    </section>
  );
}
