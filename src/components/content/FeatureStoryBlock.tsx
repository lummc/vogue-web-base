import type { PromoArticle } from '../../data/mockContent';
import { SectionTitle } from './SectionTitle';
import '../../styles/components.css';

type FeatureStoryBlockProps = {
  title: string;
  story: PromoArticle;
  secondary: PromoArticle;
};

export function FeatureStoryBlock({ title, story, secondary }: FeatureStoryBlockProps) {
  return (
    <section className="section-block section-frame" aria-labelledby={`${title}-title`}>
      <SectionTitle id={`${title}-title`}>{title}</SectionTitle>
      <div className="feature-story-block">
        <div
          className={`feature-story-block__media feature-story-block__media--${story.imageTone}`}
          role="img"
          aria-label={story.imageAlt}
        >
          {story.imageSrc ? <img src={story.imageSrc} alt={story.imageAlt} /> : null}
        </div>
        <article className="feature-story-block__copy">
          <p className="feature-story-block__category">{story.category}</p>
          <h3 className="feature-story-block__title">{story.title}</h3>
          {story.kicker ? <p className="feature-story-block__kicker">{story.kicker}</p> : null}
          {story.author ? <p className="feature-story-block__meta">{story.author}</p> : null}
          {story.date ? <p className="feature-story-block__date">{story.date}</p> : null}
        </article>
        <article className={`feature-story-block__wide feature-story-block__wide--${secondary.imageTone}`}>
          {secondary.imageSrc ? <img src={secondary.imageSrc} alt={secondary.imageAlt} /> : null}
          <div className="feature-story-block__wide-content">
            <p className="feature-story-block__category">{secondary.category}</p>
            <h3 className="feature-story-block__wide-title">{secondary.title}</h3>
            {secondary.kicker ? <p className="feature-story-block__wide-kicker">{secondary.kicker}</p> : null}
          </div>
        </article>
      </div>
    </section>
  );
}
