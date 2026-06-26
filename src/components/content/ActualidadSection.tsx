import type { Article } from '../../data/mockContent';
import { FeaturedArticleCard } from '../cards/FeaturedArticleCard';
import { RecuadroCard } from '../cards/RecuadroCard';
import { SectionTitle } from './SectionTitle';
import '../../styles/components.css';

type ActualidadSectionProps = {
  smallCards: Article[];
  featured: Article;
};

export function ActualidadSection({ smallCards, featured }: ActualidadSectionProps) {
  return (
    <section className="actualidad-section section-frame" aria-labelledby="actualidad-title">
      <SectionTitle id="actualidad-title">Actualidad</SectionTitle>
      <div className="actualidad-section__grid">
        {smallCards.map((article) => (
          <RecuadroCard key={`${article.title}-${article.date}`} article={article} />
        ))}
        <FeaturedArticleCard article={featured} />
      </div>
    </section>
  );
}
