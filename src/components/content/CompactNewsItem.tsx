import type { CompactNewsItemData } from '../../data/sectionContent';
import '../../styles/components.css';

export function CompactNewsItem({ item }: { item: CompactNewsItemData }) {
  return (
    <article className="compact-news-item">
      <div
        className={`compact-news-item__media compact-news-item__media--${item.imageTone}`}
        role="img"
        aria-label={item.imageAlt}
      >
        {item.imageSrc ? <img src={item.imageSrc} alt={item.imageAlt} /> : null}
      </div>
      <div>
        <p className="compact-news-item__category">{item.category}</p>
        <h3 className="compact-news-item__title">{item.title}</h3>
        <p className="compact-news-item__meta">{item.author}</p>
        <p className="compact-news-item__date">{item.date}</p>
      </div>
    </article>
  );
}
