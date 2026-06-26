import type { Article } from '../../data/mockContent';
import '../../styles/components.css';

export function ArticleCardLarge({ article }: { article: Article }) {
  return (
    <article className="article-card-large">
      <div className="article-card-large__media" role="img" aria-label={article.imageAlt} />
      <div className="article-card__category">{article.category}</div>
      <h2 className="article-card-large__title">{article.title}</h2>
      <p className="article-card__meta">{article.author}</p>
      <p className="article-card__meta">{article.date}</p>
    </article>
  );
}
