import type { ReelItem } from '../../data/mockContent';
import { ReelCard } from '../cards/ReelCard';
import { SectionTitle } from './SectionTitle';
import '../../styles/components.css';

type SectionVideoCarouselProps = {
  title: string;
  layout?: 'wide' | 'poster';
  items: ReelItem[];
};

export function SectionVideoCarousel({ title, layout = 'wide', items }: SectionVideoCarouselProps) {
  return (
    <section className="section-block section-frame" aria-labelledby={`${title}-title`}>
      <SectionTitle id={`${title}-title`}>{title}</SectionTitle>
      <div className={`section-video-carousel section-video-carousel--${layout}`}>
        {items.map((item) => (
          <ReelCard key={item.id} reel={item} />
        ))}
      </div>
    </section>
  );
}
