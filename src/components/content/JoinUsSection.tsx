import type { PromoArticle } from '../../data/mockContent';
import '../../styles/components.css';

type JoinUsSectionProps = {
  item: PromoArticle;
  homeLayout?: boolean;
  secondaryItems?: PromoArticle[];
};

export function JoinUsSection({ item, homeLayout = false, secondaryItems = [] }: JoinUsSectionProps) {
  const editorialLayout = secondaryItems.length > 0;

  return (
    <section
      className={`join-us-section section-frame${editorialLayout ? ' join-us-section--editorial' : ''}`}
      aria-labelledby="join-us-title"
    >
      {homeLayout || editorialLayout ? (
        <h2 className="section-title join-us-section__heading" id="join-us-title">
          {item.title}
        </h2>
      ) : null}
      <div className={`join-us-section__media join-us-section__media--${item.imageTone}`} role="img" aria-label={item.imageAlt}>
        {item.imageSrc ? <img src={item.imageSrc} alt={item.imageAlt} /> : null}
      </div>
      <div className="join-us-section__content">
        <p className="join-us-section__category">{item.category}</p>
        {!homeLayout && !editorialLayout ? (
          <h2 className="join-us-section__title" id="join-us-title">
            {item.title}
          </h2>
        ) : null}
        <p className="join-us-section__kicker">{item.kicker}</p>
        <p className="join-us-section__meta">{item.author}</p>
        <p className="join-us-section__date">{item.date}</p>
      </div>
      {editorialLayout ? (
        <div className="join-us-section__secondary-list">
          {secondaryItems.map((secondary) => (
            <article className="join-us-section__secondary" key={secondary.title}>
              <div
                className={`join-us-section__secondary-media join-us-section__media--${secondary.imageTone}`}
                role="img"
                aria-label={secondary.imageAlt}
              >
                {secondary.imageSrc ? <img src={secondary.imageSrc} alt={secondary.imageAlt} /> : null}
              </div>
              <div className="join-us-section__secondary-content">
                <p className="join-us-section__category">{secondary.category}</p>
                <h3>{secondary.title}</h3>
                <p className="join-us-section__meta">{secondary.author}</p>
                <p className="join-us-section__date">{secondary.date}</p>
              </div>
            </article>
          ))}
        </div>
      ) : null}
    </section>
  );
}
