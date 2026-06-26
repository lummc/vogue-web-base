import type { PromoArticle } from '../../data/mockContent';
import { PromoArticleCard } from '../cards/PromoArticleCard';
import { SectionTitle } from './SectionTitle';
import '../../styles/components.css';

type EditorialCarouselSectionProps = {
  title: string;
  articles: PromoArticle[];
};

export function EditorialCarouselSection({ title, articles }: EditorialCarouselSectionProps) {
  const titleId = title.toLowerCase().replace(/\s+/g, '-');

  return (
    <section className="editorial-carousel-section section-frame" aria-labelledby={titleId}>
      <SectionTitle id={titleId}>{title}</SectionTitle>
      <div className="editorial-carousel-section__grid">
        {articles.map((article) => (
          <PromoArticleCard key={`${article.category}-${article.title}`} article={article} />
        ))}
      </div>
    </section>
  );
}
