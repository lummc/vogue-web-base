import type { Article, PromoArticle } from '../../data/mockContent';
import { FeaturedArticleCard } from '../cards/FeaturedArticleCard';
import { PromoArticleCard } from '../cards/PromoArticleCard';
import { RecuadroCard } from '../cards/RecuadroCard';
import { SectionTitle } from './SectionTitle';
import '../../styles/components.css';

type FeaturedGridProps = {
  title: string;
  articles: Article[];
  featured: Article;
};

type ArticleCarouselProps = {
  title: string;
  articles: PromoArticle[];
};

export function FeaturedGridBlock({ title, articles, featured }: FeaturedGridProps) {
  return (
    <section className="section-block section-frame" aria-labelledby={`${title}-title`}>
      <SectionTitle id={`${title}-title`}>{title}</SectionTitle>
      <div className="section-featured-grid">
        {articles.map((article) => (
          <RecuadroCard key={`${article.title}-${article.date}`} article={article} />
        ))}
        <FeaturedArticleCard article={featured} />
      </div>
    </section>
  );
}

export function ArticleCarouselBlock({ title, articles }: ArticleCarouselProps) {
  return (
    <section className="section-block section-frame" aria-labelledby={`${title}-title`}>
      <SectionTitle id={`${title}-title`}>{title}</SectionTitle>
      <div className="section-article-carousel">
        {articles.map((article) => (
          <PromoArticleCard key={`${article.category}-${article.title}`} article={article} />
        ))}
      </div>
    </section>
  );
}
