import type { PromoArticle } from '../../data/mockContent';
import { PromoArticleCard } from '../cards/PromoArticleCard';
import { SectionTitle } from './SectionTitle';
import '../../styles/components.css';

type EditorialFeatureStripProps = {
  title: string;
  articles: PromoArticle[];
};

export function EditorialFeatureStrip({ title, articles }: EditorialFeatureStripProps) {
  const titleId = title.toLowerCase().replace(/\s+/g, '-');

  return (
    <section className="editorial-feature-strip section-frame" aria-labelledby={titleId}>
      <SectionTitle id={titleId}>{title}</SectionTitle>
      <div className="editorial-feature-strip__grid">
        {articles.map((article) => (
          <PromoArticleCard key={`${article.category}-${article.title}`} article={article} variant="compact" />
        ))}
      </div>
    </section>
  );
}
