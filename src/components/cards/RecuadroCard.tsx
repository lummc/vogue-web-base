import type { Article } from '../../data/mockContent';
import '../../styles/components.css';

export function RecuadroCard({ article }: { article: Article }) {
  const content = (
    <>
      <div
        className={`recuadro-card__media recuadro-card__media--${article.imageTone ?? 'warm'}`}
        role="img"
        aria-label={article.imageAlt}
      >
        {article.imageSrc ? <img src={article.imageSrc} alt={article.imageAlt} /> : null}
      </div>
      <div className="recuadro-card__category">{article.category}</div>
      <h3 className="recuadro-card__title">{article.title}</h3>
      <p className="recuadro-card__meta">{article.author}</p>
      <p className="recuadro-card__date">{article.date}</p>
    </>
  );

  return (
    <article className="recuadro-card">
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
