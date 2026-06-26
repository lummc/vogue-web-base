import type { LongArticleBlock } from '../../data/articleContent';
import '../../styles/components.css';

type InlineArticleImageProps = {
  block: Extract<LongArticleBlock, { type: 'image' }>;
};

export function InlineArticleImage({ block }: InlineArticleImageProps) {
  return (
    <figure className="inline-article-image">
      <div
        className={`inline-article-image__media inline-article-image__media--${block.imageTone}`}
        role="img"
        aria-label={block.imageAlt}
      >
        {block.imageSrc ? <img src={block.imageSrc} alt={block.imageAlt} /> : null}
      </div>
      {block.caption ? <figcaption>{block.caption}</figcaption> : null}
    </figure>
  );
}
