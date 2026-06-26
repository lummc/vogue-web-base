import type { Article } from '../../data/mockContent';
import { routePath } from '../../utils/routes';
import '../../styles/components.css';

export function FeaturedArticleCard({ article }: { article: Article }) {
  const content = (
    <div className="featured-article-card__content">
      <div className="featured-article-card__category">{article.category}</div>
      <h3 className="featured-article-card__title">{article.title}</h3>
      <p className="featured-article-card__meta">{article.author}</p>
      <p className="featured-article-card__date">{article.date}</p>
    </div>
  );

  return (
    <article
      className={`featured-article-card featured-article-card--${article.imageTone ?? 'dark'}`}
      aria-label={article.imageAlt}
    >
      {article.imageSrc ? <img src={article.imageSrc} alt={article.imageAlt} /> : null}
      {article.href ? (
        <a className="card-link card-link--fill" href={routePath(article.href)}>
          {content}
        </a>
      ) : (
        content
      )}
    </article>
  );
}
