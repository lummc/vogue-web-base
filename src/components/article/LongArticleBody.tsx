import type { ArticleContent } from '../../data/articleContent';
import { ArticleRelatedCarousel } from './ArticleRelatedCarousel';
import { InlineArticleImage } from './InlineArticleImage';
import '../../styles/components.css';

export function LongArticleBody({ article }: { article: ArticleContent }) {
  if (!article.longform) {
    return null;
  }

  let paragraphIndex = 0;

  return (
    <>
      <article className="long-article-body">
        <div className="long-article-body__content">
          {article.longform.blocks.map((block, index) => {
            if (block.type === 'heading') {
              return <h2 key={`${block.text}-${index}`}>{block.text}</h2>;
            }

            if (block.type === 'image') {
              return <InlineArticleImage block={block} key={`${block.imageAlt}-${index}`} />;
            }

            const isLead = paragraphIndex === 0;
            paragraphIndex += 1;

            return (
              <p className={isLead ? 'long-article-body__lead' : undefined} key={`${block.text}-${index}`}>
                {block.text}
              </p>
            );
          })}
        </div>
      </article>
      <ArticleRelatedCarousel longform={article.longform} />
    </>
  );
}
