import type { PromoArticle } from '../../data/mockContent';
import '../../styles/components.css';

type PromoArticleCardProps = {
  article: PromoArticle;
  variant?: 'standard' | 'compact';
};

export function PromoArticleCard({ article, variant = 'standard' }: PromoArticleCardProps) {
  const content = (
    <>
      <div
        className={`promo-article-card__media promo-article-card__media--${article.imageTone}`}
        role="img"
        aria-label={article.imageAlt}
      >
        {article.imageSrc ? <img src={article.imageSrc} alt={article.imageAlt} /> : null}
      </div>
      <div className="promo-article-card__body">
        <p className="promo-article-card__category">{article.category}</p>
        <h3 className="promo-article-card__title">{article.title}</h3>
        {article.kicker ? <p className="promo-article-card__kicker">{article.kicker}</p> : null}
        {article.author ? <p className="promo-article-card__meta">{article.author}</p> : null}
        {article.date ? <p className="promo-article-card__date">{article.date}</p> : null}
      </div>
    </>
  );

  return (
    <article className={`promo-article-card promo-article-card--${variant}`}>
      {article.href ? (
        <a className="card-link" href={article.href}>
          {content}
        </a>
      ) : (
        content
      )}
    </article>
  );
}
