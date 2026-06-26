import type { Article } from '../../data/mockContent';
import '../../styles/components.css';

export function ArticleCard({ article }: { article: Article }) {
  return (
    <article className="article-card">
      <div className="article-card__media" role="img" aria-label={article.imageAlt} />
      <div className="article-card__category">{article.category}</div>
      <h3 className="article-card__title">{article.title}</h3>
      <p className="article-card__meta">{article.author}</p>
      <p className="article-card__meta">{article.date}</p>
    </article>
  );
}
