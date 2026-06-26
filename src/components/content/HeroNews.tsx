import '../../styles/components.css';
import { useState } from 'react';

export type HeroNewsItem = {
  category: string;
  title: string;
  author: string;
  date: string;
  imageAlt: string;
  imageSrc?: string;
};

export function HeroNews({ item, items }: { item: HeroNewsItem; items?: HeroNewsItem[] }) {
  const slides = items?.length ? items : [item];
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = slides[activeIndex] ?? item;

  return (
    <section className="hero-news" aria-label="Noticias principales">
      <div className="hero-news__image" role="img" aria-label={activeItem.imageAlt}>
        {activeItem.imageSrc ? <img src={activeItem.imageSrc} alt={activeItem.imageAlt} /> : null}
      </div>
      <div className="hero-news__copy">
        <p className="hero-news__category">{activeItem.category}</p>
        <h1 className="hero-news__title">{activeItem.title}</h1>
        <p className="hero-news__author">{activeItem.author}</p>
        <p className="hero-news__date">{activeItem.date}</p>
      </div>
      {slides.length > 1 ? (
        <div className="hero-news__controls" aria-label="Noticias principales">
          {slides.map((slide, index) => (
            <button
              type="button"
              aria-label={`Ver noticia ${index + 1}: ${slide.title}`}
              aria-pressed={index === activeIndex}
              data-active={index === activeIndex}
              key={`${slide.title}-${index}`}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      ) : null}
    </section>
  );
}
