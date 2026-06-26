import { useEffect, useRef, useState } from 'react';
import type { PromoArticle } from '../../data/mockContent';
import { PromoArticleCard } from '../cards/PromoArticleCard';
import { SectionTitle } from './SectionTitle';
import '../../styles/components.css';

type EditorialFeatureStripProps = {
  title: string;
  articles: PromoArticle[];
};

export function EditorialFeatureStrip({ title, articles }: EditorialFeatureStripProps) {
  const titleId = title.toLowerCase().replace(/\s+/g, '-');
  const viewportRef = useRef<HTMLDivElement>(null);
  const resumeTimerRef = useRef<number | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const goToSlide = (nextIndex: number) => {
    const total = articles.length;

    if (!total) {
      return;
    }

    const normalizedIndex = (nextIndex + total) % total;
    const viewport = viewportRef.current;
    const slide = viewport?.querySelector<HTMLElement>('[data-feature-slide]');

    setActiveIndex(normalizedIndex);

    if (viewport && slide) {
      const styles = window.getComputedStyle(viewport);
      const gap = Number.parseFloat(styles.columnGap || styles.gap || '0');
      viewport.scrollTo({
        left: normalizedIndex * (slide.offsetWidth + gap),
        behavior: 'smooth',
      });
    }
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
      goToSlide(activeIndex + 1);
    }, 4500);

    return () => window.clearInterval(intervalId);
  }, [activeIndex, articles.length, paused]);

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
        ref={viewportRef}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onPointerDown={pauseTemporarily}
      >
        {articles.map((article) => (
          <div className="editorial-feature-strip__slide" data-feature-slide key={`${article.category}-${article.title}`}>
            <PromoArticleCard article={article} variant="compact" />
          </div>
        ))}
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
