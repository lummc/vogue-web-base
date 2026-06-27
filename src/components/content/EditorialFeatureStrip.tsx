import { useEffect, useRef, useState } from 'react';
import type { PromoArticle } from '../../data/mockContent';
import { routePath } from '../../utils/routes';
import { SectionTitle } from './SectionTitle';
import '../../styles/components.css';

type EditorialFeatureStripProps = {
  title: string;
  articles: PromoArticle[];
};

export function EditorialFeatureStrip({ title, articles }: EditorialFeatureStripProps) {
  const titleId = title.toLowerCase().replace(/\s+/g, '-');
  const resumeTimerRef = useRef<number | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const goToSlide = (nextIndex: number) => {
    const total = articles.length;

    if (!total) {
      return;
    }

    const normalizedIndex = (nextIndex + total) % total;
    setActiveIndex(normalizedIndex);
  };

  const pauseTemporarily = () => {
    setPaused(true);

    if (resumeTimerRef.current) {
      window.clearTimeout(resumeTimerRef.current);
    }

    resumeTimerRef.current = window.setTimeout(() => {
      setPaused(false);
    }, 3500);
  };

  useEffect(() => {
    if (paused || articles.length <= 1) {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % articles.length);
    }, 4500);

    return () => window.clearInterval(intervalId);
  }, [articles.length, paused]);

  useEffect(
    () => () => {
      if (resumeTimerRef.current) {
        window.clearTimeout(resumeTimerRef.current);
      }
    },
    [],
  );

  return (
    <section className="editorial-feature-strip section-frame" aria-labelledby={titleId}>
      <SectionTitle id={titleId}>{title}</SectionTitle>
      <div
        className="editorial-feature-strip__viewport"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onPointerDown={pauseTemporarily}
      >
        {articles.map((article, index) => {
          const relativeIndex = (index - activeIndex + articles.length) % articles.length;
          const positionClass =
            relativeIndex === 0
              ? 'is-active'
              : relativeIndex === 1
                ? 'is-next'
                : relativeIndex === articles.length - 1
                  ? 'is-previous'
                  : 'is-hidden';

          return (
            <div
              className={`editorial-feature-strip__slide ${positionClass}`}
              data-feature-slide
              key={`${article.category}-${article.title}`}
            >
              <article
                className={`editorial-feature-strip__spotlight editorial-feature-strip__spotlight--${article.imageTone}`}
              >
                {article.imageSrc ? <img src={article.imageSrc} alt={article.imageAlt} /> : null}
                <div className="editorial-feature-strip__content">
                  <p className="editorial-feature-strip__category">{article.category}</p>
                  <h3>{article.title}</h3>
                  {article.kicker ? <p className="editorial-feature-strip__kicker">{article.kicker}</p> : null}
                  {article.author ? <p className="editorial-feature-strip__meta">{article.author}</p> : null}
                  {article.date ? <p className="editorial-feature-strip__date">{article.date}</p> : null}
                </div>
                {article.href ? (
                  <a className="card-link card-link--fill" href={routePath(article.href)} aria-label={article.title} />
                ) : null}
              </article>
            </div>
          );
        })}
      </div>
      <div className="editorial-feature-strip__controls" aria-label="Controles de No te lo pierdas">
        <button type="button" aria-label="Anterior" onClick={() => goToSlide(activeIndex - 1)}>
          ‹
        </button>
        <button type="button" aria-label="Siguiente" onClick={() => goToSlide(activeIndex + 1)}>
          ›
        </button>
      </div>
    </section>
  );
}
