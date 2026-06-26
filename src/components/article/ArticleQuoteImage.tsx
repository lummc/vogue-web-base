import type { ArticleContent } from '../../data/articleContent';
import '../../styles/components.css';

export function ArticleQuoteImage({ quoteImage }: { quoteImage: ArticleContent['quoteImage'] }) {
  return (
    <figure className="article-quote-image">
      <blockquote>
        "{quoteImage.quote}"
        <cite>{quoteImage.attribution}</cite>
      </blockquote>
      <div
        className={`article-quote-image__media article-quote-image__media--${quoteImage.imageTone}`}
        role="img"
        aria-label={quoteImage.imageAlt}
      >
        {quoteImage.imageSrc ? <img src={quoteImage.imageSrc} alt={quoteImage.imageAlt} /> : null}
      </div>
      <figcaption>{quoteImage.caption}</figcaption>
    </figure>
  );
}
