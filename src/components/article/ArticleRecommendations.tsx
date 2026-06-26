import { Play } from 'lucide-react';
import type { ArticleContent } from '../../data/articleContent';
import { LookVoteCard } from '../cards/LookVoteCard';
import { PromoArticleCard } from '../cards/PromoArticleCard';
import '../../styles/components.css';

export function ArticleRecommendations({ recommendations }: { recommendations: ArticleContent['recommendations'] }) {
  return (
    <section className="article-recommendations section-frame" aria-labelledby="article-recommendations-title">
      <h2 id="article-recommendations-title">{recommendations.title}</h2>
      <p className="article-recommendations__dek">Camila Cabello tambien aparece en:</p>
      <article className={`article-recommendations__featured article-recommendations__featured--${recommendations.featuredImageTone}`}>
        {recommendations.featuredImageSrc ? (
          <img src={recommendations.featuredImageSrc} alt={recommendations.featuredImageAlt} />
        ) : null}
        <span className="article-recommendations__play" aria-hidden="true">
          <Play size={48} fill="currentColor" strokeWidth={1.4} />
        </span>
        <h3>{recommendations.featuredTitle}</h3>
      </article>
      {recommendations.favoriteCarousel ? (
        <div className="article-favorite-carousel" aria-label={recommendations.favoriteCarousel.title}>
          <div className="article-favorite-carousel__heading">
            <h3>{recommendations.favoriteCarousel.title}</h3>
            <p>{recommendations.favoriteCarousel.subtitle}</p>
          </div>
          <div className="article-favorite-carousel__track">
            {recommendations.favoriteCarousel.looks.map((look) => (
              <LookVoteCard key={look.id} look={look} />
            ))}
          </div>
        </div>
      ) : null}
      <p className="article-recommendations__eyebrow">{recommendations.eyebrow}</p>
      <div className="article-recommendations__carousel">
        {recommendations.articles.map((article) => (
          <PromoArticleCard key={`${article.category}-${article.title}`} article={article} />
        ))}
      </div>
    </section>
  );
}
