import type { LookVote } from '../../data/mockContent';
import { LookVoteCard } from '../cards/LookVoteCard';
import { SectionTitle } from './SectionTitle';
import '../../styles/components.css';

type TrendCarouselSectionProps = {
  title: string;
  subtitle?: string;
  looks: LookVote[];
};

export function TrendCarouselSection({ title, subtitle, looks }: TrendCarouselSectionProps) {
  return (
    <section className="section-block section-frame" aria-labelledby={`${title}-title`}>
      <div className="section-title-row">
        <SectionTitle id={`${title}-title`}>{title}</SectionTitle>
        {subtitle ? <p className="section-title-row__subtitle">{subtitle}</p> : null}
      </div>
      <div className="section-trend-carousel">
        {looks.map((look) => (
          <LookVoteCard key={look.id} look={look} />
        ))}
      </div>
    </section>
  );
}
