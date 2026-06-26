import type { SectionHeroData } from '../../data/sectionContent';
import { routePath } from '../../utils/routes';
import '../../styles/components.css';

export function SectionHero({ hero }: { hero: SectionHeroData }) {
  const content = (
    <>
      <div className="section-hero__image" role="img" aria-label={hero.imageAlt}>
        {hero.imageSrc ? <img src={hero.imageSrc} alt={hero.imageAlt} /> : null}
      </div>
      <div className="section-hero__copy">
        <p className="section-hero__category">{hero.category}</p>
        <h1 className="section-hero__title">{hero.title}</h1>
        <p className="section-hero__author">{hero.author}</p>
        <p className="section-hero__date">{hero.date}</p>
      </div>
    </>
  );

  return (
    <section className={`section-hero section-hero--${hero.imageTone}`} aria-label={hero.title}>
      {hero.href ? (
        <a className="section-hero__link" href={routePath(hero.href)}>
          {content}
        </a>
      ) : (
        content
      )}
    </section>
  );
}
