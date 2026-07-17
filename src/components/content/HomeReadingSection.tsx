import { Eye } from 'lucide-react';
import type { CSSProperties, ReactNode } from 'react';
import type { PromoArticle } from '../../data/mockContent';
import { PromoArticleCard } from '../cards/PromoArticleCard';
import '../../styles/components.css';

type HomeReadingSectionProps = {
  eyebrow?: string;
  title: string;
  subtitle?: ReactNode;
  articles?: PromoArticle[];
  imageCards?: Array<{ src: string; alt: string; width?: number }>;
  variant?: 'standard' | 'personalized';
};

export function HomeReadingSection({
  eyebrow,
  title,
  subtitle,
  articles = [],
  imageCards,
  variant = 'standard',
}: HomeReadingSectionProps) {
  const titleId = title.toLowerCase().replace(/\W+/g, '-');
  const imageOnly = Boolean(imageCards?.length);

  return (
    <section
      className={`home-reading-section home-reading-section--${variant}${imageOnly ? ' home-reading-section--image-strip' : ''} section-frame`}
      aria-labelledby={titleId}
    >
      {eyebrow ? <p className="home-reading-section__eyebrow">{eyebrow}</p> : null}
      <h2 id={titleId}>{title}</h2>
      {subtitle ? <p className="home-reading-section__subtitle">{subtitle}</p> : null}
      {imageOnly ? (
        <div className="home-reading-section__viewport" aria-label={title}>
          <div className="home-reading-section__track">
            {imageCards?.map((card) => (
              <article
                className="home-reading-export-card"
                key={card.src}
                style={card.width ? ({ '--home-export-width': `${card.width}px` } as CSSProperties) : undefined}
              >
                <img src={card.src} alt={card.alt} />
              </article>
            ))}
          </div>
        </div>
      ) : (
        <div className="home-reading-section__grid">
          {articles.map((article) => (
            <article className="home-reading-card" key={`${title}-${article.title}`}>
              <PromoArticleCard article={article} />
              {variant === 'standard' ? (
                <span className="home-reading-card__metric">
                  <Eye size={18} strokeWidth={1.7} />
                  23.600
                </span>
              ) : null}
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
