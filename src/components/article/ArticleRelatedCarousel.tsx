import type { ArticleContent } from '../../data/articleContent';
import { LookVoteCard } from '../cards/LookVoteCard';
import { PromoArticleCard } from '../cards/PromoArticleCard';
import '../../styles/components.css';

export function ArticleRelatedCarousel({ longform }: { longform: NonNullable<ArticleContent['longform']> }) {
  return (
    <section className="article-related-carousel section-frame">
      <div className="article-favorite-carousel">
        <div className="article-favorite-carousel__heading">
          <h3>{longform.favoriteCarousel.title}</h3>
          <p>{longform.favoriteCarousel.subtitle}</p>
        </div>
        <div className="article-favorite-carousel__track" aria-label={longform.favoriteCarousel.title}>
          {longform.favoriteCarousel.looks.map((look) => (
            <LookVoteCard look={look} key={look.id} />
          ))}
        </div>
      </div>

      <p className="article-recommendations__eyebrow">{longform.relatedEyebrow}</p>
      <div className="article-recommendations__carousel" aria-label={longform.relatedEyebrow}>
        {longform.relatedArticles.map((article) => (
          <PromoArticleCard article={article} key={article.title} />
        ))}
      </div>
    </section>
  );
}
