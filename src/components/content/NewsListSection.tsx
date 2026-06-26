import type { CompactNewsItemData } from '../../data/sectionContent';
import { CompactNewsItem } from './CompactNewsItem';
import { SectionTitle } from './SectionTitle';
import '../../styles/components.css';

type NewsListSectionProps = {
  title: string;
  items: CompactNewsItemData[];
};

export function NewsListSection({ title, items }: NewsListSectionProps) {
  return (
    <section className="section-block section-frame section-news-list" aria-labelledby={`${title}-title`}>
      <SectionTitle id={`${title}-title`}>{title}</SectionTitle>
      <div className="section-news-list__grid">
        {items.map((item) => (
          <CompactNewsItem key={`${item.title}-${item.date}`} item={item} />
        ))}
      </div>
    </section>
  );
}
