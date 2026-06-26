import type { PromoArticle } from '../../data/mockContent';
import '../../styles/components.css';

export function JoinUsSection({ item, homeLayout = false }: { item: PromoArticle; homeLayout?: boolean }) {
  return (
    <section className="join-us-section section-frame" aria-labelledby="join-us-title">
      {homeLayout ? (
        <h2 className="section-title join-us-section__heading" id="join-us-title">
          {item.title}
        </h2>
      ) : null}
      <div className={`join-us-section__media join-us-section__media--${item.imageTone}`} role="img" aria-label={item.imageAlt}>
        {item.imageSrc ? <img src={item.imageSrc} alt={item.imageAlt} /> : null}
      </div>
      <div className="join-us-section__content">
        <p className="join-us-section__category">{item.category}</p>
        {!homeLayout ? (
          <h2 className="join-us-section__title" id="join-us-title">
            {item.title}
          </h2>
        ) : null}
        <p className="join-us-section__kicker">{item.kicker}</p>
        <p className="join-us-section__meta">{item.author}</p>
        <p className="join-us-section__date">{item.date}</p>
      </div>
    </section>
  );
}
