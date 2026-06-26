import type { LookVote } from '../../data/mockContent';
import { LookVoteCard } from '../cards/LookVoteCard';
import '../../styles/components.css';

type VogueChoiceSectionProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
  looks: LookVote[];
};

export function VogueChoiceSection({ eyebrow, title, subtitle, looks }: VogueChoiceSectionProps) {
  return (
    <section className="vogue-choice">
      <hr className="vogue-choice__rule" />
      <div className="vogue-choice__copy">
        <p className="vogue-choice__eyebrow">{eyebrow}</p>
        <h2 className="vogue-choice__title">{title}</h2>
        <p className="vogue-choice__subtitle">{subtitle}</p>
      </div>
      <div className="vogue-choice__viewport" aria-label="Looks para votar">
        <div className="vogue-choice__track">
          {looks.map((look) => (
            <LookVoteCard key={look.id} look={look} />
          ))}
        </div>
      </div>
    </section>
  );
}
