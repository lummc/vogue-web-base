import type { ArticleContent } from '../../data/articleContent';
import { ArticleQuoteImage } from './ArticleQuoteImage';
import { ArticleVoteBlock } from './ArticleVoteBlock';
import '../../styles/components.css';

export function ArticleBody({ article }: { article: ArticleContent }) {
  return (
    <article className="article-body">
      <div className="article-body__text">
        {article.intro.map((paragraph, index) => (
          <p className={index === 0 ? 'article-body__lead' : undefined} key={paragraph}>
            {paragraph}
          </p>
        ))}
      </div>
      <ArticleQuoteImage quoteImage={article.quoteImage} />
      <div className="article-body__text">
        {article.body.map((paragraph, index) => (
          <p key={`${paragraph}-${index}`}>{paragraph}</p>
        ))}
      </div>
      <div
        className={`article-body__full-image article-body__full-image--${article.fullImage.imageTone}`}
        role="img"
        aria-label={article.fullImage.imageAlt}
      >
        {article.fullImage.imageSrc ? <img src={article.fullImage.imageSrc} alt={article.fullImage.imageAlt} /> : null}
      </div>
      {article.vote ? <ArticleVoteBlock vote={article.vote} /> : null}
    </article>
  );
}
