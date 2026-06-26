import type { PromoArticle } from '../../data/mockContent';
import { PromoArticleCard } from '../cards/PromoArticleCard';
import { SectionTitle } from './SectionTitle';
import '../../styles/components.css';

type MixedFeatureGridProps = {
  title: string;
  articles: PromoArticle[];
  featured: PromoArticle;
};

export function MixedFeatureGrid({ title, articles, featured }: MixedFeatureGridProps) {
  return (
    <section className="section-block section-frame" aria-labelledby={`${title}-title`}>
      <SectionTitle id={`${title}-title`}>{title}</SectionTitle>
      <div className="section-mixed-grid">
        <div className="section-mixed-grid__small">
          {articles.map((article) => (
            <PromoArticleCard key={`${article.category}-${article.title}`} article={article} variant="compact" />
          ))}
        </div>
        <article className={`section-mixed-feature section-mixed-feature--${featured.imageTone}`}>
          {featured.imageSrc ? <img src={featured.imageSrc} alt={featured.imageAlt} /> : null}
          <div className="section-mixed-feature__content">
            <p className="section-mixed-feature__category">{featured.category}</p>
            <h3 className="section-mixed-feature__title">{featured.title}</h3>
            {featured.author ? <p className="section-mixed-feature__meta">{featured.author}</p> : null}
            {featured.date ? <p className="section-mixed-feature__date">{featured.date}</p> : null}
          </div>
        </article>
      </div>
    </section>
  );
}
