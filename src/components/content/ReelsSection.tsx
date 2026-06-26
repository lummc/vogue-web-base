import type { ReelItem } from '../../data/mockContent';
import { ReelCard } from '../cards/ReelCard';
import { SectionTitle } from './SectionTitle';
import '../../styles/components.css';

export function ReelsSection({ reels }: { reels: ReelItem[] }) {
  return (
    <section className="reels-section" aria-labelledby="reels-title">
      <div className="section-frame reels-section__heading">
        <SectionTitle id="reels-title">Reels destacados</SectionTitle>
      </div>
      <div className="reels-section__stage">
        <div className="reels-section__track">
          {reels.map((reel) => (
            <ReelCard key={reel.id} reel={reel} />
          ))}
        </div>
      </div>
    </section>
  );
}
